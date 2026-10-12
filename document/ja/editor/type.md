
# タイプ
ワールドの基本的な分類
- ワールドは6つのタイプで構成されます。
- すべての要素はワールド直下に配置されます。
- アクションとアイテムは所属するカテゴリのIDで関連付けられます。
- イベントだけはタイプではなく、ワールド直下のイベント（events）にタイミングごとにまとめて配置されます。

|タイプ|説明|
|-|-|
|[_category_](ja/editor/category)|アクションやアイテムを分類する大枠|
|[_action_](ja/editor/action)|採取、制作、戦闘などの行動要素|
|[_item_](ja/editor/item)|装備品や消費物などの物品要素|
|[_skill_](ja/editor/skill)|戦闘のターンごとに抽選されて発動する特殊効果|
|[_group_](ja/editor/group)|カテゴリ、アクション、アイテム、タスクの表示グループを定義|
|[_preset_](ja/editor/preset)|システム要素の表示カスタマイズ|
```
world
├── category
├── action
├── item
├── skill
├── group
└── preset
```