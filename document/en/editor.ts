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
	title: "Translation",
	summary: "Settings for translating the text of a world into ten languages",
	points: [
		"There are two kinds of translation: the translation of the common phrases of the interface (presets), and the translation of the names and explanations the world itself holds.",
		"The translation of the common phrases is always bundled regardless of the `translations` setting in general. The author does not need to prepare it.",
		"The translation of the world itself is exported only when `translations` in general is enabled and the world is published, and the author translates it.",
		"In a language for which no translation is prepared, the text is shown exactly as it is written in the world.",
	],
	links: { general: "general" },
	options: {
		label: "translation",
	},
	children: {
		flag: {
			title: "Enabling Translation",
			summary: "What happens when translation is enabled",
			points: [
				"What you enable is `translations` in general. This section explains what happens when you enable it.",
				"When it is enabled, translation files for ten languages are bundled with the published world, and the language can be switched from the settings of the player. When it is disabled, the language cannot be switched at all.",
				"The ten files are exported with the same content (the text before translation). A language you did not translate shows the original text as it is. You can translate only some of the languages, but the original text will be mixed into the screens of those languages.",
				"When the game starts, the language set in `language` in general is shown first. After that, it can be changed to any language from the settings column.",
				"In the test play of the editor, the translation files of the world do not exist yet, so switching the language changes only the common phrases of the interface.",
				"Translation work is tedious, but it lets many more people play your game.",
			],
			links: { general: "general" },
		},
		file: {
			title: "Language Files",
			summary: "The JSON files exported for translation",
			points: [
				"When you export a world with Publish in the menu, `translations/base` holds the translation of the common phrases and `translations/world` holds the translation of the world itself.",
				"The only files you translate are the ten in `translations/world`. `translations/base` is bundled already translated, so you do not need to touch it.",
				"The content of a file is divided by type, with the IDs of the elements below that, and the name (`name`) and the explanation (`explanation`) below those.",
				"There are seven types: category, action, item, event, group, skill, and preset. Currency, capacity, and the queue go into items, the overview of the world goes into presets, and tasks and fixed events go together into events.",
				"An element whose name was left blank is exported with a name generated automatically from its ID.",
				"Put the translated files back into `translations/world` under the same names.",
			],
		},
		task: {
			title: "Translation Work",
			summary: "Editing the translation data",
			points: [
				"The ten exported files all have the same content (the text before translation).",
				"Every file except the one for the original language needs to be translated.",
				"Translate only the values of `name` and `explanation`. Do not change the IDs or the structure of the JSON.",
			],
			children: {
				ai: {
					title: "AI",
					summary: "Translation using AI",
					points: ["Translate using an AI such as ChatGPT, Copilot, or Claude.", "It can translate everything in one go, with a reasonable level of quality.", "The translation may not be complete, and technical terms and proper nouns in particular need attention.", "Depending on the volume, using an AI may cost money.", "If the AI stops partway through the translation, telling it to \"continue\" sometimes gets it moving again. (Sometimes it does not.)"],
					children: {
						prompt: {
							title: "Prompt Example",
							summary: "An example of the translation instruction given to an AI",
							points: ["Example prompt: Translate the values of `name` and `explanation` in the uploaded JSON data from Japanese into English. Do not change the keys or any other part."],
						},
						gpt: {
							title: "Using GPTs",
							summary: "Translation using a GPT of ChatGPT",
							points: ["The JSON Language Translator provided in the GPT library of ChatGPT makes translating JSON easy.", "The structure of the JSON is preserved through the translation.", "AI services other than ChatGPT sometimes provide the same kind of function."],
						},
					},
				},
				online: {
					title: "Translation Services",
					summary: "Using a translation service",
					points: ["Translate using an online service such as DeepL or Google Translate.", "Higher quality than AI translation can be expected, but depending on the volume there is a charge.", "A JSON file cannot be translated by a translation service as it is, so you need to write a program to use one.", "There also seem to be paid services that translate JSON data as it is (doctranslator.com and others)."],
				},
				manual: {
					title: "Manual",
					summary: "Translating by hand",
					points: ["Open the translation file in a text editor and type in the content translated into each language. It takes a great deal of effort, but you can translate exactly as you intend."],
				},
			},
		},
		code: {
			title: "Language Codes",
			summary: "The list of supported language codes",
			points: ["The name of a translation file is this language code.", "These ten languages are supported, and they cannot be increased or decreased."],
			list: [
				["Language Code", "Language"],
				["en", "English"],
				["zh", "Chinese (Simplified)"],
				["es", "Spanish"],
				["pt", "Portuguese"],
				["fr", "French"],
				["ru", "Russian"],
				["de", "German"],
				["ja", "Japanese"],
				["id", "Indonesian"],
				["ko", "Korean"],
			],
		},
	},
};

export const miscellaneous: Markdown = {
	title: "Miscellaneous",
	summary: "Explanations about the work of making a world, not about the fields of a world themselves",
	points: ["This gathers what does not fit into the list of setting fields."],
	list: expandList("Note", [translation], "Description"),
	options: {
		label: "miscellaneous",
		linkedList: true,
	},
};

// componsnt

export const property: Type.Property = {
	title: "Property",
	summary: "The settings for the effects an item has",
	points: ["These are the effect fields you can set on an item.", "An item whose equipment type is `necessary` or `consumable` applies its effect only while it is equipped. `unnecessary` applies its effect just by being owned, and the size of the effect is proportional to the number owned (twice as much if you own two).", "Because the number owned is itself the multiplier of an `unnecessary` effect, `maximum` (the maximum number owned) becomes the ceiling of the effect. When you balance it, set it together with `maximum`.", "The value of every field is calculated as something that adjusts the level gap between the level of the player and the level of the action.", "For example, when the attack value is 10, the attack is calculated as if the level of the player were 10 higher than the level of the action. A negative value works the other way around.", "How much the level gap matters is decided by `propertyRatio` in general (2 by default), and it changes by that multiplier for every 10 of level gap.", "When `numeric` of the category is disabled, the real level gap is treated as 0, so the value you set here becomes the level gap as it is.", "A field that works by division, such as the required time and the damage taken, tops out at 100 times (down to one hundredth for the required time).", "For an item that has to be equipped, only the one equipped in each equipment group takes effect.", "An item whose owned count is 0 produces no effect, whatever its equipment type.", "attack, defence, accuracy, evasion, and restore work only on actions of the `stamina` type."],
	list: [
		["Property", "Details of the effect"],
		["speed", "Shortens the required time of the action. The required time changes in inverse proportion to the level gap (the multiplier works at half strength)."],
		["chance", "Changes the success chance of the action. The multiplier applies to the ratio of success to failure, so it never goes over `100`%."],
		["experience", "Changes the experience gained. It increases in proportion to the level gap (the calculation is reversed: the higher the level of the action, the more you get)."],
		["attack", "Changes the stamina damage dealt to the opponent. (stamina actions only)"],
		["defence", "Reduces the stamina damage taken from the opponent (the multiplier works at half strength). (stamina actions only)"],
		["accuracy", "Lowers the miss rate of the attack. (stamina actions only)"],
		["evasion", "Changes the rate of evading the attack of the opponent (the multiplier works at half strength). (stamina actions only)"],
		["restore", "Changes the amount of stamina recovered when the action ends. The closer it gets to full, the more slowly it grows. (stamina actions only)"],
	],
	children: {
		category: {
			title: "Category",
			summary: "Which category the property applies to",
			points: ["Set the ID of the category this property applies to.", "Setting `*` applies it to every category.", "When it is left blank, it applies to the category the item belongs to.", "Setting the ID of another category makes the effect reach the actions of that category. It does not matter which category the item itself is in."],
		},
		attack: {
			title: "Attack [Level Gap]",
			summary: "The correction to the stamina damage dealt to the opponent (works on stamina actions only)",
			points: ["The attack damage is calculated as if the level of the player were higher than the level of the action by this value."],
		},
		defence: {
			title: "Defence [Level Gap]",
			summary: "The correction to the stamina damage taken from the opponent (works on stamina actions only)",
			points: ["The damage taken is calculated as if the level of the player were higher than the level of the action by this value. The higher the value, the more the damage taken is reduced."],
		},
		accuracy: {
			title: "Accuracy [Level Gap]",
			summary: "The correction to the miss rate of the attack (works on stamina actions only)",
			points: ["The miss rate is calculated as if the level of the player were higher than the level of the action by this value. The higher the value, the lower the miss rate."],
		},
		evasion: {
			title: "Evasion [Level Gap]",
			summary: "The correction to the rate of evading the attack of the opponent (works on stamina actions only)",
			points: ["The evasion rate is calculated as if the level of the player were higher than the level of the action by this value. The higher the value, the easier it is to evade the attack of the opponent."],
		},
		restore: {
			title: "Recovery [Level Gap]",
			summary: "The correction to the amount of stamina recovered (works on stamina actions only)",
			points: ["The amount of stamina recovered is calculated as if the level of the player were higher than the level of the action by this value."],
		},
		speed: {
			title: "Speed [Level Gap]",
			summary: "The correction to the required time of the action",
			points: ["The required time is calculated as if the level of the player were higher than the level of the action by this value. The higher the value, the more the required time is shortened."],
		},
		chance: {
			title: "Success Rate [Level Gap]",
			summary: "The correction to the success chance of the action",
			points: ["The success chance of the action is calculated as if the level of the player were higher than the level of the action by this value. The higher the value, the more the success chance rises."],
		},
		experience: {
			title: "Experience [Level Gap]",
			summary: "The correction to the experience gained",
			points: ["The experience is calculated as if the level of the player were lower than the level of the action by this value (because the calculation is reversed, the higher the level of the action, the more experience you get)."],
		},
	},
	options: {
		label: "property",
	},
};

