import * as Type from "~d/type/descriptionType";
import { Markdown, Tree, expandList } from "~d/type/markdownType";

// quate

const typeTree = `
world
├── category
├── action
├── item
├── skill
├── group
└── preset
`;

// 色の継承の階層。typeTreeはタイプの一覧なので、継承の親子はこちらで示す
const colorTree = `
world (basic.design)
└── category
    ├── action
    ├── item
    └── event
`;

// miscellaneous

export const translation: Markdown = {
	title: "Tradução",
	summary: "Ajustes para traduzir o texto de um mundo para dez idiomas",
	points: [
		"Há dois tipos de tradução: a das frases comuns da interface (as predefinições) e a dos nomes e explicações que o próprio mundo tem.",
		"A tradução das frases comuns é sempre incluída, independentemente do ajuste `translations` de geral. O autor não precisa prepará-la.",
		"A tradução do próprio mundo só é exportada quando `translations` de geral está ativado e o mundo é publicado, e quem a faz é o autor.",
		"Nos idiomas para os quais não há tradução, o texto é exibido exatamente como está escrito no mundo.",
	],
	links: { general: "general" },
	options: {
		label: "translation",
	},
	children: {
		flag: {
			title: "Ativação da tradução",
			summary: "O que acontece quando a tradução é ativada",
			points: [
				"O que se ativa é `translations` de geral. Aqui se explica o que acontece ao ativá-lo.",
				"Quando está ativado, o mundo publicado inclui arquivos de tradução para dez idiomas, e o idioma pode ser trocado nas configurações do reprodutor. Quando está desativado, não é possível trocar de idioma.",
				"Os dez arquivos são exportados com o mesmo conteúdo (o texto antes da tradução). Um idioma que você não traduziu exibe o texto original como está. Também é possível traduzir apenas alguns idiomas, mas nas telas desses idiomas o texto original ficará misturado.",
				"Ao começar o jogo, primeiro é exibido o idioma definido em `language` de geral. Depois, ele pode ser alterado para qualquer idioma na coluna de configurações.",
				"No teste de jogo do editor, os arquivos de tradução do mundo ainda não existem, então trocar de idioma muda apenas as frases comuns da interface.",
				"Traduzir dá trabalho, mas faz com que muito mais gente possa jogar.",
			],
			links: { general: "general" },
		},
		file: {
			title: "Arquivos de idioma",
			summary: "Os arquivos JSON exportados para a tradução",
			points: [
				"Quando você exporta um mundo com Publicar no menu, `translations/base` recebe a tradução das frases comuns e `translations/world` recebe a tradução do próprio mundo.",
				"Os únicos arquivos que você traduz são os dez de `translations/world`. `translations/base` já vem traduzido, então não é preciso mexer nele.",
				"O conteúdo do arquivo é dividido por tipo, abaixo ficam os ID dos elementos e, abaixo deles, o nome (`name`) e a explicação (`explanation`).",
				"Há sete tipos: categoria, ação, item, evento, grupo, habilidade e predefinição. A moeda, a capacidade e a fila entram nos itens, a visão geral do mundo entra nas predefinições, e as tarefas e os eventos fixos entram juntos nos eventos.",
				"Os elementos cujo nome foi deixado em branco são exportados com um nome gerado automaticamente a partir do ID.",
				"Coloque os arquivos traduzidos de volta em `translations/world` com o mesmo nome.",
			],
		},
		task: {
			title: "O trabalho de tradução",
			summary: "A edição dos dados de tradução",
			points: [
				"Os dez arquivos exportados têm todos o mesmo conteúdo (o texto antes da tradução).",
				"É preciso traduzir todos os arquivos, exceto o do idioma original.",
				"Traduza apenas os valores de `name` e `explanation`. Não altere os ID nem a estrutura do JSON.",
			],
			children: {
				ai: {
					title: "AI",
					summary: "Tradução com IA",
					points: ["Traduza com uma IA como ChatGPT, Copilot ou Claude.", "Ela consegue traduzir tudo de uma vez, com uma qualidade razoável.", "A tradução pode não ficar completa, e é preciso atenção especial com termos técnicos e nomes próprios.", "Dependendo do volume, usar uma IA pode ter custo.", "Se a IA interromper a tradução no meio, mandar que ela \"continue\" às vezes resolve. (E às vezes não.)"],
					children: {
						prompt: {
							title: "Exemplo de prompt",
							summary: "Um exemplo da instrução de tradução dada a uma IA",
							points: ["Exemplo de prompt: traduza do japonês para o inglês os valores de `name` e `explanation` dos dados JSON que enviei. Não altere as chaves nem nenhuma outra parte."],
						},
						gpt: {
							title: "Uso dos GPT",
							summary: "Tradução com um GPT do ChatGPT",
							points: ["Usando o JSON Language Translator, disponível na biblioteca de GPT do ChatGPT, traduzir JSON fica fácil.", "A estrutura do JSON é mantida durante a tradução.", "Serviços de IA diferentes do ChatGPT às vezes oferecem a mesma função."],
						},
					},
				},
				online: {
					title: "Serviços de tradução",
					summary: "O uso de um serviço de tradução",
					points: ["Traduza com um serviço on-line como o DeepL ou o Google Tradutor.", "Pode-se esperar uma qualidade maior que a da tradução por IA, mas dependendo do volume há cobrança.", "Um arquivo JSON não pode ser traduzido como está em um serviço de tradução, então é preciso criar um programa para usá-lo.", "Embora sejam pagos, parece haver também serviços que traduzem os dados JSON como estão (doctranslator.com e outros)."],
				},
				manual: {
					title: "Manual",
					summary: "A tradução feita à mão",
					points: ["Abra o arquivo de tradução em um editor de texto e digite o conteúdo traduzido para cada idioma. Dá muitíssimo trabalho, mas você pode traduzir exatamente como quiser."],
				},
			},
		},
		code: {
			title: "Códigos de idioma",
			summary: "A lista de códigos de idioma aceitos",
			points: ["O nome do arquivo de tradução é este código de idioma.", "Os idiomas aceitos são estes dez, e não é possível aumentar nem diminuir."],
			list: [
				["Código de idioma", "Idioma"],
				["en", "Inglês"],
				["zh", "Chinês (simplificado)"],
				["es", "Espanhol"],
				["pt", "Português"],
				["fr", "Francês"],
				["ru", "Russo"],
				["de", "Alemão"],
				["ja", "Japonês"],
				["id", "Indonésio"],
				["ko", "Coreano"],
			],
		},
	},
};

export const miscellaneous: Markdown = {
	title: "Observações complementares",
	summary: "Explicações sobre o trabalho de criação, não sobre os campos do mundo em si",
	points: ["Aqui se reúne o que não cabe na lista de campos de configuração."],
	list: expandList("Observação", [translation], "Descrição"),
	options: {
		label: "miscellaneous",
		linkedList: true,
	},
};

// componsnt

export const property: Type.Property = {
	title: "Propriedade",
	summary: "A configuração dos efeitos que um item tem",
	points: ["Estes são os campos de efeito que podem ser definidos em um item.", "Itens cujo tipo de equipamento é `necessary` ou `consumable` aplicam seu efeito apenas enquanto estão equipados. `unnecessary` aplica seu efeito apenas por estar em posse, e a magnitude do efeito é proporcional à quantidade em posse (o dobro se você tiver 2).", "Como a quantidade em posse é diretamente o multiplicador do efeito de `unnecessary`, `maximum` (a quantidade máxima em posse) é o teto do efeito. Ao equilibrar, defina-o junto com `maximum`.", "O valor de qualquer um dos campos é calculado como algo que ajusta a diferença de nível entre o nível do jogador e o nível da ação.", "Por exemplo, se o valor de ataque for 10, o ataque é calculado como se o nível do jogador fosse 10 mais alto que o nível da ação. Um valor negativo faz o contrário.", "O quanto a diferença de nível pesa é decidido por `propertyRatio` de geral (2 por padrão), e muda por esse multiplicador a cada 10 de diferença de nível.", "Quando `numeric` da categoria está desativado, a diferença de nível real é tratada como 0, então o valor definido aqui passa a ser a diferença de nível tal como está.", "Os campos que agem por divisão, como o tempo necessário e o dano recebido, param em 100 vezes (até um centésimo no caso do tempo necessário).", "Nos itens que precisam ser equipados, só faz efeito aquele que está equipado em cada grupo de equipamento.", "Um item cuja quantidade em posse é 0 não produz efeito algum, seja qual for o seu tipo de equipamento.", "attack, defence, accuracy, evasion e restore só funcionam em ações do tipo `stamina`."],
	list: [
		["Propriedade", "Detalhes do efeito"],
		["speed", "Encurta o tempo necessário da ação. O tempo necessário muda de forma inversamente proporcional à diferença de nível (o multiplicador age pela metade)."],
		["chance", "Muda a probabilidade de sucesso da ação. O multiplicador se aplica à proporção entre sucesso e falha, então nunca passa de `100`%."],
		["experience", "Muda a experiência obtida. Aumenta de forma proporcional à diferença de nível (o cálculo é invertido: quanto mais alto o nível da ação, mais se obtém)."],
		["attack", "Muda o dano de vigor causado ao oponente. (somente ações stamina)"],
		["defence", "Reduz o dano de vigor recebido do oponente (o multiplicador age pela metade). (somente ações stamina)"],
		["accuracy", "Diminui a taxa de erro do ataque. (somente ações stamina)"],
		["evasion", "Muda a taxa de esquiva do ataque do oponente (o multiplicador age pela metade). (somente ações stamina)"],
		["restore", "Muda a quantidade de vigor recuperada ao fim da ação. Quanto mais perto do máximo, mais lento é o aumento. (somente ações stamina)"],
	],
	children: {
		category: {
			title: "Categoria",
			summary: "A categoria à qual a propriedade se aplica",
			points: ["Defina o ID da categoria à qual esta propriedade se aplica.", "Definir `*` aplica a todas as categorias.", "Quando deixado em branco, aplica-se à categoria à qual o item pertence.", "Se você definir o ID de outra categoria, o efeito alcança as ações dessa categoria. Não importa em que categoria o próprio item está."],
		},
		attack: {
			title: "Ataque [Diferença de nível]",
			summary: "A correção ao dano de vigor causado ao oponente (só funciona em ações stamina)",
			points: ["O dano de ataque é calculado como se o nível do jogador fosse mais alto que o nível da ação neste valor."],
		},
		defence: {
			title: "Defesa [Diferença de nível]",
			summary: "A correção ao dano de vigor recebido do oponente (só funciona em ações stamina)",
			points: ["O dano recebido é calculado como se o nível do jogador fosse mais alto que o nível da ação neste valor. Quanto maior o valor, mais o dano recebido é reduzido."],
		},
		accuracy: {
			title: "Precisão [Diferença de nível]",
			summary: "A correção à taxa de erro do ataque (só funciona em ações stamina)",
			points: ["A taxa de erro é calculada como se o nível do jogador fosse mais alto que o nível da ação neste valor. Quanto maior o valor, menor a taxa de erro."],
		},
		evasion: {
			title: "Evasão [Diferença de nível]",
			summary: "A correção à taxa de esquiva do ataque do oponente (só funciona em ações stamina)",
			points: ["A taxa de esquiva é calculada como se o nível do jogador fosse mais alto que o nível da ação neste valor. Quanto maior o valor, mais fácil é esquivar do ataque do oponente."],
		},
		restore: {
			title: "Recuperação [Diferença de nível]",
			summary: "A correção à quantidade de vigor recuperada (só funciona em ações stamina)",
			points: ["A quantidade de vigor recuperada é calculada como se o nível do jogador fosse mais alto que o nível da ação neste valor."],
		},
		speed: {
			title: "Velocidade [Diferença de nível]",
			summary: "A correção ao tempo necessário da ação",
			points: ["O tempo necessário é calculado como se o nível do jogador fosse mais alto que o nível da ação neste valor. Quanto maior o valor, mais o tempo necessário é encurtado."],
		},
		chance: {
			title: "Taxa de sucesso [Diferença de nível]",
			summary: "A correção à probabilidade de sucesso da ação",
			points: ["A probabilidade de sucesso da ação é calculada como se o nível do jogador fosse mais alto que o nível da ação neste valor. Quanto maior o valor, mais a probabilidade de sucesso aumenta."],
		},
		experience: {
			title: "Experiência [Diferença de nível]",
			summary: "A correção à experiência obtida",
			points: ["A experiência é calculada como se o nível do jogador fosse mais baixo que o nível da ação neste valor (como o cálculo é invertido, quanto mais alto o nível da ação, mais experiência se obtém)."],
		},
	},
	options: {
		label: "property",
	},
};

