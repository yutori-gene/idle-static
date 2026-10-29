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
	title: "Übersetzung",
	summary: "Einstellungen, um die Texte einer Welt in zehn Sprachen zu übersetzen",
	points: [
		"Es gibt zwei Arten von Übersetzung: die der gemeinsamen Formulierungen der Oberfläche (Voreinstellungen) und die der Namen und Erklärungen, die die Welt selbst besitzt.",
		"Die Übersetzung der gemeinsamen Formulierungen ist unabhängig von der Einstellung `translations` in den allgemeinen Einstellungen immer enthalten. Der Autor muss sie nicht vorbereiten.",
		"Die Übersetzung der Welt selbst wird nur exportiert, wenn `translations` in den allgemeinen Einstellungen aktiviert ist und die Welt veröffentlicht wird; übersetzt wird sie vom Autor.",
		"In Sprachen, für die keine Übersetzung vorbereitet ist, erscheint der Text genau so, wie er in der Welt steht.",
	],
	links: { general: "general" },
	options: {
		label: "translation",
	},
	children: {
		flag: {
			title: "Übersetzung aktivieren",
			summary: "Was beim Aktivieren der Übersetzung geschieht",
			points: [
				"Aktiviert wird `translations` in den allgemeinen Einstellungen. Hier wird erklärt, was beim Aktivieren geschieht.",
				"Ist es aktiviert, enthält die veröffentlichte Welt Übersetzungsdateien für zehn Sprachen, und die Sprache lässt sich in den Einstellungen des Players umschalten. Ist es deaktiviert, lässt sich die Sprache überhaupt nicht wechseln.",
				"Die zehn Dateien werden mit demselben Inhalt (dem Text vor der Übersetzung) exportiert. Eine Sprache, die du nicht übersetzt hast, zeigt den ursprünglichen Text unverändert. Du kannst auch nur einzelne Sprachen übersetzen, dann mischt sich auf deren Bildschirmen der ursprüngliche Text darunter.",
				"Beim Start des Spiels erscheint zuerst die Sprache, die in `language` in den allgemeinen Einstellungen festgelegt ist. Danach lässt sie sich in der Einstellungsspalte auf jede beliebige Sprache ändern.",
				"Im Testspiel des Editors gibt es die Übersetzungsdateien der Welt noch nicht, deshalb ändern sich beim Sprachwechsel nur die gemeinsamen Formulierungen der Oberfläche.",
				"Übersetzen ist mühsam, aber dadurch können viel mehr Leute spielen.",
			],
			links: { general: "general" },
		},
		file: {
			title: "Sprachdateien",
			summary: "Die JSON-Dateien, die für die Übersetzung exportiert werden",
			points: [
				"Exportierst du eine Welt über Veröffentlichen im Menü, enthält `translations/base` die Übersetzung der gemeinsamen Formulierungen und `translations/world` die Übersetzung der Welt selbst.",
				"Zu übersetzen sind nur die zehn Dateien in `translations/world`. `translations/base` ist bereits übersetzt enthalten, du musst es nicht anfassen.",
				"Der Inhalt der Datei ist nach Typ gegliedert, darunter stehen die IDs der Elemente und darunter der Name (`name`) und die Erklärung (`explanation`).",
				"Es gibt sieben Typen: Kategorie, Aktion, Gegenstand, Ereignis, Gruppe, Fähigkeit und Voreinstellung. Währung, Kapazität und Warteschlange gehören zu den Gegenständen, der Überblick der Welt zu den Voreinstellungen, und Aufgaben und feste Ereignisse gemeinsam zu den Ereignissen.",
				"Elemente, deren Name leer gelassen wurde, werden mit einem automatisch aus der ID gebildeten Namen exportiert.",
				"Lege die übersetzten Dateien unter demselben Namen wieder in `translations/world` ab.",
			],
		},
		task: {
			title: "Die Übersetzungsarbeit",
			summary: "Das Bearbeiten der Übersetzungsdaten",
			points: [
				"Die zehn exportierten Dateien haben alle denselben Inhalt (den Text vor der Übersetzung).",
				"Außer der Datei der Ausgangssprache müssen alle übersetzt werden.",
				"Übersetze nur die Werte von `name` und `explanation`. Ändere weder die IDs noch die Struktur des JSON.",
			],
			children: {
				ai: {
					title: "AI",
					summary: "Übersetzung mit KI",
					points: ["Übersetze mit einer KI wie ChatGPT, Copilot oder Claude.", "Sie kann alles auf einmal übersetzen, in ordentlicher Qualität.", "Die Übersetzung wird nicht immer vollständig; besonders bei Fachbegriffen und Eigennamen ist Vorsicht geboten.", "Je nach Umfang kann der Einsatz einer KI Kosten verursachen.", "Bricht die KI die Übersetzung mittendrin ab, hilft die Anweisung „mach weiter“ manchmal. (Manchmal auch nicht.)"],
					children: {
						prompt: {
							title: "Beispiel-Prompt",
							summary: "Ein Beispiel für die Übersetzungsanweisung an eine KI",
							points: ["Beispiel-Prompt: Übersetze die Werte von `name` und `explanation` in den hochgeladenen JSON-Daten aus dem Japanischen ins Englische. Ändere weder die Schlüssel noch die übrigen Teile."],
						},
						gpt: {
							title: "GPTs nutzen",
							summary: "Übersetzung mit einem GPT von ChatGPT",
							points: ["Mit dem JSON Language Translator aus der GPT-Bibliothek von ChatGPT lässt sich JSON bequem übersetzen.", "Die Struktur des JSON bleibt bei der Übersetzung erhalten.", "Auch andere KI-Dienste als ChatGPT bieten mitunter dieselbe Funktion."],
						},
					},
				},
				online: {
					title: "Übersetzungsdienste",
					summary: "Die Nutzung eines Übersetzungsdienstes",
					points: ["Übersetze mit einem Onlinedienst wie DeepL oder Google Übersetzer.", "Eine höhere Qualität als bei der KI-Übersetzung ist zu erwarten, je nach Umfang fallen aber Gebühren an.", "Eine JSON-Datei lässt sich von einem Übersetzungsdienst nicht unverändert übersetzen, du musst dafür also ein Programm schreiben.", "Es scheint auch kostenpflichtige Dienste zu geben, die JSON-Daten direkt übersetzen (etwa doctranslator.com)."],
				},
				manual: {
					title: "Manuell",
					summary: "Die Übersetzung von Hand",
					points: ["Öffne die Übersetzungsdatei in einem Texteditor und gib den in die jeweilige Sprache übersetzten Inhalt ein. Das ist sehr aufwendig, dafür kannst du genau so übersetzen, wie du es dir vorstellst."],
				},
			},
		},
		code: {
			title: "Sprachcodes",
			summary: "Die Liste der unterstützten Sprachcodes",
			points: ["Der Name der Übersetzungsdatei ist dieser Sprachcode.", "Unterstützt werden genau diese zehn Sprachen; mehr oder weniger sind nicht möglich."],
			list: [
				["Sprachcode", "Sprache"],
				["en", "Englisch"],
				["zh", "Chinesisch (vereinfacht)"],
				["es", "Spanisch"],
				["pt", "Portugiesisch"],
				["fr", "Französisch"],
				["ru", "Russisch"],
				["de", "Deutsch"],
				["ja", "Japanisch"],
				["id", "Indonesisch"],
				["ko", "Koreanisch"],
			],
		},
	},
};

export const miscellaneous: Markdown = {
	title: "Ergänzungen",
	summary: "Erläuterungen zur Arbeit des Erstellens, nicht zu den Feldern der Welt selbst",
	points: ["Hier ist gesammelt, was nicht in die Liste der Einstellungsfelder passt."],
	list: expandList("Ergänzung", [translation], "Beschreibung"),
	options: {
		label: "miscellaneous",
		linkedList: true,
	},
};

// componsnt

export const property: Type.Property = {
	title: "Eigenschaft",
	summary: "Die Einstellung der Wirkungen, die ein Gegenstand hat",
	points: ["Das sind die Wirkungsfelder, die du an einem Gegenstand einstellen kannst.", "Gegenstände, deren Ausrüstungstyp `necessary` oder `consumable` ist, wirken nur, solange sie ausgerüstet sind. `unnecessary` wirkt schon allein durch den Besitz, und die Höhe der Wirkung ist proportional zur Besitzanzahl (bei 2 Stück das Doppelte).", "Da bei der Wirkung von `unnecessary` die Besitzanzahl unmittelbar der Multiplikator ist, wird `maximum` (der maximale Besitz) zur Obergrenze der Wirkung. Stelle es beim Ausbalancieren zusammen mit `maximum` ein.", "Der Wert jedes dieser Felder wird als Anpassung des Levelunterschieds zwischen dem Level des Spielers und dem Level der Aktion berechnet.", "Ist der Angriffswert zum Beispiel 10, wird der Angriff so berechnet, als läge das Level des Spielers 10 über dem Level der Aktion. Ein negativer Wert bewirkt das Gegenteil.", "Wie stark der Levelunterschied wirkt, entscheidet `propertyRatio` in den allgemeinen Einstellungen (standardmäßig 2); je 10 Levelunterschied ändert sich der Wert um diesen Multiplikator.", "Ist `numeric` der Kategorie deaktiviert, gilt der eigentliche Levelunterschied als 0, sodass der hier eingestellte Wert unmittelbar zum Levelunterschied wird.", "Felder, die über eine Division wirken, etwa die benötigte Zeit und der erlittene Schaden, sind bei dem 100-Fachen gedeckelt (bei der benötigten Zeit bis auf ein Hundertstel).", "Bei Gegenständen, die ausgerüstet werden müssen, wirkt je Ausrüstungsgruppe nur der eine ausgerüstete.", "Ein Gegenstand mit einer Besitzanzahl von 0 wirkt nicht, unabhängig von seinem Ausrüstungstyp.", "attack, defence, accuracy, evasion und restore wirken nur bei Aktionen vom Typ `stamina`."],
	list: [
		["Eigenschaft", "Einzelheiten der Wirkung"],
		["speed", "Verkürzt die benötigte Zeit der Aktion. Die benötigte Zeit ändert sich umgekehrt proportional zum Levelunterschied (der Multiplikator wirkt zur Hälfte)."],
		["chance", "Ändert die Erfolgswahrscheinlichkeit der Aktion. Der Multiplikator wirkt auf das Verhältnis von Erfolg und Misserfolg, deshalb übersteigt sie nie `100`%."],
		["experience", "Ändert die erhaltene Erfahrung. Sie steigt proportional zum Levelunterschied (die Berechnung ist umgekehrt: je höher das Level der Aktion, desto mehr bekommst du)."],
		["attack", "Ändert den Ausdauerschaden, den du dem Gegner zufügst. (nur stamina-Aktionen)"],
		["defence", "Verringert den Ausdauerschaden, den du vom Gegner erleidest (der Multiplikator wirkt zur Hälfte). (nur stamina-Aktionen)"],
		["accuracy", "Senkt die Fehlschlagquote des Angriffs. (nur stamina-Aktionen)"],
		["evasion", "Ändert die Quote, mit der du dem Angriff des Gegners ausweichst (der Multiplikator wirkt zur Hälfte). (nur stamina-Aktionen)"],
		["restore", "Ändert die Menge an Ausdauer, die am Ende der Aktion wiederhergestellt wird. Je näher am Maximum, desto flacher der Zuwachs. (nur stamina-Aktionen)"],
	],
	children: {
		category: {
			title: "Kategorie",
			summary: "Die Kategorie, auf die die Eigenschaft angewendet wird",
			points: ["Stelle die ID der Kategorie ein, auf die diese Eigenschaft angewendet wird.", "Mit `*` wird sie auf alle Kategorien angewendet.", "Bleibt es leer, wird sie auf die Kategorie angewendet, zu der der Gegenstand gehört.", "Stellst du die ID einer anderen Kategorie ein, wirkt sie auf die Aktionen jener Kategorie. In welcher Kategorie der Gegenstand selbst liegt, spielt keine Rolle."],
		},
		attack: {
			title: "Angriff [Levelunterschied]",
			summary: "Die Korrektur des Ausdauerschadens, den du dem Gegner zufügst (wirkt nur bei stamina-Aktionen)",
			points: ["Der Angriffsschaden wird so berechnet, als läge das Level des Spielers um diesen Wert über dem Level der Aktion."],
		},
		defence: {
			title: "Verteidigung [Levelunterschied]",
			summary: "Die Korrektur des Ausdauerschadens, den du vom Gegner erleidest (wirkt nur bei stamina-Aktionen)",
			points: ["Der erlittene Schaden wird so berechnet, als läge das Level des Spielers um diesen Wert über dem Level der Aktion. Je höher der Wert, desto stärker wird der erlittene Schaden verringert."],
		},
		accuracy: {
			title: "Genauigkeit [Levelunterschied]",
			summary: "Die Korrektur der Fehlschlagquote des Angriffs (wirkt nur bei stamina-Aktionen)",
			points: ["Die Fehlschlagquote wird so berechnet, als läge das Level des Spielers um diesen Wert über dem Level der Aktion. Je höher der Wert, desto niedriger die Fehlschlagquote."],
		},
		evasion: {
			title: "Ausweichen [Levelunterschied]",
			summary: "Die Korrektur der Quote, mit der du dem Angriff des Gegners ausweichst (wirkt nur bei stamina-Aktionen)",
			points: ["Die Ausweichquote wird so berechnet, als läge das Level des Spielers um diesen Wert über dem Level der Aktion. Je höher der Wert, desto leichter weichst du dem Angriff des Gegners aus."],
		},
		restore: {
			title: "Erholung [Levelunterschied]",
			summary: "Die Korrektur der wiederhergestellten Ausdauer (wirkt nur bei stamina-Aktionen)",
			points: ["Die Menge der wiederhergestellten Ausdauer wird so berechnet, als läge das Level des Spielers um diesen Wert über dem Level der Aktion."],
		},
		speed: {
			title: "Geschwindigkeit [Levelunterschied]",
			summary: "Die Korrektur der benötigten Zeit der Aktion",
			points: ["Die benötigte Zeit wird so berechnet, als läge das Level des Spielers um diesen Wert über dem Level der Aktion. Je höher der Wert, desto stärker wird die benötigte Zeit verkürzt."],
		},
		chance: {
			title: "Erfolgsrate [Levelunterschied]",
			summary: "Die Korrektur der Erfolgswahrscheinlichkeit der Aktion",
			points: ["Die Erfolgswahrscheinlichkeit der Aktion wird so berechnet, als läge das Level des Spielers um diesen Wert über dem Level der Aktion. Je höher der Wert, desto stärker steigt die Erfolgswahrscheinlichkeit."],
		},
		experience: {
			title: "Erfahrung [Levelunterschied]",
			summary: "Die Korrektur der erhaltenen Erfahrung",
			points: ["Die Erfahrung wird so berechnet, als läge das Level des Spielers um diesen Wert unter dem Level der Aktion (weil die Berechnung umgekehrt ist, bekommst du bei höherem Level der Aktion mehr Erfahrung)."],
		},
	},
	options: {
		label: "property",
	},
};

