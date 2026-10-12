
# Événement fixe
Les messages et les récompenses qui se déclenchent à des moments déterminés
- Il se déclenche à des moments déterminés, comme à la première ouverture du monde ou lors d'une fin de partie, et ouvre un écran dédié.
- Il en existe un par moment, et on ne peut ni en ajouter ni en supprimer. Les moments que vous n'utilisez pas restent vides.
- Ils ne s'affichent ni dans les missions ni dans la liste des tâches. Ce qui est accompli lorsque des conditions sont remplies se règle avec une tâche.
- Lorsque le moment se réalise, l'événement se déclenche et ouvre un écran dédié pour en afficher le contenu.
- La récompense est obtenue automatiquement au moment même du déclenchement. Il n'y a ni opération de réception ni ruban comme pour une tâche, et le plafond des sortes d'objets pouvant être détenues n'est pas vérifié non plus.
- Si des conditions (requirements) sont réglées, la récompense n'est obtenue que si ces conditions étaient remplies au moment du déclenchement. Si aucune n'est réglée, elle est obtenue à chaque déclenchement.
- Les conditions servent seulement à vérifier si elles sont remplies : même en réglant une probabilité de consommation (chance), les objets ne diminuent pas.
- Au déclenchement, vous pouvez modifier le niveau d'une catégorie, le nombre d'exécutions d'une action et la quantité d'objets détenus. En réglant une quantité négative, vous pouvez aussi vous en servir pour faire perdre les possessions lors d'une fin de partie, par exemple.
- Si vous laissez le nom, la description et l'icône vides, le texte et l'icône par défaut intégrés au lecteur sont utilisés.

|Moment|Condition de déclenchement|Répétition|
|-|-|-|
|`comebacked`|Quand vous revenez après 1 seconde ou plus hors ligne et qu'au moins une action s'est achevée pendant votre absence|Autant de fois|
|`gameovered`|Quand l'endurance du joueur est épuisée en combat|Autant de fois|
|`welcomed`|Quand ce monde est lancé pour la première fois|Une seule fois|
|`completed`|Quand le niveau de toutes les catégories atteint la valeur maximale (maxCategoryLevels)|Une seule fois|
|`obtained`|Quand une action de la sorte single (un coffre au trésor, par exemple) est achevée et vérifiée|Autant de fois|
- [_task_](fr/editor/task)
___

## Au retour
Se déclenche au retour depuis le hors-ligne
- Il se déclenche quand vous revenez après 1 seconde ou plus hors ligne et qu'au moins une action s'est achevée pendant votre absence. Si pas une seule exécution ne s'est terminée, il ne se déclenche pas.
- Il s'affiche en même temps que le récapitulatif de la progression pendant votre absence.
___

### [_Informations（Au retour）_](fr/editor/information)
___

### Catégorie（Au retour）
N'est pas utilisé dans un événement
- Ils ne s'affichent ni dans les missions ni dans la liste des tâches, la catégorie à laquelle ils appartiennent n'est donc pas spécifiée.
- Le champ de saisie ne s'affiche pas dans l'éditeur.
___

### Moment（Au retour）
Le moment où l'événement se déclenche (fixe)
- Il est fixé sur `comebacked` et ne peut pas être modifié.
- Il se déclenche autant de fois qu'il le faut, à chaque retour.
___

### État d'affichage initial（Au retour）
L'état d'affichage initial de l'icône de l'événement (le déclenchement est décidé par le moment et ce réglage ne le déclenche pas)
- Les conditions de déclenchement d'un événement sont décidées par le moment, et ce champ n'affecte que l'aspect de l'icône.
- secreted : L'icône ne s'affiche pas tant que tous les requirements ne sont pas remplis (le déclenchement lui-même se produit au moment prévu).
- hidden et hinted : L'icône s'affiche barrée d'un trait, comme non encore déverrouillée.
- released : Le trait disparaît et elle s'affiche comme déjà déverrouillée.
___

### [_Condition（Au retour）_](fr/editor/requirement)
___

### Cumul par groupe（Au retour）
Traite l'id des conditions comme un ID de groupe et juge d'après la valeur totale des éléments qui lui appartiennent
- Une fois activé, l'id que vous réglez dans les conditions (requirements) est traité comme l'ID d'un groupe placé directement sous le monde.
- Une condition dont le type est une catégorie est jugée d'après le total des niveaux de toutes les catégories qui appartiennent à ce groupe.
- Une condition dont le type est une action est jugée d'après le total des nombres d'exécutions de toutes les actions qui appartiennent à ce groupe.
- Une condition dont le type est un objet est jugée d'après le total des quantités possédées de tous les objets qui appartiennent à ce groupe.
- Les éléments qui ne sont pas déverrouillés (tout état autre que released) ne sont pas comptés dans le total.
- La probabilité de consommation (chance) et la condition d'équipement (equipment) d'un objet sont ignorées, et la quantité possédée n'est pas non plus consommée. Elles ne servent qu'au jugement.
- Une fois désactivé, l'id des conditions est traité comme l'ID d'une catégorie, d'une action ou d'un objet particuliers, comme auparavant.
- [_group_](fr/editor/group)
___

