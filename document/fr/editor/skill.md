
# Compétence
Un effet spécial tiré au sort à chaque tour du combat et qui se déclenche
- C'est un effet spécial tiré au sort à chaque tour et qui se déclenche dans une action de combat (`stamina`). Il ne se déclenche pas dans les actions des autres types.
- Son contenu se définit ici, et il est appelé par ID depuis `skill` d'un objet (votre camp) et `skills` d'une action (le camp de l'adversaire).
- Les candidates de votre camp sont les compétences appelées par les objets qui produisent leur effet à ce moment-là (`unnecessary` tant qu'il est possédé, `necessary` et `consumable` tant qu'ils sont équipés). Si vous retirez un équipement, sa compétence sort aussi des candidates.
- À chaque tour, les candidates sont mélangées pour votre camp et pour celui de l'adversaire, la probabilité de déclenchement est jugée depuis la première, et seule la première qui aboutit se déclenche. Si aucune n'aboutit, il n'y a pas de compétence pour ce tour.
- Lorsque la même compétence est appelée depuis plusieurs objets ou actions, elle gagne autant d'occasions dans le tirage et se déclenche donc plus facilement.
- [_item_](fr/editor/item)
- [_action_](fr/editor/action)
___

## [_Informations_](fr/editor/information)
___

## Probabilité de déclenchement [0-1]
La probabilité que cette compétence se déclenche à ce tour
- À chaque tour, on juge avec cette probabilité si elle se déclenche. À `1` elle aboutit à coup sûr, à `0` elle ne se déclenche pas. La valeur par défaut est `1`.
- Le jugement avance dans l'ordre depuis la première des candidates mélangées, et seule la première compétence qui aboutit se déclenche. C'est pourquoi, lorsqu'il y a plusieurs candidates, la proportion réelle de déclenchement est inférieure à cette valeur.
- Si l'affichage de la description est activé, cette valeur influe aussi sur la fréquence d'apparition de la description. Plus une compétence se déclenche facilement, moins sa description se répète.
___

## [_Valeurs de combat_](fr/editor/combat)
___

## Affichage de la description
Afficher ou non la description dans une notification toast au déclenchement
- C'est l'indicateur qui détermine si la description s'affiche dans une notification toast lorsque cette compétence se déclenche.
- Si c'est activé, elle s'affiche à chaque déclenchement avec une probabilité de (100% − la probabilité de déclenchement) ÷ 2. Si la probabilité de déclenchement est de 40%, cela fait 30%.
- Si c'est désactivé, elle ne s'affiche pas.
- Si la description est vide, elle ne s'affiche pas même si vous activez l'option.