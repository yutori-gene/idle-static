
# Eigenschaft
Die Einstellung der Wirkungen, die ein Gegenstand hat
- Das sind die Wirkungsfelder, die du an einem Gegenstand einstellen kannst.
- Gegenstände, deren Ausrüstungstyp `necessary` oder `consumable` ist, wirken nur, solange sie ausgerüstet sind. `unnecessary` wirkt schon allein durch den Besitz, und die Höhe der Wirkung ist proportional zur Besitzanzahl (bei 2 Stück das Doppelte).
- Da bei der Wirkung von `unnecessary` die Besitzanzahl unmittelbar der Multiplikator ist, wird `maximum` (der maximale Besitz) zur Obergrenze der Wirkung. Stelle es beim Ausbalancieren zusammen mit `maximum` ein.
- Der Wert jedes dieser Felder wird als Anpassung des Levelunterschieds zwischen dem Level des Spielers und dem Level der Aktion berechnet.
- Ist der Angriffswert zum Beispiel 10, wird der Angriff so berechnet, als läge das Level des Spielers 10 über dem Level der Aktion. Ein negativer Wert bewirkt das Gegenteil.
- Wie stark der Levelunterschied wirkt, entscheidet `propertyRatio` in den allgemeinen Einstellungen (standardmäßig 2); je 10 Levelunterschied ändert sich der Wert um diesen Multiplikator.
- Ist `numeric` der Kategorie deaktiviert, gilt der eigentliche Levelunterschied als 0, sodass der hier eingestellte Wert unmittelbar zum Levelunterschied wird.
- Felder, die über eine Division wirken, etwa die benötigte Zeit und der erlittene Schaden, sind bei dem 100-Fachen gedeckelt (bei der benötigten Zeit bis auf ein Hundertstel).
- Bei Gegenständen, die ausgerüstet werden müssen, wirkt je Ausrüstungsgruppe nur der eine ausgerüstete.
- Ein Gegenstand mit einer Besitzanzahl von 0 wirkt nicht, unabhängig von seinem Ausrüstungstyp.
- attack, defence, accuracy, evasion und restore wirken nur bei Aktionen vom Typ `stamina`.

|Eigenschaft|Einzelheiten der Wirkung|
|-|-|
|speed|Verkürzt die benötigte Zeit der Aktion. Die benötigte Zeit ändert sich umgekehrt proportional zum Levelunterschied (der Multiplikator wirkt zur Hälfte).|
|chance|Ändert die Erfolgswahrscheinlichkeit der Aktion. Der Multiplikator wirkt auf das Verhältnis von Erfolg und Misserfolg, deshalb übersteigt sie nie `100`%.|
|experience|Ändert die erhaltene Erfahrung. Sie steigt proportional zum Levelunterschied (die Berechnung ist umgekehrt: je höher das Level der Aktion, desto mehr bekommst du).|
|attack|Ändert den Ausdauerschaden, den du dem Gegner zufügst. (nur stamina-Aktionen)|
|defence|Verringert den Ausdauerschaden, den du vom Gegner erleidest (der Multiplikator wirkt zur Hälfte). (nur stamina-Aktionen)|
|accuracy|Senkt die Fehlschlagquote des Angriffs. (nur stamina-Aktionen)|
|evasion|Ändert die Quote, mit der du dem Angriff des Gegners ausweichst (der Multiplikator wirkt zur Hälfte). (nur stamina-Aktionen)|
|restore|Ändert die Menge an Ausdauer, die am Ende der Aktion wiederhergestellt wird. Je näher am Maximum, desto flacher der Zuwachs. (nur stamina-Aktionen)|
___

## Kategorie
Die Kategorie, auf die die Eigenschaft angewendet wird
- Stelle die ID der Kategorie ein, auf die diese Eigenschaft angewendet wird.
- Mit `*` wird sie auf alle Kategorien angewendet.
- Bleibt es leer, wird sie auf die Kategorie angewendet, zu der der Gegenstand gehört.
- Stellst du die ID einer anderen Kategorie ein, wirkt sie auf die Aktionen jener Kategorie. In welcher Kategorie der Gegenstand selbst liegt, spielt keine Rolle.
___

## Angriff [Levelunterschied]
Die Korrektur des Ausdauerschadens, den du dem Gegner zufügst (wirkt nur bei stamina-Aktionen)
- Der Angriffsschaden wird so berechnet, als läge das Level des Spielers um diesen Wert über dem Level der Aktion.
___

## Verteidigung [Levelunterschied]
Die Korrektur des Ausdauerschadens, den du vom Gegner erleidest (wirkt nur bei stamina-Aktionen)
- Der erlittene Schaden wird so berechnet, als läge das Level des Spielers um diesen Wert über dem Level der Aktion. Je höher der Wert, desto stärker wird der erlittene Schaden verringert.
___

## Genauigkeit [Levelunterschied]
Die Korrektur der Fehlschlagquote des Angriffs (wirkt nur bei stamina-Aktionen)
- Die Fehlschlagquote wird so berechnet, als läge das Level des Spielers um diesen Wert über dem Level der Aktion. Je höher der Wert, desto niedriger die Fehlschlagquote.
___

## Ausweichen [Levelunterschied]
Die Korrektur der Quote, mit der du dem Angriff des Gegners ausweichst (wirkt nur bei stamina-Aktionen)
- Die Ausweichquote wird so berechnet, als läge das Level des Spielers um diesen Wert über dem Level der Aktion. Je höher der Wert, desto leichter weichst du dem Angriff des Gegners aus.
___

## Erholung [Levelunterschied]
Die Korrektur der wiederhergestellten Ausdauer (wirkt nur bei stamina-Aktionen)
- Die Menge der wiederhergestellten Ausdauer wird so berechnet, als läge das Level des Spielers um diesen Wert über dem Level der Aktion.
___

## Geschwindigkeit [Levelunterschied]
Die Korrektur der benötigten Zeit der Aktion
- Die benötigte Zeit wird so berechnet, als läge das Level des Spielers um diesen Wert über dem Level der Aktion. Je höher der Wert, desto stärker wird die benötigte Zeit verkürzt.
___

## Erfolgsrate [Levelunterschied]
Die Korrektur der Erfolgswahrscheinlichkeit der Aktion
- Die Erfolgswahrscheinlichkeit der Aktion wird so berechnet, als läge das Level des Spielers um diesen Wert über dem Level der Aktion. Je höher der Wert, desto stärker steigt die Erfolgswahrscheinlichkeit.
___

## Erfahrung [Levelunterschied]
Die Korrektur der erhaltenen Erfahrung
- Die Erfahrung wird so berechnet, als läge das Level des Spielers um diesen Wert unter dem Level der Aktion (weil die Berechnung umgekehrt ist, bekommst du bei höherem Level der Aktion mehr Erfahrung).