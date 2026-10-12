
# Aufgabe
Eine Mission, die als erreicht gilt, wenn die Bedingungen erfüllt sind
- Sie gilt als erreicht, wenn die von dir eingestellten Bedingungen erfüllt sind, und oben am Bildschirm erscheint eine Meldung.
- Sie erscheint in der Missionsliste des Players und in der Aufgabenliste der Kategorie.
- Eine Aufgabe ohne eingestellte Bedingungen wird nie erreicht.
- Einmal erreicht, bleibt sie erreicht, auch wenn die Bedingungen danach nicht mehr erfüllt sind, und die Belohnung lässt sich jederzeit abholen.
- Die Belohnung wird nicht automatisch übergeben. Der Spieler erhält sie, wenn er die Aufgabe öffnet und die Leiste Erhalt drückt.
- Bis die Belohnung abgeholt ist, trägt die Leiste in der Liste ein Band, das zeigt, dass sie noch nicht abgeholt wurde.
- Eine Aufgabe ohne eingestellte Belohnung zeigt keine Leiste Erhalt und ist in dem Moment abgeschlossen, in dem sie erreicht wird.
- Solange die Zahl der Gegenstandsarten, die du halten kannst, am Limit ist, kannst du die Belohnung nicht abholen. Räume deinen Bestand auf und hole sie erneut ab.
- Mit dem Erhalt kannst du das Level einer Kategorie, die Anzahl der Ausführungen einer Aktion und die Besitzanzahl eines Gegenstands verändern.
- Was du zu einem anderen Zeitpunkt als über die Bedingungen auslösen willst, etwa beim ersten Start oder bei Spielende, stellst du mit einem festen Ereignis (unique) ein.
- [_unique_](de/editor/unique)
___

## [_Information_](de/editor/information)
___

## Kategorie
Die ID der Kategorie, zu der die Aufgabe gehört
- Gib die ID der Kategorie an, zu der diese Aufgabe gehören soll.
- Ist sie eingestellt, wird dem Kategoriebildschirm des Players die Aufgabenliste hinzugefügt, und in der Missionsliste werden sie ebenfalls nach Kategorie zusammengefasst angezeigt.
- Bleibt sie leer, gehört die Aufgabe zu keiner Kategorie und wird gesammelt am Anfang der Missionsliste angezeigt.
- Ist an der Aufgabe selbst keine Farbe eingestellt, erbt sie die Farbe der Kategorie.
- [_category_](de/editor/category)
___

## Zeitpunkt
Der Zeitpunkt, zu dem die Aufgabe auslöst (fest auf `tasked`)
- Bei einer Aufgabe ist `tasked` (wenn die von dir eingestellten Bedingungen erfüllt sind) fest vorgegeben und nicht bearbeitbar.
- Die Belohnung lässt sich nur einmal abholen, und nach dem Abholen bleibt die Aufgabe erreicht, ohne sich weiter zu ändern.
- Was du zu einem anderen festen Zeitpunkt auslösen willst, stellst du mit einem festen Ereignis (unique) ein.
- [_unique_](de/editor/unique)
___

## Anfänglicher Anzeigezustand
Der anfängliche Anzeigezustand des Aufgabensymbols (das Erreichen entscheiden die Bedingungen, und diese Einstellung erreicht es nicht)
- Die Bedingungen für das Erreichen einer Aufgabe entscheidet requirements, und dieses Feld wirkt sich nur auf das Aussehen des Symbols in der Liste aus.
- secreted: Sie erscheint überhaupt nicht in der Aufgabenliste, bis alle requirements erfüllt sind (das Erreichen selbst geschieht weiterhin über die Bedingungen).
- hidden und hinted: Das Symbol wird durchgestrichen als noch nicht freigeschaltet angezeigt.
- released: Der Strich verschwindet, und es wird als bereits freigeschaltet angezeigt.
- Eine einmal erreichte Aufgabe verschwindet nicht aus der Liste und wird weiter als erreicht angezeigt, auch wenn die Bedingungen danach nicht mehr erfüllt sind.
___

## [_Bedingung_](de/editor/requirement)
___

## Gruppensummierung
Behandelt die id in den Bedingungen als Gruppen-ID und urteilt nach dem Gesamtwert der Elemente, die zu ihr gehören
- Ist sie aktiviert, wird die id, die du in den Bedingungen (requirements) einstellst, als ID einer Gruppe direkt unter der Welt behandelt.
- Eine Bedingung vom Typ Kategorie wird nach der Summe der Level aller Kategorien beurteilt, die zu dieser Gruppe gehören.
- Eine Bedingung vom Typ Aktion wird nach der Summe der Ausführungen aller Aktionen beurteilt, die zu dieser Gruppe gehören.
- Eine Bedingung vom Typ Gegenstand wird nach der Summe der Besitzanzahl aller Gegenstände beurteilt, die zu dieser Gruppe gehören.
- Elemente, die nicht freigeschaltet sind (jeder Zustand außer released), zählen nicht zur Summe.
- Die Verbrauchswahrscheinlichkeit (chance) und die Ausrüstungsbedingung (equipment) eines Gegenstands werden ignoriert, und die Besitzanzahl wird auch nicht verbraucht. Sie dienen nur der Beurteilung.
- Ist sie deaktiviert, wird die id in den Bedingungen wie bisher als ID einer einzelnen Kategorie, Aktion oder eines einzelnen Gegenstands behandelt.
- [_group_](de/editor/group)
___

## [_Erhalt_](de/editor/acquisition)
___

## Aufgabengruppe
Die Einteilung der Aufgabe in eine Anzeigegruppe
- Wende eine von denen an, die in den Gruppen direkt unter der Welt definiert sind.
- In der Aufgabenliste einer Kategorie werden sie nach Gruppen getrennt mit je einer Überschrift angezeigt. Aufgaben ohne eingestellte Gruppe bilden ebenfalls einen Block, und als dessen Überschrift wird die Voreinstellung „Aufgabe“ verwendet.
- In der Missionsliste werden sie nicht durch Überschriften getrennt, nur die Reihenfolge, in der sie stehen, wird nach Gruppen zusammengefasst.
- In welcher Reihenfolge die Blöcke stehen, entscheidet die Stelle, an der die erste Aufgabe dieser Gruppe auftaucht.
- [_group_](de/editor/group)