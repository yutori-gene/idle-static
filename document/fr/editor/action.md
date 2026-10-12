
# Action
Les éléments de comportement comme la récolte, la fabrication et le combat
- C'est un élément qui représente un comportement comme la récolte, la fabrication, le commerce ou le combat.
- Chaque fois que vous agissez, vous gagnez de l'expérience et votre niveau monte.
- Vous pouvez la régler pour qu'elle consomme ou fasse obtenir des objets à chaque fois que vous agissez.
- Il existe plusieurs sortes de schémas de comportement.
___

## [_Informations_](fr/editor/information)
___

## Catégorie
L'ID de la catégorie à laquelle l'action appartient
- Indiquez l'ID de la catégorie à laquelle cette action appartient.
___

## Attribut
La catégorie d'attribut propre à l'action
- Vous pouvez régler un attribut (catégorie) individuel.
- S'il est vide, la catégorie à laquelle elle appartient est héritée.
- Par exemple, si vous réglez individuellement l'attribut de magie sur une action qui appartient à une catégorie appelée Château du Roi Démon, le niveau et les propriétés de la catégorie de magie sont calculés et appliqués au temps d'achèvement et aux dégâts de l'action.
- L'expérience en cas de réussite va elle aussi dans la catégorie réglée dans l'attribut, et non dans la catégorie à laquelle elle appartient.
- Si aucune couleur n'est réglée sur l'action elle-même, les couleurs de l'icône et du fond héritent de la couleur de la catégorie réglée dans l'attribut, et non de celle de la catégorie à laquelle elle appartient.
- [_category_](fr/editor/category)
___

## Groupe
La classification par groupe d'affichage de l'action
- Appliquez l'un de ceux définis dans les groupes placés directement sous le monde.
- La liste des actions s'affiche dans l'ordre des groupes que vous avez réglés.
- [_group_](fr/editor/group)
___

## État de déverrouillage initial
L'état initial d'affichage et de déverrouillage de l'élément (il passe automatiquement à un état supérieur lorsque les conditions de déclenchement sont remplies)
- secreted : Il n'apparaît pas du tout dans l'interface tant que tous les requirements ne sont pas remplis (il ne sort pas non plus dans les indices et il est masqué dans les listes de conditions et de récompenses).
- hidden : Tant qu'aucun élément déverrouillé ne s'y réfère et que ses conditions ne sont pas remplies, il est complètement caché (le nom est grisé et il est inutilisable).
- hinted (par défaut) : Seul le nom s'affiche par avance, mais il est inutilisable jusqu'à son déverrouillage.
- released : Il est déverrouillé et utilisable dès le début, indépendamment des conditions (autrefois « afficher dès le début »).
___

## Niveau
Le niveau de difficulté de l'action
- La difficulté de l'action est exprimée par un niveau.
- À l'exécution, elle est comparée au niveau du joueur et chaque propriété est calculée.
- Le terme de comparaison est le niveau de la catégorie réglée dans l'attribut.
- Par exemple, si vous exécutez une action plus élevée que votre propre niveau, il y a des effets comme la baisse du taux de réussite.
- Tant que les conditions sont remplies, elle peut être exécutée même si le niveau du joueur est inférieur à cette valeur.
- Toutefois, si `actionLevelLimit` de général (la limite de niveau des actions) est activé, cette valeur est ajoutée automatiquement comme condition sur le niveau de la catégorie, si bien qu'elle ne peut pas être exécutée tant que le niveau n'est pas atteint. Pour les catégories qui n'ont pas de niveau, elle n'est pas ajoutée.
- [_property_](fr/editor/property)
___

## [_Condition_](fr/editor/requirement)
___

## Temps requis [Secondes]
Le temps standard que prend l'exécution de l'action
- C'est le temps standard (en secondes) nécessaire pour effectuer l'action une fois.
- Pour le type `stamina`, c'est l'intervalle de temps que prend un tour (entamer une fois l'endurance de chaque côté). Les tours qui récupèrent l'endurance après le dénouement utilisent le même intervalle.
- Il varie à l'exécution réelle par le calcul des propriétés.
- [_property_](fr/editor/property)
___

## Expérience [100 pour le niveau suivant]
L'expérience obtenue lorsque l'action réussit
- C'est l'expérience standard obtenue lorsque l'action est exécutée une fois et réussit. 100 correspond à l'expérience d'un niveau.
- Dans le cas d'un combat, elle est obtenue en battant l'adversaire, il est donc bon de la régler généreusement.
- Elle varie à l'exécution réelle par le calcul des propriétés.
- [_property_](fr/editor/property)
___

## Taux de réussite [0-1]
La probabilité de réussite à l'achèvement de l'action
- C'est la probabilité de réussir lorsque l'action s'achève.
- Avec `1` elle réussit toujours, et avec `0` elle échoue toujours.
- En cas d'échec aussi, les objets consommés sont consommés, mais l'expérience et le nombre d'exécutions n'augmentent pas.
- Parmi les récompenses, seules celles dont la probabilité (chance) est réglée sur une valeur positive sont obtenues en cas de réussite. Celles réglées sur une valeur négative ne sont obtenues qu'en cas d'échec, si bien qu'échouer ne veut pas forcément dire ne rien obtenir.
- Elle varie à l'exécution réelle par le calcul des propriétés.
___

## Nombre maximal d'exécutions [Fois]
Le nombre maximal de fois où l'action peut s'achever
- C'est la limite supérieure du nombre de fois où l'action peut réussir et s'achever.
- Avec `0` c'est illimité.
- Une fois la limite supérieure atteinte, l'action devient inexécutable.
___

## [_Obtention_](fr/editor/acquisition)
___

## Type d'avancement
Le type d'exécution de l'action
- Il existe quatre sortes.

|Type|Comportement|Endurance|Exemple|
|-|-|-|-|
|`persistent`|C'est un type où l'action est exécutée de façon répétée et continue. Chaque fois qu'elle s'achève une fois, vous obtenez de l'expérience et une récompense.|Sans rapport|Abattage, extraction minière, pêche|
|`single`|Elle exécute l'action une fois. Si elle est interrompue en cours de route, l'avancement est enregistré et vous pouvez reprendre la suite la fois suivante. À l'achèvement, l'utilisateur appuie sur l'action de confirmation et reçoit le résultat.|Sans rapport|Crochetage d'un coffre au trésor, apprentissage d'une compétence par la lecture|
|`snap`|C'est un type où l'action est exécutée instantanément. Elle s'achève tout de suite, sans écoulement du temps.|Sans rapport|Troc, utilisation d'un objet|
|`stamina`|À chaque temps requis, l'endurance du joueur et celle de l'adversaire diminuent chacune. Quand l'endurance de l'adversaire est épuisée, vous obtenez de l'expérience et une récompense. Quand l'endurance du joueur est épuisée, c'est une fin de partie et toutes les actions en cours d'exécution sont annulées.|Avec rapport|Combat, travail comportant un danger|
___

## [_Valeurs de combat_](fr/editor/combat)
___

## [_Compétence_](fr/editor/skill)