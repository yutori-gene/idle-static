
# Aperçu
Les informations de base du monde et les informations sur l'auteur
- Ce sont les champs qui expliquent le contenu du monde.
- Réglez-les de manière à ce qu'ils soient clairs lorsqu'un utilisateur choisit le monde.
- Hormis l'URL, ces réglages n'ont pas d'effet sur l'avancement du jeu.
___

## [_Informations_](fr/editor/information)
___

## Version
Le numéro de version du monde
- Saisissez un nombre supérieur ou égal à `0` (entier ou décimal). La valeur par défaut est `0`.
- En général, la partie entière représente la version majeure et la partie décimale la version mineure.
- La version du développement (development) est la version de l'éditeur, c'est donc autre chose.
___

## Nom de l'auteur
Le nom de l'auteur du monde
- Saisissez un pseudonyme ou un surnom.
- Il doit compter de 3 à 20 caractères, et seuls les lettres et chiffres demi-chasse, les espaces et `!` `?` `.` `,` `-` peuvent être utilisés.
___

## Page d'accueil
L'URL du site web de l'auteur
- Si vous avez votre propre page d'accueil ou des réseaux sociaux, saisissez leur URL.
- Le joueur peut consulter cette URL grâce au lien.
- S'il n'y en a pas, laissez le champ vide. La valeur initiale est `https://`.
___

## URL
L'URL du jeu
- Saisissez l'URL où le jeu de ce monde est placé.
- Saisissez l'URL d'une page d'accueil telle que index.html, domaine compris.
- C'est un champ servant à garder trace de l'endroit où le monde a été placé. Si l'endroit où le mettre n'est pas décidé, laissez le champ vide.
- Un monde publié fonctionne comme une PWA. Une PWA est une fonction qui permet de l'installer et de le faire fonctionner comme une application à laquelle on peut jouer même hors ligne.
- Les réglages de la PWA sont créés avec des chemins relatifs, si bien qu'il fonctionne tel quel à l'endroit où il est placé, quelle que soit la valeur de ce champ.
___

## Temps de jeu estimé
Le temps indicatif jusqu'à l'achèvement de la partie du monde
- C'est le temps de jeu estimé nécessaire pour achever la partie du monde.
- Il peut être consulté à titre indicatif lorsque le joueur joue.
- Ce n'est qu'un temps de référence, et il n'y a pas de définition claire de ce qui compte comme achèvement du monde.
___

### Valeur
Le nombre du temps de jeu
- Il se règle avec un entier supérieur ou égal à `1`. La valeur par défaut est `1`.
___

### Unité
L'unité de temps (heures, minutes et ainsi de suite)
- Elle se choisit parmi secondes, minutes, heures, jours, années, siècles et infini. La valeur par défaut est jours.
- Infini s'utilise pour les mondes qui n'ont pas de fin.