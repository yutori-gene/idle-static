
# Général
Les réglages de base du jeu, comme la langue et les réglages de niveau
___

## Langue
La langue dans laquelle vous créez le monde
- Définit dans quelle langue vous écrivez le nom et la description du monde. C'est la langue qui sert de base lorsque vous préparez les traductions.
- C'est aussi la langue affichée en premier lorsqu'un joueur commence la partie.
- Lorsque translations est désactivé, le joueur ne peut pas passer de cette langue à une autre.
- C'est un réglage distinct de la langue d'affichage de l'éditeur de mondes lui-même. La langue d'affichage de l'éditeur se choisit à l'ouverture de l'éditeur.
- [_translation_](fr/editor/translation)
___

## Traduction
Préparer ou non des traductions pour plusieurs langues
- Lorsque c'est activé, les joueurs peuvent passer à la langue de leur choix et y jouer.
- Lorsque c'est désactivé, la langue reste fixée à celle choisie dans language et l'opération de changement elle-même n'est pas disponible.
- Si vous l'activez, vous devez préparer les données de traduction de chaque langue. Le paquet publié embarque les données de traduction.
- Ce qui change, ce sont les noms et les descriptions définis dans le monde. Les traductions des formulations communes de l'écran (les préréglages) sont toujours embarquées, quel que soit ce réglage.
- [_translation_](fr/editor/translation)
- [_preset_](fr/editor/preset)
___

## Temps hors ligne maximal [Heures]
La limite de temps de la progression hors ligne
- Définit le nombre d'heures maximal pendant lesquelles la progression hors ligne se poursuit.
- Par exemple, si vous réglez 6 heures, le traitement du retour depuis le hors-ligne est effectué jusqu'à 6 heures, et même si vous revenez après une absence plus longue, le temps hors ligne est traité comme 6 heures.
- Si vous réglez 0 heure, aucun traitement n'est effectué au retour depuis le hors-ligne.
- La valeur maximale est de 24 heures.
- [_category_](fr/editor/category)
___

## Niveau maximal des catégories
Le plafond de niveau de chaque catégorie
- Définit le plafond du niveau de chaque catégorie. La valeur par défaut est `100`.
- Même si de l'expérience est gagnée, le niveau s'arrête à cette valeur et le surplus est jeté. Il en va de même lorsqu'une récompense ajoute directement des niveaux.
- Lorsque le niveau des données de sauvegarde dépasse le plafond, il est ramené au plafond au chargement.
- La barre de niveau et le taux de progression des statistiques sont affichés en prenant cette valeur comme dénominateur.
- Une catégorie dont numeric est désactivé ne monte pas de niveau, cette valeur ne la concerne donc pas.
- [_category_](fr/editor/category)
___

## Monnaie
Les réglages de la monnaie (coins) utilisée dans le jeu
- Définit la monnaie utilisée dans le jeu. Il en faut au moins une.
- Vous pouvez définir plusieurs monnaies et régler chacune d'elles comme des informations (ID, nom, icône, couleur, etc.).
- Les monnaies servent à l'achat et à la vente des objets ainsi qu'à l'extension de la capacité et de la file d'attente.
- La première monnaie est traitée comme la monnaie principale et elle est utilisée lorsqu'aucun ID de monnaie (`coinId`) n'est indiqué pour un objet, la capacité ou la file d'attente, ou lorsqu'un ID absent de la liste des monnaies est indiqué.
- Une monnaie est traitée comme une sorte d'objet. Dans les conditions et les récompenses, référez-vous à l'ID défini ici comme à un objet. Elle n'appartient à aucune catégorie et ne fait l'objet ni d'équipement ni de commerce.
- [_information_](fr/editor/information)
- [_item_](fr/editor/item)
___

## Capacité
Les réglages de capacité de l'inventaire
- Gère le plafond du nombre de sortes d'objets qu'un joueur peut détenir.
- La gestion se fait sur le nombre de sortes d'objets détenus, et non sur la quantité possédée de chaque objet.
- Mettre `initialCount` à 0 rend la capacité illimitée et empêche aussi d'acheter de la capacité.
- Lorsque vous vous référez à l'objet de la capacité dans les conditions ou les récompenses, utilisez l'ID défini ici, ou bien `capacity`.
- [_item_](fr/editor/item)
___

### [_Informations de la capacité_](fr/editor/information)
___

### Valeur initiale de la capacité [Unités]
La capacité initiale de l'inventaire (le nombre de sortes d'objets pouvant être détenues)
- C'est la capacité initiale au début de la partie (le nombre de sortes d'objets pouvant être détenues). La valeur par défaut est `10`.
- La mettre à `0` rend la capacité illimitée et, du même coup, empêche d'acheter de la capacité.
___

### Prix de base de la capacité [Pièces]
Le prix initial pour augmenter la capacité d'une unité
- C'est le prix de base (en pièces) pour augmenter la capacité de l'inventaire d'un emplacement. Réglez-le sur un entier supérieur ou égal à `1`.
- Le prix réel se calcule ainsi : « prix de base × taux d'augmentation^nombre d'achats effectués ».
- Exemple : avec un prix de base de 100 et un taux d'augmentation de 1,2, la 1re fois coûte 100 pièces, la 2e 120 pièces et la 3e 144 pièces.
___

