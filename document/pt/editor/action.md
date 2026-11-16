
# Ação
Os elementos de comportamento como a coleta, a fabricação e o combate
- É um elemento que representa um comportamento como a coleta, a fabricação, a compra e venda ou o combate.
- Cada vez que você age ganha experiência e o seu nível sobe.
- Você pode configurá-la para consumir ou obter itens a cada vez que age.
- Há vários tipos de padrão de comportamento.
___

## [_Informação_](pt/editor/information)
___

## Categoria
O ID da categoria à qual a ação pertence
- Indique o ID da categoria à qual esta ação pertence.
___

## Disciplina
A categoria que recebe a experiência e serve de referência para a força
- Em cada ação, você pode definir como disciplina uma categoria diferente daquela à qual ela pertence.
- Se ficar em branco, a categoria à qual ela pertence passa a ser a disciplina.
- Por exemplo, se numa ação que pertence a uma categoria chamada Castelo do Rei Demônio você definir a disciplina de magia, o nível e as propriedades da categoria de magia são calculados e aplicados ao tempo de conclusão e ao dano da ação.
- Numa ação com disciplina definida, informe o nível exigido da categoria da disciplina no nível de disciplina (`disciplineLevel`).
- A experiência ao ter sucesso é dividida entre a categoria à qual a ação pertence e a categoria definida como disciplina segundo a taxa de retorno de experiência (`experienceReturnRate`) da configuração geral.
- Os efeitos dos itens (correções de propriedades, habilidades e o consumo de consumíveis) também só são aplicados se tiverem como alvo a categoria definida como disciplina. Efeitos que têm como alvo a categoria à qual a ação pertence não são aplicados a uma ação com disciplina definida.
- Enquanto a categoria definida como disciplina não estiver desbloqueada, a ação também não é desbloqueada, mesmo que a categoria à qual ela pertence esteja desbloqueada.
- Quando na própria ação não há cor definida, as cores do ícone e do fundo herdam a cor da categoria definida como disciplina, e não a da categoria à qual ela pertence.
- [_category_](pt/editor/category)
___

## Grupo
A classificação por grupo de exibição da ação
- Aplique um dos definidos nos grupos que estão diretamente sob o mundo.
- A lista de ações é exibida na ordem dos grupos que você definiu.
- [_group_](pt/editor/group)
___

## Estado de desbloqueio inicial
O estado inicial de exibição e desbloqueio do elemento (passa automaticamente a um estado superior quando os requisitos de ativação são atendidos)
- secreted: Não aparece de forma alguma na interface até que todos os requirements sejam atendidos (também não sai nas dicas e fica mascarado nas listas de requisitos e recompensas).
- hidden: Enquanto nenhum elemento desbloqueado o referencia e os requisitos dele seguem sem ser atendidos, ele fica totalmente oculto (o nome também fica esmaecido e não dá para operar).
- hinted (padrão): Só o nome é exibido de antemão, mas não dá para operar até que seja desbloqueado.
- released: Fica desbloqueado e pode ser operado desde o início, sem relação com as condições (antes "exibir desde o início").
___

## Nível
O nível de dificuldade da ação em relação à categoria à qual pertence
- A dificuldade da ação é expressa por um nível da categoria à qual ela pertence.
- Numa ação sem disciplina, ao executar, este valor é comparado com o nível da categoria à qual ela pertence para calcular cada propriedade.
- Numa ação com disciplina definida, o cálculo das propriedades usa o nível de disciplina (`disciplineLevel`), e este valor só é usado para calcular a experiência que vai para a categoria da ação e para o requisito de nível ao executar.
- Por exemplo, se você executa uma ação mais alta que o seu próprio nível, há efeitos como a taxa de sucesso cair.
- Desde que as condições sejam atendidas, dá para executá-la mesmo que o nível do jogador seja menor que este valor.
- No entanto, se `actionLevelLimit` de geral (o limite de nível das ações) estiver ativado, este valor é adicionado automaticamente como condição sobre o nível da categoria, então não dá para executá-la até que o nível alcance. Nas categorias que não têm nível ele não é adicionado.
- [_property_](pt/editor/property)
___

