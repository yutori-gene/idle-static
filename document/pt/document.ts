import { Markdown, Tree } from "~d/type/markdownType";
import { tree as editor } from "./editor";
import { tree as player } from "./player";


// readme

export const readme: Markdown = {
	title: "Plataforma de desenvolvimento de jogos idle",
	summary: "Uma plataforma para criar e jogar jogos idle a partir de dados de definição chamados mundo",
	points: [
		"O conteúdo de um jogo é reunido em dados de definição chamados \"mundo\". Sem escrever nenhum programa, você pode montar um jogo inteiro apenas com o que digitar no editor.",
		"O mundo que você criou é carregado e jogado no reprodutor. Se exportá-lo em um formato que funcione sozinho, também pode distribuí-lo assim mesmo.",
		"Este documento tem duas partes: o editor e o reprodutor. Consulte o editor para os ajustes com que se cria um mundo, e o reprodutor para as telas com que se joga.",
	],
	children: {
		feature: {
			title: "Características",
			summary: "As principais funções e características da plataforma",
			points: [
				"Os elementos de que um jogo idle precisa (categorias, ações, itens, habilidades, grupos e predefinições) e os eventos já vêm prontos desde o início, e a forma do jogo é decidida apenas pela combinação.",
				"O tempo em que a tela fica fechada também é consumido como progresso off-line, então o jogo avança conforme você o deixa parado.",
				"São aceitos dez idiomas. As frases comuns da interface são sempre incluídas, e o texto do próprio mundo pode ser preparado para cada idioma.",
				"O progresso é salvo no navegador para cada mundo, e pode ser exportado para um arquivo e levado para outro lugar.",
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