export const combat: Type.Combat = {
	title: "Kampfwerte",
	summary: "Die Einstellung der Kampfkorrekturen bei Aktionen vom Typ stamina",
	points: ["Das sind Korrekturwerte, die nur bei Aktionen vom Typ `stamina` wirken.", "Jeder Wert wird als zusätzliche Korrektur des Levelunterschieds zwischen Spieler und Aktion berechnet.", "Ist der Angriffswert zum Beispiel 10, wird der Angriffsschaden so berechnet, als läge das Level des Spielers 10 über dem Level der Aktion. Ist er negativ, ist es eine Korrektur in die Gegenrichtung.", "Je nachdem, wo du ihn einstellst, ist der Wert der der Spielerseite oder der der Gegnerseite.", "Die Werte der Gegnerseite wirken so, dass sie das jeweils entgegengesetzte Feld aufheben. Die Verteidigung des Gegners hebt den Angriff des Spielers auf, der Angriff des Gegners die Verteidigung des Spielers, das Ausweichen des Gegners die Genauigkeit des Spielers und die Genauigkeit des Gegners das Ausweichen des Spielers.", "Nur die Erholung hebt sich mit demselben Feld auf: je höher die Erholung des Gegners, desto weniger erholt sich der Spieler."],
	list: [
		["Wo es eingestellt wird", "Zu welcher Seite der Wert gehört"],
		["`defaultCombat` in den allgemeinen Einstellungen", "Der Bezugswert der Spielerseite. Er ist der gemeinsame Ausgangspunkt aller `stamina`-Aktionen"],
		["Die Kampfwerte der Aktion", "Werte der Gegnerseite. Vom Spieler aus gesehen wirken sie als Korrekturen in die Gegenrichtung"],
		["Die Kampfwerte der Fähigkeit", "Werte der Seite, die die Fähigkeit besitzt. Die Fähigkeiten der eigenen Seite werden dem Spieler zugerechnet, die des Gegners der Gegnerseite"],
	],
	children: {
		attack: {
			title: "Angriff [Levelunterschied]",
			summary: "Die Levelunterschied-Korrektur des Ausdauerschadens, den du dem Gegner zufügst",
			points: ["Je höher der Wert auf der Spielerseite, desto mehr Schaden fügst du dem Gegner zu.", "Der an einer Aktion oder an einer Fähigkeit des Gegners eingestellte Wert wird zum Angriff der Gegnerseite, und je höher er ist, desto mehr Schaden erleidet der Spieler."],
		},
		defence: {
			title: "Verteidigung [Levelunterschied]",
			summary: "Die Levelunterschied-Korrektur des Ausdauerschadens, den du vom Gegner erleidest",
			points: ["Je höher der Wert auf der Spielerseite, desto stärker wird der erlittene Schaden verringert.", "Der an einer Aktion oder an einer Fähigkeit des Gegners eingestellte Wert wird zur Verteidigung der Gegnerseite, und je höher er ist, desto weniger Schaden fügt der Spieler zu."],
		},
		accuracy: {
			title: "Genauigkeit [Levelunterschied]",
			summary: "Die Levelunterschied-Korrektur der Fehlschlagquote des Angriffs",
			points: ["Je höher der Wert auf der Spielerseite, desto niedriger die Fehlschlagquote des Angriffs.", "Der an einer Aktion oder an einer Fähigkeit des Gegners eingestellte Wert wird zur Genauigkeit der Gegnerseite, und je höher er ist, desto schwerer weicht der Spieler dem Angriff des Gegners aus."],
		},
		evasion: {
			title: "Ausweichen [Levelunterschied]",
			summary: "Die Levelunterschied-Korrektur der Quote, mit der du dem Angriff des Gegners ausweichst",
			points: ["Je höher der Wert auf der Spielerseite, desto leichter weichst du dem Angriff des Gegners aus.", "Der an einer Aktion oder an einer Fähigkeit des Gegners eingestellte Wert wird zum Ausweichen der Gegnerseite, und je höher er ist, desto schwerer trifft der Angriff des Spielers."],
		},
		restore: {
			title: "Erholung [Levelunterschied]",
			summary: "Die Levelunterschied-Korrektur der wiederhergestellten Ausdauer",
			points: ["Je höher der Wert auf der Spielerseite, desto mehr Ausdauer wird nach dem Kampf wiederhergestellt.", "Der an einer Aktion oder an einer Fähigkeit des Gegners eingestellte Wert wird zur Erholung der Gegnerseite, und je höher er ist, desto weniger erholt sich der Spieler.", "Nur die Erholung hebt sich, anders als die übrigen Felder, mit demselben Feld auf."],
		},
	},
	options: {
		label: "combat",
	},
};

export const acquisition: Type.Acquisition = {
	title: "Erhalt",
	summary: "Die Einstellung des Erhalts von Gegenständen und Kategorieleveln",
	points: ["Stelle ein, was erhalten wird.", "Neben Gegenständen lassen sich das Level einer Kategorie und die Anzahl der Ausführungen einer Aktion ändern.", "Die Wahrscheinlichkeit des Erhalts lässt sich einstellen."],
	list: [
		["Typ", "Was erhalten wird"],
		["Kategorie", "Level"],
		["Aktion", "Anzahl der Ausführungen"],
		["Gegenstand", "Besitzanzahl"],
	],
	children: {
		type: {
			title: "Typ",
			summary: "Die Art des Elements, das erhalten wird",
			list: [
				["Typ", "Was erhalten wird"],
				["Kategorie", "Level (der eingestellte Wert wird unmittelbar addiert)"],
				["Aktion", "Anzahl der Ausführungen"],
				["Gegenstand", "Besitzanzahl"],
			],
		},
		id: {
			title: "Die ID des Elements",
			summary: "Die ID, die das zu erhaltende Element bezeichnet",
		},
		count: {
			title: "Wert",
			summary: "Die Zahl, die erhalten wird",
			points: ["Stellst du einen negativen Wert ein, sinken Besitzanzahl, Anzahl der Ausführungen oder Level. Unter 0 fallen sie allerdings nicht.", "Ist am Gegenstand ein maximaler Besitz (maximum) eingestellt, wächst die Besitzanzahl nicht über diesen Wert hinaus.", "Ist der Typ eine Kategorie, wird der eingestellte Wert unmittelbar zum Level addiert (1 ist ein Level). Üblich ist, das über die Erfahrungseinstellung der Aktion zu regeln. Ohne besonderen Zweck ist diese Einstellung nicht nötig.", "Das Level einer Kategorie fällt nicht unter 0 und übersteigt auch nicht `maxCategoryLevels` in den allgemeinen Einstellungen (das maximale Level einer Kategorie).", "Der Wert wird als ganze Zahl eingestellt."],
		},
		chance: {
			title: "Wahrscheinlichkeit [-1 bis 1]",
			summary: "Die Wahrscheinlichkeit, dass der Erhalt gelingt (ein negativer Wert wird nur bei Misserfolg geprüft)",
			points: ["Stelle die Wahrscheinlichkeit des Erhalts als Dezimalzahl von -1 bis 1 ein. Für die Prüfung wird der Absolutwert verwendet.", "Bei einem positiven Wert wird nur bei Erfolg der Aktion geprüft: mit `1` bekommst du es immer, mit `0.5` mit 50% Wahrscheinlichkeit.", "Bei einem negativen Wert wird nur bei Misserfolg der Aktion geprüft: mit `-1` bekommst du es immer, mit `-0.5` mit 50% Wahrscheinlichkeit.", "Mit `0` bekommst du es weder bei Erfolg noch bei Misserfolg.", "Der Standardwert ist `1` (bei Erfolg immer erhalten)."],
		},
	},
	links: { type: "type" },
	options: {
		label: "acquisition",
	},
};

export const requirement: Type.Requirement = {
	title: "Bedingung",
	summary: "Die Einstellung der Bedingungen, die zum Nutzen oder Anzeigen eines Elements nötig sind",
	points: ["Das sind die Bedingungen, die an den einzelnen Elementen eingestellt werden: Kategorie, Aktion, Gegenstand und Ereignis.", "Solange nicht alle eingestellten Bedingungen erfüllt sind, ist der in der Tabelle genannte Vorgang nicht möglich.", "Je nach Freischaltungseinstellung (unlocked) des Elements erscheint das Element selbst erst dann auf dem Bildschirm, wenn die Bedingungen erfüllt sind."],
	list: [
		["Wo es eingestellt wird", "Was nicht möglich ist, solange die Bedingungen nicht erfüllt sind"],
		["Kategorie", "Das Ausführen aller Aktionen der Kategorie und das Bedienen ihrer Gegenstände"],
		["Aktion", "Das Ausführen der Aktion"],
		["Gegenstand", "Das Bedienen des Gegenstands (Ausrüsten und Ähnliches)"],
		["Ereignis", "Das Erfüllen einer Aufgabe sowie das Auslösen eines Änderungsereignisses und eines festen Ereignisses"],
	],
	children: {
		type: {
			title: "Typ",
			summary: "Die Art des Elements, auf das sich die Bedingung bezieht",
			list: [
				["Typ", "Der Wert, auf den Bezug genommen wird"],
				["Kategorie", "Das Level der Kategorie"],
				["Aktion", "Die Anzahl der Ausführungen der Aktion"],
				["Gegenstand", "Die Besitzanzahl des Gegenstands"],
			],
		},
		id: {
			title: "Die ID des Elements",
			summary: "Die ID des Elements, auf das sich die Bedingung bezieht",
			points: ["Stelle die ID der Kategorie, der Aktion oder des Gegenstands ein, auf die sich die Bedingung bezieht.", "Ist am Ereignis die Gruppenzählung (requiringGroup) aktiviert, gilt sie als ID einer Gruppe und nicht eines einzelnen Elements."],
		},
		count: {
			title: "Wert",
			summary: "Die Zahl, die die Bedingung verlangt",
			points: ["Die Bedingung ist erfüllt, wenn der angegebene Wert erreicht oder überschritten ist.", "Sie wird als ganze Zahl ab 0 eingestellt. Der Standardwert ist `1`."],
		},
		chance: {
			title: "Verbrauchswahrscheinlichkeit [0-1]",
			summary: "Die Wahrscheinlichkeit, dass der Gegenstand verbraucht wird (0 bis 1, wirkt nur, wenn der Typ ein Gegenstand ist)",
			points: ["Das ist die Wahrscheinlichkeit, den Gegenstand zu verbrauchen, wenn die Bedingungen erfüllt sind und die Aktion ausgeführt wird.", "Mit `1` wird er immer verbraucht, mit `0.5` mit 50% Wahrscheinlichkeit, mit `0` gar nicht.", "Der Standardwert ist `1` (immer verbraucht). Bei den Bedingungen eines Ereignisses (Aufgabe, Änderungsereignis, festes Ereignis) ist der Standardwert jedoch `0` (nicht verbraucht), damit dein Bestand beim Erfüllen nicht schrumpft.", "Mit `0` schrumpft der Bestand nicht, sodass du die Aktion beliebig oft ausführen kannst, solange die Besitzanzahl den Wert der Bedingung erreicht. Nutze es, wenn die Bedingung nur sein soll, dass der Gegenstand ausgerüstet ist.", "Ist der Typ kein Gegenstand, wirkt es nicht."],
		},
		equipment: {
			title: "Ausrüstung",
			summary: "Ob als Bedingung verlangt wird, dass der Gegenstand ausgerüstet ist (wirkt nur, wenn der Typ ein Gegenstand ist)",
			points: ["Aktivierst du es, verlangt die Bedingung nicht nur, den Gegenstand zu besitzen, sondern ihn auch ausgerüstet zu haben.", "Ob er ausgerüstet ist, wird anhand der Ausrüstung der Kategorie entschieden, zu der der Gegenstand gehört.", "Ist der Typ kein Gegenstand, wirkt es nicht."],
		},
	},
	links: { type: "type" },
	options: {
		label: "requirement",
	},
};

