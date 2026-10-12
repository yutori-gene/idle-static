
# Traduction
Paramètres permettant de traduire le texte d'un monde dans dix langues
- Il existe deux sortes de traduction : celle des formules communes de l'interface (les préréglages) et celle des noms et des explications que le monde possède lui-même.
- La traduction des formules communes est toujours incluse, quel que soit le paramètre `translations` de général. L'auteur n'a pas à la préparer.
- La traduction du monde lui-même n'est exportée que lorsque `translations` de général est activé et que le monde est publié ; c'est l'auteur qui la réalise.
- Dans les langues pour lesquelles aucune traduction n'est prévue, le texte s'affiche tel qu'il est écrit dans le monde.
- [_general_](fr/editor/general)
___

## Activation de la traduction
Ce qui se passe lorsque la traduction est activée
- Ce que l'on active, c'est `translations` de général. Cette section explique ce qui se passe lorsqu'on l'active.
- Lorsqu'il est activé, le monde publié embarque des fichiers de traduction pour dix langues, et la langue peut être changée depuis les paramètres du lecteur. Lorsqu'il est désactivé, il est impossible de changer de langue.
- Les dix fichiers sont exportés avec le même contenu (le texte avant traduction). Une langue que vous n'avez pas traduite affiche le texte d'origine tel quel. Vous pouvez ne traduire que certaines langues, mais le texte d'origine se mêlera aux écrans de ces langues.
- Au démarrage du jeu, c'est d'abord la langue définie dans `language` de général qui s'affiche. Ensuite, elle peut être changée pour n'importe quelle langue depuis la colonne des paramètres.
- Dans le test de jeu de l'éditeur, les fichiers de traduction du monde n'existent pas encore : changer de langue ne modifie donc que les formules communes de l'interface.
- Traduire est fastidieux, mais cela permet à beaucoup plus de monde de jouer.
- [_general_](fr/editor/general)
___

## Fichiers de langue
Les fichiers JSON exportés pour la traduction
- Lorsque vous exportez un monde avec Publier dans le menu, `translations/base` reçoit la traduction des formules communes et `translations/world` celle du monde lui-même.
- Les seuls fichiers à traduire sont les dix de `translations/world`. `translations/base` est fourni déjà traduit : vous n'avez pas à y toucher.
- Le contenu du fichier est réparti par type ; en dessous figurent les ID des éléments, puis le nom (`name`) et l'explication (`explanation`).
- Il existe sept types : catégorie, action, objet, événement, groupe, compétence et préréglage. La monnaie, la capacité et la file d'attente vont dans les objets, l'aperçu du monde va dans les préréglages, et les tâches et les événements fixes vont ensemble dans les événements.
- Les éléments dont le nom a été laissé vide sont exportés avec un nom créé automatiquement à partir de leur ID.
- Replacez les fichiers traduits dans `translations/world` sous le même nom.
___

## Le travail de traduction
La modification des données de traduction
- Les dix fichiers exportés ont tous le même contenu (le texte avant traduction).
- Tous les fichiers, sauf celui de la langue d'origine, doivent être traduits.
- Ne traduisez que les valeurs de `name` et d'`explanation`. Ne modifiez ni les ID ni la structure du JSON.
___

### AI
Traduction à l'aide d'une IA
- Traduisez à l'aide d'une IA comme ChatGPT, Copilot ou Claude.
- Elle peut tout traduire d'un coup, avec une qualité correcte.
- La traduction peut ne pas être complète ; les termes techniques et les noms propres demandent une attention particulière.
- Selon le volume, l'utilisation d'une IA peut être payante.
- Si l'IA interrompt la traduction en cours de route, lui demander de « continuer » suffit parfois. (Parfois non.)
___

#### Exemple de prompt
Un exemple de consigne de traduction donnée à une IA
- Exemple de prompt : traduisez du japonais vers l'anglais les valeurs de `name` et d'`explanation` des données JSON envoyées. Ne modifiez ni les clés ni les autres parties.
___

#### Utilisation des GPT
Traduction à l'aide d'un GPT de ChatGPT
- Le JSON Language Translator proposé dans la bibliothèque de GPT de ChatGPT facilite la traduction du JSON.
- La structure du JSON est conservée pendant la traduction.
- D'autres services d'IA que ChatGPT proposent parfois la même fonction.
___

### Services de traduction
L'utilisation d'un service de traduction
- Traduisez à l'aide d'un service en ligne comme DeepL ou Google Traduction.
- On peut en attendre une qualité supérieure à la traduction par IA, mais selon le volume, le service est payant.
- Un fichier JSON ne peut pas être traduit tel quel par un service de traduction : il faut donc créer un programme pour s'en servir.
- Il semble aussi exister des services payants qui traduisent les données JSON telles quelles (doctranslator.com, entre autres).
___

### Manuel
La traduction faite à la main
- Ouvrez le fichier de traduction dans un éditeur de texte et saisissez le contenu traduit dans chaque langue. Cela demande énormément de travail, mais vous pouvez traduire exactement comme vous le souhaitez.
___

## Codes de langue
La liste des codes de langue pris en charge
- Le nom du fichier de traduction est ce code de langue.
- Les langues prises en charge sont ces dix-là ; il est impossible d'en ajouter ou d'en retirer.

|Code de langue|Langue|
|-|-|
|en|Anglais|
|zh|Chinois (simplifié)|
|es|Espagnol|
|pt|Portugais|
|fr|Français|
|ru|Russe|
|de|Allemand|
|ja|Japonais|
|id|Indonésien|
|ko|Coréen|