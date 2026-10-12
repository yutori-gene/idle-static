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
	title: "Traduction",
	summary: "Paramètres permettant de traduire le texte d'un monde dans dix langues",
	points: [
		"Il existe deux sortes de traduction : celle des formules communes de l'interface (les préréglages) et celle des noms et des explications que le monde possède lui-même.",
		"La traduction des formules communes est toujours incluse, quel que soit le paramètre `translations` de général. L'auteur n'a pas à la préparer.",
		"La traduction du monde lui-même n'est exportée que lorsque `translations` de général est activé et que le monde est publié ; c'est l'auteur qui la réalise.",
		"Dans les langues pour lesquelles aucune traduction n'est prévue, le texte s'affiche tel qu'il est écrit dans le monde.",
	],
	links: { general: "general" },
	options: {
		label: "translation",
	},
	children: {
		flag: {
			title: "Activation de la traduction",
			summary: "Ce qui se passe lorsque la traduction est activée",
			points: [
				"Ce que l'on active, c'est `translations` de général. Cette section explique ce qui se passe lorsqu'on l'active.",
				"Lorsqu'il est activé, le monde publié embarque des fichiers de traduction pour dix langues, et la langue peut être changée depuis les paramètres du lecteur. Lorsqu'il est désactivé, il est impossible de changer de langue.",
				"Les dix fichiers sont exportés avec le même contenu (le texte avant traduction). Une langue que vous n'avez pas traduite affiche le texte d'origine tel quel. Vous pouvez ne traduire que certaines langues, mais le texte d'origine se mêlera aux écrans de ces langues.",
				"Au démarrage du jeu, c'est d'abord la langue définie dans `language` de général qui s'affiche. Ensuite, elle peut être changée pour n'importe quelle langue depuis la colonne des paramètres.",
				"Dans le test de jeu de l'éditeur, les fichiers de traduction du monde n'existent pas encore : changer de langue ne modifie donc que les formules communes de l'interface.",
				"Traduire est fastidieux, mais cela permet à beaucoup plus de monde de jouer.",
			],
			links: { general: "general" },
		},
		file: {
			title: "Fichiers de langue",
			summary: "Les fichiers JSON exportés pour la traduction",
			points: [
				"Lorsque vous exportez un monde avec Publier dans le menu, `translations/base` reçoit la traduction des formules communes et `translations/world` celle du monde lui-même.",
				"Les seuls fichiers à traduire sont les dix de `translations/world`. `translations/base` est fourni déjà traduit : vous n'avez pas à y toucher.",
				"Le contenu du fichier est réparti par type ; en dessous figurent les ID des éléments, puis le nom (`name`) et l'explication (`explanation`).",
				"Il existe sept types : catégorie, action, objet, événement, groupe, compétence et préréglage. La monnaie, la capacité et la file d'attente vont dans les objets, l'aperçu du monde va dans les préréglages, et les tâches et les événements fixes vont ensemble dans les événements.",
				"Les éléments dont le nom a été laissé vide sont exportés avec un nom créé automatiquement à partir de leur ID.",
				"Replacez les fichiers traduits dans `translations/world` sous le même nom.",
			],
		},
		task: {
			title: "Le travail de traduction",
			summary: "La modification des données de traduction",
			points: [
				"Les dix fichiers exportés ont tous le même contenu (le texte avant traduction).",
				"Tous les fichiers, sauf celui de la langue d'origine, doivent être traduits.",
				"Ne traduisez que les valeurs de `name` et d'`explanation`. Ne modifiez ni les ID ni la structure du JSON.",
			],
			children: {
				ai: {
					title: "AI",
					summary: "Traduction à l'aide d'une IA",
					points: ["Traduisez à l'aide d'une IA comme ChatGPT, Copilot ou Claude.", "Elle peut tout traduire d'un coup, avec une qualité correcte.", "La traduction peut ne pas être complète ; les termes techniques et les noms propres demandent une attention particulière.", "Selon le volume, l'utilisation d'une IA peut être payante.", "Si l'IA interrompt la traduction en cours de route, lui demander de « continuer » suffit parfois. (Parfois non.)"],
					children: {
						prompt: {
							title: "Exemple de prompt",
							summary: "Un exemple de consigne de traduction donnée à une IA",
							points: ["Exemple de prompt : traduisez du japonais vers l'anglais les valeurs de `name` et d'`explanation` des données JSON envoyées. Ne modifiez ni les clés ni les autres parties."],
						},
						gpt: {
							title: "Utilisation des GPT",
							summary: "Traduction à l'aide d'un GPT de ChatGPT",
							points: ["Le JSON Language Translator proposé dans la bibliothèque de GPT de ChatGPT facilite la traduction du JSON.", "La structure du JSON est conservée pendant la traduction.", "D'autres services d'IA que ChatGPT proposent parfois la même fonction."],
						},
					},
				},
				online: {
					title: "Services de traduction",
					summary: "L'utilisation d'un service de traduction",
					points: ["Traduisez à l'aide d'un service en ligne comme DeepL ou Google Traduction.", "On peut en attendre une qualité supérieure à la traduction par IA, mais selon le volume, le service est payant.", "Un fichier JSON ne peut pas être traduit tel quel par un service de traduction : il faut donc créer un programme pour s'en servir.", "Il semble aussi exister des services payants qui traduisent les données JSON telles quelles (doctranslator.com, entre autres)."],
				},
				manual: {
					title: "Manuel",
					summary: "La traduction faite à la main",
					points: ["Ouvrez le fichier de traduction dans un éditeur de texte et saisissez le contenu traduit dans chaque langue. Cela demande énormément de travail, mais vous pouvez traduire exactement comme vous le souhaitez."],
				},
			},
		},
		code: {
			title: "Codes de langue",
			summary: "La liste des codes de langue pris en charge",
			points: ["Le nom du fichier de traduction est ce code de langue.", "Les langues prises en charge sont ces dix-là ; il est impossible d'en ajouter ou d'en retirer."],
			list: [
				["Code de langue", "Langue"],
				["en", "Anglais"],
				["zh", "Chinois (simplifié)"],
				["es", "Espagnol"],
				["pt", "Portugais"],
				["fr", "Français"],
				["ru", "Russe"],
				["de", "Allemand"],
				["ja", "Japonais"],
				["id", "Indonésien"],
				["ko", "Coréen"],
			],
		},
	},
};

export const miscellaneous: Markdown = {
	title: "Compléments",
	summary: "Des explications sur le travail de création, et non sur les champs du monde eux-mêmes",
	points: ["On rassemble ici ce qui n'entre pas dans la liste des champs de configuration."],
	list: expandList("Complément", [translation], "Description"),
	options: {
		label: "miscellaneous",
		linkedList: true,
	},
};

// componsnt

export const property: Type.Property = {
	title: "Propriété",
	summary: "Le réglage des effets que porte un objet",
	points: ["Ce sont les champs d'effet que vous pouvez régler sur un objet.", "Les objets dont le type d'équipement est `necessary` ou `consumable` n'appliquent leur effet que pendant qu'ils sont équipés. `unnecessary` applique son effet du simple fait d'être possédé, et l'ampleur de l'effet est proportionnelle à la quantité possédée (le double si vous en possédez 2).", "Comme la quantité possédée sert directement de multiplicateur à l'effet d'`unnecessary`, `maximum` (la quantité maximale possédée) devient le plafond de l'effet. Lorsque vous équilibrez, réglez-le en même temps que `maximum`.", "La valeur de chacun des champs est calculée comme un ajustement de l'écart de niveau entre le niveau du joueur et le niveau de l'action.", "Par exemple, si la valeur d'attaque est de 10, l'attaque est calculée comme si le niveau du joueur était supérieur de 10 au niveau de l'action. Une valeur négative fait l'inverse.", "L'influence de l'écart de niveau est décidée par `propertyRatio` de général (2 par défaut), et elle change de ce multiplicateur tous les 10 points d'écart de niveau.", "Lorsque `numeric` de la catégorie est désactivé, l'écart de niveau réel est traité comme 0, si bien que la valeur réglée ici devient telle quelle l'écart de niveau.", "Les champs qui agissent par division, comme le temps requis et les dégâts subis, plafonnent à 100 fois (jusqu'à un centième pour le temps requis).", "Pour les objets qui doivent être équipés, seul celui qui est équipé dans chaque groupe d'équipement produit son effet.", "Un objet dont la quantité possédée est 0 ne produit aucun effet, quel que soit son type d'équipement.", "attack, defence, accuracy, evasion et restore ne fonctionnent que sur les actions de type `stamina`."],
	list: [
		["Propriété", "Détail de l'effet"],
		["speed", "Raccourcit le temps requis de l'action. Le temps requis varie en proportion inverse de l'écart de niveau (le multiplicateur agit de moitié)."],
		["chance", "Modifie la probabilité de réussite de l'action. Le multiplicateur s'applique au rapport entre réussite et échec, si bien qu'elle ne dépasse jamais `100`%."],
		["experience", "Modifie l'expérience obtenue. Elle augmente proportionnellement à l'écart de niveau (le calcul est inversé : plus le niveau de l'action est élevé, plus on en obtient)."],
		["attack", "Modifie les dégâts d'endurance infligés à l'adversaire. (actions stamina uniquement)"],
		["defence", "Réduit les dégâts d'endurance subis de la part de l'adversaire (le multiplicateur agit de moitié). (actions stamina uniquement)"],
		["accuracy", "Abaisse le taux d'échec de l'attaque. (actions stamina uniquement)"],
		["evasion", "Modifie le taux d'esquive de l'attaque de l'adversaire (le multiplicateur agit de moitié). (actions stamina uniquement)"],
		["restore", "Modifie la quantité d'endurance récupérée à la fin de l'action. Plus on approche du maximum, plus la progression ralentit. (actions stamina uniquement)"],
	],
	children: {
		category: {
			title: "Catégorie",
			summary: "La catégorie à laquelle la propriété s'applique",
			points: ["Réglez l'ID de la catégorie à laquelle cette propriété s'applique.", "Régler `*` l'applique à toutes les catégories.", "Laissé vide, il s'applique à la catégorie à laquelle appartient l'objet.", "Si vous réglez l'ID d'une autre catégorie, l'effet porte sur les actions de cette catégorie. Peu importe dans quelle catégorie se trouve l'objet lui-même."],
		},
		attack: {
			title: "Attaque [Écart de niveau]",
			summary: "La correction des dégâts d'endurance infligés à l'adversaire (fonctionne uniquement sur les actions stamina)",
			points: ["Les dégâts d'attaque sont calculés comme si le niveau du joueur était supérieur au niveau de l'action de cette valeur."],
		},
		defence: {
			title: "Défense [Écart de niveau]",
			summary: "La correction des dégâts d'endurance subis de la part de l'adversaire (fonctionne uniquement sur les actions stamina)",
			points: ["Les dégâts subis sont calculés comme si le niveau du joueur était supérieur au niveau de l'action de cette valeur. Plus la valeur est élevée, plus les dégâts subis sont réduits."],
		},
		accuracy: {
			title: "Précision [Écart de niveau]",
			summary: "La correction du taux d'échec de l'attaque (fonctionne uniquement sur les actions stamina)",
			points: ["Le taux d'échec est calculé comme si le niveau du joueur était supérieur au niveau de l'action de cette valeur. Plus la valeur est élevée, plus le taux d'échec baisse."],
		},
		evasion: {
			title: "Esquive [Écart de niveau]",
			summary: "La correction du taux d'esquive de l'attaque de l'adversaire (fonctionne uniquement sur les actions stamina)",
			points: ["Le taux d'esquive est calculé comme si le niveau du joueur était supérieur au niveau de l'action de cette valeur. Plus la valeur est élevée, plus il est facile d'esquiver l'attaque de l'adversaire."],
		},
		restore: {
			title: "Récupération [Écart de niveau]",
			summary: "La correction de la quantité d'endurance récupérée (fonctionne uniquement sur les actions stamina)",
			points: ["La quantité d'endurance récupérée est calculée comme si le niveau du joueur était supérieur au niveau de l'action de cette valeur."],
		},
		speed: {
			title: "Vitesse [Écart de niveau]",
			summary: "La correction du temps requis de l'action",
			points: ["Le temps requis est calculé comme si le niveau du joueur était supérieur au niveau de l'action de cette valeur. Plus la valeur est élevée, plus le temps requis est raccourci."],
		},
		chance: {
			title: "Taux de réussite [Écart de niveau]",
			summary: "La correction de la probabilité de réussite de l'action",
			points: ["La probabilité de réussite de l'action est calculée comme si le niveau du joueur était supérieur au niveau de l'action de cette valeur. Plus la valeur est élevée, plus la probabilité de réussite augmente."],
		},
		experience: {
			title: "Expérience [Écart de niveau]",
			summary: "La correction de l'expérience obtenue",
			points: ["L'expérience est calculée comme si le niveau du joueur était inférieur au niveau de l'action de cette valeur (le calcul étant inversé, plus le niveau de l'action est élevé, plus on obtient d'expérience)."],
		},
	},
	options: {
		label: "property",
	},
};

