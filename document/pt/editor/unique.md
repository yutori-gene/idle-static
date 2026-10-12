
# Evento fixo
As mensagens e recompensas que são ativadas em momentos determinados
- É ativado em momentos determinados, como ao abrir o mundo pela primeira vez ou ao chegar ao fim de jogo, e abre uma tela própria.
- Há um preparado para cada momento, e não dá para acrescentar nem excluir. Os momentos que você não usar ficam em branco.
- Não são exibidos nas missões nem na lista de tarefas. O que é alcançado ao cumprir requisitos se configura com uma tarefa.
- Quando o momento se concretiza, o evento é ativado e abre uma tela própria para exibir o conteúdo.
- A recompensa é obtida automaticamente no mesmo instante da ativação. Não há operação de recebimento nem fita como em uma tarefa, e o teto de tipos de itens que se pode ter também não é verificado.
- Quando há requisitos (requirements) configurados, a recompensa só é obtida se esses requisitos estivessem cumpridos no momento da ativação. Se não houver nenhum configurado, ela é obtida a cada ativação.
- Os requisitos apenas são conferidos para ver se estão cumpridos, então os itens não diminuem mesmo que se configure uma probabilidade de consumo (chance).
- Na ativação você pode alterar o nível de uma categoria, a quantidade de execuções de uma ação e a quantidade de itens em posse. Colocando uma quantidade negativa, dá para usá-lo também de formas como fazer perder os pertences no fim de jogo.
- Se você deixar o nome, a descrição e o ícone em branco, são usados o texto e o ícone padrão embutidos no reprodutor.

|Momento|Requisito de ativação|Repetição|
|-|-|-|
|`comebacked`|Quando você retorna após 1 segundo ou mais offline e ao menos uma ação foi concluída enquanto você estava ausente|Muitas vezes|
|`gameovered`|Quando o vigor do jogador se esgota no combate|Muitas vezes|
|`welcomed`|Quando este mundo é iniciado pela primeira vez|Só uma vez|
|`completed`|Quando o nível de todas as categorias alcança o valor máximo (maxCategoryLevels)|Só uma vez|
|`obtained`|Quando uma ação do tipo single (um baú do tesouro, por exemplo) é concluída e conferida|Muitas vezes|
- [_task_](pt/editor/task)
___

## Ao retornar
É ativado ao retornar de estar offline
- É ativado quando você retorna após 1 segundo ou mais offline e ao menos uma ação foi concluída enquanto você estava ausente. Se nenhuma execução tiver terminado, ele não é ativado.
- É exibido junto com o resumo do progresso do tempo em que você esteve ausente.
___

### [_Informação（Ao retornar）_](pt/editor/information)
___

### Categoria（Ao retornar）
Não é usado em um evento
- Não são exibidos nas missões nem na lista de tarefas, portanto a categoria à qual pertencem não é especificada.
- O campo de entrada não é exibido no editor.
___

### Momento（Ao retornar）
O momento em que o evento dispara (fixo)
- Está fixado como `comebacked` e não dá para editar.
- É ativado quantas vezes for, toda vez que você retorna.
___

### Estado de exibição inicial（Ao retornar）
O estado de exibição inicial do ícone do evento (o disparo é decidido pelo momento, e esta configuração não o dispara)
- As condições de disparo de um evento são decididas pelo momento, e este campo afeta apenas a aparência do ícone.
- secreted: O ícone não é exibido até que todos os requirements sejam atendidos (o disparo em si ocorre no seu momento).
- hidden e hinted: O ícone é exibido com um traço sobre ele, como ainda não desbloqueado.
- released: O traço desaparece e ele é exibido como já desbloqueado.
___

### [_Requisito（Ao retornar）_](pt/editor/requirement)
___

