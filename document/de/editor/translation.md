
# Übersetzung
Einstellungen, um die Texte einer Welt in zehn Sprachen zu übersetzen
- Es gibt zwei Arten von Übersetzung: die der gemeinsamen Formulierungen der Oberfläche (Voreinstellungen) und die der Namen und Erklärungen, die die Welt selbst besitzt.
- Die Übersetzung der gemeinsamen Formulierungen ist unabhängig von der Einstellung `translations` in den allgemeinen Einstellungen immer enthalten. Der Autor muss sie nicht vorbereiten.
- Die Übersetzung der Welt selbst wird nur exportiert, wenn `translations` in den allgemeinen Einstellungen aktiviert ist und die Welt veröffentlicht wird; übersetzt wird sie vom Autor.
- In Sprachen, für die keine Übersetzung vorbereitet ist, erscheint der Text genau so, wie er in der Welt steht.
- [_general_](de/editor/general)
___

## Übersetzung aktivieren
Was beim Aktivieren der Übersetzung geschieht
- Aktiviert wird `translations` in den allgemeinen Einstellungen. Hier wird erklärt, was beim Aktivieren geschieht.
- Ist es aktiviert, enthält die veröffentlichte Welt Übersetzungsdateien für zehn Sprachen, und die Sprache lässt sich in den Einstellungen des Players umschalten. Ist es deaktiviert, lässt sich die Sprache überhaupt nicht wechseln.
- Die zehn Dateien werden mit demselben Inhalt (dem Text vor der Übersetzung) exportiert. Eine Sprache, die du nicht übersetzt hast, zeigt den ursprünglichen Text unverändert. Du kannst auch nur einzelne Sprachen übersetzen, dann mischt sich auf deren Bildschirmen der ursprüngliche Text darunter.
- Beim Start des Spiels erscheint zuerst die Sprache, die in `language` in den allgemeinen Einstellungen festgelegt ist. Danach lässt sie sich in der Einstellungsspalte auf jede beliebige Sprache ändern.
- Im Testspiel des Editors gibt es die Übersetzungsdateien der Welt noch nicht, deshalb ändern sich beim Sprachwechsel nur die gemeinsamen Formulierungen der Oberfläche.
- Übersetzen ist mühsam, aber dadurch können viel mehr Leute spielen.
- [_general_](de/editor/general)
___

## Sprachdateien
Die JSON-Dateien, die für die Übersetzung exportiert werden
- Exportierst du eine Welt über Veröffentlichen im Menü, enthält `translations/base` die Übersetzung der gemeinsamen Formulierungen und `translations/world` die Übersetzung der Welt selbst.
- Zu übersetzen sind nur die zehn Dateien in `translations/world`. `translations/base` ist bereits übersetzt enthalten, du musst es nicht anfassen.
- Der Inhalt der Datei ist nach Typ gegliedert, darunter stehen die IDs der Elemente und darunter der Name (`name`) und die Erklärung (`explanation`).
- Es gibt sieben Typen: Kategorie, Aktion, Gegenstand, Ereignis, Gruppe, Fähigkeit und Voreinstellung. Währung, Kapazität und Warteschlange gehören zu den Gegenständen, der Überblick der Welt zu den Voreinstellungen, und Aufgaben und feste Ereignisse gemeinsam zu den Ereignissen.
- Elemente, deren Name leer gelassen wurde, werden mit einem automatisch aus der ID gebildeten Namen exportiert.
- Lege die übersetzten Dateien unter demselben Namen wieder in `translations/world` ab.
___

## Die Übersetzungsarbeit
Das Bearbeiten der Übersetzungsdaten
- Die zehn exportierten Dateien haben alle denselben Inhalt (den Text vor der Übersetzung).
- Außer der Datei der Ausgangssprache müssen alle übersetzt werden.
- Übersetze nur die Werte von `name` und `explanation`. Ändere weder die IDs noch die Struktur des JSON.
___

### AI
Übersetzung mit KI
- Übersetze mit einer KI wie ChatGPT, Copilot oder Claude.
- Sie kann alles auf einmal übersetzen, in ordentlicher Qualität.
- Die Übersetzung wird nicht immer vollständig; besonders bei Fachbegriffen und Eigennamen ist Vorsicht geboten.
- Je nach Umfang kann der Einsatz einer KI Kosten verursachen.
- Bricht die KI die Übersetzung mittendrin ab, hilft die Anweisung „mach weiter“ manchmal. (Manchmal auch nicht.)
___

#### Beispiel-Prompt
Ein Beispiel für die Übersetzungsanweisung an eine KI
- Beispiel-Prompt: Übersetze die Werte von `name` und `explanation` in den hochgeladenen JSON-Daten aus dem Japanischen ins Englische. Ändere weder die Schlüssel noch die übrigen Teile.
___

#### GPTs nutzen
Übersetzung mit einem GPT von ChatGPT
- Mit dem JSON Language Translator aus der GPT-Bibliothek von ChatGPT lässt sich JSON bequem übersetzen.
- Die Struktur des JSON bleibt bei der Übersetzung erhalten.
- Auch andere KI-Dienste als ChatGPT bieten mitunter dieselbe Funktion.
___

### Übersetzungsdienste
Die Nutzung eines Übersetzungsdienstes
- Übersetze mit einem Onlinedienst wie DeepL oder Google Übersetzer.
- Eine höhere Qualität als bei der KI-Übersetzung ist zu erwarten, je nach Umfang fallen aber Gebühren an.
- Eine JSON-Datei lässt sich von einem Übersetzungsdienst nicht unverändert übersetzen, du musst dafür also ein Programm schreiben.
- Es scheint auch kostenpflichtige Dienste zu geben, die JSON-Daten direkt übersetzen (etwa doctranslator.com).
___

### Manuell
Die Übersetzung von Hand
- Öffne die Übersetzungsdatei in einem Texteditor und gib den in die jeweilige Sprache übersetzten Inhalt ein. Das ist sehr aufwendig, dafür kannst du genau so übersetzen, wie du es dir vorstellst.
___

## Sprachcodes
Die Liste der unterstützten Sprachcodes
- Der Name der Übersetzungsdatei ist dieser Sprachcode.
- Unterstützt werden genau diese zehn Sprachen; mehr oder weniger sind nicht möglich.

|Sprachcode|Sprache|
|-|-|
|en|Englisch|
|zh|Chinesisch (vereinfacht)|
|es|Spanisch|
|pt|Portugiesisch|
|fr|Französisch|
|ru|Russisch|
|de|Deutsch|
|ja|Japanisch|
|id|Indonesisch|
|ko|Koreanisch|