export const combat: Type.Combat = {
	title: "Valeurs de combat",
	summary: "Le réglage des corrections de combat pour les actions de type stamina",
	points: ["Ce sont des valeurs de correction qui ne fonctionnent que sur les actions de type `stamina`.", "Chaque valeur est calculée comme une correction supplémentaire de l'écart de niveau entre le joueur et l'action.", "Par exemple, si la valeur d'attaque est de 10, les dégâts d'attaque sont calculés comme si le niveau du joueur était supérieur de 10 au niveau de l'action. Si elle est négative, c'est une correction en sens inverse.", "Selon l'endroit où vous la réglez, la valeur est celle du côté du joueur ou celle du côté de l'adversaire.", "Les valeurs du côté de l'adversaire agissent en annulant le champ opposé qui leur correspond. La défense de l'adversaire annule l'attaque du joueur, l'attaque de l'adversaire annule la défense du joueur, l'esquive de l'adversaire annule la précision du joueur et la précision de l'adversaire annule l'esquive du joueur.", "Seule la récupération s'annule entre champs identiques : plus la récupération de l'adversaire est élevée, moins le joueur récupère."],
	list: [
		["Où le régler", "De quel côté est la valeur"],
		["`defaultCombat` de général", "La valeur de référence du côté du joueur. C'est le point de départ commun à toutes les actions `stamina`"],
		["Les valeurs de combat de l'action", "Les valeurs du côté de l'adversaire. Vues du joueur, elles agissent comme des corrections en sens inverse"],
		["Les valeurs de combat de la compétence", "Les valeurs du côté qui possède la compétence. Les compétences de votre camp s'ajoutent au joueur, celles de l'adversaire au côté de l'adversaire"],
	],
	children: {
		attack: {
			title: "Attaque [Écart de niveau]",
			summary: "La correction par écart de niveau des dégâts d'endurance infligés à l'adversaire",
			points: ["Plus la valeur du côté du joueur est élevée, plus les dégâts infligés à l'adversaire augmentent.", "La valeur réglée sur une action ou sur une compétence de l'adversaire devient l'attaque du côté de l'adversaire et, plus elle est élevée, plus les dégâts subis par le joueur augmentent."],
		},
		defence: {
			title: "Défense [Écart de niveau]",
			summary: "La correction par écart de niveau des dégâts d'endurance subis de la part de l'adversaire",
			points: ["Plus la valeur du côté du joueur est élevée, plus les dégâts subis sont réduits.", "La valeur réglée sur une action ou sur une compétence de l'adversaire devient la défense du côté de l'adversaire et, plus elle est élevée, moins le joueur inflige de dégâts."],
		},
		accuracy: {
			title: "Précision [Écart de niveau]",
			summary: "La correction par écart de niveau du taux d'échec de l'attaque",
			points: ["Plus la valeur du côté du joueur est élevée, plus le taux d'échec de l'attaque baisse.", "La valeur réglée sur une action ou sur une compétence de l'adversaire devient la précision du côté de l'adversaire et, plus elle est élevée, plus il est difficile pour le joueur d'esquiver l'attaque de l'adversaire."],
		},
		evasion: {
			title: "Esquive [Écart de niveau]",
			summary: "La correction par écart de niveau du taux d'esquive de l'attaque de l'adversaire",
			points: ["Plus la valeur du côté du joueur est élevée, plus il est facile d'esquiver l'attaque de l'adversaire.", "La valeur réglée sur une action ou sur une compétence de l'adversaire devient l'esquive du côté de l'adversaire et, plus elle est élevée, plus il est difficile pour l'attaque du joueur de toucher."],
		},
		restore: {
			title: "Récupération [Écart de niveau]",
			summary: "La correction par écart de niveau de la quantité d'endurance récupérée",
			points: ["Plus la valeur du côté du joueur est élevée, plus l'endurance récupérée après le combat augmente.", "La valeur réglée sur une action ou sur une compétence de l'adversaire devient la récupération du côté de l'adversaire et, plus elle est élevée, moins le joueur récupère.", "Seule la récupération, contrairement aux autres champs, s'annule entre champs identiques."],
		},
	},
	options: {
		label: "combat",
	},
};

export const acquisition: Type.Acquisition = {
	title: "Obtention",
	summary: "Le réglage de l'obtention d'objets et de niveaux de catégorie",
	points: ["Réglez ce qui est obtenu.", "Outre les objets, vous pouvez modifier le niveau d'une catégorie et le nombre d'exécutions d'une action.", "Vous pouvez régler la probabilité de l'obtenir."],
	list: [
		["Type", "Ce qui est obtenu"],
		["Catégorie", "Niveau"],
		["Action", "Nombre d'exécutions"],
		["Objet", "Quantité possédée"],
	],
	children: {
		type: {
			title: "Type",
			summary: "Le type d'élément obtenu",
			list: [
				["Type", "Ce qui est obtenu"],
				["Catégorie", "Niveau (la valeur réglée est ajoutée telle quelle)"],
				["Action", "Nombre d'exécutions"],
				["Objet", "Quantité possédée"],
			],
		},
		id: {
			title: "L'ID de l'élément",
			summary: "L'ID qui identifie l'élément à obtenir",
		},
		count: {
			title: "Valeur",
			summary: "La quantité obtenue",
			points: ["Si vous réglez une valeur négative, la quantité possédée, le nombre d'exécutions ou le niveau diminuent. Cela dit, ils ne descendent jamais en dessous de 0.", "Si une quantité maximale possédée (maximum) est réglée sur l'objet, la quantité possédée n'augmente pas au-delà de cette valeur.", "Si le type est une catégorie, la valeur réglée est ajoutée telle quelle au niveau (1 pour un niveau). La méthode habituelle est de l'ajuster par le réglage d'expérience de l'action. À moins d'un objectif particulier, ce réglage est inutile.", "Le niveau d'une catégorie ne descend jamais en dessous de 0 et ne dépasse jamais `maxCategoryLevels` de général (le niveau maximal de catégorie).", "La valeur se règle en nombre entier."],
		},
		chance: {
			title: "Probabilité [-1 à 1]",
			summary: "La probabilité que l'obtention réussisse (une valeur négative n'est évaluée qu'en cas d'échec)",
			points: ["Réglez la probabilité de l'obtenir par un décimal de -1 à 1. La valeur absolue sert à juger la probabilité.", "Lorsque la valeur est positive, elle n'est évaluée qu'en cas de réussite de l'action : avec `1` on l'obtient à coup sûr et avec `0.5` on l'obtient avec une probabilité de 50%.", "Lorsque la valeur est négative, elle n'est évaluée qu'en cas d'échec de l'action : avec `-1` on l'obtient à coup sûr et avec `-0.5` on l'obtient avec une probabilité de 50%.", "Avec `0`, on ne l'obtient ni en cas de réussite ni en cas d'échec.", "La valeur par défaut est `1` (obtenu à coup sûr en cas de réussite)."],
		},
	},
	links: { type: "type" },
	options: {
		label: "acquisition",
	},
};

export const requirement: Type.Requirement = {
	title: "Condition",
	summary: "Le réglage des conditions nécessaires pour utiliser ou afficher un élément",
	points: ["Ce sont les conditions que l'on règle sur chacun des éléments : catégorie, action, objet et événement.", "Si toutes les conditions réglées ne sont pas remplies, l'opération indiquée dans le tableau est impossible.", "Selon le réglage de déverrouillage (unlocked) de l'élément, l'élément lui-même ne s'affiche pas à l'écran tant que les conditions ne sont pas remplies."],
	list: [
		["Où c'est réglé", "Ce qui est impossible tant que les conditions ne sont pas remplies"],
		["Catégorie", "Exécuter toutes les actions de la catégorie et manipuler ses objets"],
		["Action", "Exécuter l'action"],
		["Objet", "Manipuler l'objet (l'équiper, etc.)"],
		["Événement", "Accomplir une tâche, déclencher un événement de changement ou un événement fixe"],
	],
	children: {
		type: {
			title: "Type",
			summary: "Le type d'élément consulté comme condition",
			list: [
				["Type", "La valeur consultée"],
				["Catégorie", "Le niveau de la catégorie"],
				["Action", "Le nombre d'exécutions de l'action"],
				["Objet", "La quantité de l'objet possédée"],
			],
		},
		id: {
			title: "L'ID de l'élément",
			summary: "L'ID de l'élément consulté comme condition",
			points: ["Réglez l'ID de la catégorie, de l'action ou de l'objet consulté comme condition.", "Si le décompte par groupe (requiringGroup) est activé sur un événement, il est traité comme l'ID d'un groupe et non d'un élément individuel."],
		},
		count: {
			title: "Valeur",
			summary: "La quantité dont la condition a besoin",
			points: ["La condition est remplie lorsque la valeur indiquée est atteinte ou dépassée.", "Elle se règle en nombre entier supérieur ou égal à 0. La valeur par défaut est `1`."],
		},
		chance: {
			title: "Probabilité de consommation [0-1]",
			summary: "La probabilité que l'objet soit consommé (de 0 à 1, ne fonctionne que si le type est un objet)",
			points: ["C'est la probabilité de consommer l'objet lorsque les conditions sont remplies et que l'action est exécutée.", "Avec `1` il est consommé à coup sûr, avec `0.5` il est consommé avec une probabilité de 50% et avec `0` il n'est pas consommé.", "La valeur par défaut est `1` (consommé à coup sûr). Cependant, dans les conditions d'un événement (tâche, événement de changement ou événement fixe), la valeur par défaut est `0` (non consommé), afin que ce que vous détenez ne diminue pas quand vous l'accomplissez.", "Avec `0`, le stock n'est pas réduit : vous pouvez donc exécuter l'action autant de fois que vous voulez tant que la quantité possédée atteint la valeur de la condition. Utilisez-le lorsque vous voulez que la condition soit seulement d'avoir l'objet équipé.", "Cela ne fonctionne pas si le type n'est pas un objet."],
		},
		equipment: {
			title: "Équipement",
			summary: "Exiger ou non que l'objet soit équipé comme condition (ne fonctionne que si le type est un objet)",
			points: ["Une fois activé, la condition exige non seulement de posséder l'objet, mais aussi de l'avoir équipé.", "L'état équipé ou non est jugé d'après l'équipement de la catégorie à laquelle appartient l'objet.", "Cela ne fonctionne pas si le type n'est pas un objet."],
		},
	},
	links: { type: "type" },
	options: {
		label: "requirement",
	},
};