export const information: Type.Information = {
	title: "Information",
	summary: "Die Einstellung der Grunddaten eines Elements (ID, Name, Beschreibungstext, Symbol und Farbe)",
	points: ["Das sind die Felder der Grunddaten, die allen Elementen einer Welt gemeinsam sind (Kategorie, Aktion, Gegenstand, Gruppe, Ereignis, Fähigkeit und Voreinstellung).", "Sie werden für jedes Element einzeln eingestellt."],
	children: {
		id: {
			title: "Kennungs-ID",
			summary: "Die eindeutige ID, die das Element bezeichnet",
			points: ["Das ist die ID, die jedes Element eindeutig bezeichnet.", "Es ist die Zeichenkette, an der der Editor das Element erkennt.", "Zum Beispiel wird über die ID angegeben, welcher Gegenstand beim Abschluss einer Aktion erhalten wird.", "Verwendbar ist eine Kombination aus Buchstaben, Bindestrichen und Ziffern, von 1 bis 100 Zeichen."],
			important: "Ändere eine einmal eingestellte ID nicht mehr, sobald du das Spiel verteilt hast. Änderst du sie, passt sie nicht mehr zu den vorhandenen Spieldaten und das Spiel läuft nicht mehr richtig.",
			children: {
				displayName: {
					title: "Der angezeigte Name",
					summary: "Der Anzeigename, der automatisch aus der ID erzeugt wird",
					points: ["Ist kein Name eingestellt, werden die Bindestriche durch Leerzeichen ersetzt und jedes Wort mit großem Anfangsbuchstaben und kleinem Rest als Name angezeigt.", "Auch wenn die ID Großbuchstaben enthält, wird alles außer dem Anfangsbuchstaben in Kleinbuchstaben umgewandelt.", "Für andere Sprachen als Englisch musst du das Feld Name einzeln einstellen."],
					children: {
						example: {
							title: "Beispiel",
							summary: "Ein konkretes Beispiel für die Umwandlung einer ID",
							points: ["Ist die ID `stylish-strong-axe`, lautet der Name `Stylish Strong Axe`.", "Ist die ID `stylish-STRONG-axe`, lautet er ebenfalls `Stylish Strong Axe`."],
						},
					},
				},
				noDuplicate: {
					title: "Nicht doppelt vorkommen",
					summary: "Verbot doppelter IDs innerhalb desselben Typs",
					points: ["Da sie der Unterscheidung der Elemente dient, vergib sie innerhalb der Typen Kategorie, Aktion, Gegenstand, Gruppe, Ereignis, Fähigkeit und Voreinstellung nicht doppelt.", "Ereignisse fassen Aufgaben, Änderungsereignisse und feste Ereignisse zu einem Typ zusammen, vergib sie also auch unter diesen nicht doppelt.", "Dieselbe ID in verschiedenen Typen ist kein Problem.", "Eine Welt mit Doppelungen führt bei der Prüfung zu einem Fehler."],
					links: { type: "type" },
				},
			},
		},
		name: {
			title: "Name",
			summary: "Der angezeigte Name des Elements",
			points: ["Das ist der Name des Elements, der im Spiel angezeigt wird.", "Du kannst auch andere Sprachen als Englisch eingeben.", "Ein Name, der mit dem eines anderen Elements übereinstimmt, ist in Ordnung.", "Es lassen sich bis zu 20 Zeichen eingeben.", "Passt er nicht in die Anzeigebreite, wird der überstehende Teil mit `…` abgekürzt."],
			children: {
				translateFromId: {
					title: "Automatische Umwandlung aus der ID",
					summary: "Die Funktion, die den Namen automatisch aus der ID erzeugt",
					points: ["Bleibt es leer, wird er automatisch anhand der ID angezeigt. Einzelheiten stehen im vorigen Abschnitt."],
				},
			},
		},
		explanation: {
			title: "Beschreibungstext",
			summary: "Die ausführliche Beschreibung des Elements",
			points: ["Das ist der Beschreibungstext des Elements, der im Spiel angezeigt wird.", "Du kannst auch andere Sprachen als Englisch eingeben. Auch ein langer Text wird vollständig angezeigt.", "Gibt es keine Beschreibung, lasse es leer."],
		},
		icon: {
			title: "Symbol",
			summary: "Die Einstellung des Symbols, das das Element darstellt",
			points: ["Als Symbol lässt sich ein Bild, Iconify oder ein Emoji einstellen.", "Iconify ist ein Dienst, der Symbole der verschiedensten Art bereitstellt.", "Stellst du mehrere davon ein, werden sie in der Reihenfolge Bild, Iconify, Emoji bevorzugt angezeigt."],
			children: {
				image: {
					title: "Bild",
					summary: "Eine beliebige Bilddatei verwenden",
					points: ["Das ist das Bild, das das Element darstellt.", "Beim Einlesen wird es automatisch auf höchstens 60×60 Pixel verkleinert und neu komprimiert.", "Hast du Iconify oder ein Emoji eingestellt, ist es nicht nötig."],
					children: {
						"file-type": {
							title: "Dateiarten",
							summary: "Die unterstützten Bilddateiformate",
							points: ["Verwendbar sind die gängigen Arten, die ein Browser anzeigen kann.", "JPEG, PNG, GIF, WebP, SVG und Ähnliches.", "GIF und AVIF werden in PNG umgewandelt. JPEG und WebP werden unter Beibehaltung ihres ursprünglichen Formats verkleinert.", "SVG wird ohne Verkleinerung unverändert eingebettet, vermeide daher große Dateien."],
						},
					},
				},
				iconify: {
					title: "Iconify",
					summary: "Die Verwendung der Iconify-Symbolsätze",
					points: ["Das ist das Symbol, das das Element darstellt.", "Hast du ein Bild eingestellt, wird dieses bevorzugt angezeigt."],
					children: {
						iconify: {
							title: "Wie man ein Symbol findet",
							summary: "Wie man bei Iconify ein Symbol auswählt",
							points: ["Suche die anzeigbaren Symbole bei `Iconify`.", "Über die Symbolsuche findest du sofort das passendste Symbol.", "Wählst du ein Symbol aus, wird dessen Kennung wie `game-icons:sword-wound` (die Art des Symbolsatzes `:` der Name des Symbols) angezeigt; füge sie unverändert in dieses Symbolfeld ein."],
							images: ["iconify-selection.png"],
							links: { iconify: "https://icon-sets.iconify.design" },
						},
					},
				},
				emoji: {
					title: "Emoji",
					summary: "Das Symbol mit einem Emoji anzeigen",
					points: ["Zeigt ein Emoji als Symbol an.", "Gib ein Unicode-Emoji unverändert ein.", "Verwendet wird das im Ausführungsumfeld installierte Emoji, deshalb sieht es je nach Nutzer etwas anders aus.", "Mit Iconify lassen sich Emojis einstellen, die nicht vom jeweiligen Umfeld abhängen", "Es lassen sich auch andere Zeichen als Emojis anzeigen, aber bei mehreren Zeichen kann die Darstellung zerbrechen.", "Zum Beispiel gibst du ein Emoji wie `🗡️` oder `⚔️` ein."],
				},
			},
		},
		color: {
			title: "Farbe",
			summary: "Die Einstellung der Anzeigefarbe des Elements",
			points: ["Als Farbe des Elements wird sie auf das Symbol des Elements und auf dessen Hintergrundfarbe angewendet.", "Sie wird über die Farbauswahl des Editors gewählt.", "Schwarz (`#000000`) gilt als der Wert, der „keine Farbe eingestellt“ bedeutet. Auch der Anfangswert der Farbauswahl ist dieses Schwarz.", "Willst du ein schwarzes Aussehen, gib eine leicht verschobene Farbe wie `#010101` an."],
			children: {
				"heritage-from-parent": {
					title: "Vererbung vom übergeordneten Element",
					summary: "Die Übernahme der Farbeinstellung des übergeordneten Elements",
					points: ["Aktionen, Gegenstände und Ereignisse ohne eingestellte Farbe übernehmen die Farbe der Kategorie, zu der sie gehören.", "Die Hierarchie der Vererbung sieht so aus.", "Bei einem Element mit einzeln eingestellter Farbe hat diese Farbe Vorrang. Sie wird nicht überschrieben, auch wenn die Kategorie eine Farbe hat.", "Grundsätzlich legt man je Kategorie eine Farbe fest und überlässt das Darunterliegende der Vererbung. Eine eigene Farbe stellt man ein, wenn ein bestimmtes Element hervorstechen soll.", "Ist an der Aktion ein Attribut (attribute) eingestellt, wird nicht die Farbe der Kategorie übernommen, zu der sie gehört, sondern die der im Attribut angegebenen Kategorie.", "Die Kategorie selbst hat niemanden, von dem sie erben könnte. Bleibt die Farbe der Kategorie Schwarz (`#000000`), werden diese Kategorie und die darunterliegenden Elemente ohne eingestellte Farbe in der Mischfarbe zwischen der Balkenfarbe und der Textfarbe des Designs angezeigt.", "Gruppen, Fähigkeiten und Voreinstellungen erben nicht und verwenden nur die an ihnen selbst eingestellte Farbe."],
					quote: colorTree,
					links: { type: "type" },
				},
			},
		},
		copy: {
			title: "Die Information kopieren",
			summary: "Die Information eines anderen Elements duplizieren",
			points: ["Ein Druck auf die Schaltfläche `Copy Information` kopiert die Information eines anderen Elements auf einen Schlag in dieses Element.", "Wähle den Typ der Kopiervorlage (Kategorie, Aktion, Gegenstand, Gruppe, Ereignis, Fähigkeit oder Voreinstellung) und gib anschließend deren ID ein.", "Alle Felder einschließlich der Kennungs-ID werden überschrieben. Ändere die Kennungs-ID nach dem Kopieren in eine, die nicht doppelt vorkommt."],
			links: { type: "type" },
		},
	},
	options: {
		label: "information",
	},
};

export const component: Markdown = {
	title: "Komponente",
	summary: "Gemeinsame Bauteile",
	points: ["Die gemeinsamen Bauteile, die in den Einstellungen der verschiedenen Stellen vorkommen, werden herausgezogen und für sich behandelt.", "Die Komponenten, die an jeder dieser Stellen verwendet werden, sind gleich, aber je nach Stelle gibt es Felder der Komponente, die nicht verwendet werden."],
	list: expandList("Komponente", [information, requirement, acquisition, combat, property], "Beschreibung"),
	options: {
		label: "component",
		linkedList: true,
	},
};

// type

export const preset: Type.Information = {
	...information,
	title: "Voreinstellung",
	summary: "Anpassung der Darstellung der Systemelemente",
	points: ["Ersetzt die UI-Texte und Symbole, die von vornherein in die Spiel-Engine (den Player) eingebaut sind.", "Ersetzt werden nur die, deren ID mit einer vorhandenen Voreinstellung übereinstimmt. Eine Voreinstellung hinzuzufügen, deren ID mit keiner vorhandenen übereinstimmt, ist kein Fehler, wirkt sich aber nicht auf die Anzeige aus, weil nichts darauf verweist.", "Ersetzt werden nur die Felder, die du einstellst. Stellst du zum Beispiel nur das Symbol ein, werden für Name, Farbe und alle übrigen Felder die ursprünglichen verwendet.", "Das Überschreiben von Name und Beschreibung hat Vorrang vor den im Player eingebauten Übersetzungen der einzelnen Sprachen. Die überschriebene Zeichenkette wird in genau dieser Form in allen Sprachen angezeigt.", "Willst du den Wortlaut je nach Sprache ändern, gib ihn in der Übersetzungsdatei `translations/world` an, die bei aktivierter Übersetzung ausgegeben wird. Diese hat den höchsten Vorrang."],
	options: {
		label: "preset",
	},
};

export const task: Type.Event = {
	title: "Aufgabe",
	summary: "Eine Mission, die als erreicht gilt, wenn die Bedingungen erfüllt sind",
	points: ["Sie gilt als erreicht, wenn die von dir eingestellten Bedingungen erfüllt sind, und oben am Bildschirm erscheint eine Meldung.", "Sie erscheint in der Missionsliste des Players und in der Aufgabenliste der Kategorie.", "Eine Aufgabe ohne eingestellte Bedingungen wird nie erreicht.", "Einmal erreicht, bleibt sie erreicht, auch wenn die Bedingungen danach nicht mehr erfüllt sind, und die Belohnung lässt sich jederzeit abholen.", "Die Belohnung wird nicht automatisch übergeben. Der Spieler erhält sie, wenn er die Aufgabe öffnet und die Leiste Erhalt drückt.", "Bis die Belohnung abgeholt ist, trägt die Leiste in der Liste ein Band, das zeigt, dass sie noch nicht abgeholt wurde.", "Eine Aufgabe ohne eingestellte Belohnung zeigt keine Leiste Erhalt und ist in dem Moment abgeschlossen, in dem sie erreicht wird.", "Solange die Zahl der Gegenstandsarten, die du halten kannst, am Limit ist, kannst du die Belohnung nicht abholen. Räume deinen Bestand auf und hole sie erneut ab.", "Mit dem Erhalt kannst du das Level einer Kategorie, die Anzahl der Ausführungen einer Aktion und die Besitzanzahl eines Gegenstands verändern.", "Was du zu einem anderen Zeitpunkt als über die Bedingungen auslösen willst, etwa beim ersten Start oder bei Spielende, stellst du mit einem festen Ereignis (unique) ein."],
	links: { unique: "unique" },
	children: {
		information: information,
		category: {
			title: "Kategorie",
			summary: "Die ID der Kategorie, zu der die Aufgabe gehört",
			points: ["Gib die ID der Kategorie an, zu der diese Aufgabe gehören soll.", "Ist sie eingestellt, wird dem Kategoriebildschirm des Players die Aufgabenliste hinzugefügt, und in der Missionsliste werden sie ebenfalls nach Kategorie zusammengefasst angezeigt.", "Bleibt sie leer, gehört die Aufgabe zu keiner Kategorie und wird gesammelt am Anfang der Missionsliste angezeigt.", "Ist an der Aufgabe selbst keine Farbe eingestellt, erbt sie die Farbe der Kategorie."],
			links: { category: "category" },
		},
		timing: {
			title: "Zeitpunkt",
			summary: "Der Zeitpunkt, zu dem die Aufgabe auslöst (fest auf `tasked`)",
			points: ["Bei einer Aufgabe ist `tasked` (wenn die von dir eingestellten Bedingungen erfüllt sind) fest vorgegeben und nicht bearbeitbar.", "Die Belohnung lässt sich nur einmal abholen, und nach dem Abholen bleibt die Aufgabe erreicht, ohne sich weiter zu ändern.", "Was du zu einem anderen festen Zeitpunkt auslösen willst, stellst du mit einem festen Ereignis (unique) ein."],
			links: { unique: "unique" },
		},
		unlocked: {
			title: "Anfänglicher Anzeigezustand",
			summary: "Der anfängliche Anzeigezustand des Aufgabensymbols (das Erreichen entscheiden die Bedingungen, und diese Einstellung erreicht es nicht)",
			points: ["Die Bedingungen für das Erreichen einer Aufgabe entscheidet requirements, und dieses Feld wirkt sich nur auf das Aussehen des Symbols in der Liste aus.", "secreted: Sie erscheint überhaupt nicht in der Aufgabenliste, bis alle requirements erfüllt sind (das Erreichen selbst geschieht weiterhin über die Bedingungen).", "hidden und hinted: Das Symbol wird durchgestrichen als noch nicht freigeschaltet angezeigt.", "released: Der Strich verschwindet, und es wird als bereits freigeschaltet angezeigt.", "Eine einmal erreichte Aufgabe verschwindet nicht aus der Liste und wird weiter als erreicht angezeigt, auch wenn die Bedingungen danach nicht mehr erfüllt sind."],
		},
		requirements: { ...requirement, options: { ...requirement.options, array: true }, summary: "Die Bedingungen für das Erreichen der Aufgabe" },
		requiringGroup: {
			title: "Gruppensummierung",
			summary: "Behandelt die id in den Bedingungen als Gruppen-ID und urteilt nach dem Gesamtwert der Elemente, die zu ihr gehören",
			points: ["Ist sie aktiviert, wird die id, die du in den Bedingungen (requirements) einstellst, als ID einer Gruppe direkt unter der Welt behandelt.", "Eine Bedingung vom Typ Kategorie wird nach der Summe der Level aller Kategorien beurteilt, die zu dieser Gruppe gehören.", "Eine Bedingung vom Typ Aktion wird nach der Summe der Ausführungen aller Aktionen beurteilt, die zu dieser Gruppe gehören.", "Eine Bedingung vom Typ Gegenstand wird nach der Summe der Besitzanzahl aller Gegenstände beurteilt, die zu dieser Gruppe gehören.", "Elemente, die nicht freigeschaltet sind (jeder Zustand außer released), zählen nicht zur Summe.", "Die Verbrauchswahrscheinlichkeit (chance) und die Ausrüstungsbedingung (equipment) eines Gegenstands werden ignoriert, und die Besitzanzahl wird auch nicht verbraucht. Sie dienen nur der Beurteilung.", "Ist sie deaktiviert, wird die id in den Bedingungen wie bisher als ID einer einzelnen Kategorie, Aktion oder eines einzelnen Gegenstands behandelt."],
			links: { group: "group" },
		},
		acquisitions: { ...acquisition, options: { ...acquisition.options, array: true }, summary: "Die Belohnung, die beim Erreichen der Aufgabe abgeholt werden kann" },
		group: {
			title: "Aufgabengruppe",
			summary: "Die Einteilung der Aufgabe in eine Anzeigegruppe",
			points: ["Wende eine von denen an, die in den Gruppen direkt unter der Welt definiert sind.", "In der Aufgabenliste einer Kategorie werden sie nach Gruppen getrennt mit je einer Überschrift angezeigt. Aufgaben ohne eingestellte Gruppe bilden ebenfalls einen Block, und als dessen Überschrift wird die Voreinstellung „Aufgabe“ verwendet.", "In der Missionsliste werden sie nicht durch Überschriften getrennt, nur die Reihenfolge, in der sie stehen, wird nach Gruppen zusammengefasst.", "In welcher Reihenfolge die Blöcke stehen, entscheidet die Stelle, an der die erste Aufgabe dieser Gruppe auftaucht."],
			links: { group: "group" },
		},
	},
	options: {
		label: "task",
	},
};