export const combat: Type.Combat = {
	title: "Combat Values",
	summary: "The settings for the combat corrections on actions of the stamina type",
	points: ["These are corrections that work only on actions of the `stamina` type.", "Each value is calculated as an extra correction to the level gap between the player and the action.", "For example, when the attack value is 10, the attack damage is calculated as if the level of the player were 10 higher than the level of the action. A negative value is a correction in the opposite direction.", "Depending on where you set it, the value belongs either to the player side or to the opponent side.", "A value on the opponent side works so as to cancel out the field opposite to it. The defence of the opponent cancels out the attack of the player, the attack of the opponent cancels out the defence of the player, the evasion of the opponent cancels out the accuracy of the player, and the accuracy of the opponent cancels out the evasion of the player.", "Recovery alone cancels out against the same field, and the higher the recovery of the opponent, the less the player recovers."],
	list: [
		["Where it is set", "Which side the value belongs to"],
		["`defaultCombat` in general", "The baseline on the player side. It is the starting point shared by every `stamina` action"],
		["The combat values of the action", "Values on the opponent side. Seen from the player they work as corrections in the opposite direction"],
		["The combat values of the skill", "Values for the side that has the skill. The skills of your own side are added to the player, and the skills of the opponent to the opponent side"],
	],
	children: {
		attack: {
			title: "Attack [Level Gap]",
			summary: "The level gap correction to the stamina damage dealt to the opponent",
			points: ["The higher the value on the player side, the more damage is dealt to the opponent.", "A value set on an action or on a skill of the opponent becomes the attack of the opponent side, and the higher it is, the more damage the player takes."],
		},
		defence: {
			title: "Defence [Level Gap]",
			summary: "The level gap correction to the stamina damage taken from the opponent",
			points: ["The higher the value on the player side, the more the damage taken is reduced.", "A value set on an action or on a skill of the opponent becomes the defence of the opponent side, and the higher it is, the less damage the player deals."],
		},
		accuracy: {
			title: "Accuracy [Level Gap]",
			summary: "The level gap correction to the miss rate of the attack",
			points: ["The higher the value on the player side, the lower the miss rate of the attack.", "A value set on an action or on a skill of the opponent becomes the accuracy of the opponent side, and the higher it is, the harder it is for the player to evade the attack of the opponent."],
		},
		evasion: {
			title: "Evasion [Level Gap]",
			summary: "The level gap correction to the rate of evading the attack of the opponent",
			points: ["The higher the value on the player side, the easier it is to evade the attack of the opponent.", "A value set on an action or on a skill of the opponent becomes the evasion of the opponent side, and the higher it is, the harder it is for the attack of the player to land."],
		},
		restore: {
			title: "Recovery [Level Gap]",
			summary: "The level gap correction to the amount of stamina recovered",
			points: ["The higher the value on the player side, the more stamina is recovered after the battle.", "A value set on an action or on a skill of the opponent becomes the recovery of the opponent side, and the higher it is, the less the player recovers.", "Recovery alone, unlike the other fields, cancels out against the same field."],
		},
	},
	options: {
		label: "combat",
	},
};

export const acquisition: Type.Acquisition = {
	title: "Acquisition",
	summary: "The settings for gaining items and category levels",
	points: ["Set what is gained.", "Besides items, you can change the level of a category and the number of times an action has been performed.", "You can set the chance of gaining it."],
	list: [
		["Type", "What is gained"],
		["Category", "Level"],
		["Action", "The number of times performed"],
		["Item", "The number owned"],
	],
	children: {
		type: {
			title: "Type",
			summary: "The kind of element that is gained",
			list: [
				["Type", "What is gained"],
				["Category", "Level (the value you set is added as it is)"],
				["Action", "The number of times performed"],
				["Item", "The number owned"],
			],
		},
		id: {
			title: "The ID of the element",
			summary: "The ID that identifies the element to gain",
		},
		count: {
			title: "Value",
			summary: "The number that is gained",
			points: ["Setting a negative value decreases the number owned, the number of times performed, or the level. It never goes below 0, though.", "When a maximum owned count (maximum) is set on the item, the number owned does not grow beyond that value.", "When the type is a category, the value you set is added to the level as it is (1 for one level). The usual way is to adjust it with the experience setting of the action. Unless you have a special purpose, this setting is not needed.", "The level of a category never goes below 0, and it never goes over `maxCategoryLevels` in general (the maximum level of a category).", "Set the value as an integer."],
		},
		chance: {
			title: "Chance [-1 to 1]",
			summary: "The chance that the gain succeeds (a negative value is evaluated only on failure)",
			points: ["Set the chance of gaining it as a decimal from -1 to 1. The absolute value is used to judge the chance.", "When the value is positive it is evaluated only when the action succeeds: `1` always gains it, and `0.5` gains it with a 50% chance.", "When the value is negative it is evaluated only when the action fails: `-1` always gains it, and `-0.5` gains it with a 50% chance.", "With `0` it is gained neither on success nor on failure.", "The default value is `1` (always gained on success)."],
		},
	},
	links: { type: "type" },
	options: {
		label: "acquisition",
	},
};

export const requirement: Type.Requirement = {
	title: "Requirement",
	summary: "The settings for the conditions needed to use or show an element",
	points: ["These are the conditions you set on each element: a category, an action, an item, and an event.", "Unless every condition you set is met, the operation shown in the table cannot be done.", "Depending on the unlock setting (unlocked) of the element, the element itself is not shown on the screen until the conditions are met."],
	list: [
		["Where it is set", "What cannot be done unless the conditions are met"],
		["Category", "Performing every action in the category, and operating its items"],
		["Action", "Performing the action"],
		["Item", "Operating the item (equipping and so on)"],
		["Event", "Achieving a task, and triggering a changed event or a fixed event"],
	],
	children: {
		type: {
			title: "Type",
			summary: "The kind of element referred to as the condition",
			list: [
				["Type", "The value that is referred to"],
				["Category", "The level of the category"],
				["Action", "The number of times the action has been performed"],
				["Item", "The number of the item owned"],
			],
		},
		id: {
			title: "The ID of the element",
			summary: "The ID of the element referred to as the condition",
			points: ["Set the ID of the category, action, or item referred to as the condition.", "When group totalling (requiringGroup) is enabled on an event, it is treated as the ID of a group rather than of an individual element."],
		},
		count: {
			title: "Value",
			summary: "The number the condition needs",
			points: ["The condition is met when it is at or above the value you specify.", "Set it as an integer of 0 or more. The default value is `1`."],
		},
		chance: {
			title: "Consumption Chance [0-1]",
			summary: "The chance that the item is consumed (0 to 1, works only when the type is an item)",
			points: ["This is the chance of consuming the item when the conditions are met and the action is performed.", "`1` always consumes it, `0.5` consumes it with a 50% chance, and `0` does not consume it.", "The default value is `1` (always consumed). On the conditions of an event (a task, a changed event, or a fixed event), however, the default value is `0` (not consumed) so that what you hold does not decrease when you achieve it.", "With `0` the stock is not reduced, so you can perform the action as many times as you like as long as the number owned reaches the value of the condition. Use it when you want the condition to be only that the item is equipped.", "It does not work when the type is anything other than an item."],
		},
		equipment: {
			title: "Equipment",
			summary: "Whether the item has to be equipped for the condition (works only when the type is an item)",
			points: ["When it is enabled, the condition needs the item not only to be owned but also to be equipped.", "Whether it is equipped is judged by the equipment of the category the item belongs to.", "It does not work when the type is anything other than an item."],
		},
	},
	links: { type: "type" },
	options: {
		label: "requirement",
	},
};

