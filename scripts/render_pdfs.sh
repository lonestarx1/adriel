#!/usr/bin/env bash
# Render all resume PDFs with headless Chrome and copy them into public/docs.
#
#   English: docs/Adriel_resume.md, docs/Adriel_resume_1pager.md
#            (markdown -> HTML via md_to_pdf.py --html-only, then Chrome)
#   Korean:  docs/ko/Adriel_resume_ko.html (이력서 + 경력기술서)
#            docs/ko/Adriel_cover_letter_ko.html (자기소개서, not linked on the site)
#
# Usage: scripts/render_pdfs.sh
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
CHROME="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

print_pdf() {
  # $1 = source HTML, $2 = output PDF
  "$CHROME" --headless --disable-gpu --no-pdf-header-footer \
    --virtual-time-budget=10000 \
    --print-to-pdf="$2" "file://$1" 2>/dev/null
  echo "PDF generated: $2"
}

python3 "$ROOT/scripts/md_to_pdf.py" --html-only "$TMP"
print_pdf "$TMP/Adriel_resume.html" "$ROOT/docs/Adriel_resume.pdf"
print_pdf "$TMP/Adriel_resume_1pager.html" "$ROOT/docs/Adriel_resume_1pager.pdf"

print_pdf "$ROOT/docs/ko/Adriel_resume_ko.html" "$ROOT/docs/ko/Adriel_resume_ko.pdf"
print_pdf "$ROOT/docs/ko/Adriel_cover_letter_ko.html" "$ROOT/docs/ko/Adriel_cover_letter_ko.pdf"

mkdir -p "$ROOT/public/docs"
cp "$ROOT/docs/Adriel_resume.pdf" "$ROOT/docs/Adriel_resume_1pager.pdf" \
   "$ROOT/docs/ko/Adriel_resume_ko.pdf" "$ROOT/public/docs/"
