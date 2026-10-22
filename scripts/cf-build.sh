#!/usr/bin/env bash
# Production build for Cloudflare Workers Builds (see wrangler.jsonc).
# Downloads the pinned Hugo release instead of relying on whatever the
# build image ships, so local and Cloudflare builds use the same version.
set -euo pipefail

HUGO_VERSION="${HUGO_VERSION:-0.148.2}"
HUGO_DIR="${TMPDIR:-/tmp}/hugo-${HUGO_VERSION}"

if [ ! -x "${HUGO_DIR}/hugo" ]; then
  mkdir -p "${HUGO_DIR}"
  curl -sSL "https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_extended_${HUGO_VERSION}_linux-amd64.tar.gz" \
    | tar -xz -C "${HUGO_DIR}" hugo
fi

HUGO_ENVIRONMENT=production "${HUGO_DIR}/hugo" --gc --minify
