---
title: "The Factory's Biggest Customer"
subtitle: "163 PRs in five weeks, written by agents, approved by me. 152 of them went into the factory's own repo."
date: 2026-10-22
slug: the-factorys-biggest-customer
description: "A field report in numbers: five weeks with my home-built AI factory - and who it was really working for."
tags: [homelab, agentic-engineering, field-report]
---

## Shut Down and Counted

On October 16, I shut down my first fully home-built AI factory. Before that, I exported all the relevant data and counted everything.

The factory works tickets from a local Forgejo instance following a predefined SDLC, in its final form ten steps, from `discover` through `design` and `impl` to the closing `sentinel`. It tracks progress and decisions through labels and comments, communicates with me, and finally opens a PR for approval. The agents themselves ran in a sandbox, first locally in a container, two weeks later in a Kubernetes cluster.

## 93 Percent for Itself

93% - that was the first number I was presented with when I went through the data. 93% of all ticket PRs were by the factory, for the factory.

Three weeks after launch, the first product arrived. 11 PRs later, the factory was done with it and pointed back at itself.

The factory's backlog was never empty. Every anomaly in the process became a ticket and was processed right away.

We were always busy. Improving itself - that, my factory could do.

## I Measured Everything Except What Mattered

Observability became more and more important to me as autonomy increased. Cost per run, cache hit rate, per-step statistics: I collected and measured all of it.

The only thing I didn't measure was success. The factory managed only 58% of PRs without me stepping in or fixing things. That this number dropped over time is something I only see now. Why, I can no longer tell.

## Twelve Runs per Ticket

Nearly 1,600 agent runs worked on 130 tickets. Failures happened mostly in the steps where code was written or reviewed. The remaining steps mostly produced text. Whether that text made the result any better, I can't judge.

The alternative was already waiting in the wings: boundaries instead of chains. It was never built.

## Tokens Were Cheap

Thanks to efficient open-weight models, token costs were never the problem: $60 for five weeks. What was expensive was my time. More than 200 PRs came out of interactive agent sessions, fixing the factory's mistakes or steering it back onto the right path. The factory didn't take work off my hands. It created its own.

## The Overhead Was as Big as the Work

The big question is obvious: what did the factory build so much of for itself? In these five weeks, 40 ADRs were created, all decided and approved by hand. Add documentation as large as the code and a test harness of around 50,000 lines, almost twice the size of the factory's own roughly 27,000 lines. Many of those tests checked wording in the documentation rather than behavior.

On top of that came 111 automatic reflections. After ten days, we couldn't keep up with learning from them.

## What Held

The only things that held over those five weeks were boundaries:

- Every run started fresh in its own sandbox.
- The agent had no write access. It only delivered the result; the controller did the writing.
- Every version was pinned, every change reversible via revert.
- A kill switch controlled by a single number. At shutdown, it worked exactly as intended.

The process changed completely over time and kept reinventing itself.

And I did the merging. That held too, but it isn't a principle. I merged because I lacked the evidence that would tell me I didn't have to.

## What Remains

It all started with a container on my laptop. My homelab had no local GitHub (Forgejo) with runners, no logging stack with Grafana and metrics, no LLM gateway (LiteLLM), no OTel traces across sandbox sessions, and no Kubernetes cluster.

Now it does.

And it's in use: the first workloads run on the Kubernetes cluster, LibreChat and Home Assistant talk to LLM providers through LiteLLM, and my homelab is monitored in detail.

The factory was supposed to write code for other repositories. What it built instead is a platform for running a [factory]({{< ref path="/posts/die-faulheit-siegt" lang="de" >}}).
