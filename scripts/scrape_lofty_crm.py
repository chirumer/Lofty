#!/usr/bin/env python3

from __future__ import annotations

import argparse
import hashlib
import json
import re
import sys
import time
from collections import defaultdict
from dataclasses import dataclass
from pathlib import Path
from typing import Any
from urllib.parse import urljoin, urlparse, urlunparse

import requests
from bs4 import BeautifulSoup

try:
    from playwright.sync_api import Error as PlaywrightError
    from playwright.sync_api import TimeoutError as PlaywrightTimeoutError
    from playwright.sync_api import sync_playwright
except Exception:  # pragma: no cover - handled at runtime
    sync_playwright = None
    PlaywrightError = Exception
    PlaywrightTimeoutError = Exception


DEFAULT_BASE_URL = "https://crm.lofty.com"
DEFAULT_OUTPUT_DIR = Path("context/lofty_crm")
DEFAULT_CHROME_PATH = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
USER_AGENT = "LoftyCrmScraper/1.0 (+local context export)"
SETTLE_MS = 2500
MAX_ITEMS_PER_LIST = 20
MAX_DETAIL_LINKS_PER_MODULE = 1
SENSITIVE_VALUE_KEYS = {
    "address",
    "addresses",
    "content",
    "description",
    "email",
    "emails",
    "first_name",
    "firstname",
    "full_name",
    "fullname",
    "last_name",
    "lastname",
    "lead_id",
    "leadid",
    "message",
    "messages",
    "mobile",
    "name",
    "names",
    "note",
    "notes",
    "phone",
    "phones",
    "text",
}
MUTATING_VERBS = {
    "add",
    "assign",
    "create",
    "delete",
    "edit",
    "export",
    "import",
    "invite",
    "merge",
    "new",
    "publish",
    "remove",
    "save",
    "send",
    "submit",
    "upload",
}
MODULE_CONFIGS = [
    {"module": "dashboard", "label": "Dashboard", "fallback_paths": ["/admin/home/"]},
    {"module": "people", "label": "People", "fallback_paths": ["/admin/people/", "/admin/contact/", "/admin/contacts/"]},
    {"module": "transactions", "label": "Transactions", "fallback_paths": ["/admin/transactions/", "/admin/transaction/"]},
    {"module": "calendar", "label": "Calendar", "fallback_paths": ["/admin/calendar/"]},
    {"module": "listings", "label": "Listings", "fallback_paths": ["/admin/listings/", "/admin/listing/"]},
    {"module": "marketing", "label": "Marketing", "fallback_paths": ["/admin/marketing/"]},
    {"module": "reporting", "label": "Reporting", "fallback_paths": ["/admin/reporting/"]},
    {"module": "website", "label": "Website", "fallback_paths": ["/admin/website/", "/admin/site/"]},
    {"module": "marketplace", "label": "Marketplace", "fallback_paths": ["/admin/marketplace/"]},
    {"module": "settings", "label": "Settings", "fallback_paths": ["/admin/settings/"]},
]
MODULE_KEYWORDS = {
    "dashboard": ["dashboard", "home"],
    "people": ["people", "lead", "contact", "contacts"],
    "transactions": ["transaction", "transactions", "offer"],
    "calendar": ["calendar", "task", "tasks", "appointment", "appointments", "showing", "showings"],
    "listings": ["listing", "listings", "hot", "sheet"],
    "marketing": ["marketing", "ads", "campaign", "social"],
    "reporting": ["report", "reporting", "metric", "analytics"],
    "website": ["website", "site", "seo", "page", "pages", "idx"],
    "marketplace": ["marketplace"],
    "settings": ["settings", "setting", "profile", "permission"],
}


@dataclass
class RouteCandidate:
    module: str
    label: str
    url: str
    source: str
    detail: bool = False


@dataclass
class ApiArtifact:
    url: str
    redacted_url: str
    status: int
    content_type: str
    source: str
    raw_path: str
    summary_lines: list[str]


@dataclass
class PageArtifact:
    module: str
    label: str
    url: str
    redacted_url: str
    source: str
    detail: bool
    status: int
    title: str
    raw_html_path: str
    markdown_path: str
    nav_labels: list[str]
    headings: list[str]
    tabs: list[str]
    buttons: list[str]
    table_headers: list[str]
    filters: list[str]
    outline_lines: list[str]
    internal_links: list[str]
    api_artifacts: list[ApiArtifact]


def collapse_blank_lines(value: str) -> str:
    value = value.replace("\r\n", "\n").replace("\r", "\n")
    value = re.sub(r"\n{3,}", "\n\n", value)
    return value.strip()


def sanitize_slug(value: str) -> str:
    slug = value.strip().lower()
    slug = re.sub(r"[^a-z0-9]+", "-", slug)
    slug = re.sub(r"-{2,}", "-", slug).strip("-")
    return slug or "untitled"


def write_json(path: Path, payload: Any) -> None:
    path.write_text(json.dumps(payload, indent=2, ensure_ascii=True) + "\n", encoding="utf-8")


def write_jsonl(path: Path, rows: list[dict[str, Any]]) -> None:
    with path.open("w", encoding="utf-8") as handle:
        for row in rows:
            handle.write(json.dumps(row, ensure_ascii=True) + "\n")


def ensure_output_dirs(base_dir: Path) -> dict[str, Path]:
    paths = {
        "base": base_dir,
        "raw": base_dir / "raw",
        "raw_pages": base_dir / "raw" / "pages",
        "raw_api": base_dir / "raw" / "api",
        "indexes": base_dir / "indexes",
        "pages": base_dir / "pages",
    }
    for path in paths.values():
        path.mkdir(parents=True, exist_ok=True)
    return paths


