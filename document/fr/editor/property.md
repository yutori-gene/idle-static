
# Propriété
Le réglage des effets que porte un objet
- Ce sont les champs d'effet que vous pouvez régler sur un objet.
- Les objets dont le type d'équipement est `necessary` ou `consumable` n'appliquent leur effet que pendant qu'ils sont équipés. `unnecessary` applique son effet du simple fait d'être possédé, et l'ampleur de l'effet est proportionnelle à la quantité possédée (le double si vous en possédez 2).
- Comme la quantité possédée sert directement de multiplicateur à l'effet d'`unnecessary`, `maximum` (la quantité maximale possédée) devient le plafond de l'effet. Lorsque vous équilibrez, réglez-le en même temps que `maximum`.
- La valeur de chacun des champs est calculée comme un ajustement de l'écart de niveau entre le niveau du joueur et le niveau de l'action.
- Par exemple, si la valeur d'attaque est de 10, l'attaque est calculée comme si le niveau du joueur était supérieur de 10 au niveau de l'action. Une valeur négative fait l'inverse.
- L'influence de l'écart de niveau est décidée par `propertyRatio` de général (2 par défaut), et elle change de ce multiplicateur tous les 10 points d'écart de niveau.
- Lorsque `numeric` de la catégorie est désactivé, l'écart de niveau réel est traité comme 0, si bien que la valeur réglée ici devient telle quelle l'écart de niveau.
- Les champs qui agissent par division, comme le temps requis et les dégâts subis, plafonnent à 100 fois (jusqu'à un centième pour le temps requis).
- Pour les objets qui doivent être équipés, seul celui qui est équipé dans chaque groupe d'équipement produit son effet.
- Un objet dont la quantité possédée est 0 ne produit aucun effet, quel que soit son type d'équipement.
- attack, defence, accuracy, evasion et restore ne fonctionnent que sur les actions de type `stamina`.

|Propriété|Détail de l'effet|
|-|-|
|speed|Raccourcit le temps requis de l'action. Le temps requis varie en proportion inverse de l'écart de niveau (le multiplicateur agit de moitié).|
|chance|Modifie la probabilité de réussite de l'action. Le multiplicateur s'applique au rapport entre réussite et échec, si bien qu'elle ne dépasse jamais `100`%.|
|experience|Modifie l'expérience obtenue. Elle augmente proportionnellement à l'écart de niveau (le calcul est inversé : plus le niveau de l'action est élevé, plus on en obtient).|
|attack|Modifie les dégâts d'endurance infligés à l'adversaire. (actions stamina uniquement)|
|defence|Réduit les dégâts d'endurance subis de la part de l'adversaire (le multiplicateur agit de moitié). (actions stamina uniquement)|
|accuracy|Abaisse le taux d'échec de l'attaque. (actions stamina uniquement)|
|evasion|Modifie le taux d'esquive de l'attaque de l'adversaire (le multiplicateur agit de moitié). (actions stamina uniquement)|
|restore|Modifie la quantité d'endurance récupérée à la fin de l'action. Plus on approche du maximum, plus la progression ralentit. (actions stamina uniquement)|
___

## Catégorie
La catégorie à laquelle la propriété s'applique
- Réglez l'ID de la catégorie à laquelle cette propriété s'applique.
- Régler `*` l'applique à toutes les catégories.
- Laissé vide, il s'applique à la catégorie à laquelle appartient l'objet.
- Si vous réglez l'ID d'une autre catégorie, l'effet porte sur les actions de cette catégorie. Peu importe dans quelle catégorie se trouve l'objet lui-même.
___

## Attaque [Écart de niveau]
La correction des dégâts d'endurance infligés à l'adversaire (fonctionne uniquement sur les actions stamina)
- Les dégâts d'attaque sont calculés comme si le niveau du joueur était supérieur au niveau de l'action de cette valeur.
___

## Défense [Écart de niveau]
La correction des dégâts d'endurance subis de la part de l'adversaire (fonctionne uniquement sur les actions stamina)
- Les dégâts subis sont calculés comme si le niveau du joueur était supérieur au niveau de l'action de cette valeur. Plus la valeur est élevée, plus les dégâts subis sont réduits.
___

## Précision [Écart de niveau]
La correction du taux d'échec de l'attaque (fonctionne uniquement sur les actions stamina)
- Le taux d'échec est calculé comme si le niveau du joueur était supérieur au niveau de l'action de cette valeur. Plus la valeur est élevée, plus le taux d'échec baisse.
___

## Esquive [Écart de niveau]
La correction du taux d'esquive de l'attaque de l'adversaire (fonctionne uniquement sur les actions stamina)
- Le taux d'esquive est calculé comme si le niveau du joueur était supérieur au niveau de l'action de cette valeur. Plus la valeur est élevée, plus il est facile d'esquiver l'attaque de l'adversaire.
___

## Récupération [Écart de niveau]
La correction de la quantité d'endurance récupérée (fonctionne uniquement sur les actions stamina)
- La quantité d'endurance récupérée est calculée comme si le niveau du joueur était supérieur au niveau de l'action de cette valeur.
___

## Vitesse [Écart de niveau]
La correction du temps requis de l'action
- Le temps requis est calculé comme si le niveau du joueur était supérieur au niveau de l'action de cette valeur. Plus la valeur est élevée, plus le temps requis est raccourci.
___

## Taux de réussite [Écart de niveau]
La correction de la probabilité de réussite de l'action
- La probabilité de réussite de l'action est calculée comme si le niveau du joueur était supérieur au niveau de l'action de cette valeur. Plus la valeur est élevée, plus la probabilité de réussite augmente.
___

## Expérience [Écart de niveau]
La correction de l'expérience obtenue
- L'expérience est calculée comme si le niveau du joueur était inférieur au niveau de l'action de cette valeur (le calcul étant inversé, plus le niveau de l'action est élevé, plus on obtient d'expérience).