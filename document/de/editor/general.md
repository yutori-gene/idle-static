
# Allgemein
Grundlegende Spieleinstellungen wie die Sprache und die Leveleinstellungen
___

## Sprache
Die Sprache, in der du die Welt erstellst
- Legt fest, in welcher Sprache du Namen und Beschreibung der Welt schreibst. Es ist die Sprache, die beim Vorbereiten der Übersetzungen als Grundlage dient.
- Es ist zugleich die Sprache, die zuerst angezeigt wird, wenn ein Spieler das Spiel beginnt.
- Ist translations deaktiviert, kann der Spieler nicht von dieser Sprache auf eine andere wechseln.
- Das ist eine andere Einstellung als die Anzeigesprache des Welteditors selbst. Die Anzeigesprache des Editors wählst du beim Öffnen des Editors.
- [_translation_](de/editor/translation)
___

## Übersetzung
Ob Übersetzungen für mehrere Sprachen vorbereitet werden
- Ist es aktiviert, können Spieler auf die Sprache ihrer Wahl wechseln und darin spielen.
- Ist es deaktiviert, bleibt es auf der unter language gewählten Sprache festgelegt, und der Wechselvorgang selbst steht nicht zur Verfügung.
- Wenn du es aktivierst, musst du die Übersetzungsdaten jeder Sprache vorbereiten. Dem veröffentlichten Paket liegen die Übersetzungsdaten bei.
- Gewechselt werden die in der Welt definierten Namen und Beschreibungen. Die Übersetzungen der gemeinsamen Formulierungen des Bildschirms (der Voreinstellungen) liegen unabhängig von dieser Einstellung immer bei.
- [_translation_](de/editor/translation)
- [_preset_](de/editor/preset)
___

## Maximale Offlinezeit [Stunden]
Die zeitliche Begrenzung des Offline-Fortschritts
- Legt fest, wie viele Stunden der Fortschritt während des Offlineseins höchstens läuft.
- Setzt du zum Beispiel 6 Stunden, wird die Rückkehr aus dem Offline bis zu 6 Stunden verarbeitet, und selbst wenn du nach einer längeren Abwesenheit zurückkehrst, gilt die Offlinezeit als 6 Stunden.
- Setzt du 0 Stunden, wird bei der Rückkehr aus dem Offline überhaupt nichts verarbeitet.
- Der Höchstwert beträgt 24 Stunden.
- [_category_](de/editor/category)
___

## Maximales Level der Kategorien
Die Levelobergrenze jeder Kategorie
- Legt die Obergrenze für das Level jeder Kategorie fest. Der Standardwert ist `100`.
- Auch wenn Erfahrung gewonnen wird, bleibt das Level bei diesem Wert stehen und der Überschuss wird verworfen. Dasselbe gilt, wenn eine Belohnung Level direkt hinzufügt.
- Liegt das Level in den Speicherdaten über der Obergrenze, wird es beim Laden auf die Obergrenze gestutzt.
- Die Levelleiste und die Fortschrittsquote in der Statistik werden mit diesem Wert als Nenner angezeigt.
- Eine Kategorie mit deaktiviertem numeric steigt nicht im Level, deshalb hat dieser Wert nichts mit ihr zu tun.
- [_category_](de/editor/category)
___

## Währung
Die Einstellungen der im Spiel verwendeten Währung (coins)
- Legt die im Spiel verwendete Währung fest. Mindestens eine ist nötig.
- Du kannst mehrere Währungen definieren und jede davon als Information (ID, Name, Symbol, Farbe und so weiter) einstellen.
- Währungen werden für den Kauf und Verkauf von Gegenständen sowie für die Erweiterung von Kapazität und Warteschlange verwendet.
- Die erste Währung gilt als Hauptwährung und wird verwendet, wenn bei einem Gegenstand, der Kapazität oder der Warteschlange keine Währungs-ID (`coinId`) angegeben ist oder eine ID angegeben wird, die nicht in der Währungsliste steht.
- Eine Währung gilt als eine Art Gegenstand. Beziehe dich in Bedingungen und Belohnungen auf die hier eingestellte ID wie auf einen Gegenstand. Sie gehört zu keiner Kategorie und ist weder Gegenstand von Ausrüstung noch von Handel.
- [_information_](de/editor/information)
- [_item_](de/editor/item)
___

