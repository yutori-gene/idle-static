
# Evento fijo
Los mensajes y las recompensas que se activan en momentos determinados
- Se activa en momentos determinados, como al abrir el mundo por primera vez o al llegar al fin del juego, y abre una pantalla propia.
- Hay uno preparado para cada momento y no se pueden añadir ni eliminar. Los momentos que no uses se dejan en blanco.
- No se muestran en las misiones ni en la lista de tareas. Lo que se logra al cumplir unos requisitos se configura con una tarea.
- Cuando el momento se cumple, el evento se activa y abre una pantalla propia para mostrar su contenido.
- La recompensa se obtiene automáticamente en el mismo momento de la activación. No hay operación de recogida ni cinta como en una tarea, y tampoco se comprueba el tope de clases de artículos que se pueden tener.
- Si se configuran requisitos (requirements), la recompensa solo se obtiene cuando esos requisitos se cumplían en el momento de la activación. Si no se configuran, se obtiene en cada activación.
- Los requisitos solo se miran para ver si se cumplen, así que los artículos no disminuyen aunque se configure una probabilidad de consumo (chance).
- Al activarse puedes cambiar el nivel de una categoría, la cantidad de ejecuciones de una acción y la cantidad de artículos que se tienen. Si pones una cantidad negativa, también puedes usarlo para hacer que se pierdan las pertenencias al fin del juego, por ejemplo.
- Si dejas en blanco el nombre, la descripción y el icono, se usan el texto y el icono predeterminados que lleva integrados el reproductor.

|Momento|Requisito de activación|Repetición|
|-|-|-|
|`comebacked`|Cuando regresas tras 1 segundo o más sin conexión y al menos una acción se completó mientras estabas ausente|Muchas veces|
|`gameovered`|Cuando la resistencia del jugador se agota en combate|Muchas veces|
|`welcomed`|Cuando este mundo se inicia por primera vez|Solo una vez|
|`completed`|Cuando el nivel de todas las categorías alcanza el valor máximo (maxCategoryLevels)|Solo una vez|
|`obtained`|Cuando se completa y se comprueba una acción de la clase single (un cofre del tesoro, por ejemplo)|Muchas veces|
- [_task_](es/editor/task)
___

## Al regresar
Se activa al regresar tras estar sin conexión
- Se activa cuando regresas tras 1 segundo o más sin conexión y al menos una acción se completó mientras estabas ausente. Si no ha terminado ni una sola ejecución, no se activa.
- Se muestra junto con el resumen del avance del tiempo que estuviste ausente.
___

### [_Información（Al regresar）_](es/editor/information)
___

### Categoría（Al regresar）
No se usa en un evento
- No se muestran en las misiones ni en la lista de tareas, por lo que no se especifica la categoría a la que pertenecen.
- El campo de entrada no se muestra en el editor.
___

### Momento（Al regresar）
El momento en que se dispara el evento (fijo)
- Está fijado como `comebacked` y no se puede editar.
- Se activa cuantas veces haga falta, cada vez que regresas.
___

### Estado de visualización inicial（Al regresar）
El estado de visualización inicial del icono del evento (el disparo lo decide el momento y este ajuste no lo dispara)
- Las condiciones de disparo de un evento las decide el momento, y este campo solo afecta al aspecto del icono.
- secreted: El icono no se muestra hasta que se cumplen todos los requirements (el disparo en sí ocurre en su momento).
- hidden y hinted: El icono se muestra con una raya encima, como no desbloqueado todavía.
- released: La raya desaparece y se muestra como ya desbloqueado.
___

### [_Requisito（Al regresar）_](es/editor/requirement)
___