// 構造はtaskと同じで、timingだけchanged固定。プレイヤーの画面には一切表示されない内部処理用のイベント
export const changed: Type.Event = {
	title: "Änderungsereignis",
	summary: "Ein Ereignis für die interne Verarbeitung, das auslöst, wenn die Menge einer Kategorie, einer Aktion oder eines Gegenstands auf einen Schlag um mindestens den Betrag in den Bedingungen steigt",
	points: [
		"Es wird zu jedem Zeitpunkt geprüft, an dem sich eine Menge ändert: beim Abschluss einer Aktion, beim Kauf oder Verkauf, beim Öffnen einer Schatztruhe und so weiter.",
		"Die Bedingungen (requirements) werden nach dem Zuwachs dieses einen Zeitpunkts beurteilt, nicht nach einem absoluten Wert wie der Besitzanzahl. Kleine Zuwächse, die auf mehrere Male verteilt sind, werden nicht zusammengezählt.",
		"Stellst du die Bedingung eines Gegenstands zum Beispiel auf 3, ist sie erfüllt, wenn dieser Gegenstand bei diesem einen Mal um 3 oder mehr zunimmt. Eine Abnahme zählt nicht als Zunahme.",
		"Stellst du mehrere Bedingungen ein, müssen sie bei dieser einen Änderung alle gleichzeitig erfüllt sein. Ein Änderungsereignis, bei dem keine einzige Bedingung eingestellt ist, löst nicht aus.",
		"Setzt du den Wert einer Bedingung auf `0`, gilt sie auch ohne Zuwachs als erfüllt, sodass das Ereignis bei jeder Mengenänderung auslöst.",
		"Die Verbrauchswahrscheinlichkeit (chance) und die Ausrüstung (equipment) der Bedingungen werden nicht angesehen. Beurteilt wird nur nach dem Zuwachs, und die in den Bedingungen verwendeten Elemente nehmen auch nicht ab.",
		"Die Belohnung wird jedes Mal automatisch abgeholt, wenn die Bedingungen erfüllt sind, und das Ereignis löst beliebig oft wieder aus. Anders als bei einer Aufgabe ist es nicht einmalig, und zum Abholen ist kein Handgriff nötig. Die Menge lässt sich auch negativ einstellen.",
		"Anders als bei einer Aufgabe oder einem Kauf wird das Limit der Gegenstandsarten, die du halten kannst, nicht geprüft, sodass neue Gegenstände über die Kapazität hinaus hinzukommen können.",
		"Ein Zuwachs durch eine Belohnung gilt ebenfalls als Änderung: Erfüllt die Belohnung eines Änderungsereignisses die Bedingungen eines anderen Änderungsereignisses, löst dieses gleich darauf aus.",
		"Auf dem Bildschirm des Players wird es überhaupt nicht angezeigt. Es taucht auch nicht in der Missionsliste auf, und es erscheint keine Meldung über das Erreichen.",
	],

	important: "Stelle die Belohnung eines Änderungsereignisses nicht so ein, dass sie seine eigenen Bedingungen erfüllt. Das Auslösen hört nicht mehr auf und das Spiel bleibt stehen. Ein Beispiel ist ein Ereignis, dessen Bedingungen erfüllt sind, sobald Gegenstand A um eins zunimmt, und dessen Belohnung ein Stück von Gegenstand A übergibt.",
	links: { unique: "unique" },
	children: {
		information: information,
		category: {
			title: "Kategorie",
			summary: "Die ID der Kategorie, zu der das Änderungsereignis gehört (sie dient nur der Einteilung, da auf dem Bildschirm nichts angezeigt wird)",
			points: ["Da auf dem Bildschirm des Players nichts angezeigt wird, wirkt sich diese Einstellung nicht auf das Aussehen aus."],
		},
		timing: {
			title: "Zeitpunkt",
			summary: "Der Zeitpunkt, zu dem das Änderungsereignis auslöst (fest auf `changed`)",
			points: ["Es ist fest auf `changed` eingestellt und nicht bearbeitbar.", "Es wird zu jedem Zeitpunkt geprüft, an dem sich eine Menge ändert, und löst jedes Mal wieder aus, wenn die Bedingungen erfüllt sind."],
		},
		unlocked: {
			title: "Anfänglicher Anzeigezustand",
			summary: "Sie wirkt sich praktisch nicht aus, da auf dem Bildschirm nichts angezeigt wird",
			points: ["Ein Änderungsereignis wird auf dem Bildschirm des Players nicht angezeigt, daher wird diese Einstellung nicht verwendet."],
		},
		requirements: { ...requirement, options: { ...requirement.options, array: true }, summary: "Die Bedingungen, unter denen das Änderungsereignis auslöst (beurteilt nach dem Zuwachs der Menge)" },
		requiringGroup: {
			title: "Gruppensummierung",
			summary: "Behandelt die id in den Bedingungen als Gruppen-ID und urteilt nach der Summe der Zuwächse der Elemente, die zu ihr gehören",
			points: ["Ist sie aktiviert, wird die id, die du in den Bedingungen (requirements) einstellst, als ID einer Gruppe direkt unter der Welt behandelt.", "Die Zuwächse aller Kategorien, aller Aktionen und aller Gegenstände, die zu dieser Gruppe gehören, werden für die Beurteilung zusammengezählt.", "Anders als bei der Gruppensummierung einer Aufgabe zählt auch der Zuwachs noch nicht freigeschalteter Elemente zur Summe.", "Ist sie deaktiviert, wird die id in den Bedingungen wie bisher als ID einer einzelnen Kategorie, Aktion oder eines einzelnen Gegenstands behandelt."],
			links: { group: "group" },
		},
		acquisitions: { ...acquisition, options: { ...acquisition.options, array: true }, summary: "Die Belohnung, die beim Auslösen des Änderungsereignisses automatisch abgeholt wird" },
		group: {
			title: "Änderungsereignisgruppe",
			summary: "Die Einteilung in eine Anzeigegruppe für die interne Verwaltung (praktisch ungenutzt, da auf dem Bildschirm nichts angezeigt wird)",
			points: ["Ein Änderungsereignis wird auf dem Bildschirm des Players nicht angezeigt, daher wirkt sich diese Einstellung nicht auf das Aussehen aus."],
		},
	},
	options: {
		label: "changed",
	},
};

export const group: Type.Information = {
	...information,
	title: "Gruppe",
	summary: "Definiert die Anzeigegruppen der Kategorien, Aktionen, Gegenstände und Aufgaben",
	points: ["Definiert die Gruppen, mit denen die Anzeigereihenfolge gesteuert wird. Bei jeder Kategorie, Aktion, jedem Gegenstand und jeder Aufgabe kannst du eine hier definierte Gruppe einstellen.", "Was zur selben Gruppe gehört, wird in einer Liste zusammen angezeigt. In welcher Reihenfolge die Blöcke stehen, entscheidet die Stelle, an der das erste Element dieser Gruppe auftaucht (nicht die Definitionsreihenfolge dieser Gruppenliste).", "Auch das, was leer gelassen ist, gilt als eine Gruppe, und die leeren kommen zusammen.", "Die Definitionsreihenfolge dieser Gruppenliste zählt nur für die Anordnung der Ausrüstungsplätze. Die Ausrüstungsplätze werden in der Reihenfolge angezeigt, in der sie hier stehen, und eine Gruppe, die hier fehlt, rutscht nach hinten.", "Auch einer Gruppe lassen sich Name, Beschreibung, Symbol und Farbe geben, und auf dem Bildschirm der Gruppe kannst du die Kategorien, Aktionen und Gegenstände auflisten, die zu ihr gehören.", "Aktivierst du in den Bedingungen eines Ereignisses die Gruppensummierung, kannst du die ID einer Gruppe angeben und die Elemente, die zu ihr gehören, gesammelt als Bedingung nehmen."],
	links: { requirement: "requirement" },
	options: {
		label: "group",
	},
};

export const skill: Type.Skill = {
	title: "Fähigkeit",
	summary: "Ein besonderer Effekt, der in jeder Runde des Kampfes ausgelost wird und auslöst",
	points: ["Es ist ein besonderer Effekt, der in einer Kampfaktion (`stamina`) in jeder Runde ausgelost wird und auslöst. Bei Aktionen anderer Typen löst er nicht aus.", "Definiert wird sie selbst hier, und über die ID wird aus `skill` eines Gegenstands (deine Seite) und `skills` einer Aktion (die Seite des Gegners) auf sie verwiesen.", "Die Kandidaten deiner Seite sind die Fähigkeiten, auf die die Gegenstände verweisen, die gerade wirken (`unnecessary` im Besitz, `necessary` und `consumable` ausgerüstet). Legst du die Ausrüstung ab, fällt auch deren Fähigkeit aus den Kandidaten.", "In jeder Runde werden die Kandidaten für deine Seite und für die Seite des Gegners gemischt, die Auslösewahrscheinlichkeit wird von vorn geprüft, und nur die erste, bei der es klappt, löst aus. Klappt es bei keiner, gibt es in dieser Runde keine Fähigkeit.", "Verweisen mehrere Gegenstände oder Aktionen auf dieselbe Fähigkeit, bekommt sie entsprechend mehr Gelegenheiten bei der Auslosung und löst deshalb leichter aus."],
	links: { item: "item", action: "action" },
	children: {
		information: information,
		chance: {
			title: "Auslösewahrscheinlichkeit [0-1]",
			summary: "Die Wahrscheinlichkeit, dass diese Fähigkeit in dieser Runde auslöst",
			points: ["In jeder Runde wird mit dieser Wahrscheinlichkeit geprüft, ob sie auslöst. Bei `1` klappt es immer, bei `0` löst sie nicht aus. Der Standardwert ist `1`.", "Die Prüfung geht der Reihe nach von vorn durch die gemischten Kandidaten, und nur die erste Fähigkeit, bei der es klappt, löst aus. Deshalb ist der Anteil, mit dem sie tatsächlich auslöst, bei mehreren Kandidaten niedriger als dieser Wert.", "Ist die Anzeige der Beschreibung aktiviert, wirkt sich dieser Wert auch darauf aus, wie oft die Beschreibung erscheint. Je leichter eine Fähigkeit auslöst, desto seltener wiederholt sich ihre Beschreibung."],
		},
		property: {
			...combat,
			summary: "Die Kampfwerte, die in der Runde des Auslösens hinzukommen",
			points: ["Nur in der Runde, in der diese Fähigkeit auslöst, kommen die Kampfwerte von hier als Levelunterschied-Korrektur hinzu.", "Nur der Erholungswert ist die Ausnahme: Er wirkt nicht in dieser Runde, sondern gesammelt auf die Erholung nach der Entscheidung. Von den Erholungswerten der Fähigkeiten, die während der Aktion ausgelöst haben, wird der größte bei den Fähigkeiten deiner Seite zur Erholungsmenge addiert und bei den Fähigkeiten des Gegners davon abgezogen."],
		},
		comment: {
			title: "Anzeige der Beschreibung",
			summary: "Ob die Beschreibung beim Auslösen als Toast-Benachrichtigung angezeigt wird",
			points: ["Es ist das Kennzeichen dafür, ob die Beschreibung als Toast-Benachrichtigung angezeigt wird, wenn diese Fähigkeit auslöst.", "Ist es an, wird sie bei jedem Auslösen mit einer Wahrscheinlichkeit von (100% − Auslösewahrscheinlichkeit) ÷ 2 angezeigt. Bei einer Auslösewahrscheinlichkeit von 40% sind das 30%.", "Ist es aus, wird sie nicht angezeigt.", "Ist die Beschreibung leer, wird sie auch dann nicht angezeigt, wenn du es anschaltest."],
		},
	},
	options: {
		label: "skill",
	},
};

