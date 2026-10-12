
# Obtention
Le réglage de l'obtention d'objets et de niveaux de catégorie
- Réglez ce qui est obtenu.
- Outre les objets, vous pouvez modifier le niveau d'une catégorie et le nombre d'exécutions d'une action.
- Vous pouvez régler la probabilité de l'obtenir.

|Type|Ce qui est obtenu|
|-|-|
|Catégorie|Niveau|
|Action|Nombre d'exécutions|
|Objet|Quantité possédée|
- [_type_](fr/editor/type)
___

## Type
Le type d'élément obtenu

|Type|Ce qui est obtenu|
|-|-|
|Catégorie|Niveau (la valeur réglée est ajoutée telle quelle)|
|Action|Nombre d'exécutions|
|Objet|Quantité possédée|
___

## L'ID de l'élément
L'ID qui identifie l'élément à obtenir
___

## Valeur
La quantité obtenue
- Si vous réglez une valeur négative, la quantité possédée, le nombre d'exécutions ou le niveau diminuent. Cela dit, ils ne descendent jamais en dessous de 0.
- Si une quantité maximale possédée (maximum) est réglée sur l'objet, la quantité possédée n'augmente pas au-delà de cette valeur.
- Si le type est une catégorie, la valeur réglée est ajoutée telle quelle au niveau (1 pour un niveau). La méthode habituelle est de l'ajuster par le réglage d'expérience de l'action. À moins d'un objectif particulier, ce réglage est inutile.
- Le niveau d'une catégorie ne descend jamais en dessous de 0 et ne dépasse jamais `maxCategoryLevels` de général (le niveau maximal de catégorie).
- La valeur se règle en nombre entier.
___

## Probabilité [-1 à 1]
La probabilité que l'obtention réussisse (une valeur négative n'est évaluée qu'en cas d'échec)
- Réglez la probabilité de l'obtenir par un décimal de -1 à 1. La valeur absolue sert à juger la probabilité.
- Lorsque la valeur est positive, elle n'est évaluée qu'en cas de réussite de l'action : avec `1` on l'obtient à coup sûr et avec `0.5` on l'obtient avec une probabilité de 50%.
- Lorsque la valeur est négative, elle n'est évaluée qu'en cas d'échec de l'action : avec `-1` on l'obtient à coup sûr et avec `-0.5` on l'obtient avec une probabilité de 50%.
- Avec `0`, on ne l'obtient ni en cas de réussite ni en cas d'échec.
- La valeur par défaut est `1` (obtenu à coup sûr en cas de réussite).