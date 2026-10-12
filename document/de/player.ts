import { Markdown, Tree, expandList } from "~d/type/markdownType";

// miscellaneous

export const language: Markdown = {
	title: "Sprache",
	summary: "Die für die Anzeige verwendete Sprache ändern",
	options: {
		preset: "language",
	},
};

export const group: Markdown = {
	title: "Gruppe",
	summary: "Eine Einteilung, die Kategorien, Aktionen und Gegenstände übergreifend bündelt",
	options: {
		preset: "group",
	},
};

export const event: Markdown = {
	title: "Ereignis",
	summary: "Den Inhalt eines eingetretenen Ereignisses ansehen und die Belohnung abholen",
	options: {
		preset: "event",
		label: "event",
	},
};

export const miscellaneous: Markdown = {
	title: "Ergänzungen",
	summary: "Die Spalten, die zu keinem bestimmten Typ gehören",
	points: ["Die Spalten der Ereignisse und der Gruppen öffnen sich von jeder Ebene aus nach rechts.", "Die Spalte der Sprache öffnet sich aus der Spalte der Einstellungen und aus der Spalte des Willkommensereignisses."],
	children: { event: event, group: group, language: language },
	options: {
		preset: "miscellaneous",
		label: "miscellaneous",
	},
};

// world

export const debug: Markdown = {
	title: "Debug",
	summary: "Die Werkzeuge zum Testen einer Welt bereitstellen",
	options: {
		preset: "debug",
	},
};

export const config: Markdown = {
	title: "Einstellungen",
	summary: "Die Einstellungen dieses Spiels ändern und die Speicherdaten verwalten",
	options: {
		preset: "config",
	},
};

export const statistics: Markdown = {
	title: "Statistik",
	summary: "Die im Lauf des Spielens erfassten Summen anzeigen",
	options: {
		preset: "statistics",
	},
};

export const overview: Markdown = {
	title: "Überblick",
	summary: "Den Überblick über diese Welt und über die Konsole anzeigen, die sie ausführt",
	options: {
		preset: "overview",
	},
};

export const world: Markdown = {
	title: "Welt",
	summary: "Ansehen und Einstellen des Spiels als Ganzes",
	points: ["Sie öffnet sich über die Überschrift der Welt in der obersten Spalte.", "Die Spalte des Debug erscheint nur, wenn im Debugmodus gestartet wird."],
	children: { overview: overview, statistics: statistics, config: config, debug: debug },
	options: {
		preset: "world",
		label: "world",
	},
};

// property

export const calculation: Markdown = {
	title: "Berechnung",
	summary: "Die auf eine Aktion angewandten Werte der Eigenschaften und ihre Aufschlüsselung",
	options: {
		preset: "calculation",
	},
};

export const properties: Markdown = {
	title: "Eigenschaftsliste",
	summary: "Die Liste der Eigenschaften, die zu dieser Kategorie gehören",
	options: {
		preset: "properties",
	},
};

export const property: Markdown = {
	title: "Eigenschaft",
	summary: "Die Zahlen, die das Ergebnis einer Aktion beeinflussen",
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
	title: "Fähigkeitenliste",
	summary: "Die Liste der Fähigkeiten, die dieses Element besitzt",
	options: {
		preset: "skills",
	},
};

export const skill: Markdown = {
	title: "Fähigkeit",
	summary: "Beim Auslösen im Kampf passt sie die Kampfwerte nur für diese Runde an",
	children: { skills: skills },
	options: {
		label: "skill",
		preset: "skill",
	},
};

// item

export const trade: Markdown = {
	title: "Handel",
	summary: "Diesen Gegenstand kaufen und verkaufen",
	options: {
		preset: "trade",
	},
};

export const items: Markdown = {
	title: "Gegenstandsliste",
	summary: "Die Liste der Gegenstände, die zu dieser Kategorie gehören",
	options: {
		preset: "items",
	},
};

export const item: Markdown = {
	title: "Gegenstand",
	summary: "Der Besitz, der mit dieser Kategorie zu tun hat",
	children: { items: items, trade: trade },
	options: {
		preset: "item",
		label: "item",
	},
};

// action

export const act: Markdown = {
	title: "Ausführen",
	summary: "Diese Aktion starten und anhalten und ihren Fortschritt anzeigen",
	options: {
		preset: "act",
	},
};

export const actions: Markdown = {
	title: "Aktionsliste",
	summary: "Die Liste der Aktionen, die zu dieser Kategorie gehören",
	options: {
		preset: "actions",
	},
};

export const action: Markdown = {
	title: "Aktion",
	summary: "Die Handlung, die sich in dieser Kategorie ausführen lässt",
	children: { actions: actions, act: act },
	options: {
		preset: "action",
		label: "action",
	},
};

// category

export const tasks: Markdown = {
	title: "Aufgabenliste",
	summary: "Die Liste der Aufgaben, die für diese Kategorie eingestellt sind",
	options: {
		preset: "tasks",
	},
};

export const category: Markdown = {
	title: "Kategorie",
	summary: "Das, was verschiedene Elemente zusammenfasst",
	children: { tasks: tasks },
	options: {
		label: "category",
		preset: "category",
	},
};

// character

export const missions: Markdown = {
	title: "Missionen",
	summary: "Die Liste der Aufgaben aller Kategorien und ihres Erfüllungsstands",
	options: {
		preset: "missions",
	},
};

export const ability: Markdown = {
	title: "Talent",
	summary: "Die Liste der Fähigkeiten, die jetzt auslösen können, nach Kategorie gruppiert",
	options: {
		preset: "ability",
	},
};

export const status: Markdown = {
	title: "Status",
	summary: "Den aktuellen Zustand anzeigen, etwa die auf eine Kategorie angewandten Korrekturen",
	options: {
		preset: "status",
	},
};

export const selling: Markdown = {
	title: "Verkauf",
	summary: "Die Gegenstände, die du besitzt, aus einer Liste auswählen und auf einmal verkaufen",
	options: {
		preset: "selling",
	},
};

export const inventory: Markdown = {
	title: "Inventar",
	summary: "Die Liste der Gegenstände, die du hältst, nach Kategorie gruppiert",
	options: {
		preset: "inventory",
	},
};

export const activity: Markdown = {
	title: "Aktivität",
	summary: "Die Liste der Aktionen, die sich ausführen lassen, nach Kategorie gruppiert",
	options: {
		preset: "activity",
	},
};

export const character: Markdown = {
	title: "Charakter",
	summary: "Ansehen und Steuern der Lage der Hauptfigur",
	points: ["Die hier aufgereihten Spalten dienen dazu, das Ganze über die Kategorien hinweg zu betrachten.", "Sie öffnet sich über die Überschrift des Charakters in der obersten Spalte."],
	children: { activity: activity, inventory: inventory, selling: selling, status: status, ability: ability, missions: missions },
	options: {
		label: "character",
		preset: "character",
	},
};

export const player: Markdown = {
	title: "Player",
	summary: "Die Erläuterung zu jeder Spalte des Spielbildschirms",
	points: ["Der Bildschirm hat die Form von Spalten, die sich von links nach rechts vermehren, und je weiter du nach rechts gehst, desto feiner wird der Inhalt.", "In den anfänglichen Einstellungen erscheint am unteren Ende jeder Spalte dieselbe Erläuterung wie hier als Hinweis.", "Die Hinweise lassen sich in der Spalte der Einstellungen ausblenden."],
	list: expandList("Player", [character, category, action, item, skill, property, world, miscellaneous], "Beschreibung"),
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
