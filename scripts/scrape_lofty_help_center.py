#!/usr/bin/env python3

from __future__ import annotations

import argparse
import json
import re
import sys
import time
from collections import defaultdict
from dataclasses import dataclass
from pathlib import Path
from typing import Any

import requests
from bs4 import BeautifulSoup


BASE_URL = "https://help.lofty.com/api/v2/help_center/en-us"
DEFAULT_OUTPUT_DIR = Path("context/lofty_help_center")
USER_AGENT = "LoftyHelpCenterScraper/1.0 (+local context export)"


def sanitize_slug(value: str) -> str:
    slug = value.strip().lower()
    slug = re.sub(r"[^a-z0-9]+", "-", slug)
    slug = re.sub(r"-{2,}", "-", slug).strip("-")
    return slug or "untitled"


def collapse_blank_lines(value: str) -> str:
    value = value.replace("\r\n", "\n").replace("\r", "\n")
    value = re.sub(r"\n{3,}", "\n\n", value)
    return value.strip()


def html_to_text(html: str) -> str:
    if not html:
        return ""

    soup = BeautifulSoup(html, "html.parser")

    for tag in soup(["script", "style", "img", "svg", "noscript"]):
        tag.decompose()

    for anchor in soup.find_all("a"):
        text = anchor.get_text(" ", strip=True)
        href = anchor.get("href", "").strip()
        if href and text and href not in text:
            anchor.replace_with(f"{text} ({href})")
        else:
            anchor.replace_with(text)

    text = soup.get_text("\n", strip=True)
    return collapse_blank_lines(text)


def html_to_markdownish(html: str) -> str:
    if not html:
        return ""

    soup = BeautifulSoup(html, "html.parser")

    for tag in soup(["script", "style", "img", "svg", "noscript"]):
        tag.decompose()

    lines: list[str] = []

    def append(text: str = "") -> None:
        if lines and lines[-1] == "" and text == "":
            return
        lines.append(text)

    def render(node: Any) -> None:
        if getattr(node, "name", None) is None:
            text = str(node).strip()
            if text:
                append(text)
            return

        name = node.name.lower()

        if name in {"h1", "h2", "h3", "h4", "h5", "h6"}:
            level = int(name[1])
            text = node.get_text(" ", strip=True)
            if text:
                append(f"{'#' * min(level + 1, 6)} {text}")
                append("")
            return

        if name == "p":
            text = node.get_text(" ", strip=True)
            if text:
                append(text)
                append("")
            return

        if name in {"ul", "ol"}:
            for idx, item in enumerate(node.find_all("li", recursive=False), start=1):
                item_text = collapse_blank_lines(item.get_text(" ", strip=True))
                prefix = f"{idx}. " if name == "ol" else "- "
                if item_text:
                    append(prefix + item_text)
            append("")
            return

        if name == "table":
            for row in node.find_all("tr"):
                cells = [collapse_blank_lines(cell.get_text(" ", strip=True)) for cell in row.find_all(["th", "td"])]
                if any(cells):
                    append(" | ".join(cells))
            append("")
            return

        if name == "a":
            text = node.get_text(" ", strip=True)
            href = node.get("href", "").strip()
            if text and href and href not in text:
                append(f"{text} ({href})")
            elif text:
                append(text)
            return

        if name == "br":
            append("")
            return

        for child in node.children:
            render(child)

    body = soup.body or soup
    for child in body.children:
        render(child)

    return collapse_blank_lines("\n".join(lines))


@dataclass
class ApiClient:
    session: requests.Session
    pause_seconds: float = 0.15

    def fetch_all(self, resource: str, page_size: int = 100) -> list[dict[str, Any]]:
        url = f"{BASE_URL}/{resource}?page[size]={page_size}"
        items: list[dict[str, Any]] = []

        while url:
            response = self.session.get(url, timeout=30)
            response.raise_for_status()
            payload = response.json()
            key = resource.split("/")[-1]
            if key not in payload:
                raise RuntimeError(f"Expected key '{key}' in response for {url}, got {list(payload.keys())}")

            items.extend(payload[key])
            url = payload.get("links", {}).get("next")
            time.sleep(self.pause_seconds)

        return items


