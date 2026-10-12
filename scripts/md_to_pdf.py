#!/usr/bin/env python3
"""
Convert Markdown resume to PDF with preserved formatting.
Supports both full multi-page and condensed 1-page formats.

Usage:
    python3 scripts/md_to_pdf.py               # render PDFs with WeasyPrint
    python3 scripts/md_to_pdf.py --html-only DIR
        # write standalone HTML (CSS inlined) to DIR instead, for printing
        # with headless Chrome (see scripts/render_pdfs.sh)
"""

import sys
import markdown
from pathlib import Path
from shutil import copy2


# CSS for full multi-page resume
CSS_FULL = """
    @page {
        size: Letter;
        margin: 0.6in 0.7in;
    }
    
    body {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        font-size: 10pt;
        line-height: 1.4;
        color: #1a1a1a;
    }
    
    h1 {
        font-size: 18pt;
        font-weight: 700;
        margin: 0 0 4pt 0;
        color: #000;
    }
    
    /* First h1 is "Resume" - hide it */
    h1:first-of-type {
        display: none;
    }
    
    /* Name styling */
    h1:nth-of-type(2) {
        font-size: 22pt;
        margin-bottom: 2pt;
    }
    
    h2 {
        font-size: 12pt;
        font-weight: 700;
        margin: 12pt 0 6pt 0;
        color: #000;
        text-transform: uppercase;
        border-bottom: none;
    }
    
    h3 {
        font-size: 11pt;
        font-weight: 700;
        margin: 10pt 0 4pt 0;
        color: #1a1a1a;
    }
    
    p {
        margin: 0 0 6pt 0;
    }
    
    /* Contact info line */
    h1 + p {
        margin-bottom: 2pt;
    }
    
    /* Location line */
    h1 + p + p {
        color: #444;
        margin-bottom: 8pt;
    }
    
    hr {
        border: none;
        border-top: 1px solid #ccc;
        margin: 10pt 0;
    }
    
    ul {
        margin: 0 0 6pt 0;
        padding-left: 18pt;
    }
    
    li {
        margin-bottom: 3pt;
    }
    
    /* Nested lists */
    ul ul {
        margin-top: 2pt;
        margin-bottom: 2pt;
    }
    
    strong {
        font-weight: 700;
    }
    
    a {
        color: #0066cc;
        text-decoration: none;
    }
    
    /* Tech stack paragraphs */
    p:has(strong:first-child) {
        margin-top: 6pt;
    }
    
    /* Code/technical terms */
    code {
        font-family: "SF Mono", Monaco, "Courier New", monospace;
        font-size: 9pt;
        background-color: #f5f5f5;
        padding: 1pt 3pt;
        border-radius: 2pt;
    }
"""

# CSS for compact 1-page resume
CSS_ONE_PAGE = """
    @page {
        size: Letter;
        margin: 0.4in 0.5in;
    }
    
    body {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        font-size: 9pt;
        line-height: 1.25;
        color: #1a1a1a;
    }
    
    h1 {
        font-size: 16pt;
        font-weight: 700;
        margin: 0 0 1pt 0;
        color: #000;
    }
    
    h2 {
        font-size: 10pt;
        font-weight: 700;
        margin: 5pt 0 3pt 0;
        color: #000;
        text-transform: uppercase;
        letter-spacing: 0.5pt;
    }
    
    h3 {
        font-size: 9pt;
        font-weight: 700;
        margin: 3pt 0 1pt 0;
        color: #1a1a1a;
    }
    
    p {
        margin: 0 0 2pt 0;
    }
    
    /* Contact info */
    h1 + p {
        margin-bottom: 0pt;
        color: #333;
        font-size: 9pt;
    }
    
    hr {
        border: none;
        border-top: 1px solid #999;
        margin: 4pt 0;
    }
    
    ul {
        margin: 0 0 2pt 0;
        padding-left: 14pt;
    }
    
    li {
        margin-bottom: 1pt;
    }
    
    /* Nested lists */
    ul ul {
        margin-top: 1pt;
        margin-bottom: 1pt;
    }
    
    strong {
        font-weight: 700;
    }
    
    a {
        color: #0055aa;
        text-decoration: none;
    }
    
    em {
        font-style: italic;
        color: #444;
    }
    
    /* Code/technical terms */
    code {
        font-family: "SF Mono", Monaco, "Courier New", monospace;
        font-size: 8pt;
        background-color: #f5f5f5;
        padding: 0pt 2pt;
        border-radius: 1pt;
    }
"""


def md_to_html(input_path: str, one_page: bool = False) -> str:
    """Convert a markdown resume to a standalone HTML document with inline CSS."""
    with open(input_path, "r", encoding="utf-8") as f:
        md_content = f.read()

    html_content = markdown.markdown(
        md_content, extensions=["extra", "sane_lists"]
    )
    css = CSS_ONE_PAGE if one_page else CSS_FULL

    return f"""<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <style>{css}</style>
</head>
<body>
    {html_content}
</body>
</html>
"""


def md_to_pdf(input_path: str, output_path: str, one_page: bool = False):
    """Convert a markdown file to PDF with resume-appropriate styling.

    Args:
        input_path: Path to the markdown file
        output_path: Path for the output PDF
        one_page: If True, use compact 1-page styling
    """
    # Imported lazily so --html-only works without WeasyPrint's native deps.
    from weasyprint import HTML

    HTML(string=md_to_html(input_path, one_page)).write_pdf(output_path)
    print(f"PDF generated: {output_path}")


if __name__ == "__main__":
    # Paths
    script_dir = Path(__file__).parent
    project_root = script_dir.parent
    docs_dir = project_root / "docs"
    resumes = [
        ("Adriel_resume", False),
        ("Adriel_resume_1pager", True),
    ]

    if len(sys.argv) == 3 and sys.argv[1] == "--html-only":
        out_dir = Path(sys.argv[2])
        out_dir.mkdir(parents=True, exist_ok=True)
        for name, one_page in resumes:
            out = out_dir / f"{name}.html"
            out.write_text(md_to_html(str(docs_dir / f"{name}.md"), one_page), encoding="utf-8")
            print(f"HTML generated: {out}")
        sys.exit(0)

    public_docs_dir = project_root / "public" / "docs"
    public_docs_dir.mkdir(parents=True, exist_ok=True)
    for name, one_page in resumes:
        output_file = docs_dir / f"{name}.pdf"
        md_to_pdf(str(docs_dir / f"{name}.md"), str(output_file), one_page=one_page)
        copy2(output_file, public_docs_dir / output_file.name)
