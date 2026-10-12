
# Catégorie
Le grand cadre qui classe les actions et les objets
- Elle représente une grande classification.
- Par exemple, vous pouvez la régler comme un cadre libre : courte portée, longue portée, magie, donjon, forge, atelier et ainsi de suite.
- Les actions et les objets sont placés directement sous le monde et sont reliés par l'ID de catégorie.
___

## [_Informations_](fr/editor/information)
___

## Groupe
La classification par groupe d'affichage de la catégorie
- Appliquez l'un de ceux définis dans les groupes placés directement sous le monde.
- La liste des catégories s'affiche dans l'ordre des groupes que vous avez réglés.
- [_group_](fr/editor/group)
___

## État de déverrouillage initial
L'état initial d'affichage et de déverrouillage de l'élément (il passe automatiquement à un état supérieur lorsque les conditions de déclenchement sont remplies)
- secreted : Il n'apparaît pas du tout dans l'interface tant que tous les requirements ne sont pas remplis (il ne sort pas non plus dans les indices et il est masqué dans les listes de conditions et de récompenses).
- hidden : Tant qu'aucun élément déverrouillé ne s'y réfère et que ses conditions ne sont pas remplies, il est complètement caché (le nom est grisé et il est inutilisable).
- hinted (par défaut) : Seul le nom s'affiche par avance, mais il est inutilisable jusqu'à son déverrouillage.
- released : Il est déverrouillé et utilisable dès le début, indépendamment des conditions (autrefois « afficher dès le début »).
___

## [_Condition_](fr/editor/requirement)
___

## Présence d'un niveau
La présence de la fonction de niveau de catégorie
- C'est le drapeau indiquant si cette catégorie possède un niveau ou non.
- S'il est activé, elle possède un niveau, et s'il est désactivé, elle n'en possède pas.
- À titre d'exemple, il y a un usage où les catégories fondées sur l'expérience, comme l'escrime ou la magie, sont activées, et les catégories de lieux, comme les donjons ou les forges, sont désactivées.
- S'il est désactivé, aucune expérience n'entre et, dans le calcul des propriétés, l'écart de niveau entre le joueur et l'action est traité comme 0. La correction des propriétés par l'équipement agit toujours de la même façon.
- Une catégorie désactivée est aussi exclue du jugement d'achèvement (completed).
___

## Avancement simultané
Le réglage d'exécution en parallèle avec d'autres catégories
- C'est le drapeau indiquant si les actions de cette catégorie peuvent avancer en parallèle avec les actions d'autres catégories.
- S'il est activé, elles peuvent avancer en même temps, indépendamment des actions d'autres catégories.
- S'il est désactivé, une seule action peut avancer sur l'ensemble des catégories également réglées sur désactivé.
- Si vous démarrez une nouvelle action dans une catégorie désactivée, l'action en cours n'est pas annulée mais repoussée en tête de la file d'attente. Le nombre d'exécutions restant est conservé et, une fois l'action qui s'est intercalée terminée, elle reprend là où elle s'était arrêtée.
___

## Fond
Le réglage de fond propre à la catégorie
- Il règle le fond de cette catégorie.
- Lorsque la catégorie est sélectionnée, l'image de fond change de concert.
- S'il n'est pas réglé, le fond du design est utilisé tel quel.
- Elle est automatiquement réduite pour tenir dans 256×256 pixels lors de son importation.