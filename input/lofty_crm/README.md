# Lofty CRM Session Inputs

Place your authenticated browser exports for `https://crm.lofty.com` in this folder before running the CRM scraper.

Supported inputs:

- `session.har`
  - Export a HAR after logging into Lofty CRM and loading the key pages you care about.
  - Useful for route discovery, extra API context, and cookie fallback.
- `cookies.json`
  - Export cookies for `crm.lofty.com`.
  - The scraper imports these into a Playwright browser context.

Recommended command:

```bash
python3 scripts/scrape_lofty_crm.py \
  --session-har input/lofty_crm/session.har \
  --cookies input/lofty_crm/cookies.json \
  --output-dir context/lofty_crm
```

Then build the single-file bundle:

```bash
python3 scripts/build_lofty_crm_context_bundle.py \
  --context-root context/lofty_crm \
  --output context/lofty_crm/LOFTY_CRM_FULL_CONTEXT.md
```