### Soma por grupo（Ao retornar）
Trata o id das condições como um ID de grupo e julga pelo valor total dos elementos que pertencem a ele
- Ao ativar, o id que você define nas condições (requirements) é tratado como o ID de um grupo diretamente sob o mundo.
- Uma condição cujo tipo é uma categoria é julgada pelo nível total de todas as categorias que pertencem a esse grupo.
- Uma condição cujo tipo é uma ação é julgada pelo total do número de vezes que todas as ações que pertencem a esse grupo foram executadas.
- Uma condição cujo tipo é um item é julgada pelo total da quantidade em posse de todos os itens que pertencem a esse grupo.
- Os elementos que não estão desbloqueados (qualquer estado diferente de released) não entram no total.
- A probabilidade de consumo (chance) e a condição de equipamento (equipment) de um item são ignoradas, e a quantidade em posse também não é consumida. Elas são usadas apenas para o julgamento.
- Ao desativar, o id das condições é tratado como o ID de uma categoria, uma ação ou um item individuais, como antes.
- [_group_](pt/editor/group)
___

### [_Obtenção（Ao retornar）_](pt/editor/acquisition)
___

### Grupo de tarefas（Ao retornar）
Não é usado em um evento
- Não são exibidos nas missões nem na lista de tarefas, portanto o grupo não é especificado.
- O campo de entrada não é exibido no editor.
___

## No fim de jogo
É ativado quando o vigor se esgota no combate
- É ativado quando o vigor do jogador se esgota no combate.
- Ao mesmo tempo, todas as ações em execução param e todas as reservas em espera são descartadas.
- Colocando uma quantidade negativa na recompensa, dá para dar um preço ao fim de jogo.
___

### [_Informação（No fim de jogo）_](pt/editor/information)
___

### Categoria（No fim de jogo）
Não é usado em um evento
- Não são exibidos nas missões nem na lista de tarefas, portanto a categoria à qual pertencem não é especificada.
- O campo de entrada não é exibido no editor.
___

### Momento（No fim de jogo）
O momento em que o evento dispara (fixo)
- Está fixado como `gameovered` e não dá para editar.
- É ativado quantas vezes for, toda vez que se chega ao fim de jogo.
___

### Estado de exibição inicial（No fim de jogo）
O estado de exibição inicial do ícone do evento (o disparo é decidido pelo momento, e esta configuração não o dispara)
- As condições de disparo de um evento são decididas pelo momento, e este campo afeta apenas a aparência do ícone.
- secreted: O ícone não é exibido até que todos os requirements sejam atendidos (o disparo em si ocorre no seu momento).
- hidden e hinted: O ícone é exibido com um traço sobre ele, como ainda não desbloqueado.
- released: O traço desaparece e ele é exibido como já desbloqueado.
___

### [_Requisito（No fim de jogo）_](pt/editor/requirement)
___

### Soma por grupo（No fim de jogo）
Trata o id das condições como um ID de grupo e julga pelo valor total dos elementos que pertencem a ele
- Ao ativar, o id que você define nas condições (requirements) é tratado como o ID de um grupo diretamente sob o mundo.
- Uma condição cujo tipo é uma categoria é julgada pelo nível total de todas as categorias que pertencem a esse grupo.
- Uma condição cujo tipo é uma ação é julgada pelo total do número de vezes que todas as ações que pertencem a esse grupo foram executadas.
- Uma condição cujo tipo é um item é julgada pelo total da quantidade em posse de todos os itens que pertencem a esse grupo.
- Os elementos que não estão desbloqueados (qualquer estado diferente de released) não entram no total.
- A probabilidade de consumo (chance) e a condição de equipamento (equipment) de um item são ignoradas, e a quantidade em posse também não é consumida. Elas são usadas apenas para o julgamento.
- Ao desativar, o id das condições é tratado como o ID de uma categoria, uma ação ou um item individuais, como antes.
- [_group_](pt/editor/group)
___

### [_Obtenção（No fim de jogo）_](pt/editor/acquisition)
___

### Grupo de tarefas（No fim de jogo）
Não é usado em um evento
- Não são exibidos nas missões nem na lista de tarefas, portanto o grupo não é especificado.
- O campo de entrada não é exibido no editor.
___

## No primeiro início
É ativado ao abrir o mundo pela primeira vez
- É ativado quando este mundo é iniciado pela primeira vez.
- Serve para explicar a ambientação do mundo e para entregar os preparativos dados no começo.
___

### [_Informação（No primeiro início）_](pt/editor/information)
___

