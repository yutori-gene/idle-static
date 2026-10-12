
# Valores de combate
A configuração das correções de combate nas ações do tipo stamina
- São valores de correção que só funcionam nas ações do tipo `stamina`.
- Cada valor é calculado como uma correção adicional à diferença de nível entre o jogador e a ação.
- Por exemplo, se o valor de ataque for 10, o dano de ataque é calculado como se o nível do jogador fosse 10 mais alto que o nível da ação. Se for negativo, é uma correção no sentido contrário.
- Dependendo de onde é definido, o valor é do lado do jogador ou do lado do oponente.
- Os valores do lado do oponente agem anulando o campo oposto correspondente. A defesa do oponente anula o ataque do jogador, o ataque do oponente anula a defesa do jogador, a evasão do oponente anula a precisão do jogador e a precisão do oponente anula a evasão do jogador.
- Só a recuperação se anula entre campos iguais: quanto maior a recuperação do oponente, menos o jogador recupera.

|Onde é definido|De que lado é o valor|
|-|-|
|`defaultCombat` de geral|O valor de referência do lado do jogador. É o ponto de partida comum a todas as ações `stamina`|
|Os valores de combate da ação|Valores do lado do oponente. Vistos do jogador, agem como correções no sentido contrário|
|Os valores de combate da habilidade|Valores do lado que tem a habilidade. As habilidades do próprio lado são somadas ao jogador, e as do oponente ao lado do oponente|
___

## Ataque [Diferença de nível]
A correção por diferença de nível ao dano de vigor causado ao oponente
- Quanto maior o valor do lado do jogador, mais dano é causado ao oponente.
- O valor definido em uma ação ou em uma habilidade do oponente passa a ser o ataque do lado do oponente e, quanto maior ele é, mais dano o jogador recebe.
___

## Defesa [Diferença de nível]
A correção por diferença de nível ao dano de vigor recebido do oponente
- Quanto maior o valor do lado do jogador, mais o dano recebido é reduzido.
- O valor definido em uma ação ou em uma habilidade do oponente passa a ser a defesa do lado do oponente e, quanto maior ele é, menos dano o jogador causa.
___

## Precisão [Diferença de nível]
A correção por diferença de nível à taxa de erro do ataque
- Quanto maior o valor do lado do jogador, menor a taxa de erro do ataque.
- O valor definido em uma ação ou em uma habilidade do oponente passa a ser a precisão do lado do oponente e, quanto maior ele é, mais difícil fica para o jogador esquivar do ataque do oponente.
___

## Evasão [Diferença de nível]
A correção por diferença de nível à taxa de esquiva do ataque do oponente
- Quanto maior o valor do lado do jogador, mais fácil é esquivar do ataque do oponente.
- O valor definido em uma ação ou em uma habilidade do oponente passa a ser a evasão do lado do oponente e, quanto maior ele é, mais difícil é o ataque do jogador acertar.
___

## Recuperação [Diferença de nível]
A correção por diferença de nível à quantidade de vigor recuperada
- Quanto maior o valor do lado do jogador, mais vigor é recuperado após o combate.
- O valor definido em uma ação ou em uma habilidade do oponente passa a ser a recuperação do lado do oponente e, quanto maior ele é, menos o jogador recupera.
- Só a recuperação, diferentemente dos outros campos, se anula entre campos iguais.