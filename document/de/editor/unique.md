
# Festes Ereignis
Die Nachrichten und Belohnungen, die zu festgelegten Zeitpunkten auslösen
- Es löst zu festgelegten Zeitpunkten aus, etwa beim ersten Öffnen der Welt oder bei Spielende, und öffnet einen eigenen Bildschirm.
- Für jeden Zeitpunkt ist genau eines vorbereitet, hinzufügen und löschen lässt sich keines. Zeitpunkte, die du nicht nutzt, lässt du leer.
- In den Missionen und in der Aufgabenliste erscheinen sie nicht. Was bei erfüllten Bedingungen als erreicht gilt, stellst du mit einer Aufgabe ein.
- Tritt der Zeitpunkt ein, löst das Ereignis aus und öffnet einen eigenen Bildschirm, um seinen Inhalt zu zeigen.
- Die Belohnung wird zugleich mit dem Auslösen automatisch erhalten. Es gibt weder einen Abholvorgang noch ein Band wie bei einer Aufgabe, und auch die Obergrenze der Gegenstandsarten, die gehalten werden können, wird nicht geprüft.
- Sind Bedingungen (requirements) eingestellt, wird die Belohnung nur dann erhalten, wenn diese Bedingungen beim Auslösen erfüllt waren. Sind keine eingestellt, wird sie bei jedem Auslösen erhalten.
- Die Bedingungen werden nur daraufhin angesehen, ob sie erfüllt sind, deshalb nehmen Gegenstände auch bei eingestellter Verbrauchswahrscheinlichkeit (chance) nicht ab.
- Beim Auslösen kannst du das Level einer Kategorie, die Anzahl der Ausführungen einer Aktion und die Besitzanzahl von Gegenständen verändern. Mit einer negativen Menge lässt es sich auch so nutzen, dass bei Spielende der Besitz verloren geht.
- Lässt du Name, Beschreibung und Symbol leer, werden der im Player eingebaute Standardtext und das Standardsymbol verwendet.

|Zeitpunkt|Auslösebedingung|Wiederholung|
|-|-|-|
|`comebacked`|Wenn du nach 1 Sekunde oder mehr offline zurückkehrst und während deiner Abwesenheit mindestens eine Aktion abgeschlossen wurde|Beliebig oft|
|`gameovered`|Wenn die Ausdauer des Spielers im Kampf ausgeht|Beliebig oft|
|`welcomed`|Wenn diese Welt zum ersten Mal gestartet wird|Nur einmal|
|`completed`|Wenn das Level aller Kategorien den Höchstwert (maxCategoryLevels) erreicht|Nur einmal|
|`obtained`|Wenn eine Aktion der Art single (etwa eine Schatztruhe) abgeschlossen und angesehen wird|Beliebig oft|
- [_task_](de/editor/task)
___

## Bei der Rückkehr
Löst bei der Rückkehr aus dem Offline aus
- Es löst aus, wenn du nach 1 Sekunde oder mehr offline zurückkehrst und während deiner Abwesenheit mindestens eine Aktion abgeschlossen wurde. Ist nicht eine einzige Ausführung fertig geworden, löst es nicht aus.
- Es wird zusammen mit der Zusammenfassung des Fortschritts während deiner Abwesenheit angezeigt.
___

### [_Information（Bei der Rückkehr）_](de/editor/information)
___

### Kategorie（Bei der Rückkehr）
Wird in einem Ereignis nicht verwendet
- In den Missionen und in der Aufgabenliste erscheinen sie nicht, daher wird die Kategorie, zu der sie gehören, nicht angegeben.
- Im Editor wird das Eingabefeld nicht angezeigt.
___

### Zeitpunkt（Bei der Rückkehr）
Der Zeitpunkt, zu dem das Ereignis ausgelöst wird (fest)
- Es ist auf `comebacked` festgelegt und lässt sich nicht bearbeiten.
- Es löst beliebig oft aus, bei jeder Rückkehr.
___

### Anfänglicher Anzeigezustand（Bei der Rückkehr）
Der anfängliche Anzeigezustand des Ereignissymbols (das Auslösen entscheidet der Zeitpunkt, und diese Einstellung löst es nicht aus)
- Die Bedingungen für das Auslösen eines Ereignisses entscheidet der Zeitpunkt, und dieses Feld wirkt sich nur auf das Aussehen des Symbols aus.
- secreted: Das Symbol wird nicht angezeigt, bis alle requirements erfüllt sind (das Auslösen selbst geschieht zu seinem Zeitpunkt).
- hidden und hinted: Das Symbol wird durchgestrichen als noch nicht freigeschaltet angezeigt.
- released: Der Strich verschwindet, und es wird als bereits freigeschaltet angezeigt.
___

### [_Bedingung（Bei der Rückkehr）_](de/editor/requirement)
___

### Gruppensummierung（Bei der Rückkehr）
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

### [_Erhalt（Bei der Rückkehr）_](de/editor/acquisition)
___