## Nível de disciplina
O nível de dificuldade da ação em relação à categoria da disciplina
- O nível exigido da categoria da disciplina numa ação com disciplina (`discipline`) definida. Ao definir uma disciplina, é obrigatório um valor de `1` ou mais.
- Não é usado numa ação sem disciplina. Deixe em `0`.
- Ao executar, este valor é comparado com o nível da categoria da disciplina para calcular cada propriedade e a experiência que vai para a categoria da disciplina.
- Quando `actionLevelLimit` (o limite de nível das ações) da configuração geral está ativado, ele é acrescentado automaticamente como requisito junto com o nível da categoria à qual a ação pertence (`level`).
- [_property_](pt/editor/property)
- [_category_](pt/editor/category)
___

## [_Requisito_](pt/editor/requirement)
___

## Tempo necessário [Segundos]
O tempo padrão que leva para executar a ação
- É o tempo padrão (em segundos) necessário para realizar a ação uma vez.
- No tipo `stamina` é o intervalo de tempo que leva um turno (reduzir uma vez o vigor de ambos os lados). Os turnos que recuperam o vigor depois de decidido o resultado usam o mesmo intervalo.
- Varia na execução real pelo cálculo das propriedades.
- [_property_](pt/editor/property)
___

## Experiência [100 para o próximo nível]
A experiência obtida quando a ação tem sucesso
- É a experiência padrão obtida ao executar a ação uma vez e ter sucesso. 100 é a experiência de um nível.
- No caso do combate ela é obtida ao vencer o oponente, então convém defini-la generosa.
- Varia na execução real pelo cálculo das propriedades.
- Numa ação com disciplina definida, a experiência é calculada a partir deste valor com a diferença de nível da categoria à qual pertence e da categoria da disciplina separadamente, e dividida segundo a taxa de retorno de experiência (`experienceReturnRate`) da configuração geral.
- [_property_](pt/editor/property)
___

## Taxa de sucesso [0-1]
A probabilidade de sucesso na conclusão da ação
- É a probabilidade de ter sucesso quando a ação é concluída.
- Com `1` sempre tem sucesso e com `0` sempre falha.
- Ao falhar os itens de consumo também são consumidos, mas a experiência e o número de execuções não aumentam.
- Das recompensas, só as que têm a probabilidade (chance) em um valor positivo são obtidas ao ter sucesso. As que estão em um valor negativo são obtidas só ao falhar, então falhar não significa necessariamente que nada seja obtido.
- Varia na execução real pelo cálculo das propriedades.
___

## Número máximo de execuções [Vezes]
O número máximo de vezes que a ação pode ser concluída
- É o limite superior do número de vezes que a ação pode ter sucesso e ser concluída.
- Com `0` é ilimitado.
- Ao atingir o limite superior, a ação passa a não poder ser executada.
___

## [_Obtenção_](pt/editor/acquisition)
___

## Tipo de andamento
O tipo de execução da ação
- Há quatro tipos.

|Tipo|Comportamento|Vigor|Exemplo|
|-|-|-|-|
|`persistent`|É um tipo em que a ação é executada de forma repetida e contínua. A cada vez que ela se conclui uma vez você obtém experiência e recompensa.|Sem relação|Corte de árvores, mineração, pesca|
|`single`|Executa a ação uma vez. Se for interrompida no meio, o andamento é salvo e da próxima vez dá para retomar de onde parou. Ao ser concluída, o usuário pressiona a ação de confirmação e recebe o resultado.|Sem relação|Abrir um baú do tesouro, aprender uma habilidade lendo|
|`snap`|É um tipo em que a ação é executada instantaneamente. Ela se conclui de imediato, sem passagem de tempo.|Sem relação|Escambo, uso de um item|
|`stamina`|A cada tempo necessário o vigor do jogador e o do oponente diminuem. Quando o vigor do oponente se esgota você obtém experiência e recompensa. Quando o vigor do jogador se esgota o jogo acaba e todas as ações em execução são canceladas.|Com relação|Combate, trabalho que envolve perigo|
___

## [_Valores de combate_](pt/editor/combat)
___

## [_Habilidade_](pt/editor/skill)