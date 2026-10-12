import { Markdown, Tree } from "~d/type/markdownType";
import { tree as editor } from "./editor";
import { tree as player } from "./player";


// readme

export const readme: Markdown = {
	title: "Plattform zur Entwicklung von Idle-Spielen",
	summary: "Eine Plattform, um aus Definitionsdaten namens Welt Idle-Spiele zu bauen und zu spielen",
	points: [
		"Der Inhalt eines Spiels steckt gesammelt in Definitionsdaten, die „Welt“ heißen. Auch ohne ein Programm zu schreiben, kannst du allein durch Eingaben im Editor ein ganzes Spiel zusammenstellen.",
		"Die erstellte Welt wird im Player geladen und gespielt. Exportierst du sie in einer eigenständig lauffähigen Form, kannst du sie auch so weitergeben.",
		"Dieses Dokument besteht aus zwei Teilen: Editor und Player. Die Einstellungen zum Erstellen einer Welt findest du beim Editor, die Bildschirme zum Spielen beim Player.",
	],
	children: {
		feature: {
			title: "Merkmale",
			summary: "Die wichtigsten Funktionen und Merkmale der Plattform",
			points: [
				"Die Elemente, die ein Idle-Spiel braucht (Kategorien, Aktionen, Gegenstände, Fähigkeiten, Gruppen und Voreinstellungen), sowie Ereignisse sind von Anfang an vorhanden, und allein die Kombination bestimmt die Gestalt des Spiels.",
				"Auch die Zeit bei geschlossenem Bildschirm wird als Offline-Fortschritt verbraucht, das Spiel kommt also so weit voran, wie du es liegen lässt.",
				"Zehn Sprachen werden unterstützt. Die gemeinsamen Formulierungen der Oberfläche sind immer enthalten, und auch die Texte der Welt selbst lassen sich für jede Sprache vorbereiten.",
				"Der Fortschritt wird im Browser für jede Welt getrennt gespeichert und lässt sich in eine Datei exportieren und mitnehmen.",
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