### Taux d'augmentation de la capacité [Multiplicateur]
Le taux d'augmentation du coût d'extension de la capacité
- C'est le multiplicateur indiquant de combien le coût d'extension de la capacité augmente au nième achat. La valeur par défaut est `1.2`.
- Avec `1.0`, le prix est toujours le même ; avec `1.2`, il devient 20 % plus cher à chaque achat.
- Formule : prix de base × taux d'augmentation^nombre d'achats effectués

|Taux d'augmentation|1re unité|5e unité|10e unité|100e unité|1000e unité|
|-|-|-|-|-|-|
|1.00|x1.00|x1.00|x1.00|x1.00|x1.00|
|1.05|x1.00|x1.22|x1.55|x125.24|x1.5×10²¹|
|1.10|x1.00|x1.46|x2.36|x1.3×10⁴|x2.2×10⁴¹|
|1.20|x1.00|x2.07|x5.16|x6.9×10⁷|x1.3×10⁷⁹|
|1.50|x1.00|x5.06|x38.44|x2.7×10¹⁷|x8.2×10¹⁷⁵|
___

### ID de monnaie de la capacité
L'ID de la monnaie utilisée pour étendre la capacité
- Indique l'ID de la monnaie (coins) utilisée pour le prix d'extension de la capacité de l'inventaire.
- Laissé vide, ou si vous indiquez un ID absent de la liste des monnaies, c'est la monnaie principale (la première de coins) qui est utilisée.
___

### Limite d'achat de la capacité [Fois]
Le nombre maximal de fois où la capacité peut être achetée
- C'est le plafond du nombre de fois où la capacité peut être achetée avec une monnaie.
- La mettre à `0` permet d'acheter sans limite.
- La mettre à `-1` empêche tout achat.
- L'augmentation de la capacité par une récompense n'entre pas dans ce plafond.
___

## File d'attente
Les réglages du nombre d'emplacements pour exécuter des actions à la suite (la file d'attente)
- Gère le nombre d'emplacements de la file d'attente servant à exécuter des actions à la suite.
- La file d'attente comprend l'action en cours d'exécution, et c'est l'action en tête qui s'exécute. Lorsque les emplacements sont à `1`, il n'y a que celle en cours et aucune attente ne peut être retenue.
- Comme pour la capacité, le nombre d'emplacements peut s'acheter avec une monnaie, et il peut aussi être augmenté en indiquant l'objet de la file d'attente comme récompense d'une action ou d'un événement.
- Lorsque vous vous référez à l'objet de la file d'attente dans les conditions ou les récompenses, utilisez l'ID défini ici, ou bien `queue`.
- [_item_](fr/editor/item)
___

### [_Informations de la file d'attente_](fr/editor/information)
___

### Valeur initiale de la file d'attente [Emplacements]
Le nombre d'emplacements d'exécution à la suite au début de la partie
- C'est le nombre d'emplacements de la file d'attente au début de la partie. La valeur par défaut est `1`.
- La valeur minimale est `1` (car celle en cours d'exécution occupe un emplacement ; il n'y a pas de traitement `0` = illimité comme pour la capacité).
___

### Prix de base de la file d'attente [Pièces]
Le prix initial pour augmenter les emplacements d'une unité
- C'est le prix de base (en pièces) pour augmenter d'un les emplacements d'exécution à la suite. Réglez-le sur un entier supérieur ou égal à `1`.
- Le prix réel se calcule ainsi : « prix de base × taux d'augmentation^nombre d'achats effectués ».
- Exemple : avec un prix de base de 100 et un taux d'augmentation de 1,2, la 1re fois coûte 100 pièces, la 2e 120 pièces et la 3e 144 pièces.
___

### Taux d'augmentation de la file d'attente [Multiplicateur]
Le taux d'augmentation du coût d'extension des emplacements
- C'est le multiplicateur indiquant de combien le coût d'extension des emplacements augmente au nième achat. La valeur par défaut est `1.2`.
- Avec `1.0`, le prix est toujours le même ; avec `1.2`, il devient 20 % plus cher à chaque achat.
- Formule : prix de base × taux d'augmentation^nombre d'achats effectués
- La façon dont il augmente est la même que pour le taux d'augmentation de la capacité. Pour vous repérer sur le multiplicateur, reportez-vous au tableau de la capacité.
___

### ID de monnaie de la file d'attente
L'ID de la monnaie utilisée pour étendre les emplacements
- Indique l'ID de la monnaie (coins) utilisée pour le prix d'extension des emplacements d'exécution à la suite.
- Laissé vide, ou si vous indiquez un ID absent de la liste des monnaies, c'est la monnaie principale (la première de coins) qui est utilisée.
___

