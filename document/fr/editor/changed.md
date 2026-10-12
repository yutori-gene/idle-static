
# Événement de changement
Un événement de traitement interne qui se déclenche lorsque la quantité d'une catégorie, d'une action ou d'un objet augmente d'un coup de la quantité des conditions ou plus
- Il est vérifié à tous les moments où une quantité change : achèvement d'une action, achat ou vente, ouverture d'un coffre au trésor, etc.
- Les conditions (requirements) sont jugées d'après l'ampleur de l'augmentation en ce seul moment, et non d'après une valeur absolue comme la quantité possédée. De petites augmentations réparties en plusieurs fois ne s'additionnent pas.
- Si vous réglez par exemple la condition d'un objet sur 3, elle est remplie dès que cet objet augmente de 3 ou plus en une seule fois. Une diminution ne compte pas comme une augmentation.
- Si vous réglez plusieurs conditions, elles doivent toutes être remplies en même temps lors de ce seul changement. Un événement de changement sans aucune condition réglée ne se déclenche pas.
- Régler la valeur d'une condition sur `0` la fait compter comme remplie même sans augmentation, si bien qu'il se déclenche chaque fois qu'une quantité change.
- La probabilité de consommation (chance) et l'équipement (equipment) des conditions ne sont pas regardés. Le jugement n'utilise que l'ampleur de l'augmentation, et les éléments utilisés dans les conditions ne diminuent pas non plus.
- La récompense est reçue automatiquement chaque fois que les conditions sont remplies, et il se déclenche encore et encore, autant de fois qu'il le faut. Contrairement à une tâche, ce n'est pas une seule fois et aucune manipulation n'est nécessaire pour la recevoir. Une quantité négative peut aussi être réglée.
- Contrairement à une tâche ou à un achat, la limite du nombre de sortes d'objets que vous pouvez détenir n'est pas vérifiée, si bien que de nouveaux objets peuvent s'ajouter au-delà de la capacité.
- Une augmentation venant d'une récompense est elle aussi traitée comme un changement : lorsque la récompense d'un événement de changement remplit les conditions d'un autre événement de changement, celui-ci se déclenche à la suite.
- Il ne s'affiche pas du tout à l'écran du lecteur. Il n'apparaît pas dans la liste des missions et aucun message d'accomplissement ne s'affiche.

!> Ne réglez pas la récompense d'un événement de changement de façon qu'elle remplisse ses propres conditions. Il ne cesserait plus de se déclencher et le jeu s'arrêterait. Par exemple, un événement dont les conditions sont remplies quand l'objet A augmente d'une unité et dont la récompense remet une unité de l'objet A.
- [_unique_](fr/editor/unique)
___

## [_Informations_](fr/editor/information)
___

## Catégorie
L'ID de la catégorie à laquelle l'événement de changement appartient (il ne sert qu'au classement, car rien ne s'affiche à l'écran)
- Comme rien ne s'affiche à l'écran du lecteur, ce réglage n'a aucun effet sur l'aspect.
___

## Moment
Le moment où l'événement de changement se déclenche (fixé à `changed`)
- Il est fixé à `changed` et n'est pas modifiable.
- Il est vérifié à tous les moments où une quantité change, et se déclenche de nouveau chaque fois que les conditions sont remplies.
___

## État d'affichage initial
Il n'a pratiquement aucun effet, car rien ne s'affiche à l'écran
- Un événement de changement ne s'affiche pas à l'écran du lecteur, donc ce réglage n'est pas utilisé.
___

## [_Condition_](fr/editor/requirement)
___

## Cumul par groupe
Traite l'id des conditions comme un ID de groupe et juge d'après le total des augmentations des éléments qui lui appartiennent
- Une fois activé, l'id que vous réglez dans les conditions (requirements) est traité comme l'ID d'un groupe placé directement sous le monde.
- Les augmentations de toutes les catégories, de toutes les actions et de tous les objets qui appartiennent à ce groupe sont additionnées pour le jugement.
- Contrairement au cumul par groupe d'une tâche, l'augmentation d'un élément qui n'est pas encore déverrouillé est elle aussi comptée dans le total.
- Une fois désactivé, l'id des conditions est traité comme l'ID d'une catégorie, d'une action ou d'un objet particuliers, comme auparavant.
- [_group_](fr/editor/group)
___

## [_Obtention_](fr/editor/acquisition)
___

## Groupe d'événements de changement
Le classement en groupe d'affichage pour la gestion interne (pratiquement inutilisé, car rien ne s'affiche à l'écran)
- Un événement de changement ne s'affiche pas à l'écran du lecteur, donc ce réglage n'a aucun effet sur l'aspect.