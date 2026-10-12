import { Markdown, Tree, expandList } from "~d/type/markdownType";

// miscellaneous

export const language: Markdown = {
	title: "语言",
	summary: "更改显示所使用的语言",
	options: {
		preset: "language",
	},
};

export const group: Markdown = {
	title: "分组",
	summary: "横跨类别、动作、物品进行归拢的分类",
	options: {
		preset: "group",
	},
};

export const event: Markdown = {
	title: "事件",
	summary: "确认已发生事件的内容并领取奖励",
	options: {
		preset: "event",
		label: "event",
	},
};

export const miscellaneous: Markdown = {
	title: "补充事项",
	summary: "不属于特定类型的栏",
	points: ["事件和分组的栏，可以从任何层级向右侧打开。", "语言的栏，可以从设置的栏和欢迎事件的栏打开。"],
	children: { event: event, group: group, language: language },
	options: {
		preset: "miscellaneous",
		label: "miscellaneous",
	},
};

// world

export const debug: Markdown = {
	title: "调试",
	summary: "提供用于测试世界的工具",
	options: {
		preset: "debug",
	},
};

export const config: Markdown = {
	title: "设置",
	summary: "进行本游戏的设置更改与存档数据的管理",
	options: {
		preset: "config",
	},
};

export const statistics: Markdown = {
	title: "统计",
	summary: "显示通过游玩记录下来的合计",
	options: {
		preset: "statistics",
	},
};

export const overview: Markdown = {
	title: "概览",
	summary: "显示该世界及运行它的控制台的概览",
	options: {
		preset: "overview",
	},
};

export const world: Markdown = {
	title: "世界",
	summary: "游戏整体的确认与设置",
	points: ["从顶层栏的世界标题打开。", "调试的栏只有在以调试模式启动时才会出现。"],
	children: { overview: overview, statistics: statistics, config: config, debug: debug },
	options: {
		preset: "world",
		label: "world",
	},
};

// property

export const calculation: Markdown = {
	title: "计算",
	summary: "反映到动作上的属性的值及其明细",
	options: {
		preset: "calculation",
	},
};

export const properties: Markdown = {
	title: "属性列表",
	summary: "属于该类别的属性的列表",
	options: {
		preset: "properties",
	},
};

export const property: Markdown = {
	title: "属性",
	summary: "影响动作结果的数值",
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
	title: "技能列表",
	summary: "该要素所拥有的技能的列表",
	options: {
		preset: "skills",
	},
};

export const skill: Markdown = {
	title: "技能",
	summary: "在战斗中发动时，仅在该回合修正战斗数值",
	children: { skills: skills },
	options: {
		label: "skill",
		preset: "skill",
	},
};

// item

export const trade: Markdown = {
	title: "交易",
	summary: "购买或出售该物品",
	options: {
		preset: "trade",
	},
};

export const items: Markdown = {
	title: "物品列表",
	summary: "属于该类别的物品的列表",
	options: {
		preset: "items",
	},
};

export const item: Markdown = {
	title: "物品",
	summary: "与该类别相关的持有物",
	children: { items: items, trade: trade },
	options: {
		preset: "item",
		label: "item",
	},
};

// action

export const act: Markdown = {
	title: "执行",
	summary: "进行该动作的开始与停止，并显示进度",
	options: {
		preset: "act",
	},
};

export const actions: Markdown = {
	title: "动作列表",
	summary: "属于该类别的动作的列表",
	options: {
		preset: "actions",
	},
};

export const action: Markdown = {
	title: "动作",
	summary: "该类别中可以执行的行为",
	children: { actions: actions, act: act },
	options: {
		preset: "action",
		label: "action",
	},
};

// category

export const tasks: Markdown = {
	title: "任务列表",
	summary: "该类别中设置的任务的列表",
	options: {
		preset: "tasks",
	},
};

export const category: Markdown = {
	title: "类别",
	summary: "将各种要素归拢起来的单位",
	children: { tasks: tasks },
	options: {
		label: "category",
		preset: "category",
	},
};

// character

export const missions: Markdown = {
	title: "使命",
	summary: "所有类别的任务及其达成情况的列表",
	options: {
		preset: "missions",
	},
};

export const ability: Markdown = {
	title: "能力",
	summary: "按类别分组的、当前可发动的技能的列表",
	options: {
		preset: "ability",
	},
};

export const status: Markdown = {
	title: "状态",
	summary: "显示应用于类别的补正等当前状态",
	options: {
		preset: "status",
	},
};

export const selling: Markdown = {
	title: "出售",
	summary: "从列表中选出所拥有的物品，一并出售",
	options: {
		preset: "selling",
	},
};

export const inventory: Markdown = {
	title: "库存",
	summary: "按类别分组的、所持有的物品的列表",
	options: {
		preset: "inventory",
	},
};

export const activity: Markdown = {
	title: "活动",
	summary: "按类别分组的、可执行的动作的列表",
	options: {
		preset: "activity",
	},
};

export const character: Markdown = {
	title: "角色",
	summary: "主人公状况的确认与操作",
	points: ["排列在这里的栏，是为了横跨类别整体查看而设的。", "从顶层栏的角色标题打开。"],
	children: { activity: activity, inventory: inventory, selling: selling, status: status, ability: ability, missions: missions },
	options: {
		label: "character",
		preset: "character",
	},
};

export const player: Markdown = {
	title: "运行器",
	summary: "游玩画面各栏的说明",
	points: ["画面呈现为栏从左向右不断增加的形式，越往右内容越细致。", "在初始设置下，各栏的最下方会将与此处相同的说明作为提示显示出来。", "提示可以在设置的栏中隐藏。"],
	list: expandList("运行器", [character, category, action, item, skill, property, world, miscellaneous], "说明"),
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