export const information: Type.Information = {
	title: "Information",
	summary: "The settings for the basic information of an element (ID, name, explanation, icon, and colour)",
	points: ["These are the basic information fields shared by every element in a world (a category, an action, an item, a group, an event, a skill, and a preset).", "You set them individually for each element."],
	children: {
		id: {
			title: "Identifier",
			summary: "The unique ID that identifies the element",
			points: ["This is the ID that identifies each element uniquely.", "It is the string that tells the element apart in the editor.", "For example, which item is gained when an action completes is specified by ID.", "The characters you can use are a combination of letters, hyphens, and digits, from 1 to 100 characters."],
			important: "Once you have distributed the game, do not change an ID you have set. If you change it, it no longer matches the existing game data and the game stops working properly.",
			children: {
				displayName: {
					title: "The name that is shown",
					summary: "The display name generated automatically from the ID",
					points: ["When no name is set, the hyphens are replaced with spaces and each word is converted to an upper case first letter and lower case after that, and it is shown as the name.", "Even if the ID contains upper case letters, everything but the first letter is converted to lower case.", "For a language other than English, you have to set the name field individually."],
					children: {
						example: {
							title: "Example",
							summary: "A real example of converting an ID",
							points: ["When the ID is `stylish-strong-axe`, the name becomes `Stylish Strong Axe`.", "When the ID is `stylish-STRONG-axe`, it likewise becomes `Stylish Strong Axe`."],
						},
					},
				},
				noDuplicate: {
					title: "No Duplicates",
					summary: "IDs must not be duplicated within the same type",
					points: ["Because it is used to tell elements apart, do not duplicate it within each of the types: category, action, item, group, event, skill, and preset.", "Events treat tasks, changed events, and fixed events together as a single type, so do not duplicate them among these either.", "The same ID in different types is not a problem.", "A world with duplicates fails with an error in validation."],
					links: { type: "type" },
				},
			},
		},
		name: {
			title: "Name",
			summary: "The name of the element that is shown",
			points: ["This is the name of the element shown in the game.", "You can also enter a language other than English.", "A name that duplicates another element is fine.", "You can enter up to 20 characters.", "When it does not fit the width it is shown in, the part that sticks out is shortened with `…`."],
			children: {
				translateFromId: {
					title: "Automatic Conversion from the ID",
					summary: "The feature that generates the name automatically from the ID",
					points: ["When it is left blank, it is shown automatically based on the ID. See the previous section for details."],
				},
			},
		},
		explanation: {
			title: "Explanation",
			summary: "The detailed explanation of the element",
			points: ["This is the explanation of the element shown in the game.", "You can also enter a language other than English. Even a long text is shown in full.", "Leave it blank when there is no explanation."],
		},
		icon: {
			title: "Icon",
			summary: "The setting for the icon that represents the element",
			points: ["For the icon you can set an image, Iconify, or an emoji.", "Iconify is a service that provides icons of many kinds.", "When you set more than one of these, they are shown in the order of priority of image, Iconify, and emoji."],
			children: {
				image: {
					title: "Image",
					summary: "Using any image file you like",
					points: ["This is the image that represents the element.", "When it is taken in, it is automatically shrunk to within 60x60 pixels and compressed again.", "It is not needed when you have set Iconify or an emoji."],
					children: {
						"file-type": {
							title: "File Types",
							summary: "The image file formats that are supported",
							points: ["The common kinds that a browser can show are available.", "JPEG, PNG, GIF, WebP, SVG, and so on.", "GIF and AVIF are converted to PNG. JPEG and WebP are shrunk while keeping their original format.", "An SVG is embedded as it is without being shrunk, so avoid ones that are large."],
						},
					},
				},
				iconify: {
					title: "Iconify",
					summary: "Using the Iconify icon sets",
					points: ["This is the icon that represents the element.", "When you have set an image, that is shown with priority."],
					children: {
						iconify: {
							title: "How to Find an Icon",
							summary: "How to choose an icon from Iconify",
							points: ["Search `Iconify` for the icons that can be shown.", "The icon search finds the best icon right away.", "When you choose an icon, the identifier of that icon such as `game-icons:sword-wound` (the kind of icon set `:` the name of the icon) is shown, so paste it into this icon field as it is."],
							images: ["iconify-selection.png"],
							links: { iconify: "https://icon-sets.iconify.design" },
						},
					},
				},
				emoji: {
					title: "Emoji",
					summary: "Showing an icon with an emoji",
					points: ["Shows an emoji as the icon.", "Enter a Unicode emoji as it is.", "The emoji installed in the runtime environment is used, so it looks slightly different from user to user.", "With Iconify you can set an emoji that does not depend on the environment", "You can show characters other than emoji, but with more than one character the display may break.", "For example, you enter an emoji such as `🗡️` or `⚔️`."],
				},
			},
		},
		color: {
			title: "Colour",
			summary: "The setting for the colour the element is shown in",
			points: ["As the colour of the element, it applies to the icon of the element and to its background colour.", "You choose it from the colour picker of the editor.", "Black (`#000000`) is treated as the value that means \"no colour is set\". The initial value of the colour picker is this black as well.", "When you want it to look black, specify a colour shifted slightly, such as `#010101`."],
			children: {
				"heritage-from-parent": {
					title: "Inheritance from the Parent Element",
					summary: "Taking over the colour setting of the parent element",
					points: ["An action, item, or event with no colour set takes over the colour of the category it belongs to.", "The hierarchy of inheritance is as follows.", "For an element with a colour set on it individually, that colour takes priority. It is not overwritten even when the category has a colour.", "The basic way to use it is to decide a colour for each category and leave what is below it to inheritance. You set an individual colour when you want to make one particular element stand out.", "When an attribute (attribute) is set on an action, the colour it takes over is not that of the category it belongs to but that of the category specified in the attribute.", "A category itself has nothing to inherit from. When the colour of a category is left black (`#000000`), that category and the elements below it with no colour set are shown in the colour halfway between the bar colour and the text colour of the design.", "Groups, skills, and presets do not inherit, and only the colour set on themselves is used."],
					quote: colorTree,
					links: { type: "type" },
				},
			},
		},
		copy: {
			title: "Copying the Information",
			summary: "Duplicating the information of another element",
			points: ["Pressing the `Copy Information` button copies the information of another element to this element all at once.", "Choose the type to copy from (category, action, item, group, event, skill, or preset), then enter its ID.", "Every field including the identifier is overwritten. After copying, change the identifier to one that is not duplicated."],
			links: { type: "type" },
		},
	},
	options: {
		label: "information",
	},
};

export const component: Markdown = {
	title: "Component",
	summary: "Common parts",
	points: ["The common parts used in the settings of various places are pulled out and handled on their own.", "The components used in any of those places are the same, but depending on the place there are fields of a component that are not used."],
	list: expandList("Component", [information, requirement, acquisition, combat, property], "Description"),
	options: {
		label: "component",
		linkedList: true,
	},
};

// type

export const preset: Type.Information = {
	...information,
	title: "Preset",
	summary: "Customising how the system elements are shown",
	points: ["Replaces the UI text and the icons built into the game engine (the player) in advance.", "Only those whose ID matches an existing preset are replaced. Adding a preset whose ID does not match an existing one is not an error, but it has no effect on the display because there is nothing that refers to it.", "Only the fields you set are replaced. If you set only the icon, for example, the original ones are used for the name, the colour and every other field.", "Overwriting the name and the explanation takes priority over the translations for each language built into the player. The string you overwrite is shown in that very form in every language.", "When you want to change the wording for each language, specify it in the translation file `translations/world` that is output once translation is enabled. That one takes the highest priority."],
	options: {
		label: "preset",
	},
};

export const task: Type.Event = {
	title: "Task",
	summary: "A mission that is achieved when the conditions are met",
	points: ["It is achieved when the conditions you set are met, and a message is shown at the top of the screen.", "It is shown in the list of missions of the player and in the list of tasks of the category.", "A task with no conditions set is never achieved.", "Once it is achieved, it stays achieved even if the conditions stop being met afterwards, and the reward can be received at any time.", "The reward is not handed over automatically. The player receives it when they open the task and press the Acquisition bar.", "Until the reward is received, a ribbon is attached to the bar in the list to show that it has not been claimed.", "A task with no reward set shows no Acquisition bar and is complete the moment it is achieved.", "You cannot receive the reward while the number of kinds of items you can hold is at its limit. Tidy up your holdings and claim it again.", "With the acquisition you can change the level of a category, the number of times an action has been performed and the number owned of an item.", "Something you want to fire at a timing other than the conditions, such as the first launch or a game over, is set with a fixed event (unique)."],
	links: { unique: "unique" },
	children: {
		information: information,
		category: {
			title: "Category",
			summary: "The ID of the category the task belongs to",
			points: ["Specify the ID of the category this task belongs to.", "Once it is set, the list of tasks is added to the category screen of the player, and in the list of missions they are shown grouped by category as well.", "When it is left blank, it belongs to no category and is shown together at the top of the list of missions.", "When no colour is set on the task itself, it inherits the colour of the category."],
			links: { category: "category" },
		},
		timing: {
			title: "Timing",
			summary: "The timing at which the task fires (fixed to `tasked`)",
			points: ["A task is fixed to `tasked` (when the conditions you set are met) and cannot be edited.", "The reward can be received only once, and after it is received it stays achieved with no further change.", "Something you want to fire at another set timing is set with a fixed event (unique)."],
			links: { unique: "unique" },
		},
		unlocked: {
			title: "Initial Display State",
			summary: "The initial display state of the task icon (achievement is decided by the conditions, and this setting does not achieve it)",
			points: ["The achievement conditions of a task are decided by requirements, and this field affects only the look of the icon in the list.", "secreted: It does not appear in the list of tasks at all until every requirement is met (the achievement itself still happens through the conditions).", "hidden and hinted: The icon is shown with a slash across it as not yet unlocked.", "released: The slash disappears and it is shown as already unlocked.", "A task that has been achieved once does not disappear from the list, and it stays shown as achieved even if the conditions stop being met afterwards."],
		},
		requirements: { ...requirement, options: { ...requirement.options, array: true }, summary: "The conditions for achieving the task" },
		requiringGroup: {
			title: "Group Totalling",
			summary: "Treats the id in the conditions as a group ID and judges by the total value of the elements that belong to it",
			points: ["When it is enabled, the id you set in the conditions (requirements) is treated as the ID of a group directly under the world.", "A condition whose type is a category is judged by the total level of every category that belongs to that group.", "A condition whose type is an action is judged by the total number of times every action that belongs to that group has been performed.", "A condition whose type is an item is judged by the total number owned of every item that belongs to that group.", "An element that is not unlocked (anything other than released) is not included in the total.", "The consumption chance (chance) and the equipment condition (equipment) of an item are ignored, and the number owned is never consumed. They are used only for the judgement.", "When it is disabled, the id in the conditions is treated as the ID of an individual category, action or item, as before."],
			links: { group: "group" },
		},
		acquisitions: { ...acquisition, options: { ...acquisition.options, array: true }, summary: "The reward that can be received when the task is achieved" },
		group: {
			title: "Task Group",
			summary: "The display group classification of the task",
			points: ["Apply one of those defined in the groups directly under the world.", "In the list of tasks of a category, they are shown split by group with a heading on each. The tasks with no group set also form one block, and the preset \"Task\" is used for its heading.", "In the list of missions they are not split by heading, and only the order in which they are lined up is gathered by group.", "The order in which the blocks are lined up is decided by the position where the first task of that group appears."],
			links: { group: "group" },
		},
	},
	options: {
		label: "task",
	},
};

