
# Tarea
Una misión que se logra cuando se cumplen las condiciones
- Se logra cuando se cumplen las condiciones que estableces, y aparece un mensaje en la parte superior de la pantalla.
- Aparece en la lista de misiones del reproductor y en la lista de tareas de la categoría.
- Una tarea sin condiciones establecidas nunca se logra.
- Una vez lograda, sigue lograda aunque después dejen de cumplirse las condiciones, y la recompensa puede recibirse en cualquier momento.
- La recompensa no se entrega automáticamente. El jugador la recibe cuando abre la tarea y pulsa la barra de Obtención.
- Hasta que se recibe la recompensa, la barra de la lista lleva una cinta que indica que aún no se ha reclamado.
- Una tarea sin recompensa establecida no muestra la barra de Obtención y se completa en el momento en que se logra.
- No puedes recibir la recompensa mientras el número de tipos de artículos que puedes tener está en su límite. Ordena lo que tienes y vuelve a reclamarla.
- Con la obtención puedes cambiar el nivel de una categoría, el número de veces que se ha ejecutado una acción y la cantidad en posesión de un artículo.
- Lo que quieras disparar en un momento distinto de las condiciones, como el primer arranque o el fin del juego, se establece con un evento fijo (unique).
- [_unique_](es/editor/unique)
___

## [_Información_](es/editor/information)
___

## Categoría
El ID de la categoría a la que pertenece la tarea
- Especifica el ID de la categoría a la que pertenece esta tarea.
- Al establecerlo, la lista de tareas se añade a la pantalla de la categoría del reproductor, y en la lista de misiones también se muestran agrupadas por categoría.
- Si se deja en blanco, no pertenece a ninguna categoría y se muestra junto al principio de la lista de misiones.
- Si no hay color establecido en la propia tarea, hereda el color de la categoría.
- [_category_](es/editor/category)
___

## Momento
El momento en que se dispara la tarea (fijado en `tasked`)
- La tarea está fijada en `tasked` (cuando se cumplen las condiciones que estableces) y no se puede editar.
- La recompensa solo puede recibirse una vez, y una vez recibida sigue lograda sin más cambios.
- Lo que quieras disparar en otro momento determinado se establece con un evento fijo (unique).
- [_unique_](es/editor/unique)
___

## Estado de visualización inicial
El estado de visualización inicial del icono de la tarea (el logro lo deciden las condiciones y este ajuste no lo logra)
- Las condiciones de logro de una tarea las deciden requirements, y este campo solo afecta al aspecto del icono en la lista.
- secreted: No aparece en absoluto en la lista de tareas hasta que se cumplen todos los requirements (el logro en sí sigue ocurriendo por las condiciones).
- hidden y hinted: El icono se muestra con una raya encima, como no desbloqueado todavía.
- released: La raya desaparece y se muestra como ya desbloqueado.
- Una tarea que se ha logrado una vez no desaparece de la lista, y sigue mostrándose como lograda aunque después dejen de cumplirse las condiciones.
___

## [_Requisito_](es/editor/requirement)
___

## Suma por grupo
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

## [_Obtención_](es/editor/acquisition)
___

## Grupo de tareas
La clasificación de grupo de visualización de la tarea
- Aplica uno de los definidos en los grupos que están directamente bajo el mundo.
- En la lista de tareas de una categoría se muestran separadas por grupo, con un encabezado en cada uno. Las tareas sin grupo establecido también forman un bloque, y para su encabezado se usa el preajuste «Tarea».
- En la lista de misiones no se separan por encabezado, y solo el orden en que se alinean queda reunido por grupo.
- El orden en que se alinean los bloques lo decide la posición donde aparece la primera tarea de ese grupo.
- [_group_](es/editor/group)