#!/usr/bin/env python3
"""
Convert Markdown resume to PDF with preserved formatting.
Supports both full multi-page and condensed 1-page formats.
"""

import markdown
from weasyprint import HTML, CSS
from pathlib import Path


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


def md_to_pdf(input_path: str, output_path: str, one_page: bool = False):
    """Convert a markdown file to PDF with resume-appropriate styling.

    Args:
        input_path: Path to the markdown file
        output_path: Path for the output PDF
        one_page: If True, use compact 1-page styling
    """

    # Read the markdown content
    with open(input_path, "r", encoding="utf-8") as f:
        md_content = f.read()

    # Convert markdown to HTML
    html_content = markdown.markdown(
        md_content, extensions=["extra", "sane_lists"]
    )

    # Select CSS based on format
    css = CSS(string=CSS_ONE_PAGE if one_page else CSS_FULL)

    # Wrap HTML content in a proper document
    full_html = f"""
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
    </head>
    <body>
        {html_content}
    </body>
    </html>
    """

    # Generate PDF
    HTML(string=full_html).write_pdf(output_path, stylesheets=[css])
    print(f"PDF generated: {output_path}")


if __name__ == "__main__":
    # Paths
    script_dir = Path(__file__).parent
    project_root = script_dir.parent

    # Generate full resume
    input_file = project_root / "docs" / "Adriel_resume.md"
    output_file = project_root / "docs" / "Adriel_resume.pdf"
    md_to_pdf(str(input_file), str(output_file), one_page=False)

    # Generate 1-page resume
    input_file_1p = project_root / "docs" / "Adriel_resume_1pager.md"
    output_file_1p = project_root / "docs" / "Adriel_resume_1pager.pdf"
    md_to_pdf(str(input_file_1p), str(output_file_1p), one_page=True)