export const combat: Type.Combat = {
	title: "Valores de combate",
	summary: "A configuração das correções de combate nas ações do tipo stamina",
	points: ["São valores de correção que só funcionam nas ações do tipo `stamina`.", "Cada valor é calculado como uma correção adicional à diferença de nível entre o jogador e a ação.", "Por exemplo, se o valor de ataque for 10, o dano de ataque é calculado como se o nível do jogador fosse 10 mais alto que o nível da ação. Se for negativo, é uma correção no sentido contrário.", "Dependendo de onde é definido, o valor é do lado do jogador ou do lado do oponente.", "Os valores do lado do oponente agem anulando o campo oposto correspondente. A defesa do oponente anula o ataque do jogador, o ataque do oponente anula a defesa do jogador, a evasão do oponente anula a precisão do jogador e a precisão do oponente anula a evasão do jogador.", "Só a recuperação se anula entre campos iguais: quanto maior a recuperação do oponente, menos o jogador recupera."],
	list: [
		["Onde é definido", "De que lado é o valor"],
		["`defaultCombat` de geral", "O valor de referência do lado do jogador. É o ponto de partida comum a todas as ações `stamina`"],
		["Os valores de combate da ação", "Valores do lado do oponente. Vistos do jogador, agem como correções no sentido contrário"],
		["Os valores de combate da habilidade", "Valores do lado que tem a habilidade. As habilidades do próprio lado são somadas ao jogador, e as do oponente ao lado do oponente"],
	],
	children: {
		attack: {
			title: "Ataque [Diferença de nível]",
			summary: "A correção por diferença de nível ao dano de vigor causado ao oponente",
			points: ["Quanto maior o valor do lado do jogador, mais dano é causado ao oponente.", "O valor definido em uma ação ou em uma habilidade do oponente passa a ser o ataque do lado do oponente e, quanto maior ele é, mais dano o jogador recebe."],
		},
		defence: {
			title: "Defesa [Diferença de nível]",
			summary: "A correção por diferença de nível ao dano de vigor recebido do oponente",
			points: ["Quanto maior o valor do lado do jogador, mais o dano recebido é reduzido.", "O valor definido em uma ação ou em uma habilidade do oponente passa a ser a defesa do lado do oponente e, quanto maior ele é, menos dano o jogador causa."],
		},
		accuracy: {
			title: "Precisão [Diferença de nível]",
			summary: "A correção por diferença de nível à taxa de erro do ataque",
			points: ["Quanto maior o valor do lado do jogador, menor a taxa de erro do ataque.", "O valor definido em uma ação ou em uma habilidade do oponente passa a ser a precisão do lado do oponente e, quanto maior ele é, mais difícil fica para o jogador esquivar do ataque do oponente."],
		},
		evasion: {
			title: "Evasão [Diferença de nível]",
			summary: "A correção por diferença de nível à taxa de esquiva do ataque do oponente",
			points: ["Quanto maior o valor do lado do jogador, mais fácil é esquivar do ataque do oponente.", "O valor definido em uma ação ou em uma habilidade do oponente passa a ser a evasão do lado do oponente e, quanto maior ele é, mais difícil é o ataque do jogador acertar."],
		},
		restore: {
			title: "Recuperação [Diferença de nível]",
			summary: "A correção por diferença de nível à quantidade de vigor recuperada",
			points: ["Quanto maior o valor do lado do jogador, mais vigor é recuperado após o combate.", "O valor definido em uma ação ou em uma habilidade do oponente passa a ser a recuperação do lado do oponente e, quanto maior ele é, menos o jogador recupera.", "Só a recuperação, diferentemente dos outros campos, se anula entre campos iguais."],
		},
	},
	options: {
		label: "combat",
	},
};

export const acquisition: Type.Acquisition = {
	title: "Obtenção",
	summary: "A configuração da obtenção de itens e de níveis de categoria",
	points: ["Defina o que é obtido.", "Além de itens, é possível alterar o nível de uma categoria e o número de vezes que uma ação foi executada.", "É possível definir a probabilidade de conseguir."],
	list: [
		["Tipo", "O que é obtido"],
		["Categoria", "Nível"],
		["Ação", "Número de vezes executada"],
		["Item", "Quantidade em posse"],
	],
	children: {
		type: {
			title: "Tipo",
			summary: "O tipo de elemento que é obtido",
			list: [
				["Tipo", "O que é obtido"],
				["Categoria", "Nível (o valor definido é somado tal como está)"],
				["Ação", "Número de vezes executada"],
				["Item", "Quantidade em posse"],
			],
		},
		id: {
			title: "O ID do elemento",
			summary: "O ID que identifica o elemento a ser obtido",
		},
		count: {
			title: "Valor",
			summary: "A quantidade que é obtida",
			points: ["Se um valor negativo for definido, diminui a quantidade em posse, o número de vezes executada ou o nível. Ainda assim, nunca fica abaixo de 0.", "Se o item tiver uma quantidade máxima em posse (maximum) definida, a quantidade em posse não aumenta além desse valor.", "Se o tipo for uma categoria, o valor definido é somado ao nível tal como está (1 para um nível). O normal é ajustar pela configuração de experiência da ação. A menos que você tenha um propósito especial, essa configuração não é necessária.", "O nível de uma categoria nunca fica abaixo de 0 nem passa de `maxCategoryLevels` de geral (o nível máximo de categoria).", "O valor é definido como número inteiro."],
		},
		chance: {
			title: "Probabilidade [-1 a 1]",
			summary: "A probabilidade de a obtenção ter sucesso (um valor negativo só é avaliado na falha)",
			points: ["Defina a probabilidade de conseguir com um decimal de -1 a 1. Para julgar a probabilidade é usado o valor absoluto.", "Quando o valor é positivo, só é avaliado no sucesso da ação: com `1` sempre se consegue e com `0.5` se consegue com 50% de probabilidade.", "Quando o valor é negativo, só é avaliado na falha da ação: com `-1` sempre se consegue e com `-0.5` se consegue com 50% de probabilidade.", "Com `0` não se consegue nem no sucesso nem na falha.", "O valor padrão é `1` (sempre obtido no sucesso)."],
		},
	},
	links: { type: "type" },
	options: {
		label: "acquisition",
	},
};

export const requirement: Type.Requirement = {
	title: "Requisito",
	summary: "A configuração das condições necessárias para usar ou exibir um elemento",
	points: ["São as condições definidas em cada elemento: categoria, ação, item e evento.", "Se todas as condições definidas não forem atendidas, não é possível realizar a operação indicada na tabela.", "Dependendo da configuração de desbloqueio (unlocked) do elemento, o próprio elemento não aparece na tela até que as condições sejam atendidas."],
	list: [
		["Onde é definido", "O que não é possível fazer sem atender às condições"],
		["Categoria", "Executar todas as ações da categoria e operar seus itens"],
		["Ação", "Executar a ação"],
		["Item", "Operar o item (equipar etc.)"],
		["Evento", "Concluir uma tarefa e disparar um evento de mudança ou um evento fixo"],
	],
	children: {
		type: {
			title: "Tipo",
			summary: "O tipo de elemento consultado como condição",
			list: [
				["Tipo", "O valor que é consultado"],
				["Categoria", "O nível da categoria"],
				["Ação", "O número de vezes que a ação foi executada"],
				["Item", "A quantidade do item em posse"],
			],
		},
		id: {
			title: "O ID do elemento",
			summary: "O ID do elemento consultado como condição",
			points: ["Defina o ID da categoria, da ação ou do item consultado como condição.", "Quando a contagem por grupo (requiringGroup) está ativada em um evento, é tratado como o ID de um grupo, e não de um elemento individual."],
		},
		count: {
			title: "Valor",
			summary: "A quantidade de que a condição precisa",
			points: ["A condição é atendida quando se alcança ou se passa do valor indicado.", "É definido com um número inteiro de 0 ou mais. O valor padrão é `1`."],
		},
		chance: {
			title: "Probabilidade de consumo [0-1]",
			summary: "A probabilidade de o item ser consumido (de 0 a 1, só funciona se o tipo for um item)",
			points: ["É a probabilidade de consumir o item quando as condições são atendidas e a ação é executada.", "Com `1` sempre é consumido, com `0.5` é consumido com 50% de probabilidade e com `0` não é consumido.", "O valor padrão é `1` (sempre consumido). Nas condições de um evento (tarefa, evento de mudança ou evento fixo), porém, o valor padrão é `0` (não consumido), para que o que você tem não diminua ao concluí-lo.", "Com `0` o estoque não é reduzido, então você pode executar a ação quantas vezes quiser desde que a quantidade em posse alcance o valor da condição. Use quando quiser que a condição seja apenas estar equipado.", "Não funciona se o tipo não for um item."],
		},
		equipment: {
			title: "Equipamento",
			summary: "Se é exigido que o item esteja equipado como condição (só funciona se o tipo for um item)",
			points: ["Ao ativar, a condição exige não só ter o item em posse, mas também estar com ele equipado.", "Se está equipado ou não é julgado pelo equipamento da categoria à qual o item pertence.", "Não funciona se o tipo não for um item."],
		},
	},
	links: { type: "type" },
	options: {
		label: "requirement",
	},
};