## Kapazität
Die Kapazitätseinstellungen des Inventars
- Verwaltet die Obergrenze der Anzahl an Gegenstandsarten, die ein Spieler halten kann.
- Verwaltet wird über die Anzahl der gehaltenen Gegenstandsarten, nicht über die Besitzanzahl je Gegenstand.
- Setzt du `initialCount` auf 0, wird die Kapazität unbegrenzt, und auch der Kauf von Kapazität entfällt.
- Wenn du dich in Bedingungen oder Belohnungen auf den Gegenstand der Kapazität beziehst, verwende die hier eingestellte ID oder `capacity`.
- [_item_](de/editor/item)
___

### [_Information der Kapazität_](de/editor/information)
___

### Anfangswert der Kapazität [Stück]
Die anfängliche Inventarkapazität (die Anzahl an Gegenstandsarten, die gehalten werden können)
- Das ist die Anfangskapazität zum Spielstart (die Anzahl an Gegenstandsarten, die gehalten werden können). Der Standardwert ist `10`.
- Setzt du sie auf `0`, wird die Kapazität unbegrenzt, und zugleich entfällt der Kauf von Kapazität.
___

### Grundpreis der Kapazität [Münzen]
Der Anfangspreis, um die Kapazität um eins zu erhöhen
- Das ist der Grundpreis (in Münzen), um die Inventarkapazität um einen Platz zu erhöhen. Stelle ihn als ganze Zahl ab `1` ein.
- Der tatsächliche Preis wird als „Grundpreis × Steigerungsrate^Anzahl getätigter Käufe“ berechnet.
- Beispiel: Bei einem Grundpreis von 100 und einer Steigerungsrate von 1,2 kostet der erste Kauf 100 Münzen, der zweite 120 Münzen und der dritte 144 Münzen.
___

### Steigerungsrate der Kapazität [Faktor]
Die Steigerungsrate der Kosten für die Erweiterung der Kapazität
- Das ist der Faktor dafür, wie stark die Kosten der Kapazitätserweiterung beim n-ten Kauf steigen. Der Standardwert ist `1.2`.
- Bei `1.0` bleibt der Preis immer gleich, bei `1.2` wird er mit jedem Kauf um 20 % teurer.
- Rechenformel: Grundpreis × Steigerungsrate^Anzahl getätigter Käufe

|Steigerungsrate|1. Stück|5. Stück|10. Stück|100. Stück|1000. Stück|
|-|-|-|-|-|-|
|1.00|x1.00|x1.00|x1.00|x1.00|x1.00|
|1.05|x1.00|x1.22|x1.55|x125.24|x1.5×10²¹|
|1.10|x1.00|x1.46|x2.36|x1.3×10⁴|x2.2×10⁴¹|
|1.20|x1.00|x2.07|x5.16|x6.9×10⁷|x1.3×10⁷⁹|
|1.50|x1.00|x5.06|x38.44|x2.7×10¹⁷|x8.2×10¹⁷⁵|
___

### Währungs-ID der Kapazität
Die ID der Währung, die für die Erweiterung der Kapazität verwendet wird
- Gibt die ID der Währung (coins) an, die für den Erweiterungspreis der Inventarkapazität verwendet wird.
- Bleibt sie leer oder gibst du eine ID an, die nicht in der Währungsliste steht, wird die Hauptwährung (die erste in coins) verwendet.
___

### Kaufobergrenze der Kapazität [Mal]
Die maximale Anzahl an Malen, die Kapazität gekauft werden kann
- Das ist die Obergrenze dafür, wie oft Kapazität mit einer Währung gekauft werden kann.
- Setzt du sie auf `0`, kann unbegrenzt gekauft werden.
- Setzt du sie auf `-1`, kann nicht mehr gekauft werden.
- Eine Erhöhung der Kapazität durch eine Belohnung fällt nicht unter diese Obergrenze.
___

