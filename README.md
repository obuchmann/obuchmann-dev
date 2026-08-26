# obuchmann.dev

Personal blog of Oliver Buchmann, built with [Hugo](https://gohugo.io/) and a custom minimal theme focused on readability. Deployed to GitHub Pages via GitHub Actions.

## Local development

Requires Hugo (extended not needed, plain CSS only). The CI pins the version in `.github/workflows/deploy.yml` (`HUGO_VERSION`).

```sh
hugo server -D        # serve with drafts at http://localhost:1313
hugo --minify         # production build into ./public
```

## Writing a post

```sh
hugo new content/posts/my-post-slug.md
```

Front matter fields used by the theme:

| Field         | Purpose                                          |
| ------------- | ------------------------------------------------ |
| `title`       | Post title (H1)                                  |
| `subtitle`    | Optional dek shown under the title and in lists  |
| `description` | Meta description / OG tags (falls back to subtitle) |
| `slug`        | URL slug under `/posts/`                         |
| `tags`        | Taxonomy tags, shown at the end of the post      |
| `draft`       | `true` keeps the post out of production builds   |

Remove `draft: true` (or set it to `false`) to publish. Pushing to `main` triggers the deploy.

## Languages

The site is bilingual: English (default) and German, served under path prefixes — `/en/...` and `/de/...` — on the same domain. Configured in `hugo.toml` via `[languages.en]` / `[languages.de]` (per-language menu, description, headline, tagline) and `defaultContentLanguageInSubdir = true`.

Content pairs share a directory and differ only by filename suffix — the English file has none, the German one is `.de`:

```
content/posts/my-post-slug/index.md      # English (default language)
content/posts/my-post-slug/index.de.md   # German translation
```

`hugo new content/posts/my-post-slug/index.md` still creates the English side; add `index.de.md` next to it by hand (or copy the archetype) for the translation. Images and other page-bundle resources (SVGs, `og-image.*`) are *not* duplicated — a resource file without a language suffix is shared by both language versions of the bundle automatically.

Root-level pages (`about`, `privacy`, `impressum`) follow the same pattern: `about.md` / `about.de.md`, etc. `impressum` is a legal notice under Austrian media law and stays in German in both language versions — only the page heading/label differs (Imprint vs. Impressum).

UI strings (nav labels aside — those come from the per-language menu config) live in `i18n/en.toml` and `i18n/de.toml`, used via `{{ i18n "key" }}` in the layouts. The interactive ADR-loop simulation on the "Distribution Is Not Federation" post pulls its strings from the same `i18n` files, embedded as JSON and read by its script — see `layouts/shortcodes/adr-loop-sim.html`.

**Publishing a translation only after review.** There's no `draft` gate specific to translations — the review point is the branch/PR itself: land translations on a branch, review the German copy (and the diff to the English original for parity), then merge to `main` to publish. A post that's already live may not be silently re-edited — see `AGENTS.md` for the changelog rule; that rule is about editing an already-published post's *content*, so adding a same-slug translation as a new file isn't itself a changelog-triggering edit, but any later edit to a published post's content or its translation is.

### Root domain and language routing

With `defaultContentLanguageInSubdir = true`, Hugo has nothing to put at the bare domain root (`obuchmann.dev/`) — every real page lives under `/en/` or `/de/`. Two layers handle that:

1. **Cloudflare Redirect Rule (primary, edge-side).** The domain's DNS is proxied through Cloudflare in front of GitHub Pages. A Redirect Rule on the zone matches requests to `/` and redirects to `/de/` when the visitor's `Accept-Language` indicates German, else `/en/` (English is the fallback when no German is detected). Example rule (Rules → Redirect Rules, dynamic redirect):
   - **When incoming requests match:** `http.request.uri.path eq "/"`
   - **Then:** dynamic redirect to `concat("https://obuchmann.dev/", if(http.request.accept_language contains "de", "de/", "en/"))`, status 302

   `http.request.accept_language` requires a plan that exposes that field (Business/Enterprise on some Cloudflare accounts); if it isn't available, replace the rule with an equivalent Cloudflare Worker route on `/` that reads the `Accept-Language` header and issues the same redirect.
2. **Built-in Hugo fallback (safety net, no Cloudflare dependency).** With `defaultContentLanguageInSubdir` enabled, Hugo generates `/index.html` itself: a `noindex`, canonical, `<meta http-equiv="refresh">` redirect straight to `/en/` (the default language). This is what serves the root if the Cloudflare rule isn't active yet, is misconfigured, or the site is reached through a host that bypasses Cloudflare (e.g. the raw GitHub Pages domain) — no custom code needed, and nothing in this repo to keep in sync with the language list.

## Deployment

`.github/workflows/deploy.yml` builds the site with a pinned Hugo version and publishes it via `actions/deploy-pages` on every push to `main`.

One-time repository setup for the custom domain:

1. **Settings → Pages → Build and deployment → Source**: select **GitHub Actions**.
2. **Settings → Pages → Custom domain**: enter `obuchmann.dev` and enable **Enforce HTTPS** once the certificate is issued.
3. DNS at the registrar: `A`/`AAAA` records for the apex pointing to GitHub Pages (`185.199.108.153` … `185.199.111.153`, and the corresponding `AAAA` records), optionally `www` as `CNAME` to `obuchmann.github.io`.

The workflow takes its base URL from the Pages configuration (`actions/configure-pages`), so it works before and after the custom domain is active.

## Analytics

Cookieless hit counting via [GoatCounter](https://www.goatcounter.com/) — pageviews and rough geo location (country, derived from IP, not stored), no cookies, no consent banner required.

One-time setup:

1. Sign up at goatcounter.com and pick a site code (config assumes `obuchmann` → `obuchmann.goatcounter.com`).
2. If the code differs, change `params.analytics.goatcounter` in `hugo.toml`. Setting it to `""` disables analytics entirely.

The tracking script is only injected in production builds (`hugo.IsProduction`), so local `hugo server` previews are never counted. Data lives in the GoatCounter dashboard; it also exposes an API if the numbers should ever feed into an agent workflow. A self-hosted, MCP-native alternative (e.g. YAWA) can replace this later by swapping the snippet in `layouts/partials/head.html`.

## Structure

```
content/posts/    posts (Markdown, .md = English, .de.md = German)
i18n/             UI string translations (en.toml, de.toml)
layouts/          custom theme templates
assets/css/       theme CSS (minified + fingerprinted by Hugo Pipes)
static/           favicon, root-redirect index.html, and other verbatim files
hugo.toml         site configuration (incl. per-language menus/params)
```