def build_section_map(sections: list[dict[str, Any]]) -> dict[int, dict[str, Any]]:
    return {section["id"]: section for section in sections}


def build_category_map(categories: list[dict[str, Any]]) -> dict[int, dict[str, Any]]:
    return {category["id"]: category for category in categories}


def ensure_dirs(base_dir: Path) -> dict[str, Path]:
    paths = {
        "base": base_dir,
        "raw": base_dir / "raw",
        "articles": base_dir / "articles",
        "indexes": base_dir / "indexes",
    }
    for path in paths.values():
        path.mkdir(parents=True, exist_ok=True)
    return paths


def write_json(path: Path, payload: Any) -> None:
    path.write_text(json.dumps(payload, indent=2, ensure_ascii=True) + "\n", encoding="utf-8")


def write_jsonl(path: Path, rows: list[dict[str, Any]]) -> None:
    with path.open("w", encoding="utf-8") as handle:
        for row in rows:
            handle.write(json.dumps(row, ensure_ascii=True) + "\n")


def generate_article_markdown(
    article: dict[str, Any],
    category_name: str,
    section_name: str,
) -> str:
    body_markdown = html_to_markdownish(article.get("body", ""))
    body_text = html_to_text(article.get("body", ""))

    parts = [
        f"# {article['title']}",
        "",
        f"- Article ID: `{article['id']}`",
        f"- Category: `{category_name}`",
        f"- Section: `{section_name}`",
        f"- Updated: `{article.get('updated_at', '')}`",
        f"- Source: {article.get('html_url', '')}",
        "",
        "## Body",
        "",
        body_markdown or "_No article body returned by the Help Center API._",
        "",
        "## Plain Text",
        "",
        body_text or "_No plain text extracted._",
        "",
    ]
    return "\n".join(parts)


def build_tree(
    categories: list[dict[str, Any]],
    sections: list[dict[str, Any]],
    articles: list[dict[str, Any]],
) -> dict[str, Any]:
    sections_by_category: dict[int, list[dict[str, Any]]] = defaultdict(list)
    articles_by_section: dict[int, list[dict[str, Any]]] = defaultdict(list)

    for section in sections:
        sections_by_category[section["category_id"]].append(section)

    for article in articles:
        articles_by_section[article["section_id"]].append(article)

    categories_sorted = sorted(categories, key=lambda item: (item.get("position", 0), item["name"]))
    sections_sorted = {key: sorted(value, key=lambda item: (item.get("position", 0), item["name"])) for key, value in sections_by_category.items()}
    articles_sorted = {key: sorted(value, key=lambda item: (item.get("position", 0), item["title"])) for key, value in articles_by_section.items()}

    tree: list[dict[str, Any]] = []
    for category in categories_sorted:
        category_sections = []
        for section in sections_sorted.get(category["id"], []):
            section_articles = [
                {
                    "id": article["id"],
                    "title": article["title"],
                    "html_url": article["html_url"],
                    "updated_at": article.get("updated_at"),
                }
                for article in articles_sorted.get(section["id"], [])
            ]
            category_sections.append(
                {
                    "id": section["id"],
                    "name": section["name"],
                    "article_count": len(section_articles),
                    "articles": section_articles,
                }
            )
        tree.append(
            {
                "id": category["id"],
                "name": category["name"],
                "section_count": len(category_sections),
                "sections": category_sections,
            }
        )

    return {"categories": tree}


