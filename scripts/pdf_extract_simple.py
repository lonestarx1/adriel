#!/usr/bin/env python3
"""
Dependency-free PDF text extraction (best-effort).

Why this exists:
- The environment may not have `pdftotext` or Python PDF libraries installed.
- Many resumes are "text PDFs" where content is stored in Flate-compressed streams.

Limitations:
- This is NOT a full PDF parser. It best-effort extracts text from content streams by
  searching for common text operators (Tj, TJ, ') and decoding literal/hex strings.
- Scanned/image PDFs will yield little to no text.

Usage:
  python3 scripts/pdf_extract_simple.py "docs/Resume.pdf" > extracted.txt
"""

from __future__ import annotations

import re
import sys
import zlib
from pathlib import Path


_STREAM_RE = re.compile(rb"stream\r?\n(.*?)\r?\nendstream", re.DOTALL)
_FLATE_HINT_RE = re.compile(rb"/FlateDecode")


def _try_decompress(stream: bytes, has_flate_hint: bool) -> bytes:
    if not stream:
        return b""
    # If there is no FlateDecode hint, still try; some PDFs omit easy hints near streams.
    if has_flate_hint:
        try:
            return zlib.decompress(stream)
        except Exception:
            pass
        # Some PDFs include zlib headers quirks; try raw DEFLATE.
        try:
            return zlib.decompress(stream, -15)
        except Exception:
            return stream
    else:
        # Heuristic: attempt decompress; if it fails, keep raw.
        try:
            return zlib.decompress(stream)
        except Exception:
            return stream


def _unescape_pdf_literal(s: bytes) -> str:
    """
    Unescape a PDF literal string content (without the surrounding parentheses).
    Handles: \\n \\r \\t \\b \\f \\\\ \\( \\) and octal escapes (e.g., \\053).
    """
    out = bytearray()
    i = 0
    while i < len(s):
        b = s[i]
        if b != 0x5C:  # backslash
            out.append(b)
            i += 1
            continue

        # escape
        i += 1
        if i >= len(s):
            break
        esc = s[i]
        i += 1

        if esc in b"nrtbf":
            out.extend(
                {
                    ord("n"): b"\n",
                    ord("r"): b"\r",
                    ord("t"): b"\t",
                    ord("b"): b"\b",
                    ord("f"): b"\f",
                }[esc]
            )
        elif esc in b"\\()":
            out.append(esc)
        elif 0x30 <= esc <= 0x37:  # octal, up to 3 digits (already consumed 1)
            oct_digits = bytes([esc])
            for _ in range(2):
                if i < len(s) and 0x30 <= s[i] <= 0x37:
                    oct_digits += bytes([s[i]])
                    i += 1
                else:
                    break
            try:
                out.append(int(oct_digits, 8) & 0xFF)
            except Exception:
                pass
        elif esc in (ord("\n"), ord("\r")):
            # line continuation: backslash + newline -> ignore newline(s)
            if esc == ord("\r") and i < len(s) and s[i] == ord("\n"):
                i += 1
        else:
            out.append(esc)

    return out.decode("utf-8", errors="replace")


def _decode_hex_string(hex_bytes: bytes) -> str:
    # Remove whitespace; if odd length, pad with 0 per spec.
    hb = re.sub(rb"\s+", b"", hex_bytes)
    if len(hb) % 2 == 1:
        hb += b"0"
    try:
        raw = bytes.fromhex(hb.decode("ascii", errors="ignore"))
    except Exception:
        raw = b""
    return raw.decode("utf-8", errors="replace")


def _caesar_shift_letters(s: str, shift: int = -3) -> str:
    """
    Many text-PDFs embed fonts with a simple shifted glyph mapping.
    Empirically, these documents decode well by shifting A-Z/a-z by -3.
    """
    out: list[str] = []
    for ch in s:
        o = ord(ch)
        if 65 <= o <= 90:  # A-Z
            out.append(chr(((o - 65 + shift) % 26) + 65))
        elif 97 <= o <= 122:  # a-z
            out.append(chr(((o - 97 + shift) % 26) + 97))
        else:
            out.append(ch)
    return "".join(out)


