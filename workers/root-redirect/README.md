# root-redirect Worker

Edge-side fallback for the language-prefix redirect described in the
project README ("Root domain and language routing"). Redirects any URL that
isn't already under `/de` or `/en` (the bare root, and old unprefixed URLs
such as `/posts/distribution-is-not-federation/` that are still linked from
elsewhere on the internet) to the same path prefixed with `/de` or `/en`,
based on the `Accept-Language` header. Static files (anything with an
extension in the last path segment - favicon, CSS, robots.txt, sitemap.xml,
RSS feeds, ...) are passed through untouched. Only used if the Cloudflare
Redirect Rule (the primary mechanism) is not available on the current plan.

## Local development

```sh
cd workers/root-redirect
npx wrangler dev
```

## Deploy

```sh
cd workers/root-redirect
npx wrangler deploy
```

Requires `CLOUDFLARE_API_TOKEN` (and `CLOUDFLARE_ACCOUNT_ID`) in the
environment - see below. CI deploys automatically via
`.github/workflows/deploy-worker.yml` on pushes to `main` that touch this
directory.

## Creating a scoped API token

Cloudflare API tokens can be scoped to a specific account and a specific
zone (domain), but not to a single Worker script - the "Workers Scripts:
Edit" permission applies to every Worker in the account it is scoped to.
For a personal account with only this one Worker that is not a practical
problem; if you later add unrelated Workers to the same account and want
hard isolation between them, put them in separate Cloudflare accounts.

Steps (Cloudflare dashboard):

1. **My Profile -> API Tokens -> Create Token -> Create Custom Token.**
2. **Permissions**, add three rows:
   - `Account` / `Workers Scripts` / `Edit`
   - `Zone` / `Workers Routes` / `Edit`
   - `Zone` / `Zone` / `Read` (needed so wrangler can resolve `zone_name` to
     a zone ID)
3. **Account Resources**: `Include` -> `Specific account` -> select the
   account this site lives in.
4. **Zone Resources**: `Include` -> `Specific zone` -> `obuchmann.dev`.
5. Create the token and copy it once - Cloudflare will not show it again.

Store it as a GitHub Actions secret:

- Repo **Settings -> Secrets and variables -> Actions -> New repository
  secret**: name `CLOUDFLARE_API_TOKEN`, value the token from step 5.
- Same page, add `CLOUDFLARE_ACCOUNT_ID` (can be a plain "variable" instead
  of a secret, it is not sensitive) - found on the Cloudflare dashboard
  overview page for the domain, right-hand sidebar.

For local `wrangler dev` / `wrangler deploy`, export the same two values in
your shell (`export CLOUDFLARE_API_TOKEN=...`,
`export CLOUDFLARE_ACCOUNT_ID=...`) instead of running `wrangler login`, so
your local machine uses the same scoped token rather than a full
account-owner OAuth session.
