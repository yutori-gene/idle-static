
# Kampfwerte
Die Einstellung der Kampfkorrekturen bei Aktionen vom Typ stamina
- Das sind Korrekturwerte, die nur bei Aktionen vom Typ `stamina` wirken.
- Jeder Wert wird als zusätzliche Korrektur des Levelunterschieds zwischen Spieler und Aktion berechnet.
- Ist der Angriffswert zum Beispiel 10, wird der Angriffsschaden so berechnet, als läge das Level des Spielers 10 über dem Level der Aktion. Ist er negativ, ist es eine Korrektur in die Gegenrichtung.
- Je nachdem, wo du ihn einstellst, ist der Wert der der Spielerseite oder der der Gegnerseite.
- Die Werte der Gegnerseite wirken so, dass sie das jeweils entgegengesetzte Feld aufheben. Die Verteidigung des Gegners hebt den Angriff des Spielers auf, der Angriff des Gegners die Verteidigung des Spielers, das Ausweichen des Gegners die Genauigkeit des Spielers und die Genauigkeit des Gegners das Ausweichen des Spielers.
- Nur die Erholung hebt sich mit demselben Feld auf: je höher die Erholung des Gegners, desto weniger erholt sich der Spieler.

|Wo es eingestellt wird|Zu welcher Seite der Wert gehört|
|-|-|
|`defaultCombat` in den allgemeinen Einstellungen|Der Bezugswert der Spielerseite. Er ist der gemeinsame Ausgangspunkt aller `stamina`-Aktionen|
|Die Kampfwerte der Aktion|Werte der Gegnerseite. Vom Spieler aus gesehen wirken sie als Korrekturen in die Gegenrichtung|
|Die Kampfwerte der Fähigkeit|Werte der Seite, die die Fähigkeit besitzt. Die Fähigkeiten der eigenen Seite werden dem Spieler zugerechnet, die des Gegners der Gegnerseite|
___

## Angriff [Levelunterschied]
Die Levelunterschied-Korrektur des Ausdauerschadens, den du dem Gegner zufügst
- Je höher der Wert auf der Spielerseite, desto mehr Schaden fügst du dem Gegner zu.
- Der an einer Aktion oder an einer Fähigkeit des Gegners eingestellte Wert wird zum Angriff der Gegnerseite, und je höher er ist, desto mehr Schaden erleidet der Spieler.
___

## Verteidigung [Levelunterschied]
Die Levelunterschied-Korrektur des Ausdauerschadens, den du vom Gegner erleidest
- Je höher der Wert auf der Spielerseite, desto stärker wird der erlittene Schaden verringert.
- Der an einer Aktion oder an einer Fähigkeit des Gegners eingestellte Wert wird zur Verteidigung der Gegnerseite, und je höher er ist, desto weniger Schaden fügt der Spieler zu.
___

## Genauigkeit [Levelunterschied]
Die Levelunterschied-Korrektur der Fehlschlagquote des Angriffs
- Je höher der Wert auf der Spielerseite, desto niedriger die Fehlschlagquote des Angriffs.
- Der an einer Aktion oder an einer Fähigkeit des Gegners eingestellte Wert wird zur Genauigkeit der Gegnerseite, und je höher er ist, desto schwerer weicht der Spieler dem Angriff des Gegners aus.
___

## Ausweichen [Levelunterschied]
Die Levelunterschied-Korrektur der Quote, mit der du dem Angriff des Gegners ausweichst
- Je höher der Wert auf der Spielerseite, desto leichter weichst du dem Angriff des Gegners aus.
- Der an einer Aktion oder an einer Fähigkeit des Gegners eingestellte Wert wird zum Ausweichen der Gegnerseite, und je höher er ist, desto schwerer trifft der Angriff des Spielers.
___

## Erholung [Levelunterschied]
Die Levelunterschied-Korrektur der wiederhergestellten Ausdauer
- Je höher der Wert auf der Spielerseite, desto mehr Ausdauer wird nach dem Kampf wiederhergestellt.
- Der an einer Aktion oder an einer Fähigkeit des Gegners eingestellte Wert wird zur Erholung der Gegnerseite, und je höher er ist, desto weniger erholt sich der Spieler.
- Nur die Erholung hebt sich, anders als die übrigen Felder, mit demselben Feld auf.