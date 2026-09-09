// Language-prefix redirect, edge-side fallback for the Cloudflare Redirect
// Rule described in README.md ("Root domain and language routing"). Runs on
// every request (see the wildcard route in wrangler.toml) and redirects any
// URL that isn't already under /de or /en to the detected language prefix -
// this covers both the bare root ("/") and old unprefixed URLs that are
// still floating around from before the site went bilingual, e.g.
// https://obuchmann.dev/posts/distribution-is-not-federation/
// Static assets and other files (favicon.svg, robots.txt, sitemap.xml, RSS
// feeds, ...) are left alone since they are not language-prefixed pages.

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const path = url.pathname;

    const lastSegment = path.slice(path.lastIndexOf("/") + 1);
    const isFile = lastSegment.includes(".");

    const isPrefixed =
      path === "/de" || path === "/en" || path.startsWith("/de/") || path.startsWith("/en/");

    if (isFile || isPrefixed) {
      return fetch(request);
    }

    const acceptLanguage = (request.headers.get("Accept-Language") || "").toLowerCase();
    const lang = acceptLanguage.includes("de") ? "de" : "en";

    const redirectPath = path === "/" ? `/${lang}/` : `/${lang}${path}`;

    return Response.redirect(`${url.origin}${redirectPath}${url.search}`, 302);
  },
};