export const item: Type.Item = {
	title: "Gegenstand",
	summary: "Elemente für Dinge wie Ausrüstung und Verbrauchsgüter",
	points: ["Es sind die Elemente rund um den Besitz von Dingen wie Ausrüstung, Verbrauchsgütern und Wertsachen.", "Die Ausrüstungsplätze entstehen je Kategorie nach Gruppen, und von den Gegenständen desselben Platzes lässt sich nur einer ausrüsten. Ein Gegenstand lässt sich auch so anlegen, dass er nicht ausgerüstet werden kann.", "Da die Besitzanzahl selbst der Fortschritt ist, lässt sich ein Gegenstand auch wie eine Markierung oder ein Zähler verwenden. Machst du daraus einen Gegenstand ohne Wirkung, der sich auch nicht ausrüsten lässt, wird er zu einem Element, das nur eine Zahl zählt."],
	children: {
		information: information,
		category: {
			title: "Kategorie",
			summary: "Die ID der Kategorie, zu der der Gegenstand gehört",
			points: ["Gib die ID der Kategorie an, zu der dieser Gegenstand gehört. Er reiht sich in die Gegenstandsliste der angegebenen Kategorie ein, und auch die Ausrüstungsplätze entstehen je Kategorie.", "Ist am Gegenstand selbst keine Farbe eingestellt, erbt er die Farbe der Kategorie.", "Wohin die Wirkungen der Eigenschaften reichen, lässt sich getrennt von der Kategorie angeben, zu der er gehört, sodass auch ein Gegenstand einer anderen Kategorie eine Wirkung geben kann."],
			links: { category: "category", property: "property" },
		},
		group: {
			title: "Gruppe",
			summary: "Die Einteilung des Gegenstands in eine Anzeigegruppe",
			points: ["Wende eine von denen an, die in den Gruppen direkt unter der Welt definiert sind.", "Die Gegenstandsliste wird in der Reihenfolge der von dir eingestellten Gruppen angezeigt.", "Bleibt sie leer, wird nicht nach Gruppen aufgeteilt."],
			links: { group: "group" },
		},
		unlocked: {
			title: "Anfänglicher Freischaltzustand",
			summary: "Der anfängliche Anzeige- und Freischaltzustand des Elements (bei erfüllten Auslösevoraussetzungen geht er automatisch in einen höheren Zustand über)",
			points: ["secreted: Es erscheint überhaupt nicht in der Oberfläche, bis alle requirements erfüllt sind (es taucht auch nicht in den Hinweisen auf und ist in den Listen der Voraussetzungen und Belohnungen maskiert).", "hidden: Solange kein freigeschaltetes Element darauf verweist und seine Voraussetzungen unerfüllt sind, ist es vollständig verborgen (auch der Name ist ausgegraut und nicht bedienbar).", "hinted (Standard): Nur der Name wird vorab angezeigt, bedienen lässt es sich aber erst nach dem Freischalten.", "released: Es ist unabhängig von den Bedingungen von Anfang an freigeschaltet und bedienbar (früher „von Anfang an anzeigen“).", "Ist ein Gegenstand auch nur einmal erlangt worden, bleibt er unabhängig von dieser Einstellung und den Bedingungen freigeschaltet.", "Umgekehrt wird ein Gegenstand, bei dem keine einzige Bedingung eingestellt ist, erst freigeschaltet, wenn er erlangt wird, sofern du ihn nicht auf `released` setzt. Stelle bei Gegenständen, die gekauft werden sollen, immer Bedingungen ein."],
		},
		buyingValue: {
			title: "Kaufpreis [Münzen]",
			summary: "Die Einstellung des Kaufpreises des Gegenstands",
			points: ["Es ist die Menge an Währung, die du beim Kauf eines Stücks des Gegenstands zahlst. Der Standardwert ist `-1` (nicht kaufbar).", "Ein Gegenstand, der nicht freigeschaltet ist, lässt sich auch mit eingestelltem Preis nicht kaufen.", "Wie viel du auf einmal kaufen kannst, ist der kleinere Wert aus dem, was du mit der besessenen Währung kaufen kannst, und dem Rest bis zur maximalen Besitzanzahl."],
			list: [
				["Kaufpreis", "Behandlung"],
				["0", "Nicht kaufbar"],
				["Ein Wert größer als 0", "Der Preis, zu dem er gekauft werden kann"],
				["Ein Wert kleiner als 0 (zum Beispiel -1)", "Nicht kaufbar (wie 0 behandelt)"],
			],
		},
		sellingValue: {
			title: "Verkaufspreis [Münzen]",
			summary: "Die Einstellung des Verkaufspreises des Gegenstands",
			points: ["Es ist die Menge an Währung, die du beim Verkauf eines Stücks des Gegenstands erhältst. Der Standardwert ist `0` (nicht verkaufbar).", "Die Währung, die du erhältst, ist dieselbe wie beim Kauf: die über die Handelswährungs-ID angegebene.", "Er ergibt sich nie automatisch aus dem Kaufpreis, stelle also immer einen Wert ein, wenn er verkaufbar sein soll.", "Negative Werte lassen sich nicht einstellen."],
			list: [
				["Verkaufspreis", "Behandlung"],
				["0", "Nicht verkaufbar"],
				["Ein Wert größer als 0", "Er kann zu diesem Preis verkauft werden"],
			],
		},
		maximum: {
			title: "Maximale Besitzanzahl [Stück]",
			summary: "Die Begrenzung der maximalen Besitzanzahl des Gegenstands",
			points: ["Bei 0 gibt es keine Begrenzung für die Menge, die besessen werden kann. Der Standardwert ist `0`.", "Bei 1 oder mehr lässt sich nur bis zu dieser Anzahl besitzen. Ist die Grenze erreicht, steigt die Besitzanzahl auch dann nicht, wenn du mehr erlangst.", "Sie wird auch zur Obergrenze der Menge, die gekauft werden kann.", "Übersteigt die Besitzanzahl im Spielstand die Grenze, wird sie beim Laden auf die Grenze verringert."],
		},
		equipmentType: {
			title: "Ausrüstungstyp",
			summary: "Die Typeinstellung rund um Ausrüsten, Wirkung und Verbrauch des Gegenstands",
			points: ["Bei Gegenständen mit `necessary` und `consumable` wird deren Gruppe automatisch zu einem Ausrüstungsplatz der Kategorie.", "Innerhalb derselben Gruppe lässt sich nur ein Gegenstand ausrüsten. Rüstest du einen neuen Gegenstand aus, wird die vorhandene Ausrüstung derselben Gruppe automatisch abgelegt.", "Die Reihenfolge der Ausrüstungsplätze richtet sich nach der Definitionsreihenfolge der Gruppenliste der Welt.", "`unnecessary` wirkt unabhängig davon, ob er ausgerüstet ist, und die Höhe der Wirkung ist proportional zur Besitzanzahl (bei 0 keine Wirkung, bei n Stück das n-Fache).", "`consumable` wird nur dann verbraucht, wenn die Eigenschaften dieses Gegenstands auf die ausgeführte Aktion wirken, und zwar ein Stück je Aktion. Bei Aktionen, die seine Wirkung nicht erreicht, nimmt er nicht ab. Ob er tatsächlich abnimmt, entscheidet die Verbrauchswahrscheinlichkeit.", "Ein Gegenstand, der bis auf 0 verbraucht ist, wird automatisch abgelegt.", "Zum Ausrüsten müssen sowohl die Bedingungen dieses Gegenstands als auch die der Kategorie erfüllt sein."],
			list: [
				["Wert", "Ausrüstung", "Wirkung", "Verbrauch", "Beispiel"],
				["`necessary`", "Nötig", "Nur ausgerüstet (für ein Stück)", "Nein", "Ausrüstung wie Schwerter und Rüstungen"],
				["`consumable`", "Nötig", "Nur ausgerüstet (für ein Stück)", "Wird beim Ausführen der Aktion verbraucht", "Gegenstände, die für eine Wirkung verbraucht werden, etwa Tränke"],
				["`unnecessary`", "Nicht nötig", "Immer im Besitz (proportional zur Besitzanzahl)", "Nein", "Passive Gegenstände, die schon durch das Halten wirken"],
				["`impossible`", "Nicht möglich", "Keine", "Nein", "Gegenstände ohne Wirkung, etwa Material und Kram"],
			],
		},
		consumeChance: {
			title: "Verbrauchswahrscheinlichkeit [0-1]",
			summary: "Wahrscheinlichkeit, dass eine verbrauchbare Ausrüstung bei einer Aktion verbraucht wird",
			points: ["Gib von `0` bis `1` die Wahrscheinlichkeit an, mit der ein Gegenstand mit dem Ausrüstungstyp `consumable` bei einer Aktion verbraucht wird. Der Standardwert ist `1` (wird jedes Mal verbraucht).", "Bei `0.5` wird er etwa jedes zweite Mal verbraucht, bei `0` nie.", "Die Verbrauchsprüfung findet nur statt, wenn die Eigenschaften dieses Gegenstands auf die ausgeführte Aktion wirken.", "Bei anderen Ausrüstungstypen als `consumable` wird sie nicht verwendet."],
		},
		requirements: { ...requirement, options: { ...requirement.options, array: true }, summary: "Die Bedingungen, unter denen der Gegenstand freigeschaltet und ausrüstbar wird" },
		properties: { ...property, options: { ...property.options, array: true }, summary: "Die Eigenschaftswirkungen, die der Gegenstand hat" },
		coinId: { title: "Handelswährungs-ID", summary: "Die ID der Währung, die für den Handel mit diesem Gegenstand verwendet wird", points: ["Gib die ID der Währung (coins) an, die für Kaufpreis und Verkaufspreis gemeinsam verwendet wird.", "Bleibt sie leer oder gibst du eine ID an, die nicht in der Währungsliste steht, wird die Hauptwährung (die erste in coins) verwendet."] },
		// スキルの実体ではなくワールド直下のskillsのID参照なので、スキル自身の項目は持たせない
		skill: { title: skill.title, summary: "Die ID der Fähigkeit, die dieser Gegenstand deiner Seite bringt", points: ["Gib eine ID an, die in den Fähigkeiten direkt unter der Welt definiert ist. Bleibt sie leer, gibt es keine Fähigkeit.", "Solange dieser Gegenstand wirkt (`unnecessary` im Besitz, `necessary` und `consumable` ausgerüstet), nimmt die angegebene Fähigkeit an der Auslosung deiner Seite teil.", "Gibst du eine ID an, die nicht existiert, wird sie ignoriert."], links: { skill: "skill" }, options: { label: "skill" } },
	},
	options: {
		label: "item",
	},
};

export const action: Type.Action = {
	title: "Aktion",
	summary: "Die Handlungselemente wie Sammeln, Herstellen und Kampf",
	points: ["Es ist ein Element, das eine Handlung darstellt, etwa Sammeln, Herstellen, Handeln oder Kampf.", "Mit jeder Handlung erhältst du Erfahrung und dein Level steigt.", "Du kannst einstellen, dass mit jeder Handlung Gegenstände verbraucht oder erhalten werden.", "Von den Handlungsmustern gibt es mehrere Arten."],
	children: {
		information: information,
		category: {
			title: "Kategorie",
			summary: "Die ID der Kategorie, zu der die Aktion gehört",
			points: ["Gib die ID der Kategorie an, zu der diese Aktion gehört."],
		},
		attribute: {
			title: "Attribut",
			summary: "Die aktionseigene Attributkategorie",
			points: ["Du kannst ein einzelnes Attribut (eine Kategorie) einstellen.", "Ist das Feld leer, wird die Kategorie übernommen, zu der sie gehört.", "Stellst du zum Beispiel bei einer Aktion, die zu einer Kategorie namens Dämonenschloss gehört, einzeln das Attribut Magie ein, werden für die Abschlusszeit und den Schaden der Aktion das Level und die Eigenschaften der Kategorie Magie berechnet und angewendet.", "Auch die Erfahrung bei Erfolg fließt in die im Attribut eingestellte Kategorie und nicht in die Kategorie, zu der sie gehört.", "Ist an der Aktion selbst keine Farbe eingestellt, übernehmen die Farben von Symbol und Hintergrund die Farbe der im Attribut eingestellten Kategorie und nicht die der Kategorie, zu der sie gehört."],
			links: { category: "category" },
		},
		group: {
			title: "Gruppe",
			summary: "Die Anzeigegruppen-Einteilung der Aktion",
			points: ["Wende eine von denen an, die in den Gruppen direkt unter der Welt definiert sind.", "Die Aktionsliste wird in der Reihenfolge der eingestellten Gruppen angezeigt."],
			links: { group: "group" },
		},
		unlocked: {
			title: "Anfänglicher Freischaltzustand",
			summary: "Der anfängliche Anzeige- und Freischaltzustand des Elements (bei erfüllten Auslösevoraussetzungen geht er automatisch in einen höheren Zustand über)",
			points: ["secreted: Es erscheint überhaupt nicht in der Oberfläche, bis alle requirements erfüllt sind (es taucht auch nicht in den Hinweisen auf und ist in den Listen der Voraussetzungen und Belohnungen maskiert).", "hidden: Solange kein freigeschaltetes Element darauf verweist und seine Voraussetzungen unerfüllt sind, ist es vollständig verborgen (auch der Name ist ausgegraut und nicht bedienbar).", "hinted (Standard): Nur der Name wird vorab angezeigt, bedienen lässt es sich aber erst nach dem Freischalten.", "released: Es ist unabhängig von den Bedingungen von Anfang an freigeschaltet und bedienbar (früher „von Anfang an anzeigen“)."],
		},
		level: {
			title: "Level",
			summary: "Das Schwierigkeitslevel der Aktion",
			points: ["Die Schwierigkeit der Aktion wird durch ein Level ausgedrückt.", "Bei der Ausführung wird es mit dem Level des Spielers verglichen und jede Eigenschaft berechnet.", "Der Vergleichspartner ist das Level der im Attribut eingestellten Kategorie.", "Führst du zum Beispiel eine Aktion aus, die höher liegt als dein eigenes Level, hat das Folgen wie eine sinkende Erfolgsrate.", "Solange die Bedingungen erfüllt sind, lässt sie sich auch ausführen, wenn das Level des Spielers kleiner ist als dieser Wert.", "Ist allerdings `actionLevelLimit` in den allgemeinen Einstellungen (die Levelgrenze der Aktionen) aktiviert, wird dieser Wert automatisch als Bedingung an das Level der Kategorie angehängt, sodass sie sich erst ausführen lässt, wenn das Level reicht. Bei Kategorien ohne Level wird er nicht angehängt."],
			links: { property: "property" },
		},
		requirements: { ...requirement, options: { ...requirement.options, array: true }, summary: "Die Bedingungen, die zur Ausführung der Aktion nötig sind" },
		seconds: {
			title: "Benötigte Zeit [Sekunden]",
			summary: "Die Standardzeit, die die Ausführung der Aktion braucht",
			points: ["Es ist die Standardzeit (in Sekunden), die für eine einmalige Ausführung der Aktion nötig ist.", "Beim Typ `stamina` ist es der Zeitabstand, den eine Runde braucht (die Ausdauer beider Seiten je einmal abtragen). Die Runden, die nach der Entscheidung die Ausdauer wiederherstellen, laufen im selben Abstand.", "Bei der tatsächlichen Ausführung schwankt sie durch die Berechnung der Eigenschaften."],
			links: { property: "property" },
		},
		experience: {
			title: "Erfahrung [100 für das nächste Level]",
			summary: "Die bei Erfolg der Aktion erhaltene Erfahrung",
			points: ["Es ist die Standarderfahrung, die du erhältst, wenn die Aktion einmal ausgeführt wird und gelingt. 100 ist die Erfahrung für ein Level.", "Beim Kampf erhältst du sie, wenn du den Gegner besiegst, deshalb ist es gut, sie großzügig einzustellen.", "Bei der tatsächlichen Ausführung schwankt sie durch die Berechnung der Eigenschaften."],
			links: { property: "property" },
		},
		chance: {
			title: "Erfolgsrate [0-1]",
			summary: "Die Erfolgswahrscheinlichkeit beim Abschluss der Aktion",
			points: ["Es ist die Wahrscheinlichkeit, beim Abschluss der Aktion Erfolg zu haben.", "Bei `1` gelingt sie immer, bei `0` misslingt sie immer.", "Auch bei einem Misserfolg werden die verbrauchten Gegenstände verbraucht, aber die Erfahrung und die Anzahl der Ausführungen steigen nicht.", "Von den Belohnungen erhältst du bei Erfolg nur die, deren Wahrscheinlichkeit (chance) auf einen positiven Wert gesetzt ist. Die mit einem negativen Wert erhältst du nur bei einem Misserfolg, deshalb heißt Misslingen nicht zwangsläufig, dass du nichts bekommst.", "Bei der tatsächlichen Ausführung schwankt sie durch die Berechnung der Eigenschaften."],
		},
		maximum: {
			title: "Maximale Anzahl der Ausführungen [Mal]",
			summary: "Die maximale Anzahl, wie oft die Aktion abgeschlossen werden kann",
			points: ["Es ist die Obergrenze dafür, wie oft die Aktion gelingen und abgeschlossen werden kann.", "Bei `0` ist sie unbegrenzt.", "Ist die Obergrenze erreicht, lässt sich die Aktion nicht mehr ausführen."],
		},
		acquisitions: { ...acquisition, options: { ...acquisition.options, array: true }, summary: "Die bei Erfolg der Aktion erhaltene Belohnung" },
		progressType: {
			title: "Fortschrittstyp",
			summary: "Der Ausführungstyp der Aktion",
			points: ["Es gibt vier Arten."],
			list: [
				["Typ", "Verhalten", "Ausdauer", "Beispiel"],
				["`persistent`", "Ein Typ, bei dem die Aktion dauerhaft und wiederholt ausgeführt wird. Mit jedem einzelnen Abschluss erhältst du Erfahrung und eine Belohnung.", "Kein Bezug", "Holzfällen, Bergbau, Angeln"],
				["`single`", "Führt die Aktion einmal aus. Wird sie mittendrin unterbrochen, wird der Fortschritt gespeichert und du kannst beim nächsten Mal an der Stelle weitermachen. Nach dem Abschluss drückt der Benutzer die Bestätigungsaktion und nimmt das Ergebnis entgegen.", "Kein Bezug", "Eine Schatztruhe knacken, eine Fähigkeit durch Lesen erlernen"],
				["`snap`", "Ein Typ, bei dem die Aktion augenblicklich ausgeführt wird. Sie ist ohne Zeitverlauf sofort abgeschlossen.", "Kein Bezug", "Tauschhandel, Verwendung eines Gegenstands"],
				["`stamina`", "Mit jeder benötigten Zeit sinkt die Ausdauer des Spielers und die des Gegners jeweils. Geht die Ausdauer des Gegners aus, erhältst du Erfahrung und eine Belohnung. Geht die Ausdauer des Spielers aus, ist das Spiel vorbei und alle laufenden Aktionen werden abgebrochen.", "Mit Bezug", "Kampf, Arbeit, die mit Gefahr verbunden ist"],
			],
		},
		property: combat,
		// スキルの実体ではなくワールド直下のskillsのID参照の一覧
		skills: { title: skill.title, summary: "Die Liste der Fähigkeiten, die die Gegenseite auslöst", points: ["Gib die Fähigkeiten, die der Gegner dieser Aktion auslöst, über die IDs der Fähigkeiten direkt unter der Welt an.", "Sie hat nur bei Aktionen vom Typ `stamina` eine Bedeutung.", "Jede Runde wird die Liste zufällig umsortiert und die Auslösewahrscheinlichkeit von oben her geprüft, und nur die erste, die zutrifft, wird ausgelöst. Trifft keine zu, bleibt diese Runde ohne Fähigkeit.", "Die Fähigkeiten der eigenen Seite sammeln sich nicht hier, sondern aus den Fähigkeiten, die an den Gegenständen eingestellt sind, die eine Wirkung entfalten (Gegenstände, die schon durch bloßen Besitz wirken und nicht ausgerüstet werden müssen, sowie ausgerüstete Notwendigkeiten und Verbrauchsgüter).", "IDs, die nicht existieren, werden ignoriert."], options: { label: "skill", array: true } },
	},
	options: {
		label: "action",
	},
};