def normalize_url(url: str) -> str:
    parsed = urlparse(url)
    cleaned = parsed._replace(fragment="")
    return urlunparse(cleaned)


def url_hash(url: str) -> str:
    return hashlib.sha1(normalize_url(url).encode("utf-8")).hexdigest()[:10]


def redacted_url(url: str) -> str:
    redacted = normalize_url(url)
    redacted = re.sub(r"\b[0-9]{5,}\b", "[REDACTED_ID]", redacted)
    redacted = re.sub(r"\b[0-9a-fA-F]{8}-[0-9a-fA-F-]{27,}\b", "[REDACTED_ID]", redacted)
    return redacted


def redact_text(value: str) -> str:
    text = value
    text = re.sub(r"\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b", "[REDACTED_EMAIL]", text, flags=re.I)
    text = re.sub(r"(?<!\w)(?:\+?1[-.\s]*)?(?:\(?\d{3}\)?[-.\s]*)\d{3}[-.\s]*\d{4}(?!\w)", "[REDACTED_PHONE]", text)
    text = re.sub(
        r"\b\d{1,6}\s+[A-Za-z0-9.'# -]+\s(?:Street|St|Avenue|Ave|Road|Rd|Boulevard|Blvd|Lane|Ln|Drive|Dr|Court|Ct|Circle|Cir|Way|Place|Pl|Terrace|Ter|Parkway|Pkwy)\b[^\n,]*",
        "[REDACTED_ADDRESS]",
        text,
        flags=re.I,
    )
    text = re.sub(r"\b[0-9]{5,}\b", "[REDACTED_ID]", text)
    text = re.sub(r"\b[0-9a-fA-F]{8}-[0-9a-fA-F-]{27,}\b", "[REDACTED_ID]", text)
    return collapse_blank_lines(text)


def looks_like_probable_name(value: str) -> bool:
    stripped = value.strip()
    if len(stripped.split()) not in {2, 3}:
        return False
    if any(char.isdigit() for char in stripped):
        return False
    return bool(re.fullmatch(r"[A-Z][a-z]+(?: [A-Z][a-z]+){1,2}", stripped))


def keep_outline_line(value: str) -> bool:
    stripped = value.strip()
    if not stripped:
        return False
    if len(stripped) < 3 or len(stripped) > 120:
        return False
    if stripped.lower() in MUTATING_VERBS:
        return False
    if looks_like_probable_name(stripped):
        return False
    if re.fullmatch(r"[\d:./ -]+", stripped):
        return False
    return True


def normalize_label(text: str) -> str:
    return re.sub(r"\s+", " ", text or "").strip()


def unique_strings(values: list[str], limit: int = MAX_ITEMS_PER_LIST) -> list[str]:
    items: list[str] = []
    seen: set[str] = set()
    for value in values:
        normalized = normalize_label(value)
        if not normalized:
            continue
        key = normalized.casefold()
        if key in seen:
            continue
        seen.add(key)
        items.append(normalized)
        if len(items) >= limit:
            break
    return items


def same_origin(url: str, base_url: str) -> bool:
    return urlparse(url).netloc == urlparse(base_url).netloc


def infer_module_from_url(url: str) -> str:
    lowered = normalize_url(url).lower()
    for config in MODULE_CONFIGS:
        for keyword in MODULE_KEYWORDS[config["module"]]:
            if f"/{keyword}" in lowered or keyword in lowered:
                return config["module"]
    return "other"


def parse_cookie_file(path: Path) -> list[dict[str, Any]]:
    raw = json.loads(path.read_text(encoding="utf-8"))
    if isinstance(raw, dict) and "cookies" in raw:
        cookies = raw["cookies"]
    elif isinstance(raw, list):
        cookies = raw
    else:
        raise RuntimeError(f"Unsupported cookie file format in {path}")

    parsed: list[dict[str, Any]] = []
    for cookie in cookies:
        same_site = str(cookie.get("sameSite", "")).lower()
        mapped_same_site = "Lax"
        if same_site in {"strict"}:
            mapped_same_site = "Strict"
        elif same_site in {"none", "no_restriction"}:
            mapped_same_site = "None"

        item: dict[str, Any] = {
            "name": cookie["name"],
            "value": cookie["value"],
            "path": cookie.get("path", "/"),
            "httpOnly": bool(cookie.get("httpOnly", False)),
            "secure": bool(cookie.get("secure", False)),
            "sameSite": mapped_same_site,
        }
        if cookie.get("domain"):
            item["domain"] = cookie["domain"]
        elif cookie.get("url"):
            item["url"] = cookie["url"]
        if cookie.get("expirationDate") is not None:
            item["expires"] = int(cookie["expirationDate"])
        elif cookie.get("expires") is not None:
            try:
                item["expires"] = int(float(cookie["expires"]))
            except ValueError:
                pass
        parsed.append(item)
    return parsed


def parse_har_entries(path: Path) -> list[dict[str, Any]]:
    raw = json.loads(path.read_text(encoding="utf-8"))
    return raw.get("log", {}).get("entries", [])


