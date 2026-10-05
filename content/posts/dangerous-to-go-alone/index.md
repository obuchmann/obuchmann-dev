---
title: "It's Dangerous to Go Alone"
subtitle: "With AI, everyone becomes a lone wolf wandering into other people's domains. The three amigos matter more than ever - and AI can bring them together instead of replacing them."
date: 2026-10-05
slug: dangerous-to-go-alone
description: "Almost every take on three amigos and AI has the AI take over the amigos. A counter-thesis: the AI doesn't enter other domains alone, it brings in the people who live there - as an invitation, not a gate. A sketch, what breaks, and open questions."
tags: [agentic-engineering, three-amigos, collaboration]
---

## Heading out alone

In the very first cave of the very first Zelda, an old man is waiting. A sword lies in front of him, and he says one of the best-known lines in video game history: "It's dangerous to go alone! Take this." Forty years later, we're heading out alone again in product development - just with much better gear.

Jenny Wanger sat on a panel in Denver in mid-September and published an edited version of the conversation in early October ([Building alone, faster](https://jennywanger.com/articles/building-alone-faster/)). The moderator, Lauri Hofherr, had spent a year meeting engineers writing PRDs, PMs coding prototypes, and designers doing both. To open the evening, she read out one of Wanger's LinkedIn posts with the line: "AI is still single-player." Every role gets further, faster, on its own - and says the same thing about the other two: I'll pull them in later.

Wanger describes the loop that follows. It starts with putting things off. The cost ends up with someone else. People burn out, and eventually everyone drifts apart. Nobody means harm. It's just convenient.

## The three amigos matter more, not less

The Three Amigos come from the agile and BDD world; George Dinwiddie coined the term in 2009. Business, development, and testing look at a story together before anything gets built. Wanger talks about the product trio of PM, design, and engineering, popularized by Teresa Torres. Different cast, same idea: several perspectives, one shared picture. I'll stick with the amigos - it's simply the better name.

The value was never in the meeting notes. It was in the shared understanding that lived in several heads afterward.

AI speeds up each of these roles on its own. That makes every solo run more productive - including the ones heading in the wrong direction. To put it bluntly: a misunderstanding used to cost a week of code. Today it costs a prototype, a frontend, and three follow-up features already built on top of it.

On the panel, Jake Taylor, who leads design and research at JumpCloud, describes what that looks like. PMs pour 30 hours into a prototype, bypassing the design system. His team then has to reconstruct what the goal actually was before they can help at all. And at JumpCloud, "prototype first, then together" is the intended process. The problem is how far you get alone before "together" begins.

Wandering into other people's domains isn't the problem. Everyone is a bit of a PM and a bit of a designer these days, and that's a good thing. The problem is doing it alone. Link may walk through any dungeon. He should just know who lives there.

## The wrong turn: AI plays all three amigos

Search for "three amigos" and AI, and - at least in my research - you find almost only one direction: AI takes over the amigos. Sometimes [one agent plays all three perspectives](https://codemyspec.com/blog/bdd-attention-three-amigos) while the human holds the product intent. Sometimes the practice is [adapted for solo developers](https://testdouble.com/insights/three-amigos-with-ai-stop-building-the-wrong-thing-faster). Sometimes [three specialized agents](https://medium.com/@asallas/three-ai-amigos-a-multi-model-approach-to-ai-driven-development-2ef7ec2d1ef4) take on the three roles.

These are good approaches for solo developers and pipelines, and they produce better specs. But they solve a different problem: the artifact, not the team's understanding. The designer still doesn't know the new flow exists.

The closest thing to my idea is Anthropic's Claude Tag: a shared Claude per Slack channel, with shared memory. It turns AI into a multiplayer tool. But from everything I found, Tag doesn't recognize domain boundaries, and it doesn't bring anyone in.

A team of simulated colleagues is like playing co-op against the computer. You're a team of three, and you're still alone.

## The flip: AI as the link

My thesis turns the direction around. AI shouldn't replace the amigos - it should bring them together. It's not the hero walking through the dungeon alone, but the connector. The link, quite literally.

Concretely: as soon as my session enters another role's domain, the AI notices and suggests bringing the person who owns it on board. Synchronously or asynchronously, depending on the stakes. No lock, no gate, no mandatory review. An invitation.

The old man in the cave does exactly that, by the way. He doesn't block anything. You can walk past him and carry on without a sword. He only offers.

Picture this: a PM has the AI prototype a new checkout step. The AI replies, roughly: "This is a checkout flow, and that's design's home turf. Should I send Lisa three lines of context and the prototype? Or do you want to look at it together for 15 minutes?" I'd label the prototype the way Wanger suggests: as a throwaway prototype. The adjective tells the other person what it's for - and that nobody needs to review the code.

The second half matters just as much: keeping people up to date. When something shifts in one domain that affects others, they hear about it before drift in product understanding gets expensive. The [hallway talk agents don't do on their own](/en/posts/agents-dont-do-hallway-talk/) gets created on purpose.

Framing is everything here. The AI assumes nothing and stops no one. It makes collaboration the most convenient option instead of punishing solo runs.

## What it could look like

Not a product, a sketch. For the AI to act like this, it has to be primed at team or company level - not anew in every session. A few building blocks:

- **A map of domains, maintained by the people who live there.** Who lives where, what matters to them, which guardrails apply. Wanger describes a workshop where PMs prototype in Claude Design, wired to the design system the design team provided. You enter the territory on their terms, not your own.
- **Three levels of invitation.** FYI (batched, async), invitation (context plus a concrete question), decision requested (sync). A good yardstick is what Jason Fletchall describes on the panel: prototyping early and alone is fine; once real customers and real risk are involved, you need the other disciplines. The higher the risk and reach, the higher the level.
- **The human hits send.** The AI recognizes, drafts, and suggests. The person in the session sends it, never the AI on its own. Staying up to date is opt-in too: if you want to be informed, you subscribe to a domain.
- **Both directions.** Wanger's current rule with one client: wait for the other function to invite you in. I'd add the other direction: the residents put out invitations, and the AI brings them in when someone walks in uninvited.

The map isn't a fence. It's more like the dungeon map in Zelda: it shows where the rooms are. The people who live there draw it themselves. You can still enter the rooms.

## Where it breaks

The idea sounds friendly. A few places where it can fail:

- **Interruption cost.** People go solo precisely because everyone else is busy. If the AI generates more pings, it makes the problem worse. It has to batch and filter, not multiply.
- **"The AI is snitching."** If it feels like surveillance, people work around it. In German-speaking countries, an AI that notices where someone is working is also quickly a matter for the works council - and rightly so. So: detection only within your own session, triggered by the person doing the work, and no mining of other people's logs.
- **Detection.** Code paths make boundaries easy to spot. But when does a prompt enter design's territory? At the level of intent, it gets fuzzy.
- **Fatigue.** Too many invitations get ignored, like any notification that shows up too often.
- **The bottleneck moves.** Popular domains like design get flooded with invitations. Then the bottleneck just sits somewhere else.

## Courage alone isn't enough

The Triforce has three parts: Power, Wisdom, and Courage. Link carries Courage. He doesn't have the other two.

Thanks to AI, we have more than enough courage right now. Everyone dares to enter every domain. What's missing is the old man at the cave entrance saying: it's dangerous to go alone - take someone with you. Nintendo brought his line back in 2015, by the way, as the tagline for *Tri Force Heroes*, a game in which three Links only get anywhere together. Maybe that's exactly the job for AI.

I don't have a finished answer, just open questions:

- Where exactly does a domain's boundary lie - in the code, in the product, or in the intent?
- How many invitations can a team take before they turn into noise?
- Should the AI also be allowed to say: you don't need anyone here, just go?
- Who maintains the map, and what happens when it goes stale?

If you've already answered one of these, or have a better one: let me know. It's dangerous to go alone, after all.

### Sources

- Jenny Wanger: [Building alone, faster](https://jennywanger.com/articles/building-alone-faster/) (panel "Blurred Lines", Denver, 2026-09-14)
- CodeMySpec: [Three Amigos: The Gate That Was Missing](https://codemyspec.com/blog/bdd-attention-three-amigos)
- Test Double: [Three Amigos with AI](https://testdouble.com/insights/three-amigos-with-ai-stop-building-the-wrong-thing-faster)
- Medium: [Three AI Amigos](https://medium.com/@asallas/three-ai-amigos-a-multi-model-approach-to-ai-driven-development-2ef7ec2d1ef4)
- George Dinwiddie (2009), Three Amigos
- Teresa Torres: Continuous Discovery Habits (2021), product trio
- Anthropic: Claude Tag
