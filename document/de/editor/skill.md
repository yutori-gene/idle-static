
# Fähigkeit
Ein besonderer Effekt, der in jeder Runde des Kampfes ausgelost wird und auslöst
- Es ist ein besonderer Effekt, der in einer Kampfaktion (`stamina`) in jeder Runde ausgelost wird und auslöst. Bei Aktionen anderer Typen löst er nicht aus.
- Definiert wird sie selbst hier, und über die ID wird aus `skill` eines Gegenstands (deine Seite) und `skills` einer Aktion (die Seite des Gegners) auf sie verwiesen.
- Die Kandidaten deiner Seite sind die Fähigkeiten, auf die die Gegenstände verweisen, die gerade wirken (`unnecessary` im Besitz, `necessary` und `consumable` ausgerüstet). Legst du die Ausrüstung ab, fällt auch deren Fähigkeit aus den Kandidaten.
- In jeder Runde werden die Kandidaten für deine Seite und für die Seite des Gegners gemischt, die Auslösewahrscheinlichkeit wird von vorn geprüft, und nur die erste, bei der es klappt, löst aus. Klappt es bei keiner, gibt es in dieser Runde keine Fähigkeit.
- Verweisen mehrere Gegenstände oder Aktionen auf dieselbe Fähigkeit, bekommt sie entsprechend mehr Gelegenheiten bei der Auslosung und löst deshalb leichter aus.
- [_item_](de/editor/item)
- [_action_](de/editor/action)
___

## [_Information_](de/editor/information)
___

## Auslösewahrscheinlichkeit [0-1]
Die Wahrscheinlichkeit, dass diese Fähigkeit in dieser Runde auslöst
- In jeder Runde wird mit dieser Wahrscheinlichkeit geprüft, ob sie auslöst. Bei `1` klappt es immer, bei `0` löst sie nicht aus. Der Standardwert ist `1`.
- Die Prüfung geht der Reihe nach von vorn durch die gemischten Kandidaten, und nur die erste Fähigkeit, bei der es klappt, löst aus. Deshalb ist der Anteil, mit dem sie tatsächlich auslöst, bei mehreren Kandidaten niedriger als dieser Wert.
- Ist die Anzeige der Beschreibung aktiviert, wirkt sich dieser Wert auch darauf aus, wie oft die Beschreibung erscheint. Je leichter eine Fähigkeit auslöst, desto seltener wiederholt sich ihre Beschreibung.
___

## [_Kampfwerte_](de/editor/combat)
___

## Anzeige der Beschreibung
Ob die Beschreibung beim Auslösen als Toast-Benachrichtigung angezeigt wird
- Es ist das Kennzeichen dafür, ob die Beschreibung als Toast-Benachrichtigung angezeigt wird, wenn diese Fähigkeit auslöst.
- Ist es an, wird sie bei jedem Auslösen mit einer Wahrscheinlichkeit von (100% − Auslösewahrscheinlichkeit) ÷ 2 angezeigt. Bei einer Auslösewahrscheinlichkeit von 40% sind das 30%.
- Ist es aus, wird sie nicht angezeigt.
- Ist die Beschreibung leer, wird sie auch dann nicht angezeigt, wenn du es anschaltest.