### [_Obtention（Au retour）_](fr/editor/acquisition)
___

### Groupe de tâches（Au retour）
N'est pas utilisé dans un événement
- Ils ne s'affichent ni dans les missions ni dans la liste des tâches, le groupe n'est donc pas spécifié.
- Le champ de saisie ne s'affiche pas dans l'éditeur.
___

## À la fin de partie
Se déclenche quand l'endurance est épuisée en combat
- Il se déclenche quand l'endurance du joueur est épuisée en combat.
- En même temps, toutes les actions en cours d'exécution s'arrêtent et toutes les réservations en attente sont abandonnées.
- En réglant une quantité négative pour la récompense, vous pouvez donner un prix à la fin de partie.
___

### [_Informations（À la fin de partie）_](fr/editor/information)
___

### Catégorie（À la fin de partie）
N'est pas utilisé dans un événement
- Ils ne s'affichent ni dans les missions ni dans la liste des tâches, la catégorie à laquelle ils appartiennent n'est donc pas spécifiée.
- Le champ de saisie ne s'affiche pas dans l'éditeur.
___

### Moment（À la fin de partie）
Le moment où l'événement se déclenche (fixe)
- Il est fixé sur `gameovered` et ne peut pas être modifié.
- Il se déclenche autant de fois qu'il le faut, à chaque fin de partie.
___

### État d'affichage initial（À la fin de partie）
L'état d'affichage initial de l'icône de l'événement (le déclenchement est décidé par le moment et ce réglage ne le déclenche pas)
- Les conditions de déclenchement d'un événement sont décidées par le moment, et ce champ n'affecte que l'aspect de l'icône.
- secreted : L'icône ne s'affiche pas tant que tous les requirements ne sont pas remplis (le déclenchement lui-même se produit au moment prévu).
- hidden et hinted : L'icône s'affiche barrée d'un trait, comme non encore déverrouillée.
- released : Le trait disparaît et elle s'affiche comme déjà déverrouillée.
___

### [_Condition（À la fin de partie）_](fr/editor/requirement)
___

### Cumul par groupe（À la fin de partie）
Traite l'id des conditions comme un ID de groupe et juge d'après la valeur totale des éléments qui lui appartiennent
- Une fois activé, l'id que vous réglez dans les conditions (requirements) est traité comme l'ID d'un groupe placé directement sous le monde.
- Une condition dont le type est une catégorie est jugée d'après le total des niveaux de toutes les catégories qui appartiennent à ce groupe.
- Une condition dont le type est une action est jugée d'après le total des nombres d'exécutions de toutes les actions qui appartiennent à ce groupe.
- Une condition dont le type est un objet est jugée d'après le total des quantités possédées de tous les objets qui appartiennent à ce groupe.
- Les éléments qui ne sont pas déverrouillés (tout état autre que released) ne sont pas comptés dans le total.
- La probabilité de consommation (chance) et la condition d'équipement (equipment) d'un objet sont ignorées, et la quantité possédée n'est pas non plus consommée. Elles ne servent qu'au jugement.
- Une fois désactivé, l'id des conditions est traité comme l'ID d'une catégorie, d'une action ou d'un objet particuliers, comme auparavant.
- [_group_](fr/editor/group)
___

### [_Obtention（À la fin de partie）_](fr/editor/acquisition)
___

### Groupe de tâches（À la fin de partie）
N'est pas utilisé dans un événement
- Ils ne s'affichent ni dans les missions ni dans la liste des tâches, le groupe n'est donc pas spécifié.
- Le champ de saisie ne s'affiche pas dans l'éditeur.
___

## Au premier démarrage
Se déclenche à la première ouverture du monde
- Il se déclenche quand ce monde est lancé pour la première fois.
- Il sert à présenter l'univers du monde et à remettre les fournitures de départ données au début.
___

### [_Informations（Au premier démarrage）_](fr/editor/information)
___

### Catégorie（Au premier démarrage）
N'est pas utilisé dans un événement
- Ils ne s'affichent ni dans les missions ni dans la liste des tâches, la catégorie à laquelle ils appartiennent n'est donc pas spécifiée.
- Le champ de saisie ne s'affiche pas dans l'éditeur.
___

