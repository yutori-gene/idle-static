
# Type
The basic classification of the world
- A world is made up of six types.
- Every element is placed directly under the world.
- Actions and items are linked by the ID of the category they belong to.
- Events alone are not a type; they are placed together by timing in the events (events) directly under the world.

|Type|Description|
|-|-|
|[_category_](en/editor/category)|The broad framework that classifies actions and items|
|[_action_](en/editor/action)|The elements of behaviour such as gathering, crafting and combat|
|[_item_](en/editor/item)|Elements for goods such as equipment and consumables|
|[_skill_](en/editor/skill)|A special effect that is drawn each turn of a combat and fires|
|[_group_](en/editor/group)|Defines the display groups of the categories, the actions, the items and the tasks|
|[_preset_](en/editor/preset)|Customising how the system elements are shown|
```
world
├── category
├── action
├── item
├── skill
├── group
└── preset
```