// 構造はtaskと同じで、timingだけchanged固定。プレイヤーの画面には一切表示されない内部処理用のイベント
export const changed: Type.Event = {
	title: "Changed Event",
	summary: "An event for internal processing that fires when the quantity of a category, an action or an item increases at once by the amount in the conditions or more",
	points: [
		"It is checked at every timing where a quantity changes, such as the completion of an action, a purchase or a sale, or the opening of a treasure chest.",
		"The conditions (requirements) are judged by the amount of the increase in that single timing, not by an absolute value such as the number owned. Small increases split over several times are not added up.",
		"If you set the condition of an item to 3, for example, it is met when that item has increased by 3 or more in that one time. A decrease is not counted as an increase.",
		"When you set several conditions, all of them have to be met at the same time in that one change. A changed event with no conditions set at all never fires.",
		"Setting the value of a condition to `0` counts as met even without an increase, so it fires every time a quantity changes.",
		"The consumption chance (chance) and the equipment (equipment) of the conditions are not looked at. The judgement uses only the amount of the increase, and the elements used in the conditions never decrease either.",
		"The reward is received automatically every time the conditions are met, and it fires over and over any number of times. Unlike a task it is not one-off, and no operation is needed to receive it. A negative quantity can be set as well.",
		"Unlike a task or a purchase, the limit on the number of kinds of items you can hold is not checked, so new items may increase beyond the capacity.",
		"An increase from a reward is treated as a change as well, so when the reward of one changed event meets the conditions of another changed event, that one fires next.",
		"It is not shown on the screen of the player at all. It does not appear in the list of missions, and no achievement message is shown either.",
	],

	important: "Do not set the reward of a changed event so that it meets its own conditions. It will never stop firing and the game will come to a halt. An example is an event whose conditions are met when item A increases by one and whose reward hands over one of item A.",
	links: { unique: "unique" },
	children: {
		information: information,
		category: {
			title: "Category",
			summary: "The ID of the category the changed event belongs to (it is used only for classification because nothing is shown on the screen)",
			points: ["Because nothing is shown on the screen of the player, this setting has no effect on the appearance."],
		},
		timing: {
			title: "Timing",
			summary: "The timing at which the changed event fires (fixed to `changed`)",
			points: ["It is fixed to `changed` and cannot be edited.", "It is checked at every timing where a quantity changes, and it fires again every time the conditions are met."],
		},
		unlocked: {
			title: "Initial Display State",
			summary: "It has virtually no effect because nothing is shown on the screen",
			points: ["A changed event is not shown on the screen of the player, so this setting is not used."],
		},
		requirements: { ...requirement, options: { ...requirement.options, array: true }, summary: "The conditions for the changed event to fire (judged by the amount of the increase in quantity)" },
		requiringGroup: {
			title: "Group Totalling",
			summary: "Treats the id in the conditions as a group ID and judges by the total amount of the increase of the elements that belong to it",
			points: ["When it is enabled, the id you set in the conditions (requirements) is treated as the ID of a group directly under the world.", "The amounts of the increase of every category, every action and every item that belongs to that group are added up for the judgement.", "Unlike the group totalling of a task, the amount of the increase of an element that is not unlocked yet is included in the total as well.", "When it is disabled, the id in the conditions is treated as the ID of an individual category, action or item, as before."],
			links: { group: "group" },
		},
		acquisitions: { ...acquisition, options: { ...acquisition.options, array: true }, summary: "The reward received automatically when the changed event fires" },
		group: {
			title: "Changed Event Group",
			summary: "The display group classification for internal management (virtually unused because nothing is shown on the screen)",
			points: ["A changed event is not shown on the screen of the player, so this setting has no effect on the appearance."],
		},
	},
	options: {
		label: "changed",
	},
};

export const group: Type.Information = {
	...information,
	title: "Group",
	summary: "Defines the display groups of the categories, the actions, the items and the tasks",
	points: ["Defines the groups for controlling the display order. On each category, action, item and task you can set a group defined here.", "Those in the same group are shown gathered together in a list. The order in which the blocks are lined up is decided by the position where the first element of that group appears (not by the order of definition in this list of groups).", "Those left blank are treated as one group as well, and the blank ones are gathered together.", "The order of definition in this list of groups matters only for the arrangement of the equipment slots. The equipment slots are shown in the order they are lined up here, and a group that is not here is moved to the back.", "A group can have a name, an explanation, an icon and a colour set on it as well, and on the screen of the group you can see a list of the categories, the actions and the items that belong to it.", "When you enable group totalling in the conditions of an event, you can specify the ID of a group and take the elements that belong to it as a condition all together."],
	links: { requirement: "requirement" },
	options: {
		label: "group",
	},
};

export const skill: Type.Skill = {
	title: "Skill",
	summary: "A special effect that is drawn each turn of a combat and fires",
	points: ["It is a special effect that is drawn each turn and fires in a combat (`stamina`) action. It does not fire in an action of any other type.", "The substance is defined here, and it is referred to by ID from `skill` of an item (your own side) and `skills` of an action (the opponent side).", "The candidates on your own side are the skills referred to by the items that are taking effect at that moment (`unnecessary` while owned, `necessary` and `consumable` while equipped). Unequipping an item removes its skill from the candidates as well.", "Every turn the candidates are shuffled on your own side and on the opponent side, the activation chance is judged from the top, and only the first one that succeeds fires. If none of them succeeds, there is no skill on that turn.", "When the same skill is referred to from several items or actions, it gains that many more chances in the draw, so it fires more easily."],
	links: { item: "item", action: "action" },
	children: {
		information: information,
		chance: {
			title: "Activation Chance [0-1]",
			summary: "The chance that this skill fires on that turn",
			points: ["Whether it fires is judged at this chance on every turn. `1` always succeeds and `0` never fires. The default value is `1`.", "The judgement proceeds in order from the top of the shuffled candidates, and only the first skill that succeeds fires. So when there are several candidates, the rate at which it actually fires is lower than this value.", "When showing the explanation is enabled, this value affects how often the explanation appears as well. The more easily a skill fires, the less its explanation is repeated."],
		},
		property: {
			...combat,
			summary: "The combat values added on the turn it fires",
			points: ["Only on the turn this skill fires, the combat values here are added as the level gap correction.", "The recovery value alone is an exception, and it works not on that turn but all together on the recovery after the fight is settled. Of the recovery values of the skills that fired during the action, the largest one is added to the amount recovered by the skills of your own side and subtracted from it by the skills of the opponent."],
		},
		comment: {
			title: "Showing the Explanation",
			summary: "Whether to show the explanation in a toast when it fires",
			points: ["It is the flag for whether to show the explanation in a toast when this skill fires.", "When it is on, it is shown at a chance of (100% − the activation chance) ÷ 2 every time it fires. If the activation chance is 40%, that is 30%.", "When it is off, it is not shown.", "When the explanation is blank, it is not shown even if you turn it on."],
		},
	},
	options: {
		label: "skill",
	},
};

