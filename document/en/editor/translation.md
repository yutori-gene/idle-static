
# Translation
Settings for translating the text of a world into ten languages
- There are two kinds of translation: the translation of the common phrases of the interface (presets), and the translation of the names and explanations the world itself holds.
- The translation of the common phrases is always bundled regardless of the `translations` setting in general. The author does not need to prepare it.
- The translation of the world itself is exported only when `translations` in general is enabled and the world is published, and the author translates it.
- In a language for which no translation is prepared, the text is shown exactly as it is written in the world.
- [_general_](en/editor/general)
___

## Enabling Translation
What happens when translation is enabled
- What you enable is `translations` in general. This section explains what happens when you enable it.
- When it is enabled, translation files for ten languages are bundled with the published world, and the language can be switched from the settings of the player. When it is disabled, the language cannot be switched at all.
- The ten files are exported with the same content (the text before translation). A language you did not translate shows the original text as it is. You can translate only some of the languages, but the original text will be mixed into the screens of those languages.
- When the game starts, the language set in `language` in general is shown first. After that, it can be changed to any language from the settings column.
- In the test play of the editor, the translation files of the world do not exist yet, so switching the language changes only the common phrases of the interface.
- Translation work is tedious, but it lets many more people play your game.
- [_general_](en/editor/general)
___

## Language Files
The JSON files exported for translation
- When you export a world with Publish in the menu, `translations/base` holds the translation of the common phrases and `translations/world` holds the translation of the world itself.
- The only files you translate are the ten in `translations/world`. `translations/base` is bundled already translated, so you do not need to touch it.
- The content of a file is divided by type, with the IDs of the elements below that, and the name (`name`) and the explanation (`explanation`) below those.
- There are seven types: category, action, item, event, group, skill, and preset. Currency, capacity, and the queue go into items, the overview of the world goes into presets, and tasks and fixed events go together into events.
- An element whose name was left blank is exported with a name generated automatically from its ID.
- Put the translated files back into `translations/world` under the same names.
___

## Translation Work
Editing the translation data
- The ten exported files all have the same content (the text before translation).
- Every file except the one for the original language needs to be translated.
- Translate only the values of `name` and `explanation`. Do not change the IDs or the structure of the JSON.
___

### AI
Translation using AI
- Translate using an AI such as ChatGPT, Copilot, or Claude.
- It can translate everything in one go, with a reasonable level of quality.
- The translation may not be complete, and technical terms and proper nouns in particular need attention.
- Depending on the volume, using an AI may cost money.
- If the AI stops partway through the translation, telling it to "continue" sometimes gets it moving again. (Sometimes it does not.)
___

#### Prompt Example
An example of the translation instruction given to an AI
- Example prompt: Translate the values of `name` and `explanation` in the uploaded JSON data from Japanese into English. Do not change the keys or any other part.
___

#### Using GPTs
Translation using a GPT of ChatGPT
- The JSON Language Translator provided in the GPT library of ChatGPT makes translating JSON easy.
- The structure of the JSON is preserved through the translation.
- AI services other than ChatGPT sometimes provide the same kind of function.
___

### Translation Services
Using a translation service
- Translate using an online service such as DeepL or Google Translate.
- Higher quality than AI translation can be expected, but depending on the volume there is a charge.
- A JSON file cannot be translated by a translation service as it is, so you need to write a program to use one.
- There also seem to be paid services that translate JSON data as it is (doctranslator.com and others).
___

### Manual
Translating by hand
- Open the translation file in a text editor and type in the content translated into each language. It takes a great deal of effort, but you can translate exactly as you intend.
___

## Language Codes
The list of supported language codes
- The name of a translation file is this language code.
- These ten languages are supported, and they cannot be increased or decreased.

|Language Code|Language|
|-|-|
|en|English|
|zh|Chinese (Simplified)|
|es|Spanish|
|pt|Portuguese|
|fr|French|
|ru|Russian|
|de|German|
|ja|Japanese|
|id|Indonesian|
|ko|Korean|