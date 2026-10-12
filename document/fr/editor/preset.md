
# Préréglage
Personnalisation de l'affichage des éléments du système
- Remplace les textes d'interface et les icônes intégrés d'avance au moteur du jeu (le lecteur).
- Seuls ceux dont l'ID correspond à un préréglage existant sont remplacés. Ajouter un préréglage dont l'ID ne correspond à aucun ID existant ne provoque pas d'erreur, mais cela n'a aucun effet sur l'affichage car rien ne s'y réfère.
- Seuls les champs que vous réglez sont remplacés. Si vous ne réglez que l'icône, par exemple, ce sont les originaux qui sont utilisés pour le nom, la couleur et les autres champs.
- L'écrasement du nom et de la description est prioritaire sur les traductions de chaque langue intégrées au lecteur. La chaîne que vous écrasez s'affiche telle quelle dans toutes les langues.
- Si vous voulez changer le texte selon la langue, indiquez-le dans le fichier de traduction `translations/world` produit lorsque la traduction est activée. C'est celui-là qui est le plus prioritaire.
___

## ID d'identification
L'ID unique qui identifie l'élément
- C'est l'ID qui identifie chaque élément de manière unique.
- C'est la chaîne de caractères qui permet à l'éditeur de distinguer cet élément.
- Par exemple, quel objet est obtenu à l'issue d'une action se désigne par l'ID.
- Les caractères utilisables sont une combinaison de lettres, de traits d'union et de chiffres, de 1 à 100 caractères.

!> Une fois le jeu distribué, ne changez pas un ID déjà réglé. Si vous le changez, il ne correspond plus aux données de jeu existantes et le jeu cesse de fonctionner correctement.
___

### Le nom affiché
Le nom d'affichage généré automatiquement à partir de l'ID
- Si aucun nom n'est réglé, les traits d'union sont remplacés par des espaces et chaque mot est converti avec une majuscule initiale et le reste en minuscules pour être affiché comme nom.
- Même si l'ID contient des majuscules, tout ce qui n'est pas l'initiale est converti en minuscules.
- Pour les langues autres que l'anglais, il faut régler le champ du nom séparément.
___

#### Exemple
Un exemple concret de conversion d'ID
- Si l'ID est `stylish-strong-axe`, le nom devient `Stylish Strong Axe`.
- Si l'ID est `stylish-STRONG-axe`, il devient également `Stylish Strong Axe`.
___

### Ne pas être en double
Interdiction de dupliquer un ID au sein d'un même type
- Comme il sert à distinguer les éléments, ne le dupliquez pas au sein de chacun des types : catégorie, action, objet, groupe, événement, compétence et préréglage.
- Les événements traitent les tâches, les événements de changement et les événements fixes ensemble comme un seul type : ne les dupliquez donc pas non plus entre eux.
- Le même ID dans des types différents ne pose aucun problème.
- Un monde comportant des doublons provoque une erreur lors de la validation.
- [_type_](fr/editor/type)
___

## Nom
Le nom affiché de l'élément
- C'est le nom de l'élément affiché dans le jeu.
- Vous pouvez aussi saisir des langues autres que l'anglais.
- Un nom identique à celui d'un autre élément ne pose pas de problème.
- Vous pouvez saisir jusqu'à 20 caractères.
- S'il n'entre pas dans la largeur d'affichage, la partie qui dépasse est abrégée par `…`.
___

### Conversion automatique à partir de l'ID
La fonction qui génère automatiquement le nom à partir de l'ID
- Laissé vide, il s'affiche automatiquement à partir de l'ID. Reportez-vous à la section précédente pour le détail.
___

## Texte de description
La description détaillée de l'élément
- C'est le texte de description de l'élément affiché dans le jeu.
- Vous pouvez aussi saisir des langues autres que l'anglais. Même un texte long s'affiche en entier.
- S'il n'y a pas de description, laissez vide.
___

## Icône
Le réglage de l'icône qui représente l'élément
- Comme icône, vous pouvez régler une image, Iconify ou un émoji.
- Iconify est un service qui fournit des icônes de toutes sortes.
- Si vous en réglez plusieurs, elles s'affichent par ordre de priorité : image, Iconify puis émoji.
___

