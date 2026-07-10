---
title: "Recorded Is Not Enforced"
subtitle: "When every architecture decision becomes a harness decision"
date: 2026-07-10
slug: recorded-is-not-enforced
description: "A system of record remembers decisions; a system of work obeys them. A four-rung ladder — recorded, readable, projected, enforced — for where architecture decisions live in the agentic era, and why the ADR is the interface."
tags: [harness-engineering, agentic-engineering, adr]
---

[OpenAI's account of harness engineering](https://openai.com/index/harness-engineering/) — published in February, already canon — contains a diagram whose caption has become the field's premise: "What Codex can't see doesn't exist." From the agent's point of view, anything outside its running context might as well not have been decided.

Five months later, the answers to that premise have piled up, and they contradict each other. One vendor, [Mneme](https://mnemehq.com/insights/how-ai-coding-agents-use-adrs/), published a three-rung maturity ladder for architecture decision records — ignored, advisory, enforced — and argued that "an ADR a machine checks is a constraint." [The same vendor's other post](https://mnemehq.com/insights/rule-files-vs-retrieval-memory/) argues the opposite direction: rule files loaded into context don't scale, structured retrieval is the higher form. A consultancy, [TechEmpower, declared that the wiki's future is to be a report](https://www.techempower.com/blog/2026/06/16/what-if-the-repository-replaced-your-wiki-and-agents-maintained-it/) generated from the repository. [A widely shared post declared AGENTS.md the new ADR](https://ai.gopubby.com/agents-md-is-the-ew-architecture-decision-record-adr-3cfb6bdd6f2c), full stop. Thoughtworks put the ["context graph" on its radar](https://www.thoughtworks.com/radar/techniques/context-graph) — decisions and precedents as first-class nodes structured for AI consumption — without connecting it to the lightweight ADRs on the same radar since 2017.

These fragments disagree because each of them is holding one piece of a law nobody has stated. This essay states it.

## The criterion

The instinctive framing — decisions must be *agent-readable* — is a proxy, and a leaky one. Confluence is agent-readable: there are APIs, MCP servers, retrieval pipelines. Every platform vendor will answer the readability argument with a connector, and they will be right.

The criterion that holds is different: **not where a decision lives, but whether it participates in the lifecycle of the code it governs.** Three tests, and they are conjunctive — passing two of three is failing:

**Present by construction, not by retrieval.** A projected decision — an AGENTS snippet, a guide, a calibration record in the repo — is in the agent's context *before* it works. A decision behind a retrieval bridge is present probabilistically: maybe found, maybe ranked, maybe truncated. For a binding decision, "the agent will probably find it" is not governance; it is a lottery with good intentions. And because context is a scarce resource, projection is necessarily *curated* — you cannot pour the corpus in, you must decide what earns the tokens.

**Versioned with the code.** A decision in the repository is snapshot-consistent: the checkout carries exactly the decisions that hold for that state of the code. An external system is decoupled by construction — an agent on last quarter's release branch reads *this* quarter's wiki. No bridge repairs that; it is structural.

**Enforceable at a gate.** Prose can be read; it cannot be enforced. A decision that participates in the lifecycle points at its own enforcement — a detector, an architecture test, a hook, a pipeline check — so that violating it silently is not an option the system offers.

Compressed to one line: a **system of record** remembers decisions; a **system of work** obeys them.

## The ladder

Run any decision in your organization through the three tests and it lands on one of four rungs.

**Recorded.** The decision exists in a system of record — a wiki page, a portal entry, a board's minutes. For the agentic share of your code production, it does not exist.

**Readable.** A bridge makes it findable — an MCP server over the wiki, a RAG index, a docs endpoint. Real progress, measurably so: [one recent study](https://arxiv.org/abs/2605.08112) found decision compliance jumping from 46% to 95% when recorded decisions were surfaced to the agent. But read that number again. Ninety-five percent is not a gate; it is a good day. Retrieval-grade presence is where binding decisions go to be *usually* honored.

**Projected.** The decision is in context by construction: distilled into the instruction files, the guides, the decision index the agent loads before it works — curated, scoped, versioned with the code.

**Enforced.** The decision is checked deterministically at a gate: an ArchUnit-style rule, a commit-lint hook, a pipeline check, each one pointing back at the record that justifies it.

The three-rung ladders now circulating collapse the middle. "Advisory" lumps together a decision that *might* be retrieved and a decision that is *always* present — and those are different governance regimes, not different intensities of the same one. The distinction also dissolves an apparent contradiction in the field: the same vendor arguing "context files, then enforcement" in one post and "retrieval over rule files" in the next is not confused — it is describing different rungs without a taxonomy that can tell them apart. Their scoped, deterministic constraint lookup is *projected* infrastructure; it is not the retrieval lottery, however much the word "retrieval" appears in both.

One more thing the split explains: the warning — now on the Thoughtworks radar as a caution — that stuffing an agent's context with your instruction corpus *degrades* it. Correct, and it is not an argument against the ladder; it is the ladder's strongest witness. Storage, injection and enforcement are three different operations. Git stores everything; projection injects a curated slice; the gate enforces deterministically. The naive version — dump the decisions into context — fails precisely because it has no *projected* rung, only a bigger *readable*.

## Two lineages, one hole

Here is the strange part: the people building this future and the people who own its central artifact have not met.

The harness canon has been reinventing the ADR without using the word. OpenAI's write-up describes decision logs in the repo, design documents with verification status, a gardening agent keeping documentation honest. [Böckeler names the gap precisely](https://martinfowler.com/articles/harness-engineering.html) — an agent has no organizational memory, no way to know which convention is load-bearing and which is mere habit — and her article never says "decision record." The whole tradition is describing an artifact that stores *why*, versioned next to the code, consumed by agents. There is a fifteen-year-old name for that.

The ADR establishment, meanwhile, never made the agent substitution. Nygard's format is mature; the advice process scales decision-making across humans elegantly. But the corpus of accepted ADRs as an *onboarding pack for non-human colleagues* — agents as advice seekers, consulting the record before acting, and as advice givers, flagging the decision a change is about to violate — that move has not been made publicly by the tradition that owns the format.

And a third lineage — fitness functions, architecture tests, the enforcement school — built the gate a decade ago without a decision index on top: rules that verify, with nothing that remembers why.

Each tradition holds two-thirds of the answer. Connected, they say: **the ADR is the interface** — the human-legible decision record that projects into agent context and indexes its own enforcement. That is the law behind the fragments.

And there is a mechanical reason the ADR earns this job, one that fifteen years of familiarity make easy to overlook: **ADRs are append-only.** An accepted decision is never edited; it is superseded by a new record that says so. That editorial discipline, originally there for humans, turns out to be exactly what projection needs. A wiki page mutates in place — so whatever keeps the harness in sync must diff prose and guess what the change *meant*. An append-only decision log hands the projector discrete, self-describing events: consume the records you have not seen, re-project, done. Developers will recognize the shape — it is an event log, with supersession as the compensating entry. It is also why the mutable surfaces of the harness, the instruction files and guides, can stay cheap to regenerate: they are views over a log, not originals that need reconciling.

## The convergence

Once the ladder is in view, a question I get in almost every engagement answers itself: *should harness decisions and architecture decisions live in separate logs?*

Look at what actually sits in a harness-engineered repository. Ours carry ADRs on semantic versioning, conventional commits, and the branching strategy — classic engineering decisions nobody would have called "harness decisions," which happen to reach the top rung with off-the-shelf tooling: commit-lint, branch protection, a release pipeline. They carry module-boundary decisions — architecture in its purest form — enforced by architecture tests a coding agent cannot argue with. They carry CI pipeline decisions, which are their own instructive special case: the artifact of the decision is executable, so projection and enforcement partially collapse — the pipeline *is* the gate.

And the strongest example is an ADR from our own team harness that decides a process, a repository topology and its tooling in one document — and from which the actual files are *generated*. The ADR is the source of truth; the files are its projection. Ask whether that is an architecture ADR or a harness ADR and you will find the question has stopped meaning anything.

To be precise about what convergence is *not*: it is not replacement. The "AGENTS.md is the new ADR" take gets the direction wrong. AGENTS.md is a projection surface — routing, not rationale. Delete the ADR behind it and you keep the instruction while losing the trade-off, the alternatives considered, the supersession chain — exactly the material the *next* decision needs. The ADR remains the decision carrier; the snippet, the guide, the detector are what it compiles down to.

The driver of the convergence is arithmetic, not fashion. As the agentic share of code production grows, every binding architecture decision needs a projection into the harness — or it is invisible to the majority of the hands writing your code. A decision without a projection is not a lenient decision. It is a decree read to an empty room.

## The collision nobody writes about

Everything above is comfortable as long as your decisions are born in the repository. In an enterprise, they are not — and this is where the literature goes quiet.

The program I advise — a large .NET modular-monolith estate — has what most enterprises have: an enterprise-architecture decision register in a Confluence space, with its own board and its own status workflow, running from work-in-progress through an RFC phase to accepted or superseded. It is a real, governed, functioning system of record. And it sits on the ladder's bottom rung. My favorite specimen is a pipeline ADR: the decision recorded in the wiki, while the pipeline it governs lives in Git — the decision and its own enforcement in different systems, drift guaranteed by construction.

The tempting responses are both wrong. "Migrate everything to Git" picks a fight with a working governance process and loses. "Leave it, add a connector" caps every enterprise decision at *readable* — the lottery rung — forever.

The move that works is to stop treating the register as one thing. It is three: **forum, record, injection.** The forum — the board, the RFC ritual, the humans arguing — stays exactly where it is; nothing about the ladder requires architects to open pull requests. The *record* lands in Git, because that is the only place all three lifecycle tests can pass. And the portal becomes a **view** — generated from the records, on merge, always current, never authoritative. The wiki's demotion from source of truth to report has been predicted before; what is missing from the prediction is the governance mechanics — and one detail that changes the compliance conversation: the audit trail is *generated from* the source of work, not maintained beside it. Regulated industries already accept Git-derived evidence trails; signed commits on protected branches with a structured schema answer authority, alternatives and supersession better than any editable page. Even the status workflows map: an RFC phase and a forum review are the same gate wearing different badges.

What breaks, honestly. The weightiest decisions — vendor, risk, build-versus-buy — are made by people who will never open a repository; the forum/record split is the answer, but it is an organizational negotiation, not a technical one, and it will be slower than any migration script. Cross-cutting decisions have no home repo; a registry repository with generated per-repo excerpts works and is one more moving part. And the oldest objection of all — ADRs die of neglect — was true for fifteen years and is the one thing agents genuinely change: the writing and the checking become a byproduct of the loop rather than a discipline tax. The failure mode that remains is the same one as everywhere else in harness engineering: nobody funds the curation.

## One ladder, all the way up

Readers of [the previous essay](/posts/distribution-is-not-federation/) will recognize the shape. There, decisions travel *between* teams: an ADR describing a harness change is published to an exchange, and every adopting node derives its own diff, fast-forwarding or trimming. Here, decisions climb *within* a repository: recorded, readable, projected, enforced. These are not two mechanisms — and the top half of the ladder is not my invention. Inside the repository, constraints harden along the progressive-hardening ladder [Russ Miles describes in his harness-engineering work](https://github.com/Habitat-Thinking/ai-literacy-superpowers/blob/89199fec30e0e21d194cfaf9bf1f0029813e233c/ai-literacy-superpowers/skills/harness-engineering/SKILL.md) and develops at book length in [*The Sovereign Engineer*](https://leanpub.com/thesovereignengineer): **Unverified → Agent → Deterministic** — a declaration acquiring first an agent that reviews it, then a tool that enforces it, without the surrounding system having to care which fills the slot. His ladder measures how hard a decision's enforcement is; the presence ladder measures where the decision lives — and they compose. An unverified declaration is already a *projected* decision; agent verification and deterministic checks are the road from *projected* to *enforced*. What this essay adds is the part below the floor: the *recorded* and *readable* rungs that every published hardening ladder starts above, because the field has been laddering the inside of the repository while the enterprise's decisions sit underneath. Which means the enterprise register is not a foreign system to be conquered. It is rung zero of a ladder your harness already climbs.

That is the quiet meaning of the convergence. It was never about merging two document types. It is about noticing that the organization already has exactly one kind of thing — decisions — and that the agentic era assigns them a measurable position: recorded is not readable, readable is not projected, projected is not enforced.

The teams that internalize this early will not experience it as convergence at all. They will experience it as the moment when every architecture decision becomes a harness decision.