### Aufgabengruppe（Bei der Rückkehr）
Wird in einem Ereignis nicht verwendet
- In den Missionen und in der Aufgabenliste erscheinen sie nicht, daher wird die Gruppe nicht angegeben.
- Im Editor wird das Eingabefeld nicht angezeigt.
___

## Bei Spielende
Löst aus, wenn die Ausdauer im Kampf ausgeht
- Es löst aus, wenn die Ausdauer des Spielers im Kampf ausgeht.
- Zugleich halten alle gerade ausgeführten Aktionen an, und alle wartenden Vormerkungen werden verworfen.
- Mit einer negativen Menge bei der Belohnung kannst du dem Spielende einen Preis geben.
___

### [_Information（Bei Spielende）_](de/editor/information)
___

### Kategorie（Bei Spielende）
Wird in einem Ereignis nicht verwendet
- In den Missionen und in der Aufgabenliste erscheinen sie nicht, daher wird die Kategorie, zu der sie gehören, nicht angegeben.
- Im Editor wird das Eingabefeld nicht angezeigt.
___

### Zeitpunkt（Bei Spielende）
Der Zeitpunkt, zu dem das Ereignis ausgelöst wird (fest)
- Es ist auf `gameovered` festgelegt und lässt sich nicht bearbeiten.
- Es löst beliebig oft aus, bei jedem Spielende.
___

### Anfänglicher Anzeigezustand（Bei Spielende）
Der anfängliche Anzeigezustand des Ereignissymbols (das Auslösen entscheidet der Zeitpunkt, und diese Einstellung löst es nicht aus)
- Die Bedingungen für das Auslösen eines Ereignisses entscheidet der Zeitpunkt, und dieses Feld wirkt sich nur auf das Aussehen des Symbols aus.
- secreted: Das Symbol wird nicht angezeigt, bis alle requirements erfüllt sind (das Auslösen selbst geschieht zu seinem Zeitpunkt).
- hidden und hinted: Das Symbol wird durchgestrichen als noch nicht freigeschaltet angezeigt.
- released: Der Strich verschwindet, und es wird als bereits freigeschaltet angezeigt.
___

### [_Bedingung（Bei Spielende）_](de/editor/requirement)
___

### Gruppensummierung（Bei Spielende）
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

### [_Erhalt（Bei Spielende）_](de/editor/acquisition)
___

### Aufgabengruppe（Bei Spielende）
Wird in einem Ereignis nicht verwendet
- In den Missionen und in der Aufgabenliste erscheinen sie nicht, daher wird die Gruppe nicht angegeben.
- Im Editor wird das Eingabefeld nicht angezeigt.
___

## Beim ersten Start
Löst beim ersten Öffnen der Welt aus
- Es löst aus, wenn diese Welt zum ersten Mal gestartet wird.
- Es dient dazu, das Setting der Welt zu erklären und die zu Beginn übergebene Ausstattung zu überreichen.
___

### [_Information（Beim ersten Start）_](de/editor/information)
___

### Kategorie（Beim ersten Start）
Wird in einem Ereignis nicht verwendet
- In den Missionen und in der Aufgabenliste erscheinen sie nicht, daher wird die Kategorie, zu der sie gehören, nicht angegeben.
- Im Editor wird das Eingabefeld nicht angezeigt.
___

### Zeitpunkt（Beim ersten Start）
Der Zeitpunkt, zu dem das Ereignis ausgelöst wird (fest)
- Es ist auf `welcomed` festgelegt und lässt sich nicht bearbeiten.
- Es löst nur ein einziges Mal aus, beim ersten Start.
___

### Anfänglicher Anzeigezustand（Beim ersten Start）
Der anfängliche Anzeigezustand des Ereignissymbols (das Auslösen entscheidet der Zeitpunkt, und diese Einstellung löst es nicht aus)
- Die Bedingungen für das Auslösen eines Ereignisses entscheidet der Zeitpunkt, und dieses Feld wirkt sich nur auf das Aussehen des Symbols aus.
- secreted: Das Symbol wird nicht angezeigt, bis alle requirements erfüllt sind (das Auslösen selbst geschieht zu seinem Zeitpunkt).
- hidden und hinted: Das Symbol wird durchgestrichen als noch nicht freigeschaltet angezeigt.
- released: Der Strich verschwindet, und es wird als bereits freigeschaltet angezeigt.
___

### [_Bedingung（Beim ersten Start）_](de/editor/requirement)
___

### Gruppensummierung（Beim ersten Start）
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

### [_Erhalt（Beim ersten Start）_](de/editor/acquisition)
___

### Aufgabengruppe（Beim ersten Start）
Wird in einem Ereignis nicht verwendet
- In den Missionen und in der Aufgabenliste erscheinen sie nicht, daher wird die Gruppe nicht angegeben.
- Im Editor wird das Eingabefeld nicht angezeigt.
___

