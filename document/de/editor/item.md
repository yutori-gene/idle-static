
# Gegenstand
Elemente für Dinge wie Ausrüstung und Verbrauchsgüter
- Es sind die Elemente rund um den Besitz von Dingen wie Ausrüstung, Verbrauchsgütern und Wertsachen.
- Die Ausrüstungsplätze entstehen je Kategorie nach Gruppen, und von den Gegenständen desselben Platzes lässt sich nur einer ausrüsten. Ein Gegenstand lässt sich auch so anlegen, dass er nicht ausgerüstet werden kann.
- Da die Besitzanzahl selbst der Fortschritt ist, lässt sich ein Gegenstand auch wie eine Markierung oder ein Zähler verwenden. Machst du daraus einen Gegenstand ohne Wirkung, der sich auch nicht ausrüsten lässt, wird er zu einem Element, das nur eine Zahl zählt.
___

## [_Information_](de/editor/information)
___

## Kategorie
Die ID der Kategorie, zu der der Gegenstand gehört
- Gib die ID der Kategorie an, zu der dieser Gegenstand gehört. Er reiht sich in die Gegenstandsliste der angegebenen Kategorie ein, und auch die Ausrüstungsplätze entstehen je Kategorie.
- Ist am Gegenstand selbst keine Farbe eingestellt, erbt er die Farbe der Kategorie.
- Wohin die Wirkungen der Eigenschaften reichen, lässt sich getrennt von der Kategorie angeben, zu der er gehört, sodass auch ein Gegenstand einer anderen Kategorie eine Wirkung geben kann.
- [_category_](de/editor/category)
- [_property_](de/editor/property)
___

## Gruppe
Die Einteilung des Gegenstands in eine Anzeigegruppe
- Wende eine von denen an, die in den Gruppen direkt unter der Welt definiert sind.
- Die Gegenstandsliste wird in der Reihenfolge der von dir eingestellten Gruppen angezeigt.
- Bleibt sie leer, wird nicht nach Gruppen aufgeteilt.
- [_group_](de/editor/group)
___

## Anfänglicher Freischaltzustand
Der anfängliche Anzeige- und Freischaltzustand des Elements (bei erfüllten Auslösevoraussetzungen geht er automatisch in einen höheren Zustand über)
- secreted: Es erscheint überhaupt nicht in der Oberfläche, bis alle requirements erfüllt sind (es taucht auch nicht in den Hinweisen auf und ist in den Listen der Voraussetzungen und Belohnungen maskiert).
- hidden: Solange kein freigeschaltetes Element darauf verweist und seine Voraussetzungen unerfüllt sind, ist es vollständig verborgen (auch der Name ist ausgegraut und nicht bedienbar).
- hinted (Standard): Nur der Name wird vorab angezeigt, bedienen lässt es sich aber erst nach dem Freischalten.
- released: Es ist unabhängig von den Bedingungen von Anfang an freigeschaltet und bedienbar (früher „von Anfang an anzeigen“).
- Ist ein Gegenstand auch nur einmal erlangt worden, bleibt er unabhängig von dieser Einstellung und den Bedingungen freigeschaltet.
- Umgekehrt wird ein Gegenstand, bei dem keine einzige Bedingung eingestellt ist, erst freigeschaltet, wenn er erlangt wird, sofern du ihn nicht auf `released` setzt. Stelle bei Gegenständen, die gekauft werden sollen, immer Bedingungen ein.
___

## Kaufpreis [Münzen]
Die Einstellung des Kaufpreises des Gegenstands
- Es ist die Menge an Währung, die du beim Kauf eines Stücks des Gegenstands zahlst. Der Standardwert ist `-1` (nicht kaufbar).
- Ein Gegenstand, der nicht freigeschaltet ist, lässt sich auch mit eingestelltem Preis nicht kaufen.
- Wie viel du auf einmal kaufen kannst, ist der kleinere Wert aus dem, was du mit der besessenen Währung kaufen kannst, und dem Rest bis zur maximalen Besitzanzahl.

|Kaufpreis|Behandlung|
|-|-|
|0|Nicht kaufbar|
|Ein Wert größer als 0|Der Preis, zu dem er gekauft werden kann|
|Ein Wert kleiner als 0 (zum Beispiel -1)|Nicht kaufbar (wie 0 behandelt)|
___

