
# Requisito
A configuração das condições necessárias para usar ou exibir um elemento
- São as condições definidas em cada elemento: categoria, ação, item e evento.
- Se todas as condições definidas não forem atendidas, não é possível realizar a operação indicada na tabela.
- Dependendo da configuração de desbloqueio (unlocked) do elemento, o próprio elemento não aparece na tela até que as condições sejam atendidas.

|Onde é definido|O que não é possível fazer sem atender às condições|
|-|-|
|Categoria|Executar todas as ações da categoria e operar seus itens|
|Ação|Executar a ação|
|Item|Operar o item (equipar etc.)|
|Evento|Concluir uma tarefa e disparar um evento de mudança ou um evento fixo|
- [_type_](pt/editor/type)
___

## Tipo
O tipo de elemento consultado como condição

|Tipo|O valor que é consultado|
|-|-|
|Categoria|O nível da categoria|
|Ação|O número de vezes que a ação foi executada|
|Item|A quantidade do item em posse|
___

## O ID do elemento
O ID do elemento consultado como condição
- Defina o ID da categoria, da ação ou do item consultado como condição.
- Quando a contagem por grupo (requiringGroup) está ativada em um evento, é tratado como o ID de um grupo, e não de um elemento individual.
___

## Valor
A quantidade de que a condição precisa
- A condição é atendida quando se alcança ou se passa do valor indicado.
- É definido com um número inteiro de 0 ou mais. O valor padrão é `1`.
___

## Probabilidade de consumo [0-1]
A probabilidade de o item ser consumido (de 0 a 1, só funciona se o tipo for um item)
- É a probabilidade de consumir o item quando as condições são atendidas e a ação é executada.
- Com `1` sempre é consumido, com `0.5` é consumido com 50% de probabilidade e com `0` não é consumido.
- O valor padrão é `1` (sempre consumido). Nas condições de um evento (tarefa, evento de mudança ou evento fixo), porém, o valor padrão é `0` (não consumido), para que o que você tem não diminua ao concluí-lo.
- Com `0` o estoque não é reduzido, então você pode executar a ação quantas vezes quiser desde que a quantidade em posse alcance o valor da condição. Use quando quiser que a condição seja apenas estar equipado.
- Não funciona se o tipo não for um item.
___

## Equipamento
Se é exigido que o item esteja equipado como condição (só funciona se o tipo for um item)
- Ao ativar, a condição exige não só ter o item em posse, mas também estar com ele equipado.
- Se está equipado ou não é julgado pelo equipamento da categoria à qual o item pertence.
- Não funciona se o tipo não for um item.