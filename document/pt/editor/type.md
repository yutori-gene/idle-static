
# Tipo
A classificação básica do mundo
- Um mundo é composto por seis tipos.
- Todos os elementos são colocados diretamente sob o mundo.
- As ações e os itens são vinculados pelo ID da categoria à qual pertencem.
- Só os eventos não são um tipo: eles são colocados agrupados por momento nos eventos (events) que estão diretamente sob o mundo.

|Tipo|Descrição|
|-|-|
|[_category_](pt/editor/category)|O grande enquadramento que classifica as ações e os itens|
|[_action_](pt/editor/action)|Os elementos de comportamento como a coleta, a fabricação e o combate|
|[_item_](pt/editor/item)|Elementos de bens como equipamentos e consumíveis|
|[_skill_](pt/editor/skill)|Um efeito especial que é sorteado a cada turno do combate e ativa|
|[_group_](pt/editor/group)|Define os grupos de exibição das categorias, das ações, dos itens e das tarefas|
|[_preset_](pt/editor/preset)|Personalização de como os elementos do sistema são exibidos|
```
world
├── category
├── action
├── item
├── skill
├── group
└── preset
```