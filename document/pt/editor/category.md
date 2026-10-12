
# Categoria
O grande enquadramento que classifica as ações e os itens
- Representa uma classificação grande.
- Por exemplo, dá para defini-la como um enquadramento livre: curta distância, longa distância, magia, masmorra, ferraria, oficina e assim por diante.
- As ações e os itens são colocados diretamente sob o mundo e são vinculados pelo ID de categoria.
___

## [_Informação_](pt/editor/information)
___

## Grupo
A classificação por grupo de exibição da categoria
- Aplique um dos definidos nos grupos que estão diretamente sob o mundo.
- A lista de categorias é exibida na ordem dos grupos que você definiu.
- [_group_](pt/editor/group)
___

## Estado de desbloqueio inicial
O estado inicial de exibição e desbloqueio do elemento (passa automaticamente a um estado superior quando os requisitos de ativação são atendidos)
- secreted: Não aparece de forma alguma na interface até que todos os requirements sejam atendidos (também não sai nas dicas e fica mascarado nas listas de requisitos e recompensas).
- hidden: Enquanto nenhum elemento desbloqueado o referencia e os requisitos dele seguem sem ser atendidos, ele fica totalmente oculto (o nome também fica esmaecido e não dá para operar).
- hinted (padrão): Só o nome é exibido de antemão, mas não dá para operar até que seja desbloqueado.
- released: Fica desbloqueado e pode ser operado desde o início, sem relação com as condições (antes "exibir desde o início").
___

## [_Requisito_](pt/editor/requirement)
___

## Presença de nível
A presença da função de nível de categoria
- É a marca de se esta categoria tem nível ou não.
- Se estiver ligada tem nível, e se estiver desligada não tem.
- Como exemplo, há um uso em que as categorias baseadas na experiência, como a esgrima ou a magia, são ligadas, e as categorias de lugares, como as masmorras ou as ferrarias, são desligadas.
- Se estiver desligada não entra experiência e, no cálculo das propriedades, a diferença de nível entre o jogador e a ação é tratada como 0. A correção das propriedades pelo equipamento continua surtindo efeito igual.
- Uma categoria desligada também fica de fora do julgamento de conclusão (completed).
___

## Andamento simultâneo
A configuração de execução em paralelo com outras categorias
- É a marca de se as ações desta categoria podem andar em paralelo com as ações de outras categorias.
- Se estiver ligada, elas podem andar ao mesmo tempo de forma independente das ações de outras categorias.
- Se estiver desligada, no conjunto das categorias igualmente desligadas só uma ação pode andar.
- Se você iniciar uma ação nova numa categoria desligada, a ação em andamento não é cancelada, e sim empurrada de volta para o início da fila de espera. O número de execuções restante é preservado e, quando a ação que entrou na frente termina, ela é retomada de onde parou.
___

## Fundo
A configuração de fundo própria da categoria
- Define o fundo desta categoria.
- Quando a categoria é selecionada, a imagem de fundo muda junto com ela.
- Se não for definida, o fundo do design é usado como está.
- Ao ser importada, ela é reduzida automaticamente para caber em 256×256 pixels.