## Verkaufspreis [Münzen]
Die Einstellung des Verkaufspreises des Gegenstands
- Es ist die Menge an Währung, die du beim Verkauf eines Stücks des Gegenstands erhältst. Der Standardwert ist `0` (nicht verkaufbar).
- Die Währung, die du erhältst, ist dieselbe wie beim Kauf: die über die Handelswährungs-ID angegebene.
- Er ergibt sich nie automatisch aus dem Kaufpreis, stelle also immer einen Wert ein, wenn er verkaufbar sein soll.
- Negative Werte lassen sich nicht einstellen.

|Verkaufspreis|Behandlung|
|-|-|
|0|Nicht verkaufbar|
|Ein Wert größer als 0|Er kann zu diesem Preis verkauft werden|
___

## Maximale Besitzanzahl [Stück]
Die Begrenzung der maximalen Besitzanzahl des Gegenstands
- Bei 0 gibt es keine Begrenzung für die Menge, die besessen werden kann. Der Standardwert ist `0`.
- Bei 1 oder mehr lässt sich nur bis zu dieser Anzahl besitzen. Ist die Grenze erreicht, steigt die Besitzanzahl auch dann nicht, wenn du mehr erlangst.
- Sie wird auch zur Obergrenze der Menge, die gekauft werden kann.
- Übersteigt die Besitzanzahl im Spielstand die Grenze, wird sie beim Laden auf die Grenze verringert.
___

## Ausrüstungstyp
Die Typeinstellung rund um Ausrüsten, Wirkung und Verbrauch des Gegenstands
- Bei Gegenständen mit `necessary` und `consumable` wird deren Gruppe automatisch zu einem Ausrüstungsplatz der Kategorie.
- Innerhalb derselben Gruppe lässt sich nur ein Gegenstand ausrüsten. Rüstest du einen neuen Gegenstand aus, wird die vorhandene Ausrüstung derselben Gruppe automatisch abgelegt.
- Die Reihenfolge der Ausrüstungsplätze richtet sich nach der Definitionsreihenfolge der Gruppenliste der Welt.
- `unnecessary` wirkt unabhängig davon, ob er ausgerüstet ist, und die Höhe der Wirkung ist proportional zur Besitzanzahl (bei 0 keine Wirkung, bei n Stück das n-Fache).
- `consumable` wird nur dann verbraucht, wenn die Eigenschaften dieses Gegenstands auf die ausgeführte Aktion wirken, und zwar ein Stück je Aktion. Bei Aktionen, die seine Wirkung nicht erreicht, nimmt er nicht ab.
- Ein Gegenstand, der bis auf 0 verbraucht ist, wird automatisch abgelegt.
- Zum Ausrüsten müssen sowohl die Bedingungen dieses Gegenstands als auch die der Kategorie erfüllt sein.

|Wert|Ausrüstung|Wirkung|Verbrauch|Beispiel|
|-|-|-|-|-|
|`necessary`|Nötig|Nur ausgerüstet (für ein Stück)|Nein|Ausrüstung wie Schwerter und Rüstungen|
|`consumable`|Nötig|Nur ausgerüstet (für ein Stück)|Wird beim Ausführen der Aktion verbraucht|Gegenstände, die für eine Wirkung verbraucht werden, etwa Tränke|
|`unnecessary`|Nicht nötig|Immer im Besitz (proportional zur Besitzanzahl)|Nein|Passive Gegenstände, die schon durch das Halten wirken|
|`impossible`|Nicht möglich|Keine|Nein|Gegenstände ohne Wirkung, etwa Material und Kram|
___

## [_Bedingung_](de/editor/requirement)
___

## [_Eigenschaft_](de/editor/property)
___

## Handelswährungs-ID
Die ID der Währung, die für den Handel mit diesem Gegenstand verwendet wird
- Gib die ID der Währung (coins) an, die für Kaufpreis und Verkaufspreis gemeinsam verwendet wird.
- Bleibt sie leer oder gibst du eine ID an, die nicht in der Währungsliste steht, wird die Hauptwährung (die erste in coins) verwendet.
___

## [_Fähigkeit_](de/editor/skill)