export const item: Type.Item = {
	title: "Item",
	summary: "Elements for goods such as equipment and consumables",
	points: ["These are the elements about owning things such as equipment, consumables and valuables.", "Equipment slots are made by group for each category, and only one of the items in the same slot can be equipped. An item can also be made impossible to equip.", "Because the number owned is itself the progress, an item can also be used like a flag or a counter. If you make it an item that has no effect and cannot be equipped either, it becomes an element that only counts a number."],
	children: {
		information: information,
		category: {
			title: "Category",
			summary: "The ID of the category the item belongs to",
			points: ["Specify the ID of the category this item belongs to. It is lined up in the item list of the category you specify, and the equipment slots are also made for each category.", "When no colour is set on the item itself, it inherits the colour of the category.", "Where the effects of the properties reach can be specified apart from the category it belongs to, so an item of another category can give an effect as well."],
			links: { category: "category", property: "property" },
		},
		group: {
			title: "Group",
			summary: "The display group classification of the item",
			points: ["Apply one of those defined in the groups directly under the world.", "The item list is shown in the order of the groups you set.", "When it is left blank, it is not divided into groups."],
			links: { group: "group" },
		},
		unlocked: {
			title: "Initial Unlock State",
			summary: "The initial display and unlock state of the element (it moves up to a higher state automatically once the firing requirements are met)",
			points: ["secreted: It does not appear in the UI at all until every requirement is met (it does not show up in the hints either, and it is masked in the lists of requirements and rewards as well).", "hidden: While it is referred to by none of the unlocked elements and its requirements are unmet, it is hidden completely (the name is greyed out and it cannot be operated).", "hinted (the default): Only the name is shown in advance, but it cannot be operated until it is unlocked.", "released: It is unlocked and can be operated from the start regardless of the conditions (formerly \"shown from the start\").", "Once an item has been obtained even once, it stays unlocked regardless of this setting or the conditions.", "Conversely, an item with no conditions set at all is not unlocked until it is obtained, unless you make it `released`. Always set conditions on an item you want to have bought."],
		},
		buyingValue: {
			title: "Buying Price [Coins]",
			summary: "The purchase price setting of the item",
			points: ["It is the number of the currency you pay when you buy one of the item. The default value is `-1` (cannot be bought).", "An item that is not unlocked cannot be bought even if a price is set.", "The number you can buy at once is the smaller of the number you can buy with the currency you hold and the remainder up to the maximum number owned."],
			list: [
				["Buying price", "Handling"],
				["0", "Cannot be bought"],
				["A value greater than 0", "The price at which it can be bought"],
				["A value smaller than 0 (-1, for example)", "Cannot be bought (handled the same as 0)"],
			],
		},
		sellingValue: {
			title: "Selling Price [Coins]",
			summary: "The selling price setting of the item",
			points: ["It is the number of the currency you receive when you sell one of the item. The default value is `0` (cannot be sold).", "The currency you receive is the one specified by the trading currency ID, the same as when you buy.", "It is never decided automatically from the buying price, so always set a value when you want it to be sellable.", "A negative value cannot be set."],
			list: [
				["Selling price", "Handling"],
				["0", "Cannot be sold"],
				["A value greater than 0", "Can be sold at that price"],
			],
		},
		maximum: {
			title: "Maximum Number Owned [Units]",
			summary: "The limit on the maximum number owned of the item",
			points: ["When it is 0, there is no limit on the number that can be owned. The default value is `0`.", "When it is 1 or more, only up to that number can be owned. Once the limit is reached, the number owned does not increase even if more is obtained.", "It becomes the limit on the number that can be bought as well.", "When the number owned in the save data is above the limit, it is reduced to the limit at load time."],
		},
		equipmentType: {
			title: "Equipment Type",
			summary: "The type setting about the equipping, the effect and the consumption of the item",
			points: ["For an item of `necessary` or `consumable`, its group automatically becomes an equipment slot of the category.", "Only one item within the same group can be equipped. Equipping a new item automatically unequips the existing equipment of the same group.", "The order of the equipment slots follows the order of definition in the list of groups of the world.", "`unnecessary` takes effect whether or not it is equipped, and the size of the effect is proportional to the number owned (no effect at 0, n times with n of them).", "`consumable` is consumed only when the properties of that item affect the action performed, one per action. It does not decrease on an action its effect does not reach.", "An item that has been consumed down to 0 is unequipped automatically.", "To equip it, both the conditions of that item and the conditions of the category have to be met."],
			list: [
				["Value", "Equipping", "Taking effect", "Consumption", "Example"],
				["`necessary`", "Required", "Only while equipped (for one)", "No", "Equipment such as swords and armour"],
				["`consumable`", "Required", "Only while equipped (for one)", "Consumed when the action is performed", "Items that are consumed to gain an effect, such as potions"],
				["`unnecessary`", "Not required", "Always while owned (proportional to the number owned)", "No", "Passive items that have an effect just by being held"],
				["`impossible`", "Not possible", "None", "No", "Items with no effect, such as materials and junk"],
			],
		},
		requirements: { ...requirement, options: { ...requirement.options, array: true }, summary: "The conditions for the item to be unlocked and become equippable" },
		properties: { ...property, options: { ...property.options, array: true }, summary: "The property effects the item has" },
		coinId: { title: "Trading Currency ID", summary: "The ID of the currency used for trading this item", points: ["Specify the ID of the currency (coins) used in common for the buying price and the selling price.", "When it is left blank, or when an ID that is not in the list of currencies is specified, the main currency (the first of coins) is used."] },
		// スキルの実体ではなくワールド直下のskillsのID参照なので、スキル自身の項目は持たせない
		skill: { title: skill.title, summary: "The ID of the skill this item brings to your own side", points: ["Specify an ID defined in the skills directly under the world. When it is left blank, there is no skill.", "While this item is taking effect (`unnecessary` while owned, `necessary` and `consumable` while equipped), the skill you specify joins the draw on your own side.", "When an ID that does not exist is specified, it is ignored."], links: { skill: "skill" }, options: { label: "skill" } },
	},
	options: {
		label: "item",
	},
};

export const action: Type.Action = {
	title: "Action",
	summary: "The elements of behaviour such as gathering, crafting and combat",
	points: ["It is an element that represents behaviour such as gathering, crafting, trading and combat.", "Each time you act you gain experience and your level rises.", "You can set it up to consume or obtain items each time you act.", "There are several kinds of behaviour pattern."],
	children: {
		information: information,
		category: {
			title: "Category",
			summary: "The ID of the category the action belongs to",
			points: ["Specify the ID of the category this action belongs to."],
		},
		attribute: {
			title: "Attribute",
			summary: "The attribute category specific to the action",
			points: ["You can set an individual attribute (category).", "When it is blank, the category it belongs to is taken over.", "For example, if you set the individual attribute of magic on an action that belongs to a category called Demon Castle, the level and the properties of the magic category are calculated and applied to the completion time and the damage of the action.", "The experience on success also goes to the category set in the attribute, not to the category it belongs to.", "When no colour is set on the action itself, the colours of the icon and the background take over the colour of the category set in the attribute, not of the category it belongs to."],
			links: { category: "category" },
		},
		group: {
			title: "Group",
			summary: "The display group classification of the action",
			points: ["Apply one of those defined in the groups directly under the world.", "The action list is shown in the order of the groups you set."],
			links: { group: "group" },
		},
		unlocked: {
			title: "Initial Unlock State",
			summary: "The initial display and unlock state of the element (it moves up to a higher state automatically once the firing requirements are met)",
			points: ["secreted: It does not appear in the UI at all until every requirement is met (it does not show up in the hints either, and it is masked in the lists of requirements and rewards as well).", "hidden: While it is referred to by none of the unlocked elements and its requirements are unmet, it is hidden completely (the name is greyed out and it cannot be operated).", "hinted (the default): Only the name is shown in advance, but it cannot be operated until it is unlocked.", "released: It is unlocked and can be operated from the start regardless of the conditions (formerly \"shown from the start\")."],
		},
		level: {
			title: "Level",
			summary: "The difficulty level of the action",
			points: ["The difficulty of the action is expressed as a level.", "On execution it is compared with the level of the player and each property is calculated.", "The counterpart of the comparison is the level of the category set in the attribute.", "For example, when you perform an action higher than your own level, there are effects such as the success rate going down.", "As long as the conditions are met, it can be performed even when the level of the player is smaller than this value.", "However, when `actionLevelLimit` in general (the level limit of actions) is enabled, this value is added automatically as a condition on the level of the category, so it cannot be performed until the level reaches it. It is not added for a category that has no level."],
			links: { property: "property" },
		},
		requirements: { ...requirement, options: { ...requirement.options, array: true }, summary: "The conditions needed to perform the action" },
		seconds: {
			title: "Required Time [Seconds]",
			summary: "The standard time it takes to perform the action",
			points: ["It is the standard time (in seconds) needed to perform the action once.", "For the `stamina` type, it is the time interval one turn takes (shaving the stamina of both sides once). The turns that recover the stamina after the outcome is decided use the same interval.", "It varies at the actual execution through the calculation of the properties."],
			links: { property: "property" },
		},
		experience: {
			title: "Experience [100 for the Next Level]",
			summary: "The experience gained when the action succeeds",
			points: ["It is the standard experience gained when the action is performed once and succeeds. 100 is the experience for one level.", "In the case of combat it is gained when you beat the opponent, so it is a good idea to set it generously.", "It varies at the actual execution through the calculation of the properties."],
			links: { property: "property" },
		},
		chance: {
			title: "Success Rate [0-1]",
			summary: "The success chance when the action completes",
			points: ["It is the chance of succeeding when the action completes.", "With `1` it always succeeds, and with `0` it always fails.", "The consumed items are consumed on a failure too, but the experience and the number of executions do not rise.", "Only the rewards whose chance (chance) is set to a positive value are gained on a success. The ones set to a negative value are gained only on a failure, so it is not necessarily true that nothing is gained when you fail.", "It varies at the actual execution through the calculation of the properties."],
		},
		maximum: {
			title: "Maximum Number of Executions [Times]",
			summary: "The maximum number of times the action can be completed",
			points: ["It is the upper limit of the number of times the action can succeed and be completed.", "With `0` it is unlimited.", "Once the upper limit is reached, the action can no longer be performed."],
		},
		acquisitions: { ...acquisition, options: { ...acquisition.options, array: true }, summary: "The reward obtained when the action succeeds" },
		progressType: {
			title: "Progress Type",
			summary: "The execution type of the action",
			points: ["There are four kinds."],
			list: [
				["Type", "Behaviour", "Stamina", "Example"],
				["`persistent`", "It is a type in which the action is performed repeatedly and continuously. You gain experience and a reward each time it completes once.", "Not related", "Logging, mining, fishing"],
				["`single`", "It performs the action once. When it is interrupted partway, the progress is saved and you can resume from where you left off next time. When it completes, the user presses the confirmation action and receives the result.", "Not related", "Unlocking a treasure chest, learning a skill by reading"],
				["`snap`", "It is a type in which the action is performed instantly. It completes at once with no passage of time.", "Not related", "Bartering, using an item"],
				["`stamina`", "The stamina of the player and of the opponent each decreases every required time. When the stamina of the opponent runs out you gain experience and a reward. When the stamina of the player runs out it is a game over and every action in progress is cancelled.", "Related", "Combat, work that involves danger"],
			],
		},
		property: combat,
		// スキルの実体ではなくワールド直下のskillsのID参照の一覧
		skills: { title: skill.title, summary: "The list of the skills the opponent fires", points: ["Specify the skills that the opponent of this action fires by the IDs of the skills directly under the world.", "It only has meaning on actions of the `stamina` type.", "Every turn the list is shuffled at random and the activation chance is judged from the top, and only the first one that holds fires. When none of them holds, there is no skill for that turn.", "The skills on your own side are not gathered here but from the skills set on the items that are producing an effect (the items that work just by being owned and need no equipping, and the necessities and consumables being equipped).", "Any ID that does not exist is ignored."], options: { label: "skill", array: true } },
	},
	options: {
		label: "action",
	},
};