## Warteschlange
Die Einstellungen der Anzahl an Plätzen für das aufeinanderfolgende Ausführen von Aktionen (die Warteschlange)
- Verwaltet die Anzahl an Plätzen der Warteschlange für das aufeinanderfolgende Ausführen von Aktionen.
- Die Warteschlange schließt die gerade ausgeführte Aktion ein, und ausgeführt wird die Aktion an ihrer Spitze. Sind es `1` Platz, gibt es nur die gerade ausgeführte, und Wartende lassen sich nicht halten.
- Wie bei der Kapazität lässt sich die Anzahl an Plätzen mit einer Währung kaufen, und sie lässt sich auch erhöhen, indem du den Gegenstand der Warteschlange als Belohnung einer Aktion oder eines Ereignisses angibst.
- Wenn du dich in Bedingungen oder Belohnungen auf den Gegenstand der Warteschlange beziehst, verwende die hier eingestellte ID oder `queue`.
- [_item_](de/editor/item)
___

### [_Information der Warteschlange_](de/editor/information)
___

### Anfangswert der Warteschlange [Plätze]
Die Anzahl an Plätzen für das aufeinanderfolgende Ausführen zum Spielstart
- Das ist die Anzahl an Plätzen der Warteschlange zum Spielstart. Der Standardwert ist `1`.
- Der Mindestwert ist `1` (weil die gerade ausgeführte Aktion einen Platz belegt; eine Behandlung von `0` = unbegrenzt wie bei der Kapazität gibt es nicht).
___

### Grundpreis der Warteschlange [Münzen]
Der Anfangspreis, um die Plätze um einen zu erhöhen
- Das ist der Grundpreis (in Münzen), um die Plätze für das aufeinanderfolgende Ausführen um einen zu erhöhen. Stelle ihn als ganze Zahl ab `1` ein.
- Der tatsächliche Preis wird als „Grundpreis × Steigerungsrate^Anzahl getätigter Käufe“ berechnet.
- Beispiel: Bei einem Grundpreis von 100 und einer Steigerungsrate von 1,2 kostet der erste Kauf 100 Münzen, der zweite 120 Münzen und der dritte 144 Münzen.
___

### Steigerungsrate der Warteschlange [Faktor]
Die Steigerungsrate der Kosten für die Erweiterung der Plätze
- Das ist der Faktor dafür, wie stark die Kosten der Platzerweiterung beim n-ten Kauf steigen. Der Standardwert ist `1.2`.
- Bei `1.0` bleibt der Preis immer gleich, bei `1.2` wird er mit jedem Kauf um 20 % teurer.
- Rechenformel: Grundpreis × Steigerungsrate^Anzahl getätigter Käufe
- Sie steigt auf dieselbe Weise wie die Steigerungsrate der Kapazität. Anhaltspunkte zum Faktor findest du in der Tabelle der Kapazität.
___

### Währungs-ID der Warteschlange
Die ID der Währung, die für die Erweiterung der Plätze verwendet wird
- Gibt die ID der Währung (coins) an, die für den Erweiterungspreis der Plätze für das aufeinanderfolgende Ausführen verwendet wird.
- Bleibt sie leer oder gibst du eine ID an, die nicht in der Währungsliste steht, wird die Hauptwährung (die erste in coins) verwendet.
___

### Kaufobergrenze der Warteschlange [Mal]
Die maximale Anzahl an Malen, die Plätze gekauft werden können
- Das ist die Obergrenze dafür, wie oft die Plätze für das aufeinanderfolgende Ausführen mit einer Währung gekauft werden können.
- Setzt du sie auf `0`, kann unbegrenzt gekauft werden.
- Setzt du sie auf `-1`, kann nicht mehr gekauft werden.
- Eine Erhöhung der Plätze durch eine Belohnung fällt nicht unter diese Obergrenze.
___

## Steigerungsrate der Erfahrung [Faktor]
Die Steigerungsrate der Schwierigkeit des Levelaufstiegs
- Das ist die Steigerungsrate der Erfahrung, die für das nächste Level nötig ist, während das Level einer Kategorie steigt. Der Standardwert ist `1.05`, ein Wert unter `1` lässt sich nicht einstellen.
- Ein größerer Wert erhöht die Schwierigkeit. Bei `1` bleibt die nötige Erfahrung auf jedem Level gleich.
- Die für das nächste Level nötige Erfahrung ist (Steigerungsrate der Erfahrung)^(aktuelles Level-1). Level werden mit abgeschnittenen Nachkommastellen gezählt.
- Erfahrung, die nach dem Erreichen der Obergrenze (des maximalen Levels der Kategorien) gewonnen wird, wird verworfen.

