# AGENTS.md

Instructions for AI agents working in this repository — the Hugo-based personal blog of Oliver Buchmann (obuchmann.dev). See [README.md](README.md) for build, structure, and deployment details.

## Mandatory rules

### 1. AI-involvement disclosure on every post

Every blog post MUST carry the disclosure that the concept and the final editorial pass are the author's own, while AI agents were used for research and drafting.

This is implemented as a fixed part of the post layout: `layouts/_default/single.html` renders an `<aside class="post-disclosure">` after the post content, styled via `.post-disclosure` in `assets/css/main.css`. Because it lives in the layout, it appears on every post automatically.

- NEVER remove this block from the layout.
- Any redesign or replacement of the single-post template must keep the disclosure.
- Do not add per-post copies of the notice into the Markdown — the layout already covers it.

### 2. Changelog on published posts

Once a post is released (live on `main`), it may no longer be silently edited. EVERY subsequent content change to a published post gets a dated changelog entry at the end of the post's Markdown.

Format (established convention, see `content/posts/distribution-is-not-federation/index.md`):

```markdown
---

*Changelog — this essay has been revised since publication:*

*YYYY-MM-DD — What was changed and why, in one or two sentences.*
```

- The changelog section is introduced once (after an `---` separator) and new entries are appended in chronological order.
- Trivial fixes (typos, broken links) may be summarized, but substantive changes — reworked arguments, new sections, updated sources — must each be named.
- Drafts (not yet published) need no changelog; edit freely until release.
