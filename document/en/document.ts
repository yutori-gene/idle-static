import { Markdown, Tree } from "~d/type/markdownType";
import { tree as editor } from "./editor";
import { tree as player } from "./player";


// readme

export const readme: Markdown = {
	title: "Idle Game Development Platform",
	summary: "A platform for building and playing idle games from definition data called a world",
	points: [
		"The content of a game is gathered in definition data called a \"world\". You can assemble a whole game from editor input alone, without writing any code.",
		"A world you have made is loaded and played in the player. If you export it as a build that runs on its own, you can distribute it as it is.",
		"This document has two parts, the editor and the player. See the editor for the settings used to build a world, and the player for the screens used to play it.",
	],
	children: {
		feature: {
			title: "Features",
			summary: "The main functions and features of the platform",
			points: [
				"The elements an idle game needs (categories, actions, items, skills, groups, and presets) and events are provided from the start, and the shape of the game is decided by how you combine them.",
				"Time spent with the screen closed is also consumed as offline progress, so the game advances for as long as you leave it alone.",
				"Ten languages are supported. The common phrases of the interface are always bundled, and the text of the world itself can be prepared for each language.",
				"Progress is saved in the browser for each world, and can be exported to a file and carried elsewhere.",
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