### Suma por grupo（Al regresar）
Trata el id de las condiciones como un ID de grupo y juzga por el valor total de los elementos que pertenecen a él
- Al activarlo, el id que estableces en las condiciones (requirements) se trata como el ID de un grupo directamente bajo el mundo.
- Una condición cuyo tipo es una categoría se juzga por el nivel total de todas las categorías que pertenecen a ese grupo.
- Una condición cuyo tipo es una acción se juzga por el total del número de veces que se han ejecutado todas las acciones que pertenecen a ese grupo.
- Una condición cuyo tipo es un artículo se juzga por el total de la cantidad en posesión de todos los artículos que pertenecen a ese grupo.
- Los elementos que no están desbloqueados (cualquier estado distinto de released) no se incluyen en el total.
- La probabilidad de consumo (chance) y la condición de equipamiento (equipment) de un artículo se ignoran, y la cantidad en posesión tampoco se consume. Solo se usan para el juicio.
- Al desactivarlo, el id de las condiciones se trata como el ID de una categoría, una acción o un artículo concretos, como hasta ahora.
- [_group_](es/editor/group)
___

### [_Obtención（Al regresar）_](es/editor/acquisition)
___

### Grupo de tareas（Al regresar）
No se usa en un evento
- No se muestran en las misiones ni en la lista de tareas, por lo que no se especifica el grupo.
- El campo de entrada no se muestra en el editor.
___

## Al fin del juego
Se activa cuando la resistencia se agota en combate
- Se activa cuando la resistencia del jugador se agota en combate.
- Al mismo tiempo, todas las acciones en ejecución se detienen y todas las reservas en espera se descartan.
- Si pones una cantidad negativa en la recompensa, puedes darle un precio al fin del juego.
___

### [_Información（Al fin del juego）_](es/editor/information)
___

### Categoría（Al fin del juego）
No se usa en un evento
- No se muestran en las misiones ni en la lista de tareas, por lo que no se especifica la categoría a la que pertenecen.
- El campo de entrada no se muestra en el editor.
___

### Momento（Al fin del juego）
El momento en que se dispara el evento (fijo)
- Está fijado como `gameovered` y no se puede editar.
- Se activa cuantas veces haga falta, cada vez que llegas al fin del juego.
___

### Estado de visualización inicial（Al fin del juego）
El estado de visualización inicial del icono del evento (el disparo lo decide el momento y este ajuste no lo dispara)
- Las condiciones de disparo de un evento las decide el momento, y este campo solo afecta al aspecto del icono.
- secreted: El icono no se muestra hasta que se cumplen todos los requirements (el disparo en sí ocurre en su momento).
- hidden y hinted: El icono se muestra con una raya encima, como no desbloqueado todavía.
- released: La raya desaparece y se muestra como ya desbloqueado.
___

### [_Requisito（Al fin del juego）_](es/editor/requirement)
___

### Suma por grupo（Al fin del juego）
Trata el id de las condiciones como un ID de grupo y juzga por el valor total de los elementos que pertenecen a él
- Al activarlo, el id que estableces en las condiciones (requirements) se trata como el ID de un grupo directamente bajo el mundo.
- Una condición cuyo tipo es una categoría se juzga por el nivel total de todas las categorías que pertenecen a ese grupo.
- Una condición cuyo tipo es una acción se juzga por el total del número de veces que se han ejecutado todas las acciones que pertenecen a ese grupo.
- Una condición cuyo tipo es un artículo se juzga por el total de la cantidad en posesión de todos los artículos que pertenecen a ese grupo.
- Los elementos que no están desbloqueados (cualquier estado distinto de released) no se incluyen en el total.
- La probabilidad de consumo (chance) y la condición de equipamiento (equipment) de un artículo se ignoran, y la cantidad en posesión tampoco se consume. Solo se usan para el juicio.
- Al desactivarlo, el id de las condiciones se trata como el ID de una categoría, una acción o un artículo concretos, como hasta ahora.
- [_group_](es/editor/group)
___

### [_Obtención（Al fin del juego）_](es/editor/acquisition)
___

### Grupo de tareas（Al fin del juego）
No se usa en un evento
- No se muestran en las misiones ni en la lista de tareas, por lo que no se especifica el grupo.
- El campo de entrada no se muestra en el editor.
___

## Al primer inicio
Se activa al abrir el mundo por primera vez
- Se activa cuando este mundo se inicia por primera vez.
- Se usa para explicar la ambientación del mundo y para entregar los preparativos que se dan al empezar.
___

### [_Información（Al primer inicio）_](es/editor/information)
___