export const category: Type.Category = {
	title: "Kategorie",
	summary: "Der grobe Rahmen, der Aktionen und Gegenstände einteilt",
	points: ["Sie steht für eine grobe Einteilung.", "Du kannst sie zum Beispiel als freien Rahmen einstellen: Nahkampf, Fernkampf, Magie, Verlies, Schmiede, Werkstatt und so weiter.", "Aktionen und Gegenstände werden direkt unter der Welt abgelegt und über die Kategorie-ID verknüpft."],
	children: {
		information: information,
		group: {
			title: "Gruppe",
			summary: "Die Anzeigegruppen-Einteilung der Kategorie",
			points: ["Wende eine von denen an, die in den Gruppen direkt unter der Welt definiert sind.", "Die Kategorieliste wird in der Reihenfolge der eingestellten Gruppen angezeigt."],
			links: { group: "group" },
		},
		unlocked: {
			title: "Anfänglicher Freischaltzustand",
			summary: "Der anfängliche Anzeige- und Freischaltzustand des Elements (bei erfüllten Auslösevoraussetzungen geht er automatisch in einen höheren Zustand über)",
			points: ["secreted: Es erscheint überhaupt nicht in der Oberfläche, bis alle requirements erfüllt sind (es taucht auch nicht in den Hinweisen auf und ist in den Listen der Voraussetzungen und Belohnungen maskiert).", "hidden: Solange kein freigeschaltetes Element darauf verweist und seine Voraussetzungen unerfüllt sind, ist es vollständig verborgen (auch der Name ist ausgegraut und nicht bedienbar).", "hinted (Standard): Nur der Name wird vorab angezeigt, bedienen lässt es sich aber erst nach dem Freischalten.", "released: Es ist unabhängig von den Bedingungen von Anfang an freigeschaltet und bedienbar (früher „von Anfang an anzeigen“)."],
		},
		requirements: { ...requirement, options: { ...requirement.options, array: true }, summary: "Die Bedingungen, die zur Nutzung der Kategorie nötig sind" },
		numeric: {
			title: "Vorhandensein eines Levels",
			summary: "Das Vorhandensein der Kategorielevel-Funktion",
			points: ["Es ist das Kennzeichen dafür, ob diese Kategorie ein Level besitzt.", "Ist es an, besitzt sie ein Level, ist es aus, besitzt sie keines.", "Als Beispiel gibt es die Verwendung, erfahrungsbasierte Kategorien wie Schwertkunst und Magie anzuschalten und Ortskategorien wie Verlies und Schmiede auszuschalten.", "Ist es aus, kommt keine Erfahrung herein, und in der Berechnung der Eigenschaften wird der Levelunterschied zwischen Spieler und Aktion als 0 behandelt. Die Korrektur der Eigenschaften durch die Ausrüstung wirkt unverändert weiter.", "Eine ausgeschaltete Kategorie wird auch von der Prüfung auf Abschluss (completed) ausgenommen."],
		},
		standaloneProgress: {
			title: "Gleichzeitiger Fortschritt",
			summary: "Die Einstellung für den parallelen Ablauf mit anderen Kategorien",
			points: ["Es ist das Kennzeichen dafür, ob die Aktionen dieser Kategorie parallel zu den Aktionen anderer Kategorien voranschreiten können.", "Ist es an, können sie unabhängig von den Aktionen anderer Kategorien gleichzeitig voranschreiten.", "Ist es aus, kann über alle ebenfalls auf Aus gestellten Kategorien hinweg nur eine einzige Aktion voranschreiten.", "Startest du in einer ausgeschalteten Kategorie eine neue Aktion, wird die laufende Aktion nicht abgebrochen, sondern an den Anfang der Warteschlange zurückgeschoben. Die verbleibende Anzahl der Ausführungen bleibt erhalten, und sobald die dazwischengeschobene Aktion beendet ist, geht sie an der Stelle weiter."],
		},
		background: {
			title: "Hintergrund",
			summary: "Die kategorieeigene Hintergrundeinstellung",
			points: ["Stellt den Hintergrund dieser Kategorie ein.", "Wird die Kategorie ausgewählt, wechselt das Hintergrundbild mit.", "Ist er nicht eingestellt, wird der Hintergrund des Designs unverändert verwendet.", "Beim Einlesen wird es automatisch auf höchstens 256×256 Pixel verkleinert."],
		},
	},
	options: {
		label: "category",
	},
};

export const type: Markdown = {
	title: "Typ",
	summary: "Die grundlegende Einteilung der Welt",
	points: ["Eine Welt besteht aus sechs Typen.", "Alle Elemente werden direkt unter der Welt abgelegt.", "Aktionen und Gegenstände werden über die ID der Kategorie verknüpft, zu der sie gehören.", "Nur die Ereignisse sind kein Typ: Sie werden nach Zeitpunkt gebündelt in den Ereignissen (events) direkt unter der Welt abgelegt."],
	list: expandList("Typ", [category, action, item, skill, group, preset], "Beschreibung"),
	quote: typeTree,
	options: {
		label: "type",
		linkedList: true,
	},
};

// basic

export const development: Type.Development = {
	title: "Entwicklung",
	summary: "Die Verwaltung der Notizen und Fehler bei der Entwicklung der Welt",
	points: ["Wird bei der Entwicklung der Welt verwendet.", "Es betrifft die Entwicklung und das Testen dieser Welt und hat keinen Einfluss auf den Spielinhalt.", "Der Spieler bekommt die Inhalte zur Entwicklung nie zu sehen."],
	children: {
		version: {
			title: "Version",
			summary: "Die Build-Versionsnummer des Editors",
			points: ["Die Versionsnummer des Editors zum Zeitpunkt der Erstellung der neuen Welt wird automatisch festgehalten.", "Sie wird nicht aktualisiert, auch wenn du eine bereits vorhandene Welt lädst und bearbeitest.", "Der Entwickler kann diesen Inhalt nicht ändern."],
		},
		memo: {
			title: "Notiz",
			summary: "Die Notizaufzeichnung für den Entwickler",
			points: ["Der Entwickler kann hier frei als Notiz hineinschreiben.", "Mit der Veröffentlichung des Spiels hat das nichts zu tun."],
		},
		errors: {
			title: "Fehler",
			summary: "Die Fehleraufzeichnung des Prüfergebnisses",
			points: ["Das Ergebnis der Prüfung der Welt wird hier automatisch gespeichert.", "Als Fehler zeigt es zum Beispiel an, dass es eine Zeichenart gibt, die sich nicht eingeben lässt, oder dass eine Zahl über der Obergrenze eingegeben wurde.", "Gab es nicht einen einzigen Fehler, wird stattdessen eine Meldung über den Erfolg gespeichert, nur eine Zeile lang.", "Der Entwickler kann diesen Inhalt nicht ändern.", "Solange Fehler übrig sind, lässt sich die Welt nicht veröffentlichen. Löst du die Veröffentlichung aus, läuft zuerst die Prüfung, und bei Fehlern bricht sie dort ab."],
		},
		timestamp: {
			title: "Zeitstempel",
			summary: "Die Aufzeichnung von Erstellung, Speicherung und Veröffentlichung",
			points: ["Die Zeitpunkte der Erstellung, der Speicherung und der Veröffentlichung der Welt werden automatisch festgehalten.", "Der Entwickler kann diesen Inhalt nicht ändern."],
			children: {
				created: {
					title: "Erstellungsdatum",
					summary: "Der Zeitpunkt der ersten Erstellung der Welt",
					points: ["Es ist das Datum mit Uhrzeit, an dem die Welt zuerst erstellt wurde."],
				},
				saved: {
					title: "Speicherdatum",
					summary: "Der Zeitpunkt der letzten ausgeführten Speicherung",
					points: ["Es ist das Datum mit Uhrzeit, an dem die Welt zuletzt gespeichert wurde."],
				},
				published: {
					title: "Veröffentlichungsdatum",
					summary: "Der Zeitpunkt der letzten ausgeführten Veröffentlichung",
					points: ["Es ist das Datum mit Uhrzeit, an dem die Welt zuletzt veröffentlicht wurde."],
				},
			},
		},
		autosaveing: {
			title: "Automatisches Speichern",
			summary: "Aktivierung/Deaktivierung der Funktion zum automatischen Speichern",
			points: ["Zeigt an, ob der Inhalt der Bearbeitung automatisch im Browser gespeichert wird.", "Dieses Feld lässt sich nicht direkt überschreiben. Du änderst es mit dem Umschalter für das automatische Speichern im Menü des Editors."],
		},
	},
	options: {
		label: "development",
	},
};

export const design: Type.Design = {
	title: "Design",
	summary: "Die Einstellungen zum Aussehen der Welt, etwa Farben und Schrift",
	points: ["Es sind die Einstellungen zur Darstellung der Welt.", "Die zwei hier festgelegten Farben (Leistenfarbe und Textfarbe) werden zur Grundlage des gesamten Bildschirms, und alle auf dem Bildschirm verwendeten Farben — die ausgewählte Zeile, die Überschrift einer Gruppe, die Farben für Ja und Nein und so weiter — entstehen daraus.", "Nur das Hintergrundbild lässt sich je Kategorie austauschen, und in dem Fall hat die Einstellung auf Seiten der Kategorie Vorrang."],
	children: {
		barColor: {
			title: "Leistenfarbe",
			summary: "Die Farbe, die zum Hintergrund der Leiste wird",
			points: ["Wird als Hintergrundfarbe der Leiste verwendet.", "Da sie zugleich die Farbe ist, die die Grundlage des gesamten Bildschirms bildet, entsteht auch die Farbe der ausgewählten Zeile aus dieser Farbe.", "Die Farbfelder von Elementen ohne eingestellte Farbe und der Hintergrund der Toast-Benachrichtigungen werden zur Mischfarbe zwischen dieser Farbe und der Textfarbe."],
		},
		textColor: {
			title: "Textfarbe",
			summary: "Die Farbe von Text und Hintergrund",
			points: ["Wird als Farbe des Textes verwendet.", "Auch der Verlauf des Hintergrunds entsteht aus dieser Farbe. Ist ein Hintergrundbild eingestellt, wird derselbe Verlauf aufgehellt und über das Bild gelegt.", "Ein großer Helligkeitsunterschied zur Leistenfarbe macht den Text besser lesbar. In Welten mit kleinem Unterschied lassen sich auch die Farbfelder von Elementen ohne eingestellte Farbe schlechter auseinanderhalten."],
		},
		shadowColor: {
			title: "Schattenfarbe",
			summary: "Die Farbe des Schattens der Leiste",
			points: ["Wird als Farbe des Schattens verwendet, der auf die Leisten und die Kopfzeile fällt.", "Wählst du sie dunkler als die Leistenfarbe, wird der Schatten natürlich."],
		},
		background: {
			title: "Hintergrundbild",
			summary: "Das Hintergrundbild des gesamten Spiels",
			points: ["Stellt das Hintergrundbild des Spiels ein.", "Ist kein Bild eingestellt, wird der Hintergrund zu einem Verlauf auf Basis der Textfarbe.", "Das Bild wird automatisch so verkleinert, dass es in 256×256 Pixel passt. GIF und AVIF werden in PNG umgewandelt.", "Ist bei einer Kategorie ein Hintergrundbild eingestellt, hat auf dem Bildschirm dieser Kategorie das Bild auf Seiten der Kategorie Vorrang.", "Das eingestellte Bild lässt sich mit der Schaltfläche Delete Image löschen."],
			links: { category: "category" },
		},
	},
	options: {
		label: "design",
	},
};

