
# Evento de mudança
Um evento de processamento interno que dispara quando a quantidade de uma categoria, uma ação ou um item aumenta de uma vez na quantidade das condições ou mais
- Ele é verificado em todo momento em que uma quantidade muda, como a conclusão de uma ação, uma compra ou venda, ou a abertura de um baú do tesouro.
- As condições (requirements) são julgadas pela quantidade do aumento naquele único momento, e não por um valor absoluto como a quantidade em posse. Aumentos pequenos divididos em várias vezes não são somados.
- Se você definir a condição de um item como 3, por exemplo, ela é atendida quando esse item aumenta em 3 ou mais naquela única vez. Uma diminuição não conta como aumento.
- Quando você define várias condições, todas precisam ser atendidas ao mesmo tempo naquela única mudança. Um evento de mudança sem nenhuma condição definida nunca dispara.
- Colocar o valor de uma condição em `0` conta como atendida mesmo sem aumento, então ele dispara toda vez que uma quantidade muda.
- A probabilidade de consumo (chance) e o equipamento (equipment) das condições não são observados. O julgamento usa apenas a quantidade do aumento, e os elementos usados nas condições também não diminuem.
- A recompensa é recebida automaticamente toda vez que as condições são atendidas, e ele dispara repetidamente quantas vezes for. Diferente de uma tarefa, não é uma vez só, e nenhuma operação é necessária para recebê-la. Uma quantidade negativa também pode ser definida.
- Diferente de uma tarefa ou de uma compra, o limite do número de tipos de itens que você pode ter não é verificado, então itens novos podem aumentar além da capacidade.
- Um aumento vindo de uma recompensa também é tratado como uma mudança, então quando a recompensa de um evento de mudança atende as condições de outro evento de mudança, este dispara em seguida.
- Ele não é exibido de forma alguma na tela do reprodutor. Não aparece na lista de missões, e a mensagem de cumprimento também não é exibida.

!> Não defina a recompensa de um evento de mudança de modo que ela atenda as próprias condições dele. Ele não pararia de disparar e o jogo travaria. Um exemplo é um evento cujas condições são atendidas quando o item A aumenta em um e cuja recompensa entrega um item A.
- [_unique_](pt/editor/unique)
___

## [_Informação_](pt/editor/information)
___

## Categoria
O ID da categoria à qual o evento de mudança pertence (é usado apenas para classificação, porque nada é exibido na tela)
- Como nada é exibido na tela do reprodutor, esta configuração não afeta a aparência.
___

## Momento
O momento em que o evento de mudança dispara (fixado em `changed`)
- Está fixado em `changed` e não pode ser editado.
- Ele é verificado em todo momento em que uma quantidade muda, e dispara de novo toda vez que as condições são atendidas.
___

## Estado de exibição inicial
Praticamente não tem efeito, porque nada é exibido na tela
- Um evento de mudança não é exibido na tela do reprodutor, então esta configuração não é usada.
___

## [_Requisito_](pt/editor/requirement)
___

## Soma por grupo
Trata o id das condições como um ID de grupo e julga pelo total da quantidade do aumento dos elementos que pertencem a ele
- Ao ativar, o id que você define nas condições (requirements) é tratado como o ID de um grupo diretamente sob o mundo.
- As quantidades do aumento de todas as categorias, todas as ações e todos os itens que pertencem a esse grupo são somadas para o julgamento.
- Diferente da soma por grupo de uma tarefa, a quantidade do aumento de um elemento que ainda não está desbloqueado também entra no total.
- Ao desativar, o id das condições é tratado como o ID de uma categoria, uma ação ou um item individuais, como antes.
- [_group_](pt/editor/group)
___

## [_Obtenção_](pt/editor/acquisition)
___

## Grupo de eventos de mudança
A classificação de grupo de exibição para a gestão interna (praticamente sem uso, porque nada é exibido na tela)
- Um evento de mudança não é exibido na tela do reprodutor, então esta configuração não afeta a aparência.