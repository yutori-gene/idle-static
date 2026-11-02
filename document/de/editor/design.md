
# Design
Die Einstellungen zum Aussehen der Welt, etwa Farben und Schrift
- Es sind die Einstellungen zur Darstellung der Welt.
- Die zwei hier festgelegten Farben (Leistenfarbe und Textfarbe) werden zur Grundlage des gesamten Bildschirms, und alle auf dem Bildschirm verwendeten Farben — die ausgewählte Zeile, die Überschrift einer Gruppe, die Farben für Ja und Nein und so weiter — entstehen daraus.
- Nur das Hintergrundbild lässt sich je Kategorie austauschen, und in dem Fall hat die Einstellung auf Seiten der Kategorie Vorrang.
___

## Leistenfarbe
Die Farbe, die zum Hintergrund der Leiste wird
- Wird als Hintergrundfarbe der Leiste verwendet.
- Da sie zugleich die Farbe ist, die die Grundlage des gesamten Bildschirms bildet, entsteht auch die Farbe der ausgewählten Zeile aus dieser Farbe.
- Die Farbfelder von Elementen ohne eingestellte Farbe und der Hintergrund der Toast-Benachrichtigungen werden zur Mischfarbe zwischen dieser Farbe und der Textfarbe.
___

## Textfarbe
Die Farbe von Text und Hintergrund
- Wird als Farbe des Textes verwendet.
- Auch der Verlauf des Hintergrunds entsteht aus dieser Farbe. Ist ein Hintergrundbild eingestellt, wird derselbe Verlauf aufgehellt und über das Bild gelegt.
- Ein großer Helligkeitsunterschied zur Leistenfarbe macht den Text besser lesbar. In Welten mit kleinem Unterschied lassen sich auch die Farbfelder von Elementen ohne eingestellte Farbe schlechter auseinanderhalten.
___

## Schattenfarbe
Die Farbe des Schattens der Leiste
- Wird als Farbe des Schattens verwendet, der auf die Leisten und die Kopfzeile fällt.
- Wählst du sie dunkler als die Leistenfarbe, wird der Schatten natürlich.
___

## Hintergrundbild
Das Hintergrundbild des gesamten Spiels
- Stellt das Hintergrundbild des Spiels getrennt für Querformat-Bildschirme (Laptop) und Hochformat-Bildschirme (Mobilgerät) ein. Da sich die Seitenverhältnisse der Bildschirme stark unterscheiden, lässt sich für jede Form ein passendes Bild vorbereiten.
- Welches verwendet wird, entscheidet die Ausrichtung des Bildschirms. Dreht man das Gerät oder ändert die Form des Fensters, wird sofort umgeschaltet.
- Ist die zur Bildschirmausrichtung passende Seite leer, wird das andere Bild verwendet. Sind beide leer, wird der Hintergrund zu einem Verlauf auf Basis der Textfarbe.
- Das Bild wird automatisch so verkleinert, dass es in 256×256 Pixel passt. GIF und AVIF werden in PNG umgewandelt.
- Ist bei einer Kategorie ein Hintergrundbild eingestellt, hat auf dem Bildschirm dieser Kategorie das Bild auf Seiten der Kategorie Vorrang. Die Seite der Kategorie hat auch dann Vorrang, wenn sie nur ein Bild hat, das nicht zur Bildschirmausrichtung passt.
- Jedes eingestellte Bild lässt sich mit der Schaltfläche Delete Image löschen, die direkt danach steht.
- [_category_](de/editor/category)
___

### Laptop
Das Hintergrundbild des gesamten Spiels für Querformat-Bildschirme
- Wird verwendet, wenn der Bildschirm breiter als hoch ist. Das betrifft Computer und quer gehaltene Tablets.
___

### Mobilgerät
Das Hintergrundbild des gesamten Spiels für Hochformat-Bildschirme
- Wird verwendet, wenn der Bildschirm mindestens so hoch wie breit ist. Das betrifft Smartphones und hochkant gehaltene Tablets.