
# Condition
Le réglage des conditions nécessaires pour utiliser ou afficher un élément
- Ce sont les conditions que l'on règle sur chacun des éléments : catégorie, action, objet et événement.
- Si toutes les conditions réglées ne sont pas remplies, l'opération indiquée dans le tableau est impossible.
- Selon le réglage de déverrouillage (unlocked) de l'élément, l'élément lui-même ne s'affiche pas à l'écran tant que les conditions ne sont pas remplies.

|Où c'est réglé|Ce qui est impossible tant que les conditions ne sont pas remplies|
|-|-|
|Catégorie|Exécuter toutes les actions de la catégorie et manipuler ses objets|
|Action|Exécuter l'action|
|Objet|Manipuler l'objet (l'équiper, etc.)|
|Événement|Accomplir une tâche, déclencher un événement de changement ou un événement fixe|
- [_type_](fr/editor/type)
___

## Type
Le type d'élément consulté comme condition

|Type|La valeur consultée|
|-|-|
|Catégorie|Le niveau de la catégorie|
|Action|Le nombre d'exécutions de l'action|
|Objet|La quantité de l'objet possédée|
___

## L'ID de l'élément
L'ID de l'élément consulté comme condition
- Réglez l'ID de la catégorie, de l'action ou de l'objet consulté comme condition.
- Si le décompte par groupe (requiringGroup) est activé sur un événement, il est traité comme l'ID d'un groupe et non d'un élément individuel.
___

## Valeur
La quantité dont la condition a besoin
- La condition est remplie lorsque la valeur indiquée est atteinte ou dépassée.
- Elle se règle en nombre entier supérieur ou égal à 0. La valeur par défaut est `1`.
___

## Probabilité de consommation [0-1]
La probabilité que l'objet soit consommé (de 0 à 1, ne fonctionne que si le type est un objet)
- C'est la probabilité de consommer l'objet lorsque les conditions sont remplies et que l'action est exécutée.
- Avec `1` il est consommé à coup sûr, avec `0.5` il est consommé avec une probabilité de 50% et avec `0` il n'est pas consommé.
- La valeur par défaut est `1` (consommé à coup sûr). Cependant, dans les conditions d'un événement (tâche, événement de changement ou événement fixe), la valeur par défaut est `0` (non consommé), afin que ce que vous détenez ne diminue pas quand vous l'accomplissez.
- Avec `0`, le stock n'est pas réduit : vous pouvez donc exécuter l'action autant de fois que vous voulez tant que la quantité possédée atteint la valeur de la condition. Utilisez-le lorsque vous voulez que la condition soit seulement d'avoir l'objet équipé.
- Cela ne fonctionne pas si le type n'est pas un objet.
___

## Équipement
Exiger ou non que l'objet soit équipé comme condition (ne fonctionne que si le type est un objet)
- Une fois activé, la condition exige non seulement de posséder l'objet, mais aussi de l'avoir équipé.
- L'état équipé ou non est jugé d'après l'équipement de la catégorie à laquelle appartient l'objet.
- Cela ne fonctionne pas si le type n'est pas un objet.