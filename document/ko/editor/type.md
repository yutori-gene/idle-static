
# 타입
월드의 기본적인 분류
- 월드는 6가지 타입으로 구성됩니다.
- 모든 요소는 월드 바로 아래에 배치됩니다.
- 액션과 아이템은 속한 카테고리의 ID로 연결됩니다.
- 이벤트만은 타입이 아니라, 월드 바로 아래의 이벤트(events)에 타이밍별로 모아서 배치됩니다.

|타입|설명|
|-|-|
|[_category_](ko/editor/category)|액션과 아이템을 분류하는 큰 틀|
|[_action_](ko/editor/action)|채집, 제작, 전투 등의 행동 요소|
|[_item_](ko/editor/item)|장비품이나 소비품 등의 물품 요소|
|[_skill_](ko/editor/skill)|전투의 턴마다 추첨되어 발동하는 특수 효과|
|[_group_](ko/editor/group)|카테고리, 액션, 아이템, 과제의 표시 그룹을 정의|
|[_preset_](ko/editor/preset)|시스템 요소의 표시 커스터마이즈|
```
world
├── category
├── action
├── item
├── skill
├── group
└── preset
```