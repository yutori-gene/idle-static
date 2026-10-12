
# Obtenção
A configuração da obtenção de itens e de níveis de categoria
- Defina o que é obtido.
- Além de itens, é possível alterar o nível de uma categoria e o número de vezes que uma ação foi executada.
- É possível definir a probabilidade de conseguir.

|Tipo|O que é obtido|
|-|-|
|Categoria|Nível|
|Ação|Número de vezes executada|
|Item|Quantidade em posse|
- [_type_](pt/editor/type)
___

## Tipo
O tipo de elemento que é obtido

|Tipo|O que é obtido|
|-|-|
|Categoria|Nível (o valor definido é somado tal como está)|
|Ação|Número de vezes executada|
|Item|Quantidade em posse|
___

## O ID do elemento
O ID que identifica o elemento a ser obtido
___

## Valor
A quantidade que é obtida
- Se um valor negativo for definido, diminui a quantidade em posse, o número de vezes executada ou o nível. Ainda assim, nunca fica abaixo de 0.
- Se o item tiver uma quantidade máxima em posse (maximum) definida, a quantidade em posse não aumenta além desse valor.
- Se o tipo for uma categoria, o valor definido é somado ao nível tal como está (1 para um nível). O normal é ajustar pela configuração de experiência da ação. A menos que você tenha um propósito especial, essa configuração não é necessária.
- O nível de uma categoria nunca fica abaixo de 0 nem passa de `maxCategoryLevels` de geral (o nível máximo de categoria).
- O valor é definido como número inteiro.
___

## Probabilidade [-1 a 1]
A probabilidade de a obtenção ter sucesso (um valor negativo só é avaliado na falha)
- Defina a probabilidade de conseguir com um decimal de -1 a 1. Para julgar a probabilidade é usado o valor absoluto.
- Quando o valor é positivo, só é avaliado no sucesso da ação: com `1` sempre se consegue e com `0.5` se consegue com 50% de probabilidade.
- Quando o valor é negativo, só é avaliado na falha da ação: com `-1` sempre se consegue e com `-0.5` se consegue com 50% de probabilidade.
- Com `0` não se consegue nem no sucesso nem na falha.
- O valor padrão é `1` (sempre obtido no sucesso).