export const general: Type.General = {
	title: "Allgemein",
	summary: "Grundlegende Spieleinstellungen wie die Sprache und die Leveleinstellungen",
	children: {
		language: {
			title: "Sprache",
			summary: "Die Sprache, in der du die Welt erstellst",
			points: [
				"Legt fest, in welcher Sprache du Namen und Beschreibung der Welt schreibst. Es ist die Sprache, die beim Vorbereiten der Übersetzungen als Grundlage dient.",
				"Es ist zugleich die Sprache, die zuerst angezeigt wird, wenn ein Spieler das Spiel beginnt.",
				"Ist translations deaktiviert, kann der Spieler nicht von dieser Sprache auf eine andere wechseln.",
				"Das ist eine andere Einstellung als die Anzeigesprache des Welteditors selbst. Die Anzeigesprache des Editors wählst du beim Öffnen des Editors.",
			],
			links: { translation: "translation" },
		},
		translations: {
			title: "Übersetzung",
			summary: "Ob Übersetzungen für mehrere Sprachen vorbereitet werden",
			points: [
				"Ist es aktiviert, können Spieler auf die Sprache ihrer Wahl wechseln und darin spielen.",
				"Ist es deaktiviert, bleibt es auf der unter language gewählten Sprache festgelegt, und der Wechselvorgang selbst steht nicht zur Verfügung.",
				"Wenn du es aktivierst, musst du die Übersetzungsdaten jeder Sprache vorbereiten. Dem veröffentlichten Paket liegen die Übersetzungsdaten bei.",
				"Gewechselt werden die in der Welt definierten Namen und Beschreibungen. Die Übersetzungen der gemeinsamen Formulierungen des Bildschirms (der Voreinstellungen) liegen unabhängig von dieser Einstellung immer bei.",
			],
			links: { translation: "translation", preset: "preset" },
		},
		offlineMaxHours: {
			title: "Maximale Offlinezeit [Stunden]",
			summary: "Die zeitliche Begrenzung des Offline-Fortschritts",
			points: ["Legt fest, wie viele Stunden der Fortschritt während des Offlineseins höchstens läuft.", "Setzt du zum Beispiel 6 Stunden, wird die Rückkehr aus dem Offline bis zu 6 Stunden verarbeitet, und selbst wenn du nach einer längeren Abwesenheit zurückkehrst, gilt die Offlinezeit als 6 Stunden.", "Setzt du 0 Stunden, wird bei der Rückkehr aus dem Offline überhaupt nichts verarbeitet.", "Der Höchstwert beträgt 24 Stunden."],
			links: { category: "category" },
		},
		maxCategoryLevels: {
			title: "Maximales Level der Kategorien",
			summary: "Die Levelobergrenze jeder Kategorie",
			points: [
				"Legt die Obergrenze für das Level jeder Kategorie fest. Der Standardwert ist `100`.",
				"Auch wenn Erfahrung gewonnen wird, bleibt das Level bei diesem Wert stehen und der Überschuss wird verworfen. Dasselbe gilt, wenn eine Belohnung Level direkt hinzufügt.",
				"Liegt das Level in den Speicherdaten über der Obergrenze, wird es beim Laden auf die Obergrenze gestutzt.",
				"Die Levelleiste und die Fortschrittsquote in der Statistik werden mit diesem Wert als Nenner angezeigt.",
				"Eine Kategorie mit deaktiviertem numeric steigt nicht im Level, deshalb hat dieser Wert nichts mit ihr zu tun.",
			],
			links: { category: "category" },
		},
		coins: {
			title: "Währung",
			summary: "Die Einstellungen der im Spiel verwendeten Währung (coins)",
			points: [
				"Legt die im Spiel verwendete Währung fest. Mindestens eine ist nötig.",
				"Du kannst mehrere Währungen definieren und jede davon als Information (ID, Name, Symbol, Farbe und so weiter) einstellen.",
				"Währungen werden für den Kauf und Verkauf von Gegenständen sowie für die Erweiterung von Kapazität und Warteschlange verwendet.",
				"Die erste Währung gilt als Hauptwährung und wird verwendet, wenn bei einem Gegenstand, der Kapazität oder der Warteschlange keine Währungs-ID (`coinId`) angegeben ist oder eine ID angegeben wird, die nicht in der Währungsliste steht.",
				"Eine Währung gilt als eine Art Gegenstand. Beziehe dich in Bedingungen und Belohnungen auf die hier eingestellte ID wie auf einen Gegenstand. Sie gehört zu keiner Kategorie und ist weder Gegenstand von Ausrüstung noch von Handel.",
			],
			links: { information: "information", item: "item" },
		},
		capacity: {
			title: "Kapazität",
			summary: "Die Kapazitätseinstellungen des Inventars",
			points: [
				"Verwaltet die Obergrenze der Anzahl an Gegenstandsarten, die ein Spieler halten kann.",
				"Verwaltet wird über die Anzahl der gehaltenen Gegenstandsarten, nicht über die Besitzanzahl je Gegenstand.",
				"Setzt du `initialCount` auf 0, wird die Kapazität unbegrenzt, und auch der Kauf von Kapazität entfällt.",
				"Wenn du dich in Bedingungen oder Belohnungen auf den Gegenstand der Kapazität beziehst, verwende die hier eingestellte ID oder `capacity`.",
			],
			children: {
				information: { ...information, title: "Information der Kapazität", summary: "Die ID, der Name, das Symbol und die Farbe, um die Kapazität als Gegenstand zu behandeln" },
				initialCount: {
					title: "Anfangswert der Kapazität [Stück]",
					summary: "Die anfängliche Inventarkapazität (die Anzahl an Gegenstandsarten, die gehalten werden können)",
					points: ["Das ist die Anfangskapazität zum Spielstart (die Anzahl an Gegenstandsarten, die gehalten werden können). Der Standardwert ist `10`.", "Setzt du sie auf `0`, wird die Kapazität unbegrenzt, und zugleich entfällt der Kauf von Kapazität."],
				},
				initialCost: {
					title: "Grundpreis der Kapazität [Münzen]",
					summary: "Der Anfangspreis, um die Kapazität um eins zu erhöhen",
					points: ["Das ist der Grundpreis (in Münzen), um die Inventarkapazität um einen Platz zu erhöhen. Stelle ihn als ganze Zahl ab `1` ein.", "Der tatsächliche Preis wird als „Grundpreis × Steigerungsrate^Anzahl getätigter Käufe“ berechnet.", "Beispiel: Bei einem Grundpreis von 100 und einer Steigerungsrate von 1,2 kostet der erste Kauf 100 Münzen, der zweite 120 Münzen und der dritte 144 Münzen."],
				},
				increasingRate: {
					title: "Steigerungsrate der Kapazität [Faktor]",
					summary: "Die Steigerungsrate der Kosten für die Erweiterung der Kapazität",
					points: ["Das ist der Faktor dafür, wie stark die Kosten der Kapazitätserweiterung beim n-ten Kauf steigen. Der Standardwert ist `1.2`.", "Bei `1.0` bleibt der Preis immer gleich, bei `1.2` wird er mit jedem Kauf um 20 % teurer.", "Rechenformel: Grundpreis × Steigerungsrate^Anzahl getätigter Käufe"],
					list: [
						["Steigerungsrate", "1. Stück", "5. Stück", "10. Stück", "100. Stück", "1000. Stück"],
						["1.00", "x1.00", "x1.00", "x1.00", "x1.00", "x1.00"],
						["1.05", "x1.00", "x1.22", "x1.55", "x125.24", "x1.5×10²¹"],
						["1.10", "x1.00", "x1.46", "x2.36", "x1.3×10⁴", "x2.2×10⁴¹"],
						["1.20", "x1.00", "x2.07", "x5.16", "x6.9×10⁷", "x1.3×10⁷⁹"],
						["1.50", "x1.00", "x5.06", "x38.44", "x2.7×10¹⁷", "x8.2×10¹⁷⁵"],
					],
				},
				coinId: {
					title: "Währungs-ID der Kapazität",
					summary: "Die ID der Währung, die für die Erweiterung der Kapazität verwendet wird",
					points: ["Gibt die ID der Währung (coins) an, die für den Erweiterungspreis der Inventarkapazität verwendet wird.", "Bleibt sie leer oder gibst du eine ID an, die nicht in der Währungsliste steht, wird die Hauptwährung (die erste in coins) verwendet."],
				},
				buyingLimit: {
					title: "Kaufobergrenze der Kapazität [Mal]",
					summary: "Die maximale Anzahl an Malen, die Kapazität gekauft werden kann",
					points: ["Das ist die Obergrenze dafür, wie oft Kapazität mit einer Währung gekauft werden kann.", "Setzt du sie auf `0`, kann unbegrenzt gekauft werden.", "Setzt du sie auf `-1`, kann nicht mehr gekauft werden.", "Eine Erhöhung der Kapazität durch eine Belohnung fällt nicht unter diese Obergrenze."],
				},
			},
			links: { item: "item" },
		},
		queue: {
			title: "Warteschlange",
			summary: "Die Einstellungen der Anzahl an Plätzen für das aufeinanderfolgende Ausführen von Aktionen (die Warteschlange)",
			points: [
				"Verwaltet die Anzahl an Plätzen der Warteschlange für das aufeinanderfolgende Ausführen von Aktionen.",
				"Die Warteschlange schließt die gerade ausgeführte Aktion ein, und ausgeführt wird die Aktion an ihrer Spitze. Sind es `1` Platz, gibt es nur die gerade ausgeführte, und Wartende lassen sich nicht halten.",
				"Wie bei der Kapazität lässt sich die Anzahl an Plätzen mit einer Währung kaufen, und sie lässt sich auch erhöhen, indem du den Gegenstand der Warteschlange als Belohnung einer Aktion oder eines Ereignisses angibst.",
				"Wenn du dich in Bedingungen oder Belohnungen auf den Gegenstand der Warteschlange beziehst, verwende die hier eingestellte ID oder `queue`.",
			],
			children: {
				information: { ...information, title: "Information der Warteschlange", summary: "Die ID, der Name, das Symbol und die Farbe, um die Warteschlange als Gegenstand zu behandeln" },
				initialCount: {
					title: "Anfangswert der Warteschlange [Plätze]",
					summary: "Die Anzahl an Plätzen für das aufeinanderfolgende Ausführen zum Spielstart",
					points: ["Das ist die Anzahl an Plätzen der Warteschlange zum Spielstart. Der Standardwert ist `1`.", "Der Mindestwert ist `1` (weil die gerade ausgeführte Aktion einen Platz belegt; eine Behandlung von `0` = unbegrenzt wie bei der Kapazität gibt es nicht)."],
				},
				initialCost: {
					title: "Grundpreis der Warteschlange [Münzen]",
					summary: "Der Anfangspreis, um die Plätze um einen zu erhöhen",
					points: ["Das ist der Grundpreis (in Münzen), um die Plätze für das aufeinanderfolgende Ausführen um einen zu erhöhen. Stelle ihn als ganze Zahl ab `1` ein.", "Der tatsächliche Preis wird als „Grundpreis × Steigerungsrate^Anzahl getätigter Käufe“ berechnet.", "Beispiel: Bei einem Grundpreis von 100 und einer Steigerungsrate von 1,2 kostet der erste Kauf 100 Münzen, der zweite 120 Münzen und der dritte 144 Münzen."],
				},
				increasingRate: {
					title: "Steigerungsrate der Warteschlange [Faktor]",
					summary: "Die Steigerungsrate der Kosten für die Erweiterung der Plätze",
					points: ["Das ist der Faktor dafür, wie stark die Kosten der Platzerweiterung beim n-ten Kauf steigen. Der Standardwert ist `1.2`.", "Bei `1.0` bleibt der Preis immer gleich, bei `1.2` wird er mit jedem Kauf um 20 % teurer.", "Rechenformel: Grundpreis × Steigerungsrate^Anzahl getätigter Käufe", "Sie steigt auf dieselbe Weise wie die Steigerungsrate der Kapazität. Anhaltspunkte zum Faktor findest du in der Tabelle der Kapazität."],
				},
				coinId: {
					title: "Währungs-ID der Warteschlange",
					summary: "Die ID der Währung, die für die Erweiterung der Plätze verwendet wird",
					points: ["Gibt die ID der Währung (coins) an, die für den Erweiterungspreis der Plätze für das aufeinanderfolgende Ausführen verwendet wird.", "Bleibt sie leer oder gibst du eine ID an, die nicht in der Währungsliste steht, wird die Hauptwährung (die erste in coins) verwendet."],
				},
				buyingLimit: {
					title: "Kaufobergrenze der Warteschlange [Mal]",
					summary: "Die maximale Anzahl an Malen, die Plätze gekauft werden können",
					points: ["Das ist die Obergrenze dafür, wie oft die Plätze für das aufeinanderfolgende Ausführen mit einer Währung gekauft werden können.", "Setzt du sie auf `0`, kann unbegrenzt gekauft werden.", "Setzt du sie auf `-1`, kann nicht mehr gekauft werden.", "Eine Erhöhung der Plätze durch eine Belohnung fällt nicht unter diese Obergrenze."],
				},
			},
			links: { item: "item" },
		},
		levelCommonRatio: {
			title: "Steigerungsrate der Erfahrung [Faktor]",
			summary: "Die Steigerungsrate der Schwierigkeit des Levelaufstiegs",
			points: [
				"Das ist die Steigerungsrate der Erfahrung, die für das nächste Level nötig ist, während das Level einer Kategorie steigt. Der Standardwert ist `1.05`, ein Wert unter `1` lässt sich nicht einstellen.",
				"Ein größerer Wert erhöht die Schwierigkeit. Bei `1` bleibt die nötige Erfahrung auf jedem Level gleich.",
				"Die für das nächste Level nötige Erfahrung ist (Steigerungsrate der Erfahrung)^(aktuelles Level-1). Level werden mit abgeschnittenen Nachkommastellen gezählt.",
				"Erfahrung, die nach dem Erreichen der Obergrenze (des maximalen Levels der Kategorien) gewonnen wird, wird verworfen.",
			],
			list: [
				["Steigerungsrate der Erfahrung", "Lv.1", "Lv.2", "Lv.10", "Lv.50", "Lv.99"],
				["1.00", "x1.00", "x1.00", "x1.00", "x1.00", "x1.00"],
				["1.02", "x1.00", "x1.02", "x1.20", "x2.64", "x6.96"],
				["1.05", "x1.00", "x1.05", "x1.55", "x10.92", "x119.28"],
				["1.10", "x1.00", "x1.10", "x2.36", "x106.72", "x1.1×10⁴"],
				["1.20", "x1.00", "x1.20", "x5.16", "x7583.70", "x5.8×10⁷"],
			],
			links: { category: "category" },
		},
		actionLevelLimit: {
			title: "Levelbeschränkung der Aktionen",
			summary: "Für das Ausführen einer Aktion das Level der Kategorie des Attributs verlangen",
			points: [
				"Ist es aktiviert, wird an den Anfang der Bedingungen (requirements) jeder Aktion automatisch die Bedingung „das Level der Kategorie des Attributs liegt auf oder über dem Level dieser Aktion“ gesetzt.",
				"Ist kein Attribut (attribute) eingestellt, wird die Kategorie verwendet, zu der sie gehört.",
				"Ist bei der Kategorie des Attributs numeric deaktiviert, steigt sie nicht im Level, deshalb wird nichts hinzugefügt.",
				"Die hinzugefügte Bedingung wird beim Laden der Welt eingeschrieben, deshalb erscheint sie auf dem Bildschirm des Players wie eine gewöhnliche Bedingung.",
			],
			links: { action: "action", category: "category", requirement: "requirement" },
		},
		propertyRatio: {
			title: "Eigenschaftsfaktor [Faktor]",
			summary: "Auf das Wievielfache die Eigenschaften je 10 Levelunterschied steigen",
			points: [
				"Legt fest, auf das Wievielfache die Eigenschaften steigen, je `10`, um die sich der Unterschied zwischen dem Level der Kategorie und dem Level der Aktion vergrößert. Der Standardwert ist `1.5`, ein Wert unter `1` lässt sich nicht einstellen.",
				"Der Faktor wird als (Eigenschaftsfaktor)^(Levelunterschied÷10) berechnet. Bei einem Levelunterschied von `0` ist er `1`, und der an der Aktion eingestellte Wert wird unverändert verwendet.",
				"Angriff und Erfahrung steigen um diesen Faktor, Verteidigung (der erlittene Schaden) und Geschwindigkeit (die benötigte Zeit) sinken um denselben Faktor.",
				"Genauigkeit, Ausweichen, Erfolgsrate und Erholung sind Werte, die sich zwischen `0` und `100` % halten, deshalb wirkt der Faktor auf das Verhältnis zwischen dem Teil, der eintritt, und dem, der nicht eintritt. `0` % und `100` % ändern sich nicht, und kein Zwischenwert übersteigt `100` %.",
				"Bei Verteidigung, Ausweichen und Geschwindigkeit wirkt der Faktor zur Hälfte (ein Levelunterschied von `20` entspricht einem Levelunterschied von `10` bei den anderen Eigenschaften). Verteidigung und Ausweichen wirken doppelt, auf die Trefferquote und auf den erlittenen Schaden, und Geschwindigkeit wirkt als Anzahl der Ausführungen auf alle anderen Eigenschaften, deshalb ist ihre Wirkung zum Ausgleich abgeschwächt.",
				"Ein Anhaltspunkt ist (die Steigerungsrate der Erfahrung) hoch `6.7`. Darüber beschleunigt sich der Levelaufstieg, je höher das Level steigt, darunter dauert der Levelaufstieg in der späteren Phase länger.",
				"Bei `1` fällt der Einfluss des Levelunterschieds weg. Ein größerer Wert lässt Vor- und Nachteile durch den Levelunterschied schroffer ausfallen.",
			],
			list: [
				["Eigenschaftsfaktor", "Levelunterschied -20", "Levelunterschied -10", "Levelunterschied 0", "Levelunterschied +10", "Levelunterschied +20"],
				["`1`", "`x1.00`", "`x1.00`", "`x1.00`", "`x1.00`", "`x1.00`"],
				["`1.5`", "`x0.44`", "`x0.67`", "`x1.00`", "`x1.50`", "`x2.25`"],
				["`2`", "`x0.25`", "`x0.50`", "`x1.00`", "`x2.00`", "`x4.00`"],
				["`3`", "`x0.11`", "`x0.33`", "`x1.00`", "`x3.00`", "`x9.00`"],
			],
			links: { action: "action", property: "property" },
		},
		defaultCombat: { ...combat, summary: "Die für alle Aktionen gemeinsamen Standard-Kampfparameter", points: ["Das sind die grundlegenden Kampfkorrekturen auf Spielerseite, die gemeinsam für alle Aktionen vom Typ `stamina` gelten.", "Die Kampfwerte (property) jeder Aktion sind die Werte der Gegnerseite, deshalb wirken sie in die Richtung, die hier eingestellten Werte aufzuheben."], links: { action: "action" } },
	},
	options: {
		label: "general",
	},
};

