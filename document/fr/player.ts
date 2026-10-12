import { Markdown, Tree, expandList } from "~d/type/markdownType";

// miscellaneous

export const language: Markdown = {
	title: "Langue",
	summary: "Changer la langue utilisée pour l'affichage",
	options: {
		preset: "language",
	},
};

export const group: Markdown = {
	title: "Groupe",
	summary: "Un classement qui rassemble catégories, actions et objets",
	options: {
		preset: "group",
	},
};

export const event: Markdown = {
	title: "Événement",
	summary: "Consulter le contenu d'un événement survenu et recevoir sa récompense",
	options: {
		preset: "event",
		label: "event",
	},
};

export const miscellaneous: Markdown = {
	title: "Compléments",
	summary: "Les colonnes qui n'appartiennent à aucun type particulier",
	points: ["Les colonnes des événements et des groupes s'ouvrent sur la droite depuis n'importe quel niveau.", "La colonne de la langue s'ouvre depuis la colonne des paramètres et depuis la colonne de l'événement de bienvenue."],
	children: { event: event, group: group, language: language },
	options: {
		preset: "miscellaneous",
		label: "miscellaneous",
	},
};

// world

export const debug: Markdown = {
	title: "Débogage",
	summary: "Fournir les outils permettant de tester un monde",
	options: {
		preset: "debug",
	},
};

export const config: Markdown = {
	title: "Paramètres",
	summary: "Modifier les paramètres de ce jeu et gérer les données de sauvegarde",
	options: {
		preset: "config",
	},
};

export const statistics: Markdown = {
	title: "Statistiques",
	summary: "Afficher les totaux enregistrés au fil de la partie",
	options: {
		preset: "statistics",
	},
};

export const overview: Markdown = {
	title: "Aperçu",
	summary: "Afficher l'aperçu de ce monde et de la console qui l'exécute",
	options: {
		preset: "overview",
	},
};

export const world: Markdown = {
	title: "Monde",
	summary: "Consultation et réglage du jeu dans son ensemble",
	points: ["Elle s'ouvre depuis l'intitulé du monde dans la colonne du haut.", "La colonne du débogage n'apparaît que lorsque le jeu est lancé en mode débogage."],
	children: { overview: overview, statistics: statistics, config: config, debug: debug },
	options: {
		preset: "world",
		label: "world",
	},
};

// property

export const calculation: Markdown = {
	title: "Calcul",
	summary: "Les valeurs des propriétés appliquées à une action et leur détail",
	options: {
		preset: "calculation",
	},
};

export const properties: Markdown = {
	title: "Liste des propriétés",
	summary: "La liste des propriétés qui appartiennent à cette catégorie",
	options: {
		preset: "properties",
	},
};

export const property: Markdown = {
	title: "Propriété",
	summary: "Les nombres qui influent sur le résultat d'une action",
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
	title: "Liste des compétences",
	summary: "La liste des compétences que possède cet élément",
	options: {
		preset: "skills",
	},
};

export const skill: Markdown = {
	title: "Compétence",
	summary: "Lorsqu'elle se déclenche en combat, elle ajuste les valeurs de combat pour ce tour uniquement",
	children: { skills: skills },
	options: {
		label: "skill",
		preset: "skill",
	},
};

// item

export const trade: Markdown = {
	title: "Échange",
	summary: "Acheter et vendre cet objet",
	options: {
		preset: "trade",
	},
};

export const items: Markdown = {
	title: "Liste des objets",
	summary: "La liste des objets qui appartiennent à cette catégorie",
	options: {
		preset: "items",
	},
};

export const item: Markdown = {
	title: "Objet",
	summary: "Les possessions liées à cette catégorie",
	children: { items: items, trade: trade },
	options: {
		preset: "item",
		label: "item",
	},
};

// action

export const act: Markdown = {
	title: "Exécuter",
	summary: "Démarrer et arrêter cette action et afficher sa progression",
	options: {
		preset: "act",
	},
};

export const actions: Markdown = {
	title: "Liste des actions",
	summary: "La liste des actions qui appartiennent à cette catégorie",
	options: {
		preset: "actions",
	},
};

export const action: Markdown = {
	title: "Action",
	summary: "Le comportement qui peut être exécuté dans cette catégorie",
	children: { actions: actions, act: act },
	options: {
		preset: "action",
		label: "action",
	},
};

// category

export const tasks: Markdown = {
	title: "Liste des tâches",
	summary: "La liste des tâches réglées sur cette catégorie",
	options: {
		preset: "tasks",
	},
};

export const category: Markdown = {
	title: "Catégorie",
	summary: "Ce qui rassemble divers éléments",
	children: { tasks: tasks },
	options: {
		label: "category",
		preset: "category",
	},
};

// character

export const missions: Markdown = {
	title: "Missions",
	summary: "La liste des tâches de toutes les catégories et de leur état d'accomplissement",
	options: {
		preset: "missions",
	},
};

export const ability: Markdown = {
	title: "Aptitude",
	summary: "La liste des compétences pouvant se déclencher à cet instant, groupées par catégorie",
	options: {
		preset: "ability",
	},
};

export const status: Markdown = {
	title: "État",
	summary: "Afficher l'état actuel, comme les corrections appliquées à une catégorie",
	options: {
		preset: "status",
	},
};

export const selling: Markdown = {
	title: "Vente",
	summary: "Choisir dans une liste les objets que vous possédez et les vendre d'un coup",
	options: {
		preset: "selling",
	},
};

export const inventory: Markdown = {
	title: "Inventaire",
	summary: "La liste des objets que vous détenez, groupés par catégorie",
	options: {
		preset: "inventory",
	},
};

export const activity: Markdown = {
	title: "Activité",
	summary: "La liste des actions pouvant être exécutées, groupées par catégorie",
	options: {
		preset: "activity",
	},
};

export const character: Markdown = {
	title: "Personnage",
	summary: "Consultation et maniement de la situation du héros",
	points: ["Les colonnes alignées ici servent à voir l'ensemble en traversant les catégories.", "Elle s'ouvre depuis l'intitulé du personnage dans la colonne du haut."],
	children: { activity: activity, inventory: inventory, selling: selling, status: status, ability: ability, missions: missions },
	options: {
		label: "character",
		preset: "character",
	},
};

export const player: Markdown = {
	title: "Lecteur",
	summary: "L'explication de chaque colonne de l'écran de jeu",
	points: ["L'écran se présente sous forme de colonnes qui s'ajoutent de gauche à droite, et plus vous avancez vers la droite, plus le contenu est détaillé.", "Avec les réglages initiaux, la même explication qu'ici s'affiche comme astuce au bas de chaque colonne.", "Les astuces peuvent être masquées dans la colonne des paramètres."],
	list: expandList("Lecteur", [character, category, action, item, skill, property, world, miscellaneous], "Description"),
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