export const information: Type.Information = {
	title: "Informação",
	summary: "A configuração das informações básicas do elemento (ID, nome, explicação, ícone e cor)",
	points: ["São os campos de informação básica comuns a todos os elementos do mundo (categoria, ação, item, grupo, evento, habilidade e predefinição).", "São definidos separadamente para cada elemento."],
	children: {
		id: {
			title: "ID identificador",
			summary: "O ID único que identifica o elemento",
			points: ["É o ID que identifica cada elemento de forma única.", "É a cadeia de texto com que o editor distingue esse elemento.", "Por exemplo, qual item é obtido quando uma ação é concluída é indicado pelo ID.", "Os caracteres que podem ser usados são uma combinação de letras, hifens e algarismos, de 1 a 100 caracteres."],
			important: "Depois de distribuir o jogo, não altere um ID já definido. Se alterar, ele deixa de corresponder aos dados de jogo existentes e o jogo para de funcionar corretamente.",
			children: {
				displayName: {
					title: "O nome que é exibido",
					summary: "O nome de exibição gerado automaticamente a partir do ID",
					points: ["Quando nenhum nome é definido, os hifens são substituídos por espaços e cada palavra é convertida com a primeira letra em maiúscula e o resto em minúscula, sendo exibida como nome.", "Mesmo que o ID contenha maiúsculas, tudo o que não for a primeira letra é convertido em minúscula.", "Nos idiomas diferentes do inglês é preciso definir o campo de nome separadamente."],
					children: {
						example: {
							title: "Exemplo",
							summary: "Um exemplo real de conversão de ID",
							points: ["Se o ID for `stylish-strong-axe`, o nome passa a ser `Stylish Strong Axe`.", "Se o ID for `stylish-STRONG-axe`, também passa a ser `Stylish Strong Axe`."],
						},
					},
				},
				noDuplicate: {
					title: "Não deve se repetir",
					summary: "Proibição de repetir um ID dentro do mesmo tipo",
					points: ["Como serve para distinguir os elementos, não o repita dentro de cada tipo: categoria, ação, item, grupo, evento, habilidade e predefinição.", "Os eventos tratam tarefas, eventos de mudança e eventos fixos juntos como um único tipo, então também não os repita entre eles.", "Não há problema em o mesmo ID estar em tipos diferentes.", "Um mundo com repetições dá erro na validação."],
					links: { type: "type" },
				},
			},
		},
		name: {
			title: "Nome",
			summary: "O nome do elemento que é exibido",
			points: ["É o nome do elemento exibido no jogo.", "Também é possível inserir idiomas diferentes do inglês.", "Não há problema em o nome coincidir com o de outro elemento.", "É possível inserir até 20 caracteres.", "Quando não cabe na largura em que é exibido, a parte que ultrapassa é abreviada com `…`."],
			children: {
				translateFromId: {
					title: "Conversão automática a partir do ID",
					summary: "A função que gera o nome automaticamente a partir do ID",
					points: ["Quando deixado em branco, é exibido automaticamente com base no ID. Consulte o item anterior para mais detalhes."],
				},
			},
		},
		explanation: {
			title: "Explicação",
			summary: "A explicação detalhada do elemento",
			points: ["É a explicação do elemento exibida no jogo.", "Também é possível inserir idiomas diferentes do inglês. Textos longos são exibidos por inteiro.", "Quando não há explicação, deixe em branco."],
		},
		icon: {
			title: "Ícone",
			summary: "A configuração do ícone que representa o elemento",
			points: ["Como ícone é possível definir uma imagem, o Iconify ou um emoji.", "O Iconify é um serviço que oferece ícones de vários tipos.", "Se vários deles forem definidos, são exibidos por ordem de prioridade: imagem, Iconify e emoji."],
			children: {
				image: {
					title: "Imagem",
					summary: "Usar qualquer arquivo de imagem",
					points: ["É a imagem que representa o elemento.", "Ao ser importada, é reduzida automaticamente para no máximo 60×60 pixels e comprimida de novo.", "Não é necessária se você definiu o Iconify ou um emoji."],
					children: {
						"file-type": {
							title: "Tipos de arquivo",
							summary: "Os formatos de arquivo de imagem compatíveis",
							points: ["Podem ser usados os formatos comuns que o navegador consegue exibir.", "JPEG, PNG, GIF, WebP, SVG etc.", "GIF e AVIF são convertidos em PNG. JPEG e WebP são reduzidos mantendo o formato original.", "O SVG é incorporado tal como está, sem ser reduzido, então evite os de tamanho grande."],
						},
					},
				},
				iconify: {
					title: "Iconify",
					summary: "Uso dos conjuntos de ícones do Iconify",
					points: ["É o ícone que representa o elemento.", "Se você definiu uma imagem, ela é exibida com prioridade."],
					children: {
						iconify: {
							title: "Como procurar um ícone",
							summary: "Como escolher um ícone no Iconify",
							points: ["Procure no `Iconify` os ícones que podem ser exibidos.", "Com a busca de ícones você encontra na hora o ícone mais adequado.", "Ao selecionar um ícone, é exibido o identificador desse ícone, como `game-icons:sword-wound` (o tipo de conjunto de ícones `:` o nome do ícone); cole-o tal como está neste campo de ícone."],
							images: ["iconify-selection.png"],
							links: { iconify: "https://icon-sets.iconify.design" },
						},
					},
				},
				emoji: {
					title: "Emoji",
					summary: "Exibir o ícone com um emoji",
					points: ["Exibe um emoji como ícone.", "Insira o emoji Unicode tal como está.", "Como é usado o emoji instalado no ambiente de execução, a exibição varia um pouco conforme o usuário.", "Com o Iconify é possível definir emojis que não dependem de cada ambiente", "É possível exibir caracteres que não sejam emojis, mas com vários caracteres a exibição pode quebrar.", "Por exemplo, insere-se um emoji como `🗡️` ou `⚔️`."],
				},
			},
		},
		color: {
			title: "Cor",
			summary: "A configuração da cor com que o elemento é exibido",
			points: ["Como cor do elemento, aplica-se ao ícone do elemento e à sua cor de fundo.", "É escolhida no seletor de cores do editor.", "O preto (`#000000`) é tratado como o valor que significa \"nenhuma cor definida\". O valor inicial do seletor de cores também é esse preto.", "Se quiser que fique preto, indique uma cor levemente deslocada, como `#010101`."],
			children: {
				"heritage-from-parent": {
					title: "Herança do elemento pai",
					summary: "Como a configuração de cor do elemento pai é herdada",
					points: ["Ações, itens e eventos sem cor definida herdam a cor da categoria à qual pertencem.", "A hierarquia da herança é a seguinte.", "Nos elementos com uma cor própria definida, essa cor tem prioridade. Não é sobrescrita mesmo que a categoria tenha cor.", "O uso básico é decidir uma cor por categoria e deixar que o que está abaixo herde. A cor individual é definida quando você quer destacar um elemento específico.", "Se um atributo (attribute) estiver definido na ação, a cor herdada não é a da categoria à qual ela pertence, e sim a da categoria indicada no atributo.", "A própria categoria não tem de quem herdar. Se a cor da categoria continuar preta (`#000000`), essa categoria e os elementos abaixo dela sem cor definida são exibidos na cor intermediária entre a cor da barra e a cor do texto do design.", "Grupos, habilidades e predefinições não herdam e usam apenas a cor definida neles mesmos."],
					quote: colorTree,
					links: { type: "type" },
				},
			},
		},
		copy: {
			title: "Copiar as informações",
			summary: "Duplicar as informações de outro elemento",
			points: ["Ao pressionar o botão `Copy Information`, as informações de outro elemento são copiadas de uma vez para este elemento.", "Escolha o tipo de origem da cópia (categoria, ação, item, grupo, evento, habilidade ou predefinição) e em seguida insira o ID dele.", "Todos os campos, incluindo o ID identificador, são sobrescritos. Depois de copiar, altere o ID identificador para um que não se repita."],
			links: { type: "type" },
		},
	},
	options: {
		label: "information",
	},
};

export const component: Markdown = {
	title: "Componente",
	summary: "Partes comuns",
	points: ["As partes comuns usadas nas configurações de cada lugar são extraídas e tratadas à parte.", "Os componentes usados em qualquer desses lugares são comuns, mas dependendo do lugar há campos do componente que não são usados."],
	list: expandList("Componente", [information, requirement, acquisition, combat, property], "Descrição"),
	options: {
		label: "component",
		linkedList: true,
	},
};

// type

export const preset: Type.Information = {
	...information,
	title: "Predefinição",
	summary: "Personalização de como os elementos do sistema são exibidos",
	points: ["Substitui os textos da interface e os ícones já embutidos no motor do jogo (o reprodutor).", "Só são substituídos aqueles cujo ID coincide com uma predefinição existente. Adicionar uma predefinição cujo ID não coincide com um existente não gera erro, mas não afeta a exibição porque não há nenhum lugar que a consulte.", "Só os campos que você define são substituídos. Se você definir apenas o ícone, por exemplo, os originais são usados para o nome, a cor e os demais campos.", "A sobrescrita do nome e da explicação tem prioridade sobre as traduções de cada idioma embutidas no reprodutor. A cadeia que você sobrescreve é exibida tal como está em todos os idiomas.", "Se quiser mudar o texto conforme o idioma, especifique-o no arquivo de tradução `translations/world` gerado ao ativar a tradução. Esse tem a prioridade máxima."],
	options: {
		label: "preset",
	},
};

export const task: Type.Event = {
	title: "Tarefa",
	summary: "Uma missão que é cumprida quando as condições são atendidas",
	points: ["É cumprida quando as condições que você define são atendidas, e uma mensagem aparece na parte superior da tela.", "Aparece na lista de missões do reprodutor e na lista de tarefas da categoria.", "Uma tarefa sem condições definidas nunca é cumprida.", "Uma vez cumprida, ela continua cumprida mesmo que depois as condições deixem de ser atendidas, e a recompensa pode ser recebida a qualquer momento.", "A recompensa não é entregue automaticamente. O jogador a recebe quando abre a tarefa e pressiona a barra de Obtenção.", "Até a recompensa ser recebida, a barra na lista leva uma fita indicando que ela ainda não foi resgatada.", "Uma tarefa sem recompensa definida não mostra a barra de Obtenção e fica completa no momento em que é cumprida.", "Você não consegue receber a recompensa enquanto o número de tipos de itens que pode ter estiver no limite. Organize o que você tem e resgate de novo.", "Com a obtenção você pode alterar o nível de uma categoria, o número de vezes que uma ação foi executada e a quantidade em posse de um item.", "O que você quiser disparar em um momento diferente das condições, como a primeira inicialização ou o fim de jogo, é definido com um evento fixo (unique)."],
	links: { unique: "unique" },
	children: {
		information: information,
		category: {
			title: "Categoria",
			summary: "O ID da categoria à qual a tarefa pertence",
			points: ["Especifique o ID da categoria à qual esta tarefa pertence.", "Ao defini-lo, a lista de tarefas é adicionada à tela da categoria do reprodutor, e na lista de missões elas também são exibidas agrupadas por categoria.", "Quando deixado em branco, ela não pertence a nenhuma categoria e é exibida junto no início da lista de missões.", "Quando não há cor definida na própria tarefa, ela herda a cor da categoria."],
			links: { category: "category" },
		},
		timing: {
			title: "Momento",
			summary: "O momento em que a tarefa dispara (fixado em `tasked`)",
			points: ["A tarefa está fixada em `tasked` (quando as condições que você define são atendidas) e não pode ser editada.", "A recompensa só pode ser recebida uma vez, e depois de recebida ela permanece cumprida sem mais mudanças.", "O que você quiser disparar em outro momento determinado é definido com um evento fixo (unique)."],
			links: { unique: "unique" },
		},
		unlocked: {
			title: "Estado de exibição inicial",
			summary: "O estado de exibição inicial do ícone da tarefa (o cumprimento é decidido pelas condições, e esta configuração não o cumpre)",
			points: ["As condições de cumprimento de uma tarefa são decididas por requirements, e este campo afeta apenas a aparência do ícone na lista.", "secreted: Não aparece de forma alguma na lista de tarefas até que todos os requirements sejam atendidos (o cumprimento em si continua ocorrendo pelas condições).", "hidden e hinted: O ícone é exibido com um traço sobre ele, como ainda não desbloqueado.", "released: O traço desaparece e ele é exibido como já desbloqueado.", "Uma tarefa que foi cumprida uma vez não desaparece da lista, e continua sendo exibida como cumprida mesmo que depois as condições deixem de ser atendidas."],
		},
		requirements: { ...requirement, options: { ...requirement.options, array: true }, summary: "As condições para cumprir a tarefa" },
		requiringGroup: {
			title: "Soma por grupo",
			summary: "Trata o id das condições como um ID de grupo e julga pelo valor total dos elementos que pertencem a ele",
			points: ["Ao ativar, o id que você define nas condições (requirements) é tratado como o ID de um grupo diretamente sob o mundo.", "Uma condição cujo tipo é uma categoria é julgada pelo nível total de todas as categorias que pertencem a esse grupo.", "Uma condição cujo tipo é uma ação é julgada pelo total do número de vezes que todas as ações que pertencem a esse grupo foram executadas.", "Uma condição cujo tipo é um item é julgada pelo total da quantidade em posse de todos os itens que pertencem a esse grupo.", "Os elementos que não estão desbloqueados (qualquer estado diferente de released) não entram no total.", "A probabilidade de consumo (chance) e a condição de equipamento (equipment) de um item são ignoradas, e a quantidade em posse também não é consumida. Elas são usadas apenas para o julgamento.", "Ao desativar, o id das condições é tratado como o ID de uma categoria, uma ação ou um item individuais, como antes."],
			links: { group: "group" },
		},
		acquisitions: { ...acquisition, options: { ...acquisition.options, array: true }, summary: "A recompensa que pode ser recebida quando a tarefa é cumprida" },
		group: {
			title: "Grupo de tarefas",
			summary: "A classificação de grupo de exibição da tarefa",
			points: ["Aplique um dos definidos nos grupos que estão diretamente sob o mundo.", "Na lista de tarefas de uma categoria, elas são exibidas separadas por grupo, com um cabeçalho em cada um. As tarefas sem grupo definido também formam um bloco, e a predefinição \"Tarefa\" é usada como seu cabeçalho.", "Na lista de missões elas não são separadas por cabeçalho, e apenas a ordem em que se alinham fica reunida por grupo.", "A ordem em que os blocos se alinham é decidida pela posição onde a primeira tarefa daquele grupo aparece."],
			links: { group: "group" },
		},
	},
	options: {
		label: "task",
	},
};