export const category: Type.Category = {
	title: "Category",
	summary: "The broad framework that classifies actions and items",
	points: ["It represents a large classification.", "For example, you can set it as a free framework such as close range, long range, magic, dungeon, blacksmith or workshop.", "Actions and items are placed directly under the world and are linked by the category ID."],
	children: {
		information: information,
		group: {
			title: "Group",
			summary: "The display group classification of the category",
			points: ["Apply one of those defined in the groups directly under the world.", "The category list is shown in the order of the groups you set."],
			links: { group: "group" },
		},
		unlocked: {
			title: "Initial Unlock State",
			summary: "The initial display and unlock state of the element (it moves up to a higher state automatically once the firing requirements are met)",
			points: ["secreted: It does not appear in the UI at all until every requirement is met (it does not show up in the hints either, and it is masked in the lists of requirements and rewards as well).", "hidden: While it is referred to by none of the unlocked elements and its requirements are unmet, it is hidden completely (the name is greyed out and it cannot be operated).", "hinted (the default): Only the name is shown in advance, but it cannot be operated until it is unlocked.", "released: It is unlocked and can be operated from the start regardless of the conditions (formerly \"shown from the start\")."],
		},
		requirements: { ...requirement, options: { ...requirement.options, array: true }, summary: "The conditions needed to use the category" },
		numeric: {
			title: "Whether It Has a Level",
			summary: "Whether the category level feature is present",
			points: ["It is the flag for whether this category has a level.", "When it is on it has a level, and when it is off it does not.", "As an example, there is a way of using it where categories based on experience, such as swordsmanship and magic, are turned on and categories of places, such as dungeons and blacksmiths, are turned off.", "When it is off no experience comes in, and in the calculation of the properties the level gap between the player and the action is treated as 0. The correction of the properties by the equipment still works as before.", "A category that is off is also excluded from the judgement of clearing (completed)."],
		},
		standaloneProgress: {
			title: "Simultaneous Progress",
			summary: "The setting for running in parallel with other categories",
			points: ["It is the flag for whether the actions of this category can progress in parallel with the actions of other categories.", "When it is on, they can progress at the same time independently of the actions of other categories.", "When it is off, only one action at a time can progress across all the categories that are likewise set to off.", "When you start a new action in a category that is off, the action in progress is not cancelled but pushed back to the head of the waiting queue. The remaining number of executions is kept, and once the action that cut in has finished it resumes from where it left off."],
		},
		background: {
			title: "Background",
			summary: "The background setting specific to the category",
			points: ["It sets the background of this category.", "When the category is selected, the background image changes along with it.", "When it is not set, the background of the design is used as it is.", "It is automatically reduced to within 256×256 pixels when it is imported."],
		},
	},
	options: {
		label: "category",
	},
};

export const type: Markdown = {
	title: "Type",
	summary: "The basic classification of the world",
	points: ["A world is made up of six types.", "Every element is placed directly under the world.", "Actions and items are linked by the ID of the category they belong to.", "Events alone are not a type; they are placed together by timing in the events (events) directly under the world."],
	list: expandList("Type", [category, action, item, skill, group, preset], "Description"),
	quote: typeTree,
	options: {
		label: "type",
		linkedList: true,
	},
};

// basic

export const development: Type.Development = {
	title: "Development",
	summary: "The management of the memos and the errors while the world is developed",
	points: ["It is used while the world is developed.", "It concerns the development and the testing of this world and has no effect on what is played.", "The player never sees what relates to the development."],
	children: {
		version: {
			title: "Version",
			summary: "The build version number of the editor",
			points: ["The version number of the editor at the moment the new world was created is recorded automatically.", "It is not updated even when an existing world is loaded and edited.", "The developer cannot change this content."],
		},
		memo: {
			title: "Memo",
			summary: "The memo record for the developer",
			points: ["The developer can write it freely as a memo.", "It has no relation to publishing the game."],
		},
		errors: {
			title: "Errors",
			summary: "The error record of the validation result",
			points: ["The result of validating the world is saved here automatically.", "For example, it shows as errors things such as a kind of character that cannot be entered, or a number entered over the upper limit.", "When there was not a single error, a message showing success is saved instead, on just one line.", "The developer cannot change this content.", "While errors remain, the world cannot be published. When you operate publish, the validation runs first and stops there if there are errors."],
		},
		timestamp: {
			title: "Timestamp",
			summary: "The record of the creation, the saving and the publishing",
			points: ["The times of the creation, the saving and the publishing of the world are recorded automatically.", "The developer cannot change this content."],
			children: {
				created: {
					title: "Creation Date",
					summary: "The time the world was first created",
					points: ["It is the date and time when the world was first created."],
				},
				saved: {
					title: "Save Date",
					summary: "The time the last save was performed",
					points: ["It is the date and time when the world was last saved."],
				},
				published: {
					title: "Publish Date",
					summary: "The time the last publish was performed",
					points: ["It is the date and time when the world was last published."],
				},
			},
		},
		autosaveing: {
			title: "Auto Save",
			summary: "Whether the auto save feature is enabled or disabled",
			points: ["It shows whether the content of the editing is saved to the browser automatically.", "You cannot rewrite this field directly. You change it with the auto save toggle in the menu of the editor."],
		},
	},
	options: {
		label: "development",
	},
};

export const design: Type.Design = {
	title: "Design",
	summary: "The look settings of the world, such as the colours and the font",
	points: ["They are the settings about the display of the world.", "The two colours decided here (the bar colour and the text colour) become the base of the whole screen, and every colour used on the screen, such as the selected row, the heading of a group and the colours of affirmation and negation, is made from them.", "The background image alone can be swapped per category, and in that case the setting on the category side takes priority."],
	children: {
		barColor: {
			title: "Bar Colour",
			summary: "The colour that becomes the background of the bar",
			points: ["It is used as the background colour of the bar.", "Because it is also the colour that becomes the base of the whole screen, the colour of the selected row is made from this colour too.", "The swatches of elements with no colour set and the background of the toasts become the middle colour between this colour and the text colour."],
		},
		textColor: {
			title: "Text Colour",
			summary: "The colour of the text and the background",
			points: ["It is used as the colour of the text.", "The gradient of the background is also made from this colour. When a background image is set, the same gradient is thinned and laid over the image.", "Taking a large difference in brightness from the bar colour makes the text easier to read. In a world where the difference is small, the swatches of elements with no colour set also become harder to tell apart."],
		},
		shadowColor: {
			title: "Shadow Colour",
			summary: "The colour of the shadow of the bar",
			points: ["It is used as the colour of the shadow cast on the bars and the header.", "Making it a darker colour than the bar colour gives a natural shadow."],
		},
		background: {
			title: "Background Image",
			summary: "The background image of the whole game",
			points: ["It sets the background image of the game.", "When no image is set, the background becomes a gradient based on the text colour.", "The image is automatically reduced so that it fits within 256×256 pixels. GIF and AVIF are converted to PNG.", "When a background image is set on a category, the image on the category side takes priority on the screen of that category.", "The image you set can be deleted with the Delete Image button."],
			links: { category: "category" },
		},
	},
	options: {
		label: "design",
	},
};