def extract_cookies_from_har(entries: list[dict[str, Any]], base_url: str) -> list[dict[str, Any]]:
    cookies: dict[tuple[str, str], dict[str, Any]] = {}
    default_domain = urlparse(base_url).hostname or ""
    for entry in entries:
        request = entry.get("request", {})
        request_url = request.get("url", "")
        hostname = urlparse(request_url).hostname or default_domain
        for cookie in request.get("cookies", []):
            key = (hostname, cookie.get("name", ""))
            cookies[key] = {
                "name": cookie["name"],
                "value": cookie.get("value", ""),
                "domain": hostname,
                "path": cookie.get("path", "/"),
                "httpOnly": False,
                "secure": True,
                "sameSite": "Lax",
            }
    return list(cookies.values())


def response_text_from_har(entry: dict[str, Any]) -> str:
    content = entry.get("response", {}).get("content", {})
    text = content.get("text", "")
    if content.get("encoding") == "base64":
        return ""
    return text or ""


def summarize_json_shape(value: Any, depth: int = 0, max_depth: int = 2) -> list[str]:
    if depth > max_depth:
        return []

    lines: list[str] = []
    if isinstance(value, dict):
        keys = [str(key) for key in value.keys()]
        preview = ", ".join(keys[:12])
        lines.append(f"object keys: {preview}" if preview else "object keys: <none>")
        if depth < max_depth:
            for key in keys[:6]:
                child = value.get(key)
                if isinstance(child, dict):
                    child_keys = ", ".join(str(item) for item in list(child.keys())[:8]) or "<none>"
                    lines.append(f"{key}: object with keys [{child_keys}]")
                elif isinstance(child, list):
                    item_shape = "empty"
                    if child:
                        first = child[0]
                        if isinstance(first, dict):
                            item_shape = "object keys [" + ", ".join(str(item) for item in list(first.keys())[:8]) + "]"
                        else:
                            item_shape = type(first).__name__
                    lines.append(f"{key}: array(len={len(child)}) of {item_shape}")
                else:
                    lines.append(f"{key}: {type(child).__name__}")
    elif isinstance(value, list):
        lines.append(f"array(len={len(value)})")
        if value and depth < max_depth:
            first = value[0]
            if isinstance(first, dict):
                lines.append("first item keys: " + ", ".join(str(item) for item in list(first.keys())[:10]))
            else:
                lines.append(f"first item type: {type(first).__name__}")
    else:
        lines.append(f"scalar type: {type(value).__name__}")
    return lines[:10]


def sanitize_json_shape(value: Any) -> Any:
    if isinstance(value, dict):
        sanitized: dict[str, Any] = {}
        for key, item in value.items():
            normalized_key = str(key).replace("-", "_").lower()
            if normalized_key in SENSITIVE_VALUE_KEYS:
                sanitized[key] = "[REDACTED]"
            else:
                sanitized[key] = sanitize_json_shape(item)
        return sanitized
    if isinstance(value, list):
        return [sanitize_json_shape(item) for item in value[:10]]
    if isinstance(value, str):
        return redact_text(value)
    return value


def safe_json_parse(value: str) -> Any | None:
    try:
        return json.loads(value)
    except Exception:
        return None


def html_to_text(html: str) -> str:
    soup = BeautifulSoup(html, "html.parser")
    for tag in soup(["script", "style", "noscript", "svg"]):
        tag.decompose()
    text = soup.get_text("\n", strip=True)
    return collapse_blank_lines(text)


def build_output_readme(output_dir: Path, summary: dict[str, Any]) -> str:
    return "\n".join(
        [
            "# Lofty CRM Context Dump",
            "",
            "This folder contains an authenticated scrape of key Lofty CRM flows.",
            "",
            "## Contents",
            "",
            "- `summary.json`: scrape metadata and counts",
            "- `raw/routes.json`: unredacted route inventory and capture status",
            "- `raw/pages/*.html`: rendered DOM snapshots from Playwright",
            "- `raw/api/*.json`: captured GET JSON responses",
            "- `indexes/page_index.jsonl`: redacted searchable page index",
            "- `indexes/flow_tree.json`: pages grouped by Lofty module",
            "- `pages/**/*.md`: redacted per-page summaries",
            "- `LOFTY_CRM_FULL_CONTEXT.md`: single-file bundle for ChatGPT uploads",
            "",
            "## Safety Notes",
            "",
            "- Raw captures may contain live CRM data.",
            "- Redacted markdown and the bundled context file are intended for AI uploads.",
            "- Non-GET requests are blocked during browser capture.",
            "",
            "## Summary",
            "",
            f"- Auth mode: `{summary['auth_mode']}`",
            f"- Redaction mode: `{summary['redaction_mode']}`",
            f"- Pages captured: `{summary['counts']['pages']}`",
            f"- API responses captured: `{summary['counts']['api_responses']}`",
            f"- Modules covered: `{', '.join(summary['modules']['covered']) or 'none'}`",
            "",
        ]
    )


def extract_structure_from_html_snapshot(html: str, route_url: str) -> dict[str, Any]:
    soup = BeautifulSoup(html, "html.parser")
    for tag in soup(["script", "style", "noscript", "svg"]):
        tag.decompose()

    def texts(selector: str, limit: int = MAX_ITEMS_PER_LIST) -> list[str]:
        values = [redact_text(element.get_text(" ", strip=True)) for element in soup.select(selector)]
        return unique_strings(values, limit=limit)

    body_text = html_to_text(html)
    outline = []
    for raw in body_text.splitlines():
        cleaned = redact_text(normalize_label(raw))
        if keep_outline_line(cleaned):
            outline.append(cleaned)

    internal_links = []
    for anchor in soup.select("a[href]"):
        href = normalize_url(urljoin(route_url, anchor.get("href", "")))
        if same_origin(href, DEFAULT_BASE_URL):
            internal_links.append(redacted_url(href))

    title = soup.title.get_text(" ", strip=True) if soup.title else ""
    return {
        "title": redact_text(title),
        "nav_labels": texts("header a, header button, nav a, nav button"),
        "headings": texts("h1, h2, h3, h4, [role='heading']"),
        "tabs": texts("[role='tab'], .ant-tabs-tab"),
        "buttons": texts("button, [role='button'], a[role='button']"),
        "table_headers": texts("th, [role='columnheader']"),
        "filters": texts("label, [placeholder], [role='combobox']"),
        "outline_lines": unique_strings(outline, limit=30),
        "internal_links": unique_strings(internal_links, limit=25),
    }