export const information: Type.Information = {
	title: "Informations",
	summary: "Le réglage des informations de base de l'élément (ID, nom, texte de description, icône et couleur)",
	points: ["Ce sont les champs d'informations de base communs à tous les éléments du monde (catégorie, action, objet, groupe, événement, compétence et préréglage).", "Ils se règlent séparément pour chaque élément."],
	children: {
		id: {
			title: "ID d'identification",
			summary: "L'ID unique qui identifie l'élément",
			points: ["C'est l'ID qui identifie chaque élément de manière unique.", "C'est la chaîne de caractères qui permet à l'éditeur de distinguer cet élément.", "Par exemple, quel objet est obtenu à l'issue d'une action se désigne par l'ID.", "Les caractères utilisables sont une combinaison de lettres, de traits d'union et de chiffres, de 1 à 100 caractères."],
			important: "Une fois le jeu distribué, ne changez pas un ID déjà réglé. Si vous le changez, il ne correspond plus aux données de jeu existantes et le jeu cesse de fonctionner correctement.",
			children: {
				displayName: {
					title: "Le nom affiché",
					summary: "Le nom d'affichage généré automatiquement à partir de l'ID",
					points: ["Si aucun nom n'est réglé, les traits d'union sont remplacés par des espaces et chaque mot est converti avec une majuscule initiale et le reste en minuscules pour être affiché comme nom.", "Même si l'ID contient des majuscules, tout ce qui n'est pas l'initiale est converti en minuscules.", "Pour les langues autres que l'anglais, il faut régler le champ du nom séparément."],
					children: {
						example: {
							title: "Exemple",
							summary: "Un exemple concret de conversion d'ID",
							points: ["Si l'ID est `stylish-strong-axe`, le nom devient `Stylish Strong Axe`.", "Si l'ID est `stylish-STRONG-axe`, il devient également `Stylish Strong Axe`."],
						},
					},
				},
				noDuplicate: {
					title: "Ne pas être en double",
					summary: "Interdiction de dupliquer un ID au sein d'un même type",
					points: ["Comme il sert à distinguer les éléments, ne le dupliquez pas au sein de chacun des types : catégorie, action, objet, groupe, événement, compétence et préréglage.", "Les événements traitent les tâches, les événements de changement et les événements fixes ensemble comme un seul type : ne les dupliquez donc pas non plus entre eux.", "Le même ID dans des types différents ne pose aucun problème.", "Un monde comportant des doublons provoque une erreur lors de la validation."],
					links: { type: "type" },
				},
			},
		},
		name: {
			title: "Nom",
			summary: "Le nom affiché de l'élément",
			points: ["C'est le nom de l'élément affiché dans le jeu.", "Vous pouvez aussi saisir des langues autres que l'anglais.", "Un nom identique à celui d'un autre élément ne pose pas de problème.", "Vous pouvez saisir jusqu'à 20 caractères.", "S'il n'entre pas dans la largeur d'affichage, la partie qui dépasse est abrégée par `…`."],
			children: {
				translateFromId: {
					title: "Conversion automatique à partir de l'ID",
					summary: "La fonction qui génère automatiquement le nom à partir de l'ID",
					points: ["Laissé vide, il s'affiche automatiquement à partir de l'ID. Reportez-vous à la section précédente pour le détail."],
				},
			},
		},
		explanation: {
			title: "Texte de description",
			summary: "La description détaillée de l'élément",
			points: ["C'est le texte de description de l'élément affiché dans le jeu.", "Vous pouvez aussi saisir des langues autres que l'anglais. Même un texte long s'affiche en entier.", "S'il n'y a pas de description, laissez vide."],
		},
		icon: {
			title: "Icône",
			summary: "Le réglage de l'icône qui représente l'élément",
			points: ["Comme icône, vous pouvez régler une image, Iconify ou un émoji.", "Iconify est un service qui fournit des icônes de toutes sortes.", "Si vous en réglez plusieurs, elles s'affichent par ordre de priorité : image, Iconify puis émoji."],
			children: {
				image: {
					title: "Image",
					summary: "Utiliser n'importe quel fichier image",
					points: ["C'est l'image qui représente l'élément.", "À l'importation, elle est automatiquement réduite à 60×60 pixels au maximum et recompressée.", "Elle est inutile si vous avez réglé Iconify ou un émoji."],
					children: {
						"file-type": {
							title: "Types de fichier",
							summary: "Les formats de fichier image pris en charge",
							points: ["Les formats courants que le navigateur peut afficher sont utilisables.", "JPEG, PNG, GIF, WebP, SVG, etc.", "Les GIF et les AVIF sont convertis en PNG. Les JPEG et les WebP sont réduits en conservant leur format d'origine.", "Le SVG est intégré tel quel, sans être réduit : évitez donc ceux de grande taille."],
						},
					},
				},
				iconify: {
					title: "Iconify",
					summary: "Utilisation des jeux d'icônes Iconify",
					points: ["C'est l'icône qui représente l'élément.", "Si vous avez réglé une image, c'est elle qui s'affiche en priorité."],
					children: {
						iconify: {
							title: "Comment chercher une icône",
							summary: "Comment choisir une icône sur Iconify",
							points: ["Cherchez sur `Iconify` les icônes affichables.", "La recherche d'icônes vous fait trouver tout de suite l'icône la plus adaptée.", "Quand vous sélectionnez une icône, son identifiant, comme `game-icons:sword-wound` (le type de jeu d'icônes `:` le nom de l'icône), s'affiche : collez-le tel quel dans ce champ d'icône."],
							images: ["iconify-selection.png"],
							links: { iconify: "https://icon-sets.iconify.design" },
						},
					},
				},
				emoji: {
					title: "Émoji",
					summary: "Afficher l'icône avec un émoji",
					points: ["Affiche un émoji comme icône.", "Saisissez tel quel un émoji Unicode.", "Comme c'est l'émoji installé dans l'environnement d'exécution qui est utilisé, l'affichage diffère un peu selon l'utilisateur.", "Avec Iconify, vous pouvez régler des émojis qui ne dépendent pas de chaque environnement", "Vous pouvez afficher des caractères autres que des émojis, mais avec plusieurs caractères l'affichage risque de se casser.", "Par exemple, vous saisissez un émoji comme `🗡️` ou `⚔️`."],
				},
			},
		},
		color: {
			title: "Couleur",
			summary: "Le réglage de la couleur d'affichage de l'élément",
			points: ["En tant que couleur de l'élément, elle s'applique à l'icône de l'élément et à sa couleur de fond.", "Elle se choisit dans le sélecteur de couleur de l'éditeur.", "Le noir (`#000000`) est traité comme la valeur signifiant « aucune couleur réglée ». La valeur initiale du sélecteur de couleur est également ce noir.", "Si vous voulez un rendu noir, indiquez une couleur légèrement décalée, comme `#010101`."],
			children: {
				"heritage-from-parent": {
					title: "Héritage depuis l'élément parent",
					summary: "La reprise du réglage de couleur de l'élément parent",
					points: ["Les actions, objets et événements sans couleur réglée héritent de la couleur de la catégorie à laquelle ils appartiennent.", "La hiérarchie de l'héritage est la suivante.", "Pour un élément dont la couleur est réglée individuellement, cette couleur est prioritaire. Elle n'est pas écrasée même si la catégorie a une couleur.", "L'usage de base consiste à décider une couleur par catégorie et à laisser l'héritage faire pour ce qui est en dessous. On règle une couleur individuelle lorsqu'on veut faire ressortir un élément précis.", "Si un attribut (attribute) est réglé sur l'action, la couleur héritée n'est pas celle de la catégorie à laquelle elle appartient, mais celle de la catégorie indiquée dans l'attribut.", "La catégorie elle-même n'a personne dont hériter. Si la couleur de la catégorie reste le noir (`#000000`), cette catégorie et les éléments en dessous sans couleur réglée s'affichent dans la couleur intermédiaire entre la couleur de la barre et la couleur du texte du design.", "Les groupes, les compétences et les préréglages n'héritent pas et n'utilisent que la couleur réglée sur eux-mêmes."],
					quote: colorTree,
					links: { type: "type" },
				},
			},
		},
		copy: {
			title: "Copie des informations",
			summary: "Dupliquer les informations d'un autre élément",
			points: ["Appuyer sur le bouton `Copy Information` copie d'un coup les informations d'un autre élément vers cet élément.", "Choisissez le type de la source de la copie (catégorie, action, objet, groupe, événement, compétence ou préréglage), puis saisissez son ID.", "Tous les champs, y compris l'ID d'identification, sont écrasés. Après la copie, changez l'ID d'identification pour un ID qui n'est pas en double."],
			links: { type: "type" },
		},
	},
	options: {
		label: "information",
	},
};

export const component: Markdown = {
	title: "Composant",
	summary: "Pièces communes",
	points: ["Les pièces communes utilisées dans les réglages de chaque endroit sont extraites et traitées à part.", "Les composants utilisés dans l'un ou l'autre de ces endroits sont communs, mais selon l'endroit certains champs du composant ne sont pas utilisés."],
	list: expandList("Composant", [information, requirement, acquisition, combat, property], "Description"),
	options: {
		label: "component",
		linkedList: true,
	},
};

// type

export const preset: Type.Information = {
	...information,
	title: "Préréglage",
	summary: "Personnalisation de l'affichage des éléments du système",
	points: ["Remplace les textes d'interface et les icônes intégrés d'avance au moteur du jeu (le lecteur).", "Seuls ceux dont l'ID correspond à un préréglage existant sont remplacés. Ajouter un préréglage dont l'ID ne correspond à aucun ID existant ne provoque pas d'erreur, mais cela n'a aucun effet sur l'affichage car rien ne s'y réfère.", "Seuls les champs que vous réglez sont remplacés. Si vous ne réglez que l'icône, par exemple, ce sont les originaux qui sont utilisés pour le nom, la couleur et les autres champs.", "L'écrasement du nom et de la description est prioritaire sur les traductions de chaque langue intégrées au lecteur. La chaîne que vous écrasez s'affiche telle quelle dans toutes les langues.", "Si vous voulez changer le texte selon la langue, indiquez-le dans le fichier de traduction `translations/world` produit lorsque la traduction est activée. C'est celui-là qui est le plus prioritaire."],
	options: {
		label: "preset",
	},
};

export const task: Type.Event = {
	title: "Tâche",
	summary: "Une mission qui est accomplie lorsque les conditions sont remplies",
	points: ["Elle est accomplie lorsque les conditions que vous réglez sont remplies, et un message s'affiche en haut de l'écran.", "Elle s'affiche dans la liste des missions du lecteur et dans la liste des tâches de la catégorie.", "Une tâche sans condition réglée n'est jamais accomplie.", "Une fois accomplie, elle le reste même si les conditions cessent ensuite d'être remplies, et la récompense peut être reçue à tout moment.", "La récompense n'est pas remise automatiquement. Le joueur la reçoit lorsqu'il ouvre la tâche et appuie sur la barre Obtention.", "Jusqu'à ce que la récompense soit reçue, la barre de la liste porte un ruban indiquant qu'elle n'a pas encore été réclamée.", "Une tâche sans récompense réglée n'affiche pas de barre Obtention et est terminée dès qu'elle est accomplie.", "Vous ne pouvez pas recevoir la récompense tant que le nombre de sortes d'objets que vous pouvez détenir est à sa limite. Faites du tri, puis réclamez-la de nouveau.", "Avec l'obtention, vous pouvez modifier le niveau d'une catégorie, le nombre d'exécutions d'une action et la quantité possédée d'un objet.", "Ce que vous voulez déclencher à un moment autre que les conditions, comme le premier lancement ou une fin de partie, se règle avec un événement fixe (unique)."],
	links: { unique: "unique" },
	children: {
		information: information,
		category: {
			title: "Catégorie",
			summary: "L'ID de la catégorie à laquelle la tâche appartient",
			points: ["Indiquez l'ID de la catégorie à laquelle cette tâche appartient.", "Une fois réglé, la liste des tâches s'ajoute à l'écran de la catégorie du lecteur, et dans la liste des missions elles sont aussi regroupées par catégorie.", "Laissée vide, la tâche n'appartient à aucune catégorie et s'affiche ensemble en tête de la liste des missions.", "Si aucune couleur n'est réglée sur la tâche elle-même, elle hérite de la couleur de la catégorie."],
			links: { category: "category" },
		},
		timing: {
			title: "Moment",
			summary: "Le moment où la tâche se déclenche (fixé à `tasked`)",
			points: ["La tâche est fixée à `tasked` (quand les conditions que vous réglez sont remplies) et n'est pas modifiable.", "La récompense ne peut être reçue qu'une seule fois, et une fois reçue elle reste accomplie sans autre changement.", "Ce que vous voulez déclencher à un autre moment déterminé se règle avec un événement fixe (unique)."],
			links: { unique: "unique" },
		},
		unlocked: {
			title: "État d'affichage initial",
			summary: "L'état d'affichage initial de l'icône de la tâche (l'accomplissement est décidé par les conditions et ce réglage ne l'accomplit pas)",
			points: ["Les conditions d'accomplissement d'une tâche sont décidées par requirements, et ce champ n'affecte que l'aspect de l'icône dans la liste.", "secreted : Elle n'apparaît pas du tout dans la liste des tâches tant que tous les requirements ne sont pas remplis (l'accomplissement lui-même se produit toujours par les conditions).", "hidden et hinted : L'icône s'affiche barrée d'un trait, comme non encore déverrouillée.", "released : Le trait disparaît et elle s'affiche comme déjà déverrouillée.", "Une tâche accomplie une fois ne disparaît pas de la liste, et elle continue de s'afficher comme accomplie même si les conditions cessent ensuite d'être remplies."],
		},
		requirements: { ...requirement, options: { ...requirement.options, array: true }, summary: "Les conditions d'accomplissement de la tâche" },
		requiringGroup: {
			title: "Cumul par groupe",
			summary: "Traite l'id des conditions comme un ID de groupe et juge d'après la valeur totale des éléments qui lui appartiennent",
			points: ["Une fois activé, l'id que vous réglez dans les conditions (requirements) est traité comme l'ID d'un groupe placé directement sous le monde.", "Une condition dont le type est une catégorie est jugée d'après le total des niveaux de toutes les catégories qui appartiennent à ce groupe.", "Une condition dont le type est une action est jugée d'après le total des nombres d'exécutions de toutes les actions qui appartiennent à ce groupe.", "Une condition dont le type est un objet est jugée d'après le total des quantités possédées de tous les objets qui appartiennent à ce groupe.", "Les éléments qui ne sont pas déverrouillés (tout état autre que released) ne sont pas comptés dans le total.", "La probabilité de consommation (chance) et la condition d'équipement (equipment) d'un objet sont ignorées, et la quantité possédée n'est pas non plus consommée. Elles ne servent qu'au jugement.", "Une fois désactivé, l'id des conditions est traité comme l'ID d'une catégorie, d'une action ou d'un objet particuliers, comme auparavant."],
			links: { group: "group" },
		},
		acquisitions: { ...acquisition, options: { ...acquisition.options, array: true }, summary: "La récompense que l'on peut recevoir lorsque la tâche est accomplie" },
		group: {
			title: "Groupe de tâches",
			summary: "Le classement en groupe d'affichage de la tâche",
			points: ["Appliquez l'un de ceux définis dans les groupes placés directement sous le monde.", "Dans la liste des tâches d'une catégorie, elles s'affichent séparées par groupe, avec un titre pour chacun. Les tâches sans groupe réglé forment aussi un bloc, et le préréglage « Tâche » sert de titre.", "Dans la liste des missions, elles ne sont pas séparées par des titres : seul l'ordre dans lequel elles s'alignent est regroupé par groupe.", "L'ordre dans lequel les blocs s'alignent est décidé par la position où apparaît la première tâche de ce groupe."],
			links: { group: "group" },
		},
	},
	options: {
		label: "task",
	},
};

