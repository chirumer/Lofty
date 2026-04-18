#!/usr/bin/env python3

from __future__ import annotations

import argparse
import json
from collections import defaultdict
from pathlib import Path


DEFAULT_CONTEXT_ROOT = Path("context/lofty_help_center")
DEFAULT_OUTPUT = DEFAULT_CONTEXT_ROOT / "LOFTY_HELP_CENTER_FULL_CONTEXT.md"


def collapse_blank_lines(value: str) -> str:
    lines = [line.rstrip() for line in value.replace("\r\n", "\n").replace("\r", "\n").split("\n")]
    cleaned: list[str] = []
    blank = False
    for line in lines:
        if line.strip():
            cleaned.append(line)
            blank = False
        elif not blank:
            cleaned.append("")
            blank = True
    return "\n".join(cleaned).strip()


def load_json(path: Path):
    with path.open("r", encoding="utf-8") as handle:
        return json.load(handle)


def extract_plain_text(article_markdown: str) -> str:
    marker = "\n## Plain Text\n"
    if marker in article_markdown:
        return article_markdown.split(marker, 1)[1].strip()
    return article_markdown.strip()


def main() -> int:
    parser = argparse.ArgumentParser(description="Build a single-file Lofty Help Center context bundle.")
    parser.add_argument("--context-root", default=str(DEFAULT_CONTEXT_ROOT), help="Path to the scraped Lofty Help Center context folder.")
    parser.add_argument("--output", default=str(DEFAULT_OUTPUT), help="Path to the combined output file.")
    args = parser.parse_args()

    context_root = Path(args.context_root).resolve()
    output_path = Path(args.output).resolve()

    summary = load_json(context_root / "summary.json")
    tree = load_json(context_root / "indexes" / "tree.json")
    article_rows = []
    with (context_root / "indexes" / "article_index.jsonl").open("r", encoding="utf-8") as handle:
        for line in handle:
            if line.strip():
                article_rows.append(json.loads(line))

    articles_by_category_section: dict[tuple[str, str], list[dict]] = defaultdict(list)
    for row in article_rows:
        articles_by_category_section[(row["category"], row["section"])].append(row)

    for rows in articles_by_category_section.values():
        rows.sort(key=lambda item: item["title"].lower())

    total_articles = summary["counts"]["articles"]
    total_sections = summary["counts"]["sections"]
    total_categories = summary["counts"]["categories"]

    parts: list[str] = []
    parts.extend(
        [
            "# Lofty Help Center Full Context",
            "",
            "This file consolidates the public Lofty Help Center into one upload-friendly reference document.",
            "",
            "It is meant for file-based AI context, not for pasting into one normal chat message.",
            "",
            "## Source Snapshot",
            "",
            f"- Source site: `{summary['source']}`",
            f"- Categories: `{total_categories}`",
            f"- Sections: `{total_sections}`",
            f"- Articles: `{total_articles}`",
            f"- Scraped at epoch: `{summary['scraped_at_epoch']}`",
            "",
            "## Category Tree",
            "",
        ]
    )

    for category in tree["categories"]:
        parts.append(f"### {category['name']} ({category['section_count']} sections)")
        parts.append("")
        for section in category["sections"]:
            parts.append(f"- {section['name']} ({section['article_count']} articles)")
        parts.append("")

    parts.extend(
        [
            "## Full Article Context",
            "",
            "Each article below includes category, section, URL, update date, and plain text content.",
            "",
        ]
    )

    article_number = 1
    for category in tree["categories"]:
        category_name = category["name"]
        parts.append(f"## Category: {category_name}")
        parts.append("")

        for section in category["sections"]:
            section_name = section["name"]
            parts.append(f"### Section: {section_name}")
            parts.append("")

            for row in articles_by_category_section.get((category_name, section_name), []):
                article_path = context_root / row["article_path"]
                article_markdown = article_path.read_text(encoding="utf-8")
                plain_text = extract_plain_text(article_markdown)
                plain_text = collapse_blank_lines(plain_text)

                parts.extend(
                    [
                        f"#### Article {article_number}: {row['title']}",
                        "",
                        f"- Article ID: `{row['id']}`",
                        f"- Category: `{row['category']}`",
                        f"- Section: `{row['section']}`",
                        f"- Updated: `{row['updated_at']}`",
                        f"- URL: {row['html_url']}",
                        "",
                        plain_text or "_No plain text content available._",
                        "",
                        "---",
                        "",
                    ]
                )
                article_number += 1

    output_path.parent.mkdir(parents=True, exist_ok=True)
    output_path.write_text("\n".join(parts), encoding="utf-8")

    print(f"Wrote combined context bundle to {output_path}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