// 構造はtaskと同じで、timingだけchanged固定。プレイヤーの画面には一切表示されない内部処理用のイベント
export const changed: Type.Event = {
	title: "Evento de mudança",
	summary: "Um evento de processamento interno que dispara quando a quantidade de uma categoria, uma ação ou um item aumenta de uma vez na quantidade das condições ou mais",
	points: [
		"Ele é verificado em todo momento em que uma quantidade muda, como a conclusão de uma ação, uma compra ou venda, ou a abertura de um baú do tesouro.",
		"As condições (requirements) são julgadas pela quantidade do aumento naquele único momento, e não por um valor absoluto como a quantidade em posse. Aumentos pequenos divididos em várias vezes não são somados.",
		"Se você definir a condição de um item como 3, por exemplo, ela é atendida quando esse item aumenta em 3 ou mais naquela única vez. Uma diminuição não conta como aumento.",
		"Quando você define várias condições, todas precisam ser atendidas ao mesmo tempo naquela única mudança. Um evento de mudança sem nenhuma condição definida nunca dispara.",
		"Colocar o valor de uma condição em `0` conta como atendida mesmo sem aumento, então ele dispara toda vez que uma quantidade muda.",
		"A probabilidade de consumo (chance) e o equipamento (equipment) das condições não são observados. O julgamento usa apenas a quantidade do aumento, e os elementos usados nas condições também não diminuem.",
		"A recompensa é recebida automaticamente toda vez que as condições são atendidas, e ele dispara repetidamente quantas vezes for. Diferente de uma tarefa, não é uma vez só, e nenhuma operação é necessária para recebê-la. Uma quantidade negativa também pode ser definida.",
		"Diferente de uma tarefa ou de uma compra, o limite do número de tipos de itens que você pode ter não é verificado, então itens novos podem aumentar além da capacidade.",
		"Um aumento vindo de uma recompensa também é tratado como uma mudança, então quando a recompensa de um evento de mudança atende as condições de outro evento de mudança, este dispara em seguida.",
		"Ele não é exibido de forma alguma na tela do reprodutor. Não aparece na lista de missões, e a mensagem de cumprimento também não é exibida.",
	],

	important: "Não defina a recompensa de um evento de mudança de modo que ela atenda as próprias condições dele. Ele não pararia de disparar e o jogo travaria. Um exemplo é um evento cujas condições são atendidas quando o item A aumenta em um e cuja recompensa entrega um item A.",
	links: { unique: "unique" },
	children: {
		information: information,
		category: {
			title: "Categoria",
			summary: "O ID da categoria à qual o evento de mudança pertence (é usado apenas para classificação, porque nada é exibido na tela)",
			points: ["Como nada é exibido na tela do reprodutor, esta configuração não afeta a aparência."],
		},
		timing: {
			title: "Momento",
			summary: "O momento em que o evento de mudança dispara (fixado em `changed`)",
			points: ["Está fixado em `changed` e não pode ser editado.", "Ele é verificado em todo momento em que uma quantidade muda, e dispara de novo toda vez que as condições são atendidas."],
		},
		unlocked: {
			title: "Estado de exibição inicial",
			summary: "Praticamente não tem efeito, porque nada é exibido na tela",
			points: ["Um evento de mudança não é exibido na tela do reprodutor, então esta configuração não é usada."],
		},
		requirements: { ...requirement, options: { ...requirement.options, array: true }, summary: "As condições para o evento de mudança disparar (julgadas pela quantidade do aumento)" },
		requiringGroup: {
			title: "Soma por grupo",
			summary: "Trata o id das condições como um ID de grupo e julga pelo total da quantidade do aumento dos elementos que pertencem a ele",
			points: ["Ao ativar, o id que você define nas condições (requirements) é tratado como o ID de um grupo diretamente sob o mundo.", "As quantidades do aumento de todas as categorias, todas as ações e todos os itens que pertencem a esse grupo são somadas para o julgamento.", "Diferente da soma por grupo de uma tarefa, a quantidade do aumento de um elemento que ainda não está desbloqueado também entra no total.", "Ao desativar, o id das condições é tratado como o ID de uma categoria, uma ação ou um item individuais, como antes."],
			links: { group: "group" },
		},
		acquisitions: { ...acquisition, options: { ...acquisition.options, array: true }, summary: "A recompensa recebida automaticamente quando o evento de mudança dispara" },
		group: {
			title: "Grupo de eventos de mudança",
			summary: "A classificação de grupo de exibição para a gestão interna (praticamente sem uso, porque nada é exibido na tela)",
			points: ["Um evento de mudança não é exibido na tela do reprodutor, então esta configuração não afeta a aparência."],
		},
	},
	options: {
		label: "changed",
	},
};

export const group: Type.Information = {
	...information,
	title: "Grupo",
	summary: "Define os grupos de exibição das categorias, das ações, dos itens e das tarefas",
	points: ["Define os grupos para controlar a ordem de exibição. Em cada categoria, ação, item e tarefa você pode definir um grupo definido aqui.", "Os que estão no mesmo grupo são exibidos reunidos em uma lista. A ordem em que os blocos se alinham é decidida pela posição onde o primeiro elemento daquele grupo aparece (e não pela ordem de definição desta lista de grupos).", "Os deixados em branco também são tratados como um grupo, e os em branco se reúnem entre si.", "A ordem de definição desta lista de grupos só importa para a disposição dos espaços de equipamento. Os espaços de equipamento são exibidos na ordem em que estão alinhados aqui, e um grupo que não está aqui vai para o fim.", "Um grupo também pode ter nome, explicação, ícone e cor definidos, e na tela do grupo você pode ver uma lista das categorias, das ações e dos itens que pertencem a ele.", "Ao ativar a soma por grupo nas condições de um evento, você pode especificar o ID de um grupo e tomar como condição, todos juntos, os elementos que pertencem a ele."],
	links: { requirement: "requirement" },
	options: {
		label: "group",
	},
};

export const skill: Type.Skill = {
	title: "Habilidade",
	summary: "Um efeito especial que é sorteado a cada turno do combate e ativa",
	points: ["É um efeito especial que é sorteado a cada turno e ativa em uma ação de combate (`stamina`). Ele não ativa em ações de nenhum outro tipo.", "A substância é definida aqui, e é referenciada por ID a partir de `skill` de um item (o seu lado) e `skills` de uma ação (o lado do adversário).", "Os candidatos do seu lado são as habilidades referenciadas pelos itens que estão fazendo efeito naquele momento (`unnecessary` enquanto em posse, `necessary` e `consumable` enquanto equipados). Ao desequipar um item, a habilidade dele também sai dos candidatos.", "A cada turno os candidatos são embaralhados no seu lado e no lado do adversário, a probabilidade de ativação é julgada a partir do topo, e apenas a primeira que dá certo é ativada. Se nenhuma der certo, naquele turno não há habilidade.", "Quando vários itens ou ações referenciam a mesma habilidade, ela ganha outras tantas oportunidades no sorteio, então ativa com mais facilidade."],
	links: { item: "item", action: "action" },
	children: {
		information: information,
		chance: {
			title: "Probabilidade de ativação [0-1]",
			summary: "A probabilidade de esta habilidade ativar naquele turno",
			points: ["A cada turno se julga com esta probabilidade se ela ativa. Com `1` dá certo sempre e com `0` não ativa. O valor padrão é `1`.", "O julgamento avança em ordem a partir do topo dos candidatos embaralhados, e apenas a primeira habilidade que dá certo é ativada. Por isso, quando há vários candidatos, a proporção em que ela realmente ativa fica menor que este valor.", "Se a exibição da explicação estiver ativada, este valor também afeta a frequência com que a explicação aparece. Quanto mais fácil uma habilidade ativa, menos a explicação dela se repete."],
		},
		property: {
			...combat,
			summary: "Os valores de combate acrescentados no turno em que ela ativa",
			points: ["Somente no turno em que esta habilidade ativa, os valores de combate daqui são acrescentados como correção por diferença de nível.", "Só o valor de recuperação é exceção, e não age naquele turno, mas todo junto na recuperação após o desfecho. Dos valores de recuperação das habilidades que ativaram durante a ação, o maior é somado à quantidade recuperada pelas habilidades do seu lado e subtraído dela pelas habilidades do adversário."],
		},
		comment: {
			title: "Exibição da explicação",
			summary: "Se a explicação é exibida em uma notificação flutuante ao ativar",
			points: ["É a marca de se a explicação é exibida em uma notificação flutuante quando esta habilidade ativa.", "Quando está ligada, ela é exibida a cada ativação com uma probabilidade de (100% − a probabilidade de ativação) ÷ 2. Se a probabilidade de ativação for 40%, é 30%.", "Quando está desligada, não é exibida.", "Quando a explicação está em branco, ela não é exibida mesmo que você ligue."],
		},
	},
	options: {
		label: "skill",
	},
};

export const item: Type.Item = {
	title: "Item",
	summary: "Elementos de bens como equipamentos e consumíveis",
	points: ["São os elementos relacionados a possuir coisas como equipamentos, consumíveis e objetos de valor.", "Os espaços de equipamento são criados por grupo em cada categoria, e apenas um dos itens do mesmo espaço pode ser equipado. Também é possível fazer um item que não possa ser equipado.", "Como a quantidade em posse é ela própria o progresso, um item também pode ser usado como uma marca ou um contador. Se você fizer um item sem efeito que também não possa ser equipado, ele vira um elemento que apenas conta um número."],
	children: {
		information: information,
		category: {
			title: "Categoria",
			summary: "O ID da categoria à qual o item pertence",
			points: ["Especifique o ID da categoria à qual este item pertence. Ele se alinha na lista de itens da categoria que você especificar, e os espaços de equipamento também são criados por categoria.", "Quando não há cor definida no próprio item, ele herda a cor da categoria.", "Aonde os efeitos das propriedades chegam pode ser especificado à parte da categoria à qual ele pertence, então um item de outra categoria também pode dar efeito."],
			links: { category: "category", property: "property" },
		},
		group: {
			title: "Grupo",
			summary: "A classificação de grupo de exibição do item",
			points: ["Aplique um dos definidos nos grupos que estão diretamente sob o mundo.", "A lista de itens é exibida na ordem dos grupos que você definir.", "Quando deixado em branco, não é dividido em grupos."],
			links: { group: "group" },
		},
		unlocked: {
			title: "Estado de desbloqueio inicial",
			summary: "O estado inicial de exibição e desbloqueio do elemento (passa automaticamente a um estado superior quando os requisitos de ativação são atendidos)",
			points: ["secreted: Não aparece de forma alguma na interface até que todos os requirements sejam atendidos (também não sai nas dicas e fica mascarado nas listas de requisitos e recompensas).", "hidden: Enquanto nenhum elemento desbloqueado o referencia e os requisitos dele seguem sem ser atendidos, ele fica totalmente oculto (o nome também fica esmaecido e não dá para operar).", "hinted (padrão): Só o nome é exibido de antemão, mas não dá para operar até que seja desbloqueado.", "released: Fica desbloqueado e pode ser operado desde o início, sem relação com as condições (antes \"exibir desde o início\").", "Depois que um item foi obtido, mesmo que uma única vez, ele continua desbloqueado sem relação com esta configuração nem com as condições.", "Ao contrário, um item sem nenhuma condição definida não é desbloqueado até ser obtido, a não ser que você o coloque em `released`. Defina sempre condições nos itens que você quer que sejam comprados."],
		},
		buyingValue: {
			title: "Preço de compra [Moedas]",
			summary: "A configuração do preço de compra do item",
			points: ["É a quantidade de moeda que você paga ao comprar uma unidade do item. O valor padrão é `-1` (não pode ser comprado).", "Um item que não está desbloqueado não pode ser comprado mesmo que tenha preço definido.", "A quantidade que você pode comprar de uma vez é a menor entre a que você consegue comprar com a moeda que tem e o que resta até a quantidade máxima em posse."],
			list: [
				["Preço de compra", "Tratamento"],
				["0", "Não pode ser comprado"],
				["Um valor maior que 0", "O preço pelo qual pode ser comprado"],
				["Um valor menor que 0 (por exemplo, -1)", "Não pode ser comprado (tratado igual a 0)"],
			],
		},
		sellingValue: {
			title: "Preço de venda [Moedas]",
			summary: "A configuração do preço de venda do item",
			points: ["É a quantidade de moeda que você recebe ao vender uma unidade do item. O valor padrão é `0` (não pode ser vendido).", "A moeda que você recebe é a especificada pelo ID de moeda de negociação, a mesma de quando você compra.", "Ele nunca é decidido automaticamente a partir do preço de compra, então defina sempre um valor quando quiser que possa ser vendido.", "Valores negativos não podem ser definidos."],
			list: [
				["Preço de venda", "Tratamento"],
				["0", "Não pode ser vendido"],
				["Um valor maior que 0", "Pode ser vendido por esse preço"],
			],
		},
		maximum: {
			title: "Quantidade máxima em posse [Unidades]",
			summary: "O limite da quantidade máxima em posse do item",
			points: ["Com 0 não há limite para a quantidade que pode ser possuída. O valor padrão é `0`.", "Com 1 ou mais, só pode ser possuída até essa quantidade. Quando o limite é atingido, a quantidade em posse não aumenta mesmo que mais seja obtido.", "Ele também vira o limite da quantidade que pode ser comprada.", "Quando a quantidade em posse dos dados salvos passa do limite, ela é reduzida até o limite no carregamento."],
		},
		equipmentType: {
			title: "Tipo de equipamento",
			summary: "A configuração de tipo relativa ao equipar, ao efeito e ao consumo do item",
			points: ["Nos itens de `necessary` e `consumable`, o grupo deles vira automaticamente um espaço de equipamento da categoria.", "Dentro do mesmo grupo só um item pode ser equipado. Ao equipar um item novo, o equipamento existente do mesmo grupo é retirado automaticamente.", "A ordem dos espaços de equipamento segue a ordem de definição da lista de grupos do mundo.", "`unnecessary` faz efeito estando equipado ou não, e a magnitude do efeito é proporcional à quantidade em posse (sem efeito com 0, n vezes com n unidades).", "`consumable` só é consumido quando as propriedades desse item afetam a ação executada, uma unidade por ação. Ele não diminui nas ações às quais o efeito dele não chega.", "Um item consumido até 0 é desequipado automaticamente.", "Para equipá-lo é preciso atender tanto as condições desse item quanto as da categoria."],
			list: [
				["Valor", "Equipamento", "Fazer efeito", "Consumo", "Exemplo"],
				["`necessary`", "Necessário", "Só enquanto equipado (por uma unidade)", "Não", "Equipamentos como espadas e armaduras"],
				["`consumable`", "Necessário", "Só enquanto equipado (por uma unidade)", "Consumido ao executar a ação", "Itens consumidos para obter um efeito, como poções"],
				["`unnecessary`", "Desnecessário", "Sempre enquanto em posse (proporcional à quantidade em posse)", "Não", "Itens passivos que fazem efeito só por serem mantidos"],
				["`impossible`", "Impossível", "Nenhum", "Não", "Itens sem efeito, como materiais e bugigangas"],
			],
		},
		requirements: { ...requirement, options: { ...requirement.options, array: true }, summary: "As condições para o item ser desbloqueado e poder ser equipado" },
		properties: { ...property, options: { ...property.options, array: true }, summary: "Os efeitos de propriedade que o item tem" },
		coinId: { title: "ID de moeda de negociação", summary: "O ID da moeda usada para negociar este item", points: ["Especifique o ID da moeda (coins) usada em comum para o preço de compra e o preço de venda.", "Quando deixado em branco, ou quando é especificado um ID que não está na lista de moedas, a moeda principal (a primeira de coins) é usada."] },
		// スキルの実体ではなくワールド直下のskillsのID参照なので、スキル自身の項目は持たせない
		skill: { title: skill.title, summary: "O ID da habilidade que este item traz para o seu lado", points: ["Especifique um ID definido nas habilidades que estão diretamente sob o mundo. Quando deixado em branco, não há habilidade.", "Enquanto este item está fazendo efeito (`unnecessary` enquanto em posse, `necessary` e `consumable` enquanto equipado), a habilidade que você especificar entra no sorteio do seu lado.", "Quando é especificado um ID que não existe, ele é ignorado."], links: { skill: "skill" }, options: { label: "skill" } },
	},
	options: {
		label: "item",
	},
};

