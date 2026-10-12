
# Objet
Éléments de biens tels que les équipements et les consommables
- Ce sont les éléments qui concernent la possession de choses : équipements, consommables, objets de valeur, etc.
- Des emplacements d'équipement sont créés par groupe pour chaque catégorie, et un seul des objets d'un même emplacement peut être équipé. On peut aussi faire un objet impossible à équiper.
- Comme la quantité possédée constitue elle-même la progression, un objet peut aussi servir de drapeau ou de compteur. Si vous en faites un objet sans effet et impossible à équiper, il devient un élément qui ne fait que compter un nombre.
___

## [_Informations_](fr/editor/information)
___

## Catégorie
L'ID de la catégorie à laquelle l'objet appartient
- Indiquez l'ID de la catégorie à laquelle cet objet appartient. Il s'aligne dans la liste des objets de la catégorie indiquée, et les emplacements d'équipement sont eux aussi créés par catégorie.
- Si aucune couleur n'est réglée sur l'objet lui-même, il hérite de la couleur de la catégorie.
- La cible sur laquelle portent les effets des propriétés peut être indiquée indépendamment de la catégorie d'appartenance : un objet d'une autre catégorie peut donc lui aussi produire un effet.
- [_category_](fr/editor/category)
- [_property_](fr/editor/property)
___

## Groupe
Le classement en groupe d'affichage de l'objet
- Appliquez l'un de ceux définis dans les groupes placés directement sous le monde.
- La liste des objets s'affiche dans l'ordre des groupes que vous réglez.
- Laissé vide, il n'est pas réparti en groupes.
- [_group_](fr/editor/group)
___

## État de déverrouillage initial
L'état initial d'affichage et de déverrouillage de l'élément (il passe automatiquement à un état supérieur lorsque les conditions de déclenchement sont remplies)
- secreted : Il n'apparaît pas du tout dans l'interface tant que tous les requirements ne sont pas remplis (il ne sort pas non plus dans les indices et il est masqué dans les listes de conditions et de récompenses).
- hidden : Tant qu'aucun élément déverrouillé ne s'y réfère et que ses conditions ne sont pas remplies, il est complètement caché (le nom est grisé et il est inutilisable).
- hinted (par défaut) : Seul le nom s'affiche par avance, mais il est inutilisable jusqu'à son déverrouillage.
- released : Il est déverrouillé et utilisable dès le début, indépendamment des conditions (autrefois « afficher dès le début »).
- Dès qu'un objet a été obtenu ne serait-ce qu'une fois, il reste déverrouillé indépendamment de ce réglage et des conditions.
- À l'inverse, un objet sans aucune condition réglée n'est pas déverrouillé tant qu'il n'est pas obtenu, à moins de le mettre sur `released`. Réglez toujours des conditions sur les objets que vous voulez faire acheter.
___

## Prix d'achat [Pièces]
Le réglage du prix d'achat de l'objet
- C'est la quantité de monnaie payée pour acheter une unité de l'objet. La valeur par défaut est `-1` (achat impossible).
- Un objet qui n'est pas déverrouillé ne peut pas être acheté, même si un prix est réglé.
- La quantité achetable en une fois est la plus petite entre celle que permet la monnaie possédée et ce qui reste jusqu'à la quantité maximale possédée.

|Prix d'achat|Traitement|
|-|-|
|0|Achat impossible|
|Une valeur supérieure à 0|Le prix auquel il peut être acheté|
|Une valeur inférieure à 0 (par exemple -1)|Achat impossible (traité comme 0)|
___

## Prix de vente [Pièces]
Le réglage du prix de vente de l'objet
- C'est la quantité de monnaie reçue en vendant une unité de l'objet. La valeur par défaut est `0` (vente impossible).
- La monnaie reçue est celle indiquée par l'ID de monnaie de commerce, la même qu'à l'achat.
- Il ne se déduit jamais automatiquement du prix d'achat : réglez donc toujours une valeur si vous voulez qu'il soit vendable.
- Les valeurs négatives ne peuvent pas être réglées.

|Prix de vente|Traitement|
|-|-|
|0|Vente impossible|
|Une valeur supérieure à 0|Il peut être vendu à ce prix|
___

## Quantité maximale possédée [Unités]
La limite de la quantité maximale possédée de l'objet
- À 0, la quantité possible n'a pas de limite. La valeur par défaut est `0`.
- À 1 ou plus, on ne peut en posséder que jusqu'à ce nombre. Une fois la limite atteinte, la quantité possédée n'augmente plus, même si l'on en obtient davantage.
- Cela devient aussi la limite de la quantité achetable.
- Si la quantité possédée dans la sauvegarde dépasse la limite, elle est ramenée à la limite au chargement.
___

## Type d'équipement
Le réglage de type concernant l'équipement, l'effet et la consommation de l'objet
- Pour les objets `necessary` et `consumable`, leur groupe devient automatiquement un emplacement d'équipement de la catégorie.
- Au sein d'un même groupe, un seul objet peut être équipé. Lorsque vous équipez un nouvel objet, l'équipement existant du même groupe est retiré automatiquement.
- L'ordre des emplacements d'équipement suit l'ordre de définition de la liste des groupes du monde.
- `unnecessary` produit son effet qu'il soit équipé ou non, et l'ampleur de l'effet est proportionnelle à la quantité possédée (aucun effet à 0, n fois avec n unités).
- `consumable` n'est consommé que lorsque les propriétés de cet objet portent sur l'action exécutée, à raison d'une unité par action. Il ne diminue pas pour les actions que son effet n'atteint pas.
- Un objet consommé jusqu'à 0 est automatiquement déséquipé.
- Pour l'équiper, il faut remplir à la fois les conditions de cet objet et celles de la catégorie.

|Valeur|Équipement|Production de l'effet|Consommation|Exemple|
|-|-|-|-|-|
|`necessary`|Nécessaire|Seulement une fois équipé (pour une unité)|Non|Équipements tels que les épées et les armures|
|`consumable`|Nécessaire|Seulement une fois équipé (pour une unité)|Consommé à l'exécution de l'action|Objets consommés pour obtenir un effet, comme les potions|
|`unnecessary`|Inutile|Toujours tant qu'il est possédé (proportionnel à la quantité possédée)|Non|Objets passifs qui produisent un effet du simple fait d'être détenus|
|`impossible`|Impossible|Aucun|Non|Objets sans effet, comme les matériaux et les bricoles|
___

## [_Condition_](fr/editor/requirement)
___

## [_Propriété_](fr/editor/property)
___

## ID de monnaie de commerce
L'ID de la monnaie utilisée pour le commerce de cet objet
- Indiquez l'ID de la monnaie (coins) utilisée en commun pour le prix d'achat et le prix de vente.
- Laissé vide, ou si vous indiquez un ID absent de la liste des monnaies, c'est la monnaie principale (la première de coins) qui est utilisée.
___

## [_Compétence_](fr/editor/skill)