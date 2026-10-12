
# Kategorie
Der grobe Rahmen, der Aktionen und Gegenstände einteilt
- Sie steht für eine grobe Einteilung.
- Du kannst sie zum Beispiel als freien Rahmen einstellen: Nahkampf, Fernkampf, Magie, Verlies, Schmiede, Werkstatt und so weiter.
- Aktionen und Gegenstände werden direkt unter der Welt abgelegt und über die Kategorie-ID verknüpft.
___

## [_Information_](de/editor/information)
___

## Gruppe
Die Anzeigegruppen-Einteilung der Kategorie
- Wende eine von denen an, die in den Gruppen direkt unter der Welt definiert sind.
- Die Kategorieliste wird in der Reihenfolge der eingestellten Gruppen angezeigt.
- [_group_](de/editor/group)
___

## Anfänglicher Freischaltzustand
Der anfängliche Anzeige- und Freischaltzustand des Elements (bei erfüllten Auslösevoraussetzungen geht er automatisch in einen höheren Zustand über)
- secreted: Es erscheint überhaupt nicht in der Oberfläche, bis alle requirements erfüllt sind (es taucht auch nicht in den Hinweisen auf und ist in den Listen der Voraussetzungen und Belohnungen maskiert).
- hidden: Solange kein freigeschaltetes Element darauf verweist und seine Voraussetzungen unerfüllt sind, ist es vollständig verborgen (auch der Name ist ausgegraut und nicht bedienbar).
- hinted (Standard): Nur der Name wird vorab angezeigt, bedienen lässt es sich aber erst nach dem Freischalten.
- released: Es ist unabhängig von den Bedingungen von Anfang an freigeschaltet und bedienbar (früher „von Anfang an anzeigen“).
___

## [_Bedingung_](de/editor/requirement)
___

## Vorhandensein eines Levels
Das Vorhandensein der Kategorielevel-Funktion
- Es ist das Kennzeichen dafür, ob diese Kategorie ein Level besitzt.
- Ist es an, besitzt sie ein Level, ist es aus, besitzt sie keines.
- Als Beispiel gibt es die Verwendung, erfahrungsbasierte Kategorien wie Schwertkunst und Magie anzuschalten und Ortskategorien wie Verlies und Schmiede auszuschalten.
- Ist es aus, kommt keine Erfahrung herein, und in der Berechnung der Eigenschaften wird der Levelunterschied zwischen Spieler und Aktion als 0 behandelt. Die Korrektur der Eigenschaften durch die Ausrüstung wirkt unverändert weiter.
- Eine ausgeschaltete Kategorie wird auch von der Prüfung auf Abschluss (completed) ausgenommen.
___

## Gleichzeitiger Fortschritt
Die Einstellung für den parallelen Ablauf mit anderen Kategorien
- Es ist das Kennzeichen dafür, ob die Aktionen dieser Kategorie parallel zu den Aktionen anderer Kategorien voranschreiten können.
- Ist es an, können sie unabhängig von den Aktionen anderer Kategorien gleichzeitig voranschreiten.
- Ist es aus, kann über alle ebenfalls auf Aus gestellten Kategorien hinweg nur eine einzige Aktion voranschreiten.
- Startest du in einer ausgeschalteten Kategorie eine neue Aktion, wird die laufende Aktion nicht abgebrochen, sondern an den Anfang der Warteschlange zurückgeschoben. Die verbleibende Anzahl der Ausführungen bleibt erhalten, und sobald die dazwischengeschobene Aktion beendet ist, geht sie an der Stelle weiter.
___

## Hintergrund
Die kategorieeigene Hintergrundeinstellung
- Stellt den Hintergrund dieser Kategorie ein.
- Wird die Kategorie ausgewählt, wechselt das Hintergrundbild mit.
- Ist er nicht eingestellt, wird der Hintergrund des Designs unverändert verwendet.
- Beim Einlesen wird es automatisch auf höchstens 256×256 Pixel verkleinert.