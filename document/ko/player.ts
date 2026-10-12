import { Markdown, Tree, expandList } from "~d/type/markdownType";

// miscellaneous

export const language: Markdown = {
	title: "언어",
	summary: "표시에 사용하는 언어를 변경",
	options: {
		preset: "language",
	},
};

export const group: Markdown = {
	title: "그룹",
	summary: "카테고리·액션·아이템을 가로질러 묶는 분류",
	options: {
		preset: "group",
	},
};

export const event: Markdown = {
	title: "이벤트",
	summary: "발생한 이벤트의 내용을 확인하고 보상을 수령",
	options: {
		preset: "event",
		label: "event",
	},
};

export const miscellaneous: Markdown = {
	title: "보충 사항",
	summary: "특정 타입에 속하지 않는 칼럼",
	points: ["이벤트와 그룹의 칼럼은 어느 계층에서든 오른쪽으로 열립니다.", "언어의 칼럼은 설정의 칼럼과 환영 이벤트의 칼럼에서 엽니다."],
	children: { event: event, group: group, language: language },
	options: {
		preset: "miscellaneous",
		label: "miscellaneous",
	},
};

// world

export const debug: Markdown = {
	title: "디버그",
	summary: "월드를 테스트하기 위한 도구를 제공",
	options: {
		preset: "debug",
	},
};

export const config: Markdown = {
	title: "설정",
	summary: "이 게임의 설정 변경과 세이브 데이터의 관리를 수행",
	options: {
		preset: "config",
	},
};

export const statistics: Markdown = {
	title: "통계",
	summary: "플레이를 통해 기록된 합계를 표시",
	options: {
		preset: "statistics",
	},
};

export const overview: Markdown = {
	title: "개요",
	summary: "이 월드와, 그것을 실행하고 있는 콘솔의 개요를 표시",
	options: {
		preset: "overview",
	},
};

export const world: Markdown = {
	title: "월드",
	summary: "게임 전체의 확인과 설정",
	points: ["최상단 칼럼의 월드 제목에서 엽니다.", "디버그의 칼럼은 디버그 모드로 시작했을 때만 나타납니다."],
	children: { overview: overview, statistics: statistics, config: config, debug: debug },
	options: {
		preset: "world",
		label: "world",
	},
};

// property

export const calculation: Markdown = {
	title: "계산",
	summary: "액션에 반영되는 속성의 값과 그 내역",
	options: {
		preset: "calculation",
	},
};

export const properties: Markdown = {
	title: "속성 목록",
	summary: "이 카테고리에 속하는 속성의 목록",
	options: {
		preset: "properties",
	},
};

export const property: Markdown = {
	title: "속성",
	summary: "액션의 결과에 영향을 주는 수치",
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
	title: "스킬 목록",
	summary: "이 요소가 가진 스킬의 목록",
	options: {
		preset: "skills",
	},
};

export const skill: Markdown = {
	title: "스킬",
	summary: "전투 중에 발동하면 그 턴에만 전투 값을 보정",
	children: { skills: skills },
	options: {
		label: "skill",
		preset: "skill",
	},
};

// item

export const trade: Markdown = {
	title: "교환",
	summary: "이 아이템을 구입·판매",
	options: {
		preset: "trade",
	},
};

export const items: Markdown = {
	title: "아이템 목록",
	summary: "이 카테고리에 속하는 아이템의 목록",
	options: {
		preset: "items",
	},
};

export const item: Markdown = {
	title: "아이템",
	summary: "이 카테고리와 관련된 소지품",
	children: { items: items, trade: trade },
	options: {
		preset: "item",
		label: "item",
	},
};

// action

export const act: Markdown = {
	title: "실행",
	summary: "이 액션의 시작·정지를 하고 진행 상황을 표시",
	options: {
		preset: "act",
	},
};

export const actions: Markdown = {
	title: "액션 목록",
	summary: "이 카테고리에 속하는 액션의 목록",
	options: {
		preset: "actions",
	},
};

export const action: Markdown = {
	title: "액션",
	summary: "이 카테고리에서 실행할 수 있는 행동",
	children: { actions: actions, act: act },
	options: {
		preset: "action",
		label: "action",
	},
};

// category

export const tasks: Markdown = {
	title: "과제 목록",
	summary: "이 카테고리에 설정된 과제의 목록",
	options: {
		preset: "tasks",
	},
};

export const category: Markdown = {
	title: "카테고리",
	summary: "다양한 요소를 하나로 묶은 것",
	children: { tasks: tasks },
	options: {
		label: "category",
		preset: "category",
	},
};

// character

export const missions: Markdown = {
	title: "미션",
	summary: "모든 카테고리의 과제와 그 달성 상황의 목록",
	options: {
		preset: "missions",
	},
};

export const ability: Markdown = {
	title: "능력",
	summary: "카테고리별로 그룹화된, 지금 발동할 수 있는 스킬의 목록",
	options: {
		preset: "ability",
	},
};

export const status: Markdown = {
	title: "스테이터스",
	summary: "카테고리에 적용된 보정 등 현재 상태를 표시",
	options: {
		preset: "status",
	},
};

export const selling: Markdown = {
	title: "판매",
	summary: "소유하고 있는 아이템을 목록에서 골라 한꺼번에 판매",
	options: {
		preset: "selling",
	},
};

export const inventory: Markdown = {
	title: "인벤토리",
	summary: "카테고리별로 그룹화된, 소지하고 있는 아이템의 목록",
	options: {
		preset: "inventory",
	},
};

export const activity: Markdown = {
	title: "액티비티",
	summary: "카테고리별로 그룹화된, 실행 가능한 액션의 목록",
	options: {
		preset: "activity",
	},
};

export const character: Markdown = {
	title: "캐릭터",
	summary: "주인공의 상황 확인과 조작",
	points: ["여기에 늘어서는 칼럼은 카테고리를 가로질러 전체를 한데 보기 위한 것입니다.", "최상단 칼럼의 캐릭터 제목에서 엽니다."],
	children: { activity: activity, inventory: inventory, selling: selling, status: status, ability: ability, missions: missions },
	options: {
		label: "character",
		preset: "character",
	},
};

export const player: Markdown = {
	title: "플레이어",
	summary: "플레이 화면의 칼럼별 설명",
	points: ["화면은 왼쪽에서 오른쪽으로 칼럼이 늘어나는 형태이며, 오른쪽으로 갈수록 내용이 세세해집니다.", "초기 설정에서는 각 칼럼의 맨 아래에 여기와 같은 설명이 힌트로 표시됩니다.", "힌트는 설정의 칼럼에서 숨길 수 있습니다."],
	list: expandList("플레이어", [character, category, action, item, skill, property, world, miscellaneous], "설명"),
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
