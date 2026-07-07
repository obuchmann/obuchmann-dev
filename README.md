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
content/posts/    posts (Markdown)
layouts/          custom theme templates
assets/css/       theme CSS (minified + fingerprinted by Hugo Pipes)
static/           favicon and other verbatim files
hugo.toml         site configuration
```
