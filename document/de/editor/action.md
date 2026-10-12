
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

## Attribut
Die aktionseigene Attributkategorie
- Du kannst ein einzelnes Attribut (eine Kategorie) einstellen.
- Ist das Feld leer, wird die Kategorie übernommen, zu der sie gehört.
- Stellst du zum Beispiel bei einer Aktion, die zu einer Kategorie namens Dämonenschloss gehört, einzeln das Attribut Magie ein, werden für die Abschlusszeit und den Schaden der Aktion das Level und die Eigenschaften der Kategorie Magie berechnet und angewendet.
- Auch die Erfahrung bei Erfolg fließt in die im Attribut eingestellte Kategorie und nicht in die Kategorie, zu der sie gehört.
- Ist an der Aktion selbst keine Farbe eingestellt, übernehmen die Farben von Symbol und Hintergrund die Farbe der im Attribut eingestellten Kategorie und nicht die der Kategorie, zu der sie gehört.
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
Das Schwierigkeitslevel der Aktion
- Die Schwierigkeit der Aktion wird durch ein Level ausgedrückt.
- Bei der Ausführung wird es mit dem Level des Spielers verglichen und jede Eigenschaft berechnet.
- Der Vergleichspartner ist das Level der im Attribut eingestellten Kategorie.
- Führst du zum Beispiel eine Aktion aus, die höher liegt als dein eigenes Level, hat das Folgen wie eine sinkende Erfolgsrate.
- Solange die Bedingungen erfüllt sind, lässt sie sich auch ausführen, wenn das Level des Spielers kleiner ist als dieser Wert.
- Ist allerdings `actionLevelLimit` in den allgemeinen Einstellungen (die Levelgrenze der Aktionen) aktiviert, wird dieser Wert automatisch als Bedingung an das Level der Kategorie angehängt, sodass sie sich erst ausführen lässt, wenn das Level reicht. Bei Kategorien ohne Level wird er nicht angehängt.
- [_property_](de/editor/property)
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