// 構造はtaskと同じで、timingだけchanged固定。プレイヤーの画面には一切表示されない内部処理用のイベント
export const changed: Type.Event = {
	title: "Événement de changement",
	summary: "Un événement de traitement interne qui se déclenche lorsque la quantité d'une catégorie, d'une action ou d'un objet augmente d'un coup de la quantité des conditions ou plus",
	points: [
		"Il est vérifié à tous les moments où une quantité change : achèvement d'une action, achat ou vente, ouverture d'un coffre au trésor, etc.",
		"Les conditions (requirements) sont jugées d'après l'ampleur de l'augmentation en ce seul moment, et non d'après une valeur absolue comme la quantité possédée. De petites augmentations réparties en plusieurs fois ne s'additionnent pas.",
		"Si vous réglez par exemple la condition d'un objet sur 3, elle est remplie dès que cet objet augmente de 3 ou plus en une seule fois. Une diminution ne compte pas comme une augmentation.",
		"Si vous réglez plusieurs conditions, elles doivent toutes être remplies en même temps lors de ce seul changement. Un événement de changement sans aucune condition réglée ne se déclenche pas.",
		"Régler la valeur d'une condition sur `0` la fait compter comme remplie même sans augmentation, si bien qu'il se déclenche chaque fois qu'une quantité change.",
		"La probabilité de consommation (chance) et l'équipement (equipment) des conditions ne sont pas regardés. Le jugement n'utilise que l'ampleur de l'augmentation, et les éléments utilisés dans les conditions ne diminuent pas non plus.",
		"La récompense est reçue automatiquement chaque fois que les conditions sont remplies, et il se déclenche encore et encore, autant de fois qu'il le faut. Contrairement à une tâche, ce n'est pas une seule fois et aucune manipulation n'est nécessaire pour la recevoir. Une quantité négative peut aussi être réglée.",
		"Contrairement à une tâche ou à un achat, la limite du nombre de sortes d'objets que vous pouvez détenir n'est pas vérifiée, si bien que de nouveaux objets peuvent s'ajouter au-delà de la capacité.",
		"Une augmentation venant d'une récompense est elle aussi traitée comme un changement : lorsque la récompense d'un événement de changement remplit les conditions d'un autre événement de changement, celui-ci se déclenche à la suite.",
		"Il ne s'affiche pas du tout à l'écran du lecteur. Il n'apparaît pas dans la liste des missions et aucun message d'accomplissement ne s'affiche.",
	],

	important: "Ne réglez pas la récompense d'un événement de changement de façon qu'elle remplisse ses propres conditions. Il ne cesserait plus de se déclencher et le jeu s'arrêterait. Par exemple, un événement dont les conditions sont remplies quand l'objet A augmente d'une unité et dont la récompense remet une unité de l'objet A.",
	links: { unique: "unique" },
	children: {
		information: information,
		category: {
			title: "Catégorie",
			summary: "L'ID de la catégorie à laquelle l'événement de changement appartient (il ne sert qu'au classement, car rien ne s'affiche à l'écran)",
			points: ["Comme rien ne s'affiche à l'écran du lecteur, ce réglage n'a aucun effet sur l'aspect."],
		},
		timing: {
			title: "Moment",
			summary: "Le moment où l'événement de changement se déclenche (fixé à `changed`)",
			points: ["Il est fixé à `changed` et n'est pas modifiable.", "Il est vérifié à tous les moments où une quantité change, et se déclenche de nouveau chaque fois que les conditions sont remplies."],
		},
		unlocked: {
			title: "État d'affichage initial",
			summary: "Il n'a pratiquement aucun effet, car rien ne s'affiche à l'écran",
			points: ["Un événement de changement ne s'affiche pas à l'écran du lecteur, donc ce réglage n'est pas utilisé."],
		},
		requirements: { ...requirement, options: { ...requirement.options, array: true }, summary: "Les conditions de déclenchement de l'événement de changement (jugées d'après l'ampleur de l'augmentation de la quantité)" },
		requiringGroup: {
			title: "Cumul par groupe",
			summary: "Traite l'id des conditions comme un ID de groupe et juge d'après le total des augmentations des éléments qui lui appartiennent",
			points: ["Une fois activé, l'id que vous réglez dans les conditions (requirements) est traité comme l'ID d'un groupe placé directement sous le monde.", "Les augmentations de toutes les catégories, de toutes les actions et de tous les objets qui appartiennent à ce groupe sont additionnées pour le jugement.", "Contrairement au cumul par groupe d'une tâche, l'augmentation d'un élément qui n'est pas encore déverrouillé est elle aussi comptée dans le total.", "Une fois désactivé, l'id des conditions est traité comme l'ID d'une catégorie, d'une action ou d'un objet particuliers, comme auparavant."],
			links: { group: "group" },
		},
		acquisitions: { ...acquisition, options: { ...acquisition.options, array: true }, summary: "La récompense reçue automatiquement lorsque l'événement de changement se déclenche" },
		group: {
			title: "Groupe d'événements de changement",
			summary: "Le classement en groupe d'affichage pour la gestion interne (pratiquement inutilisé, car rien ne s'affiche à l'écran)",
			points: ["Un événement de changement ne s'affiche pas à l'écran du lecteur, donc ce réglage n'a aucun effet sur l'aspect."],
		},
	},
	options: {
		label: "changed",
	},
};

export const group: Type.Information = {
	...information,
	title: "Groupe",
	summary: "Définit les groupes d'affichage des catégories, des actions, des objets et des tâches",
	points: ["Définit les groupes servant à contrôler l'ordre d'affichage. Sur chaque catégorie, action, objet et tâche, vous pouvez régler un groupe défini ici.", "Ceux d'un même groupe s'affichent rassemblés dans une liste. L'ordre dans lequel les blocs s'alignent est décidé par la position où apparaît le premier élément de ce groupe (et non par l'ordre de définition de cette liste des groupes).", "Ceux laissés vides sont eux aussi traités comme un groupe, et les vides se rassemblent entre eux.", "L'ordre de définition de cette liste des groupes ne compte que pour la disposition des emplacements d'équipement. Les emplacements d'équipement s'affichent dans l'ordre où ils sont alignés ici, et un groupe absent d'ici passe à la fin.", "Un groupe peut lui aussi recevoir un nom, une description, une icône et une couleur, et l'écran du groupe permet de voir la liste des catégories, des actions et des objets qui lui appartiennent.", "Si vous activez le cumul par groupe dans les conditions d'un événement, vous pouvez indiquer l'ID d'un groupe et prendre comme condition, tous ensemble, les éléments qui lui appartiennent."],
	links: { requirement: "requirement" },
	options: {
		label: "group",
	},
};

export const skill: Type.Skill = {
	title: "Compétence",
	summary: "Un effet spécial tiré au sort à chaque tour du combat et qui se déclenche",
	points: ["C'est un effet spécial tiré au sort à chaque tour et qui se déclenche dans une action de combat (`stamina`). Il ne se déclenche pas dans les actions des autres types.", "Son contenu se définit ici, et il est appelé par ID depuis `skill` d'un objet (votre camp) et `skills` d'une action (le camp de l'adversaire).", "Les candidates de votre camp sont les compétences appelées par les objets qui produisent leur effet à ce moment-là (`unnecessary` tant qu'il est possédé, `necessary` et `consumable` tant qu'ils sont équipés). Si vous retirez un équipement, sa compétence sort aussi des candidates.", "À chaque tour, les candidates sont mélangées pour votre camp et pour celui de l'adversaire, la probabilité de déclenchement est jugée depuis la première, et seule la première qui aboutit se déclenche. Si aucune n'aboutit, il n'y a pas de compétence pour ce tour.", "Lorsque la même compétence est appelée depuis plusieurs objets ou actions, elle gagne autant d'occasions dans le tirage et se déclenche donc plus facilement."],
	links: { item: "item", action: "action" },
	children: {
		information: information,
		chance: {
			title: "Probabilité de déclenchement [0-1]",
			summary: "La probabilité que cette compétence se déclenche à ce tour",
			points: ["À chaque tour, on juge avec cette probabilité si elle se déclenche. À `1` elle aboutit à coup sûr, à `0` elle ne se déclenche pas. La valeur par défaut est `1`.", "Le jugement avance dans l'ordre depuis la première des candidates mélangées, et seule la première compétence qui aboutit se déclenche. C'est pourquoi, lorsqu'il y a plusieurs candidates, la proportion réelle de déclenchement est inférieure à cette valeur.", "Si l'affichage de la description est activé, cette valeur influe aussi sur la fréquence d'apparition de la description. Plus une compétence se déclenche facilement, moins sa description se répète."],
		},
		property: {
			...combat,
			summary: "Les valeurs de combat ajoutées au tour où elle se déclenche",
			points: ["Uniquement au tour où cette compétence se déclenche, les valeurs de combat indiquées ici s'ajoutent en tant que correction par écart de niveau.", "Seule la valeur de récupération fait exception : elle n'agit pas à ce tour mais toute d'un bloc sur la récupération après l'issue du combat. Parmi les valeurs de récupération des compétences déclenchées pendant l'action, la plus élevée s'ajoute au montant récupéré pour les compétences de votre camp et s'en retranche pour celles de l'adversaire."],
		},
		comment: {
			title: "Affichage de la description",
			summary: "Afficher ou non la description dans une notification toast au déclenchement",
			points: ["C'est l'indicateur qui détermine si la description s'affiche dans une notification toast lorsque cette compétence se déclenche.", "Si c'est activé, elle s'affiche à chaque déclenchement avec une probabilité de (100% − la probabilité de déclenchement) ÷ 2. Si la probabilité de déclenchement est de 40%, cela fait 30%.", "Si c'est désactivé, elle ne s'affiche pas.", "Si la description est vide, elle ne s'affiche pas même si vous activez l'option."],
		},
	},
	options: {
		label: "skill",
	},
};