export const action: Type.Action = {
	title: "Ação",
	summary: "Os elementos de comportamento como a coleta, a fabricação e o combate",
	points: ["É um elemento que representa um comportamento como a coleta, a fabricação, a compra e venda ou o combate.", "Cada vez que você age ganha experiência e o seu nível sobe.", "Você pode configurá-la para consumir ou obter itens a cada vez que age.", "Há vários tipos de padrão de comportamento."],
	children: {
		information: information,
		category: {
			title: "Categoria",
			summary: "O ID da categoria à qual a ação pertence",
			points: ["Indique o ID da categoria à qual esta ação pertence."],
		},
		attribute: {
			title: "Atributo",
			summary: "A categoria de atributo própria da ação",
			points: ["Você pode definir um atributo (categoria) individual.", "Quando está em branco, a categoria à qual ela pertence é herdada.", "Por exemplo, se numa ação que pertence a uma categoria chamada Castelo do Rei Demônio você definir individualmente o atributo de magia, o nível e as propriedades da categoria de magia são calculados e aplicados ao tempo de conclusão e ao dano da ação.", "A experiência ao ter sucesso também vai para a categoria definida no atributo, e não para a categoria à qual ela pertence.", "Quando na própria ação não há cor definida, as cores do ícone e do fundo herdam a cor da categoria definida no atributo, e não a da categoria à qual ela pertence."],
			links: { category: "category" },
		},
		group: {
			title: "Grupo",
			summary: "A classificação por grupo de exibição da ação",
			points: ["Aplique um dos definidos nos grupos que estão diretamente sob o mundo.", "A lista de ações é exibida na ordem dos grupos que você definiu."],
			links: { group: "group" },
		},
		unlocked: {
			title: "Estado de desbloqueio inicial",
			summary: "O estado inicial de exibição e desbloqueio do elemento (passa automaticamente a um estado superior quando os requisitos de ativação são atendidos)",
			points: ["secreted: Não aparece de forma alguma na interface até que todos os requirements sejam atendidos (também não sai nas dicas e fica mascarado nas listas de requisitos e recompensas).", "hidden: Enquanto nenhum elemento desbloqueado o referencia e os requisitos dele seguem sem ser atendidos, ele fica totalmente oculto (o nome também fica esmaecido e não dá para operar).", "hinted (padrão): Só o nome é exibido de antemão, mas não dá para operar até que seja desbloqueado.", "released: Fica desbloqueado e pode ser operado desde o início, sem relação com as condições (antes \"exibir desde o início\")."],
		},
		level: {
			title: "Nível",
			summary: "O nível de dificuldade da ação",
			points: ["A dificuldade da ação é expressa por um nível.", "Na execução ela é comparada com o nível do jogador e cada propriedade é calculada.", "O termo de comparação é o nível da categoria definida no atributo.", "Por exemplo, se você executa uma ação mais alta que o seu próprio nível, há efeitos como a taxa de sucesso cair.", "Desde que as condições sejam atendidas, dá para executá-la mesmo que o nível do jogador seja menor que este valor.", "No entanto, se `actionLevelLimit` de geral (o limite de nível das ações) estiver ativado, este valor é adicionado automaticamente como condição sobre o nível da categoria, então não dá para executá-la até que o nível alcance. Nas categorias que não têm nível ele não é adicionado."],
			links: { property: "property" },
		},
		requirements: { ...requirement, options: { ...requirement.options, array: true }, summary: "As condições necessárias para executar a ação" },
		seconds: {
			title: "Tempo necessário [Segundos]",
			summary: "O tempo padrão que leva para executar a ação",
			points: ["É o tempo padrão (em segundos) necessário para realizar a ação uma vez.", "No tipo `stamina` é o intervalo de tempo que leva um turno (reduzir uma vez o vigor de ambos os lados). Os turnos que recuperam o vigor depois de decidido o resultado usam o mesmo intervalo.", "Varia na execução real pelo cálculo das propriedades."],
			links: { property: "property" },
		},
		experience: {
			title: "Experiência [100 para o próximo nível]",
			summary: "A experiência obtida quando a ação tem sucesso",
			points: ["É a experiência padrão obtida ao executar a ação uma vez e ter sucesso. 100 é a experiência de um nível.", "No caso do combate ela é obtida ao vencer o oponente, então convém defini-la generosa.", "Varia na execução real pelo cálculo das propriedades."],
			links: { property: "property" },
		},
		chance: {
			title: "Taxa de sucesso [0-1]",
			summary: "A probabilidade de sucesso na conclusão da ação",
			points: ["É a probabilidade de ter sucesso quando a ação é concluída.", "Com `1` sempre tem sucesso e com `0` sempre falha.", "Ao falhar os itens de consumo também são consumidos, mas a experiência e o número de execuções não aumentam.", "Das recompensas, só as que têm a probabilidade (chance) em um valor positivo são obtidas ao ter sucesso. As que estão em um valor negativo são obtidas só ao falhar, então falhar não significa necessariamente que nada seja obtido.", "Varia na execução real pelo cálculo das propriedades."],
		},
		maximum: {
			title: "Número máximo de execuções [Vezes]",
			summary: "O número máximo de vezes que a ação pode ser concluída",
			points: ["É o limite superior do número de vezes que a ação pode ter sucesso e ser concluída.", "Com `0` é ilimitado.", "Ao atingir o limite superior, a ação passa a não poder ser executada."],
		},
		acquisitions: { ...acquisition, options: { ...acquisition.options, array: true }, summary: "A recompensa obtida quando a ação tem sucesso" },
		progressType: {
			title: "Tipo de andamento",
			summary: "O tipo de execução da ação",
			points: ["Há quatro tipos."],
			list: [
				["Tipo", "Comportamento", "Vigor", "Exemplo"],
				["`persistent`", "É um tipo em que a ação é executada de forma repetida e contínua. A cada vez que ela se conclui uma vez você obtém experiência e recompensa.", "Sem relação", "Corte de árvores, mineração, pesca"],
				["`single`", "Executa a ação uma vez. Se for interrompida no meio, o andamento é salvo e da próxima vez dá para retomar de onde parou. Ao ser concluída, o usuário pressiona a ação de confirmação e recebe o resultado.", "Sem relação", "Abrir um baú do tesouro, aprender uma habilidade lendo"],
				["`snap`", "É um tipo em que a ação é executada instantaneamente. Ela se conclui de imediato, sem passagem de tempo.", "Sem relação", "Escambo, uso de um item"],
				["`stamina`", "A cada tempo necessário o vigor do jogador e o do oponente diminuem. Quando o vigor do oponente se esgota você obtém experiência e recompensa. Quando o vigor do jogador se esgota o jogo acaba e todas as ações em execução são canceladas.", "Com relação", "Combate, trabalho que envolve perigo"],
			],
		},
		property: combat,
		// スキルの実体ではなくワールド直下のskillsのID参照の一覧
		skills: { title: skill.title, summary: "A lista das habilidades que o oponente ativa", points: ["Indique as habilidades que o oponente desta ação ativa pelos IDs das habilidades que estão diretamente sob o mundo.", "Só tem sentido nas ações do tipo `stamina`.", "A cada turno a lista é reordenada ao acaso e a probabilidade de ativação é julgada a partir do início, e só a primeira que se cumpre é ativada. Se nenhuma se cumprir, aquele turno fica sem habilidade.", "As habilidades do próprio lado não se reúnem aqui, e sim a partir das habilidades definidas nos itens que estão produzindo efeito (os itens que funcionam só por serem possuídos e não precisam ser equipados, e os indispensáveis e consumíveis que estão equipados).", "Os IDs que não existem são ignorados."], options: { label: "skill", array: true } },
	},
	options: {
		label: "action",
	},
};

