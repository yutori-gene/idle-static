
# Änderungsereignis
Ein Ereignis für die interne Verarbeitung, das auslöst, wenn die Menge einer Kategorie, einer Aktion oder eines Gegenstands auf einen Schlag um mindestens den Betrag in den Bedingungen steigt
- Es wird zu jedem Zeitpunkt geprüft, an dem sich eine Menge ändert: beim Abschluss einer Aktion, beim Kauf oder Verkauf, beim Öffnen einer Schatztruhe und so weiter.
- Die Bedingungen (requirements) werden nach dem Zuwachs dieses einen Zeitpunkts beurteilt, nicht nach einem absoluten Wert wie der Besitzanzahl. Kleine Zuwächse, die auf mehrere Male verteilt sind, werden nicht zusammengezählt.
- Stellst du die Bedingung eines Gegenstands zum Beispiel auf 3, ist sie erfüllt, wenn dieser Gegenstand bei diesem einen Mal um 3 oder mehr zunimmt. Eine Abnahme zählt nicht als Zunahme.
- Stellst du mehrere Bedingungen ein, müssen sie bei dieser einen Änderung alle gleichzeitig erfüllt sein. Ein Änderungsereignis, bei dem keine einzige Bedingung eingestellt ist, löst nicht aus.
- Setzt du den Wert einer Bedingung auf `0`, gilt sie auch ohne Zuwachs als erfüllt, sodass das Ereignis bei jeder Mengenänderung auslöst.
- Die Verbrauchswahrscheinlichkeit (chance) und die Ausrüstung (equipment) der Bedingungen werden nicht angesehen. Beurteilt wird nur nach dem Zuwachs, und die in den Bedingungen verwendeten Elemente nehmen auch nicht ab.
- Die Belohnung wird jedes Mal automatisch abgeholt, wenn die Bedingungen erfüllt sind, und das Ereignis löst beliebig oft wieder aus. Anders als bei einer Aufgabe ist es nicht einmalig, und zum Abholen ist kein Handgriff nötig. Die Menge lässt sich auch negativ einstellen.
- Anders als bei einer Aufgabe oder einem Kauf wird das Limit der Gegenstandsarten, die du halten kannst, nicht geprüft, sodass neue Gegenstände über die Kapazität hinaus hinzukommen können.
- Ein Zuwachs durch eine Belohnung gilt ebenfalls als Änderung: Erfüllt die Belohnung eines Änderungsereignisses die Bedingungen eines anderen Änderungsereignisses, löst dieses gleich darauf aus.
- Auf dem Bildschirm des Players wird es überhaupt nicht angezeigt. Es taucht auch nicht in der Missionsliste auf, und es erscheint keine Meldung über das Erreichen.

!> Stelle die Belohnung eines Änderungsereignisses nicht so ein, dass sie seine eigenen Bedingungen erfüllt. Das Auslösen hört nicht mehr auf und das Spiel bleibt stehen. Ein Beispiel ist ein Ereignis, dessen Bedingungen erfüllt sind, sobald Gegenstand A um eins zunimmt, und dessen Belohnung ein Stück von Gegenstand A übergibt.
- [_unique_](de/editor/unique)
___

## [_Information_](de/editor/information)
___

## Kategorie
Die ID der Kategorie, zu der das Änderungsereignis gehört (sie dient nur der Einteilung, da auf dem Bildschirm nichts angezeigt wird)
- Da auf dem Bildschirm des Players nichts angezeigt wird, wirkt sich diese Einstellung nicht auf das Aussehen aus.
___

## Zeitpunkt
Der Zeitpunkt, zu dem das Änderungsereignis auslöst (fest auf `changed`)
- Es ist fest auf `changed` eingestellt und nicht bearbeitbar.
- Es wird zu jedem Zeitpunkt geprüft, an dem sich eine Menge ändert, und löst jedes Mal wieder aus, wenn die Bedingungen erfüllt sind.
___

## Anfänglicher Anzeigezustand
Sie wirkt sich praktisch nicht aus, da auf dem Bildschirm nichts angezeigt wird
- Ein Änderungsereignis wird auf dem Bildschirm des Players nicht angezeigt, daher wird diese Einstellung nicht verwendet.
___

## [_Bedingung_](de/editor/requirement)
___

## Gruppensummierung
Behandelt die id in den Bedingungen als Gruppen-ID und urteilt nach der Summe der Zuwächse der Elemente, die zu ihr gehören
- Ist sie aktiviert, wird die id, die du in den Bedingungen (requirements) einstellst, als ID einer Gruppe direkt unter der Welt behandelt.
- Die Zuwächse aller Kategorien, aller Aktionen und aller Gegenstände, die zu dieser Gruppe gehören, werden für die Beurteilung zusammengezählt.
- Anders als bei der Gruppensummierung einer Aufgabe zählt auch der Zuwachs noch nicht freigeschalteter Elemente zur Summe.
- Ist sie deaktiviert, wird die id in den Bedingungen wie bisher als ID einer einzelnen Kategorie, Aktion oder eines einzelnen Gegenstands behandelt.
- [_group_](de/editor/group)
___

## [_Erhalt_](de/editor/acquisition)
___

## Änderungsereignisgruppe
Die Einteilung in eine Anzeigegruppe für die interne Verwaltung (praktisch ungenutzt, da auf dem Bildschirm nichts angezeigt wird)
- Ein Änderungsereignis wird auf dem Bildschirm des Players nicht angezeigt, daher wirkt sich diese Einstellung nicht auf das Aussehen aus.