export const item: Type.Item = {
	title: "Objet",
	summary: "Éléments de biens tels que les équipements et les consommables",
	points: ["Ce sont les éléments qui concernent la possession de choses : équipements, consommables, objets de valeur, etc.", "Des emplacements d'équipement sont créés par groupe pour chaque catégorie, et un seul des objets d'un même emplacement peut être équipé. On peut aussi faire un objet impossible à équiper.", "Comme la quantité possédée constitue elle-même la progression, un objet peut aussi servir de drapeau ou de compteur. Si vous en faites un objet sans effet et impossible à équiper, il devient un élément qui ne fait que compter un nombre."],
	children: {
		information: information,
		category: {
			title: "Catégorie",
			summary: "L'ID de la catégorie à laquelle l'objet appartient",
			points: ["Indiquez l'ID de la catégorie à laquelle cet objet appartient. Il s'aligne dans la liste des objets de la catégorie indiquée, et les emplacements d'équipement sont eux aussi créés par catégorie.", "Si aucune couleur n'est réglée sur l'objet lui-même, il hérite de la couleur de la catégorie.", "La cible sur laquelle portent les effets des propriétés peut être indiquée indépendamment de la catégorie d'appartenance : un objet d'une autre catégorie peut donc lui aussi produire un effet."],
			links: { category: "category", property: "property" },
		},
		group: {
			title: "Groupe",
			summary: "Le classement en groupe d'affichage de l'objet",
			points: ["Appliquez l'un de ceux définis dans les groupes placés directement sous le monde.", "La liste des objets s'affiche dans l'ordre des groupes que vous réglez.", "Laissé vide, il n'est pas réparti en groupes."],
			links: { group: "group" },
		},
		unlocked: {
			title: "État de déverrouillage initial",
			summary: "L'état initial d'affichage et de déverrouillage de l'élément (il passe automatiquement à un état supérieur lorsque les conditions de déclenchement sont remplies)",
			points: ["secreted : Il n'apparaît pas du tout dans l'interface tant que tous les requirements ne sont pas remplis (il ne sort pas non plus dans les indices et il est masqué dans les listes de conditions et de récompenses).", "hidden : Tant qu'aucun élément déverrouillé ne s'y réfère et que ses conditions ne sont pas remplies, il est complètement caché (le nom est grisé et il est inutilisable).", "hinted (par défaut) : Seul le nom s'affiche par avance, mais il est inutilisable jusqu'à son déverrouillage.", "released : Il est déverrouillé et utilisable dès le début, indépendamment des conditions (autrefois « afficher dès le début »).", "Dès qu'un objet a été obtenu ne serait-ce qu'une fois, il reste déverrouillé indépendamment de ce réglage et des conditions.", "À l'inverse, un objet sans aucune condition réglée n'est pas déverrouillé tant qu'il n'est pas obtenu, à moins de le mettre sur `released`. Réglez toujours des conditions sur les objets que vous voulez faire acheter."],
		},
		buyingValue: {
			title: "Prix d'achat [Pièces]",
			summary: "Le réglage du prix d'achat de l'objet",
			points: ["C'est la quantité de monnaie payée pour acheter une unité de l'objet. La valeur par défaut est `-1` (achat impossible).", "Un objet qui n'est pas déverrouillé ne peut pas être acheté, même si un prix est réglé.", "La quantité achetable en une fois est la plus petite entre celle que permet la monnaie possédée et ce qui reste jusqu'à la quantité maximale possédée."],
			list: [
				["Prix d'achat", "Traitement"],
				["0", "Achat impossible"],
				["Une valeur supérieure à 0", "Le prix auquel il peut être acheté"],
				["Une valeur inférieure à 0 (par exemple -1)", "Achat impossible (traité comme 0)"],
			],
		},
		sellingValue: {
			title: "Prix de vente [Pièces]",
			summary: "Le réglage du prix de vente de l'objet",
			points: ["C'est la quantité de monnaie reçue en vendant une unité de l'objet. La valeur par défaut est `0` (vente impossible).", "La monnaie reçue est celle indiquée par l'ID de monnaie de commerce, la même qu'à l'achat.", "Il ne se déduit jamais automatiquement du prix d'achat : réglez donc toujours une valeur si vous voulez qu'il soit vendable.", "Les valeurs négatives ne peuvent pas être réglées."],
			list: [
				["Prix de vente", "Traitement"],
				["0", "Vente impossible"],
				["Une valeur supérieure à 0", "Il peut être vendu à ce prix"],
			],
		},
		maximum: {
			title: "Quantité maximale possédée [Unités]",
			summary: "La limite de la quantité maximale possédée de l'objet",
			points: ["À 0, la quantité possible n'a pas de limite. La valeur par défaut est `0`.", "À 1 ou plus, on ne peut en posséder que jusqu'à ce nombre. Une fois la limite atteinte, la quantité possédée n'augmente plus, même si l'on en obtient davantage.", "Cela devient aussi la limite de la quantité achetable.", "Si la quantité possédée dans la sauvegarde dépasse la limite, elle est ramenée à la limite au chargement."],
		},
		equipmentType: {
			title: "Type d'équipement",
			summary: "Le réglage de type concernant l'équipement, l'effet et la consommation de l'objet",
			points: ["Pour les objets `necessary` et `consumable`, leur groupe devient automatiquement un emplacement d'équipement de la catégorie.", "Au sein d'un même groupe, un seul objet peut être équipé. Lorsque vous équipez un nouvel objet, l'équipement existant du même groupe est retiré automatiquement.", "L'ordre des emplacements d'équipement suit l'ordre de définition de la liste des groupes du monde.", "`unnecessary` produit son effet qu'il soit équipé ou non, et l'ampleur de l'effet est proportionnelle à la quantité possédée (aucun effet à 0, n fois avec n unités).", "`consumable` n'est consommé que lorsque les propriétés de cet objet portent sur l'action exécutée, à raison d'une unité par action. Il ne diminue pas pour les actions que son effet n'atteint pas.", "Un objet consommé jusqu'à 0 est automatiquement déséquipé.", "Pour l'équiper, il faut remplir à la fois les conditions de cet objet et celles de la catégorie."],
			list: [
				["Valeur", "Équipement", "Production de l'effet", "Consommation", "Exemple"],
				["`necessary`", "Nécessaire", "Seulement une fois équipé (pour une unité)", "Non", "Équipements tels que les épées et les armures"],
				["`consumable`", "Nécessaire", "Seulement une fois équipé (pour une unité)", "Consommé à l'exécution de l'action", "Objets consommés pour obtenir un effet, comme les potions"],
				["`unnecessary`", "Inutile", "Toujours tant qu'il est possédé (proportionnel à la quantité possédée)", "Non", "Objets passifs qui produisent un effet du simple fait d'être détenus"],
				["`impossible`", "Impossible", "Aucun", "Non", "Objets sans effet, comme les matériaux et les bricoles"],
			],
		},
		requirements: { ...requirement, options: { ...requirement.options, array: true }, summary: "Les conditions pour que l'objet soit déverrouillé et devienne équipable" },
		properties: { ...property, options: { ...property.options, array: true }, summary: "Les effets de propriété que possède l'objet" },
		coinId: { title: "ID de monnaie de commerce", summary: "L'ID de la monnaie utilisée pour le commerce de cet objet", points: ["Indiquez l'ID de la monnaie (coins) utilisée en commun pour le prix d'achat et le prix de vente.", "Laissé vide, ou si vous indiquez un ID absent de la liste des monnaies, c'est la monnaie principale (la première de coins) qui est utilisée."] },
		// スキルの実体ではなくワールド直下のskillsのID参照なので、スキル自身の項目は持たせない
		skill: { title: skill.title, summary: "L'ID de la compétence que cet objet apporte à votre camp", points: ["Indiquez un ID défini dans les compétences placées directement sous le monde. Laissé vide, il n'y a pas de compétence.", "Tant que cet objet produit son effet (`unnecessary` tant qu'il est possédé, `necessary` et `consumable` tant qu'il est équipé), la compétence indiquée entre dans le tirage de votre camp.", "Si vous indiquez un ID inexistant, il est ignoré."], links: { skill: "skill" }, options: { label: "skill" } },
	},
	options: {
		label: "item",
	},
};

export const action: Type.Action = {
	title: "Action",
	summary: "Les éléments de comportement comme la récolte, la fabrication et le combat",
	points: ["C'est un élément qui représente un comportement comme la récolte, la fabrication, le commerce ou le combat.", "Chaque fois que vous agissez, vous gagnez de l'expérience et votre niveau monte.", "Vous pouvez la régler pour qu'elle consomme ou fasse obtenir des objets à chaque fois que vous agissez.", "Il existe plusieurs sortes de schémas de comportement."],
	children: {
		information: information,
		category: {
			title: "Catégorie",
			summary: "L'ID de la catégorie à laquelle l'action appartient",
			points: ["Indiquez l'ID de la catégorie à laquelle cette action appartient."],
		},
		attribute: {
			title: "Attribut",
			summary: "La catégorie d'attribut propre à l'action",
			points: ["Vous pouvez régler un attribut (catégorie) individuel.", "S'il est vide, la catégorie à laquelle elle appartient est héritée.", "Par exemple, si vous réglez individuellement l'attribut de magie sur une action qui appartient à une catégorie appelée Château du Roi Démon, le niveau et les propriétés de la catégorie de magie sont calculés et appliqués au temps d'achèvement et aux dégâts de l'action.", "L'expérience en cas de réussite va elle aussi dans la catégorie réglée dans l'attribut, et non dans la catégorie à laquelle elle appartient.", "Si aucune couleur n'est réglée sur l'action elle-même, les couleurs de l'icône et du fond héritent de la couleur de la catégorie réglée dans l'attribut, et non de celle de la catégorie à laquelle elle appartient."],
			links: { category: "category" },
		},
		group: {
			title: "Groupe",
			summary: "La classification par groupe d'affichage de l'action",
			points: ["Appliquez l'un de ceux définis dans les groupes placés directement sous le monde.", "La liste des actions s'affiche dans l'ordre des groupes que vous avez réglés."],
			links: { group: "group" },
		},
		unlocked: {
			title: "État de déverrouillage initial",
			summary: "L'état initial d'affichage et de déverrouillage de l'élément (il passe automatiquement à un état supérieur lorsque les conditions de déclenchement sont remplies)",
			points: ["secreted : Il n'apparaît pas du tout dans l'interface tant que tous les requirements ne sont pas remplis (il ne sort pas non plus dans les indices et il est masqué dans les listes de conditions et de récompenses).", "hidden : Tant qu'aucun élément déverrouillé ne s'y réfère et que ses conditions ne sont pas remplies, il est complètement caché (le nom est grisé et il est inutilisable).", "hinted (par défaut) : Seul le nom s'affiche par avance, mais il est inutilisable jusqu'à son déverrouillage.", "released : Il est déverrouillé et utilisable dès le début, indépendamment des conditions (autrefois « afficher dès le début »)."],
		},
		level: {
			title: "Niveau",
			summary: "Le niveau de difficulté de l'action",
			points: ["La difficulté de l'action est exprimée par un niveau.", "À l'exécution, elle est comparée au niveau du joueur et chaque propriété est calculée.", "Le terme de comparaison est le niveau de la catégorie réglée dans l'attribut.", "Par exemple, si vous exécutez une action plus élevée que votre propre niveau, il y a des effets comme la baisse du taux de réussite.", "Tant que les conditions sont remplies, elle peut être exécutée même si le niveau du joueur est inférieur à cette valeur.", "Toutefois, si `actionLevelLimit` de général (la limite de niveau des actions) est activé, cette valeur est ajoutée automatiquement comme condition sur le niveau de la catégorie, si bien qu'elle ne peut pas être exécutée tant que le niveau n'est pas atteint. Pour les catégories qui n'ont pas de niveau, elle n'est pas ajoutée."],
			links: { property: "property" },
		},
		requirements: { ...requirement, options: { ...requirement.options, array: true }, summary: "Les conditions nécessaires à l'exécution de l'action" },
		seconds: {
			title: "Temps requis [Secondes]",
			summary: "Le temps standard que prend l'exécution de l'action",
			points: ["C'est le temps standard (en secondes) nécessaire pour effectuer l'action une fois.", "Pour le type `stamina`, c'est l'intervalle de temps que prend un tour (entamer une fois l'endurance de chaque côté). Les tours qui récupèrent l'endurance après le dénouement utilisent le même intervalle.", "Il varie à l'exécution réelle par le calcul des propriétés."],
			links: { property: "property" },
		},
		experience: {
			title: "Expérience [100 pour le niveau suivant]",
			summary: "L'expérience obtenue lorsque l'action réussit",
			points: ["C'est l'expérience standard obtenue lorsque l'action est exécutée une fois et réussit. 100 correspond à l'expérience d'un niveau.", "Dans le cas d'un combat, elle est obtenue en battant l'adversaire, il est donc bon de la régler généreusement.", "Elle varie à l'exécution réelle par le calcul des propriétés."],
			links: { property: "property" },
		},
		chance: {
			title: "Taux de réussite [0-1]",
			summary: "La probabilité de réussite à l'achèvement de l'action",
			points: ["C'est la probabilité de réussir lorsque l'action s'achève.", "Avec `1` elle réussit toujours, et avec `0` elle échoue toujours.", "En cas d'échec aussi, les objets consommés sont consommés, mais l'expérience et le nombre d'exécutions n'augmentent pas.", "Parmi les récompenses, seules celles dont la probabilité (chance) est réglée sur une valeur positive sont obtenues en cas de réussite. Celles réglées sur une valeur négative ne sont obtenues qu'en cas d'échec, si bien qu'échouer ne veut pas forcément dire ne rien obtenir.", "Elle varie à l'exécution réelle par le calcul des propriétés."],
		},
		maximum: {
			title: "Nombre maximal d'exécutions [Fois]",
			summary: "Le nombre maximal de fois où l'action peut s'achever",
			points: ["C'est la limite supérieure du nombre de fois où l'action peut réussir et s'achever.", "Avec `0` c'est illimité.", "Une fois la limite supérieure atteinte, l'action devient inexécutable."],
		},
		acquisitions: { ...acquisition, options: { ...acquisition.options, array: true }, summary: "La récompense obtenue lorsque l'action réussit" },
		progressType: {
			title: "Type d'avancement",
			summary: "Le type d'exécution de l'action",
			points: ["Il existe quatre sortes."],
			list: [
				["Type", "Comportement", "Endurance", "Exemple"],
				["`persistent`", "C'est un type où l'action est exécutée de façon répétée et continue. Chaque fois qu'elle s'achève une fois, vous obtenez de l'expérience et une récompense.", "Sans rapport", "Abattage, extraction minière, pêche"],
				["`single`", "Elle exécute l'action une fois. Si elle est interrompue en cours de route, l'avancement est enregistré et vous pouvez reprendre la suite la fois suivante. À l'achèvement, l'utilisateur appuie sur l'action de confirmation et reçoit le résultat.", "Sans rapport", "Crochetage d'un coffre au trésor, apprentissage d'une compétence par la lecture"],
				["`snap`", "C'est un type où l'action est exécutée instantanément. Elle s'achève tout de suite, sans écoulement du temps.", "Sans rapport", "Troc, utilisation d'un objet"],
				["`stamina`", "À chaque temps requis, l'endurance du joueur et celle de l'adversaire diminuent chacune. Quand l'endurance de l'adversaire est épuisée, vous obtenez de l'expérience et une récompense. Quand l'endurance du joueur est épuisée, c'est une fin de partie et toutes les actions en cours d'exécution sont annulées.", "Avec rapport", "Combat, travail comportant un danger"],
			],
		},
		property: combat,
		// スキルの実体ではなくワールド直下のskillsのID参照の一覧
		skills: { title: skill.title, summary: "La liste des compétences que déclenche l'adversaire", points: ["Indiquez les compétences que déclenche l'adversaire de cette action par les ID des compétences placées directement sous le monde.", "Cela n'a de sens que pour les actions du type `stamina`.", "À chaque tour, la liste est remise dans un ordre aléatoire et la probabilité de déclenchement est jugée depuis le début, et seule la première qui se vérifie se déclenche. Si aucune ne se vérifie, ce tour se passe sans compétence.", "Les compétences de votre propre camp ne se rassemblent pas ici, mais à partir des compétences réglées sur les objets qui produisent un effet (les objets qui agissent du seul fait d'être possédés et n'ont pas besoin d'être équipés, ainsi que les nécessaires et les consommables équipés).", "Les ID qui n'existent pas sont ignorés."], options: { label: "skill", array: true } },
	},
	options: {
		label: "action",
	},
};