export const general: Type.General = {
	title: "General",
	summary: "Basic game settings such as the language and the level settings",
	children: {
		language: {
			title: "Language",
			summary: "The language in which you create the world",
			points: [
				"Sets which language you are writing the name and the description of the world in. It is the language that the translations are based on.",
				"It is also the language shown first when a player starts the game.",
				"When translations is disabled, the player cannot switch away from this language.",
				"It is a separate setting from the display language of the world editor itself. You choose the display language of the editor when you open the editor.",
			],
			links: { translation: "translation" },
		},
		translations: {
			title: "Translation",
			summary: "Whether to prepare translations for multiple languages",
			points: [
				"When it is enabled, players can switch to whichever language they like and play in it.",
				"When it is disabled, it is fixed to the language chosen in language, and the switching operation itself is not available.",
				"When you enable it, you need to prepare the translation data for each language. The published package includes the translation data.",
				"What switches are the names and the descriptions defined in the world. The translations of the common wording of the screen (the presets) are always included regardless of this setting.",
			],
			links: { translation: "translation", preset: "preset" },
		},
		offlineMaxHours: {
			title: "Maximum Offline Time [Hours]",
			summary: "The time limit on the offline progress",
			points: ["Sets how many hours at most the progress while offline runs for.", "For example, when you set 6 hours, the process of returning from offline is handled up to 6 hours, and even when you return from offline after a longer time away, the offline time is treated as 6 hours.", "When you set 0 hours, no process at all is handled on returning from offline.", "The maximum value is 24 hours."],
			links: { category: "category" },
		},
		maxCategoryLevels: {
			title: "Maximum Category Level",
			summary: "The level cap of each category",
			points: [
				"Sets the cap on the level of each category. The default value is `100`.",
				"Even when experience is gained, the level stops at this value and the excess is discarded. The same applies when a reward adds levels directly.",
				"When the level in the save data is over the cap, it is trimmed down to the cap on loading.",
				"The level bar and the progress rate in the statistics are shown with this value as the denominator.",
				"A category whose numeric is disabled does not gain levels, so this value is not related to it.",
			],
			links: { category: "category" },
		},
		coins: {
			title: "Currency",
			summary: "The settings of the currency (coins) used in the game",
			points: [
				"Sets the currency used in the game. At least one is required.",
				"You can define several currencies, and you set each of them as information (ID, name, icon, colour, and so on).",
				"Currencies are used for buying and selling items and for expanding the capacity and the queue.",
				"The first currency is treated as the main currency, and it is used when no currency ID (`coinId`) is specified for an item, the capacity, or the queue, or when an ID that is not in the list of currencies is specified.",
				"A currency is treated as a kind of item. In requirements and rewards, refer to the ID set here as an item. It does not belong to a category, and it is not subject to equipping or trading.",
			],
			links: { information: "information", item: "item" },
		},
		capacity: {
			title: "Capacity",
			summary: "The capacity settings of the inventory",
			points: [
				"Manages the cap on the number of kinds of items a player can hold.",
				"It is managed by the number of kinds of items held, not by the number owned of each item.",
				"Setting `initialCount` to 0 makes the capacity unlimited, and buying capacity also becomes unavailable.",
				"When you refer to the capacity item in requirements or rewards, use the ID set here or `capacity`.",
			],
			children: {
				information: { ...information, title: "Capacity Information", summary: "The ID, name, icon, and colour for treating the capacity as an item" },
				initialCount: {
					title: "Initial Capacity [Units]",
					summary: "The initial inventory capacity (the number of kinds of items that can be held)",
					points: ["It is the initial capacity at the start of the game (the number of kinds of items that can be held). The default value is `10`.", "Setting it to `0` makes the capacity unlimited, and at the same time buying capacity becomes unavailable."],
				},
				initialCost: {
					title: "Base Price of the Capacity [Coins]",
					summary: "The initial price for increasing the capacity by one",
					points: ["It is the base price (in coins) for increasing the inventory capacity by one slot. Set it as an integer of `1` or more.", "The actual price is calculated as \"base price × increasing rate^number of purchases made\".", "For example, with a base price of 100 and an increasing rate of 1.2, the first time is 100 coins, the second time 120 coins, and the third time 144 coins."],
				},
				increasingRate: {
					title: "Increasing Rate of the Capacity [Multiplier]",
					summary: "The increasing rate of the cost of expanding the capacity",
					points: ["It is the multiplier for how much the cost of expanding the capacity increases at the nth purchase. The default value is `1.2`.", "With `1.0` the price is always the same, and with `1.2` it becomes 20% more expensive with every purchase.", "Formula: base price × increasing rate^number of purchases made"],
					list: [
						["Increasing Rate", "1st unit", "5th unit", "10th unit", "100th unit", "1000th unit"],
						["1.00", "x1.00", "x1.00", "x1.00", "x1.00", "x1.00"],
						["1.05", "x1.00", "x1.22", "x1.55", "x125.24", "x1.5×10²¹"],
						["1.10", "x1.00", "x1.46", "x2.36", "x1.3×10⁴", "x2.2×10⁴¹"],
						["1.20", "x1.00", "x2.07", "x5.16", "x6.9×10⁷", "x1.3×10⁷⁹"],
						["1.50", "x1.00", "x5.06", "x38.44", "x2.7×10¹⁷", "x8.2×10¹⁷⁵"],
					],
				},
				coinId: {
					title: "Currency ID of the Capacity",
					summary: "The ID of the currency used for expanding the capacity",
					points: ["Specifies the ID of the currency (coins) used for the expansion price of the inventory capacity.", "When it is left blank, or when an ID that is not in the list of currencies is specified, the main currency (the first of coins) is used."],
				},
				buyingLimit: {
					title: "Purchase Limit of the Capacity [Times]",
					summary: "The maximum number of times the capacity can be bought",
					points: ["It is the cap on the number of times the capacity can be bought with a currency.", "Setting it to `0` allows unlimited purchases.", "Setting it to `-1` makes it impossible to buy.", "An increase of the capacity by a reward is not subject to this cap."],
				},
			},
			links: { item: "item" },
		},
		queue: {
			title: "Queue",
			summary: "The settings of the number of slots for executing actions in succession (the queue)",
			points: [
				"Manages the number of slots in the queue for executing actions in succession.",
				"The queue includes the action being executed, and the action at its head is the one executed. When the slots are `1`, there is only the one being executed and no waiting can be held.",
				"As with the capacity, the number of slots can be bought with a currency, and it can also be increased by specifying the queue item as a reward of an action or an event.",
				"When you refer to the queue item in requirements or rewards, use the ID set here or `queue`.",
			],
			children: {
				information: { ...information, title: "Queue Information", summary: "The ID, name, icon, and colour for treating the queue as an item" },
				initialCount: {
					title: "Initial Queue [Slots]",
					summary: "The number of slots for successive execution at the start of the game",
					points: ["It is the number of slots in the queue at the start of the game. The default value is `1`.", "The minimum value is `1` (because the one being executed uses one slot; there is no `0` = unlimited handling as there is for the capacity)."],
				},
				initialCost: {
					title: "Base Price of the Queue [Coins]",
					summary: "The initial price for increasing the slots by one",
					points: ["It is the base price (in coins) for increasing the slots for successive execution by one. Set it as an integer of `1` or more.", "The actual price is calculated as \"base price × increasing rate^number of purchases made\".", "For example, with a base price of 100 and an increasing rate of 1.2, the first time is 100 coins, the second time 120 coins, and the third time 144 coins."],
				},
				increasingRate: {
					title: "Increasing Rate of the Queue [Multiplier]",
					summary: "The increasing rate of the cost of expanding the slots",
					points: ["It is the multiplier for how much the cost of expanding the slots increases at the nth purchase. The default value is `1.2`.", "With `1.0` the price is always the same, and with `1.2` it becomes 20% more expensive with every purchase.", "Formula: base price × increasing rate^number of purchases made", "The way it increases is the same as the increasing rate of the capacity. For a guide to the multiplier, see the table for the capacity."],
				},
				coinId: {
					title: "Currency ID of the Queue",
					summary: "The ID of the currency used for expanding the slots",
					points: ["Specifies the ID of the currency (coins) used for the expansion price of the slots for successive execution.", "When it is left blank, or when an ID that is not in the list of currencies is specified, the main currency (the first of coins) is used."],
				},
				buyingLimit: {
					title: "Purchase Limit of the Queue [Times]",
					summary: "The maximum number of times the slots can be bought",
					points: ["It is the cap on the number of times the slots for successive execution can be bought with a currency.", "Setting it to `0` allows unlimited purchases.", "Setting it to `-1` makes it impossible to buy.", "An increase of the slots by a reward is not subject to this cap."],
				},
			},
			links: { item: "item" },
		},
		levelCommonRatio: {
			title: "Experience Growth Rate [Multiplier]",
			summary: "The increasing rate of the difficulty of levelling up",
			points: [
				"It is the growth rate of the experience needed to reach the next level as the level of a category rises. The default value is `1.05`, and a value below `1` cannot be set.",
				"Making this value larger raises the difficulty. Setting it to `1` keeps the experience needed the same at every level.",
				"The experience needed to reach the next level is (experience growth rate)^(current level-1). Levels are counted with the decimals discarded.",
				"The experience gained after the cap (the maximum category level) is reached is discarded.",
			],
			list: [
				["Experience Growth Rate", "Lv.1", "Lv.2", "Lv.10", "Lv.50", "Lv.99"],
				["1.00", "x1.00", "x1.00", "x1.00", "x1.00", "x1.00"],
				["1.02", "x1.00", "x1.02", "x1.20", "x2.64", "x6.96"],
				["1.05", "x1.00", "x1.05", "x1.55", "x10.92", "x119.28"],
				["1.10", "x1.00", "x1.10", "x2.36", "x106.72", "x1.1×10⁴"],
				["1.20", "x1.00", "x1.20", "x5.16", "x7583.70", "x5.8×10⁷"],
			],
			links: { category: "category" },
		},
		actionLevelLimit: {
			title: "Action Level Limit",
			summary: "Requiring the level of the category of the attribute in order to execute an action",
			points: [
				"When it is enabled, the requirement \"the level of the category of the attribute is at or above the level of that action\" is added automatically at the head of the requirements of each action.",
				"When no attribute is set, the category it belongs to is used.",
				"When the numeric of the category of the attribute is disabled, it does not gain levels, so nothing is added.",
				"The added requirement is written in when the world is loaded, so it is shown on the screen of the player just like an ordinary requirement.",
			],
			links: { action: "action", category: "category", requirement: "requirement" },
		},
		propertyRatio: {
			title: "Property Ratio [Multiplier]",
			summary: "How many times the properties become for every 10 of level gap",
			points: [
				"Sets how many times the properties become for every `10` that the gap between the level of the category and the level of the action widens. The default value is `1.5`, and a value below `1` cannot be set.",
				"The multiplier is calculated as (property ratio)^(level gap÷10). When the level gap is `0` it is `1` times, and the value set on the action is used as it is.",
				"Attack and experience increase by this multiplier, and defence (the damage taken) and speed (the required time) decrease by the same multiplier.",
				"Accuracy, evasion, success rate, and the amount of recovery are values that stay within `0` to `100`%, so the multiplier applies to the ratio between the side that comes about and the side that does not. `0`% and `100`% do not change, and a value in between never goes over `100`%.",
				"For defence, evasion, and speed the multiplier works at half strength (a level gap of `20` amounts to a level gap of `10` for the other properties). Defence and evasion apply twice over, to the rate of being hit and to the damage taken, and speed applies to all the other properties as the number of executions, so their effect is weakened to keep the balance.",
				"A guide is (the experience growth rate) to the power of `6.7`. Above it, levelling up accelerates as the level rises, and below it, levelling up in the later stages takes more time.",
				"Setting it to `1` removes the influence of the level gap. Making the value larger makes the advantage and the disadvantage from the level gap steeper.",
			],
			list: [
				["Property Ratio", "Level Gap -20", "Level Gap -10", "Level Gap 0", "Level Gap +10", "Level Gap +20"],
				["`1`", "`x1.00`", "`x1.00`", "`x1.00`", "`x1.00`", "`x1.00`"],
				["`1.5`", "`x0.44`", "`x0.67`", "`x1.00`", "`x1.50`", "`x2.25`"],
				["`2`", "`x0.25`", "`x0.50`", "`x1.00`", "`x2.00`", "`x4.00`"],
				["`3`", "`x0.11`", "`x0.33`", "`x1.00`", "`x3.00`", "`x9.00`"],
			],
			links: { action: "action", property: "property" },
		},
		defaultCombat: { ...combat, summary: "The default combat parameters common to all actions", points: ["They are the basic combat corrections on the player side, applied in common to all actions of the `stamina` type.", "The combat values (property) of each action are the values on the opponent side, so they work in the direction of cancelling out the values set here."], links: { action: "action" } },
	},
	options: {
		label: "general",
	},
};

