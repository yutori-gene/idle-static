
# Type
La classification de base du monde
- Un monde se compose de six types.
- Tous les éléments sont placés directement sous le monde.
- Les actions et les objets sont reliés par l'ID de la catégorie à laquelle ils appartiennent.
- Seuls les événements ne sont pas un type : ils sont placés ensemble par moment dans les événements (events) situés directement sous le monde.

|Type|Description|
|-|-|
|[_category_](fr/editor/category)|Le grand cadre qui classe les actions et les objets|
|[_action_](fr/editor/action)|Les éléments de comportement comme la récolte, la fabrication et le combat|
|[_item_](fr/editor/item)|Éléments de biens tels que les équipements et les consommables|
|[_skill_](fr/editor/skill)|Un effet spécial tiré au sort à chaque tour du combat et qui se déclenche|
|[_group_](fr/editor/group)|Définit les groupes d'affichage des catégories, des actions, des objets et des tâches|
|[_preset_](fr/editor/preset)|Personnalisation de l'affichage des éléments du système|
```
world
├── category
├── action
├── item
├── skill
├── group
└── preset
```