def write_page_markdown(paths: dict[str, Path], artifact: PageArtifact, filename_prefix: str) -> str:
    module_dir = paths["pages"] / sanitize_slug(artifact.module)
    module_dir.mkdir(parents=True, exist_ok=True)
    filename = f"{filename_prefix}-{sanitize_slug(artifact.label)}-{url_hash(artifact.url)}.md"
    markdown_path = module_dir / filename

    parts = [
        f"# {artifact.label}",
        "",
        f"- Module: `{artifact.module}`",
        f"- Source: `{artifact.source}`",
        f"- Detail Page: `{str(artifact.detail).lower()}`",
        f"- Status: `{artifact.status}`",
        f"- Route: `{artifact.redacted_url}`",
        f"- Title: `{artifact.title or artifact.label}`",
        f"- Raw HTML: `{artifact.raw_html_path}`",
        "",
    ]

    def add_list_section(title: str, values: list[str]) -> None:
        parts.append(f"## {title}")
        parts.append("")
        if values:
            parts.extend(f"- {value}" for value in values)
        else:
            parts.append("- None captured")
        parts.append("")

    add_list_section("Navigation Labels", artifact.nav_labels)
    add_list_section("Visible Headings", artifact.headings)
    add_list_section("Tabs", artifact.tabs)
    add_list_section("Buttons and Actions", artifact.buttons)
    add_list_section("Table Headers", artifact.table_headers)
    add_list_section("Filters and Inputs", artifact.filters)
    add_list_section("Sanitized Outline", artifact.outline_lines)
    add_list_section("Internal Links", artifact.internal_links)

    parts.append("## Linked API Summaries")
    parts.append("")
    if artifact.api_artifacts:
        for api_artifact in artifact.api_artifacts:
            parts.append(f"### {api_artifact.redacted_url}")
            parts.append("")
            parts.append(f"- Status: `{api_artifact.status}`")
            parts.append(f"- Content-Type: `{api_artifact.content_type}`")
            parts.append(f"- Raw API: `{api_artifact.raw_path}`")
            if api_artifact.summary_lines:
                parts.extend(f"- {line}" for line in api_artifact.summary_lines)
            parts.append("")
    else:
        parts.append("- No relevant GET JSON responses captured for this page.")
        parts.append("")

    markdown_path.write_text("\n".join(parts), encoding="utf-8")
    return str(markdown_path.relative_to(paths["base"]))


