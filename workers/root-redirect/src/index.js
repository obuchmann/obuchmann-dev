// Root-path language redirect, edge-side fallback for the Cloudflare Redirect
// Rule described in README.md ("Root domain and language routing"). Only
// runs for requests matched by the Worker route (see wrangler.toml), which
// is scoped to the exact "/" path - everything else never reaches this code.

export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (url.pathname !== "/") {
      return fetch(request);
    }

    const acceptLanguage = (request.headers.get("Accept-Language") || "").toLowerCase();
    const lang = acceptLanguage.includes("de") ? "de" : "en";

    return Response.redirect(`${url.origin}/${lang}/`, 302);
  },
};
