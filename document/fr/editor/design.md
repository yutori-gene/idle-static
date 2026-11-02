
# Design
Les réglages d'apparence du monde, comme les couleurs et la police
- Ce sont les réglages concernant l'affichage du monde.
- Les deux couleurs décidées ici (la couleur de barre et la couleur de texte) deviennent le fond de tout l'écran, et toutes les couleurs employées à l'écran, comme la ligne sélectionnée, l'en-tête d'un groupe et les couleurs d'affirmation et de négation, en sont issues.
- Seule l'image de fond peut être remplacée par catégorie et, dans ce cas, le réglage du côté de la catégorie est prioritaire.
___

## Couleur de barre
La couleur qui sert de fond à la barre
- Elle est utilisée comme couleur de fond de la barre.
- Comme c'est aussi la couleur qui sert de fond à tout l'écran, la couleur de la ligne sélectionnée en est issue également.
- Les échantillons de couleur des éléments sans couleur réglée et le fond des notifications toast deviennent la couleur intermédiaire entre cette couleur et la couleur de texte.
___

## Couleur de texte
La couleur du texte et du fond
- Elle est utilisée comme couleur du texte.
- Le dégradé du fond en est également issu. Si une image de fond est réglée, le même dégradé est éclairci et superposé à l'image.
- Prendre un grand écart de luminosité avec la couleur de barre rend le texte plus lisible. Dans les mondes où l'écart est faible, les échantillons de couleur des éléments sans couleur réglée deviennent eux aussi plus difficiles à distinguer.
___

## Couleur d'ombre
La couleur de l'ombre de la barre
- Elle est utilisée comme couleur de l'ombre portée sur les barres et l'en-tête.
- La mettre dans une couleur plus sombre que la couleur de barre donne une ombre naturelle.
___

## Image de fond
L'image de fond de tout le jeu
- Elle règle l'image de fond du jeu séparément pour les écrans horizontaux (ordinateur portable) et les écrans verticaux (mobile). Comme les proportions des écrans diffèrent beaucoup, on peut préparer une image adaptée à chaque forme.
- Celle qui est utilisée dépend de l'orientation de l'écran. Lorsqu'on fait pivoter l'appareil ou qu'on change la forme de la fenêtre, elle bascule sur-le-champ.
- Si le côté qui correspond à l'orientation de l'écran est vide, l'autre image est utilisée. Si les deux sont vides, le fond devient un dégradé fondé sur la couleur de texte.
- L'image est automatiquement réduite pour tenir dans 256×256 pixels. Les GIF et les AVIF sont convertis en PNG.
- Si une image de fond est réglée sur une catégorie, l'image du côté de la catégorie est prioritaire sur l'écran de cette catégorie. Le côté de la catégorie reste prioritaire même s'il n'a qu'une image qui ne correspond pas à l'orientation de l'écran.
- Chaque image réglée peut être supprimée avec le bouton Delete Image placé juste après elle.
- [_category_](fr/editor/category)
___

### Ordinateur portable
L'image de fond de tout le jeu utilisée sur les écrans horizontaux
- Elle est utilisée lorsque l'écran est plus large que haut. Cela concerne les ordinateurs et les tablettes tenues à l'horizontale.
___

### Mobile
L'image de fond de tout le jeu utilisée sur les écrans verticaux
- Elle est utilisée lorsque l'écran est aussi haut que large ou plus haut. Cela concerne les smartphones et les tablettes tenues à la verticale.