## Beim Abschluss
Löst aus, wenn alle Kategorien das maximale Level erreichen
- Es löst aus, wenn das Level aller Kategorien den Höchstwert (maxCategoryLevels) erreicht.
- Kategorien, die nicht numeric sind, werden von der Prüfung ausgenommen. Deshalb löst es in einer Welt ohne eine einzige numerische Kategorie nicht aus.
___

### [_Information（Beim Abschluss）_](de/editor/information)
___

### Kategorie（Beim Abschluss）
Wird in einem Ereignis nicht verwendet
- In den Missionen und in der Aufgabenliste erscheinen sie nicht, daher wird die Kategorie, zu der sie gehören, nicht angegeben.
- Im Editor wird das Eingabefeld nicht angezeigt.
___

### Zeitpunkt（Beim Abschluss）
Der Zeitpunkt, zu dem das Ereignis ausgelöst wird (fest)
- Es ist auf `completed` festgelegt und lässt sich nicht bearbeiten.
- Es löst nur ein einziges Mal aus, wenn die Bedingungen erfüllt sind.
___

### Anfänglicher Anzeigezustand（Beim Abschluss）
Der anfängliche Anzeigezustand des Ereignissymbols (das Auslösen entscheidet der Zeitpunkt, und diese Einstellung löst es nicht aus)
- Die Bedingungen für das Auslösen eines Ereignisses entscheidet der Zeitpunkt, und dieses Feld wirkt sich nur auf das Aussehen des Symbols aus.
- secreted: Das Symbol wird nicht angezeigt, bis alle requirements erfüllt sind (das Auslösen selbst geschieht zu seinem Zeitpunkt).
- hidden und hinted: Das Symbol wird durchgestrichen als noch nicht freigeschaltet angezeigt.
- released: Der Strich verschwindet, und es wird als bereits freigeschaltet angezeigt.
___

### [_Bedingung（Beim Abschluss）_](de/editor/requirement)
___

### Gruppensummierung（Beim Abschluss）
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

### [_Erhalt（Beim Abschluss）_](de/editor/acquisition)
___

### Aufgabengruppe（Beim Abschluss）
Wird in einem Ereignis nicht verwendet
- In den Missionen und in der Aufgabenliste erscheinen sie nicht, daher wird die Gruppe nicht angegeben.
- Im Editor wird das Eingabefeld nicht angezeigt.
___

## Beim Abschluss einer einzelnen Aktion
Löst beim Abschluss einer einzelnen Aktion wie einer Schatztruhe aus
- Es löst aus, wenn eine Aktion der Art single (etwa eine Schatztruhe) abgeschlossen und angesehen wird.
- Unabhängig von der Belohnung der Aktion selbst kannst du die hier eingestellte Belohnung obendrauf geben.
___

### [_Information（Beim Abschluss einer einzelnen Aktion）_](de/editor/information)
___

### Kategorie（Beim Abschluss einer einzelnen Aktion）
Wird in einem Ereignis nicht verwendet
- In den Missionen und in der Aufgabenliste erscheinen sie nicht, daher wird die Kategorie, zu der sie gehören, nicht angegeben.
- Im Editor wird das Eingabefeld nicht angezeigt.
___

### Zeitpunkt（Beim Abschluss einer einzelnen Aktion）
Der Zeitpunkt, zu dem das Ereignis ausgelöst wird (fest)
- Es ist auf `obtained` festgelegt und lässt sich nicht bearbeiten.
- Es löst beliebig oft aus, bei jedem Abschluss einer einzelnen Aktion.
___

### Anfänglicher Anzeigezustand（Beim Abschluss einer einzelnen Aktion）
Der anfängliche Anzeigezustand des Ereignissymbols (das Auslösen entscheidet der Zeitpunkt, und diese Einstellung löst es nicht aus)
- Die Bedingungen für das Auslösen eines Ereignisses entscheidet der Zeitpunkt, und dieses Feld wirkt sich nur auf das Aussehen des Symbols aus.
- secreted: Das Symbol wird nicht angezeigt, bis alle requirements erfüllt sind (das Auslösen selbst geschieht zu seinem Zeitpunkt).
- hidden und hinted: Das Symbol wird durchgestrichen als noch nicht freigeschaltet angezeigt.
- released: Der Strich verschwindet, und es wird als bereits freigeschaltet angezeigt.
___

### [_Bedingung（Beim Abschluss einer einzelnen Aktion）_](de/editor/requirement)
___

### Gruppensummierung（Beim Abschluss einer einzelnen Aktion）
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

### [_Erhalt（Beim Abschluss einer einzelnen Aktion）_](de/editor/acquisition)
___

### Aufgabengruppe（Beim Abschluss einer einzelnen Aktion）
Wird in einem Ereignis nicht verwendet
- In den Missionen und in der Aufgabenliste erscheinen sie nicht, daher wird die Gruppe nicht angegeben.
- Im Editor wird das Eingabefeld nicht angezeigt.