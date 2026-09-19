---
title: "Die Faulheit siegt"
subtitle: "Der beste Entwickler ist ein fauler Entwickler. Ich habe das ernst genommen."
date: 2026-09-19
slug: die-faulheit-siegt
description: "Eine Erzählung in fünf Kapiteln: aus einem Homelab wird über Jahre hinweg immer mehr Automatisierung - und aus einem Wochenendprojekt etwas, das nie mehr stillsteht. Die Geschichte ist wahr, die Technik darin nur ungefähr."
tags: [homelab, agentic-engineering, narrative]
---

## Kapitel 1 - Investition

Nur einen neuen Service im Homelab installieren, ist ja eh schon ein fertiger Container, den muss ich nur starten. Dann noch eine Datenbank dazu, hinter den Reverse Proxy hängen, Zertifikat einbinden, an den lokalen Auth Provider anbinden, damit die ganze Family es nutzen kann, ins Monitoring und einen Link aufs Dashboard. Und schon wieder ist ein ganzer Abend dahin und das Wochenende fast vorbei.

Inzwischen plane ich sehr genau, ob und welche Tools ich wirklich im Homelab ausprobieren möchte oder ob ich hier wirklich noch eine Schnittstelle zwischen zwei Services bauen möchte. Die Skills sind da, die Zeit ist knapp. Mittlerweile ist es selten geworden, dass ich mich noch überwinde, ein neues Projekt zu starten.

Wir schreiben das Jahr 2025 und ich habe erst kürzlich, bevor die RAM-Preise komplett durch die Decke gegangen sind, mein Homelab noch um einen Server erweitert. Dieser Server überlastet trotz der noch niedrigen Auslastung meine thermischen Konzepte komplett. Eine Lösung musste her, und dank AI-Brainstorming war auch bald klar, es wird eine Individuallösung. Mein Agent schreibt mir eine Artikelliste, den Bauplan und den Code für meine Lüftersteuerung und dokumentiert das Ganze noch dazu perfekt. Lediglich das Löten und Zusammenstecken obliegt noch mir. Schon ein paar Wochen später baue ich die Steuerung ein zweites Mal nach, komplett auf Basis der Dokumentation. Ich bin begeistert - Hardware, Software, alles kein Problem, denke ich mir.

Das war auch der Anstoß für mein nächstes ambitioniertes Projekt, in der Hoffnung, dass es das letzte Mal ist, dass ich mich so schwerfällig an eine solche Aufgabe mache. Der Plan ist nichts weniger, als das ganze Homelab auf Infrastructure as Code umzustellen und Änderungen primär via AI-Agents vorzunehmen.

Gesagt, getan: Wenige Tage später stehe ich mit meinem Git-Repository und Ansible an einem Punkt, den ich mir nie zu träumen gewagt habe. Dieses Setup war schon immer mein Ziel, aber ohne AI-Unterstützung lag es in unerreichbarer Ferne. Der Agent schlägt Änderungen vor, ich reviewe und deploye die Konfiguration, wenn sie mir gefällt. Änderungen, die vorher Tage oder Wochen gebraucht haben, gehen innerhalb von Minuten.

Noch schnell ein Prompt, dann ab ins Bett.

## Kapitel 2 - Delegation

"Was ist das schon wieder für ein Lärm?", fragt meine Frau sichtlich genervt. Dass dieses Geräusch dem Schutz der sensiblen, teuren Server-Hardware dient, interessiert sie wenig. Also nehme "ich" mich des Problems an und frage meinen Agent, warum der Lüfter der selbst programmierten Lüftersteuerung immer wieder so laut ist, obwohl ich eine ziemlich statische Auslastung meiner Dienste habe. Prompt kommt die Antwort, belegt mit unzähligen Werten aus den Logs der vergangenen Tage und dazu eine neue Version der Steuerungssoftware. Der Haussegen ist gerettet.

Um diese angenehme Arbeitsweise in noch mehr Bereichen zu nutzen, binde ich immer mehr Dienste aus dem Homelab an, damit der Agent sie steuern kann. Teilweise sind hierfür kleine Software-Projekte zu schreiben, aber auch das macht unser Agent mit links.

So folgt eine Verbesserung der nächsten, und die Anfragen an die AI werden immer komplexer und brauchen immer länger, um erfüllt zu werden. Es entstehen kleine Services für den Betrieb, Einmalscripts und Dokumentation in einer Geschwindigkeit, die mein Verständnis inzwischen übersteigt. Aber gut, man muss sich auch nicht mit jeder Komponente auskennen, es reicht zu verstehen, wie die Dinge zusammenhängen. Wenn mich die Details interessieren, könnte ich ja noch die Dokumentation lesen, die ich meinen Agent schreiben lasse.