class BrowserScraper:
    def __init__(
        self,
        base_url: str,
        chrome_path: str,
        settle_ms: int,
        paths: dict[str, Path],
        extra_routes: list[str],
    ) -> None:
        self.base_url = base_url.rstrip("/")
        self.chrome_path = chrome_path
        self.settle_ms = settle_ms
        self.paths = paths
        self.extra_routes = extra_routes
        self.page_counter = 0
        self.api_counter = 0
        self.visited_urls: set[str] = set()
        self.saved_api_keys: set[str] = set()
        self.raw_routes: list[dict[str, Any]] = []
        self.page_artifacts: list[PageArtifact] = []

    def _visible_texts(self, page: Any, selector: str, limit: int = MAX_ITEMS_PER_LIST) -> list[str]:
        script = """
        elements => elements
          .filter(el => !!(el.offsetWidth || el.offsetHeight || el.getClientRects().length))
          .map(el => (el.innerText || el.textContent || '').replace(/\\s+/g, ' ').trim())
          .filter(Boolean)
        """
        try:
            values = page.eval_on_selector_all(selector, script)
        except PlaywrightError:
            return []
        return unique_strings([redact_text(item) for item in values], limit=limit)

    def _visible_links(self, page: Any) -> list[dict[str, str]]:
        script = """
        elements => elements
          .filter(el => !!(el.offsetWidth || el.offsetHeight || el.getClientRects().length))
          .map(el => ({
            text: (el.innerText || el.textContent || '').replace(/\\s+/g, ' ').trim(),
            href: el.href || el.getAttribute('href') || ''
          }))
          .filter(item => item.href)
        """
        try:
            links = page.eval_on_selector_all("a[href]", script)
        except PlaywrightError:
            return []

        cleaned: list[dict[str, str]] = []
        seen: set[str] = set()
        for link in links:
            href = normalize_url(urljoin(page.url, link.get("href", "")))
            if not href or not same_origin(href, self.base_url):
                continue
            if href in seen:
                continue
            seen.add(href)
            cleaned.append(
                {
                    "text": redact_text(link.get("text", "").strip()),
                    "href": href,
                }
            )
        return cleaned

    def _outline_lines(self, page: Any, limit: int = 30) -> list[str]:
        try:
            text = page.locator("body").inner_text(timeout=5000)
        except PlaywrightError:
            return []
        lines = []
        for raw in text.splitlines():
            cleaned = redact_text(normalize_label(raw))
            if keep_outline_line(cleaned):
                lines.append(cleaned)
        return unique_strings(lines, limit=limit)

    def _extract_structure(self, page: Any) -> dict[str, Any]:
        links = self._visible_links(page)
        return {
            "title": redact_text(page.title() or ""),
            "nav_labels": self._visible_texts(page, "header a, header button, nav a, nav button, [role='navigation'] a, [role='navigation'] button"),
            "headings": self._visible_texts(page, "h1, h2, h3, h4, [role='heading']"),
            "tabs": self._visible_texts(page, "[role='tab'], .ant-tabs-tab, [data-testid*='tab']"),
            "buttons": self._visible_texts(page, "button, [role='button'], a[role='button']"),
            "table_headers": self._visible_texts(page, "th, [role='columnheader']"),
            "filters": self._visible_texts(page, "label, [placeholder], [role='combobox'], [aria-label*='filter' i]"),
            "outline_lines": self._outline_lines(page),
            "internal_links": unique_strings([redacted_url(link["href"]) for link in links if link["href"].startswith(self.base_url)], limit=25),
            "link_targets": links,
        }

    def _is_relevant_response(self, response: Any) -> bool:
        request = response.request
        method = request.method.upper()
        if method != "GET":
            return False
        url = response.url
        if not url.startswith("http"):
            return False
        content_type = (response.headers.get("content-type") or "").lower()
        if "application/json" in content_type:
            return True
        return request.resource_type in {"xhr", "fetch"} and "javascript" not in content_type

    def _save_api_response(self, response: Any, page_key: str, source: str) -> ApiArtifact | None:
        request = response.request
        url = normalize_url(response.url)
        content_type = (response.headers.get("content-type") or "").lower()
        if not self._is_relevant_response(response):
            return None

        body_text = ""
        try:
            body_text = response.text()
        except PlaywrightError:
            return None

        parsed_json = safe_json_parse(body_text)
        if parsed_json is None:
            return None

        dedupe_key = f"{page_key}:{url}"
        if dedupe_key in self.saved_api_keys:
            return None
        self.saved_api_keys.add(dedupe_key)

        self.api_counter += 1
        filename = f"{page_key}-api-{self.api_counter:03d}-{url_hash(url)}.json"
        raw_path = self.paths["raw_api"] / filename
        write_json(raw_path, parsed_json)

        summary_lines = summarize_json_shape(sanitize_json_shape(parsed_json))
        return ApiArtifact(
            url=url,
            redacted_url=redacted_url(url),
            status=response.status,
            content_type=content_type,
            source=source,
            raw_path=str(raw_path.relative_to(self.paths["base"])),
            summary_lines=summary_lines,
        )

    def _write_page_markdown(
        self,
        artifact: PageArtifact,
    ) -> None:
        artifact.markdown_path = write_page_markdown(self.paths, artifact, f"{self.page_counter:03d}")

    def _capture_loaded_page(
        self,
        page: Any,
        module: str,
        label: str,
        source: str,
        detail: bool,
        route_url: str,
        status: int,
        response_log: list[Any],
    ) -> PageArtifact:
        self.page_counter += 1
        page_key = f"page-{self.page_counter:03d}"
        html = page.content()
        html_path = self.paths["raw_pages"] / f"{page_key}-{sanitize_slug(label)}-{url_hash(route_url)}.html"
        html_path.write_text(html, encoding="utf-8")

        structure = self._extract_structure(page)
        api_artifacts: list[ApiArtifact] = []
        for response in response_log:
            artifact = self._save_api_response(response, page_key, source)
            if artifact is not None:
                api_artifacts.append(artifact)

        page_artifact = PageArtifact(
            module=module,
            label=label,
            url=normalize_url(route_url),
            redacted_url=redacted_url(route_url),
            source=source,
            detail=detail,
            status=status,
            title=structure["title"],
            raw_html_path=str(html_path.relative_to(self.paths["base"])),
            markdown_path="",
            nav_labels=structure["nav_labels"],
            headings=structure["headings"],
            tabs=structure["tabs"],
            buttons=structure["buttons"],
            table_headers=structure["table_headers"],
            filters=structure["filters"],
            outline_lines=structure["outline_lines"],
            internal_links=structure["internal_links"],
            api_artifacts=api_artifacts,
        )
        self._write_page_markdown(page_artifact)
        self.page_artifacts.append(page_artifact)
        self.visited_urls.add(normalize_url(route_url))
        self.raw_routes.append(
            {
                "module": module,
                "label": label,
                "url": normalize_url(route_url),
                "redacted_url": redacted_url(route_url),
                "source": source,
                "detail": detail,
                "status": status,
                "title": page_artifact.title,
                "raw_html_path": page_artifact.raw_html_path,
                "markdown_path": page_artifact.markdown_path,
            }
        )
        return page_artifact

    def _goto_and_capture(self, page: Any, candidate: RouteCandidate) -> PageArtifact | None:
        url = normalize_url(candidate.url)
        if url in self.visited_urls:
            return None

        response_log: list[Any] = []

        def handle_response(response: Any) -> None:
            if self._is_relevant_response(response):
                response_log.append(response)

        page.on("response", handle_response)
        response = None
        status = 0
        try:
            response = page.goto(url, wait_until="networkidle", timeout=45000)
            page.wait_for_timeout(self.settle_ms)
            status = response.status if response is not None else 200
            current_url = normalize_url(page.url)
            if same_origin(current_url, self.base_url):
                url = current_url
            return self._capture_loaded_page(
                page=page,
                module=candidate.module,
                label=candidate.label,
                source=candidate.source,
                detail=candidate.detail,
                route_url=url,
                status=status,
                response_log=response_log,
            )
        except PlaywrightTimeoutError:
            self.raw_routes.append(
                {
                    "module": candidate.module,
                    "label": candidate.label,
                    "url": url,
                    "redacted_url": redacted_url(url),
                    "source": candidate.source,
                    "detail": candidate.detail,
                    "status": "timeout",
                    "title": "",
                    "raw_html_path": "",
                    "markdown_path": "",
                }
            )
            return None
        finally:
            page.remove_listener("response", handle_response)

    def _module_route_candidates(self) -> dict[str, list[RouteCandidate]]:
        candidates: dict[str, list[RouteCandidate]] = defaultdict(list)
        for config in MODULE_CONFIGS:
            for fallback in config["fallback_paths"]:
                candidates[config["module"]].append(
                    RouteCandidate(
                        module=config["module"],
                        label=config["label"],
                        url=urljoin(self.base_url, fallback),
                        source="fallback",
                    )
                )
        for route in self.extra_routes:
            module = infer_module_from_url(route)
            candidates[module].append(
                RouteCandidate(
                    module=module,
                    label=route.rstrip("/").split("/")[-1] or module.title(),
                    url=route,
                    source="extra-route",
                )
            )
        return candidates

    def _discover_nav_routes(self, page: Any) -> dict[str, RouteCandidate]:
        discovered: dict[str, RouteCandidate] = {}
        visible_links = self._visible_links(page)
        for link in visible_links:
            text = link["text"]
            href = normalize_url(link["href"])
            for config in MODULE_CONFIGS:
                if config["label"].casefold() in text.casefold():
                    discovered[config["module"]] = RouteCandidate(
                        module=config["module"],
                        label=config["label"],
                        url=href,
                        source="nav-href",
                    )

        home_url = normalize_url(page.url)
        for config in MODULE_CONFIGS:
            if config["module"] in discovered or config["module"] == "dashboard":
                continue

            locator = None
            try:
                locator = page.locator("header, nav, [role='navigation']").get_by_text(config["label"], exact=False).first
                if locator.count() == 0:
                    locator = page.get_by_role("link", name=re.compile(config["label"], re.I)).first
            except PlaywrightError:
                locator = None

            if locator is None:
                continue

            try:
                if locator.count() == 0:
                    continue
                locator.click(timeout=5000)
                page.wait_for_load_state("networkidle", timeout=15000)
                page.wait_for_timeout(1200)
                current_url = normalize_url(page.url)
                if current_url != home_url and same_origin(current_url, self.base_url):
                    discovered[config["module"]] = RouteCandidate(
                        module=config["module"],
                        label=config["label"],
                        url=current_url,
                        source="nav-click",
                    )
                page.goto(home_url, wait_until="networkidle", timeout=30000)
                page.wait_for_timeout(1200)
            except PlaywrightError:
                try:
                    page.goto(home_url, wait_until="networkidle", timeout=30000)
                    page.wait_for_timeout(1200)
                except PlaywrightError:
                    pass
                continue

        discovered["dashboard"] = RouteCandidate(
            module="dashboard",
            label="Dashboard",
            url=home_url,
            source="home",
        )
        return discovered

    def _discover_detail_candidates(self, page: Any, module: str) -> list[RouteCandidate]:
        candidates: list[tuple[int, str, str]] = []
        for link in self._visible_links(page):
            href = normalize_url(link["href"])
            if href in self.visited_urls:
                continue
            parsed = urlparse(href)
            path_lower = parsed.path.lower()
            text_lower = link["text"].lower()
            if not same_origin(href, self.base_url):
                continue
            if any(f"/{config['module']}" in path_lower for config in MODULE_CONFIGS if config["module"] != module and config["module"] != "dashboard"):
                continue
            if any(verb in text_lower for verb in MUTATING_VERBS):
                continue
            if any(verb in path_lower for verb in MUTATING_VERBS):
                continue

            score = 0
            if module == "people" and any(token in path_lower for token in ["/lead", "/contact", "/people/"]):
                score += 5
            if module == "transactions" and "transaction" in path_lower:
                score += 5
            if module == "listings" and "listing" in path_lower:
                score += 5
            if module == "calendar" and any(token in path_lower for token in ["task", "appointment", "showing"]):
                score += 4
            if re.search(r"[?&](id|leadId|contactId|transactionId)=", href, flags=re.I):
                score += 3
            if re.search(r"/\d{3,}", path_lower):
                score += 2
            if link["text"]:
                score += 1

            if score <= 0:
                continue
            candidates.append((score, link["text"] or f"{module.title()} detail", href))

        candidates.sort(key=lambda item: (-item[0], item[2]))
        detail_routes: list[RouteCandidate] = []
        for _, label, href in candidates[:MAX_DETAIL_LINKS_PER_MODULE]:
            detail_routes.append(
                RouteCandidate(
                    module=module,
                    label=f"{MODULE_KEYWORDS[module][0].title()} Detail",
                    url=href,
                    source="detail-link",
                    detail=True,
                )
            )
        return detail_routes

    def run(self, cookies: list[dict[str, Any]]) -> list[PageArtifact]:
        if sync_playwright is None:
            raise RuntimeError("Playwright is not installed. Run `python3 -m pip install --user playwright` first.")

        with sync_playwright() as playwright:
            browser = playwright.chromium.launch(
                headless=True,
                executable_path=self.chrome_path,
                args=["--disable-dev-shm-usage"],
            )
            context = browser.new_context(ignore_https_errors=True, user_agent=USER_AGENT)
            context.route(
                "**/*",
                lambda route: route.abort() if route.request.method.upper() not in {"GET", "HEAD", "OPTIONS"} else route.continue_(),
            )
            if cookies:
                context.add_cookies(cookies)

            page = context.new_page()
            home_candidate = RouteCandidate(
                module="dashboard",
                label="Dashboard",
                url=urljoin(self.base_url, "/admin/home/"),
                source="home",
            )
            home_artifact = self._goto_and_capture(page, home_candidate)
            if home_artifact is None:
                raise RuntimeError("Unable to load Lofty CRM home. Your session may be expired or crm.lofty.com may be inaccessible.")

            nav_text = " ".join(home_artifact.nav_labels + home_artifact.headings + home_artifact.buttons + home_artifact.outline_lines).lower()
            auth_hits = [config["label"] for config in MODULE_CONFIGS if config["label"].lower() in nav_text]
            if len(auth_hits) < 3:
                browser.close()
                raise RuntimeError(
                    "Loaded crm.lofty.com but did not detect authenticated Lofty navigation. Export a fresh cookies/HAR file after logging into the CRM."
                )

            page.goto(home_artifact.url, wait_until="networkidle", timeout=30000)
            page.wait_for_timeout(1200)
            discovered = self._discover_nav_routes(page)
            fallback_candidates = self._module_route_candidates()

            capture_order: list[RouteCandidate] = []
            for config in MODULE_CONFIGS:
                if config["module"] == "dashboard":
                    continue
                if config["module"] in discovered:
                    capture_order.append(discovered[config["module"]])
                capture_order.extend(fallback_candidates[config["module"]])

            for candidate in capture_order:
                if normalize_url(candidate.url) in self.visited_urls:
                    continue
                artifact = self._goto_and_capture(page, candidate)
                if artifact is None:
                    continue
                for detail_candidate in self._discover_detail_candidates(page, candidate.module):
                    if normalize_url(detail_candidate.url) in self.visited_urls:
                        continue
                    self._goto_and_capture(page, detail_candidate)

            context.close()
            browser.close()

        return self.page_artifacts


