
# Valeurs de combat
Le réglage des corrections de combat pour les actions de type stamina
- Ce sont des valeurs de correction qui ne fonctionnent que sur les actions de type `stamina`.
- Chaque valeur est calculée comme une correction supplémentaire de l'écart de niveau entre le joueur et l'action.
- Par exemple, si la valeur d'attaque est de 10, les dégâts d'attaque sont calculés comme si le niveau du joueur était supérieur de 10 au niveau de l'action. Si elle est négative, c'est une correction en sens inverse.
- Selon l'endroit où vous la réglez, la valeur est celle du côté du joueur ou celle du côté de l'adversaire.
- Les valeurs du côté de l'adversaire agissent en annulant le champ opposé qui leur correspond. La défense de l'adversaire annule l'attaque du joueur, l'attaque de l'adversaire annule la défense du joueur, l'esquive de l'adversaire annule la précision du joueur et la précision de l'adversaire annule l'esquive du joueur.
- Seule la récupération s'annule entre champs identiques : plus la récupération de l'adversaire est élevée, moins le joueur récupère.

|Où le régler|De quel côté est la valeur|
|-|-|
|`defaultCombat` de général|La valeur de référence du côté du joueur. C'est le point de départ commun à toutes les actions `stamina`|
|Les valeurs de combat de l'action|Les valeurs du côté de l'adversaire. Vues du joueur, elles agissent comme des corrections en sens inverse|
|Les valeurs de combat de la compétence|Les valeurs du côté qui possède la compétence. Les compétences de votre camp s'ajoutent au joueur, celles de l'adversaire au côté de l'adversaire|
___

## Attaque [Écart de niveau]
La correction par écart de niveau des dégâts d'endurance infligés à l'adversaire
- Plus la valeur du côté du joueur est élevée, plus les dégâts infligés à l'adversaire augmentent.
- La valeur réglée sur une action ou sur une compétence de l'adversaire devient l'attaque du côté de l'adversaire et, plus elle est élevée, plus les dégâts subis par le joueur augmentent.
___

## Défense [Écart de niveau]
La correction par écart de niveau des dégâts d'endurance subis de la part de l'adversaire
- Plus la valeur du côté du joueur est élevée, plus les dégâts subis sont réduits.
- La valeur réglée sur une action ou sur une compétence de l'adversaire devient la défense du côté de l'adversaire et, plus elle est élevée, moins le joueur inflige de dégâts.
___

## Précision [Écart de niveau]
La correction par écart de niveau du taux d'échec de l'attaque
- Plus la valeur du côté du joueur est élevée, plus le taux d'échec de l'attaque baisse.
- La valeur réglée sur une action ou sur une compétence de l'adversaire devient la précision du côté de l'adversaire et, plus elle est élevée, plus il est difficile pour le joueur d'esquiver l'attaque de l'adversaire.
___

## Esquive [Écart de niveau]
La correction par écart de niveau du taux d'esquive de l'attaque de l'adversaire
- Plus la valeur du côté du joueur est élevée, plus il est facile d'esquiver l'attaque de l'adversaire.
- La valeur réglée sur une action ou sur une compétence de l'adversaire devient l'esquive du côté de l'adversaire et, plus elle est élevée, plus il est difficile pour l'attaque du joueur de toucher.
___

## Récupération [Écart de niveau]
La correction par écart de niveau de la quantité d'endurance récupérée
- Plus la valeur du côté du joueur est élevée, plus l'endurance récupérée après le combat augmente.
- La valeur réglée sur une action ou sur une compétence de l'adversaire devient la récupération du côté de l'adversaire et, plus elle est élevée, moins le joueur récupère.
- Seule la récupération, contrairement aux autres champs, s'annule entre champs identiques.