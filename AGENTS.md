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

### 3. German translation conventions

The site is bilingual (English default at `/en/`, German at `/de/`; see README.md § Languages). When writing or reviewing German content:

- **Use "Agents" (the English loanword), not "Agenten."** This matches the established usage in Oliver's Obsidian vault (Cerebro), where the term originates for this material. Singular oblique forms still decline normally in German (e.g. "einem Agenten," "der Agent") — it's specifically the word itself that stays English, not German grammar around it.
- **Check the Obsidian vault for an existing German source before translating from the English post.** Some posts started as German drafts in the vault (`Publications/Publikation - ...md`) before being translated into English for the blog; for those, the vault text is the authoritative German version — bring it over close to verbatim, reconciling only with any structural revisions the English post received after the German draft was frozen (check the note's own changelog/status comments for those). Don't independently retranslate from English when a vault original exists.
- **If no German source exists in the vault** (post was drafted directly in English), don't machine-translate it solo — publish the German URL with the English text as-is, prefixed with a short German disclaimer blockquote noting the post isn't translated yet (see `content/posts/distribution-is-not-federation/index.de.md` for the pattern). Replace it with a real translation later if one gets written.
