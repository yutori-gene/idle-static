import { Markdown, Tree, expandList } from "~d/type/markdownType";

// miscellaneous

export const language: Markdown = {
	title: "言語",
	summary: "表示に使用する言語を変更する",
	options: {
		preset: "language",
	},
};

export const group: Markdown = {
	title: "グループ",
	summary: "カテゴリ・アクション・アイテムをまたいで束ねる分類",
	options: {
		preset: "group",
	},
};

export const event: Markdown = {
	title: "イベント",
	summary: "発生したイベントの内容を確認し、報酬を受け取る",
	options: {
		preset: "event",
		label: "event",
	},
};

export const miscellaneous: Markdown = {
	title: "補足事項",
	summary: "特定のタイプに属さないカラム",
	points: ["イベントとグループのカラムは、どの階層からでも右側に開きます。", "言語のカラムは設定のカラムと、歓迎イベントのカラムから開きます。"],
	children: { event: event, group: group, language: language },
	options: {
		preset: "miscellaneous",
		label: "miscellaneous",
	},
};

// world

export const debug: Markdown = {
	title: "デバッグ",
	summary: "ワールドをテストするためのツールを提供する",
	options: {
		preset: "debug",
	},
};

export const config: Markdown = {
	title: "設定",
	summary: "このゲームの設定変更と、セーブデータの管理を行う",
	options: {
		preset: "config",
	},
};

export const statistics: Markdown = {
	title: "統計",
	summary: "プレイを通じて記録された合計を表示",
	options: {
		preset: "statistics",
	},
};

export const overview: Markdown = {
	title: "概要",
	summary: "このワールドと、それを実行しているコンソールの概要を表示",
	options: {
		preset: "overview",
	},
};

export const world: Markdown = {
	title: "ワールド",
	summary: "ゲーム全体の確認と設定",
	points: ["トップのカラムのワールドの見出しから開きます。", "デバッグのカラムはデバッグモードで起動したときだけ現れます。"],
	children: { overview: overview, statistics: statistics, config: config, debug: debug },
	options: {
		preset: "world",
		label: "world",
	},
};

// property

export const calculation: Markdown = {
	title: "算出",
	summary: "アクションに反映されるプロパティの値と、その内訳",
	options: {
		preset: "calculation",
	},
};

export const properties: Markdown = {
	title: "プロパティ一覧",
	summary: "このカテゴリに属するプロパティの一覧",
	options: {
		preset: "properties",
	},
};

export const property: Markdown = {
	title: "プロパティ",
	summary: "アクションの結果に影響する数値",
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
	title: "スキル一覧",
	summary: "この要素が持つスキルの一覧",
	options: {
		preset: "skills",
	},
};

export const skill: Markdown = {
	title: "スキル",
	summary: "戦闘中に発動するとそのターンだけ戦闘値を補正する",
	children: { skills: skills },
	options: {
		label: "skill",
		preset: "skill",
	},
};

// item

export const trade: Markdown = {
	title: "交換",
	summary: "このアイテムを購入・売却する",
	options: {
		preset: "trade",
	},
};

export const items: Markdown = {
	title: "アイテム一覧",
	summary: "このカテゴリに属するアイテムの一覧",
	options: {
		preset: "items",
	},
};

export const item: Markdown = {
	title: "アイテム",
	summary: "このカテゴリに関わる持ち物",
	children: { items: items, trade: trade },
	options: {
		preset: "item",
		label: "item",
	},
};

// action

export const act: Markdown = {
	title: "実行",
	summary: "このアクションの開始・停止を行い、進行状況を表示する",
	options: {
		preset: "act",
	},
};

export const actions: Markdown = {
	title: "アクション一覧",
	summary: "このカテゴリに属するアクションの一覧",
	options: {
		preset: "actions",
	},
};

export const action: Markdown = {
	title: "アクション",
	summary: "このカテゴリで実行できる行動",
	children: { actions: actions, act: act },
	options: {
		preset: "action",
		label: "action",
	},
};

// category

export const tasks: Markdown = {
	title: "タスク一覧",
	summary: "このカテゴリに設定されたタスクの一覧",
	options: {
		preset: "tasks",
	},
};

export const category: Markdown = {
	title: "カテゴリ",
	summary: "様々な要素をまとめたもの",
	children: { tasks: tasks },
	options: {
		label: "category",
		preset: "category",
	},
};

// character

export const missions: Markdown = {
	title: "ミッション",
	summary: "すべてのカテゴリのタスクと、その達成状況の一覧",
	options: {
		preset: "missions",
	},
};

export const ability: Markdown = {
	title: "アビリティ",
	summary: "カテゴリごとにグループ化された、いま発動しうるスキルの一覧",
	options: {
		preset: "ability",
	},
};

export const status: Markdown = {
	title: "ステータス",
	summary: "カテゴリに適用された補正など、現在の状態を表示",
	options: {
		preset: "status",
	},
};

export const selling: Markdown = {
	title: "売却",
	summary: "所有しているアイテムを、一覧から選んでまとめて売却する",
	options: {
		preset: "selling",
	},
};

export const inventory: Markdown = {
	title: "インベントリ",
	summary: "カテゴリごとにグループ化された、所持しているアイテムの一覧",
	options: {
		preset: "inventory",
	},
};

export const activity: Markdown = {
	title: "アクティビティ",
	summary: "カテゴリごとにグループ化された、実行可能なアクションの一覧",
	options: {
		preset: "activity",
	},
};

export const character: Markdown = {
	title: "キャラクター",
	summary: "主人公の状況の確認と操作",
	points: ["ここに並ぶカラムは、カテゴリをまたいで全体をまとめて見るためのものです。", "トップのカラムのキャラクターの見出しから開きます。"],
	children: { activity: activity, inventory: inventory, selling: selling, status: status, ability: ability, missions: missions },
	options: {
		label: "character",
		preset: "character",
	},
};

export const player: Markdown = {
	title: "プレイヤー",
	summary: "プレイ画面のカラムごとの説明",
	points: ["画面は左から右へカラムが増えていく形で、右へ進むほど細かい内容になります。", "初期設定では各カラムの最下部に、ここと同じ説明がヒントとして表示されます。", "ヒントは設定のカラムで非表示にできます。"],
	list: expandList("プレイヤー", [character, category, action, item, skill, property, world, miscellaneous], "説明"),
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
