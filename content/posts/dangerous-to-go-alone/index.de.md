---
title: "Allein ist es gefährlich"
subtitle: "Mit AI wird jeder zum Einzelgänger und wandert in fremde Domänen. Die Three Amigos braucht es deshalb mehr denn je - und die AI kann sie zusammenholen, statt sie zu ersetzen."
date: 2026-10-05
slug: dangerous-to-go-alone
description: "Fast alle Ansätze zu Three Amigos und AI lassen die AI die Amigos übernehmen. Eine Gegenthese: Die AI betritt fremde Domänen nicht allein, sondern holt die zuständigen Menschen dazu - als Einladung, nicht als Sperre. Eine Skizze, was dabei bricht, und offene Fragen."
tags: [agentic-engineering, three-amigos, collaboration]
draft: true
---

## Wer allein loszieht

In der ersten Höhle des allerersten Zelda wartet ein alter Mann. Vor ihm liegt ein Schwert, und er sagt einen der bekanntesten Sätze der Spielegeschichte: Allein ist es gefährlich, nimm das mit. Vierzig Jahre später ziehen wir in der Produktentwicklung wieder allein los - nur mit deutlich besserer Ausrüstung.

Jenny Wanger saß Mitte September auf einem Panel in Denver und hat das Gespräch Anfang Oktober aufbereitet veröffentlicht ([Building alone, faster](https://jennywanger.com/articles/building-alone-faster/)). Die Moderatorin Lauri Hofherr hatte zuvor ein Jahr lang Engineers getroffen, die PRDs schreiben, PMs, die Prototypen coden, und Designer, die beides tun. Zum Auftakt las sie einen LinkedIn-Post von Wanger vor, mit der Formel: "AI is still single-player." Jede Rolle kommt allein schneller voran - und sagt über die anderen beiden: Die hol ich später dazu.

Wanger beschreibt daraus einen Kreislauf. Erst heißt es "später, nicht jetzt". Dann landen die Schulden bei den anderen. Dann kommt der Burnout, und am Ende driften alle auseinander. Böser Wille steckt nicht dahinter. Es ist einfach bequem.

## Die drei Amigos werden wichtiger, nicht unwichtiger

Die Three Amigos stammen aus dem Agile- und BDD-Umfeld, den Begriff hat George Dinwiddie 2009 geprägt: Business, Entwicklung und Test schauen gemeinsam auf eine Story, bevor gebaut wird. Wanger spricht vom Product Trio aus PM, Design und Engineering, das Teresa Torres bekannt gemacht hat. Die Besetzung ist eine andere, die Idee dieselbe: mehrere Perspektiven, ein gemeinsames Bild. Ich bleibe bei den Amigos - der Name ist einfach schöner.

Der Wert lag nie im Protokoll des Termins. Er lag im geteilten Verständnis, das danach in mehreren Köpfen existiert.

AI beschleunigt jede dieser Rollen einzeln. Damit wird auch jeder Alleingang produktiver - leider auch der in die falsche Richtung. Zugespitzt: Früher kostete ein Missverständnis eine Woche Code. Heute kostet es einen Prototyp, ein Frontend und drei Folge-Features, die schon darauf aufbauen.

Im Panel beschreibt Jake Taylor, der bei JumpCloud Design und Research verantwortet, wie das aussieht. PMs stecken 30 Stunden in einen Prototyp, am Designsystem vorbei. Sein Team muss danach erst rekonstruieren, was eigentlich das Ziel war, bevor es überhaupt helfen kann. Dabei ist "erst Prototyp, dann gemeinsam" bei JumpCloud sogar der gewollte Prozess. Das Problem ist, wie weit man allein kommt, bevor das "gemeinsam" beginnt.

Dass wir dabei in fremde Domänen wandern, ist nicht das Problem. Jeder ist heute ein bisschen PM und ein bisschen Designer, und das ist gut so. Das Problem ist, dass wir es allein tun. Link darf durch jeden Dungeon laufen. Er sollte nur wissen, wer dort wohnt.

## Die falsche Abzweigung: Die AI spielt alle drei Amigos

Wer nach "Three Amigos" und AI sucht, findet - zumindest in meiner Recherche - fast nur eine Richtung: Die AI übernimmt die Amigos. Mal spielt [ein Agent alle drei Perspektiven](https://codemyspec.com/blog/bdd-attention-three-amigos), während der Mensch die Produktabsicht hält. Mal wird die Praxis [für Solo-Entwickler adaptiert](https://testdouble.com/insights/three-amigos-with-ai-stop-building-the-wrong-thing-faster). Mal übernehmen [drei spezialisierte Agents](https://medium.com/@asallas/three-ai-amigos-a-multi-model-approach-to-ai-driven-development-2ef7ec2d1ef4) die drei Rollen.

Das sind gute Ansätze für Solo-Entwickler und Pipelines, und sie liefern bessere Specs. Aber sie lösen ein anderes Problem: das Artefakt, nicht das Verständnis im Team. Die Designerin weiß danach immer noch nicht, dass es den neuen Flow gibt.

Am nächsten an meiner Idee ist Claude Tag von Anthropic: ein geteilter Claude pro Slack-Channel, mit gemeinsamem Gedächtnis. Damit wird die AI zum Mehrspieler-Werkzeug. Domänengrenzen erkennt Tag nach allem, was ich gefunden habe, aber nicht, und es holt auch niemanden dazu.

Ein Team aus simulierten Kollegen ist wie ein Koop-Spiel gegen den Computer. Man spielt zu dritt und ist trotzdem allein.

## Der Flip: Die AI als Link

Meine These dreht die Richtung um. Die AI soll die Amigos nicht ersetzen, sondern zusammenholen. Sie ist nicht der Held, der allein durch den Dungeon zieht, sondern das Bindeglied - der Link im wörtlichen Sinn.

Konkret: Sobald ich in meiner Session die Domäne einer anderen Rolle betrete, merkt das die AI und schlägt vor, die zuständige Person ins Boot zu holen. Synchron oder asynchron, je nach Gewicht. Keine Sperre, kein Gate, keine Review-Pflicht. Eine Einladung.

Der alte Mann aus der Höhle macht es übrigens genauso. Er sperrt nichts. Man kann an ihm vorbeigehen und ohne Schwert weiterziehen. Er bietet nur an.

Stell dir vor: Eine PM lässt sich einen neuen Checkout-Schritt prototypen. Die AI antwortet sinngemäß: "Das ist ein Flow im Checkout, und dort ist Design zuhause. Soll ich Lisa drei Zeilen Kontext und den Prototyp schicken? Oder wollt ihr 15 Minuten gemeinsam draufschauen?" Den Prototyp würde ich dabei so markieren, wie Wanger es vorschlägt: als Wegwerf-Prototyp. Das Adjektiv sagt dem Gegenüber, wozu er gedacht ist - und dass niemand den Code reviewen muss.

Die zweite Hälfte ist genauso wichtig: auf dem Laufenden halten. Wenn sich in einer Domäne etwas verschiebt, das andere betrifft, erfahren die es - bevor der Drift im Produktverständnis teuer wird. Der [Flurfunk, den Agents nicht von selbst führen](/de/posts/agents-dont-do-hallway-talk/), wird bewusst erzeugt.

Das Framing ist dabei alles. Die AI unterstellt nichts und hält niemanden auf. Sie macht Zusammenarbeit zur bequemsten Option, statt Alleingänge zu bestrafen.

## Wie das aussehen könnte

Kein Produkt, eine Skizze. Damit die AI so handeln kann, muss sie auf Team- oder Unternehmensebene geprimt sein - nicht in jeder Session neu. Ein paar Bausteine:

- **Eine Karte der Domänen, gepflegt von den Bewohnern.** Wer wohnt wo, was ist denen wichtig, welche Leitplanken gelten. Wanger erzählt von einem Workshop, in dem PMs mit Claude Design prototypen - angebunden an das Designsystem, das das Design-Team bereitgestellt hat. Man betritt das Terrain damit zu dessen Bedingungen, nicht zu den eigenen.
- **Drei Stufen der Einladung.** FYI (gesammelt, asynchron), Einladung (Kontext plus konkrete Frage), Entscheidung erbeten (synchron). Als Maßstab taugt, was Jason Fletchall im Panel beschreibt: Früh und allein zu prototypen ist in Ordnung, sobald echte Kunden und echtes Risiko im Spiel sind, braucht es die anderen Disziplinen. Je höher Risiko und Reichweite, desto höher die Stufe.
- **Der Mensch sendet.** Die AI erkennt, formuliert und schlägt vor. Abgeschickt wird von der Person in der Session, nie automatisch. Auch das Auf-dem-Laufenden-Halten ist Opt-in: Wer informiert werden will, abonniert eine Domäne.
- **Beide Richtungen.** Wangers aktuelle Regel bei einem Kunden: warten, bis die andere Funktion einen einlädt. Ich ergänze die Gegenrichtung: Die Bewohner legen Einladungen aus, und die AI holt sie dazu, wenn jemand ohne Einladung hereinkommt.

Die Karte ist dabei kein Zaun. Sie ist eher die Dungeon-Karte aus Zelda: Sie zeigt, wo die Räume sind. Wer dort wohnt, zeichnet sie selbst. Betreten darf man die Räume trotzdem.

## Was dabei bricht

Die Idee klingt freundlich. Ein paar Stellen, an denen sie scheitern kann:

- **Unterbrechungskosten.** Leute gehen ja gerade deshalb allein los, weil die anderen beschäftigt sind. Wenn die AI mehr Pings erzeugt, verschlimmert sie das Problem. Sie muss bündeln und filtern, nicht vermehren.
- **"Die AI petzt."** Fühlt es sich nach Überwachung an, wird es umgangen. Im DACH-Raum ist eine AI, die mitbekommt, wo jemand gerade arbeitet, außerdem schnell ein Fall für den Betriebsrat - zu Recht. Deshalb: erkennen nur in der eigenen Session, ausgelöst von der Person, die gerade arbeitet, und kein Auswerten fremder Logs.
- **Erkennung.** Bei Code-Pfaden ist eine Grenze leicht zu erkennen. Aber wann betritt ein Prompt das Terrain von Design? Auf Ebene der Absicht wird es unscharf.
- **Müdigkeit.** Zu viele Einladungen werden ignoriert - wie jede Benachrichtigung, die zu oft kommt.
- **Der Engpass wandert.** Beliebte Domänen wie Design werden mit Einladungen geflutet. Dann sitzt der Flaschenhals nur woanders.

## Mut allein reicht nicht

Die Triforce besteht aus drei Teilen: Kraft, Weisheit, Mut. Link trägt den Mut. Die anderen beiden hat er nicht.

Mut haben wir dank AI gerade mehr als genug. Jeder traut sich in jede Domäne. Was fehlt, ist der alte Mann am Höhleneingang, der sagt: Allein ist es gefährlich, nimm jemanden mit. Nintendo hat seinen Satz 2015 übrigens noch einmal hervorgeholt, als Werbespruch für *Tri Force Heroes* - ein Spiel, in dem drei Links nur gemeinsam weiterkommen. Vielleicht kann genau das die Aufgabe der AI sein.

Ich habe darauf keine fertige Antwort, nur offene Fragen:

- Wo genau liegt die Grenze einer Domäne - im Code, im Produkt oder in der Absicht?
- Wie viele Einladungen verträgt ein Team, bevor sie zu Rauschen werden?
- Darf die AI auch sagen: Hier brauchst du niemanden, mach einfach?
- Wer pflegt die Karte, und was passiert, wenn sie veraltet?

Wenn du eine dieser Fragen schon beantwortet hast, oder eine bessere stellst: Lass es mich wissen. Allein ist es ja gefährlich.

### Quellen

- Jenny Wanger: [Building alone, faster](https://jennywanger.com/articles/building-alone-faster/) (Panel "Blurred Lines", Denver, 2026-09-14)
- CodeMySpec: [Three Amigos: The Gate That Was Missing](https://codemyspec.com/blog/bdd-attention-three-amigos)
- Test Double: [Three Amigos with AI](https://testdouble.com/insights/three-amigos-with-ai-stop-building-the-wrong-thing-faster)
- Medium: [Three AI Amigos](https://medium.com/@asallas/three-ai-amigos-a-multi-model-approach-to-ai-driven-development-2ef7ec2d1ef4)
- George Dinwiddie (2009), Three Amigos
- Teresa Torres: Continuous Discovery Habits (2021), Product Trio
- Anthropic: Claude Tag
