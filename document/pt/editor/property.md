
# Propriedade
A configuração dos efeitos que um item tem
- Estes são os campos de efeito que podem ser definidos em um item.
- Itens cujo tipo de equipamento é `necessary` ou `consumable` aplicam seu efeito apenas enquanto estão equipados. `unnecessary` aplica seu efeito apenas por estar em posse, e a magnitude do efeito é proporcional à quantidade em posse (o dobro se você tiver 2).
- Como a quantidade em posse é diretamente o multiplicador do efeito de `unnecessary`, `maximum` (a quantidade máxima em posse) é o teto do efeito. Ao equilibrar, defina-o junto com `maximum`.
- O valor de qualquer um dos campos é calculado como algo que ajusta a diferença de nível entre o nível do jogador e o nível da ação.
- Por exemplo, se o valor de ataque for 10, o ataque é calculado como se o nível do jogador fosse 10 mais alto que o nível da ação. Um valor negativo faz o contrário.
- O quanto a diferença de nível pesa é decidido por `propertyRatio` de geral (2 por padrão), e muda por esse multiplicador a cada 10 de diferença de nível.
- Quando `numeric` da categoria está desativado, a diferença de nível real é tratada como 0, então o valor definido aqui passa a ser a diferença de nível tal como está.
- Os campos que agem por divisão, como o tempo necessário e o dano recebido, param em 100 vezes (até um centésimo no caso do tempo necessário).
- Nos itens que precisam ser equipados, só faz efeito aquele que está equipado em cada grupo de equipamento.
- Um item cuja quantidade em posse é 0 não produz efeito algum, seja qual for o seu tipo de equipamento.
- attack, defence, accuracy, evasion e restore só funcionam em ações do tipo `stamina`.

|Propriedade|Detalhes do efeito|
|-|-|
|speed|Encurta o tempo necessário da ação. O tempo necessário muda de forma inversamente proporcional à diferença de nível (o multiplicador age pela metade).|
|chance|Muda a probabilidade de sucesso da ação. O multiplicador se aplica à proporção entre sucesso e falha, então nunca passa de `100`%.|
|experience|Muda a experiência obtida. Aumenta de forma proporcional à diferença de nível (o cálculo é invertido: quanto mais alto o nível da ação, mais se obtém).|
|attack|Muda o dano de vigor causado ao oponente. (somente ações stamina)|
|defence|Reduz o dano de vigor recebido do oponente (o multiplicador age pela metade). (somente ações stamina)|
|accuracy|Diminui a taxa de erro do ataque. (somente ações stamina)|
|evasion|Muda a taxa de esquiva do ataque do oponente (o multiplicador age pela metade). (somente ações stamina)|
|restore|Muda a quantidade de vigor recuperada ao fim da ação. Quanto mais perto do máximo, mais lento é o aumento. (somente ações stamina)|
___

## Categoria
A categoria à qual a propriedade se aplica
- Defina o ID da categoria à qual esta propriedade se aplica.
- Definir `*` aplica a todas as categorias.
- Quando deixado em branco, aplica-se à categoria à qual o item pertence.
- Se você definir o ID de outra categoria, o efeito alcança as ações dessa categoria. Não importa em que categoria o próprio item está.
___

## Ataque [Diferença de nível]
A correção ao dano de vigor causado ao oponente (só funciona em ações stamina)
- O dano de ataque é calculado como se o nível do jogador fosse mais alto que o nível da ação neste valor.
___

## Defesa [Diferença de nível]
A correção ao dano de vigor recebido do oponente (só funciona em ações stamina)
- O dano recebido é calculado como se o nível do jogador fosse mais alto que o nível da ação neste valor. Quanto maior o valor, mais o dano recebido é reduzido.
___

## Precisão [Diferença de nível]
A correção à taxa de erro do ataque (só funciona em ações stamina)
- A taxa de erro é calculada como se o nível do jogador fosse mais alto que o nível da ação neste valor. Quanto maior o valor, menor a taxa de erro.
___

## Evasão [Diferença de nível]
A correção à taxa de esquiva do ataque do oponente (só funciona em ações stamina)
- A taxa de esquiva é calculada como se o nível do jogador fosse mais alto que o nível da ação neste valor. Quanto maior o valor, mais fácil é esquivar do ataque do oponente.
___

## Recuperação [Diferença de nível]
A correção à quantidade de vigor recuperada (só funciona em ações stamina)
- A quantidade de vigor recuperada é calculada como se o nível do jogador fosse mais alto que o nível da ação neste valor.
___

## Velocidade [Diferença de nível]
A correção ao tempo necessário da ação
- O tempo necessário é calculado como se o nível do jogador fosse mais alto que o nível da ação neste valor. Quanto maior o valor, mais o tempo necessário é encurtado.
___

## Taxa de sucesso [Diferença de nível]
A correção à probabilidade de sucesso da ação
- A probabilidade de sucesso da ação é calculada como se o nível do jogador fosse mais alto que o nível da ação neste valor. Quanto maior o valor, mais a probabilidade de sucesso aumenta.
___

## Experiência [Diferença de nível]
A correção à experiência obtida
- A experiência é calculada como se o nível do jogador fosse mais baixo que o nível da ação neste valor (como o cálculo é invertido, quanto mais alto o nível da ação, mais experiência se obtém).