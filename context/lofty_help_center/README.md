# Lofty Help Center Context Dump

This folder contains a local scrape of the public Lofty Help Center.

## Contents

- `summary.json`: scrape timestamp and counts
- `raw/categories.json`: raw category records from the Help Center API
- `raw/sections.json`: raw section records from the Help Center API
- `raw/articles.json`: raw article records, including article HTML bodies
- `indexes/tree.json`: categories -> sections -> article titles
- `indexes/article_index.jsonl`: flat article index with local markdown paths
- `articles/...`: one markdown file per article

## Suggested Usage

- Search article titles with `rg "keyword" indexes/article_index.jsonl`
- Search article bodies with `rg "keyword" articles`
- Open an article directly from `articles/<category>/<section>/...`

## Source

- Help Center home: https://help.lofty.com/hc/en-us
- Public API base: https://help.lofty.com/api/v2/help_center/en-us

## Counts

- Categories: 8
- Sections: 130
- Articles: 654

