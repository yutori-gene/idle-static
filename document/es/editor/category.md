
# Categoría
El marco amplio que clasifica las acciones y los artículos
- Representa una clasificación grande.
- Por ejemplo, puedes establecerla como un marco libre: corta distancia, larga distancia, magia, mazmorra, herrería, taller y demás.
- Las acciones y los artículos se colocan directamente bajo el mundo y se vinculan mediante el ID de categoría.
___

## [_Información_](es/editor/information)
___

## Grupo
La clasificación por grupo de visualización de la categoría
- Aplica uno de los definidos en los grupos que están directamente bajo el mundo.
- La lista de categorías se muestra en el orden de los grupos que has establecido.
- [_group_](es/editor/group)
___

## Estado de desbloqueo inicial
El estado inicial de visualización y desbloqueo del elemento (pasa automáticamente a un estado superior cuando se cumplen los requisitos de activación)
- secreted: No aparece en absoluto en la interfaz hasta que se cumplen todos los requirements (tampoco sale en las pistas y queda enmascarado en las listas de requisitos y recompensas).
- hidden: Mientras ningún elemento desbloqueado lo consulta y sus requisitos siguen sin cumplirse, queda oculto por completo (el nombre también aparece atenuado y no se puede operar).
- hinted (predeterminado): Solo se muestra el nombre por adelantado, pero no se puede operar hasta que se desbloquea.
- released: Está desbloqueado y se puede operar desde el principio, sin relación con las condiciones (antes «mostrar desde el principio»).
___

## [_Requisito_](es/editor/requirement)
___

## Presencia de nivel
La presencia de la función de nivel de categoría
- Es la marca de si esta categoría tiene nivel o no.
- Si está activada tiene nivel, y si está desactivada no lo tiene.
- Como ejemplo, hay un uso en el que las categorías basadas en la experiencia, como la esgrima o la magia, se activan, y las categorías de lugares, como las mazmorras o las herrerías, se desactivan.
- Si está desactivada no entra experiencia y, en el cálculo de las propiedades, la diferencia de nivel entre el jugador y la acción se trata como 0. La corrección de las propiedades por el equipamiento sigue surtiendo efecto igual.
- Una categoría desactivada también queda fuera del juicio de completado (completed).
___

## Avance simultáneo
La configuración de ejecución en paralelo con otras categorías
- Es la marca de si las acciones de esta categoría pueden avanzar en paralelo con las acciones de otras categorías.
- Si está activada, pueden avanzar a la vez de forma independiente de las acciones de otras categorías.
- Si está desactivada, en el conjunto de las categorías igualmente desactivadas solo puede avanzar una acción.
- Si inicias una acción nueva en una categoría desactivada, la acción en curso no se cancela, sino que se empuja de vuelta al principio de la cola de espera. El número de ejecuciones restante se conserva y, cuando termina la acción que se ha colado, se reanuda desde donde quedó.
___

## Fondo
La configuración de fondo propia de la categoría
- Establece el fondo de esta categoría.
- Cuando se selecciona la categoría, la imagen de fondo cambia junto con ella.
- Si no se establece, se usa tal cual el fondo del diseño.
- Al importarla se reduce automáticamente a un tamaño dentro de 256×256 píxeles.