### Categoría（Al primer inicio）
No se usa en un evento
- No se muestran en las misiones ni en la lista de tareas, por lo que no se especifica la categoría a la que pertenecen.
- El campo de entrada no se muestra en el editor.
___

### Momento（Al primer inicio）
El momento en que se dispara el evento (fijo)
- Está fijado como `welcomed` y no se puede editar.
- Se activa una sola vez, en el primer inicio.
___

### Estado de visualización inicial（Al primer inicio）
El estado de visualización inicial del icono del evento (el disparo lo decide el momento y este ajuste no lo dispara)
- Las condiciones de disparo de un evento las decide el momento, y este campo solo afecta al aspecto del icono.
- secreted: El icono no se muestra hasta que se cumplen todos los requirements (el disparo en sí ocurre en su momento).
- hidden y hinted: El icono se muestra con una raya encima, como no desbloqueado todavía.
- released: La raya desaparece y se muestra como ya desbloqueado.
___

### [_Requisito（Al primer inicio）_](es/editor/requirement)
___

### Suma por grupo（Al primer inicio）
Trata el id de las condiciones como un ID de grupo y juzga por el valor total de los elementos que pertenecen a él
- Al activarlo, el id que estableces en las condiciones (requirements) se trata como el ID de un grupo directamente bajo el mundo.
- Una condición cuyo tipo es una categoría se juzga por el nivel total de todas las categorías que pertenecen a ese grupo.
- Una condición cuyo tipo es una acción se juzga por el total del número de veces que se han ejecutado todas las acciones que pertenecen a ese grupo.
- Una condición cuyo tipo es un artículo se juzga por el total de la cantidad en posesión de todos los artículos que pertenecen a ese grupo.
- Los elementos que no están desbloqueados (cualquier estado distinto de released) no se incluyen en el total.
- La probabilidad de consumo (chance) y la condición de equipamiento (equipment) de un artículo se ignoran, y la cantidad en posesión tampoco se consume. Solo se usan para el juicio.
- Al desactivarlo, el id de las condiciones se trata como el ID de una categoría, una acción o un artículo concretos, como hasta ahora.
- [_group_](es/editor/group)
___

### [_Obtención（Al primer inicio）_](es/editor/acquisition)
___

### Grupo de tareas（Al primer inicio）
No se usa en un evento
- No se muestran en las misiones ni en la lista de tareas, por lo que no se especifica el grupo.
- El campo de entrada no se muestra en el editor.
___

## Al completar el juego
Se activa cuando todas las categorías alcanzan el nivel máximo
- Se activa cuando el nivel de todas las categorías alcanza el valor máximo (maxCategoryLevels).
- Las categorías que no son numeric quedan fuera de la comprobación. Por eso no se activa en un mundo que no tiene ni una sola categoría numérica.
___

### [_Información（Al completar el juego）_](es/editor/information)
___

### Categoría（Al completar el juego）
No se usa en un evento
- No se muestran en las misiones ni en la lista de tareas, por lo que no se especifica la categoría a la que pertenecen.
- El campo de entrada no se muestra en el editor.
___

### Momento（Al completar el juego）
El momento en que se dispara el evento (fijo)
- Está fijado como `completed` y no se puede editar.
- Se activa una sola vez, cuando se cumplen los requisitos.
___

### Estado de visualización inicial（Al completar el juego）
El estado de visualización inicial del icono del evento (el disparo lo decide el momento y este ajuste no lo dispara)
- Las condiciones de disparo de un evento las decide el momento, y este campo solo afecta al aspecto del icono.
- secreted: El icono no se muestra hasta que se cumplen todos los requirements (el disparo en sí ocurre en su momento).
- hidden y hinted: El icono se muestra con una raya encima, como no desbloqueado todavía.
- released: La raya desaparece y se muestra como ya desbloqueado.
___

### [_Requisito（Al completar el juego）_](es/editor/requirement)
___

