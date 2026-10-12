
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
- Elle règle l'image de fond du jeu.
- Si aucune image n'est réglée, le fond devient un dégradé fondé sur la couleur de texte.
- L'image est automatiquement réduite pour tenir dans 256×256 pixels. Les GIF et les AVIF sont convertis en PNG.
- Si une image de fond est réglée sur une catégorie, l'image du côté de la catégorie est prioritaire sur l'écran de cette catégorie.
- L'image réglée peut être supprimée avec le bouton Delete Image.
- [_category_](fr/editor/category)