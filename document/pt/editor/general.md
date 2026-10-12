
# Geral
Configurações básicas do jogo, como o idioma e as configurações de nível
___

## Idioma
O idioma em que você cria o mundo
- Define em que idioma você escreve o nome e a descrição do mundo. É o idioma que serve de base quando você prepara as traduções.
- É também o idioma exibido primeiro quando um jogador começa o jogo.
- Quando translations está desativado, o jogador não consegue trocar deste idioma para outro.
- É uma configuração diferente do idioma de exibição do próprio editor de mundos. O idioma de exibição do editor é escolhido ao abrir o editor.
- [_translation_](pt/editor/translation)
___

## Tradução
Se serão preparadas traduções para vários idiomas
- Quando está ativado, os jogadores podem trocar para o idioma que preferirem e jogar nele.
- Quando está desativado, fica fixado no idioma escolhido em language, e a própria operação de troca não fica disponível.
- Se você o ativar, precisa preparar os dados de tradução de cada idioma. O pacote publicado acompanha os dados de tradução.
- O que é trocado são os nomes e as descrições definidos no mundo. As traduções das expressões comuns da tela (as predefinições) acompanham o pacote sempre, independentemente desta configuração.
- [_translation_](pt/editor/translation)
- [_preset_](pt/editor/preset)
___

## Tempo máximo offline [Horas]
O limite de tempo do progresso offline
- Define no máximo quantas horas dura o progresso enquanto você está offline.
- Por exemplo, se você definir 6 horas, o processo de retorno do offline é tratado até 6 horas e, mesmo que você retorne depois de um intervalo maior, o tempo offline é tratado como 6 horas.
- Se você definir 0 hora, nenhum processo é tratado ao retornar do offline.
- O valor máximo é de 24 horas.
- [_category_](pt/editor/category)
___

## Nível máximo das categorias
O teto de nível de cada categoria
- Define o teto do nível de cada categoria. O valor padrão é `100`.
- Mesmo que se ganhe experiência, o nível para neste valor e o excedente é descartado. O mesmo vale quando uma recompensa soma níveis diretamente.
- Quando o nível dos dados salvos passa do teto, ele é cortado até o teto no carregamento.
- A barra de nível e a taxa de progresso das estatísticas são exibidas tomando este valor como denominador.
- Uma categoria com numeric desativado não sobe de nível, então este valor não tem relação com ela.
- [_category_](pt/editor/category)
___

## Moeda
As configurações da moeda (coins) usada dentro do jogo
- Define a moeda usada dentro do jogo. É preciso pelo menos uma.
- Você pode definir várias moedas e configurar cada uma como informações (ID, nome, ícone, cor e assim por diante).
- As moedas são usadas para comprar e vender itens e para ampliar a capacidade e a fila.
- A primeira moeda é tratada como a moeda principal e é usada quando o ID de moeda (`coinId`) não é especificado em um item, na capacidade ou na fila, ou quando é especificado um ID que não está na lista de moedas.
- Uma moeda é tratada como um tipo de item. Nos requisitos e nas recompensas, refira-se ao ID configurado aqui como um item. Ela não pertence a nenhuma categoria e não é objeto de equipamento nem de compra e venda.
- [_information_](pt/editor/information)
- [_item_](pt/editor/item)
___

## Capacidade
As configurações de capacidade do inventário
- Gerencia o teto da quantidade de tipos de itens que um jogador pode ter.
- É gerenciado pela quantidade de tipos de itens que você tem, não pela quantidade possuída de cada item.
- Se você deixar `initialCount` em 0, a capacidade fica ilimitada e também não é mais possível comprar capacidade.
- Quando você se referir ao item da capacidade nos requisitos ou nas recompensas, use o ID configurado aqui ou `capacity`.
- [_item_](pt/editor/item)
___

### [_Informações da capacidade_](pt/editor/information)
___

### Valor inicial da capacidade [Unidades]
A capacidade inicial do inventário (a quantidade de tipos de itens que se pode ter)
- É a capacidade inicial no começo do jogo (a quantidade de tipos de itens que se pode ter). O valor padrão é `10`.
- Se você o deixar em `0`, a capacidade fica ilimitada e, ao mesmo tempo, deixa de ser possível comprar capacidade.
___

### Preço base da capacidade [Moedas]
O preço inicial para aumentar a capacidade em uma unidade
- É o preço base (em moedas) para aumentar a capacidade do inventário em um espaço. Configure-o como um número inteiro de `1` ou mais.
- O preço real é calculado como "preço base × taxa de aumento^quantidade de compras feitas".
- Exemplo: com um preço base de 100 e uma taxa de aumento de 1,2, a 1.ª vez são 100 moedas, a 2.ª 120 moedas e a 3.ª 144 moedas.
___