|Steigerungsrate der Erfahrung|Lv.1|Lv.2|Lv.10|Lv.50|Lv.99|
|-|-|-|-|-|-|
|1.00|x1.00|x1.00|x1.00|x1.00|x1.00|
|1.02|x1.00|x1.02|x1.20|x2.64|x6.96|
|1.05|x1.00|x1.05|x1.55|x10.92|x119.28|
|1.10|x1.00|x1.10|x2.36|x106.72|x1.1×10⁴|
|1.20|x1.00|x1.20|x5.16|x7583.70|x5.8×10⁷|
- [_category_](de/editor/category)
___

## Levelbeschränkung der Aktionen
Für das Ausführen einer Aktion das Level der Kategorie des Attributs verlangen
- Ist es aktiviert, wird an den Anfang der Bedingungen (requirements) jeder Aktion automatisch die Bedingung „das Level der Kategorie des Attributs liegt auf oder über dem Level dieser Aktion“ gesetzt.
- Ist kein Attribut (attribute) eingestellt, wird die Kategorie verwendet, zu der sie gehört.
- Ist bei der Kategorie des Attributs numeric deaktiviert, steigt sie nicht im Level, deshalb wird nichts hinzugefügt.
- Die hinzugefügte Bedingung wird beim Laden der Welt eingeschrieben, deshalb erscheint sie auf dem Bildschirm des Players wie eine gewöhnliche Bedingung.
- [_action_](de/editor/action)
- [_category_](de/editor/category)
- [_requirement_](de/editor/requirement)
___

## Eigenschaftsfaktor [Faktor]
Auf das Wievielfache die Eigenschaften je 10 Levelunterschied steigen
- Legt fest, auf das Wievielfache die Eigenschaften steigen, je `10`, um die sich der Unterschied zwischen dem Level der Kategorie und dem Level der Aktion vergrößert. Der Standardwert ist `1.5`, ein Wert unter `1` lässt sich nicht einstellen.
- Der Faktor wird als (Eigenschaftsfaktor)^(Levelunterschied÷10) berechnet. Bei einem Levelunterschied von `0` ist er `1`, und der an der Aktion eingestellte Wert wird unverändert verwendet.
- Angriff und Erfahrung steigen um diesen Faktor, Verteidigung (der erlittene Schaden) und Geschwindigkeit (die benötigte Zeit) sinken um denselben Faktor.
- Genauigkeit, Ausweichen, Erfolgsrate und Erholung sind Werte, die sich zwischen `0` und `100` % halten, deshalb wirkt der Faktor auf das Verhältnis zwischen dem Teil, der eintritt, und dem, der nicht eintritt. `0` % und `100` % ändern sich nicht, und kein Zwischenwert übersteigt `100` %.
- Bei Verteidigung, Ausweichen und Geschwindigkeit wirkt der Faktor zur Hälfte (ein Levelunterschied von `20` entspricht einem Levelunterschied von `10` bei den anderen Eigenschaften). Verteidigung und Ausweichen wirken doppelt, auf die Trefferquote und auf den erlittenen Schaden, und Geschwindigkeit wirkt als Anzahl der Ausführungen auf alle anderen Eigenschaften, deshalb ist ihre Wirkung zum Ausgleich abgeschwächt.
- Ein Anhaltspunkt ist (die Steigerungsrate der Erfahrung) hoch `6.7`. Darüber beschleunigt sich der Levelaufstieg, je höher das Level steigt, darunter dauert der Levelaufstieg in der späteren Phase länger.
- Bei `1` fällt der Einfluss des Levelunterschieds weg. Ein größerer Wert lässt Vor- und Nachteile durch den Levelunterschied schroffer ausfallen.

|Eigenschaftsfaktor|Levelunterschied -20|Levelunterschied -10|Levelunterschied 0|Levelunterschied +10|Levelunterschied +20|
|-|-|-|-|-|-|
|`1`|`x1.00`|`x1.00`|`x1.00`|`x1.00`|`x1.00`|
|`1.5`|`x0.44`|`x0.67`|`x1.00`|`x1.50`|`x2.25`|
|`2`|`x0.25`|`x0.50`|`x1.00`|`x2.00`|`x4.00`|
|`3`|`x0.11`|`x0.33`|`x1.00`|`x3.00`|`x9.00`|
- [_action_](de/editor/action)
- [_property_](de/editor/property)
___

## [_Kampfwerte_](de/editor/combat)