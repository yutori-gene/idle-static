
# Erhalt
Die Einstellung des Erhalts von Gegenständen und Kategorieleveln
- Stelle ein, was erhalten wird.
- Neben Gegenständen lassen sich das Level einer Kategorie und die Anzahl der Ausführungen einer Aktion ändern.
- Die Wahrscheinlichkeit des Erhalts lässt sich einstellen.

|Typ|Was erhalten wird|
|-|-|
|Kategorie|Level|
|Aktion|Anzahl der Ausführungen|
|Gegenstand|Besitzanzahl|
- [_type_](de/editor/type)
___

## Typ
Die Art des Elements, das erhalten wird

|Typ|Was erhalten wird|
|-|-|
|Kategorie|Level (der eingestellte Wert wird unmittelbar addiert)|
|Aktion|Anzahl der Ausführungen|
|Gegenstand|Besitzanzahl|
___

## Die ID des Elements
Die ID, die das zu erhaltende Element bezeichnet
___

## Wert
Die Zahl, die erhalten wird
- Stellst du einen negativen Wert ein, sinken Besitzanzahl, Anzahl der Ausführungen oder Level. Unter 0 fallen sie allerdings nicht.
- Ist am Gegenstand ein maximaler Besitz (maximum) eingestellt, wächst die Besitzanzahl nicht über diesen Wert hinaus.
- Ist der Typ eine Kategorie, wird der eingestellte Wert unmittelbar zum Level addiert (1 ist ein Level). Üblich ist, das über die Erfahrungseinstellung der Aktion zu regeln. Ohne besonderen Zweck ist diese Einstellung nicht nötig.
- Das Level einer Kategorie fällt nicht unter 0 und übersteigt auch nicht `maxCategoryLevels` in den allgemeinen Einstellungen (das maximale Level einer Kategorie).
- Der Wert wird als ganze Zahl eingestellt.
___

## Wahrscheinlichkeit [-1 bis 1]
Die Wahrscheinlichkeit, dass der Erhalt gelingt (ein negativer Wert wird nur bei Misserfolg geprüft)
- Stelle die Wahrscheinlichkeit des Erhalts als Dezimalzahl von -1 bis 1 ein. Für die Prüfung wird der Absolutwert verwendet.
- Bei einem positiven Wert wird nur bei Erfolg der Aktion geprüft: mit `1` bekommst du es immer, mit `0.5` mit 50% Wahrscheinlichkeit.
- Bei einem negativen Wert wird nur bei Misserfolg der Aktion geprüft: mit `-1` bekommst du es immer, mit `-0.5` mit 50% Wahrscheinlichkeit.
- Mit `0` bekommst du es weder bei Erfolg noch bei Misserfolg.
- Der Standardwert ist `1` (bei Erfolg immer erhalten).