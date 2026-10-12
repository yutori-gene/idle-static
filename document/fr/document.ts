import { Markdown, Tree } from "~d/type/markdownType";
import { tree as editor } from "./editor";
import { tree as player } from "./player";


// readme

export const readme: Markdown = {
	title: "Plateforme de développement de jeux idle",
	summary: "Une plateforme pour créer et jouer à des jeux idle à partir de données de définition appelées monde",
	points: [
		"Le contenu d'un jeu est rassemblé dans des données de définition appelées « monde ». Sans écrire le moindre programme, vous pouvez monter un jeu entier rien qu'en saisissant des données dans l'éditeur.",
		"Le monde que vous avez créé se charge et se joue dans le lecteur. Si vous l'exportez sous une forme qui fonctionne seule, vous pouvez aussi le distribuer tel quel.",
		"Ce document comporte deux parties : l'éditeur et le lecteur. Consultez l'éditeur pour les paramètres qui servent à créer un monde, et le lecteur pour les écrans qui servent à y jouer.",
	],
	children: {
		feature: {
			title: "Caractéristiques",
			summary: "Les principales fonctions et caractéristiques de la plateforme",
			points: [
				"Les éléments nécessaires à un jeu idle (catégories, actions, objets, compétences, groupes et préréglages) ainsi que les événements sont fournis dès le départ, et la forme du jeu se décide par la seule combinaison.",
				"Le temps passé écran fermé est lui aussi consommé comme progression hors ligne : le jeu avance donc autant que vous le laissez tourner.",
				"Dix langues sont prises en charge. Les formules communes de l'interface sont toujours incluses, et le texte propre au monde peut être préparé pour chaque langue.",
				"La progression est enregistrée dans le navigateur pour chaque monde, et peut être exportée dans un fichier pour être emportée.",
			],
		},
	},
	options: {
		label: "README",
		readme: true,
	}
};


// tree

export const tree: Tree = {
	title: readme,
	twig: [editor, player]
}

// export const list:Markdown[] =  flattenTree(tree);