Schon bald reicht mir das Prompten nicht mehr. Ich baue einen Server mit einer Applikation, die in einer Schleife läuft, sich ihre Workloads aus einem lokalen Git holt und die Änderungen wieder committet. Dazu ein SDLC, dem wir folgen wollen. Dann Modelle vergleichen, Benchmarks, Kostenkontrolle. Meine erste kleine Software-Factory ist entstanden und ich programmiere nicht mehr.

Begeistert von dem neuen Grad der Automatisierung komme ich nicht umhin, zu bemerken, dass die Lösungen, die daraus entstehen, keine Werke mehr sind. Auf meine alten Sachen war ich stolz. Ich habe daran gebastelt, oft über Jahre, und es hat wehgetan, sie irgendwann abzudrehen. Was die Factory ausspuckt, ist Mittel zum Zweck, ein bestelltes Produkt. Passt es nicht mehr, wird es ersetzt oder umgeschrieben. Die Factory macht's möglich.

Der größte Konsument der Factory ist die Factory, und so entstehen schnell weitere Mechanismen, ausgereiftere SDLCs und ein Sandboxed Environment. So kann ich die auf mich zugeschnittene Factory guten Gewissens Tag und Nacht laufen lassen.

Ich muss regelmäßig Token nachkaufen, damit die Factory am Laufen bleibt. Irgendwann wundere ich mich, wo die neuen Features bleiben. Tokens gehen rein, aber keine Features heraus. Das Blöde an einer Sandbox ist, sie ist auch zum größten Teil eine Blackbox. Ich habe ein neues Ziel.

Noch schnell ein Feature in Auftrag geben, dann ab ins Bett.

## Kapitel 3 - Zuständigkeit

Die Factory baut Software, der Homelab-Agent verwaltet meine Infrastruktur. Beide Systeme funktionieren für sich schon, und wenn sie überlappen, dann bin ich dazwischen.

Die Factory plant, ich übergebe die Anforderungen an den Homelab-Agent und der setzt sie mit eigenen Anpassungen um. Die Dokumentation gebe ich zurück an die Factory. Ich könnte mich in den Ansible-Stack einarbeiten und es selbst machen, aber dafür ist mir der Abend zu schade.

Die Factory soll skalieren und das gehört überwacht. Logs müssen gesammelt und zentral zugänglich gemacht werden. Die Factory baut das Logging, der Homelab-Agent stellt die Services zur Log-Aggregation bereit. Den Contract machen sie über mich aus. Ich vermittle und warte ungeduldig auf das Ergebnis auf beiden Seiten.

Ein Ping-Pong zwischen Software-Schmiede und Infrastruktur. Jeder hat seine Aufgaben und seine Grenzen, dazwischen vermittle ich. Nichts davon habe ich geschrieben.

Noch schnell die Infos weiterleiten, dann ab ins Bett.

## Kapitel 4 - Steuerung

Die Factory funktioniert, sie nimmt Fahrt auf, die Richtung stimmt!

Inzwischen hat der Backlog ein beachtliches Ausmaß erreicht. Um die Kontrolle zu behalten, ist das nächste Feature die Möglichkeit zu priorisieren und der Factory die Reihenfolge vorzugeben, in der Tickets bearbeitet werden. Ich möchte aktiv benachrichtigt werden, wenn die Agents mich brauchen, statt immer nachzusehen, wie der Status ist.

Also kommen als Nächstes Kostenmetriken, Statistiken in einem Dashboard, Performance- und Qualitäts-Messungen zu den einzelnen Schritten im SDLC. Notifications, Übersichten, um zu sehen, wo ich gerade gebraucht werde, Cache Hit Rate, Statusabfragen, Logs und Metriken auch bei Timeout und Fehlern. Zwischendurch hin und wieder ein einzelnes Feature.

Noch schnell ein letzter Blick auf die Metriken, dann ab ins Bett.

## Kapitel 5 - Wettbewerb

Die Factory läuft.

Ich brauche neue Features.

Immerhin habe ich schon so viel Zeit und Energie hineingesteckt, das muss sich auch auszahlen.

Stillstand ist schlecht.

Immer auf der Hut, gibt es was Neues?

Ein neues Tool im Newsfeed.

Ein Video über einen optimierten Workflow.

Ein Kollege, der mir zeigt, was noch alles möglich ist.

Kann meine Factory mithalten?

Arbeitet sie effizient genug?

Ist sie noch auf dem Stand der Technik?

Klassische Gedanken eines CEOs mit mehr technischem Interesse, als gut für ihn ist.

Noch schnell schauen ob alles läuft.

---

_Das ist meine Geschichte, nicht mein Changelog. Sie ist wahr, die Technik darin ist es nur ungefähr._