export const category: Type.Category = {
	title: "Categoria",
	summary: "O grande enquadramento que classifica as ações e os itens",
	points: ["Representa uma classificação grande.", "Por exemplo, dá para defini-la como um enquadramento livre: curta distância, longa distância, magia, masmorra, ferraria, oficina e assim por diante.", "As ações e os itens são colocados diretamente sob o mundo e são vinculados pelo ID de categoria."],
	children: {
		information: information,
		group: {
			title: "Grupo",
			summary: "A classificação por grupo de exibição da categoria",
			points: ["Aplique um dos definidos nos grupos que estão diretamente sob o mundo.", "A lista de categorias é exibida na ordem dos grupos que você definiu."],
			links: { group: "group" },
		},
		unlocked: {
			title: "Estado de desbloqueio inicial",
			summary: "O estado inicial de exibição e desbloqueio do elemento (passa automaticamente a um estado superior quando os requisitos de ativação são atendidos)",
			points: ["secreted: Não aparece de forma alguma na interface até que todos os requirements sejam atendidos (também não sai nas dicas e fica mascarado nas listas de requisitos e recompensas).", "hidden: Enquanto nenhum elemento desbloqueado o referencia e os requisitos dele seguem sem ser atendidos, ele fica totalmente oculto (o nome também fica esmaecido e não dá para operar).", "hinted (padrão): Só o nome é exibido de antemão, mas não dá para operar até que seja desbloqueado.", "released: Fica desbloqueado e pode ser operado desde o início, sem relação com as condições (antes \"exibir desde o início\")."],
		},
		requirements: { ...requirement, options: { ...requirement.options, array: true }, summary: "As condições necessárias para usar a categoria" },
		numeric: {
			title: "Presença de nível",
			summary: "A presença da função de nível de categoria",
			points: ["É a marca de se esta categoria tem nível ou não.", "Se estiver ligada tem nível, e se estiver desligada não tem.", "Como exemplo, há um uso em que as categorias baseadas na experiência, como a esgrima ou a magia, são ligadas, e as categorias de lugares, como as masmorras ou as ferrarias, são desligadas.", "Se estiver desligada não entra experiência e, no cálculo das propriedades, a diferença de nível entre o jogador e a ação é tratada como 0. A correção das propriedades pelo equipamento continua surtindo efeito igual.", "Uma categoria desligada também fica de fora do julgamento de conclusão (completed)."],
		},
		standaloneProgress: {
			title: "Andamento simultâneo",
			summary: "A configuração de execução em paralelo com outras categorias",
			points: ["É a marca de se as ações desta categoria podem andar em paralelo com as ações de outras categorias.", "Se estiver ligada, elas podem andar ao mesmo tempo de forma independente das ações de outras categorias.", "Se estiver desligada, no conjunto das categorias igualmente desligadas só uma ação pode andar.", "Se você iniciar uma ação nova numa categoria desligada, a ação em andamento não é cancelada, e sim empurrada de volta para o início da fila de espera. O número de execuções restante é preservado e, quando a ação que entrou na frente termina, ela é retomada de onde parou."],
		},
		background: {
			title: "Fundo",
			summary: "A configuração de fundo própria da categoria",
			points: ["Define o fundo desta categoria.", "Quando a categoria é selecionada, a imagem de fundo muda junto com ela.", "Se não for definida, o fundo do design é usado como está.", "Ao ser importada, ela é reduzida automaticamente para caber em 256×256 pixels."],
		},
	},
	options: {
		label: "category",
	},
};

export const type: Markdown = {
	title: "Tipo",
	summary: "A classificação básica do mundo",
	points: ["Um mundo é composto por seis tipos.", "Todos os elementos são colocados diretamente sob o mundo.", "As ações e os itens são vinculados pelo ID da categoria à qual pertencem.", "Só os eventos não são um tipo: eles são colocados agrupados por momento nos eventos (events) que estão diretamente sob o mundo."],
	list: expandList("Tipo", [category, action, item, skill, group, preset], "Descrição"),
	quote: typeTree,
	options: {
		label: "type",
		linkedList: true,
	},
};

// basic

export const development: Type.Development = {
	title: "Desenvolvimento",
	summary: "A gestão das anotações e dos erros durante o desenvolvimento do mundo",
	points: ["É usado durante o desenvolvimento do mundo.", "Diz respeito ao desenvolvimento e aos testes deste mundo, e não afeta o conteúdo da partida.", "O jogador nunca vê o conteúdo relativo ao desenvolvimento."],
	children: {
		version: {
			title: "Versão",
			summary: "O número de versão de compilação do editor",
			points: ["O número de versão do editor no momento em que o mundo novo foi criado é registrado automaticamente.", "Ele não é atualizado mesmo que você carregue e edite um mundo já existente.", "O desenvolvedor não pode alterar este conteúdo."],
		},
		memo: {
			title: "Anotação",
			summary: "O registro de anotações para o desenvolvedor",
			points: ["O desenvolvedor pode escrever livremente nele como anotação.", "Não guarda relação com a publicação do jogo."],
		},
		errors: {
			title: "Erros",
			summary: "O registro de erros do resultado da validação",
			points: ["O resultado de validar o mundo é salvo aqui automaticamente.", "Por exemplo, ele exibe como erros coisas como haver um tipo de caractere que não pode ser digitado ou ter sido digitado um número acima do limite superior.", "Se não houve nem um único erro, em vez disso é salva uma mensagem de sucesso em uma única linha.", "O desenvolvedor não pode alterar este conteúdo.", "Enquanto restarem erros não dá para publicar o mundo. Ao executar a publicação, primeiro a validação é realizada e, se houver erros, ela é interrompida ali."],
		},
		timestamp: {
			title: "Carimbo de data e hora",
			summary: "O registro da criação, do salvamento e da publicação",
			points: ["Os horários de criação, salvamento e publicação do mundo são registrados automaticamente.", "O desenvolvedor não pode alterar este conteúdo."],
			children: {
				created: {
					title: "Data de criação",
					summary: "O horário da primeira criação do mundo",
					points: ["É a data e hora em que o mundo foi criado pela primeira vez."],
				},
				saved: {
					title: "Data de salvamento",
					summary: "O horário do último salvamento realizado",
					points: ["É a data e hora em que o mundo foi salvo pela última vez."],
				},
				published: {
					title: "Data de publicação",
					summary: "O horário da última publicação realizada",
					points: ["É a data e hora em que o mundo foi publicado pela última vez."],
				},
			},
		},
		autosaveing: {
			title: "Salvamento automático",
			summary: "Ativação/desativação da função de salvamento automático",
			points: ["Indica se o conteúdo da edição é salvo automaticamente no navegador.", "Você não pode reescrever este campo diretamente. Ele é alterado com o interruptor de salvamento automático no menu do editor."],
		},
	},
	options: {
		label: "development",
	},
};

export const design: Type.Design = {
	title: "Design",
	summary: "As configurações de aparência do mundo, como as cores e a fonte",
	points: ["São as configurações sobre a apresentação do mundo.", "As duas cores decididas aqui (a cor de barra e a cor de texto) passam a ser a base de toda a tela, e todas as cores usadas nela, como a linha selecionada, o cabeçalho de um grupo e as cores de afirmação e negação, são criadas a partir delas.", "Só a imagem de fundo pode ser substituída por categoria e, nesse caso, tem prioridade a configuração do lado da categoria."],
	children: {
		barColor: {
			title: "Cor de barra",
			summary: "A cor que serve de fundo da barra",
			points: ["É usada como cor de fundo da barra.", "Como é também a cor que serve de base para toda a tela, a cor da linha selecionada é criada a partir dela igualmente.", "As amostras de cor dos elementos sem cor definida e o fundo das notificações flutuantes passam a ser a cor intermediária entre esta cor e a cor de texto."],
		},
		textColor: {
			title: "Cor de texto",
			summary: "A cor do texto e do fundo",
			points: ["É usada como cor do texto.", "O degradê do fundo também é criado a partir desta cor. Se uma imagem de fundo for definida, o mesmo degradê é clareado e sobreposto à imagem.", "Tomar uma diferença grande de luminosidade em relação à cor de barra deixa o texto mais fácil de ler. Nos mundos com pouca diferença, as amostras de cor dos elementos sem cor definida também ficam mais difíceis de distinguir."],
		},
		shadowColor: {
			title: "Cor de sombra",
			summary: "A cor da sombra da barra",
			points: ["É usada como cor da sombra que cai sobre as barras e o cabeçalho.", "Deixá-la numa cor mais escura que a cor de barra dá uma sombra natural."],
		},
		background: {
			title: "Imagem de fundo",
			summary: "A imagem de fundo do jogo inteiro",
			points: ["Define a imagem de fundo do jogo.", "Se nenhuma imagem for definida, o fundo passa a ser um degradê baseado na cor de texto.", "A imagem é reduzida automaticamente para caber em 256×256 pixels. Os GIF e os AVIF são convertidos em PNG.", "Se uma imagem de fundo for definida numa categoria, na tela dessa categoria tem prioridade a imagem do lado da categoria.", "A imagem definida pode ser apagada com o botão Delete Image."],
			links: { category: "category" },
		},
	},
	options: {
		label: "design",
	},
};

