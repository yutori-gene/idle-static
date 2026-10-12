import { Markdown, Tree } from "~d/type/markdownType";
import { tree as editor } from "./editor";
import { tree as player } from "./player";


// readme

export const readme: Markdown = {
	title: "Plataforma de desarrollo de juegos idle",
	summary: "Una plataforma para crear y jugar juegos idle a partir de unos datos de definición llamados mundo",
	points: [
		"El contenido de un juego se reúne en unos datos de definición llamados «mundo». Sin escribir ningún programa, puedes montar un juego entero solo con lo que introduzcas en el editor.",
		"El mundo que has creado se carga y se juega en el reproductor. Si lo exportas en un formato que funcione por sí solo, también puedes distribuirlo tal cual.",
		"Este documento consta de dos partes: el editor y el reproductor. Consulta el editor para los ajustes con los que se crea un mundo, y el reproductor para las pantallas con las que se juega.",
	],
	children: {
		feature: {
			title: "Características",
			summary: "Las funciones y características principales de la plataforma",
			points: [
				"Los elementos que necesita un juego idle (categorías, acciones, artículos, habilidades, grupos y preajustes) y los eventos están disponibles desde el principio, y la forma del juego se decide solo con la combinación.",
				"El tiempo que pasa con la pantalla cerrada también se consume como avance sin conexión, así que el juego avanza todo lo que lo dejes desatendido.",
				"Admite diez idiomas. Las frases comunes de la interfaz siempre se incluyen, y el texto propio del mundo puede prepararse para cada idioma.",
				"El progreso se guarda en el navegador para cada mundo, y puede exportarse a un archivo y llevarse a otro sitio.",
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