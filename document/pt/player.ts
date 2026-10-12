import { Markdown, Tree, expandList } from "~d/type/markdownType";

// miscellaneous

export const language: Markdown = {
	title: "Idioma",
	summary: "Alterar o idioma usado na exibição",
	options: {
		preset: "language",
	},
};

export const group: Markdown = {
	title: "Grupo",
	summary: "Uma classificação que reúne categorias, ações e itens entre si",
	options: {
		preset: "group",
	},
};

export const event: Markdown = {
	title: "Evento",
	summary: "Conferir o conteúdo de um evento ocorrido e receber a recompensa",
	options: {
		preset: "event",
		label: "event",
	},
};

export const miscellaneous: Markdown = {
	title: "Notas adicionais",
	summary: "As colunas que não pertencem a um tipo específico",
	points: ["As colunas dos eventos e dos grupos se abrem à direita a partir de qualquer nível.", "A coluna do idioma se abre a partir da coluna das configurações e da coluna do evento de boas-vindas."],
	children: { event: event, group: group, language: language },
	options: {
		preset: "miscellaneous",
		label: "miscellaneous",
	},
};

// world

export const debug: Markdown = {
	title: "Depuração",
	summary: "Oferecer as ferramentas para testar um mundo",
	options: {
		preset: "debug",
	},
};

export const config: Markdown = {
	title: "Configurações",
	summary: "Alterar as configurações deste jogo e gerenciar os dados salvos",
	options: {
		preset: "config",
	},
};

export const statistics: Markdown = {
	title: "Estatísticas",
	summary: "Exibir os totais registrados ao longo do jogo",
	options: {
		preset: "statistics",
	},
};

export const overview: Markdown = {
	title: "Visão geral",
	summary: "Exibir a visão geral deste mundo e do console que o executa",
	options: {
		preset: "overview",
	},
};

export const world: Markdown = {
	title: "Mundo",
	summary: "Conferência e configuração do jogo como um todo",
	points: ["Abre-se pelo cabeçalho do mundo na coluna do topo.", "A coluna da depuração só aparece quando o jogo é iniciado em modo de depuração."],
	children: { overview: overview, statistics: statistics, config: config, debug: debug },
	options: {
		preset: "world",
		label: "world",
	},
};

// property

export const calculation: Markdown = {
	title: "Cálculo",
	summary: "Os valores das propriedades aplicados a uma ação e o detalhamento deles",
	options: {
		preset: "calculation",
	},
};

export const properties: Markdown = {
	title: "Lista de propriedades",
	summary: "A lista das propriedades que pertencem a esta categoria",
	options: {
		preset: "properties",
	},
};

export const property: Markdown = {
	title: "Propriedade",
	summary: "Os números que influenciam o resultado de uma ação",
	// properties / calculation は label を持たない同ページ内の節なので、
	// 一覧表・リンクは作らず children の見出しとして展開する（item・action と同じ形）
	children: { properties: properties, calculation: calculation },
	options: {
		label: "property",
		preset: "property",
	},
};

// skill

export const skills: Markdown = {
	title: "Lista de habilidades",
	summary: "A lista das habilidades que este elemento possui",
	options: {
		preset: "skills",
	},
};

export const skill: Markdown = {
	title: "Habilidade",
	summary: "Ao ser ativada durante o combate, ajusta os valores de combate apenas naquele turno",
	children: { skills: skills },
	options: {
		label: "skill",
		preset: "skill",
	},
};

// item

export const trade: Markdown = {
	title: "Troca",
	summary: "Comprar e vender este item",
	options: {
		preset: "trade",
	},
};

export const items: Markdown = {
	title: "Lista de itens",
	summary: "A lista dos itens que pertencem a esta categoria",
	options: {
		preset: "items",
	},
};

export const item: Markdown = {
	title: "Item",
	summary: "Os pertences relacionados a esta categoria",
	children: { items: items, trade: trade },
	options: {
		preset: "item",
		label: "item",
	},
};

// action

export const act: Markdown = {
	title: "Executar",
	summary: "Iniciar e parar esta ação e exibir o andamento dela",
	options: {
		preset: "act",
	},
};

export const actions: Markdown = {
	title: "Lista de ações",
	summary: "A lista das ações que pertencem a esta categoria",
	options: {
		preset: "actions",
	},
};

export const action: Markdown = {
	title: "Ação",
	summary: "O comportamento que pode ser executado nesta categoria",
	children: { actions: actions, act: act },
	options: {
		preset: "action",
		label: "action",
	},
};

// category

export const tasks: Markdown = {
	title: "Lista de tarefas",
	summary: "A lista das tarefas definidas nesta categoria",
	options: {
		preset: "tasks",
	},
};

export const category: Markdown = {
	title: "Categoria",
	summary: "O que reúne diversos elementos",
	children: { tasks: tasks },
	options: {
		label: "category",
		preset: "category",
	},
};

// character

export const missions: Markdown = {
	title: "Missões",
	summary: "A lista das tarefas de todas as categorias e do quanto foram cumpridas",
	options: {
		preset: "missions",
	},
};

export const ability: Markdown = {
	title: "Aptidão",
	summary: "A lista das habilidades que podem ser ativadas agora, agrupadas por categoria",
	options: {
		preset: "ability",
	},
};

export const status: Markdown = {
	title: "Estado",
	summary: "Exibir o estado atual, como as correções aplicadas a uma categoria",
	options: {
		preset: "status",
	},
};

export const selling: Markdown = {
	title: "Venda",
	summary: "Escolher em uma lista os itens que você possui e vendê-los de uma vez",
	options: {
		preset: "selling",
	},
};

export const inventory: Markdown = {
	title: "Inventário",
	summary: "A lista dos itens que você tem, agrupados por categoria",
	options: {
		preset: "inventory",
	},
};

export const activity: Markdown = {
	title: "Atividade",
	summary: "A lista das ações que podem ser executadas, agrupadas por categoria",
	options: {
		preset: "activity",
	},
};

export const character: Markdown = {
	title: "Personagem",
	summary: "Conferência e manejo da situação do protagonista",
	points: ["As colunas alinhadas aqui servem para olhar o conjunto atravessando as categorias.", "Abre-se pelo cabeçalho do personagem na coluna do topo."],
	children: { activity: activity, inventory: inventory, selling: selling, status: status, ability: ability, missions: missions },
	options: {
		label: "character",
		preset: "character",
	},
};

export const player: Markdown = {
	title: "Reprodutor",
	summary: "A explicação de cada coluna da tela de jogo",
	points: ["A tela tem a forma de colunas que aumentam da esquerda para a direita e, quanto mais você avança para a direita, mais detalhado fica o conteúdo.", "Nas configurações iniciais, na parte de baixo de cada coluna é exibida como dica a mesma explicação que há aqui.", "As dicas podem ser ocultadas na coluna das configurações."],
	list: expandList("Reprodutor", [character, category, action, item, skill, property, world, miscellaneous], "Descrição"),
	// children: { character: character, category: category, action: action, item: item, skill: skill, property: property, world: world, miscellaneous: miscellaneous },
	options: {
		preset: "player",
		label: "player",
		linkedList: true,
		directory: "player",
	},
};

// list

// prettier-ignore
export const tree: Tree = {
	title: player,
	twig: [
		character,
		category,
		action,
		item,
		skill,
		property,
		world,
		miscellaneous
	],
};
