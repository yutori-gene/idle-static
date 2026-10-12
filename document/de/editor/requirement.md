
# Bedingung
Die Einstellung der Bedingungen, die zum Nutzen oder Anzeigen eines Elements nötig sind
- Das sind die Bedingungen, die an den einzelnen Elementen eingestellt werden: Kategorie, Aktion, Gegenstand und Ereignis.
- Solange nicht alle eingestellten Bedingungen erfüllt sind, ist der in der Tabelle genannte Vorgang nicht möglich.
- Je nach Freischaltungseinstellung (unlocked) des Elements erscheint das Element selbst erst dann auf dem Bildschirm, wenn die Bedingungen erfüllt sind.

|Wo es eingestellt wird|Was nicht möglich ist, solange die Bedingungen nicht erfüllt sind|
|-|-|
|Kategorie|Das Ausführen aller Aktionen der Kategorie und das Bedienen ihrer Gegenstände|
|Aktion|Das Ausführen der Aktion|
|Gegenstand|Das Bedienen des Gegenstands (Ausrüsten und Ähnliches)|
|Ereignis|Das Erfüllen einer Aufgabe sowie das Auslösen eines Änderungsereignisses und eines festen Ereignisses|
- [_type_](de/editor/type)
___

## Typ
Die Art des Elements, auf das sich die Bedingung bezieht

|Typ|Der Wert, auf den Bezug genommen wird|
|-|-|
|Kategorie|Das Level der Kategorie|
|Aktion|Die Anzahl der Ausführungen der Aktion|
|Gegenstand|Die Besitzanzahl des Gegenstands|
___

## Die ID des Elements
Die ID des Elements, auf das sich die Bedingung bezieht
- Stelle die ID der Kategorie, der Aktion oder des Gegenstands ein, auf die sich die Bedingung bezieht.
- Ist am Ereignis die Gruppenzählung (requiringGroup) aktiviert, gilt sie als ID einer Gruppe und nicht eines einzelnen Elements.
___

## Wert
Die Zahl, die die Bedingung verlangt
- Die Bedingung ist erfüllt, wenn der angegebene Wert erreicht oder überschritten ist.
- Sie wird als ganze Zahl ab 0 eingestellt. Der Standardwert ist `1`.
___

## Verbrauchswahrscheinlichkeit [0-1]
Die Wahrscheinlichkeit, dass der Gegenstand verbraucht wird (0 bis 1, wirkt nur, wenn der Typ ein Gegenstand ist)
- Das ist die Wahrscheinlichkeit, den Gegenstand zu verbrauchen, wenn die Bedingungen erfüllt sind und die Aktion ausgeführt wird.
- Mit `1` wird er immer verbraucht, mit `0.5` mit 50% Wahrscheinlichkeit, mit `0` gar nicht.
- Der Standardwert ist `1` (immer verbraucht). Bei den Bedingungen eines Ereignisses (Aufgabe, Änderungsereignis, festes Ereignis) ist der Standardwert jedoch `0` (nicht verbraucht), damit dein Bestand beim Erfüllen nicht schrumpft.
- Mit `0` schrumpft der Bestand nicht, sodass du die Aktion beliebig oft ausführen kannst, solange die Besitzanzahl den Wert der Bedingung erreicht. Nutze es, wenn die Bedingung nur sein soll, dass der Gegenstand ausgerüstet ist.
- Ist der Typ kein Gegenstand, wirkt es nicht.
___

## Ausrüstung
Ob als Bedingung verlangt wird, dass der Gegenstand ausgerüstet ist (wirkt nur, wenn der Typ ein Gegenstand ist)
- Aktivierst du es, verlangt die Bedingung nicht nur, den Gegenstand zu besitzen, sondern ihn auch ausgerüstet zu haben.
- Ob er ausgerüstet ist, wird anhand der Ausrüstung der Kategorie entschieden, zu der der Gegenstand gehört.
- Ist der Typ kein Gegenstand, wirkt es nicht.