### Suma por grupo（Al completar el juego）
Trata el id de las condiciones como un ID de grupo y juzga por el valor total de los elementos que pertenecen a él
- Al activarlo, el id que estableces en las condiciones (requirements) se trata como el ID de un grupo directamente bajo el mundo.
- Una condición cuyo tipo es una categoría se juzga por el nivel total de todas las categorías que pertenecen a ese grupo.
- Una condición cuyo tipo es una acción se juzga por el total del número de veces que se han ejecutado todas las acciones que pertenecen a ese grupo.
- Una condición cuyo tipo es un artículo se juzga por el total de la cantidad en posesión de todos los artículos que pertenecen a ese grupo.
- Los elementos que no están desbloqueados (cualquier estado distinto de released) no se incluyen en el total.
- La probabilidad de consumo (chance) y la condición de equipamiento (equipment) de un artículo se ignoran, y la cantidad en posesión tampoco se consume. Solo se usan para el juicio.
- Al desactivarlo, el id de las condiciones se trata como el ID de una categoría, una acción o un artículo concretos, como hasta ahora.
- [_group_](es/editor/group)
___

### [_Obtención（Al completar el juego）_](es/editor/acquisition)
___

### Grupo de tareas（Al completar el juego）
No se usa en un evento
- No se muestran en las misiones ni en la lista de tareas, por lo que no se especifica el grupo.
- El campo de entrada no se muestra en el editor.
___

## Al completar una acción suelta
Se activa al completar una acción suelta, como un cofre del tesoro
- Se activa cuando se completa y se comprueba una acción de la clase single (un cofre del tesoro, por ejemplo).
- Aparte de la recompensa de la propia acción, puedes sumar la recompensa configurada aquí.
___

### [_Información（Al completar una acción suelta）_](es/editor/information)
___

### Categoría（Al completar una acción suelta）
No se usa en un evento
- No se muestran en las misiones ni en la lista de tareas, por lo que no se especifica la categoría a la que pertenecen.
- El campo de entrada no se muestra en el editor.
___

### Momento（Al completar una acción suelta）
El momento en que se dispara el evento (fijo)
- Está fijado como `obtained` y no se puede editar.
- Se activa cuantas veces haga falta, cada vez que se completa una acción suelta.
___

### Estado de visualización inicial（Al completar una acción suelta）
El estado de visualización inicial del icono del evento (el disparo lo decide el momento y este ajuste no lo dispara)
- Las condiciones de disparo de un evento las decide el momento, y este campo solo afecta al aspecto del icono.
- secreted: El icono no se muestra hasta que se cumplen todos los requirements (el disparo en sí ocurre en su momento).
- hidden y hinted: El icono se muestra con una raya encima, como no desbloqueado todavía.
- released: La raya desaparece y se muestra como ya desbloqueado.
___

### [_Requisito（Al completar una acción suelta）_](es/editor/requirement)
___

### Suma por grupo（Al completar una acción suelta）
Trata el id de las condiciones como un ID de grupo y juzga por el valor total de los elementos que pertenecen a él
- Al activarlo, el id que estableces en las condiciones (requirements) se trata como el ID de un grupo directamente bajo el mundo.
- Una condición cuyo tipo es una categoría se juzga por el nivel total de todas las categorías que pertenecen a ese grupo.
- Una condición cuyo tipo es una acción se juzga por el total del número de veces que se han ejecutado todas las acciones que pertenecen a ese grupo.
- Una condición cuyo tipo es un artículo se juzga por el total de la cantidad en posesión de todos los artículos que pertenecen a ese grupo.
- Los elementos que no están desbloqueados (cualquier estado distinto de released) no se incluyen en el total.
- La probabilidad de consumo (chance) y la condición de equipamiento (equipment) de un artículo se ignoran, y la cantidad en posesión tampoco se consume. Solo se usan para el juicio.
- Al desactivarlo, el id de las condiciones se trata como el ID de una categoría, una acción o un artículo concretos, como hasta ahora.
- [_group_](es/editor/group)
___

### [_Obtención（Al completar una acción suelta）_](es/editor/acquisition)
___

### Grupo de tareas（Al completar una acción suelta）
No se usa en un evento
- No se muestran en las misiones ni en la lista de tareas, por lo que no se especifica el grupo.
- El campo de entrada no se muestra en el editor.