### Moment（Au premier démarrage）
Le moment où l'événement se déclenche (fixe)
- Il est fixé sur `welcomed` et ne peut pas être modifié.
- Il se déclenche une seule fois, au premier démarrage.
___

### État d'affichage initial（Au premier démarrage）
L'état d'affichage initial de l'icône de l'événement (le déclenchement est décidé par le moment et ce réglage ne le déclenche pas)
- Les conditions de déclenchement d'un événement sont décidées par le moment, et ce champ n'affecte que l'aspect de l'icône.
- secreted : L'icône ne s'affiche pas tant que tous les requirements ne sont pas remplis (le déclenchement lui-même se produit au moment prévu).
- hidden et hinted : L'icône s'affiche barrée d'un trait, comme non encore déverrouillée.
- released : Le trait disparaît et elle s'affiche comme déjà déverrouillée.
___

### [_Condition（Au premier démarrage）_](fr/editor/requirement)
___

### Cumul par groupe（Au premier démarrage）
Traite l'id des conditions comme un ID de groupe et juge d'après la valeur totale des éléments qui lui appartiennent
- Une fois activé, l'id que vous réglez dans les conditions (requirements) est traité comme l'ID d'un groupe placé directement sous le monde.
- Une condition dont le type est une catégorie est jugée d'après le total des niveaux de toutes les catégories qui appartiennent à ce groupe.
- Une condition dont le type est une action est jugée d'après le total des nombres d'exécutions de toutes les actions qui appartiennent à ce groupe.
- Une condition dont le type est un objet est jugée d'après le total des quantités possédées de tous les objets qui appartiennent à ce groupe.
- Les éléments qui ne sont pas déverrouillés (tout état autre que released) ne sont pas comptés dans le total.
- La probabilité de consommation (chance) et la condition d'équipement (equipment) d'un objet sont ignorées, et la quantité possédée n'est pas non plus consommée. Elles ne servent qu'au jugement.
- Une fois désactivé, l'id des conditions est traité comme l'ID d'une catégorie, d'une action ou d'un objet particuliers, comme auparavant.
- [_group_](fr/editor/group)
___

### [_Obtention（Au premier démarrage）_](fr/editor/acquisition)
___

### Groupe de tâches（Au premier démarrage）
N'est pas utilisé dans un événement
- Ils ne s'affichent ni dans les missions ni dans la liste des tâches, le groupe n'est donc pas spécifié.
- Le champ de saisie ne s'affiche pas dans l'éditeur.
___

## À l'achèvement
Se déclenche quand toutes les catégories atteignent le niveau maximal
- Il se déclenche quand le niveau de toutes les catégories atteint la valeur maximale (maxCategoryLevels).
- Les catégories qui ne sont pas numeric sont exclues de la vérification. C'est pourquoi il ne se déclenche pas dans un monde sans la moindre catégorie numérique.
___

### [_Informations（À l'achèvement）_](fr/editor/information)
___

### Catégorie（À l'achèvement）
N'est pas utilisé dans un événement
- Ils ne s'affichent ni dans les missions ni dans la liste des tâches, la catégorie à laquelle ils appartiennent n'est donc pas spécifiée.
- Le champ de saisie ne s'affiche pas dans l'éditeur.
___

### Moment（À l'achèvement）
Le moment où l'événement se déclenche (fixe)
- Il est fixé sur `completed` et ne peut pas être modifié.
- Il se déclenche une seule fois, quand les conditions sont remplies.
___

### État d'affichage initial（À l'achèvement）
L'état d'affichage initial de l'icône de l'événement (le déclenchement est décidé par le moment et ce réglage ne le déclenche pas)
- Les conditions de déclenchement d'un événement sont décidées par le moment, et ce champ n'affecte que l'aspect de l'icône.
- secreted : L'icône ne s'affiche pas tant que tous les requirements ne sont pas remplis (le déclenchement lui-même se produit au moment prévu).
- hidden et hinted : L'icône s'affiche barrée d'un trait, comme non encore déverrouillée.
- released : Le trait disparaît et elle s'affiche comme déjà déverrouillée.
___

### [_Condition（À l'achèvement）_](fr/editor/requirement)
___

