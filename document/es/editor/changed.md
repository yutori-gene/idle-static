
# Evento de cambio
Un evento de procesamiento interno que se dispara cuando la cantidad de una categoría, una acción o un artículo aumenta de una vez en la cantidad de las condiciones o más
- Se comprueba en cualquier momento en que cambia una cantidad, como al completar una acción, al comprar o vender, o al abrir un cofre del tesoro.
- Las condiciones (requirements) se juzgan por la cantidad del aumento en ese único momento, no por un valor absoluto como la cantidad en posesión. Los aumentos pequeños repartidos en varias veces no se suman.
- Si estableces la condición de un artículo en 3, por ejemplo, se cumple cuando ese artículo aumenta en 3 o más en esa única vez. Una disminución no cuenta como aumento.
- Si estableces varias condiciones, todas tienen que cumplirse a la vez en ese único cambio. Un evento de cambio sin ninguna condición establecida nunca se dispara.
- Poner el valor de una condición en `0` cuenta como cumplida aunque no haya aumento, así que se dispara cada vez que cambia una cantidad.
- No se miran la probabilidad de consumo (chance) ni el equipamiento (equipment) de las condiciones. El juicio usa solo la cantidad del aumento, y los elementos usados en las condiciones tampoco disminuyen.
- La recompensa se recibe automáticamente cada vez que se cumplen las condiciones, y se dispara una y otra vez cuantas veces sea. A diferencia de una tarea, no es de una sola vez y no hace falta ninguna operación para recibirla. También puede establecerse una cantidad negativa.
- A diferencia de una tarea o de una compra, no se comprueba el límite del número de tipos de artículos que puedes tener, así que pueden aumentar artículos nuevos por encima de la capacidad.
- Un aumento procedente de una recompensa también se trata como un cambio, así que cuando la recompensa de un evento de cambio cumple las condiciones de otro evento de cambio, este se dispara a continuación.
- No se muestra en absoluto en la pantalla del reproductor. Tampoco aparece en la lista de misiones ni se muestra el mensaje de logro.

!> No establezcas la recompensa de un evento de cambio de modo que cumpla sus propias condiciones. No dejaría de dispararse y el juego se detendría. Un ejemplo es un evento cuyas condiciones se cumplen cuando el artículo A aumenta en uno y cuya recompensa entrega un artículo A.
- [_unique_](es/editor/unique)
___

## [_Información_](es/editor/information)
___

## Categoría
El ID de la categoría a la que pertenece el evento de cambio (solo se usa para clasificar, porque no se muestra nada en la pantalla)
- Como no se muestra nada en la pantalla del reproductor, este ajuste no afecta al aspecto.
___

## Momento
El momento en que se dispara el evento de cambio (fijado en `changed`)
- Está fijado en `changed` y no se puede editar.
- Se comprueba en cualquier momento en que cambia una cantidad, y se dispara de nuevo cada vez que se cumplen las condiciones.
___

## Estado de visualización inicial
Prácticamente no tiene efecto, porque no se muestra nada en la pantalla
- Un evento de cambio no se muestra en la pantalla del reproductor, así que este ajuste no se usa.
___

## [_Requisito_](es/editor/requirement)
___

## Suma por grupo
Trata el id de las condiciones como un ID de grupo y juzga por el total de la cantidad del aumento de los elementos que pertenecen a él
- Al activarlo, el id que estableces en las condiciones (requirements) se trata como el ID de un grupo directamente bajo el mundo.
- Se suman las cantidades del aumento de todas las categorías, todas las acciones y todos los artículos que pertenecen a ese grupo para el juicio.
- A diferencia de la suma por grupo de una tarea, la cantidad del aumento de un elemento que aún no está desbloqueado también se incluye en el total.
- Al desactivarlo, el id de las condiciones se trata como el ID de una categoría, una acción o un artículo concretos, como hasta ahora.
- [_group_](es/editor/group)
___

## [_Obtención_](es/editor/acquisition)
___

## Grupo de eventos de cambio
La clasificación de grupo de visualización para la gestión interna (prácticamente sin uso, porque no se muestra nada en la pantalla)
- Un evento de cambio no se muestra en la pantalla del reproductor, así que este ajuste no afecta al aspecto.