
# Habilidade
Um efeito especial que é sorteado a cada turno do combate e ativa
- É um efeito especial que é sorteado a cada turno e ativa em uma ação de combate (`stamina`). Ele não ativa em ações de nenhum outro tipo.
- A substância é definida aqui, e é referenciada por ID a partir de `skill` de um item (o seu lado) e `skills` de uma ação (o lado do adversário).
- Os candidatos do seu lado são as habilidades referenciadas pelos itens que estão fazendo efeito naquele momento (`unnecessary` enquanto em posse, `necessary` e `consumable` enquanto equipados). Ao desequipar um item, a habilidade dele também sai dos candidatos.
- A cada turno os candidatos são embaralhados no seu lado e no lado do adversário, a probabilidade de ativação é julgada a partir do topo, e apenas a primeira que dá certo é ativada. Se nenhuma der certo, naquele turno não há habilidade.
- Quando vários itens ou ações referenciam a mesma habilidade, ela ganha outras tantas oportunidades no sorteio, então ativa com mais facilidade.
- [_item_](pt/editor/item)
- [_action_](pt/editor/action)
___

## [_Informação_](pt/editor/information)
___

## Probabilidade de ativação [0-1]
A probabilidade de esta habilidade ativar naquele turno
- A cada turno se julga com esta probabilidade se ela ativa. Com `1` dá certo sempre e com `0` não ativa. O valor padrão é `1`.
- O julgamento avança em ordem a partir do topo dos candidatos embaralhados, e apenas a primeira habilidade que dá certo é ativada. Por isso, quando há vários candidatos, a proporção em que ela realmente ativa fica menor que este valor.
- Se a exibição da explicação estiver ativada, este valor também afeta a frequência com que a explicação aparece. Quanto mais fácil uma habilidade ativa, menos a explicação dela se repete.
___

## [_Valores de combate_](pt/editor/combat)
___

## Exibição da explicação
Se a explicação é exibida em uma notificação flutuante ao ativar
- É a marca de se a explicação é exibida em uma notificação flutuante quando esta habilidade ativa.
- Quando está ligada, ela é exibida a cada ativação com uma probabilidade de (100% − a probabilidade de ativação) ÷ 2. Se a probabilidade de ativação for 40%, é 30%.
- Quando está desligada, não é exibida.
- Quando a explicação está em branco, ela não é exibida mesmo que você ligue.