### Taxa de aumento da capacidade [Multiplicador]
A taxa de aumento do custo de ampliar a capacidade
- É o multiplicador de quanto o custo de ampliar a capacidade aumenta na enésima compra. O valor padrão é `1.2`.
- Com `1.0` o preço é sempre o mesmo; com `1.2` fica 20% mais caro a cada compra.
- Fórmula: preço base × taxa de aumento^quantidade de compras feitas

|Taxa de aumento|Unidade 1|Unidade 5|Unidade 10|Unidade 100|Unidade 1000|
|-|-|-|-|-|-|
|1.00|x1.00|x1.00|x1.00|x1.00|x1.00|
|1.05|x1.00|x1.22|x1.55|x125.24|x1.5×10²¹|
|1.10|x1.00|x1.46|x2.36|x1.3×10⁴|x2.2×10⁴¹|
|1.20|x1.00|x2.07|x5.16|x6.9×10⁷|x1.3×10⁷⁹|
|1.50|x1.00|x5.06|x38.44|x2.7×10¹⁷|x8.2×10¹⁷⁵|
___

### ID de moeda da capacidade
O ID da moeda usada para ampliar a capacidade
- Especifica o ID da moeda (coins) usada no preço de ampliação da capacidade do inventário.
- Quando deixado em branco, ou quando é especificado um ID que não está na lista de moedas, a moeda principal (a primeira de coins) é usada.
___

### Limite de compras da capacidade [Vezes]
A quantidade máxima de vezes que se pode comprar capacidade
- É o teto da quantidade de vezes que se pode comprar capacidade com uma moeda.
- Se você o deixar em `0`, dá para comprar sem limite.
- Se você o deixar em `-1`, deixa de ser possível comprar.
- O aumento de capacidade por uma recompensa fica fora deste teto.
___

## Fila
As configurações da quantidade de espaços para executar ações em sequência (a fila)
- Gerencia a quantidade de espaços da fila para executar ações em sequência.
- A fila inclui a ação em execução, e a ação que está à frente é a executada. Quando os espaços são `1`, há apenas a que está em execução e não dá para manter nada em espera.
- Assim como na capacidade, a quantidade de espaços pode ser comprada com uma moeda e também pode ser aumentada indicando o item da fila como recompensa de uma ação ou de um evento.
- Quando você se referir ao item da fila nos requisitos ou nas recompensas, use o ID configurado aqui ou `queue`.
- [_item_](pt/editor/item)
___

### [_Informações da fila_](pt/editor/information)
___

### Valor inicial da fila [Espaços]
A quantidade de espaços de execução em sequência no começo do jogo
- É a quantidade de espaços da fila no começo do jogo. O valor padrão é `1`.
- O valor mínimo é `1` (porque a que está em execução ocupa um espaço; não existe o tratamento de `0` = ilimitado que a capacidade tem).
___

### Preço base da fila [Moedas]
O preço inicial para aumentar os espaços em um
- É o preço base (em moedas) para aumentar em um os espaços de execução em sequência. Configure-o como um número inteiro de `1` ou mais.
- O preço real é calculado como "preço base × taxa de aumento^quantidade de compras feitas".
- Exemplo: com um preço base de 100 e uma taxa de aumento de 1,2, a 1.ª vez são 100 moedas, a 2.ª 120 moedas e a 3.ª 144 moedas.
___

### Taxa de aumento da fila [Multiplicador]
A taxa de aumento do custo de ampliar os espaços
- É o multiplicador de quanto o custo de ampliar os espaços aumenta na enésima compra. O valor padrão é `1.2`.
- Com `1.0` o preço é sempre o mesmo; com `1.2` fica 20% mais caro a cada compra.
- Fórmula: preço base × taxa de aumento^quantidade de compras feitas
- O modo de aumentar é o mesmo da taxa de aumento da capacidade. Para se orientar sobre o multiplicador, consulte a tabela da capacidade.
___

### ID de moeda da fila
O ID da moeda usada para ampliar os espaços
- Especifica o ID da moeda (coins) usada no preço de ampliação dos espaços de execução em sequência.
- Quando deixado em branco, ou quando é especificado um ID que não está na lista de moedas, a moeda principal (a primeira de coins) é usada.
___

### Limite de compras da fila [Vezes]
A quantidade máxima de vezes que se pode comprar espaços
- É o teto da quantidade de vezes que se pode comprar com uma moeda os espaços de execução em sequência.
- Se você o deixar em `0`, dá para comprar sem limite.
- Se você o deixar em `-1`, deixa de ser possível comprar.
- O aumento de espaços por uma recompensa fica fora deste teto.
___