export const category: Type.Category = {
	title: "Catégorie",
	summary: "Le grand cadre qui classe les actions et les objets",
	points: ["Elle représente une grande classification.", "Par exemple, vous pouvez la régler comme un cadre libre : courte portée, longue portée, magie, donjon, forge, atelier et ainsi de suite.", "Les actions et les objets sont placés directement sous le monde et sont reliés par l'ID de catégorie."],
	children: {
		information: information,
		group: {
			title: "Groupe",
			summary: "La classification par groupe d'affichage de la catégorie",
			points: ["Appliquez l'un de ceux définis dans les groupes placés directement sous le monde.", "La liste des catégories s'affiche dans l'ordre des groupes que vous avez réglés."],
			links: { group: "group" },
		},
		unlocked: {
			title: "État de déverrouillage initial",
			summary: "L'état initial d'affichage et de déverrouillage de l'élément (il passe automatiquement à un état supérieur lorsque les conditions de déclenchement sont remplies)",
			points: ["secreted : Il n'apparaît pas du tout dans l'interface tant que tous les requirements ne sont pas remplis (il ne sort pas non plus dans les indices et il est masqué dans les listes de conditions et de récompenses).", "hidden : Tant qu'aucun élément déverrouillé ne s'y réfère et que ses conditions ne sont pas remplies, il est complètement caché (le nom est grisé et il est inutilisable).", "hinted (par défaut) : Seul le nom s'affiche par avance, mais il est inutilisable jusqu'à son déverrouillage.", "released : Il est déverrouillé et utilisable dès le début, indépendamment des conditions (autrefois « afficher dès le début »)."],
		},
		requirements: { ...requirement, options: { ...requirement.options, array: true }, summary: "Les conditions nécessaires à l'utilisation de la catégorie" },
		numeric: {
			title: "Présence d'un niveau",
			summary: "La présence de la fonction de niveau de catégorie",
			points: ["C'est le drapeau indiquant si cette catégorie possède un niveau ou non.", "S'il est activé, elle possède un niveau, et s'il est désactivé, elle n'en possède pas.", "À titre d'exemple, il y a un usage où les catégories fondées sur l'expérience, comme l'escrime ou la magie, sont activées, et les catégories de lieux, comme les donjons ou les forges, sont désactivées.", "S'il est désactivé, aucune expérience n'entre et, dans le calcul des propriétés, l'écart de niveau entre le joueur et l'action est traité comme 0. La correction des propriétés par l'équipement agit toujours de la même façon.", "Une catégorie désactivée est aussi exclue du jugement d'achèvement (completed)."],
		},
		standaloneProgress: {
			title: "Avancement simultané",
			summary: "Le réglage d'exécution en parallèle avec d'autres catégories",
			points: ["C'est le drapeau indiquant si les actions de cette catégorie peuvent avancer en parallèle avec les actions d'autres catégories.", "S'il est activé, elles peuvent avancer en même temps, indépendamment des actions d'autres catégories.", "S'il est désactivé, une seule action peut avancer sur l'ensemble des catégories également réglées sur désactivé.", "Si vous démarrez une nouvelle action dans une catégorie désactivée, l'action en cours n'est pas annulée mais repoussée en tête de la file d'attente. Le nombre d'exécutions restant est conservé et, une fois l'action qui s'est intercalée terminée, elle reprend là où elle s'était arrêtée."],
		},
		background: {
			title: "Fond",
			summary: "Le réglage de fond propre à la catégorie",
			points: ["Il règle le fond de cette catégorie.", "Lorsque la catégorie est sélectionnée, l'image de fond change de concert.", "S'il n'est pas réglé, le fond du design est utilisé tel quel.", "Elle est automatiquement réduite pour tenir dans 256×256 pixels lors de son importation."],
		},
	},
	options: {
		label: "category",
	},
};

export const type: Markdown = {
	title: "Type",
	summary: "La classification de base du monde",
	points: ["Un monde se compose de six types.", "Tous les éléments sont placés directement sous le monde.", "Les actions et les objets sont reliés par l'ID de la catégorie à laquelle ils appartiennent.", "Seuls les événements ne sont pas un type : ils sont placés ensemble par moment dans les événements (events) situés directement sous le monde."],
	list: expandList("Type", [category, action, item, skill, group, preset], "Description"),
	quote: typeTree,
	options: {
		label: "type",
		linkedList: true,
	},
};

// basic

export const development: Type.Development = {
	title: "Développement",
	summary: "La gestion des notes et des erreurs lors du développement du monde",
	points: ["Il sert lors du développement du monde.", "Il concerne le développement et les tests de ce monde et n'a pas d'effet sur le contenu de la partie.", "Le joueur ne voit jamais le contenu relatif au développement."],
	children: {
		version: {
			title: "Version",
			summary: "Le numéro de version de compilation de l'éditeur",
			points: ["Le numéro de version de l'éditeur au moment où le nouveau monde a été créé est enregistré automatiquement.", "Il n'est pas mis à jour même si vous chargez et modifiez un monde déjà existant.", "Le développeur ne peut pas modifier ce contenu."],
		},
		memo: {
			title: "Note",
			summary: "L'enregistrement de notes destiné au développeur",
			points: ["Le développeur peut y écrire librement à titre de note.", "Cela n'a pas de rapport avec la publication du jeu."],
		},
		errors: {
			title: "Erreurs",
			summary: "L'enregistrement des erreurs du résultat de la validation",
			points: ["Le résultat de la validation du monde est enregistré ici automatiquement.", "Par exemple, il affiche comme erreurs des choses telles qu'un type de caractère qui ne peut pas être saisi ou un nombre saisi au-delà de la limite supérieure.", "S'il n'y a eu aucune erreur, un message indiquant la réussite est enregistré à la place, sur une seule ligne.", "Le développeur ne peut pas modifier ce contenu.", "Tant que des erreurs subsistent, le monde ne peut pas être publié. Lorsque vous lancez la publication, la validation est exécutée d'abord et, s'il y a des erreurs, elle s'interrompt là."],
		},
		timestamp: {
			title: "Horodatage",
			summary: "L'enregistrement de la création, de l'enregistrement et de la publication",
			points: ["Les heures de création, d'enregistrement et de publication du monde sont consignées automatiquement.", "Le développeur ne peut pas modifier ce contenu."],
			children: {
				created: {
					title: "Date de création",
					summary: "L'heure de la première création du monde",
					points: ["C'est la date et l'heure de la première création du monde."],
				},
				saved: {
					title: "Date d'enregistrement",
					summary: "L'heure du dernier enregistrement effectué",
					points: ["C'est la date et l'heure du dernier enregistrement du monde."],
				},
				published: {
					title: "Date de publication",
					summary: "L'heure de la dernière publication effectuée",
					points: ["C'est la date et l'heure de la dernière publication du monde."],
				},
			},
		},
		autosaveing: {
			title: "Enregistrement automatique",
			summary: "Activation/désactivation de la fonction d'enregistrement automatique",
			points: ["Il indique si le contenu de la modification est enregistré automatiquement dans le navigateur.", "Vous ne pouvez pas réécrire ce champ directement. Il se change avec le basculement de l'enregistrement automatique dans le menu de l'éditeur."],
		},
	},
	options: {
		label: "development",
	},
};

export const design: Type.Design = {
	title: "Design",
	summary: "Les réglages d'apparence du monde, comme les couleurs et la police",
	points: ["Ce sont les réglages concernant l'affichage du monde.", "Les deux couleurs décidées ici (la couleur de barre et la couleur de texte) deviennent le fond de tout l'écran, et toutes les couleurs employées à l'écran, comme la ligne sélectionnée, l'en-tête d'un groupe et les couleurs d'affirmation et de négation, en sont issues.", "Seule l'image de fond peut être remplacée par catégorie et, dans ce cas, le réglage du côté de la catégorie est prioritaire."],
	children: {
		barColor: {
			title: "Couleur de barre",
			summary: "La couleur qui sert de fond à la barre",
			points: ["Elle est utilisée comme couleur de fond de la barre.", "Comme c'est aussi la couleur qui sert de fond à tout l'écran, la couleur de la ligne sélectionnée en est issue également.", "Les échantillons de couleur des éléments sans couleur réglée et le fond des notifications toast deviennent la couleur intermédiaire entre cette couleur et la couleur de texte."],
		},
		textColor: {
			title: "Couleur de texte",
			summary: "La couleur du texte et du fond",
			points: ["Elle est utilisée comme couleur du texte.", "Le dégradé du fond en est également issu. Si une image de fond est réglée, le même dégradé est éclairci et superposé à l'image.", "Prendre un grand écart de luminosité avec la couleur de barre rend le texte plus lisible. Dans les mondes où l'écart est faible, les échantillons de couleur des éléments sans couleur réglée deviennent eux aussi plus difficiles à distinguer."],
		},
		shadowColor: {
			title: "Couleur d'ombre",
			summary: "La couleur de l'ombre de la barre",
			points: ["Elle est utilisée comme couleur de l'ombre portée sur les barres et l'en-tête.", "La mettre dans une couleur plus sombre que la couleur de barre donne une ombre naturelle."],
		},
		background: {
			title: "Image de fond",
			summary: "L'image de fond de tout le jeu",
			points: ["Elle règle l'image de fond du jeu.", "Si aucune image n'est réglée, le fond devient un dégradé fondé sur la couleur de texte.", "L'image est automatiquement réduite pour tenir dans 256×256 pixels. Les GIF et les AVIF sont convertis en PNG.", "Si une image de fond est réglée sur une catégorie, l'image du côté de la catégorie est prioritaire sur l'écran de cette catégorie.", "L'image réglée peut être supprimée avec le bouton Delete Image."],
			links: { category: "category" },
		},
	},
	options: {
		label: "design",
	},
};

