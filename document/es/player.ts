import { Markdown, Tree, expandList } from "~d/type/markdownType";

// miscellaneous

export const language: Markdown = {
	title: "Idioma",
	summary: "Cambiar el idioma que se usa en la pantalla",
	options: {
		preset: "language",
	},
};

export const group: Markdown = {
	title: "Grupo",
	summary: "Una clasificación que agrupa categorías, acciones y artículos entre sí",
	options: {
		preset: "group",
	},
};

export const event: Markdown = {
	title: "Evento",
	summary: "Consultar el contenido de un evento ocurrido y recibir su recompensa",
	options: {
		preset: "event",
		label: "event",
	},
};

export const miscellaneous: Markdown = {
	title: "Notas adicionales",
	summary: "Las columnas que no pertenecen a un tipo concreto",
	points: ["Las columnas de los eventos y de los grupos se abren a la derecha desde cualquier nivel.", "La columna del idioma se abre desde la columna de los ajustes y desde la columna del evento de bienvenida."],
	children: { event: event, group: group, language: language },
	options: {
		preset: "miscellaneous",
		label: "miscellaneous",
	},
};

// world

export const debug: Markdown = {
	title: "Depuración",
	summary: "Ofrecer las herramientas para probar un mundo",
	options: {
		preset: "debug",
	},
};

export const config: Markdown = {
	title: "Ajustes",
	summary: "Cambiar los ajustes de este juego y gestionar los datos guardados",
	options: {
		preset: "config",
	},
};

export const statistics: Markdown = {
	title: "Estadísticas",
	summary: "Mostrar los totales registrados a lo largo del juego",
	options: {
		preset: "statistics",
	},
};

export const overview: Markdown = {
	title: "Resumen",
	summary: "Mostrar el resumen de este mundo y de la consola que lo ejecuta",
	options: {
		preset: "overview",
	},
};

export const world: Markdown = {
	title: "Mundo",
	summary: "Consulta y ajuste del juego en su conjunto",
	points: ["Se abre desde el encabezado del mundo de la columna superior.", "La columna de la depuración solo aparece cuando se inicia en modo de depuración."],
	children: { overview: overview, statistics: statistics, config: config, debug: debug },
	options: {
		preset: "world",
		label: "world",
	},
};

// property

export const calculation: Markdown = {
	title: "Cálculo",
	summary: "Los valores de las propiedades aplicados a una acción y su desglose",
	options: {
		preset: "calculation",
	},
};

export const properties: Markdown = {
	title: "Lista de propiedades",
	summary: "La lista de las propiedades que pertenecen a esta categoría",
	options: {
		preset: "properties",
	},
};

export const property: Markdown = {
	title: "Propiedad",
	summary: "Los números que influyen en el resultado de una acción",
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
	summary: "La lista de las habilidades que tiene este elemento",
	options: {
		preset: "skills",
	},
};

export const skill: Markdown = {
	title: "Habilidad",
	summary: "Al activarse en combate, ajusta los valores de combate solo durante ese turno",
	children: { skills: skills },
	options: {
		label: "skill",
		preset: "skill",
	},
};

// item

export const trade: Markdown = {
	title: "Intercambio",
	summary: "Comprar y vender este artículo",
	options: {
		preset: "trade",
	},
};

export const items: Markdown = {
	title: "Lista de artículos",
	summary: "La lista de los artículos que pertenecen a esta categoría",
	options: {
		preset: "items",
	},
};

export const item: Markdown = {
	title: "Artículo",
	summary: "Las pertenencias relacionadas con esta categoría",
	children: { items: items, trade: trade },
	options: {
		preset: "item",
		label: "item",
	},
};

// action

export const act: Markdown = {
	title: "Ejecutar",
	summary: "Iniciar y detener esta acción y mostrar su avance",
	options: {
		preset: "act",
	},
};

export const actions: Markdown = {
	title: "Lista de acciones",
	summary: "La lista de las acciones que pertenecen a esta categoría",
	options: {
		preset: "actions",
	},
};

export const action: Markdown = {
	title: "Acción",
	summary: "El comportamiento que se puede ejecutar en esta categoría",
	children: { actions: actions, act: act },
	options: {
		preset: "action",
		label: "action",
	},
};

// category

export const tasks: Markdown = {
	title: "Lista de tareas",
	summary: "La lista de las tareas configuradas en esta categoría",
	options: {
		preset: "tasks",
	},
};

export const category: Markdown = {
	title: "Categoría",
	summary: "Lo que reúne diversos elementos",
	children: { tasks: tasks },
	options: {
		label: "category",
		preset: "category",
	},
};

// character

export const missions: Markdown = {
	title: "Misiones",
	summary: "La lista de las tareas de todas las categorías y de su grado de cumplimiento",
	options: {
		preset: "missions",
	},
};

export const ability: Markdown = {
	title: "Aptitud",
	summary: "La lista de las habilidades que pueden activarse ahora, agrupadas por categoría",
	options: {
		preset: "ability",
	},
};

export const status: Markdown = {
	title: "Estado",
	summary: "Mostrar el estado actual, como las correcciones aplicadas a una categoría",
	options: {
		preset: "status",
	},
};

export const selling: Markdown = {
	title: "Venta",
	summary: "Elegir de una lista los artículos que posees y venderlos de una vez",
	options: {
		preset: "selling",
	},
};

export const inventory: Markdown = {
	title: "Inventario",
	summary: "La lista de los artículos que tienes, agrupados por categoría",
	options: {
		preset: "inventory",
	},
};

export const activity: Markdown = {
	title: "Actividad",
	summary: "La lista de las acciones que se pueden ejecutar, agrupadas por categoría",
	options: {
		preset: "activity",
	},
};

export const character: Markdown = {
	title: "Personaje",
	summary: "Consulta y manejo de la situación del protagonista",
	points: ["Las columnas que se alinean aquí sirven para ver el conjunto atravesando las categorías.", "Se abre desde el encabezado del personaje de la columna superior."],
	children: { activity: activity, inventory: inventory, selling: selling, status: status, ability: ability, missions: missions },
	options: {
		label: "character",
		preset: "character",
	},
};

export const player: Markdown = {
	title: "Reproductor",
	summary: "La explicación de cada columna de la pantalla de juego",
	points: ["La pantalla adopta la forma de columnas que aumentan de izquierda a derecha y, cuanto más avanzas hacia la derecha, más detallado es el contenido.", "Con los ajustes iniciales, en la parte inferior de cada columna se muestra como pista la misma explicación que hay aquí.", "Las pistas pueden ocultarse en la columna de los ajustes."],
	list: expandList("Reproductor", [character, category, action, item, skill, property, world, miscellaneous], "Descripción"),
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
