
# Aktion
Die Handlungselemente wie Sammeln, Herstellen und Kampf
- Es ist ein Element, das eine Handlung darstellt, etwa Sammeln, Herstellen, Handeln oder Kampf.
- Mit jeder Handlung erhältst du Erfahrung und dein Level steigt.
- Du kannst einstellen, dass mit jeder Handlung Gegenstände verbraucht oder erhalten werden.
- Von den Handlungsmustern gibt es mehrere Arten.
___

## [_Information_](de/editor/information)
___

## Kategorie
Die ID der Kategorie, zu der die Aktion gehört
- Gib die ID der Kategorie an, zu der diese Aktion gehört.
___

## Disziplin
Die Kategorie, in die die Erfahrung fließt und die als Maßstab für die Stärke dient
- Für jede Aktion kannst du eine andere Kategorie als die, zu der sie gehört, als Disziplin einstellen.
- Bleibt das Feld leer, wird die Kategorie, zu der sie gehört, zur Disziplin.
- Stellst du zum Beispiel bei einer Aktion, die zu einer Kategorie namens Dämonenschloss gehört, die Disziplin Magie ein, werden für die Abschlusszeit und den Schaden der Aktion das Level und die Eigenschaften der Kategorie Magie berechnet und angewendet.
- Bei einer Aktion mit eingestellter Disziplin trägst du das für die Kategorie der Disziplin nötige Level im Level der Disziplin (`disciplineLevel`) ein.
- Die Erfahrung bei Erfolg wird nach der Rückgaberate der Erfahrung (`experienceReturnRate`) aus den allgemeinen Einstellungen auf die Kategorie, zu der die Aktion gehört, und die als Disziplin eingestellte Kategorie aufgeteilt.
- Auch die Wirkungen von Gegenständen (Korrekturen der Eigenschaften, Fähigkeiten und der Verbrauch von Verbrauchsgegenständen) werden nur angewendet, wenn sie auf die als Disziplin eingestellte Kategorie zielen. Wirkungen, die auf die Kategorie zielen, zu der die Aktion gehört, werden bei einer Aktion mit eingestellter Disziplin nicht angewendet.
- Solange die als Disziplin eingestellte Kategorie nicht freigeschaltet ist, wird auch die Aktion nicht freigeschaltet, selbst wenn die Kategorie, zu der sie gehört, freigeschaltet ist.
- Ist an der Aktion selbst keine Farbe eingestellt, übernehmen die Farben von Symbol und Hintergrund die Farbe der als Disziplin eingestellten Kategorie und nicht die der Kategorie, zu der sie gehört.
- [_category_](de/editor/category)
___

## Gruppe
Die Anzeigegruppen-Einteilung der Aktion
- Wende eine von denen an, die in den Gruppen direkt unter der Welt definiert sind.
- Die Aktionsliste wird in der Reihenfolge der eingestellten Gruppen angezeigt.
- [_group_](de/editor/group)
___

## Anfänglicher Freischaltzustand
Der anfängliche Anzeige- und Freischaltzustand des Elements (bei erfüllten Auslösevoraussetzungen geht er automatisch in einen höheren Zustand über)
- secreted: Es erscheint überhaupt nicht in der Oberfläche, bis alle requirements erfüllt sind (es taucht auch nicht in den Hinweisen auf und ist in den Listen der Voraussetzungen und Belohnungen maskiert).
- hidden: Solange kein freigeschaltetes Element darauf verweist und seine Voraussetzungen unerfüllt sind, ist es vollständig verborgen (auch der Name ist ausgegraut und nicht bedienbar).
- hinted (Standard): Nur der Name wird vorab angezeigt, bedienen lässt es sich aber erst nach dem Freischalten.
- released: Es ist unabhängig von den Bedingungen von Anfang an freigeschaltet und bedienbar (früher „von Anfang an anzeigen“).
___

## Level
Das Schwierigkeitslevel der Aktion gegenüber der Kategorie, zu der sie gehört
- Die Schwierigkeit der Aktion wird durch ein Level der Kategorie ausgedrückt, zu der sie gehört.
- Bei einer Aktion ohne Disziplin wird dieser Wert beim Ausführen mit dem Level der Kategorie verglichen, zu der sie gehört, um jede Eigenschaft zu berechnen.
- Bei einer Aktion mit eingestellter Disziplin wird für die Berechnung der Eigenschaften das Level der Disziplin (`disciplineLevel`) verwendet; dieser Wert dient nur zur Berechnung der Erfahrung für die eigene Kategorie und für die Levelbedingung beim Ausführen.
- Führst du zum Beispiel eine Aktion aus, die höher liegt als dein eigenes Level, hat das Folgen wie eine sinkende Erfolgsrate.
- Solange die Bedingungen erfüllt sind, lässt sie sich auch ausführen, wenn das Level des Spielers kleiner ist als dieser Wert.
- Ist allerdings `actionLevelLimit` in den allgemeinen Einstellungen (die Levelgrenze der Aktionen) aktiviert, wird dieser Wert automatisch als Bedingung an das Level der Kategorie angehängt, sodass sie sich erst ausführen lässt, wenn das Level reicht. Bei Kategorien ohne Level wird er nicht angehängt.
- [_property_](de/editor/property)
___

