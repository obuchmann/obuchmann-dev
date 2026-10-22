---
title: "Der größte Kunde der Factory"
subtitle: "163 PRs in fünf Wochen, geschrieben von Agents, von mir freigegeben. 152 davon gingen in das Repo der Factory selbst."
date: 2026-10-22
slug: the-factorys-biggest-customer
description: "Ein Feldbericht in Zahlen: fünf Wochen mit meiner selbstgebauten AI Factory - und für wen sie eigentlich gearbeitet hat."
tags: [homelab, agentic-engineering, field-report]
---

## Abgeschaltet und nachgezählt

Am 16.10. habe ich meine erste komplett selbstgebaute AI Factory abgeschaltet. Vorher habe ich alle relevanten Daten exportiert und nachgezählt.

Die Factory bearbeitet Tickets aus einem lokalen Forgejo nach einem vorgegebenen SDLC-Prozess, zuletzt in zehn Schritten, von `discover` über `design` und `impl` bis zum abschließenden `sentinel`. Über Labels und Kommentare trackt sie Fortschritt und Entscheidungen, kommuniziert mit mir und erstellt am Ende einen PR zur Abnahme. Die Agents selbst liefen in einer Sandbox, zuerst lokal in einem Container, zwei Wochen später in einem Kubernetes-Cluster.

## 93 Prozent Eigenbedarf

93 % - das war die erste Zahl, die ich beim Aufbereiten präsentiert bekommen habe. 93 % aller Ticket-PRs waren von der Factory, für die Factory.

Drei Wochen nach dem Start kam das erste Produkt. 11 PRs später war die Factory damit fertig und wieder auf sich selbst gerichtet.

Der Backlog der Factory war nie leer. Jede Auffälligkeit im Prozess wurde als Ticket angelegt und direkt verarbeitet.

Wir waren immer beschäftigt. Sich selbst verbessern, das konnte meine Factory.

## Ich habe alles gemessen außer dem Wichtigsten

Observability wurde mir mit steigendem Autonomiegrad immer wichtiger. Kosten pro Lauf, Cache-Hit-Rate, Statistiken pro Schritt: Das alles habe ich gesammelt und gemessen.

Das Einzige, was ich nicht gemessen habe, war Erfolg. Nur 58 % der PRs hat die Factory ohne mein Eingreifen oder Nachbessern geschafft. Dass dieser Wert mit der Zeit gesunken ist, sehe ich erst jetzt. Warum, kann ich nicht mehr sagen.

## Zwölf Läufe pro Ticket

Knapp 1600 Agent-Runs bearbeiteten 130 Tickets. Fehler gab es meist in den Schritten, in denen Code entstand oder geprüft wurde. Die restlichen Schritte erzeugten primär Text. Ob dieser geholfen hat, das Ergebnis besser zu machen, kann ich nicht beurteilen.

Die Alternative stand schon in den Startlöchern: Grenzen statt Ketten. Gebaut wurde sie nie.

## Die Tokens waren billig

Dank effizienter Open-Weight-Modelle waren Token-Kosten nie das Problem, 60 $ für fünf Wochen. Teuer war meine Zeit. Über 200 PRs sind in interaktiven Agent-Sessions entstanden, um Fehler der Factory auszubessern oder sie auf den richtigen Pfad zu führen. Die Factory hat mir keine Arbeit abgenommen, sie hat sich geschaffen.

## Die Verwaltung war so groß wie der Betrieb

Die große Frage liegt nahe: Was hat die Factory so viel an sich gebaut? In diesen fünf Wochen entstanden 40 ADRs, alle manuell entschieden und freigegeben. Dazu Doku im Umfang des Codes und ein Test-Harness mit rund 50.000 Zeilen, fast doppelt so groß wie die rund 27.000 Zeilen der Factory selbst. Viele dieser Tests prüften Formulierungen in der Doku statt Verhalten.

Noch dazu kamen 111 automatische Reflections. Mit dem Lernen daraus sind wir nach zehn Tagen nicht mehr nachgekommen.

## Was gehalten hat

Das Einzige, was über die fünf Wochen gehalten hat, waren Grenzen:

- Jeder Lauf startete frisch in seiner eigenen Sandbox.
- Der Agent hatte kein Schreibrecht. Er lieferte nur das Ergebnis, geschrieben hat der Controller.
- Jede Version war fest gepinnt, jede Änderung per Revert umkehrbar.
- Ein Not-Aus über eine einzige Zahl. Beim Abschalten hat er genau so gewirkt.

Der Prozess hat sich über die Zeit komplett verändert und sich immer wieder neu erfunden.

Und ich habe gemergt. Auch das hat gehalten, ist aber kein Prinzip. Ich habe gemergt, weil mir die Evidenz fehlte, die mir sagt, dass ich es nicht muss.

## Was bleibt

Begonnen hat alles mit einem Container auf meinem Laptop. Mein Homelab hatte kein lokales GitHub (Forgejo) inklusive Runnern, keinen Logging-Stack mit Grafana und Metriken, kein LLM-Gateway (LiteLLM), keine OTel-Traces über Sandbox-Sessions hinweg und keinen Kubernetes-Cluster.

Heute schon.

Und es wird genutzt: Auf dem Kubernetes-Cluster laufen die ersten Workloads, LibreChat und Home Assistant sprechen über LiteLLM mit LLM-Anbietern, und mein Homelab wird detailliert gemonitort.

Die Factory sollte Code für fremde Repositories schreiben. Was sie stattdessen geschaffen hat, ist eine Plattform für den Betrieb einer [Factory]({{< ref path="/posts/die-faulheit-siegt" lang="de" >}}).