export const general: Type.General = {
	title: "Geral",
	summary: "Configurações básicas do jogo, como o idioma e as configurações de nível",
	children: {
		language: {
			title: "Idioma",
			summary: "O idioma em que você cria o mundo",
			points: [
				"Define em que idioma você escreve o nome e a descrição do mundo. É o idioma que serve de base quando você prepara as traduções.",
				"É também o idioma exibido primeiro quando um jogador começa o jogo.",
				"Quando translations está desativado, o jogador não consegue trocar deste idioma para outro.",
				"É uma configuração diferente do idioma de exibição do próprio editor de mundos. O idioma de exibição do editor é escolhido ao abrir o editor.",
			],
			links: { translation: "translation" },
		},
		translations: {
			title: "Tradução",
			summary: "Se serão preparadas traduções para vários idiomas",
			points: [
				"Quando está ativado, os jogadores podem trocar para o idioma que preferirem e jogar nele.",
				"Quando está desativado, fica fixado no idioma escolhido em language, e a própria operação de troca não fica disponível.",
				"Se você o ativar, precisa preparar os dados de tradução de cada idioma. O pacote publicado acompanha os dados de tradução.",
				"O que é trocado são os nomes e as descrições definidos no mundo. As traduções das expressões comuns da tela (as predefinições) acompanham o pacote sempre, independentemente desta configuração.",
			],
			links: { translation: "translation", preset: "preset" },
		},
		offlineMaxHours: {
			title: "Tempo máximo offline [Horas]",
			summary: "O limite de tempo do progresso offline",
			points: ["Define no máximo quantas horas dura o progresso enquanto você está offline.", "Por exemplo, se você definir 6 horas, o processo de retorno do offline é tratado até 6 horas e, mesmo que você retorne depois de um intervalo maior, o tempo offline é tratado como 6 horas.", "Se você definir 0 hora, nenhum processo é tratado ao retornar do offline.", "O valor máximo é de 24 horas."],
			links: { category: "category" },
		},
		maxCategoryLevels: {
			title: "Nível máximo das categorias",
			summary: "O teto de nível de cada categoria",
			points: [
				"Define o teto do nível de cada categoria. O valor padrão é `100`.",
				"Mesmo que se ganhe experiência, o nível para neste valor e o excedente é descartado. O mesmo vale quando uma recompensa soma níveis diretamente.",
				"Quando o nível dos dados salvos passa do teto, ele é cortado até o teto no carregamento.",
				"A barra de nível e a taxa de progresso das estatísticas são exibidas tomando este valor como denominador.",
				"Uma categoria com numeric desativado não sobe de nível, então este valor não tem relação com ela.",
			],
			links: { category: "category" },
		},
		coins: {
			title: "Moeda",
			summary: "As configurações da moeda (coins) usada dentro do jogo",
			points: [
				"Define a moeda usada dentro do jogo. É preciso pelo menos uma.",
				"Você pode definir várias moedas e configurar cada uma como informações (ID, nome, ícone, cor e assim por diante).",
				"As moedas são usadas para comprar e vender itens e para ampliar a capacidade e a fila.",
				"A primeira moeda é tratada como a moeda principal e é usada quando o ID de moeda (`coinId`) não é especificado em um item, na capacidade ou na fila, ou quando é especificado um ID que não está na lista de moedas.",
				"Uma moeda é tratada como um tipo de item. Nos requisitos e nas recompensas, refira-se ao ID configurado aqui como um item. Ela não pertence a nenhuma categoria e não é objeto de equipamento nem de compra e venda.",
			],
			links: { information: "information", item: "item" },
		},
		capacity: {
			title: "Capacidade",
			summary: "As configurações de capacidade do inventário",
			points: [
				"Gerencia o teto da quantidade de tipos de itens que um jogador pode ter.",
				"É gerenciado pela quantidade de tipos de itens que você tem, não pela quantidade possuída de cada item.",
				"Se você deixar `initialCount` em 0, a capacidade fica ilimitada e também não é mais possível comprar capacidade.",
				"Quando você se referir ao item da capacidade nos requisitos ou nas recompensas, use o ID configurado aqui ou `capacity`.",
			],
			children: {
				information: { ...information, title: "Informações da capacidade", summary: "O ID, o nome, o ícone e a cor para tratar a capacidade como um item" },
				initialCount: {
					title: "Valor inicial da capacidade [Unidades]",
					summary: "A capacidade inicial do inventário (a quantidade de tipos de itens que se pode ter)",
					points: ["É a capacidade inicial no começo do jogo (a quantidade de tipos de itens que se pode ter). O valor padrão é `10`.", "Se você o deixar em `0`, a capacidade fica ilimitada e, ao mesmo tempo, deixa de ser possível comprar capacidade."],
				},
				initialCost: {
					title: "Preço base da capacidade [Moedas]",
					summary: "O preço inicial para aumentar a capacidade em uma unidade",
					points: ["É o preço base (em moedas) para aumentar a capacidade do inventário em um espaço. Configure-o como um número inteiro de `1` ou mais.", "O preço real é calculado como \"preço base × taxa de aumento^quantidade de compras feitas\".", "Exemplo: com um preço base de 100 e uma taxa de aumento de 1,2, a 1.ª vez são 100 moedas, a 2.ª 120 moedas e a 3.ª 144 moedas."],
				},
				increasingRate: {
					title: "Taxa de aumento da capacidade [Multiplicador]",
					summary: "A taxa de aumento do custo de ampliar a capacidade",
					points: ["É o multiplicador de quanto o custo de ampliar a capacidade aumenta na enésima compra. O valor padrão é `1.2`.", "Com `1.0` o preço é sempre o mesmo; com `1.2` fica 20% mais caro a cada compra.", "Fórmula: preço base × taxa de aumento^quantidade de compras feitas"],
					list: [
						["Taxa de aumento", "Unidade 1", "Unidade 5", "Unidade 10", "Unidade 100", "Unidade 1000"],
						["1.00", "x1.00", "x1.00", "x1.00", "x1.00", "x1.00"],
						["1.05", "x1.00", "x1.22", "x1.55", "x125.24", "x1.5×10²¹"],
						["1.10", "x1.00", "x1.46", "x2.36", "x1.3×10⁴", "x2.2×10⁴¹"],
						["1.20", "x1.00", "x2.07", "x5.16", "x6.9×10⁷", "x1.3×10⁷⁹"],
						["1.50", "x1.00", "x5.06", "x38.44", "x2.7×10¹⁷", "x8.2×10¹⁷⁵"],
					],
				},
				coinId: {
					title: "ID de moeda da capacidade",
					summary: "O ID da moeda usada para ampliar a capacidade",
					points: ["Especifica o ID da moeda (coins) usada no preço de ampliação da capacidade do inventário.", "Quando deixado em branco, ou quando é especificado um ID que não está na lista de moedas, a moeda principal (a primeira de coins) é usada."],
				},
				buyingLimit: {
					title: "Limite de compras da capacidade [Vezes]",
					summary: "A quantidade máxima de vezes que se pode comprar capacidade",
					points: ["É o teto da quantidade de vezes que se pode comprar capacidade com uma moeda.", "Se você o deixar em `0`, dá para comprar sem limite.", "Se você o deixar em `-1`, deixa de ser possível comprar.", "O aumento de capacidade por uma recompensa fica fora deste teto."],
				},
			},
			links: { item: "item" },
		},
		queue: {
			title: "Fila",
			summary: "As configurações da quantidade de espaços para executar ações em sequência (a fila)",
			points: [
				"Gerencia a quantidade de espaços da fila para executar ações em sequência.",
				"A fila inclui a ação em execução, e a ação que está à frente é a executada. Quando os espaços são `1`, há apenas a que está em execução e não dá para manter nada em espera.",
				"Assim como na capacidade, a quantidade de espaços pode ser comprada com uma moeda e também pode ser aumentada indicando o item da fila como recompensa de uma ação ou de um evento.",
				"Quando você se referir ao item da fila nos requisitos ou nas recompensas, use o ID configurado aqui ou `queue`.",
			],
			children: {
				information: { ...information, title: "Informações da fila", summary: "O ID, o nome, o ícone e a cor para tratar a fila como um item" },
				initialCount: {
					title: "Valor inicial da fila [Espaços]",
					summary: "A quantidade de espaços de execução em sequência no começo do jogo",
					points: ["É a quantidade de espaços da fila no começo do jogo. O valor padrão é `1`.", "O valor mínimo é `1` (porque a que está em execução ocupa um espaço; não existe o tratamento de `0` = ilimitado que a capacidade tem)."],
				},
				initialCost: {
					title: "Preço base da fila [Moedas]",
					summary: "O preço inicial para aumentar os espaços em um",
					points: ["É o preço base (em moedas) para aumentar em um os espaços de execução em sequência. Configure-o como um número inteiro de `1` ou mais.", "O preço real é calculado como \"preço base × taxa de aumento^quantidade de compras feitas\".", "Exemplo: com um preço base de 100 e uma taxa de aumento de 1,2, a 1.ª vez são 100 moedas, a 2.ª 120 moedas e a 3.ª 144 moedas."],
				},
				increasingRate: {
					title: "Taxa de aumento da fila [Multiplicador]",
					summary: "A taxa de aumento do custo de ampliar os espaços",
					points: ["É o multiplicador de quanto o custo de ampliar os espaços aumenta na enésima compra. O valor padrão é `1.2`.", "Com `1.0` o preço é sempre o mesmo; com `1.2` fica 20% mais caro a cada compra.", "Fórmula: preço base × taxa de aumento^quantidade de compras feitas", "O modo de aumentar é o mesmo da taxa de aumento da capacidade. Para se orientar sobre o multiplicador, consulte a tabela da capacidade."],
				},
				coinId: {
					title: "ID de moeda da fila",
					summary: "O ID da moeda usada para ampliar os espaços",
					points: ["Especifica o ID da moeda (coins) usada no preço de ampliação dos espaços de execução em sequência.", "Quando deixado em branco, ou quando é especificado um ID que não está na lista de moedas, a moeda principal (a primeira de coins) é usada."],
				},
				buyingLimit: {
					title: "Limite de compras da fila [Vezes]",
					summary: "A quantidade máxima de vezes que se pode comprar espaços",
					points: ["É o teto da quantidade de vezes que se pode comprar com uma moeda os espaços de execução em sequência.", "Se você o deixar em `0`, dá para comprar sem limite.", "Se você o deixar em `-1`, deixa de ser possível comprar.", "O aumento de espaços por uma recompensa fica fora deste teto."],
				},
			},
			links: { item: "item" },
		},
		levelCommonRatio: {
			title: "Taxa de crescimento da experiência [Multiplicador]",
			summary: "A taxa de aumento da dificuldade de subir de nível",
			points: [
				"É a taxa de crescimento da experiência necessária para chegar ao próximo nível conforme o nível de uma categoria sobe. O valor padrão é `1.05` e não dá para definir um valor menor que `1`.",
				"Aumentar este valor eleva a dificuldade. Se você o deixar em `1`, a experiência necessária é a mesma em qualquer nível.",
				"A experiência necessária para chegar ao próximo nível é (taxa de crescimento da experiência)^(nível atual-1). Os níveis são contados descartando as casas decimais.",
				"A experiência obtida depois de alcançar o teto (o nível máximo das categorias) é descartada.",
			],
			list: [
				["Taxa de crescimento da experiência", "Lv.1", "Lv.2", "Lv.10", "Lv.50", "Lv.99"],
				["1.00", "x1.00", "x1.00", "x1.00", "x1.00", "x1.00"],
				["1.02", "x1.00", "x1.02", "x1.20", "x2.64", "x6.96"],
				["1.05", "x1.00", "x1.05", "x1.55", "x10.92", "x119.28"],
				["1.10", "x1.00", "x1.10", "x2.36", "x106.72", "x1.1×10⁴"],
				["1.20", "x1.00", "x1.20", "x5.16", "x7583.70", "x5.8×10⁷"],
			],
			links: { category: "category" },
		},
		actionLevelLimit: {
			title: "Limite de nível das ações",
			summary: "Exigir o nível da categoria do atributo para executar uma ação",
			points: [
				"Quando está ativado, no início dos requisitos (requirements) de cada ação é acrescentado automaticamente o requisito \"que o nível da categoria do atributo seja igual ou superior ao nível daquela ação\".",
				"Quando nenhum atributo (attribute) está configurado, é usada a categoria à qual ela pertence.",
				"Quando numeric está desativado na categoria do atributo, ela não sobe de nível, então nada é acrescentado.",
				"O requisito acrescentado é escrito no carregamento do mundo, então na tela do reprodutor ele é exibido igual a um requisito comum.",
			],
			links: { action: "action", category: "category", requirement: "requirement" },
		},
		propertyRatio: {
			title: "Proporção das propriedades [Multiplicador]",
			summary: "Por quanto as propriedades são multiplicadas a cada 10 de diferença de nível",
			points: [
				"Define por quanto as propriedades são multiplicadas a cada `10` que a diferença entre o nível da categoria e o nível da ação se amplia. O valor padrão é `1.5` e não dá para definir um valor menor que `1`.",
				"O multiplicador é calculado como (proporção das propriedades)^(diferença de nível÷10). Quando a diferença de nível é `0`, é `1` vez e o valor configurado na ação é usado como está.",
				"O ataque e a experiência aumentam conforme este multiplicador, e a defesa (o dano recebido) e a velocidade (o tempo necessário) diminuem conforme o mesmo multiplicador.",
				"A precisão, a evasão, a taxa de sucesso e a recuperação são valores que ficam entre `0` e `100`%, então o multiplicador se aplica à proporção entre a parte que se concretiza e a que não. `0`% e `100`% não mudam, e nenhum valor intermediário passa de `100`%.",
				"Na defesa, na evasão e na velocidade o multiplicador age pela metade (uma diferença de nível de `20` equivale a uma diferença de `10` nas demais propriedades). A defesa e a evasão se aplicam em dobro, à taxa de ser atingido e ao dano recebido, e a velocidade se aplica a todas as demais propriedades como quantidade de execuções, então o efeito delas é enfraquecido para manter o equilíbrio.",
				"Uma referência é (a taxa de crescimento da experiência) elevada a `6.7`. Acima disso, subir de nível acelera quanto mais alto é o nível; abaixo disso, subir de nível na parte final leva mais tempo.",
				"Se você o deixar em `1`, a influência da diferença de nível desaparece. Aumentar o valor torna mais bruscas as vantagens e desvantagens vindas da diferença de nível.",
			],
			list: [
				["Proporção das propriedades", "Diferença de nível -20", "Diferença de nível -10", "Diferença de nível 0", "Diferença de nível +10", "Diferença de nível +20"],
				["`1`", "`x1.00`", "`x1.00`", "`x1.00`", "`x1.00`", "`x1.00`"],
				["`1.5`", "`x0.44`", "`x0.67`", "`x1.00`", "`x1.50`", "`x2.25`"],
				["`2`", "`x0.25`", "`x0.50`", "`x1.00`", "`x2.00`", "`x4.00`"],
				["`3`", "`x0.11`", "`x0.33`", "`x1.00`", "`x3.00`", "`x9.00`"],
			],
			links: { action: "action", property: "property" },
		},
		defaultCombat: { ...combat, summary: "Os parâmetros de combate padrão comuns a todas as ações", points: ["São as correções de combate básicas do lado do jogador, aplicadas em comum a todas as ações do tipo `stamina`.", "Os valores de combate (property) de cada ação são os do lado do oponente, então agem no sentido de anular os valores configurados aqui."], links: { action: "action" } },
	},
	options: {
		label: "general",
	},
};