export const overview: Type.Overview = {
	title: "Overview",
	summary: "The basic information of the world and the information of the author",
	points: ["They are the fields that explain the content of the world.", "Set them so that they are easy to understand when a user chooses the world.", "Apart from the URL, these settings have no effect on the progress of the game."],
	children: {
		information: information,
		version: {
			title: "Version",
			summary: "The version number of the world",
			points: ["Enter a number of `0` or more (a whole number or a decimal). The default value is `0`.", "Generally the whole-number part represents the major version and the decimal part the minor version.", "The version of the development (development) is the version of the editor, so it is a different thing."],
		},
		author: {
			title: "Author Name",
			summary: "The name of the author of the world",
			points: ["Enter a handle name or a nickname.", "It must be from 3 to 20 characters, and only single-byte letters and digits, spaces and `!` `?` `.` `,` `-` can be used."],
		},
		homepage: {
			title: "Homepage",
			summary: "The URL of the website of the author",
			points: ["If you have your own homepage or social media, enter its URL.", "The player can check this URL through the link.", "If there is none, leave it blank. The initial value is `https://`."],
		},
		url: {
			title: "URL",
			summary: "The URL of the game",
			points: ["Enter the URL where the game of this world is placed.", "Enter the URL of a top page such as index.html, including the domain.", "It is a field for recording where the world was placed. When the place to put it is not decided, leave it blank.", "A published world works as a PWA. A PWA is a feature that lets it be installed and work like an app you can play offline as well.", "The settings of the PWA are made with relative paths, so it works as it is wherever it is placed, regardless of the value of this field."],
		},
		estimatedPlayingTime: {
			title: "Estimated Playing Time",
			summary: "The rough time until the world is played through",
			points: ["It is the estimated playing time needed to complete playing the world.", "It can be checked as a guide when the player plays.", "It is only a reference time, and there is no clear definition of what counts as completing the world."],
			children: {
				value: {
					title: "Value",
					summary: "The number of the playing time",
					points: ["Set it as a whole number of `1` or more. The default value is `1`."],
				},
				unit: {
					title: "Unit",
					summary: "The unit of time (hours, minutes and so on)",
					points: ["Choose from seconds, minutes, hours, days, years, centuries and infinite. The default value is days.", "Infinite is used for a world with no end."],
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
			title: "Category",
			summary: "Not used in an event",
			points: ["They are not shown in the missions or in the task list, so the category they belong to is not specified.", "The input field is not shown in the editor."],
		},
		timing: {
			title: "Timing",
			summary: "The timing at which the event fires (fixed)",
			points: timingPoints,
		},
		unlocked: {
			title: "Initial Display State",
			summary: "The initial display state of the event icon (the firing is decided by the timing, and this setting does not fire it)",
			points: ["The firing conditions of an event are decided by the timing, and this field affects only the look of the icon.", "secreted: The icon is not shown until every requirement is met (the firing itself happens at its timing).", "hidden and hinted: The icon is shown with a slash across it as not yet unlocked.", "released: The slash disappears and it is shown as already unlocked."],
		},
		requirements: { ...requirement, options: { ...requirement.options, array: true }, summary: "The conditions for obtaining the reward" },
		acquisitions: { ...acquisition, options: { ...acquisition.options, array: true }, summary: "The reward received automatically when the event fires" },
		group: {
			title: "Task Group",
			summary: "Not used in an event",
			points: ["They are not shown in the missions or in the task list, so the group is not specified.", "The input field is not shown in the editor."],
		},
	}, title),
});

export const unique: Type.Unique = {
	title: "Fixed Event",
	summary: "The messages and rewards that activate at set moments",
	points: ["It activates at set moments, such as when the world is opened for the first time or when a game over occurs, and opens a dedicated screen.", "One is prepared for each moment, and none can be added or deleted. Leave the moments you do not use blank.", "They are not shown in the missions or in the task list. Set what becomes achieved when its requirements are met with a task.", "When the moment comes about, the event activates and opens a dedicated screen to show its content.", "The reward is obtained automatically at the same time as the activation. There is no claiming operation and no ribbon as there is for a task, and the cap on the kinds of items that can be held is not checked either.", "When requirements are set, the reward is obtained only when those requirements were met at the time of activation. When none are set, it is obtained on every activation.", "The requirements are only looked at to see whether they are met, so items are not reduced even when a consumption chance is set.", "On activation you can change the level of a category, the number of executions of an action, and the number of items held. By setting a minus quantity, you can also use it in ways such as making the player lose their belongings on a game over.", "When you leave the name, the description, and the icon blank, the default wording and icon built into the player are used."],
	list: [
		["Timing", "Activation Requirement", "Repetition"],
		["`comebacked`", "When you return from offline after 1 second or more and at least one action was completed while you were away", "Repeatedly"],
		["`gameovered`", "When the stamina of the player runs out in battle", "Repeatedly"],
		["`welcomed`", "When this world is started for the first time", "Only once"],
		["`completed`", "When the levels of all categories reach the maximum value (maxCategoryLevels)", "Only once"],
		["`obtained`", "When an action of the single kind (a treasure chest and the like) is completed and checked", "Repeatedly"],
	],
	links: { task: "task" },
	children: {
		comebacked: toUniqueEvent("On Return", "Activates when you return from offline", ["It activates when you return from offline after 1 second or more and at least one action was completed while you were away. It does not activate when not a single execution has finished.", "It is shown together with the summary of the progress while you were away."], ["It is fixed as `comebacked` and cannot be edited.", "It activates any number of times, every time you return."]),
		gameovered: toUniqueEvent("On Game Over", "Activates when the stamina runs out in battle", ["It activates when the stamina of the player runs out in battle.", "At the same time, all the actions being executed stop and all the waiting reservations are discarded.", "By setting a minus quantity for the reward, you can give the game over a price to pay."], ["It is fixed as `gameovered` and cannot be edited.", "It activates any number of times, every time a game over occurs."]),
		welcomed: toUniqueEvent("On First Start", "Activates when the world is opened for the first time", ["It activates when this world is started for the first time.", "Use it to explain the setting of the world and to hand over the starting supplies given at the beginning."], ["It is fixed as `welcomed` and cannot be edited.", "It activates only once, at the first start."]),
		completed: toUniqueEvent("On Completion", "Activates when all categories reach the maximum level", ["It activates when the levels of all categories reach the maximum value (maxCategoryLevels).", "Categories that are not numeric are excluded from the check. That is why it does not activate in a world without a single numeric category."], ["It is fixed as `completed` and cannot be edited.", "It activates only once, when the requirements are met."]),
		obtained: toUniqueEvent("On Completing a Single Action", "Activates when a single action such as a treasure chest is completed", ["It activates when an action of the single kind (a treasure chest and the like) is completed and checked.", "Apart from the reward of the action itself, you can add on the reward set here."], ["It is fixed as `obtained` and cannot be edited.", "It activates any number of times, every time a single action is completed."]),
	},
	options: {
		label: "unique",
	},
};

// タスク・変化イベント・固定イベントをまとめたイベント全体
export const events: Type.Events = {
	title: "Event",
	summary: "All the events of the world, gathering the tasks, the changed events, and the fixed events",
	points: ["The events of a world are made up of three kinds: tasks, changed events (changed), and fixed events (unique).", "A task is a mission that becomes achieved when its requirements are met.", "A changed event is an event for internal processing, not shown on the screen, that activates repeatedly with an increase in a quantity as its trigger.", "A fixed event is a slot prepared one per moment, which cannot be added or deleted."],
	list: expandList("Kind", [task, changed, unique], "Description"),
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
	title: "Basic Settings",
	summary: "The basic setting fields for the world as a whole",
	points: ["Sets the name, the description, the background, the currency, the capacity, the maximum category level, the experience growth rate, the standard combat parameters, and so on of the world.", "These settings affect the whole world."],
	list: expandList("Name", [overview, general, design, development], "Description"),
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
	title: "World",
	summary: "The settings and the data structure of the whole game world",
	points: ["It is the definition data of the game, loaded and played in the player.", "With the settings you can create the idle game you have in mind.", "A world contains the basic settings, the six types of category, action, item, skill, group, and preset, and the events."],
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
	summary: "The explanation of how to use the editor and of the structure of a world",
	list: expandList("Name", [world, basic, type, events, component, miscellaneous], "Description"),
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