### Categoria（No primeiro início）
Não é usado em um evento
- Não são exibidos nas missões nem na lista de tarefas, portanto a categoria à qual pertencem não é especificada.
- O campo de entrada não é exibido no editor.
___

### Momento（No primeiro início）
O momento em que o evento dispara (fixo)
- Está fixado como `welcomed` e não dá para editar.
- É ativado uma única vez, no primeiro início.
___

### Estado de exibição inicial（No primeiro início）
O estado de exibição inicial do ícone do evento (o disparo é decidido pelo momento, e esta configuração não o dispara)
- As condições de disparo de um evento são decididas pelo momento, e este campo afeta apenas a aparência do ícone.
- secreted: O ícone não é exibido até que todos os requirements sejam atendidos (o disparo em si ocorre no seu momento).
- hidden e hinted: O ícone é exibido com um traço sobre ele, como ainda não desbloqueado.
- released: O traço desaparece e ele é exibido como já desbloqueado.
___

### [_Requisito（No primeiro início）_](pt/editor/requirement)
___

### Soma por grupo（No primeiro início）
Trata o id das condições como um ID de grupo e julga pelo valor total dos elementos que pertencem a ele
- Ao ativar, o id que você define nas condições (requirements) é tratado como o ID de um grupo diretamente sob o mundo.
- Uma condição cujo tipo é uma categoria é julgada pelo nível total de todas as categorias que pertencem a esse grupo.
- Uma condição cujo tipo é uma ação é julgada pelo total do número de vezes que todas as ações que pertencem a esse grupo foram executadas.
- Uma condição cujo tipo é um item é julgada pelo total da quantidade em posse de todos os itens que pertencem a esse grupo.
- Os elementos que não estão desbloqueados (qualquer estado diferente de released) não entram no total.
- A probabilidade de consumo (chance) e a condição de equipamento (equipment) de um item são ignoradas, e a quantidade em posse também não é consumida. Elas são usadas apenas para o julgamento.
- Ao desativar, o id das condições é tratado como o ID de uma categoria, uma ação ou um item individuais, como antes.
- [_group_](pt/editor/group)
___

### [_Obtenção（No primeiro início）_](pt/editor/acquisition)
___

### Grupo de tarefas（No primeiro início）
Não é usado em um evento
- Não são exibidos nas missões nem na lista de tarefas, portanto o grupo não é especificado.
- O campo de entrada não é exibido no editor.
___

## Ao concluir o jogo
É ativado quando todas as categorias alcançam o nível máximo
- É ativado quando o nível de todas as categorias alcança o valor máximo (maxCategoryLevels).
- As categorias que não são numeric ficam de fora da verificação. Por isso ele não é ativado em um mundo que não tem nenhuma categoria numérica.
___

### [_Informação（Ao concluir o jogo）_](pt/editor/information)
___

### Categoria（Ao concluir o jogo）
Não é usado em um evento
- Não são exibidos nas missões nem na lista de tarefas, portanto a categoria à qual pertencem não é especificada.
- O campo de entrada não é exibido no editor.
___

### Momento（Ao concluir o jogo）
O momento em que o evento dispara (fixo)
- Está fixado como `completed` e não dá para editar.
- É ativado uma única vez, quando os requisitos são cumpridos.
___

### Estado de exibição inicial（Ao concluir o jogo）
O estado de exibição inicial do ícone do evento (o disparo é decidido pelo momento, e esta configuração não o dispara)
- As condições de disparo de um evento são decididas pelo momento, e este campo afeta apenas a aparência do ícone.
- secreted: O ícone não é exibido até que todos os requirements sejam atendidos (o disparo em si ocorre no seu momento).
- hidden e hinted: O ícone é exibido com um traço sobre ele, como ainda não desbloqueado.
- released: O traço desaparece e ele é exibido como já desbloqueado.
___

### [_Requisito（Ao concluir o jogo）_](pt/editor/requirement)
___