## Level der Disziplin
Das Schwierigkeitslevel der Aktion gegenüber der Kategorie der Disziplin
- Das für die Kategorie der Disziplin nötige Level bei einer Aktion mit eingestellter Disziplin (`discipline`). Ist eine Disziplin eingestellt, ist ein Wert von `1` oder mehr Pflicht.
- Bei einer Aktion ohne Disziplin wird er nicht verwendet. Lass ihn auf `0`.
- Beim Ausführen wird dieser Wert mit dem Level der Kategorie der Disziplin verglichen, um jede Eigenschaft und die Erfahrung für die Kategorie der Disziplin zu berechnen.
- Ist `actionLevelLimit` (die Levelgrenze für Aktionen) in den allgemeinen Einstellungen aktiviert, wird er zusammen mit dem Level der Kategorie, zu der die Aktion gehört (`level`), automatisch als Bedingung hinzugefügt.
- [_property_](de/editor/property)
- [_category_](de/editor/category)
___

## [_Bedingung_](de/editor/requirement)
___

## Benötigte Zeit [Sekunden]
Die Standardzeit, die die Ausführung der Aktion braucht
- Es ist die Standardzeit (in Sekunden), die für eine einmalige Ausführung der Aktion nötig ist.
- Beim Typ `stamina` ist es der Zeitabstand, den eine Runde braucht (die Ausdauer beider Seiten je einmal abtragen). Die Runden, die nach der Entscheidung die Ausdauer wiederherstellen, laufen im selben Abstand.
- Bei der tatsächlichen Ausführung schwankt sie durch die Berechnung der Eigenschaften.
- [_property_](de/editor/property)
___

## Erfahrung [100 für das nächste Level]
Die bei Erfolg der Aktion erhaltene Erfahrung
- Es ist die Standarderfahrung, die du erhältst, wenn die Aktion einmal ausgeführt wird und gelingt. 100 ist die Erfahrung für ein Level.
- Beim Kampf erhältst du sie, wenn du den Gegner besiegst, deshalb ist es gut, sie großzügig einzustellen.
- Bei der tatsächlichen Ausführung schwankt sie durch die Berechnung der Eigenschaften.
- Bei einer Aktion mit eingestellter Disziplin wird die Erfahrung aus diesem Wert jeweils mit dem Levelunterschied der Kategorie, zu der sie gehört, und der Kategorie der Disziplin berechnet und nach der Rückgaberate der Erfahrung (`experienceReturnRate`) aus den allgemeinen Einstellungen aufgeteilt.
- [_property_](de/editor/property)
___

## Erfolgsrate [0-1]
Die Erfolgswahrscheinlichkeit beim Abschluss der Aktion
- Es ist die Wahrscheinlichkeit, beim Abschluss der Aktion Erfolg zu haben.
- Bei `1` gelingt sie immer, bei `0` misslingt sie immer.
- Auch bei einem Misserfolg werden die verbrauchten Gegenstände verbraucht, aber die Erfahrung und die Anzahl der Ausführungen steigen nicht.
- Von den Belohnungen erhältst du bei Erfolg nur die, deren Wahrscheinlichkeit (chance) auf einen positiven Wert gesetzt ist. Die mit einem negativen Wert erhältst du nur bei einem Misserfolg, deshalb heißt Misslingen nicht zwangsläufig, dass du nichts bekommst.
- Bei der tatsächlichen Ausführung schwankt sie durch die Berechnung der Eigenschaften.
___

## Maximale Anzahl der Ausführungen [Mal]
Die maximale Anzahl, wie oft die Aktion abgeschlossen werden kann
- Es ist die Obergrenze dafür, wie oft die Aktion gelingen und abgeschlossen werden kann.
- Bei `0` ist sie unbegrenzt.
- Ist die Obergrenze erreicht, lässt sich die Aktion nicht mehr ausführen.
___

## [_Erhalt_](de/editor/acquisition)
___

## Fortschrittstyp
Der Ausführungstyp der Aktion
- Es gibt vier Arten.

|Typ|Verhalten|Ausdauer|Beispiel|
|-|-|-|-|
|`persistent`|Ein Typ, bei dem die Aktion dauerhaft und wiederholt ausgeführt wird. Mit jedem einzelnen Abschluss erhältst du Erfahrung und eine Belohnung.|Kein Bezug|Holzfällen, Bergbau, Angeln|
|`single`|Führt die Aktion einmal aus. Wird sie mittendrin unterbrochen, wird der Fortschritt gespeichert und du kannst beim nächsten Mal an der Stelle weitermachen. Nach dem Abschluss drückt der Benutzer die Bestätigungsaktion und nimmt das Ergebnis entgegen.|Kein Bezug|Eine Schatztruhe knacken, eine Fähigkeit durch Lesen erlernen|
|`snap`|Ein Typ, bei dem die Aktion augenblicklich ausgeführt wird. Sie ist ohne Zeitverlauf sofort abgeschlossen.|Kein Bezug|Tauschhandel, Verwendung eines Gegenstands|
|`stamina`|Mit jeder benötigten Zeit sinkt die Ausdauer des Spielers und die des Gegners jeweils. Geht die Ausdauer des Gegners aus, erhältst du Erfahrung und eine Belohnung. Geht die Ausdauer des Spielers aus, ist das Spiel vorbei und alle laufenden Aktionen werden abgebrochen.|Mit Bezug|Kampf, Arbeit, die mit Gefahr verbunden ist|
___

## [_Kampfwerte_](de/editor/combat)
___

## [_Fähigkeit_](de/editor/skill)