export const general: Type.General = {
	title: "Général",
	summary: "Les réglages de base du jeu, comme la langue et les réglages de niveau",
	children: {
		language: {
			title: "Langue",
			summary: "La langue dans laquelle vous créez le monde",
			points: [
				"Définit dans quelle langue vous écrivez le nom et la description du monde. C'est la langue qui sert de base lorsque vous préparez les traductions.",
				"C'est aussi la langue affichée en premier lorsqu'un joueur commence la partie.",
				"Lorsque translations est désactivé, le joueur ne peut pas passer de cette langue à une autre.",
				"C'est un réglage distinct de la langue d'affichage de l'éditeur de mondes lui-même. La langue d'affichage de l'éditeur se choisit à l'ouverture de l'éditeur.",
			],
			links: { translation: "translation" },
		},
		translations: {
			title: "Traduction",
			summary: "Préparer ou non des traductions pour plusieurs langues",
			points: [
				"Lorsque c'est activé, les joueurs peuvent passer à la langue de leur choix et y jouer.",
				"Lorsque c'est désactivé, la langue reste fixée à celle choisie dans language et l'opération de changement elle-même n'est pas disponible.",
				"Si vous l'activez, vous devez préparer les données de traduction de chaque langue. Le paquet publié embarque les données de traduction.",
				"Ce qui change, ce sont les noms et les descriptions définis dans le monde. Les traductions des formulations communes de l'écran (les préréglages) sont toujours embarquées, quel que soit ce réglage.",
			],
			links: { translation: "translation", preset: "preset" },
		},
		offlineMaxHours: {
			title: "Temps hors ligne maximal [Heures]",
			summary: "La limite de temps de la progression hors ligne",
			points: ["Définit le nombre d'heures maximal pendant lesquelles la progression hors ligne se poursuit.", "Par exemple, si vous réglez 6 heures, le traitement du retour depuis le hors-ligne est effectué jusqu'à 6 heures, et même si vous revenez après une absence plus longue, le temps hors ligne est traité comme 6 heures.", "Si vous réglez 0 heure, aucun traitement n'est effectué au retour depuis le hors-ligne.", "La valeur maximale est de 24 heures."],
			links: { category: "category" },
		},
		maxCategoryLevels: {
			title: "Niveau maximal des catégories",
			summary: "Le plafond de niveau de chaque catégorie",
			points: [
				"Définit le plafond du niveau de chaque catégorie. La valeur par défaut est `100`.",
				"Même si de l'expérience est gagnée, le niveau s'arrête à cette valeur et le surplus est jeté. Il en va de même lorsqu'une récompense ajoute directement des niveaux.",
				"Lorsque le niveau des données de sauvegarde dépasse le plafond, il est ramené au plafond au chargement.",
				"La barre de niveau et le taux de progression des statistiques sont affichés en prenant cette valeur comme dénominateur.",
				"Une catégorie dont numeric est désactivé ne monte pas de niveau, cette valeur ne la concerne donc pas.",
			],
			links: { category: "category" },
		},
		coins: {
			title: "Monnaie",
			summary: "Les réglages de la monnaie (coins) utilisée dans le jeu",
			points: [
				"Définit la monnaie utilisée dans le jeu. Il en faut au moins une.",
				"Vous pouvez définir plusieurs monnaies et régler chacune d'elles comme des informations (ID, nom, icône, couleur, etc.).",
				"Les monnaies servent à l'achat et à la vente des objets ainsi qu'à l'extension de la capacité et de la file d'attente.",
				"La première monnaie est traitée comme la monnaie principale et elle est utilisée lorsqu'aucun ID de monnaie (`coinId`) n'est indiqué pour un objet, la capacité ou la file d'attente, ou lorsqu'un ID absent de la liste des monnaies est indiqué.",
				"Une monnaie est traitée comme une sorte d'objet. Dans les conditions et les récompenses, référez-vous à l'ID défini ici comme à un objet. Elle n'appartient à aucune catégorie et ne fait l'objet ni d'équipement ni de commerce.",
			],
			links: { information: "information", item: "item" },
		},
		capacity: {
			title: "Capacité",
			summary: "Les réglages de capacité de l'inventaire",
			points: [
				"Gère le plafond du nombre de sortes d'objets qu'un joueur peut détenir.",
				"La gestion se fait sur le nombre de sortes d'objets détenus, et non sur la quantité possédée de chaque objet.",
				"Mettre `initialCount` à 0 rend la capacité illimitée et empêche aussi d'acheter de la capacité.",
				"Lorsque vous vous référez à l'objet de la capacité dans les conditions ou les récompenses, utilisez l'ID défini ici, ou bien `capacity`.",
			],
			children: {
				information: { ...information, title: "Informations de la capacité", summary: "L'ID, le nom, l'icône et la couleur permettant de traiter la capacité comme un objet" },
				initialCount: {
					title: "Valeur initiale de la capacité [Unités]",
					summary: "La capacité initiale de l'inventaire (le nombre de sortes d'objets pouvant être détenues)",
					points: ["C'est la capacité initiale au début de la partie (le nombre de sortes d'objets pouvant être détenues). La valeur par défaut est `10`.", "La mettre à `0` rend la capacité illimitée et, du même coup, empêche d'acheter de la capacité."],
				},
				initialCost: {
					title: "Prix de base de la capacité [Pièces]",
					summary: "Le prix initial pour augmenter la capacité d'une unité",
					points: ["C'est le prix de base (en pièces) pour augmenter la capacité de l'inventaire d'un emplacement. Réglez-le sur un entier supérieur ou égal à `1`.", "Le prix réel se calcule ainsi : « prix de base × taux d'augmentation^nombre d'achats effectués ».", "Exemple : avec un prix de base de 100 et un taux d'augmentation de 1,2, la 1re fois coûte 100 pièces, la 2e 120 pièces et la 3e 144 pièces."],
				},
				increasingRate: {
					title: "Taux d'augmentation de la capacité [Multiplicateur]",
					summary: "Le taux d'augmentation du coût d'extension de la capacité",
					points: ["C'est le multiplicateur indiquant de combien le coût d'extension de la capacité augmente au nième achat. La valeur par défaut est `1.2`.", "Avec `1.0`, le prix est toujours le même ; avec `1.2`, il devient 20 % plus cher à chaque achat.", "Formule : prix de base × taux d'augmentation^nombre d'achats effectués"],
					list: [
						["Taux d'augmentation", "1re unité", "5e unité", "10e unité", "100e unité", "1000e unité"],
						["1.00", "x1.00", "x1.00", "x1.00", "x1.00", "x1.00"],
						["1.05", "x1.00", "x1.22", "x1.55", "x125.24", "x1.5×10²¹"],
						["1.10", "x1.00", "x1.46", "x2.36", "x1.3×10⁴", "x2.2×10⁴¹"],
						["1.20", "x1.00", "x2.07", "x5.16", "x6.9×10⁷", "x1.3×10⁷⁹"],
						["1.50", "x1.00", "x5.06", "x38.44", "x2.7×10¹⁷", "x8.2×10¹⁷⁵"],
					],
				},
				coinId: {
					title: "ID de monnaie de la capacité",
					summary: "L'ID de la monnaie utilisée pour étendre la capacité",
					points: ["Indique l'ID de la monnaie (coins) utilisée pour le prix d'extension de la capacité de l'inventaire.", "Laissé vide, ou si vous indiquez un ID absent de la liste des monnaies, c'est la monnaie principale (la première de coins) qui est utilisée."],
				},
				buyingLimit: {
					title: "Limite d'achat de la capacité [Fois]",
					summary: "Le nombre maximal de fois où la capacité peut être achetée",
					points: ["C'est le plafond du nombre de fois où la capacité peut être achetée avec une monnaie.", "La mettre à `0` permet d'acheter sans limite.", "La mettre à `-1` empêche tout achat.", "L'augmentation de la capacité par une récompense n'entre pas dans ce plafond."],
				},
			},
			links: { item: "item" },
		},
		queue: {
			title: "File d'attente",
			summary: "Les réglages du nombre d'emplacements pour exécuter des actions à la suite (la file d'attente)",
			points: [
				"Gère le nombre d'emplacements de la file d'attente servant à exécuter des actions à la suite.",
				"La file d'attente comprend l'action en cours d'exécution, et c'est l'action en tête qui s'exécute. Lorsque les emplacements sont à `1`, il n'y a que celle en cours et aucune attente ne peut être retenue.",
				"Comme pour la capacité, le nombre d'emplacements peut s'acheter avec une monnaie, et il peut aussi être augmenté en indiquant l'objet de la file d'attente comme récompense d'une action ou d'un événement.",
				"Lorsque vous vous référez à l'objet de la file d'attente dans les conditions ou les récompenses, utilisez l'ID défini ici, ou bien `queue`.",
			],
			children: {
				information: { ...information, title: "Informations de la file d'attente", summary: "L'ID, le nom, l'icône et la couleur permettant de traiter la file d'attente comme un objet" },
				initialCount: {
					title: "Valeur initiale de la file d'attente [Emplacements]",
					summary: "Le nombre d'emplacements d'exécution à la suite au début de la partie",
					points: ["C'est le nombre d'emplacements de la file d'attente au début de la partie. La valeur par défaut est `1`.", "La valeur minimale est `1` (car celle en cours d'exécution occupe un emplacement ; il n'y a pas de traitement `0` = illimité comme pour la capacité)."],
				},
				initialCost: {
					title: "Prix de base de la file d'attente [Pièces]",
					summary: "Le prix initial pour augmenter les emplacements d'une unité",
					points: ["C'est le prix de base (en pièces) pour augmenter d'un les emplacements d'exécution à la suite. Réglez-le sur un entier supérieur ou égal à `1`.", "Le prix réel se calcule ainsi : « prix de base × taux d'augmentation^nombre d'achats effectués ».", "Exemple : avec un prix de base de 100 et un taux d'augmentation de 1,2, la 1re fois coûte 100 pièces, la 2e 120 pièces et la 3e 144 pièces."],
				},
				increasingRate: {
					title: "Taux d'augmentation de la file d'attente [Multiplicateur]",
					summary: "Le taux d'augmentation du coût d'extension des emplacements",
					points: ["C'est le multiplicateur indiquant de combien le coût d'extension des emplacements augmente au nième achat. La valeur par défaut est `1.2`.", "Avec `1.0`, le prix est toujours le même ; avec `1.2`, il devient 20 % plus cher à chaque achat.", "Formule : prix de base × taux d'augmentation^nombre d'achats effectués", "La façon dont il augmente est la même que pour le taux d'augmentation de la capacité. Pour vous repérer sur le multiplicateur, reportez-vous au tableau de la capacité."],
				},
				coinId: {
					title: "ID de monnaie de la file d'attente",
					summary: "L'ID de la monnaie utilisée pour étendre les emplacements",
					points: ["Indique l'ID de la monnaie (coins) utilisée pour le prix d'extension des emplacements d'exécution à la suite.", "Laissé vide, ou si vous indiquez un ID absent de la liste des monnaies, c'est la monnaie principale (la première de coins) qui est utilisée."],
				},
				buyingLimit: {
					title: "Limite d'achat de la file d'attente [Fois]",
					summary: "Le nombre maximal de fois où les emplacements peuvent être achetés",
					points: ["C'est le plafond du nombre de fois où les emplacements d'exécution à la suite peuvent être achetés avec une monnaie.", "La mettre à `0` permet d'acheter sans limite.", "La mettre à `-1` empêche tout achat.", "L'augmentation des emplacements par une récompense n'entre pas dans ce plafond."],
				},
			},
			links: { item: "item" },
		},
		levelCommonRatio: {
			title: "Taux de croissance de l'expérience [Multiplicateur]",
			summary: "Le taux d'augmentation de la difficulté à monter de niveau",
			points: [
				"C'est le taux de croissance de l'expérience nécessaire pour atteindre le niveau suivant à mesure que le niveau d'une catégorie monte. La valeur par défaut est `1.05` et une valeur inférieure à `1` ne peut pas être définie.",
				"Augmenter cette valeur relève la difficulté. La mettre à `1` fait que l'expérience nécessaire reste la même à tous les niveaux.",
				"L'expérience nécessaire pour atteindre le niveau suivant est (taux de croissance de l'expérience)^(niveau actuel-1). Les niveaux se comptent en laissant tomber les décimales.",
				"L'expérience obtenue après avoir atteint le plafond (le niveau maximal des catégories) est jetée.",
			],
			list: [
				["Taux de croissance de l'expérience", "Lv.1", "Lv.2", "Lv.10", "Lv.50", "Lv.99"],
				["1.00", "x1.00", "x1.00", "x1.00", "x1.00", "x1.00"],
				["1.02", "x1.00", "x1.02", "x1.20", "x2.64", "x6.96"],
				["1.05", "x1.00", "x1.05", "x1.55", "x10.92", "x119.28"],
				["1.10", "x1.00", "x1.10", "x2.36", "x106.72", "x1.1×10⁴"],
				["1.20", "x1.00", "x1.20", "x5.16", "x7583.70", "x5.8×10⁷"],
			],
			links: { category: "category" },
		},
		actionLevelLimit: {
			title: "Limite de niveau des actions",
			summary: "Exiger le niveau de la catégorie de l'attribut pour exécuter une action",
			points: [
				"Lorsque c'est activé, la condition « le niveau de la catégorie de l'attribut est supérieur ou égal au niveau de cette action » est ajoutée automatiquement en tête des conditions (requirements) de chaque action.",
				"Lorsque aucun attribut (attribute) n'est défini, la catégorie à laquelle elle appartient est utilisée.",
				"Lorsque numeric est désactivé dans la catégorie de l'attribut, celle-ci ne monte pas de niveau, rien n'est donc ajouté.",
				"La condition ajoutée est inscrite au chargement du monde, elle s'affiche donc sur l'écran du lecteur comme une condition ordinaire.",
			],
			links: { action: "action", category: "category", requirement: "requirement" },
		},
		propertyRatio: {
			title: "Ratio des propriétés [Multiplicateur]",
			summary: "Par combien les propriétés sont multipliées tous les 10 points d'écart de niveau",
			points: [
				"Définit par combien les propriétés sont multipliées chaque fois que l'écart entre le niveau de la catégorie et le niveau de l'action se creuse de `10`. La valeur par défaut est `1.5` et une valeur inférieure à `1` ne peut pas être définie.",
				"Le multiplicateur se calcule ainsi : (ratio des propriétés)^(écart de niveau÷10). Lorsque l'écart de niveau est de `0`, il vaut `1` et la valeur définie sur l'action est utilisée telle quelle.",
				"L'attaque et l'expérience augmentent de ce multiplicateur, et la défense (les dégâts subis) ainsi que la vitesse (le temps requis) diminuent du même multiplicateur.",
				"La précision, l'esquive, le taux de réussite et la récupération sont des valeurs comprises entre `0` et `100` %, le multiplicateur s'applique donc au rapport entre la part qui se réalise et celle qui ne se réalise pas. `0` % et `100` % ne changent pas, et aucune valeur intermédiaire ne dépasse `100` %.",
				"Pour la défense, l'esquive et la vitesse, le multiplicateur agit de moitié (un écart de niveau de `20` équivaut à un écart de `10` pour les autres propriétés). La défense et l'esquive s'appliquent doublement, au taux de coups reçus et aux dégâts subis, et la vitesse s'applique à toutes les autres propriétés en tant que nombre d'exécutions : leur effet est donc affaibli pour maintenir l'équilibre.",
				"Un repère est (le taux de croissance de l'expérience) élevé à la puissance `6.7`. Au-dessus, la montée en niveau s'accélère à mesure que le niveau grimpe ; en dessous, la montée en niveau dans la dernière partie demande plus de temps.",
				"La mettre à `1` supprime l'influence de l'écart de niveau. Augmenter la valeur rend plus brutaux les avantages et les désavantages liés à l'écart de niveau.",
			],
			list: [
				["Ratio des propriétés", "Écart de niveau -20", "Écart de niveau -10", "Écart de niveau 0", "Écart de niveau +10", "Écart de niveau +20"],
				["`1`", "`x1.00`", "`x1.00`", "`x1.00`", "`x1.00`", "`x1.00`"],
				["`1.5`", "`x0.44`", "`x0.67`", "`x1.00`", "`x1.50`", "`x2.25`"],
				["`2`", "`x0.25`", "`x0.50`", "`x1.00`", "`x2.00`", "`x4.00`"],
				["`3`", "`x0.11`", "`x0.33`", "`x1.00`", "`x3.00`", "`x9.00`"],
			],
			links: { action: "action", property: "property" },
		},
		defaultCombat: { ...combat, summary: "Les paramètres de combat par défaut communs à toutes les actions", points: ["Ce sont les corrections de combat de base du côté du joueur, appliquées en commun à toutes les actions de type `stamina`.", "Les valeurs de combat (property) de chaque action sont celles du côté de l'adversaire : elles agissent donc dans le sens d'une annulation des valeurs définies ici."], links: { action: "action" } },
	},
	options: {
		label: "general",
	},
};