### Soma por grupo（Ao concluir o jogo）
Trata o id das condições como um ID de grupo e julga pelo valor total dos elementos que pertencem a ele
- Ao ativar, o id que você define nas condições (requirements) é tratado como o ID de um grupo diretamente sob o mundo.
- Uma condição cujo tipo é uma categoria é julgada pelo nível total de todas as categorias que pertencem a esse grupo.
- Uma condição cujo tipo é uma ação é julgada pelo total do número de vezes que todas as ações que pertencem a esse grupo foram executadas.
- Uma condição cujo tipo é um item é julgada pelo total da quantidade em posse de todos os itens que pertencem a esse grupo.
- Os elementos que não estão desbloqueados (qualquer estado diferente de released) não entram no total.
- A probabilidade de consumo (chance) e a condição de equipamento (equipment) de um item são ignoradas, e a quantidade em posse também não é consumida. Elas são usadas apenas para o julgamento.
- Ao desativar, o id das condições é tratado como o ID de uma categoria, uma ação ou um item individuais, como antes.
- [_group_](pt/editor/group)
___

### [_Obtenção（Ao concluir o jogo）_](pt/editor/acquisition)
___

### Grupo de tarefas（Ao concluir o jogo）
Não é usado em um evento
- Não são exibidos nas missões nem na lista de tarefas, portanto o grupo não é especificado.
- O campo de entrada não é exibido no editor.
___

## Ao concluir uma ação avulsa
É ativado ao concluir uma ação avulsa, como um baú do tesouro
- É ativado quando uma ação do tipo single (um baú do tesouro, por exemplo) é concluída e conferida.
- Além da recompensa da própria ação, dá para somar a recompensa configurada aqui.
___

### [_Informação（Ao concluir uma ação avulsa）_](pt/editor/information)
___

### Categoria（Ao concluir uma ação avulsa）
Não é usado em um evento
- Não são exibidos nas missões nem na lista de tarefas, portanto a categoria à qual pertencem não é especificada.
- O campo de entrada não é exibido no editor.
___

### Momento（Ao concluir uma ação avulsa）
O momento em que o evento dispara (fixo)
- Está fixado como `obtained` e não dá para editar.
- É ativado quantas vezes for, toda vez que uma ação avulsa é concluída.
___

### Estado de exibição inicial（Ao concluir uma ação avulsa）
O estado de exibição inicial do ícone do evento (o disparo é decidido pelo momento, e esta configuração não o dispara)
- As condições de disparo de um evento são decididas pelo momento, e este campo afeta apenas a aparência do ícone.
- secreted: O ícone não é exibido até que todos os requirements sejam atendidos (o disparo em si ocorre no seu momento).
- hidden e hinted: O ícone é exibido com um traço sobre ele, como ainda não desbloqueado.
- released: O traço desaparece e ele é exibido como já desbloqueado.
___

### [_Requisito（Ao concluir uma ação avulsa）_](pt/editor/requirement)
___

### Soma por grupo（Ao concluir uma ação avulsa）
Trata o id das condições como um ID de grupo e julga pelo valor total dos elementos que pertencem a ele
- Ao ativar, o id que você define nas condições (requirements) é tratado como o ID de um grupo diretamente sob o mundo.
- Uma condição cujo tipo é uma categoria é julgada pelo nível total de todas as categorias que pertencem a esse grupo.
- Uma condição cujo tipo é uma ação é julgada pelo total do número de vezes que todas as ações que pertencem a esse grupo foram executadas.
- Uma condição cujo tipo é um item é julgada pelo total da quantidade em posse de todos os itens que pertencem a esse grupo.
- Os elementos que não estão desbloqueados (qualquer estado diferente de released) não entram no total.
- A probabilidade de consumo (chance) e a condição de equipamento (equipment) de um item são ignoradas, e a quantidade em posse também não é consumida. Elas são usadas apenas para o julgamento.
- Ao desativar, o id das condições é tratado como o ID de uma categoria, uma ação ou um item individuais, como antes.
- [_group_](pt/editor/group)
___

### [_Obtenção（Ao concluir uma ação avulsa）_](pt/editor/acquisition)
___

### Grupo de tarefas（Ao concluir uma ação avulsa）
Não é usado em um evento
- Não são exibidos nas missões nem na lista de tarefas, portanto o grupo não é especificado.
- O campo de entrada não é exibido no editor.