def ingest_har_artifacts(
    entries: list[dict[str, Any]],
    base_url: str,
    paths: dict[str, Path],
) -> tuple[list[dict[str, Any]], list[dict[str, Any]], list[PageArtifact]]:
    routes: list[dict[str, Any]] = []
    api_records: list[dict[str, Any]] = []
    page_artifacts: list[PageArtifact] = []
    route_seen: set[str] = set()
    api_seen: set[str] = set()

    for entry in entries:
        request = entry.get("request", {})
        response = entry.get("response", {})
        url = normalize_url(request.get("url", ""))
        if not url.startswith("http"):
            continue
        method = request.get("method", "GET").upper()
        status = response.get("status", 0)
        mime_type = (response.get("content", {}).get("mimeType") or "").lower()
        body_text = response_text_from_har(entry)
        if method == "GET" and same_origin(url, base_url) and "text/html" in mime_type and url not in route_seen:
            route_seen.add(url)
            html_filename = f"har-page-{len(routes) + 1:03d}-{url_hash(url)}.html"
            html_path = paths["raw_pages"] / html_filename
            html_path.write_text(body_text, encoding="utf-8")
            structure = extract_structure_from_html_snapshot(body_text, url)
            page_artifact = PageArtifact(
                module=infer_module_from_url(url),
                label=urlparse(url).path.rstrip("/").split("/")[-1] or "home",
                url=url,
                redacted_url=redacted_url(url),
                source="har-document",
                detail=False,
                status=status,
                title=structure["title"],
                raw_html_path=str(html_path.relative_to(paths["base"])),
                markdown_path="",
                nav_labels=structure["nav_labels"],
                headings=structure["headings"],
                tabs=structure["tabs"],
                buttons=structure["buttons"],
                table_headers=structure["table_headers"],
                filters=structure["filters"],
                outline_lines=structure["outline_lines"],
                internal_links=structure["internal_links"],
                api_artifacts=[],
            )
            page_artifact.markdown_path = write_page_markdown(paths, page_artifact, f"har-{len(page_artifacts) + 1:03d}")
            page_artifacts.append(page_artifact)
            routes.append(
                {
                    "module": page_artifact.module,
                    "label": page_artifact.label,
                    "url": url,
                    "redacted_url": redacted_url(url),
                    "source": "har-document",
                    "detail": False,
                    "status": status,
                    "title": page_artifact.title,
                    "raw_html_path": str(html_path.relative_to(paths["base"])),
                    "markdown_path": page_artifact.markdown_path,
                }
            )
        if method == "GET" and ("application/json" in mime_type or "/api/" in url.lower()):
            parsed_json = safe_json_parse(body_text)
            if parsed_json is None:
                continue
            key = url
            if key in api_seen:
                continue
            api_seen.add(key)
            api_filename = f"har-api-{len(api_records) + 1:03d}-{url_hash(url)}.json"
            api_path = paths["raw_api"] / api_filename
            write_json(api_path, parsed_json)
            api_records.append(
                {
                    "url": url,
                    "redacted_url": redacted_url(url),
                    "status": status,
                    "content_type": mime_type,
                    "source": "har",
                    "raw_path": str(api_path.relative_to(paths["base"])),
                    "summary_lines": summarize_json_shape(sanitize_json_shape(parsed_json)),
                }
            )
    return routes, api_records, page_artifacts