export const overview: Type.Overview = {
	title: "Aperçu",
	summary: "Les informations de base du monde et les informations sur l'auteur",
	points: ["Ce sont les champs qui expliquent le contenu du monde.", "Réglez-les de manière à ce qu'ils soient clairs lorsqu'un utilisateur choisit le monde.", "Hormis l'URL, ces réglages n'ont pas d'effet sur l'avancement du jeu."],
	children: {
		information: information,
		version: {
			title: "Version",
			summary: "Le numéro de version du monde",
			points: ["Saisissez un nombre supérieur ou égal à `0` (entier ou décimal). La valeur par défaut est `0`.", "En général, la partie entière représente la version majeure et la partie décimale la version mineure.", "La version du développement (development) est la version de l'éditeur, c'est donc autre chose."],
		},
		author: {
			title: "Nom de l'auteur",
			summary: "Le nom de l'auteur du monde",
			points: ["Saisissez un pseudonyme ou un surnom.", "Il doit compter de 3 à 20 caractères, et seuls les lettres et chiffres demi-chasse, les espaces et `!` `?` `.` `,` `-` peuvent être utilisés."],
		},
		homepage: {
			title: "Page d'accueil",
			summary: "L'URL du site web de l'auteur",
			points: ["Si vous avez votre propre page d'accueil ou des réseaux sociaux, saisissez leur URL.", "Le joueur peut consulter cette URL grâce au lien.", "S'il n'y en a pas, laissez le champ vide. La valeur initiale est `https://`."],
		},
		url: {
			title: "URL",
			summary: "L'URL du jeu",
			points: ["Saisissez l'URL où le jeu de ce monde est placé.", "Saisissez l'URL d'une page d'accueil telle que index.html, domaine compris.", "C'est un champ servant à garder trace de l'endroit où le monde a été placé. Si l'endroit où le mettre n'est pas décidé, laissez le champ vide.", "Un monde publié fonctionne comme une PWA. Une PWA est une fonction qui permet de l'installer et de le faire fonctionner comme une application à laquelle on peut jouer même hors ligne.", "Les réglages de la PWA sont créés avec des chemins relatifs, si bien qu'il fonctionne tel quel à l'endroit où il est placé, quelle que soit la valeur de ce champ."],
		},
		estimatedPlayingTime: {
			title: "Temps de jeu estimé",
			summary: "Le temps indicatif jusqu'à l'achèvement de la partie du monde",
			points: ["C'est le temps de jeu estimé nécessaire pour achever la partie du monde.", "Il peut être consulté à titre indicatif lorsque le joueur joue.", "Ce n'est qu'un temps de référence, et il n'y a pas de définition claire de ce qui compte comme achèvement du monde."],
			children: {
				value: {
					title: "Valeur",
					summary: "Le nombre du temps de jeu",
					points: ["Il se règle avec un entier supérieur ou égal à `1`. La valeur par défaut est `1`."],
				},
				unit: {
					title: "Unité",
					summary: "L'unité de temps (heures, minutes et ainsi de suite)",
					points: ["Elle se choisit parmi secondes, minutes, heures, jours, années, siècles et infini. La valeur par défaut est jours.", "Infini s'utilise pour les mondes qui n'ont pas de fin."],
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
			title: "Catégorie",
			summary: "N'est pas utilisé dans un événement",
			points: ["Ils ne s'affichent ni dans les missions ni dans la liste des tâches, la catégorie à laquelle ils appartiennent n'est donc pas spécifiée.", "Le champ de saisie ne s'affiche pas dans l'éditeur."],
		},
		timing: {
			title: "Moment",
			summary: "Le moment où l'événement se déclenche (fixe)",
			points: timingPoints,
		},
		unlocked: {
			title: "État d'affichage initial",
			summary: "L'état d'affichage initial de l'icône de l'événement (le déclenchement est décidé par le moment et ce réglage ne le déclenche pas)",
			points: ["Les conditions de déclenchement d'un événement sont décidées par le moment, et ce champ n'affecte que l'aspect de l'icône.", "secreted : L'icône ne s'affiche pas tant que tous les requirements ne sont pas remplis (le déclenchement lui-même se produit au moment prévu).", "hidden et hinted : L'icône s'affiche barrée d'un trait, comme non encore déverrouillée.", "released : Le trait disparaît et elle s'affiche comme déjà déverrouillée."],
		},
		requirements: { ...requirement, options: { ...requirement.options, array: true }, summary: "Les conditions d'obtention de la récompense" },
		acquisitions: { ...acquisition, options: { ...acquisition.options, array: true }, summary: "La récompense reçue automatiquement lorsque l'événement se déclenche" },
		group: {
			title: "Groupe de tâches",
			summary: "N'est pas utilisé dans un événement",
			points: ["Ils ne s'affichent ni dans les missions ni dans la liste des tâches, le groupe n'est donc pas spécifié.", "Le champ de saisie ne s'affiche pas dans l'éditeur."],
		},
	}, title),
});

export const unique: Type.Unique = {
	title: "Événement fixe",
	summary: "Les messages et les récompenses qui se déclenchent à des moments déterminés",
	points: ["Il se déclenche à des moments déterminés, comme à la première ouverture du monde ou lors d'une fin de partie, et ouvre un écran dédié.", "Il en existe un par moment, et on ne peut ni en ajouter ni en supprimer. Les moments que vous n'utilisez pas restent vides.", "Ils ne s'affichent ni dans les missions ni dans la liste des tâches. Ce qui est accompli lorsque des conditions sont remplies se règle avec une tâche.", "Lorsque le moment se réalise, l'événement se déclenche et ouvre un écran dédié pour en afficher le contenu.", "La récompense est obtenue automatiquement au moment même du déclenchement. Il n'y a ni opération de réception ni ruban comme pour une tâche, et le plafond des sortes d'objets pouvant être détenues n'est pas vérifié non plus.", "Si des conditions (requirements) sont réglées, la récompense n'est obtenue que si ces conditions étaient remplies au moment du déclenchement. Si aucune n'est réglée, elle est obtenue à chaque déclenchement.", "Les conditions servent seulement à vérifier si elles sont remplies : même en réglant une probabilité de consommation (chance), les objets ne diminuent pas.", "Au déclenchement, vous pouvez modifier le niveau d'une catégorie, le nombre d'exécutions d'une action et la quantité d'objets détenus. En réglant une quantité négative, vous pouvez aussi vous en servir pour faire perdre les possessions lors d'une fin de partie, par exemple.", "Si vous laissez le nom, la description et l'icône vides, le texte et l'icône par défaut intégrés au lecteur sont utilisés."],
	list: [
		["Moment", "Condition de déclenchement", "Répétition"],
		["`comebacked`", "Quand vous revenez après 1 seconde ou plus hors ligne et qu'au moins une action s'est achevée pendant votre absence", "Autant de fois"],
		["`gameovered`", "Quand l'endurance du joueur est épuisée en combat", "Autant de fois"],
		["`welcomed`", "Quand ce monde est lancé pour la première fois", "Une seule fois"],
		["`completed`", "Quand le niveau de toutes les catégories atteint la valeur maximale (maxCategoryLevels)", "Une seule fois"],
		["`obtained`", "Quand une action de la sorte single (un coffre au trésor, par exemple) est achevée et vérifiée", "Autant de fois"],
	],
	links: { task: "task" },
	children: {
		comebacked: toUniqueEvent("Au retour", "Se déclenche au retour depuis le hors-ligne", ["Il se déclenche quand vous revenez après 1 seconde ou plus hors ligne et qu'au moins une action s'est achevée pendant votre absence. Si pas une seule exécution ne s'est terminée, il ne se déclenche pas.", "Il s'affiche en même temps que le récapitulatif de la progression pendant votre absence."], ["Il est fixé sur `comebacked` et ne peut pas être modifié.", "Il se déclenche autant de fois qu'il le faut, à chaque retour."]),
		gameovered: toUniqueEvent("À la fin de partie", "Se déclenche quand l'endurance est épuisée en combat", ["Il se déclenche quand l'endurance du joueur est épuisée en combat.", "En même temps, toutes les actions en cours d'exécution s'arrêtent et toutes les réservations en attente sont abandonnées.", "En réglant une quantité négative pour la récompense, vous pouvez donner un prix à la fin de partie."], ["Il est fixé sur `gameovered` et ne peut pas être modifié.", "Il se déclenche autant de fois qu'il le faut, à chaque fin de partie."]),
		welcomed: toUniqueEvent("Au premier démarrage", "Se déclenche à la première ouverture du monde", ["Il se déclenche quand ce monde est lancé pour la première fois.", "Il sert à présenter l'univers du monde et à remettre les fournitures de départ données au début."], ["Il est fixé sur `welcomed` et ne peut pas être modifié.", "Il se déclenche une seule fois, au premier démarrage."]),
		completed: toUniqueEvent("À l'achèvement", "Se déclenche quand toutes les catégories atteignent le niveau maximal", ["Il se déclenche quand le niveau de toutes les catégories atteint la valeur maximale (maxCategoryLevels).", "Les catégories qui ne sont pas numeric sont exclues de la vérification. C'est pourquoi il ne se déclenche pas dans un monde sans la moindre catégorie numérique."], ["Il est fixé sur `completed` et ne peut pas être modifié.", "Il se déclenche une seule fois, quand les conditions sont remplies."]),
		obtained: toUniqueEvent("À l'achèvement d'une action ponctuelle", "Se déclenche à l'achèvement d'une action ponctuelle comme un coffre au trésor", ["Il se déclenche quand une action de la sorte single (un coffre au trésor, par exemple) est achevée et vérifiée.", "Indépendamment de la récompense de l'action elle-même, vous pouvez ajouter la récompense réglée ici."], ["Il est fixé sur `obtained` et ne peut pas être modifié.", "Il se déclenche autant de fois qu'il le faut, à chaque achèvement d'une action ponctuelle."]),
	},
	options: {
		label: "unique",
	},
};

// タスク・変化イベント・固定イベントをまとめたイベント全体
export const events: Type.Events = {
	title: "Événement",
	summary: "L'ensemble des événements du monde, réunissant les tâches, les événements de changement et les événements fixes",
	points: ["Les événements d'un monde se composent de trois sortes : les tâches (tasks), les événements de changement (changed) et les événements fixes (unique).", "Une tâche est une mission accomplie lorsque des conditions sont remplies.", "Un événement de changement est un événement de traitement interne, qui ne s'affiche pas à l'écran et se déclenche de façon répétée à partir de l'augmentation d'une quantité.", "Un événement fixe est un emplacement préparé à raison d'un par moment, qu'on ne peut ni ajouter ni supprimer."],
	list: expandList("Sorte", [task, changed, unique], "Description"),
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
	title: "Réglages de base",
	summary: "Les champs de réglage de base du monde en général",
	points: ["Règle le nom, la description, l'arrière-plan, la monnaie, la capacité, le niveau maximal des catégories, le taux de croissance de l'expérience, les paramètres de combat standard et le reste du monde.", "Ces réglages ont une incidence sur le monde tout entier."],
	list: expandList("Nom", [overview, general, design, development], "Description"),
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
	title: "Monde",
	summary: "Les réglages et la structure de données de tout le monde du jeu",
	points: ["Ce sont les données de définition du jeu, chargées dans le lecteur pour y jouer.", "Grâce aux réglages, vous pouvez créer le jeu idle que vous avez en tête.", "Un monde contient les réglages de base, les six types que sont catégorie, action, objet, compétence, groupe et préréglage, ainsi que les événements."],
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
	title: "Éditeur",
	summary: "L'explication de l'utilisation de l'éditeur et de la structure d'un monde",
	list: expandList("Nom", [world, basic, type, events, component, miscellaneous], "Description"),
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
