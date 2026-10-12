
# Typ
Die grundlegende Einteilung der Welt
- Eine Welt besteht aus sechs Typen.
- Alle Elemente werden direkt unter der Welt abgelegt.
- Aktionen und Gegenstände werden über die ID der Kategorie verknüpft, zu der sie gehören.
- Nur die Ereignisse sind kein Typ: Sie werden nach Zeitpunkt gebündelt in den Ereignissen (events) direkt unter der Welt abgelegt.

|Typ|Beschreibung|
|-|-|
|[_category_](de/editor/category)|Der grobe Rahmen, der Aktionen und Gegenstände einteilt|
|[_action_](de/editor/action)|Die Handlungselemente wie Sammeln, Herstellen und Kampf|
|[_item_](de/editor/item)|Elemente für Dinge wie Ausrüstung und Verbrauchsgüter|
|[_skill_](de/editor/skill)|Ein besonderer Effekt, der in jeder Runde des Kampfes ausgelost wird und auslöst|
|[_group_](de/editor/group)|Definiert die Anzeigegruppen der Kategorien, Aktionen, Gegenstände und Aufgaben|
|[_preset_](de/editor/preset)|Anpassung der Darstellung der Systemelemente|
```
world
├── category
├── action
├── item
├── skill
├── group
└── preset
```