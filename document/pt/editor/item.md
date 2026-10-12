
# Item
Elementos de bens como equipamentos e consumíveis
- São os elementos relacionados a possuir coisas como equipamentos, consumíveis e objetos de valor.
- Os espaços de equipamento são criados por grupo em cada categoria, e apenas um dos itens do mesmo espaço pode ser equipado. Também é possível fazer um item que não possa ser equipado.
- Como a quantidade em posse é ela própria o progresso, um item também pode ser usado como uma marca ou um contador. Se você fizer um item sem efeito que também não possa ser equipado, ele vira um elemento que apenas conta um número.
___

## [_Informação_](pt/editor/information)
___

## Categoria
O ID da categoria à qual o item pertence
- Especifique o ID da categoria à qual este item pertence. Ele se alinha na lista de itens da categoria que você especificar, e os espaços de equipamento também são criados por categoria.
- Quando não há cor definida no próprio item, ele herda a cor da categoria.
- Aonde os efeitos das propriedades chegam pode ser especificado à parte da categoria à qual ele pertence, então um item de outra categoria também pode dar efeito.
- [_category_](pt/editor/category)
- [_property_](pt/editor/property)
___

## Grupo
A classificação de grupo de exibição do item
- Aplique um dos definidos nos grupos que estão diretamente sob o mundo.
- A lista de itens é exibida na ordem dos grupos que você definir.
- Quando deixado em branco, não é dividido em grupos.
- [_group_](pt/editor/group)
___

## Estado de desbloqueio inicial
O estado inicial de exibição e desbloqueio do elemento (passa automaticamente a um estado superior quando os requisitos de ativação são atendidos)
- secreted: Não aparece de forma alguma na interface até que todos os requirements sejam atendidos (também não sai nas dicas e fica mascarado nas listas de requisitos e recompensas).
- hidden: Enquanto nenhum elemento desbloqueado o referencia e os requisitos dele seguem sem ser atendidos, ele fica totalmente oculto (o nome também fica esmaecido e não dá para operar).
- hinted (padrão): Só o nome é exibido de antemão, mas não dá para operar até que seja desbloqueado.
- released: Fica desbloqueado e pode ser operado desde o início, sem relação com as condições (antes "exibir desde o início").
- Depois que um item foi obtido, mesmo que uma única vez, ele continua desbloqueado sem relação com esta configuração nem com as condições.
- Ao contrário, um item sem nenhuma condição definida não é desbloqueado até ser obtido, a não ser que você o coloque em `released`. Defina sempre condições nos itens que você quer que sejam comprados.
___

## Preço de compra [Moedas]
A configuração do preço de compra do item
- É a quantidade de moeda que você paga ao comprar uma unidade do item. O valor padrão é `-1` (não pode ser comprado).
- Um item que não está desbloqueado não pode ser comprado mesmo que tenha preço definido.
- A quantidade que você pode comprar de uma vez é a menor entre a que você consegue comprar com a moeda que tem e o que resta até a quantidade máxima em posse.

|Preço de compra|Tratamento|
|-|-|
|0|Não pode ser comprado|
|Um valor maior que 0|O preço pelo qual pode ser comprado|
|Um valor menor que 0 (por exemplo, -1)|Não pode ser comprado (tratado igual a 0)|
___

## Preço de venda [Moedas]
A configuração do preço de venda do item
- É a quantidade de moeda que você recebe ao vender uma unidade do item. O valor padrão é `0` (não pode ser vendido).
- A moeda que você recebe é a especificada pelo ID de moeda de negociação, a mesma de quando você compra.
- Ele nunca é decidido automaticamente a partir do preço de compra, então defina sempre um valor quando quiser que possa ser vendido.
- Valores negativos não podem ser definidos.

|Preço de venda|Tratamento|
|-|-|
|0|Não pode ser vendido|
|Um valor maior que 0|Pode ser vendido por esse preço|
___

## Quantidade máxima em posse [Unidades]
O limite da quantidade máxima em posse do item
- Com 0 não há limite para a quantidade que pode ser possuída. O valor padrão é `0`.
- Com 1 ou mais, só pode ser possuída até essa quantidade. Quando o limite é atingido, a quantidade em posse não aumenta mesmo que mais seja obtido.
- Ele também vira o limite da quantidade que pode ser comprada.
- Quando a quantidade em posse dos dados salvos passa do limite, ela é reduzida até o limite no carregamento.
___

## Tipo de equipamento
A configuração de tipo relativa ao equipar, ao efeito e ao consumo do item
- Nos itens de `necessary` e `consumable`, o grupo deles vira automaticamente um espaço de equipamento da categoria.
- Dentro do mesmo grupo só um item pode ser equipado. Ao equipar um item novo, o equipamento existente do mesmo grupo é retirado automaticamente.
- A ordem dos espaços de equipamento segue a ordem de definição da lista de grupos do mundo.
- `unnecessary` faz efeito estando equipado ou não, e a magnitude do efeito é proporcional à quantidade em posse (sem efeito com 0, n vezes com n unidades).
- `consumable` só é consumido quando as propriedades desse item afetam a ação executada, uma unidade por ação. Ele não diminui nas ações às quais o efeito dele não chega.
- Um item consumido até 0 é desequipado automaticamente.
- Para equipá-lo é preciso atender tanto as condições desse item quanto as da categoria.

|Valor|Equipamento|Fazer efeito|Consumo|Exemplo|
|-|-|-|-|-|
|`necessary`|Necessário|Só enquanto equipado (por uma unidade)|Não|Equipamentos como espadas e armaduras|
|`consumable`|Necessário|Só enquanto equipado (por uma unidade)|Consumido ao executar a ação|Itens consumidos para obter um efeito, como poções|
|`unnecessary`|Desnecessário|Sempre enquanto em posse (proporcional à quantidade em posse)|Não|Itens passivos que fazem efeito só por serem mantidos|
|`impossible`|Impossível|Nenhum|Não|Itens sem efeito, como materiais e bugigangas|
___

## [_Requisito_](pt/editor/requirement)
___

## [_Propriedade_](pt/editor/property)
___

## ID de moeda de negociação
O ID da moeda usada para negociar este item
- Especifique o ID da moeda (coins) usada em comum para o preço de compra e o preço de venda.
- Quando deixado em branco, ou quando é especificado um ID que não está na lista de moedas, a moeda principal (a primeira de coins) é usada.
___

## [_Habilidade_](pt/editor/skill)