### Limite d'achat de la file d'attente [Fois]
Le nombre maximal de fois où les emplacements peuvent être achetés
- C'est le plafond du nombre de fois où les emplacements d'exécution à la suite peuvent être achetés avec une monnaie.
- La mettre à `0` permet d'acheter sans limite.
- La mettre à `-1` empêche tout achat.
- L'augmentation des emplacements par une récompense n'entre pas dans ce plafond.
___

## Taux de croissance de l'expérience [Multiplicateur]
Le taux d'augmentation de la difficulté à monter de niveau
- C'est le taux de croissance de l'expérience nécessaire pour atteindre le niveau suivant à mesure que le niveau d'une catégorie monte. La valeur par défaut est `1.05` et une valeur inférieure à `1` ne peut pas être définie.
- Augmenter cette valeur relève la difficulté. La mettre à `1` fait que l'expérience nécessaire reste la même à tous les niveaux.
- L'expérience nécessaire pour atteindre le niveau suivant est (taux de croissance de l'expérience)^(niveau actuel-1). Les niveaux se comptent en laissant tomber les décimales.
- L'expérience obtenue après avoir atteint le plafond (le niveau maximal des catégories) est jetée.

|Taux de croissance de l'expérience|Lv.1|Lv.2|Lv.10|Lv.50|Lv.99|
|-|-|-|-|-|-|
|1.00|x1.00|x1.00|x1.00|x1.00|x1.00|
|1.02|x1.00|x1.02|x1.20|x2.64|x6.96|
|1.05|x1.00|x1.05|x1.55|x10.92|x119.28|
|1.10|x1.00|x1.10|x2.36|x106.72|x1.1×10⁴|
|1.20|x1.00|x1.20|x5.16|x7583.70|x5.8×10⁷|
- [_category_](fr/editor/category)
___

## Limite de niveau des actions
Exiger le niveau de la catégorie de l'attribut pour exécuter une action
- Lorsque c'est activé, la condition « le niveau de la catégorie de l'attribut est supérieur ou égal au niveau de cette action » est ajoutée automatiquement en tête des conditions (requirements) de chaque action.
- Lorsque aucun attribut (attribute) n'est défini, la catégorie à laquelle elle appartient est utilisée.
- Lorsque numeric est désactivé dans la catégorie de l'attribut, celle-ci ne monte pas de niveau, rien n'est donc ajouté.
- La condition ajoutée est inscrite au chargement du monde, elle s'affiche donc sur l'écran du lecteur comme une condition ordinaire.
- [_action_](fr/editor/action)
- [_category_](fr/editor/category)
- [_requirement_](fr/editor/requirement)
___

## Ratio des propriétés [Multiplicateur]
Par combien les propriétés sont multipliées tous les 10 points d'écart de niveau
- Définit par combien les propriétés sont multipliées chaque fois que l'écart entre le niveau de la catégorie et le niveau de l'action se creuse de `10`. La valeur par défaut est `1.5` et une valeur inférieure à `1` ne peut pas être définie.
- Le multiplicateur se calcule ainsi : (ratio des propriétés)^(écart de niveau÷10). Lorsque l'écart de niveau est de `0`, il vaut `1` et la valeur définie sur l'action est utilisée telle quelle.
- L'attaque et l'expérience augmentent de ce multiplicateur, et la défense (les dégâts subis) ainsi que la vitesse (le temps requis) diminuent du même multiplicateur.
- La précision, l'esquive, le taux de réussite et la récupération sont des valeurs comprises entre `0` et `100` %, le multiplicateur s'applique donc au rapport entre la part qui se réalise et celle qui ne se réalise pas. `0` % et `100` % ne changent pas, et aucune valeur intermédiaire ne dépasse `100` %.
- Pour la défense, l'esquive et la vitesse, le multiplicateur agit de moitié (un écart de niveau de `20` équivaut à un écart de `10` pour les autres propriétés). La défense et l'esquive s'appliquent doublement, au taux de coups reçus et aux dégâts subis, et la vitesse s'applique à toutes les autres propriétés en tant que nombre d'exécutions : leur effet est donc affaibli pour maintenir l'équilibre.
- Un repère est (le taux de croissance de l'expérience) élevé à la puissance `6.7`. Au-dessus, la montée en niveau s'accélère à mesure que le niveau grimpe ; en dessous, la montée en niveau dans la dernière partie demande plus de temps.
- La mettre à `1` supprime l'influence de l'écart de niveau. Augmenter la valeur rend plus brutaux les avantages et les désavantages liés à l'écart de niveau.

|Ratio des propriétés|Écart de niveau -20|Écart de niveau -10|Écart de niveau 0|Écart de niveau +10|Écart de niveau +20|
|-|-|-|-|-|-|
|`1`|`x1.00`|`x1.00`|`x1.00`|`x1.00`|`x1.00`|
|`1.5`|`x0.44`|`x0.67`|`x1.00`|`x1.50`|`x2.25`|
|`2`|`x0.25`|`x0.50`|`x1.00`|`x2.00`|`x4.00`|
|`3`|`x0.11`|`x0.33`|`x1.00`|`x3.00`|`x9.00`|
- [_action_](fr/editor/action)
- [_property_](fr/editor/property)
___

## [_Valeurs de combat_](fr/editor/combat)