export const overview: Type.Overview = {
	title: "Überblick",
	summary: "Die Grundangaben zur Welt und die Angaben zum Autor",
	points: ["Es sind die Felder, die den Inhalt der Welt erklären.", "Stelle sie so ein, dass sie verständlich sind, wenn ein Benutzer die Welt auswählt.", "Abgesehen von der URL haben diese Einstellungen keinen Einfluss auf den Spielverlauf."],
	children: {
		information: information,
		version: {
			title: "Version",
			summary: "Die Versionsnummer der Welt",
			points: ["Gib eine Zahl ab `0` ein (ganzzahlig oder mit Nachkommastellen). Der Standardwert ist `0`.", "Im Allgemeinen steht der ganzzahlige Teil für die Hauptversion und der Nachkommateil für die Nebenversion.", "Die Version der Entwicklung (development) ist die Version des Editors und damit etwas anderes."],
		},
		author: {
			title: "Name des Autors",
			summary: "Der Name des Autors der Welt",
			points: ["Gib einen Nutzernamen oder einen Spitznamen ein.", "Er muss 3 bis 20 Zeichen lang sein, und es lassen sich nur halbbreite Buchstaben und Ziffern, Leerzeichen sowie `!` `?` `.` `,` `-` verwenden."],
		},
		homepage: {
			title: "Homepage",
			summary: "Die URL der Website des Autors",
			points: ["Wenn du eine eigene Homepage oder soziale Netzwerke hast, gib deren URL ein.", "Der Spieler kann diese URL über den Link einsehen.", "Trifft nichts zu, lass das Feld leer. Der Anfangswert ist `https://`."],
		},
		url: {
			title: "URL",
			summary: "Die URL des Spiels",
			points: ["Gib die URL ein, unter der das Spiel dieser Welt abgelegt wird.", "Gib die URL einer Startseite wie index.html samt Domain ein.", "Es ist ein Feld, um festzuhalten, wo die Welt abgelegt wurde. Steht der Ablageort noch nicht fest, lass das Feld leer.", "Eine veröffentlichte Welt läuft als PWA. Eine PWA ist eine Funktion, mit der sie sich installieren lässt und wie eine App läuft, die sich auch offline spielen lässt.", "Die Einstellungen der PWA werden mit relativen Pfaden erzeugt, deshalb läuft sie unabhängig vom Wert dieses Feldes an ihrem Ablageort unverändert."],
		},
		estimatedPlayingTime: {
			title: "Geschätzte Spielzeit",
			summary: "Die Richtzeit bis zum Durchspielen der Welt",
			points: ["Es ist die geschätzte Spielzeit, die nötig ist, um die Welt zu Ende zu spielen.", "Sie lässt sich als Anhaltspunkt einsehen, wenn der Spieler spielt.", "Es ist lediglich eine Richtzeit, und es gibt keine klare Festlegung, was als Abschluss der Welt gilt."],
			children: {
				value: {
					title: "Wert",
					summary: "Die Zahl der Spielzeit",
					points: ["Wird als ganze Zahl ab `1` eingestellt. Der Standardwert ist `1`."],
				},
				unit: {
					title: "Einheit",
					summary: "Die Zeiteinheit (Stunden, Minuten und so weiter)",
					points: ["Wird aus Sekunden, Minuten, Stunden, Tagen, Jahren, Jahrhunderten und Unendlich ausgewählt. Der Standardwert ist Tage.", "Unendlich wird für Welten ohne Ende verwendet."],
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
			title: "Kategorie",
			summary: "Wird in einem Ereignis nicht verwendet",
			points: ["In den Missionen und in der Aufgabenliste erscheinen sie nicht, daher wird die Kategorie, zu der sie gehören, nicht angegeben.", "Im Editor wird das Eingabefeld nicht angezeigt."],
		},
		timing: {
			title: "Zeitpunkt",
			summary: "Der Zeitpunkt, zu dem das Ereignis ausgelöst wird (fest)",
			points: timingPoints,
		},
		unlocked: {
			title: "Anfänglicher Anzeigezustand",
			summary: "Der anfängliche Anzeigezustand des Ereignissymbols (das Auslösen entscheidet der Zeitpunkt, und diese Einstellung löst es nicht aus)",
			points: ["Die Bedingungen für das Auslösen eines Ereignisses entscheidet der Zeitpunkt, und dieses Feld wirkt sich nur auf das Aussehen des Symbols aus.", "secreted: Das Symbol wird nicht angezeigt, bis alle requirements erfüllt sind (das Auslösen selbst geschieht zu seinem Zeitpunkt).", "hidden und hinted: Das Symbol wird durchgestrichen als noch nicht freigeschaltet angezeigt.", "released: Der Strich verschwindet, und es wird als bereits freigeschaltet angezeigt."],
		},
		requirements: { ...requirement, options: { ...requirement.options, array: true }, summary: "Die Bedingungen für den Erhalt der Belohnung" },
		acquisitions: { ...acquisition, options: { ...acquisition.options, array: true }, summary: "Die Belohnung, die beim Auslösen des Ereignisses automatisch abgeholt wird" },
		group: {
			title: "Aufgabengruppe",
			summary: "Wird in einem Ereignis nicht verwendet",
			points: ["In den Missionen und in der Aufgabenliste erscheinen sie nicht, daher wird die Gruppe nicht angegeben.", "Im Editor wird das Eingabefeld nicht angezeigt."],
		},
	}, title),
});

export const unique: Type.Unique = {
	title: "Festes Ereignis",
	summary: "Die Nachrichten und Belohnungen, die zu festgelegten Zeitpunkten auslösen",
	points: ["Es löst zu festgelegten Zeitpunkten aus, etwa beim ersten Öffnen der Welt oder bei Spielende, und öffnet einen eigenen Bildschirm.", "Für jeden Zeitpunkt ist genau eines vorbereitet, hinzufügen und löschen lässt sich keines. Zeitpunkte, die du nicht nutzt, lässt du leer.", "In den Missionen und in der Aufgabenliste erscheinen sie nicht. Was bei erfüllten Bedingungen als erreicht gilt, stellst du mit einer Aufgabe ein.", "Tritt der Zeitpunkt ein, löst das Ereignis aus und öffnet einen eigenen Bildschirm, um seinen Inhalt zu zeigen.", "Die Belohnung wird zugleich mit dem Auslösen automatisch erhalten. Es gibt weder einen Abholvorgang noch ein Band wie bei einer Aufgabe, und auch die Obergrenze der Gegenstandsarten, die gehalten werden können, wird nicht geprüft.", "Sind Bedingungen (requirements) eingestellt, wird die Belohnung nur dann erhalten, wenn diese Bedingungen beim Auslösen erfüllt waren. Sind keine eingestellt, wird sie bei jedem Auslösen erhalten.", "Die Bedingungen werden nur daraufhin angesehen, ob sie erfüllt sind, deshalb nehmen Gegenstände auch bei eingestellter Verbrauchswahrscheinlichkeit (chance) nicht ab.", "Beim Auslösen kannst du das Level einer Kategorie, die Anzahl der Ausführungen einer Aktion und die Besitzanzahl von Gegenständen verändern. Mit einer negativen Menge lässt es sich auch so nutzen, dass bei Spielende der Besitz verloren geht.", "Lässt du Name, Beschreibung und Symbol leer, werden der im Player eingebaute Standardtext und das Standardsymbol verwendet."],
	list: [
		["Zeitpunkt", "Auslösebedingung", "Wiederholung"],
		["`comebacked`", "Wenn du nach 1 Sekunde oder mehr offline zurückkehrst und während deiner Abwesenheit mindestens eine Aktion abgeschlossen wurde", "Beliebig oft"],
		["`gameovered`", "Wenn die Ausdauer des Spielers im Kampf ausgeht", "Beliebig oft"],
		["`welcomed`", "Wenn diese Welt zum ersten Mal gestartet wird", "Nur einmal"],
		["`completed`", "Wenn das Level aller Kategorien den Höchstwert (maxCategoryLevels) erreicht", "Nur einmal"],
		["`obtained`", "Wenn eine Aktion der Art single (etwa eine Schatztruhe) abgeschlossen und angesehen wird", "Beliebig oft"],
	],
	links: { task: "task" },
	children: {
		comebacked: toUniqueEvent("Bei der Rückkehr", "Löst bei der Rückkehr aus dem Offline aus", ["Es löst aus, wenn du nach 1 Sekunde oder mehr offline zurückkehrst und während deiner Abwesenheit mindestens eine Aktion abgeschlossen wurde. Ist nicht eine einzige Ausführung fertig geworden, löst es nicht aus.", "Es wird zusammen mit der Zusammenfassung des Fortschritts während deiner Abwesenheit angezeigt."], ["Es ist auf `comebacked` festgelegt und lässt sich nicht bearbeiten.", "Es löst beliebig oft aus, bei jeder Rückkehr."]),
		gameovered: toUniqueEvent("Bei Spielende", "Löst aus, wenn die Ausdauer im Kampf ausgeht", ["Es löst aus, wenn die Ausdauer des Spielers im Kampf ausgeht.", "Zugleich halten alle gerade ausgeführten Aktionen an, und alle wartenden Vormerkungen werden verworfen.", "Mit einer negativen Menge bei der Belohnung kannst du dem Spielende einen Preis geben."], ["Es ist auf `gameovered` festgelegt und lässt sich nicht bearbeiten.", "Es löst beliebig oft aus, bei jedem Spielende."]),
		welcomed: toUniqueEvent("Beim ersten Start", "Löst beim ersten Öffnen der Welt aus", ["Es löst aus, wenn diese Welt zum ersten Mal gestartet wird.", "Es dient dazu, das Setting der Welt zu erklären und die zu Beginn übergebene Ausstattung zu überreichen."], ["Es ist auf `welcomed` festgelegt und lässt sich nicht bearbeiten.", "Es löst nur ein einziges Mal aus, beim ersten Start."]),
		completed: toUniqueEvent("Beim Abschluss", "Löst aus, wenn alle Kategorien das maximale Level erreichen", ["Es löst aus, wenn das Level aller Kategorien den Höchstwert (maxCategoryLevels) erreicht.", "Kategorien, die nicht numeric sind, werden von der Prüfung ausgenommen. Deshalb löst es in einer Welt ohne eine einzige numerische Kategorie nicht aus."], ["Es ist auf `completed` festgelegt und lässt sich nicht bearbeiten.", "Es löst nur ein einziges Mal aus, wenn die Bedingungen erfüllt sind."]),
		obtained: toUniqueEvent("Beim Abschluss einer einzelnen Aktion", "Löst beim Abschluss einer einzelnen Aktion wie einer Schatztruhe aus", ["Es löst aus, wenn eine Aktion der Art single (etwa eine Schatztruhe) abgeschlossen und angesehen wird.", "Unabhängig von der Belohnung der Aktion selbst kannst du die hier eingestellte Belohnung obendrauf geben."], ["Es ist auf `obtained` festgelegt und lässt sich nicht bearbeiten.", "Es löst beliebig oft aus, bei jedem Abschluss einer einzelnen Aktion."]),
	},
	options: {
		label: "unique",
	},
};

// タスク・変化イベント・固定イベントをまとめたイベント全体
export const events: Type.Events = {
	title: "Ereignis",
	summary: "Die gesamten Ereignisse der Welt, die Aufgaben, Änderungsereignisse und feste Ereignisse zusammenfassen",
	points: ["Die Ereignisse einer Welt bestehen aus drei Arten: Aufgaben (tasks), Änderungsereignissen (changed) und festen Ereignissen (unique).", "Eine Aufgabe ist eine Mission, die bei erfüllten Bedingungen als erreicht gilt.", "Ein Änderungsereignis ist ein Ereignis für die interne Verarbeitung, das nicht auf dem Bildschirm erscheint und durch den Zuwachs einer Menge ausgelöst immer wieder auslöst.", "Ein festes Ereignis ist ein Platz, der je Zeitpunkt einmal vorbereitet ist und sich weder hinzufügen noch löschen lässt."],
	list: expandList("Art", [task, changed, unique], "Beschreibung"),
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
	title: "Grundeinstellungen",
	summary: "Die grundlegenden Einstellungsfelder der Welt insgesamt",
	points: ["Stellt Name, Beschreibung, Hintergrund, Währung, Kapazität, maximales Level der Kategorien, Steigerungsrate der Erfahrung, Standard-Kampfparameter und dergleichen der Welt ein.", "Diese Einstellungen wirken sich auf die ganze Welt aus."],
	list: expandList("Bezeichnung", [overview, general, design, development], "Beschreibung"),
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
	title: "Welt",
	summary: "Die Einstellungen und die Datenstruktur der gesamten Spielwelt",
	points: ["Das sind die Definitionsdaten des Spiels, die im Player geladen und gespielt werden.", "Mit den Einstellungen lässt sich das Idle-Spiel erstellen, das dir vorschwebt.", "Eine Welt enthält die Grundeinstellungen, die sechs Typen Kategorie, Aktion, Gegenstand, Fähigkeit, Gruppe und Voreinstellung sowie die Ereignisse."],
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
	title: "Editor",
	summary: "Die Erläuterung zur Bedienung des Editors und zum Aufbau einer Welt",
	list: expandList("Bezeichnung", [world, basic, type, events, component, miscellaneous], "Beschreibung"),
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
