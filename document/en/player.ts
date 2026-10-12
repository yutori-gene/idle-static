import { Markdown, Tree, expandList } from "~d/type/markdownType";

// miscellaneous

export const language: Markdown = {
	title: "Language",
	summary: "Changing the language used for the display",
	options: {
		preset: "language",
	},
};

export const group: Markdown = {
	title: "Group",
	summary: "A classification that bundles categories, actions, and items together",
	options: {
		preset: "group",
	},
};

export const event: Markdown = {
	title: "Event",
	summary: "Checking the content of an event that has occurred and claiming its reward",
	options: {
		preset: "event",
		label: "event",
	},
};

export const miscellaneous: Markdown = {
	title: "Additional Notes",
	summary: "The columns that do not belong to a particular type",
	points: ["The columns of the events and the groups open on the right from any level.", "The column of the language opens from the column of the settings and from the column of the welcome event."],
	children: { event: event, group: group, language: language },
	options: {
		preset: "miscellaneous",
		label: "miscellaneous",
	},
};

// world

export const debug: Markdown = {
	title: "Debug",
	summary: "Providing the tools for testing a world",
	options: {
		preset: "debug",
	},
};

export const config: Markdown = {
	title: "Settings",
	summary: "Changing the settings of this game and managing the save data",
	options: {
		preset: "config",
	},
};

export const statistics: Markdown = {
	title: "Statistics",
	summary: "Showing the totals recorded through play",
	options: {
		preset: "statistics",
	},
};

export const overview: Markdown = {
	title: "Overview",
	summary: "Showing the overview of this world and of the console running it",
	options: {
		preset: "overview",
	},
};

export const world: Markdown = {
	title: "World",
	summary: "Checking and setting the game as a whole",
	points: ["It opens from the world heading in the top column.", "The column of the debug appears only when it is started in debug mode."],
	children: { overview: overview, statistics: statistics, config: config, debug: debug },
	options: {
		preset: "world",
		label: "world",
	},
};

// property

export const calculation: Markdown = {
	title: "Calculation",
	summary: "The values of the properties applied to an action and their breakdown",
	options: {
		preset: "calculation",
	},
};

export const properties: Markdown = {
	title: "Property List",
	summary: "The list of the properties that belong to this category",
	options: {
		preset: "properties",
	},
};

export const property: Markdown = {
	title: "Property",
	summary: "The numbers that affect the result of an action",
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
	title: "Skill List",
	summary: "The list of the skills this element has",
	options: {
		preset: "skills",
	},
};

export const skill: Markdown = {
	title: "Skill",
	summary: "Adjusting the battle values for that turn alone when it activates during battle",
	children: { skills: skills },
	options: {
		label: "skill",
		preset: "skill",
	},
};

// item

export const trade: Markdown = {
	title: "Trade",
	summary: "Buying and selling this item",
	options: {
		preset: "trade",
	},
};

export const items: Markdown = {
	title: "Item List",
	summary: "The list of the items that belong to this category",
	options: {
		preset: "items",
	},
};

export const item: Markdown = {
	title: "Item",
	summary: "The belongings related to this category",
	children: { items: items, trade: trade },
	options: {
		preset: "item",
		label: "item",
	},
};

// action

export const act: Markdown = {
	title: "Act",
	summary: "Starting and stopping this action and showing its progress",
	options: {
		preset: "act",
	},
};

export const actions: Markdown = {
	title: "Action List",
	summary: "The list of the actions that belong to this category",
	options: {
		preset: "actions",
	},
};

export const action: Markdown = {
	title: "Action",
	summary: "The behaviour that can be executed in this category",
	children: { actions: actions, act: act },
	options: {
		preset: "action",
		label: "action",
	},
};

// category

export const tasks: Markdown = {
	title: "Task List",
	summary: "The list of the tasks set on this category",
	options: {
		preset: "tasks",
	},
};

export const category: Markdown = {
	title: "Category",
	summary: "What gathers various elements together",
	children: { tasks: tasks },
	options: {
		label: "category",
		preset: "category",
	},
};

// character

export const missions: Markdown = {
	title: "Missions",
	summary: "The list of the tasks of every category and of how far they are achieved",
	options: {
		preset: "missions",
	},
};

export const ability: Markdown = {
	title: "Ability",
	summary: "The list of the skills that can activate now, grouped by category",
	options: {
		preset: "ability",
	},
};

export const status: Markdown = {
	title: "Status",
	summary: "Showing the current state, such as the corrections applied to a category",
	options: {
		preset: "status",
	},
};

export const selling: Markdown = {
	title: "Selling",
	summary: "Choosing the items you own from a list and selling them all at once",
	options: {
		preset: "selling",
	},
};

export const inventory: Markdown = {
	title: "Inventory",
	summary: "The list of the items you hold, grouped by category",
	options: {
		preset: "inventory",
	},
};

export const activity: Markdown = {
	title: "Activity",
	summary: "The list of the actions that can be executed, grouped by category",
	options: {
		preset: "activity",
	},
};

export const character: Markdown = {
	title: "Character",
	summary: "Checking and operating the state of the protagonist",
	points: ["The columns lined up here are for looking at the whole across the categories.", "It opens from the character heading in the top column."],
	children: { activity: activity, inventory: inventory, selling: selling, status: status, ability: ability, missions: missions },
	options: {
		label: "character",
		preset: "character",
	},
};

export const player: Markdown = {
	title: "Player",
	summary: "The explanation of each column of the play screen",
	points: ["The screen takes the form of columns increasing from left to right, and the further right you go, the more detailed the content becomes.", "In the initial settings, the same explanation as here is shown as a hint at the bottom of each column.", "The hints can be hidden in the column of the settings."],
	list: expandList("Player", [character, category, action, item, skill, property, world, miscellaneous], "Description"),
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