def build_flow_tree(page_artifacts: list[PageArtifact]) -> dict[str, Any]:
    grouped: dict[str, list[dict[str, Any]]] = defaultdict(list)
    for artifact in page_artifacts:
        grouped[artifact.module].append(
            {
                "label": artifact.label,
                "route": artifact.redacted_url,
                "detail": artifact.detail,
                "title": artifact.title,
                "markdown_path": artifact.markdown_path,
            }
        )
    tree = []
    for module, pages in sorted(grouped.items()):
        tree.append(
            {
                "module": module,
                "page_count": len(pages),
                "pages": sorted(pages, key=lambda item: item["label"]),
            }
        )
    return {"modules": tree}


def build_summary(
    page_artifacts: list[PageArtifact],
    raw_routes: list[dict[str, Any]],
    api_count: int,
    auth_mode: str,
    base_url: str,
) -> dict[str, Any]:
    covered_modules = sorted({artifact.module for artifact in page_artifacts})
    inaccessible = sorted(
        {
            route["module"]
            for route in raw_routes
            if route.get("status") in {"timeout", 401, 403, 404}
        }
    )
    return {
        "scraped_at_epoch": int(time.time()),
        "source": base_url,
        "auth_mode": auth_mode,
        "redaction_mode": "regex-and-structure-redaction",
        "counts": {
            "pages": len(page_artifacts),
            "api_responses": api_count,
            "routes": len(raw_routes),
        },
        "modules": {
            "covered": covered_modules,
            "inaccessible": inaccessible,
        },
    }


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Scrape key Lofty CRM flows using an exported authenticated session.")
    parser.add_argument("--session-har", help="Path to an authenticated browser HAR export.")
    parser.add_argument("--cookies", help="Path to an exported cookies JSON file.")
    parser.add_argument("--output-dir", default=str(DEFAULT_OUTPUT_DIR), help="Directory where the CRM context will be written.")
    parser.add_argument("--base-url", default=DEFAULT_BASE_URL, help="Lofty CRM base URL.")
    parser.add_argument("--chrome-path", default=DEFAULT_CHROME_PATH, help="Path to the local Chrome executable Playwright should launch.")
    parser.add_argument("--settle-ms", default=str(SETTLE_MS), help="Milliseconds to wait after each page becomes idle.")
    parser.add_argument("--extra-route", action="append", default=[], help="Additional read-only CRM route to capture.")
    parser.add_argument("--har-only", action="store_true", help="Skip browser automation and build artifacts only from the provided HAR.")
    return parser.parse_args()


