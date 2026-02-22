#!/usr/bin/env python3
"""
Merge the PDF certificates inside CERTIFICATES/ into a single PDF.

Default order:
1) CERTIFICATES/AWS Certified Solutions Architect - Associate certificate.pdf
2) CERTIFICATES/GCP Fundamentals.pdf
3) Remaining PDFs (alphabetical by filename)

The merged output is written to docs/Certificates.pdf and copied to public/docs/
so it can be served by the site (mirrors the resume PDF flow).

Usage:
  python3 scripts/merge_certificates.py
  python3 scripts/merge_certificates.py --output "docs/Certificates.pdf"
  python3 scripts/merge_certificates.py --no-public-copy
"""

from __future__ import annotations

import argparse
import sys
from pathlib import Path
from shutil import copy2


def _import_pdf_lib():
    try:
        from pypdf import PdfReader, PdfWriter  # type: ignore[import-not-found]

        return PdfReader, PdfWriter, "pypdf"
    except ImportError:
        try:
            from PyPDF2 import PdfReader, PdfWriter  # type: ignore[import-not-found]

            return PdfReader, PdfWriter, "PyPDF2"
        except ImportError as e:
            raise SystemExit(
                "Missing PDF dependency.\n\n"
                "Install one of:\n"
                "  python3 -m pip install pypdf\n"
                "  python3 -m pip install PyPDF2\n"
            ) from e


def _pdfs_in_dir(certificates_dir: Path) -> list[Path]:
    if not certificates_dir.exists() or not certificates_dir.is_dir():
        raise SystemExit(
            f"Certificates directory not found: {certificates_dir}"
        )

    pdfs = [
        p
        for p in certificates_dir.iterdir()
        if p.is_file() and p.suffix.lower() == ".pdf"
    ]
    return sorted(pdfs, key=lambda p: p.name.casefold())


def _resolve_by_name(pdfs: list[Path], filename: str) -> Path | None:
    # Exact match
    for p in pdfs:
        if p.name == filename:
            return p
    # Case-insensitive match (helpful across different OS/file naming)
    target = filename.casefold()
    for p in pdfs:
        if p.name.casefold() == target:
            return p
    return None


def _ordered_inputs(certificates_dir: Path, output_path: Path) -> list[Path]:
    pdfs = _pdfs_in_dir(certificates_dir)

    # Avoid accidentally re-merging the output if it lives in the input dir.
    try:
        output_resolved = output_path.resolve()
    except FileNotFoundError:
        output_resolved = output_path.absolute()
    pdfs = [p for p in pdfs if p.resolve() != output_resolved]

    explicit_first = [
        "AWS Certified Solutions Architect - Associate certificate.pdf",
        "GCP Fundamentals.pdf",
    ]

    ordered: list[Path] = []
    used: set[Path] = set()

    for name in explicit_first:
        match = _resolve_by_name(pdfs, name)
        if match is None:
            print(
                f"Warning: missing expected file: {certificates_dir / name}",
                file=sys.stderr,
            )
            continue
        ordered.append(match)
        used.add(match)

    remaining = [p for p in pdfs if p not in used]
    remaining.sort(key=lambda p: p.name.casefold())
    ordered.extend(remaining)

    if not ordered:
        raise SystemExit(f"No PDFs found in: {certificates_dir}")

    return ordered


def merge_pdfs(
    input_paths: list[Path], output_path: Path
) -> tuple[int, int, str]:
    PdfReader, PdfWriter, lib_name = _import_pdf_lib()

    writer = PdfWriter()
    total_pages = 0
    for path in input_paths:
        reader = PdfReader(str(path))
        for page in reader.pages:
            writer.add_page(page)
            total_pages += 1

    output_path.parent.mkdir(parents=True, exist_ok=True)
    with output_path.open("wb") as f:
        writer.write(f)

    return len(input_paths), total_pages, lib_name


def main() -> int:
    script_dir = Path(__file__).resolve().parent
    project_root = script_dir.parent

    parser = argparse.ArgumentParser(
        description="Merge certificate PDFs into one PDF."
    )
    parser.add_argument(
        "--input-dir",
        type=Path,
        default=project_root / "CERTIFICATES",
        help="Directory containing certificate PDFs (default: CERTIFICATES/).",
    )
    parser.add_argument(
        "--output",
        type=Path,
        default=project_root / "docs" / "Certificates.pdf",
        help="Output PDF path (default: docs/Certificates.pdf).",
    )
    parser.add_argument(
        "--public-docs-dir",
        type=Path,
        default=project_root / "public" / "docs",
        help="Where to copy the merged PDF for hosting (default: public/docs/).",
    )
    parser.add_argument(
        "--no-public-copy",
        action="store_true",
        help="Do not copy the merged PDF into public/docs/.",
    )
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="Print the merge order without writing output.",
    )

    args = parser.parse_args()

    output_path: Path = args.output
    if output_path.suffix.lower() != ".pdf":
        output_path = output_path.with_suffix(".pdf")

    input_paths = _ordered_inputs(args.input_dir, output_path)

    if args.dry_run:
        print("Merge order:")
        for p in input_paths:
            print(f"- {p}")
        return 0

    pdf_count, page_count, lib_name = merge_pdfs(input_paths, output_path)
    print(
        f"Merged {pdf_count} PDFs ({page_count} pages) using {lib_name}: {output_path}"
    )

    if not args.no_public_copy:
        args.public_docs_dir.mkdir(parents=True, exist_ok=True)
        dest = args.public_docs_dir / output_path.name
        copy2(output_path, dest)
        print(f"Copied to: {dest}")

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