def main() -> int:
    parser = argparse.ArgumentParser(description="Scrape the public Lofty Help Center into local context files.")
    parser.add_argument("--output-dir", default=str(DEFAULT_OUTPUT_DIR), help="Directory where scraped files will be written.")
    args = parser.parse_args()

    output_dir = Path(args.output_dir).resolve()
    paths = ensure_dirs(output_dir)

    session = requests.Session()
    session.headers.update({"User-Agent": USER_AGENT, "Accept": "application/json"})

    client = ApiClient(session=session)

    categories = client.fetch_all("categories")
    sections = client.fetch_all("sections")
    articles = client.fetch_all("articles")

    category_map = build_category_map(categories)
    section_map = build_section_map(sections)

    write_json(paths["raw"] / "categories.json", categories)
    write_json(paths["raw"] / "sections.json", sections)
    write_json(paths["raw"] / "articles.json", articles)
    write_json(paths["indexes"] / "tree.json", build_tree(categories, sections, articles))

    article_index_rows: list[dict[str, Any]] = []

    for article in articles:
        section = section_map.get(article["section_id"], {})
        category = category_map.get(section.get("category_id"), {})
        category_name = category.get("name", "uncategorized")
        section_name = section.get("name", "unsectioned")

        category_dir = paths["articles"] / sanitize_slug(category_name)
        section_dir = category_dir / sanitize_slug(section_name)
        section_dir.mkdir(parents=True, exist_ok=True)

        article_filename = f"{article['id']}-{sanitize_slug(article['title'])}.md"
        article_path = section_dir / article_filename
        article_markdown = generate_article_markdown(article, category_name, section_name)
        article_path.write_text(article_markdown, encoding="utf-8")

        body_text = html_to_text(article.get("body", ""))
        article_index_rows.append(
            {
                "id": article["id"],
                "title": article["title"],
                "html_url": article["html_url"],
                "category": category_name,
                "section": section_name,
                "updated_at": article.get("updated_at"),
                "article_path": str(article_path.relative_to(output_dir)),
                "text_excerpt": body_text[:500],
            }
        )

    article_index_rows.sort(key=lambda item: (item["category"], item["section"], item["title"]))
    write_jsonl(paths["indexes"] / "article_index.jsonl", article_index_rows)

    summary = {
        "scraped_at_epoch": int(time.time()),
        "source": "https://help.lofty.com/hc/en-us",
        "counts": {
            "categories": len(categories),
            "sections": len(sections),
            "articles": len(articles),
        },
        "paths": {
            "raw": "raw",
            "articles": "articles",
            "indexes": "indexes",
        },
    }
    write_json(paths["base"] / "summary.json", summary)

    readme = "\n".join(
        [
            "# Lofty Help Center Context Dump",
            "",
            "This folder contains a local scrape of the public Lofty Help Center.",
            "",
            "## Contents",
            "",
            "- `summary.json`: scrape timestamp and counts",
            "- `raw/categories.json`: raw category records from the Help Center API",
            "- `raw/sections.json`: raw section records from the Help Center API",
            "- `raw/articles.json`: raw article records, including article HTML bodies",
            "- `indexes/tree.json`: categories -> sections -> article titles",
            "- `indexes/article_index.jsonl`: flat article index with local markdown paths",
            "- `articles/...`: one markdown file per article",
            "",
            "## Suggested Usage",
            "",
            "- Search article titles with `rg \"keyword\" indexes/article_index.jsonl`",
            "- Search article bodies with `rg \"keyword\" articles`",
            "- Open an article directly from `articles/<category>/<section>/...`",
            "",
            "## Source",
            "",
            "- Help Center home: https://help.lofty.com/hc/en-us",
            "- Public API base: https://help.lofty.com/api/v2/help_center/en-us",
            "",
            "## Counts",
            "",
            f"- Categories: {len(categories)}",
            f"- Sections: {len(sections)}",
            f"- Articles: {len(articles)}",
            "",
        ]
    )
    (paths["base"] / "README.md").write_text(readme + "\n", encoding="utf-8")

    print(f"Scraped {len(categories)} categories, {len(sections)} sections, and {len(articles)} articles into {output_dir}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