def main() -> int:
    args = parse_args()
    base_url = args.base_url.rstrip("/")
    output_dir = Path(args.output_dir).resolve()
    paths = ensure_output_dirs(output_dir)

    har_entries: list[dict[str, Any]] = []
    if args.session_har:
        har_entries = parse_har_entries(Path(args.session_har).resolve())

    cookies: list[dict[str, Any]] = []
    if args.cookies:
        cookies.extend(parse_cookie_file(Path(args.cookies).resolve()))
    elif har_entries:
        cookies.extend(extract_cookies_from_har(har_entries, base_url))

    if not cookies and not har_entries:
        raise RuntimeError("Provide --cookies and/or --session-har so the scraper has authenticated context to work with.")

    har_routes, har_api_records, har_page_artifacts = ingest_har_artifacts(har_entries, base_url, paths)

    scraper = BrowserScraper(
        base_url=base_url,
        chrome_path=args.chrome_path,
        settle_ms=int(args.settle_ms),
        paths=paths,
        extra_routes=args.extra_route,
    )

    browser_page_artifacts: list[PageArtifact] = []
    auth_mode = "har-only"
    if not args.har_only:
        browser_page_artifacts = scraper.run(cookies)
        auth_mode = "cookies-browser" if cookies else "har-derived-cookies-browser"

    page_artifacts = har_page_artifacts + browser_page_artifacts

    raw_routes = har_routes + scraper.raw_routes
    write_json(paths["raw"] / "routes.json", raw_routes)

    flow_tree = build_flow_tree(page_artifacts)
    write_json(paths["indexes"] / "flow_tree.json", flow_tree)

    page_index_rows = []
    for artifact in page_artifacts:
        page_index_rows.append(
            {
                "module": artifact.module,
                "label": artifact.label,
                "route": artifact.redacted_url,
                "source": artifact.source,
                "detail": artifact.detail,
                "title": artifact.title,
                "markdown_path": artifact.markdown_path,
                "raw_html_path": artifact.raw_html_path,
                "api_count": len(artifact.api_artifacts),
                "excerpt": " | ".join((artifact.headings + artifact.outline_lines)[:8]),
            }
        )
    write_jsonl(paths["indexes"] / "page_index.jsonl", page_index_rows)

    summary = build_summary(page_artifacts, raw_routes, scraper.api_counter + len(har_api_records), auth_mode, base_url)
    write_json(paths["base"] / "summary.json", summary)
    (paths["base"] / "README.md").write_text(build_output_readme(paths["base"], summary) + "\n", encoding="utf-8")

    print(
        f"Captured {len(page_artifacts)} CRM pages and {scraper.api_counter + len(har_api_records)} API responses into {output_dir}"
    )
    return 0


if __name__ == "__main__":
    try:
        raise SystemExit(main())
    except Exception as exc:
        print(f"ERROR: {exc}", file=sys.stderr)
        raise SystemExit(1)