export const overview: Type.Overview = {
	title: "Visão geral",
	summary: "As informações básicas do mundo e as informações do autor",
	points: ["São os campos que explicam o conteúdo do mundo.", "Defina-os de modo que fiquem claros quando um usuário escolhe o mundo.", "Fora a URL, estas configurações não afetam o andamento do jogo."],
	children: {
		information: information,
		version: {
			title: "Versão",
			summary: "O número de versão do mundo",
			points: ["Digite um número de `0` ou mais (inteiro ou decimal). O valor padrão é `0`.", "Em geral, a parte inteira representa a versão maior e a parte decimal, a versão menor.", "A versão do desenvolvimento (development) é a versão do editor, então é outra coisa."],
		},
		author: {
			title: "Nome do autor",
			summary: "O nome do autor do mundo",
			points: ["Digite um nome de usuário ou um apelido.", "Deve ter de 3 a 20 caracteres e só podem ser usadas letras e algarismos de meia largura, espaços e `!` `?` `.` `,` `-`."],
		},
		homepage: {
			title: "Página inicial",
			summary: "A URL do site do autor",
			points: ["Se você tiver página inicial própria ou redes sociais, digite a URL delas.", "O jogador pode conferir esta URL pelo link.", "Se não houver nenhuma, deixe em branco. O valor inicial é `https://`."],
		},
		url: {
			title: "URL",
			summary: "A URL do jogo",
			points: ["Digite a URL onde o jogo deste mundo é colocado.", "Digite a URL de uma página inicial como index.html, incluindo o domínio.", "É um campo para deixar registrado onde o mundo foi colocado. Se o lugar onde colocá-lo não estiver decidido, deixe em branco.", "Um mundo publicado funciona como PWA. Um PWA é um recurso que permite instalá-lo e que funcione como um aplicativo com o qual também dá para jogar off-line.", "As configurações do PWA são criadas com caminhos relativos, então ele funciona como está no lugar onde for colocado, independentemente do valor deste campo."],
		},
		estimatedPlayingTime: {
			title: "Tempo de jogo estimado",
			summary: "O tempo aproximado até concluir a partida do mundo",
			points: ["É o tempo de jogo estimado necessário para concluir a partida do mundo.", "Dá para conferi-lo como orientação quando o jogador joga.", "É apenas um tempo de referência, e não há uma definição clara do que conta como concluir o mundo."],
			children: {
				value: {
					title: "Valor",
					summary: "O número do tempo de jogo",
					points: ["Define-se com um inteiro de `1` ou mais. O valor padrão é `1`."],
				},
				unit: {
					title: "Unidade",
					summary: "A unidade de tempo (horas, minutos e assim por diante)",
					points: ["Escolhe-se entre segundos, minutos, horas, dias, anos, séculos e infinito. O valor padrão é dias.", "Infinito é usado para os mundos que não têm fim."],
				},
			},
		},
	},
	options: {
		label: "overview",
	},
};

// 固定イベントは5つのタイミングが同じ項目を並べるため、そのままでは1ページ内で見出しが重複し、
// 目次とエディターからのリンク（label無しノードは?id=<title>のアンカーになる）がどれを指すか分からなくなる。
// 直下の項目の見出しにタイミング名を添えて区別できるようにする
const toTimingChildren = (children: { [key: string]: Markdown }, timing: string): Type.Event["children"] => {
	const entries = Object.entries(children).map(([key, child]) => [key, { ...child, title: `${child.title}（${timing}）` }]);
	return Object.fromEntries(entries) as Type.Event["children"];
};

// タイミングごとの固定イベント。項目の説明はタスクと共通で、タイミング固有の説明だけ差し替える
const toUniqueEvent = (title: string, summary: string, points: string[], timingPoints: string[]): Type.Event => ({
	title,
	summary,
	points,
	children: toTimingChildren({
		// Markdown.childrenは「子ノードの辞書」と「単一ノード」の両方を許す型のため、辞書として扱うことを明示する
		...(task.children as { [key: string]: Markdown }),
		category: {
			title: "Categoria",
			summary: "Não é usado em um evento",
			points: ["Não são exibidos nas missões nem na lista de tarefas, portanto a categoria à qual pertencem não é especificada.", "O campo de entrada não é exibido no editor."],
		},
		timing: {
			title: "Momento",
			summary: "O momento em que o evento dispara (fixo)",
			points: timingPoints,
		},
		unlocked: {
			title: "Estado de exibição inicial",
			summary: "O estado de exibição inicial do ícone do evento (o disparo é decidido pelo momento, e esta configuração não o dispara)",
			points: ["As condições de disparo de um evento são decididas pelo momento, e este campo afeta apenas a aparência do ícone.", "secreted: O ícone não é exibido até que todos os requirements sejam atendidos (o disparo em si ocorre no seu momento).", "hidden e hinted: O ícone é exibido com um traço sobre ele, como ainda não desbloqueado.", "released: O traço desaparece e ele é exibido como já desbloqueado."],
		},
		requirements: { ...requirement, options: { ...requirement.options, array: true }, summary: "As condições para obter a recompensa" },
		acquisitions: { ...acquisition, options: { ...acquisition.options, array: true }, summary: "A recompensa recebida automaticamente quando o evento dispara" },
		group: {
			title: "Grupo de tarefas",
			summary: "Não é usado em um evento",
			points: ["Não são exibidos nas missões nem na lista de tarefas, portanto o grupo não é especificado.", "O campo de entrada não é exibido no editor."],
		},
	}, title),
});

export const unique: Type.Unique = {
	title: "Evento fixo",
	summary: "As mensagens e recompensas que são ativadas em momentos determinados",
	points: ["É ativado em momentos determinados, como ao abrir o mundo pela primeira vez ou ao chegar ao fim de jogo, e abre uma tela própria.", "Há um preparado para cada momento, e não dá para acrescentar nem excluir. Os momentos que você não usar ficam em branco.", "Não são exibidos nas missões nem na lista de tarefas. O que é alcançado ao cumprir requisitos se configura com uma tarefa.", "Quando o momento se concretiza, o evento é ativado e abre uma tela própria para exibir o conteúdo.", "A recompensa é obtida automaticamente no mesmo instante da ativação. Não há operação de recebimento nem fita como em uma tarefa, e o teto de tipos de itens que se pode ter também não é verificado.", "Quando há requisitos (requirements) configurados, a recompensa só é obtida se esses requisitos estivessem cumpridos no momento da ativação. Se não houver nenhum configurado, ela é obtida a cada ativação.", "Os requisitos apenas são conferidos para ver se estão cumpridos, então os itens não diminuem mesmo que se configure uma probabilidade de consumo (chance).", "Na ativação você pode alterar o nível de uma categoria, a quantidade de execuções de uma ação e a quantidade de itens em posse. Colocando uma quantidade negativa, dá para usá-lo também de formas como fazer perder os pertences no fim de jogo.", "Se você deixar o nome, a descrição e o ícone em branco, são usados o texto e o ícone padrão embutidos no reprodutor."],
	list: [
		["Momento", "Requisito de ativação", "Repetição"],
		["`comebacked`", "Quando você retorna após 1 segundo ou mais offline e ao menos uma ação foi concluída enquanto você estava ausente", "Muitas vezes"],
		["`gameovered`", "Quando o vigor do jogador se esgota no combate", "Muitas vezes"],
		["`welcomed`", "Quando este mundo é iniciado pela primeira vez", "Só uma vez"],
		["`completed`", "Quando o nível de todas as categorias alcança o valor máximo (maxCategoryLevels)", "Só uma vez"],
		["`obtained`", "Quando uma ação do tipo single (um baú do tesouro, por exemplo) é concluída e conferida", "Muitas vezes"],
	],
	links: { task: "task" },
	children: {
		comebacked: toUniqueEvent("Ao retornar", "É ativado ao retornar de estar offline", ["É ativado quando você retorna após 1 segundo ou mais offline e ao menos uma ação foi concluída enquanto você estava ausente. Se nenhuma execução tiver terminado, ele não é ativado.", "É exibido junto com o resumo do progresso do tempo em que você esteve ausente."], ["Está fixado como `comebacked` e não dá para editar.", "É ativado quantas vezes for, toda vez que você retorna."]),
		gameovered: toUniqueEvent("No fim de jogo", "É ativado quando o vigor se esgota no combate", ["É ativado quando o vigor do jogador se esgota no combate.", "Ao mesmo tempo, todas as ações em execução param e todas as reservas em espera são descartadas.", "Colocando uma quantidade negativa na recompensa, dá para dar um preço ao fim de jogo."], ["Está fixado como `gameovered` e não dá para editar.", "É ativado quantas vezes for, toda vez que se chega ao fim de jogo."]),
		welcomed: toUniqueEvent("No primeiro início", "É ativado ao abrir o mundo pela primeira vez", ["É ativado quando este mundo é iniciado pela primeira vez.", "Serve para explicar a ambientação do mundo e para entregar os preparativos dados no começo."], ["Está fixado como `welcomed` e não dá para editar.", "É ativado uma única vez, no primeiro início."]),
		completed: toUniqueEvent("Ao concluir o jogo", "É ativado quando todas as categorias alcançam o nível máximo", ["É ativado quando o nível de todas as categorias alcança o valor máximo (maxCategoryLevels).", "As categorias que não são numeric ficam de fora da verificação. Por isso ele não é ativado em um mundo que não tem nenhuma categoria numérica."], ["Está fixado como `completed` e não dá para editar.", "É ativado uma única vez, quando os requisitos são cumpridos."]),
		obtained: toUniqueEvent("Ao concluir uma ação avulsa", "É ativado ao concluir uma ação avulsa, como um baú do tesouro", ["É ativado quando uma ação do tipo single (um baú do tesouro, por exemplo) é concluída e conferida.", "Além da recompensa da própria ação, dá para somar a recompensa configurada aqui."], ["Está fixado como `obtained` e não dá para editar.", "É ativado quantas vezes for, toda vez que uma ação avulsa é concluída."]),
	},
	options: {
		label: "unique",
	},
};

// タスク・変化イベント・固定イベントをまとめたイベント全体
export const events: Type.Events = {
	title: "Evento",
	summary: "O conjunto de eventos do mundo, reunindo as tarefas, os eventos de mudança e os eventos fixos",
	points: ["Os eventos de um mundo são compostos por três tipos: tarefas (tasks), eventos de mudança (changed) e eventos fixos (unique).", "Uma tarefa é uma missão que é alcançada ao se cumprirem os requisitos.", "Um evento de mudança é um evento de processamento interno, que não aparece na tela e é ativado repetidamente tendo como gatilho o aumento de uma quantidade.", "Um evento fixo é uma vaga preparada uma por momento, que não dá para acrescentar nem excluir."],
	list: expandList("Tipo", [task, changed, unique], "Descrição"),
	children: {
		tasks: { ...task, options: { ...task.options, array: true } },
		changed: { ...changed, options: { ...changed.options, array: true } },
		unique: unique,
	},
	options: {
		label: "events",
		linkedList: true,
	},
};

export const basic: Type.Basic = {
	title: "Configurações básicas",
	summary: "Os campos de configuração básicos do mundo em geral",
	points: ["Define o nome, a descrição, o plano de fundo, a moeda, a capacidade, o nível máximo das categorias, a taxa de crescimento da experiência, os parâmetros de combate padrão e assim por diante do mundo.", "Estas configurações afetam o mundo inteiro."],
	list: expandList("Nome", [overview, general, design, development], "Descrição"),
	children: {
		overview: overview,
		general: general,
		design: design,
		development: development,
	},
	options: {
		label: "basic",
		linkedList: true,
	},
};

// world


export const world: Type.World = {
	title: "Mundo",
	summary: "As configurações e a estrutura de dados de todo o mundo do jogo",
	points: ["São os dados de definição do jogo, carregados no reprodutor para jogar.", "Com as configurações você pode criar o jogo idle que tiver em mente.", "Um mundo contém as configurações básicas, os seis tipos de categoria, ação, item, habilidade, grupo e predefinição, e ainda os eventos."],
	children: {
		basic: basic,
		categories: { ...category, options: { ...category.options, array: true } },
		actions: { ...action, options: { ...action.options, array: true } },
		items: { ...item, options: { ...item.options, array: true } },
		skills: { ...skill, options: { ...skill.options, array: true } },
		groups: { ...group, options: { ...group.options, array: true } },
		events: events,
		presets: { ...preset, options: { ...preset.options, array: true } },
	},
	options: {
		label: "world",
	},
};

// editor

export const editor: Markdown = {
	title: "Editor",
	summary: "A explicação sobre como usar o editor e sobre a estrutura de um mundo",
	list: expandList("Nome", [world, basic, type, events, component, miscellaneous], "Descrição"),
	options: {
		label: "editor",
		linkedList: true,
		directory: "editor",
	},
};

// list

// prettier-ignore
export const tree: Tree = {
	title: editor,
	twig: [
		{ title: world },
		{ title: basic, twig: [overview, general, design, development] },
		{ title: type, twig: [category, action, item, skill, group, preset] },
		{ title: events, twig: [task, changed, unique] },
		{ title: component, twig: [information, requirement, acquisition, combat, property] },
		{ title: miscellaneous, twig: [translation] }
	],
};