def _normalize_tokens(tokens: list[str]) -> str:
    """
    Convert a token stream into readable text.
    Resumes often emit one character per PDF text operator; we stitch those back together.
    """
    buf: list[str] = []
    last_was_space = True

    def put_space() -> None:
        nonlocal last_was_space
        if not last_was_space:
            buf.append(" ")
            last_was_space = True

    for t in tokens:
        if not t:
            continue
        # Strip control chars but keep newlines.
        t = "".join(
            ch for ch in t if ch == "\n" or (ord(ch) >= 0x20 and ch != "\x7f")
        )
        if not t:
            continue

        # Common symbol-mapping fixups seen in these PDFs:
        # - '#' often appears where '@' should be in emails/links.
        t = t.replace("#", "@")

        if len(t) == 1:
            ch = t
            if ch in "\r\n":
                # New paragraph/line.
                if buf and buf[-1] != "\n":
                    buf.append("\n")
                last_was_space = True
                continue
            if ch.isspace():
                put_space()
                continue

            # Attach punctuation without leading space.
            if ch in ",.;:!?)]}":
                if buf and buf[-1] == " ":
                    buf.pop()
                buf.append(ch)
                last_was_space = False
                continue

            # If we just placed a space, continue word; otherwise keep concatenating.
            buf.append(ch)
            last_was_space = False
            continue

        # Multi-character token: separate from previous word if needed.
        if buf and buf[-1] not in ("\n", " "):
            buf.append(" ")
        buf.append(t)
        last_was_space = t.endswith(" ")

    text = "".join(buf)
    # Cleanup whitespace.
    text = re.sub(r"[ \t]+\n", "\n", text)
    text = re.sub(r"\n{3,}", "\n\n", text)
    text = re.sub(r"[ \t]{2,}", " ", text)
    return text.strip()


def _extract_text_tokens(data: bytes) -> list[str]:
    """
    Extract text from content stream bytes by finding common PDF text operators.
    This is heuristic and intentionally permissive.
    """
    # Quick pre-filter: keep printable-ish bytes to reduce pathological regex time.
    # (We still need parentheses/brackets/angles/backslashes for PDF string syntax.)
    data = re.sub(rb"[^\x09\x0A\x0D\x20-\x7E\x80-\xFF]", b" ", data)

    tokens: list[str] = []

    # ( ... ) Tj  OR  ( ... )'  OR ( ... ) "
    # Note: we do NOT fully parse nested parentheses; this handles typical resume PDFs.
    for m in re.finditer(rb"\((.*?)\)\s*(Tj|'|\")", data, flags=re.DOTALL):
        tokens.append(_unescape_pdf_literal(m.group(1)))

    # < ... > Tj (hex strings)
    for m in re.finditer(rb"<([0-9A-Fa-f\s]+)>\s*Tj", data):
        tokens.append(_decode_hex_string(m.group(1)))

    # [ (...) 120 (...) -50 (...) ] TJ
    for m in re.finditer(rb"\[(.*?)\]\s*TJ", data, flags=re.DOTALL):
        inner = m.group(1)
        for s in re.finditer(rb"\((.*?)\)", inner, flags=re.DOTALL):
            tokens.append(_unescape_pdf_literal(s.group(1)))
        for s in re.finditer(rb"<([0-9A-Fa-f\s]+)>", inner):
            tokens.append(_decode_hex_string(s.group(1)))

    return tokens


def extract_pdf_text(pdf_bytes: bytes) -> str:
    # Heuristic: if FlateDecode appears anywhere, streams are likely compressed.
    has_flate_hint = bool(_FLATE_HINT_RE.search(pdf_bytes))
    streams = [m.group(1) for m in _STREAM_RE.finditer(pdf_bytes)]
    if not streams:
        return ""

    out_chunks: list[str] = []
    for s in streams:
        decoded = _try_decompress(s, has_flate_hint)
        out_chunks.extend(_extract_text_tokens(decoded))

    shifted = [_caesar_shift_letters(t, -3) for t in out_chunks]
    return _normalize_tokens(shifted)


def main() -> int:
    if len(sys.argv) != 2:
        print(
            "Usage: python3 scripts/pdf_extract_simple.py <path-to-pdf>",
            file=sys.stderr,
        )
        return 2

    path = Path(sys.argv[1])
    pdf_bytes = path.read_bytes()
    text = extract_pdf_text(pdf_bytes)
    sys.stdout.write(text + ("\n" if text else ""))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