### Image
Utiliser n'importe quel fichier image
- C'est l'image qui représente l'élément.
- À l'importation, elle est automatiquement réduite à 60×60 pixels au maximum et recompressée.
- Elle est inutile si vous avez réglé Iconify ou un émoji.
___

#### Types de fichier
Les formats de fichier image pris en charge
- Les formats courants que le navigateur peut afficher sont utilisables.
- JPEG, PNG, GIF, WebP, SVG, etc.
- Les GIF et les AVIF sont convertis en PNG. Les JPEG et les WebP sont réduits en conservant leur format d'origine.
- Le SVG est intégré tel quel, sans être réduit : évitez donc ceux de grande taille.
___

### Iconify
Utilisation des jeux d'icônes Iconify
- C'est l'icône qui représente l'élément.
- Si vous avez réglé une image, c'est elle qui s'affiche en priorité.
___

#### Comment chercher une icône
Comment choisir une icône sur Iconify
- Cherchez sur `Iconify` les icônes affichables.
- La recherche d'icônes vous fait trouver tout de suite l'icône la plus adaptée.
- Quand vous sélectionnez une icône, son identifiant, comme `game-icons:sword-wound` (le type de jeu d'icônes `:` le nom de l'icône), s'affiche : collez-le tel quel dans ce champ d'icône.
![iconify-selection.png](../../resources/iconify-selection.png)
- [_iconify_](https://icon-sets.iconify.design)
___

### Émoji
Afficher l'icône avec un émoji
- Affiche un émoji comme icône.
- Saisissez tel quel un émoji Unicode.
- Comme c'est l'émoji installé dans l'environnement d'exécution qui est utilisé, l'affichage diffère un peu selon l'utilisateur.
- Avec Iconify, vous pouvez régler des émojis qui ne dépendent pas de chaque environnement
- Vous pouvez afficher des caractères autres que des émojis, mais avec plusieurs caractères l'affichage risque de se casser.
- Par exemple, vous saisissez un émoji comme `🗡️` ou `⚔️`.
___

## Couleur
Le réglage de la couleur d'affichage de l'élément
- En tant que couleur de l'élément, elle s'applique à l'icône de l'élément et à sa couleur de fond.
- Elle se choisit dans le sélecteur de couleur de l'éditeur.
- Le noir (`#000000`) est traité comme la valeur signifiant « aucune couleur réglée ». La valeur initiale du sélecteur de couleur est également ce noir.
- Si vous voulez un rendu noir, indiquez une couleur légèrement décalée, comme `#010101`.
___

### Héritage depuis l'élément parent
La reprise du réglage de couleur de l'élément parent
- Les actions, objets et événements sans couleur réglée héritent de la couleur de la catégorie à laquelle ils appartiennent.
- La hiérarchie de l'héritage est la suivante.
- Pour un élément dont la couleur est réglée individuellement, cette couleur est prioritaire. Elle n'est pas écrasée même si la catégorie a une couleur.
- L'usage de base consiste à décider une couleur par catégorie et à laisser l'héritage faire pour ce qui est en dessous. On règle une couleur individuelle lorsqu'on veut faire ressortir un élément précis.
- Si un attribut (attribute) est réglé sur l'action, la couleur héritée n'est pas celle de la catégorie à laquelle elle appartient, mais celle de la catégorie indiquée dans l'attribut.
- La catégorie elle-même n'a personne dont hériter. Si la couleur de la catégorie reste le noir (`#000000`), cette catégorie et les éléments en dessous sans couleur réglée s'affichent dans la couleur intermédiaire entre la couleur de la barre et la couleur du texte du design.
- Les groupes, les compétences et les préréglages n'héritent pas et n'utilisent que la couleur réglée sur eux-mêmes.
```
world (basic.design)
└── category
    ├── action
    ├── item
    └── event
```
- [_type_](fr/editor/type)
___

## Copie des informations
Dupliquer les informations d'un autre élément
- Appuyer sur le bouton `Copy Information` copie d'un coup les informations d'un autre élément vers cet élément.
- Choisissez le type de la source de la copie (catégorie, action, objet, groupe, événement, compétence ou préréglage), puis saisissez son ID.
- Tous les champs, y compris l'ID d'identification, sont écrasés. Après la copie, changez l'ID d'identification pour un ID qui n'est pas en double.
- [_type_](fr/editor/type)