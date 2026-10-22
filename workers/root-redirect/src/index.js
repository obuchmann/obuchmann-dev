// Language-prefix redirect for the site Worker (see wrangler.jsonc in the
// repo root). Runs on every request before the static assets
// (run_worker_first) and redirects any
// URL that isn't already under /de or /en to the detected language prefix -
// this covers both the bare root ("/") and old unprefixed URLs that are
// still floating around from before the site went bilingual, e.g.
// https://obuchmann.dev/posts/distribution-is-not-federation/
// Static assets and other files (favicon.svg, robots.txt, sitemap.xml, RSS
// feeds, ...) are left alone since they are not language-prefixed pages, and
// are served from the Hugo build via the ASSETS binding.
// Requests to www.obuchmann.dev get a permanent redirect to the same URL on
// the bare domain first, so the site only lives under one hostname.

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.hostname.startsWith("www.")) {
      url.hostname = url.hostname.slice(4);
      return Response.redirect(url.toString(), 301);
    }

    const path = url.pathname;

    const lastSegment = path.slice(path.lastIndexOf("/") + 1);
    const isFile = lastSegment.includes(".");

    const isPrefixed =
      path === "/de" || path === "/en" || path.startsWith("/de/") || path.startsWith("/en/");

    if (isFile || isPrefixed) {
      return env.ASSETS.fetch(request);
    }

    const acceptLanguage = (request.headers.get("Accept-Language") || "").toLowerCase();
    const lang = acceptLanguage.includes("de") ? "de" : "en";

    const redirectPath = path === "/" ? `/${lang}/` : `/${lang}${path}`;

    return Response.redirect(`${url.origin}${redirectPath}${url.search}`, 302);
  },
};
