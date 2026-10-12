
# Überblick
Die Grundangaben zur Welt und die Angaben zum Autor
- Es sind die Felder, die den Inhalt der Welt erklären.
- Stelle sie so ein, dass sie verständlich sind, wenn ein Benutzer die Welt auswählt.
- Abgesehen von der URL haben diese Einstellungen keinen Einfluss auf den Spielverlauf.
___

## [_Information_](de/editor/information)
___

## Version
Die Versionsnummer der Welt
- Gib eine Zahl ab `0` ein (ganzzahlig oder mit Nachkommastellen). Der Standardwert ist `0`.
- Im Allgemeinen steht der ganzzahlige Teil für die Hauptversion und der Nachkommateil für die Nebenversion.
- Die Version der Entwicklung (development) ist die Version des Editors und damit etwas anderes.
___

## Name des Autors
Der Name des Autors der Welt
- Gib einen Nutzernamen oder einen Spitznamen ein.
- Er muss 3 bis 20 Zeichen lang sein, und es lassen sich nur halbbreite Buchstaben und Ziffern, Leerzeichen sowie `!` `?` `.` `,` `-` verwenden.
___

## Homepage
Die URL der Website des Autors
- Wenn du eine eigene Homepage oder soziale Netzwerke hast, gib deren URL ein.
- Der Spieler kann diese URL über den Link einsehen.
- Trifft nichts zu, lass das Feld leer. Der Anfangswert ist `https://`.
___

## URL
Die URL des Spiels
- Gib die URL ein, unter der das Spiel dieser Welt abgelegt wird.
- Gib die URL einer Startseite wie index.html samt Domain ein.
- Es ist ein Feld, um festzuhalten, wo die Welt abgelegt wurde. Steht der Ablageort noch nicht fest, lass das Feld leer.
- Eine veröffentlichte Welt läuft als PWA. Eine PWA ist eine Funktion, mit der sie sich installieren lässt und wie eine App läuft, die sich auch offline spielen lässt.
- Die Einstellungen der PWA werden mit relativen Pfaden erzeugt, deshalb läuft sie unabhängig vom Wert dieses Feldes an ihrem Ablageort unverändert.
___

## Geschätzte Spielzeit
Die Richtzeit bis zum Durchspielen der Welt
- Es ist die geschätzte Spielzeit, die nötig ist, um die Welt zu Ende zu spielen.
- Sie lässt sich als Anhaltspunkt einsehen, wenn der Spieler spielt.
- Es ist lediglich eine Richtzeit, und es gibt keine klare Festlegung, was als Abschluss der Welt gilt.
___

### Wert
Die Zahl der Spielzeit
- Wird als ganze Zahl ab `1` eingestellt. Der Standardwert ist `1`.
___

### Einheit
Die Zeiteinheit (Stunden, Minuten und so weiter)
- Wird aus Sekunden, Minuten, Stunden, Tagen, Jahren, Jahrhunderten und Unendlich ausgewählt. Der Standardwert ist Tage.
- Unendlich wird für Welten ohne Ende verwendet.