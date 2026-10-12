
# Tâche
Une mission qui est accomplie lorsque les conditions sont remplies
- Elle est accomplie lorsque les conditions que vous réglez sont remplies, et un message s'affiche en haut de l'écran.
- Elle s'affiche dans la liste des missions du lecteur et dans la liste des tâches de la catégorie.
- Une tâche sans condition réglée n'est jamais accomplie.
- Une fois accomplie, elle le reste même si les conditions cessent ensuite d'être remplies, et la récompense peut être reçue à tout moment.
- La récompense n'est pas remise automatiquement. Le joueur la reçoit lorsqu'il ouvre la tâche et appuie sur la barre Obtention.
- Jusqu'à ce que la récompense soit reçue, la barre de la liste porte un ruban indiquant qu'elle n'a pas encore été réclamée.
- Une tâche sans récompense réglée n'affiche pas de barre Obtention et est terminée dès qu'elle est accomplie.
- Vous ne pouvez pas recevoir la récompense tant que le nombre de sortes d'objets que vous pouvez détenir est à sa limite. Faites du tri, puis réclamez-la de nouveau.
- Avec l'obtention, vous pouvez modifier le niveau d'une catégorie, le nombre d'exécutions d'une action et la quantité possédée d'un objet.
- Ce que vous voulez déclencher à un moment autre que les conditions, comme le premier lancement ou une fin de partie, se règle avec un événement fixe (unique).
- [_unique_](fr/editor/unique)
___

## [_Informations_](fr/editor/information)
___

## Catégorie
L'ID de la catégorie à laquelle la tâche appartient
- Indiquez l'ID de la catégorie à laquelle cette tâche appartient.
- Une fois réglé, la liste des tâches s'ajoute à l'écran de la catégorie du lecteur, et dans la liste des missions elles sont aussi regroupées par catégorie.
- Laissée vide, la tâche n'appartient à aucune catégorie et s'affiche ensemble en tête de la liste des missions.
- Si aucune couleur n'est réglée sur la tâche elle-même, elle hérite de la couleur de la catégorie.
- [_category_](fr/editor/category)
___

## Moment
Le moment où la tâche se déclenche (fixé à `tasked`)
- La tâche est fixée à `tasked` (quand les conditions que vous réglez sont remplies) et n'est pas modifiable.
- La récompense ne peut être reçue qu'une seule fois, et une fois reçue elle reste accomplie sans autre changement.
- Ce que vous voulez déclencher à un autre moment déterminé se règle avec un événement fixe (unique).
- [_unique_](fr/editor/unique)
___

## État d'affichage initial
L'état d'affichage initial de l'icône de la tâche (l'accomplissement est décidé par les conditions et ce réglage ne l'accomplit pas)
- Les conditions d'accomplissement d'une tâche sont décidées par requirements, et ce champ n'affecte que l'aspect de l'icône dans la liste.
- secreted : Elle n'apparaît pas du tout dans la liste des tâches tant que tous les requirements ne sont pas remplis (l'accomplissement lui-même se produit toujours par les conditions).
- hidden et hinted : L'icône s'affiche barrée d'un trait, comme non encore déverrouillée.
- released : Le trait disparaît et elle s'affiche comme déjà déverrouillée.
- Une tâche accomplie une fois ne disparaît pas de la liste, et elle continue de s'afficher comme accomplie même si les conditions cessent ensuite d'être remplies.
___

## [_Condition_](fr/editor/requirement)
___

## Cumul par groupe
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

## [_Obtention_](fr/editor/acquisition)
___

## Groupe de tâches
Le classement en groupe d'affichage de la tâche
- Appliquez l'un de ceux définis dans les groupes placés directement sous le monde.
- Dans la liste des tâches d'une catégorie, elles s'affichent séparées par groupe, avec un titre pour chacun. Les tâches sans groupe réglé forment aussi un bloc, et le préréglage « Tâche » sert de titre.
- Dans la liste des missions, elles ne sont pas séparées par des titres : seul l'ordre dans lequel elles s'alignent est regroupé par groupe.
- L'ordre dans lequel les blocs s'alignent est décidé par la position où apparaît la première tâche de ce groupe.
- [_group_](fr/editor/group)