### Cumul par groupe（À l'achèvement）
Traite l'id des conditions comme un ID de groupe et juge d'après la valeur totale des éléments qui lui appartiennent
- Une fois activé, l'id que vous réglez dans les conditions (requirements) est traité comme l'ID d'un groupe placé directement sous le monde.
- Une condition dont le type est une catégorie est jugée d'après le total des niveaux de toutes les catégories qui appartiennent à ce groupe.
- Une condition dont le type est une action est jugée d'après le total des nombres d'exécutions de toutes les actions qui appartiennent à ce groupe.
- Une condition dont le type est un objet est jugée d'après le total des quantités possédées de tous les objets qui appartiennent à ce groupe.
- Les éléments qui ne sont pas déverrouillés (tout état autre que released) ne sont pas comptés dans le total.
- La probabilité de consommation (chance) et la condition d'équipement (equipment) d'un objet sont ignorées, et la quantité possédée n'est pas non plus consommée. Elles ne servent qu'au jugement.
- Une fois désactivé, l'id des conditions est traité comme l'ID d'une catégorie, d'une action ou d'un objet particuliers, comme auparavant.
- [_group_](fr/editor/group)
___

### [_Obtention（À l'achèvement）_](fr/editor/acquisition)
___

### Groupe de tâches（À l'achèvement）
N'est pas utilisé dans un événement
- Ils ne s'affichent ni dans les missions ni dans la liste des tâches, le groupe n'est donc pas spécifié.
- Le champ de saisie ne s'affiche pas dans l'éditeur.
___

## À l'achèvement d'une action ponctuelle
Se déclenche à l'achèvement d'une action ponctuelle comme un coffre au trésor
- Il se déclenche quand une action de la sorte single (un coffre au trésor, par exemple) est achevée et vérifiée.
- Indépendamment de la récompense de l'action elle-même, vous pouvez ajouter la récompense réglée ici.
___

### [_Informations（À l'achèvement d'une action ponctuelle）_](fr/editor/information)
___

### Catégorie（À l'achèvement d'une action ponctuelle）
N'est pas utilisé dans un événement
- Ils ne s'affichent ni dans les missions ni dans la liste des tâches, la catégorie à laquelle ils appartiennent n'est donc pas spécifiée.
- Le champ de saisie ne s'affiche pas dans l'éditeur.
___

### Moment（À l'achèvement d'une action ponctuelle）
Le moment où l'événement se déclenche (fixe)
- Il est fixé sur `obtained` et ne peut pas être modifié.
- Il se déclenche autant de fois qu'il le faut, à chaque achèvement d'une action ponctuelle.
___

### État d'affichage initial（À l'achèvement d'une action ponctuelle）
L'état d'affichage initial de l'icône de l'événement (le déclenchement est décidé par le moment et ce réglage ne le déclenche pas)
- Les conditions de déclenchement d'un événement sont décidées par le moment, et ce champ n'affecte que l'aspect de l'icône.
- secreted : L'icône ne s'affiche pas tant que tous les requirements ne sont pas remplis (le déclenchement lui-même se produit au moment prévu).
- hidden et hinted : L'icône s'affiche barrée d'un trait, comme non encore déverrouillée.
- released : Le trait disparaît et elle s'affiche comme déjà déverrouillée.
___

### [_Condition（À l'achèvement d'une action ponctuelle）_](fr/editor/requirement)
___

### Cumul par groupe（À l'achèvement d'une action ponctuelle）
Traite l'id des conditions comme un ID de groupe et juge d'après la valeur totale des éléments qui lui appartiennent
- Une fois activé, l'id que vous réglez dans les conditions (requirements) est traité comme l'ID d'un groupe placé directement sous le monde.
- Une condition dont le type est une catégorie est jugée d'après le total des niveaux de toutes les catégories qui appartiennent à ce groupe.
- Une condition dont le type est une action est jugée d'après le total des nombres d'exécutions de toutes les actions qui appartiennent à ce groupe.
- Une condition dont le type est un objet est jugée d'après le total des quantités possédées de tous les objets qui appartiennent à ce groupe.
- Les éléments qui ne sont pas déverrouillés (tout état autre que released) ne sont pas comptés dans le total.
- La probabilité de consommation (chance) et la condition d'équipement (equipment) d'un objet sont ignorées, et la quantité possédée n'est pas non plus consommée. Elles ne servent qu'au jugement.
- Une fois désactivé, l'id des conditions est traité comme l'ID d'une catégorie, d'une action ou d'un objet particuliers, comme auparavant.
- [_group_](fr/editor/group)
___

### [_Obtention（À l'achèvement d'une action ponctuelle）_](fr/editor/acquisition)
___

### Groupe de tâches（À l'achèvement d'une action ponctuelle）
N'est pas utilisé dans un événement
- Ils ne s'affichent ni dans les missions ni dans la liste des tâches, le groupe n'est donc pas spécifié.
- Le champ de saisie ne s'affiche pas dans l'éditeur.