## Taxa de crescimento da experiência [Multiplicador]
A taxa de aumento da dificuldade de subir de nível
- É a taxa de crescimento da experiência necessária para chegar ao próximo nível conforme o nível de uma categoria sobe. O valor padrão é `1.05` e não dá para definir um valor menor que `1`.
- Aumentar este valor eleva a dificuldade. Se você o deixar em `1`, a experiência necessária é a mesma em qualquer nível.
- A experiência necessária para chegar ao próximo nível é (taxa de crescimento da experiência)^(nível atual-1). Os níveis são contados descartando as casas decimais.
- A experiência obtida depois de alcançar o teto (o nível máximo das categorias) é descartada.

|Taxa de crescimento da experiência|Lv.1|Lv.2|Lv.10|Lv.50|Lv.99|
|-|-|-|-|-|-|
|1.00|x1.00|x1.00|x1.00|x1.00|x1.00|
|1.02|x1.00|x1.02|x1.20|x2.64|x6.96|
|1.05|x1.00|x1.05|x1.55|x10.92|x119.28|
|1.10|x1.00|x1.10|x2.36|x106.72|x1.1×10⁴|
|1.20|x1.00|x1.20|x5.16|x7583.70|x5.8×10⁷|
- [_category_](pt/editor/category)
___

## Limite de nível das ações
Exigir o nível da categoria do atributo para executar uma ação
- Quando está ativado, no início dos requisitos (requirements) de cada ação é acrescentado automaticamente o requisito "que o nível da categoria do atributo seja igual ou superior ao nível daquela ação".
- Quando nenhum atributo (attribute) está configurado, é usada a categoria à qual ela pertence.
- Quando numeric está desativado na categoria do atributo, ela não sobe de nível, então nada é acrescentado.
- O requisito acrescentado é escrito no carregamento do mundo, então na tela do reprodutor ele é exibido igual a um requisito comum.
- [_action_](pt/editor/action)
- [_category_](pt/editor/category)
- [_requirement_](pt/editor/requirement)
___

## Proporção das propriedades [Multiplicador]
Por quanto as propriedades são multiplicadas a cada 10 de diferença de nível
- Define por quanto as propriedades são multiplicadas a cada `10` que a diferença entre o nível da categoria e o nível da ação se amplia. O valor padrão é `1.5` e não dá para definir um valor menor que `1`.
- O multiplicador é calculado como (proporção das propriedades)^(diferença de nível÷10). Quando a diferença de nível é `0`, é `1` vez e o valor configurado na ação é usado como está.
- O ataque e a experiência aumentam conforme este multiplicador, e a defesa (o dano recebido) e a velocidade (o tempo necessário) diminuem conforme o mesmo multiplicador.
- A precisão, a evasão, a taxa de sucesso e a recuperação são valores que ficam entre `0` e `100`%, então o multiplicador se aplica à proporção entre a parte que se concretiza e a que não. `0`% e `100`% não mudam, e nenhum valor intermediário passa de `100`%.
- Na defesa, na evasão e na velocidade o multiplicador age pela metade (uma diferença de nível de `20` equivale a uma diferença de `10` nas demais propriedades). A defesa e a evasão se aplicam em dobro, à taxa de ser atingido e ao dano recebido, e a velocidade se aplica a todas as demais propriedades como quantidade de execuções, então o efeito delas é enfraquecido para manter o equilíbrio.
- Uma referência é (a taxa de crescimento da experiência) elevada a `6.7`. Acima disso, subir de nível acelera quanto mais alto é o nível; abaixo disso, subir de nível na parte final leva mais tempo.
- Se você o deixar em `1`, a influência da diferença de nível desaparece. Aumentar o valor torna mais bruscas as vantagens e desvantagens vindas da diferença de nível.

|Proporção das propriedades|Diferença de nível -20|Diferença de nível -10|Diferença de nível 0|Diferença de nível +10|Diferença de nível +20|
|-|-|-|-|-|-|
|`1`|`x1.00`|`x1.00`|`x1.00`|`x1.00`|`x1.00`|
|`1.5`|`x0.44`|`x0.67`|`x1.00`|`x1.50`|`x2.25`|
|`2`|`x0.25`|`x0.50`|`x1.00`|`x2.00`|`x4.00`|
|`3`|`x0.11`|`x0.33`|`x1.00`|`x3.00`|`x9.00`|
- [_action_](pt/editor/action)
- [_property_](pt/editor/property)
___

## [_Valores de combate_](pt/editor/combat)