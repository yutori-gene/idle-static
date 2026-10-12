
# 类型
世界的基本分类
- 世界由6种类型构成。
- 所有要素都配置在世界直属之下。
- 动作和物品通过所属类别的ID来关联。
- 只有事件不属于类型，而是按时机汇总配置在世界直属的事件（events）中。

|类型|说明|
|-|-|
|[_category_](zh/editor/category)|对动作和物品进行分类的大框架|
|[_action_](zh/editor/action)|采集、制作、战斗等行动要素|
|[_item_](zh/editor/item)|装备品和消耗品等物品要素|
|[_skill_](zh/editor/skill)|战斗的每个回合抽选后发动的特殊效果|
|[_group_](zh/editor/group)|定义类别、动作、物品、任务的显示分组|
|[_preset_](zh/editor/preset)|系统要素显示的自定义|
```
world
├── category
├── action
├── item
├── skill
├── group
└── preset
```