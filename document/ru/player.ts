import { Markdown, Tree, expandList } from "~d/type/markdownType";

// miscellaneous

export const language: Markdown = {
	title: "Язык",
	summary: "Смена языка, используемого для отображения",
	options: {
		preset: "language",
	},
};

export const group: Markdown = {
	title: "Группа",
	summary: "Классификация, объединяющая категории, действия и предметы",
	options: {
		preset: "group",
	},
};

export const event: Markdown = {
	title: "Событие",
	summary: "Просмотр содержимого произошедшего события и получение награды",
	options: {
		preset: "event",
		label: "event",
	},
};

export const miscellaneous: Markdown = {
	title: "Дополнения",
	summary: "Столбцы, не относящиеся к какому-либо определённому типу",
	points: ["Столбцы событий и групп открываются справа с любого уровня.", "Столбец языка открывается из столбца настроек и из столбца приветственного события."],
	children: { event: event, group: group, language: language },
	options: {
		preset: "miscellaneous",
		label: "miscellaneous",
	},
};

// world

export const debug: Markdown = {
	title: "Отладка",
	summary: "Предоставление инструментов для проверки мира",
	options: {
		preset: "debug",
	},
};

export const config: Markdown = {
	title: "Настройки",
	summary: "Изменение настроек этой игры и управление данными сохранения",
	options: {
		preset: "config",
	},
};

export const statistics: Markdown = {
	title: "Статистика",
	summary: "Показ итогов, записанных за время игры",
	options: {
		preset: "statistics",
	},
};

export const overview: Markdown = {
	title: "Обзор",
	summary: "Показ обзора этого мира и консоли, которая его выполняет",
	options: {
		preset: "overview",
	},
};

export const world: Markdown = {
	title: "Мир",
	summary: "Просмотр и настройка игры в целом",
	points: ["Открывается по заголовку мира в верхнем столбце.", "Столбец отладки появляется, только когда игра запущена в режиме отладки."],
	children: { overview: overview, statistics: statistics, config: config, debug: debug },
	options: {
		preset: "world",
		label: "world",
	},
};

// property

export const calculation: Markdown = {
	title: "Расчёт",
	summary: "Значения свойств, применённые к действию, и их разбивка",
	options: {
		preset: "calculation",
	},
};

export const properties: Markdown = {
	title: "Список свойств",
	summary: "Список свойств, относящихся к этой категории",
	options: {
		preset: "properties",
	},
};

export const property: Markdown = {
	title: "Свойство",
	summary: "Числа, влияющие на результат действия",
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
	title: "Список навыков",
	summary: "Список навыков, которыми обладает этот элемент",
	options: {
		preset: "skills",
	},
};

export const skill: Markdown = {
	title: "Навык",
	summary: "При срабатывании в бою изменяет боевые значения только на этот ход",
	children: { skills: skills },
	options: {
		label: "skill",
		preset: "skill",
	},
};

// item

export const trade: Markdown = {
	title: "Обмен",
	summary: "Покупка и продажа этого предмета",
	options: {
		preset: "trade",
	},
};

export const items: Markdown = {
	title: "Список предметов",
	summary: "Список предметов, относящихся к этой категории",
	options: {
		preset: "items",
	},
};

export const item: Markdown = {
	title: "Предмет",
	summary: "Пожитки, связанные с этой категорией",
	children: { items: items, trade: trade },
	options: {
		preset: "item",
		label: "item",
	},
};

// action

export const act: Markdown = {
	title: "Выполнить",
	summary: "Запуск и остановка этого действия и показ его хода",
	options: {
		preset: "act",
	},
};

export const actions: Markdown = {
	title: "Список действий",
	summary: "Список действий, относящихся к этой категории",
	options: {
		preset: "actions",
	},
};

export const action: Markdown = {
	title: "Действие",
	summary: "Поведение, которое можно выполнять в этой категории",
	children: { actions: actions, act: act },
	options: {
		preset: "action",
		label: "action",
	},
};

// category

export const tasks: Markdown = {
	title: "Список задач",
	summary: "Список задач, заданных для этой категории",
	options: {
		preset: "tasks",
	},
};

export const category: Markdown = {
	title: "Категория",
	summary: "То, что собирает воедино различные элементы",
	children: { tasks: tasks },
	options: {
		label: "category",
		preset: "category",
	},
};

// character

export const missions: Markdown = {
	title: "Миссии",
	summary: "Список задач всех категорий и того, насколько они выполнены",
	options: {
		preset: "missions",
	},
};

export const ability: Markdown = {
	title: "Способность",
	summary: "Список навыков, которые могут сработать сейчас, сгруппированных по категориям",
	options: {
		preset: "ability",
	},
};

export const status: Markdown = {
	title: "Состояние",
	summary: "Показ текущего состояния, включая поправки, применённые к категории",
	options: {
		preset: "status",
	},
};

export const selling: Markdown = {
	title: "Продажа",
	summary: "Выбор имеющихся у вас предметов из списка и продажа их разом",
	options: {
		preset: "selling",
	},
};

export const inventory: Markdown = {
	title: "Инвентарь",
	summary: "Список предметов, которые у вас есть, сгруппированных по категориям",
	options: {
		preset: "inventory",
	},
};

export const activity: Markdown = {
	title: "Активность",
	summary: "Список действий, которые можно выполнить, сгруппированных по категориям",
	options: {
		preset: "activity",
	},
};

export const character: Markdown = {
	title: "Персонаж",
	summary: "Просмотр положения главного героя и управление им",
	points: ["Столбцы, выстроенные здесь, служат для того, чтобы охватить всё целиком поверх категорий.", "Открывается по заголовку персонажа в верхнем столбце."],
	children: { activity: activity, inventory: inventory, selling: selling, status: status, ability: ability, missions: missions },
	options: {
		label: "character",
		preset: "character",
	},
};

export const player: Markdown = {
	title: "Плеер",
	summary: "Описание каждого столбца игрового экрана",
	points: ["Экран устроен так, что столбцы прибавляются слева направо, и чем дальше вправо, тем подробнее содержимое.", "При начальных настройках внизу каждого столбца в виде подсказки показывается то же описание, что и здесь.", "Подсказки можно скрыть в столбце настроек."],
	list: expandList("Плеер", [character, category, action, item, skill, property, world, miscellaneous], "Описание"),
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
