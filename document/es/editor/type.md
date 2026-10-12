
# Tipo
La clasificación básica del mundo
- Un mundo se compone de seis tipos.
- Todos los elementos se colocan directamente bajo el mundo.
- Las acciones y los artículos se vinculan mediante el ID de la categoría a la que pertenecen.
- Solo los eventos no son un tipo: se colocan agrupados por momento en los eventos (events) que están directamente bajo el mundo.

|Tipo|Descripción|
|-|-|
|[_category_](es/editor/category)|El marco amplio que clasifica las acciones y los artículos|
|[_action_](es/editor/action)|Los elementos de comportamiento como la recolección, la fabricación y el combate|
|[_item_](es/editor/item)|Elementos de objetos como el equipamiento y los consumibles|
|[_skill_](es/editor/skill)|Un efecto especial que se sortea en cada turno del combate y se activa|
|[_group_](es/editor/group)|Define los grupos de visualización de las categorías, las acciones, los artículos y las tareas|
|[_preset_](es/editor/preset)|Personalización de cómo se muestran los elementos del sistema|
```
world
├── category
├── action
├── item
├── skill
├── group
└── preset
```