
# Tarefa
Uma missão que é cumprida quando as condições são atendidas
- É cumprida quando as condições que você define são atendidas, e uma mensagem aparece na parte superior da tela.
- Aparece na lista de missões do reprodutor e na lista de tarefas da categoria.
- Uma tarefa sem condições definidas nunca é cumprida.
- Uma vez cumprida, ela continua cumprida mesmo que depois as condições deixem de ser atendidas, e a recompensa pode ser recebida a qualquer momento.
- A recompensa não é entregue automaticamente. O jogador a recebe quando abre a tarefa e pressiona a barra de Obtenção.
- Até a recompensa ser recebida, a barra na lista leva uma fita indicando que ela ainda não foi resgatada.
- Uma tarefa sem recompensa definida não mostra a barra de Obtenção e fica completa no momento em que é cumprida.
- Você não consegue receber a recompensa enquanto o número de tipos de itens que pode ter estiver no limite. Organize o que você tem e resgate de novo.
- Com a obtenção você pode alterar o nível de uma categoria, o número de vezes que uma ação foi executada e a quantidade em posse de um item.
- O que você quiser disparar em um momento diferente das condições, como a primeira inicialização ou o fim de jogo, é definido com um evento fixo (unique).
- [_unique_](pt/editor/unique)
___

## [_Informação_](pt/editor/information)
___

## Categoria
O ID da categoria à qual a tarefa pertence
- Especifique o ID da categoria à qual esta tarefa pertence.
- Ao defini-lo, a lista de tarefas é adicionada à tela da categoria do reprodutor, e na lista de missões elas também são exibidas agrupadas por categoria.
- Quando deixado em branco, ela não pertence a nenhuma categoria e é exibida junto no início da lista de missões.
- Quando não há cor definida na própria tarefa, ela herda a cor da categoria.
- [_category_](pt/editor/category)
___

## Momento
O momento em que a tarefa dispara (fixado em `tasked`)
- A tarefa está fixada em `tasked` (quando as condições que você define são atendidas) e não pode ser editada.
- A recompensa só pode ser recebida uma vez, e depois de recebida ela permanece cumprida sem mais mudanças.
- O que você quiser disparar em outro momento determinado é definido com um evento fixo (unique).
- [_unique_](pt/editor/unique)
___

## Estado de exibição inicial
O estado de exibição inicial do ícone da tarefa (o cumprimento é decidido pelas condições, e esta configuração não o cumpre)
- As condições de cumprimento de uma tarefa são decididas por requirements, e este campo afeta apenas a aparência do ícone na lista.
- secreted: Não aparece de forma alguma na lista de tarefas até que todos os requirements sejam atendidos (o cumprimento em si continua ocorrendo pelas condições).
- hidden e hinted: O ícone é exibido com um traço sobre ele, como ainda não desbloqueado.
- released: O traço desaparece e ele é exibido como já desbloqueado.
- Uma tarefa que foi cumprida uma vez não desaparece da lista, e continua sendo exibida como cumprida mesmo que depois as condições deixem de ser atendidas.
___

## [_Requisito_](pt/editor/requirement)
___

## Soma por grupo
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

## [_Obtenção_](pt/editor/acquisition)
___

## Grupo de tarefas
A classificação de grupo de exibição da tarefa
- Aplique um dos definidos nos grupos que estão diretamente sob o mundo.
- Na lista de tarefas de uma categoria, elas são exibidas separadas por grupo, com um cabeçalho em cada um. As tarefas sem grupo definido também formam um bloco, e a predefinição "Tarefa" é usada como seu cabeçalho.
- Na lista de missões elas não são separadas por cabeçalho, e apenas a ordem em que se alinham fica reunida por grupo.
- A ordem em que os blocos se alinham é decidida pela posição onde a primeira tarefa daquele grupo aparece.
- [_group_](pt/editor/group)