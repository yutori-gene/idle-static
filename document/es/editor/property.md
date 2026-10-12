
# Propiedad
La configuración de los efectos que tiene un artículo
- Estos son los campos de efecto que se pueden establecer en un artículo.
- Los artículos cuyo tipo de equipamiento es `necessary` o `consumable` aplican su efecto solo mientras están equipados. `unnecessary` aplica su efecto con solo tenerlo en posesión, y la magnitud del efecto es proporcional a la cantidad en posesión (el doble si posees 2).
- Como la cantidad en posesión es directamente el multiplicador del efecto de `unnecessary`, `maximum` (la cantidad máxima en posesión) es el tope del efecto. Cuando ajustes el equilibrio, configúralo junto con `maximum`.
- El valor de cualquiera de los campos se calcula como algo que ajusta la diferencia de nivel entre el nivel del jugador y el nivel de la acción.
- Por ejemplo, si el valor de ataque es 10, el ataque se calcula como si el nivel del jugador fuera 10 más alto que el nivel de la acción. Un valor negativo hace lo contrario.
- Cuánto influye la diferencia de nivel lo decide `propertyRatio` de general (2 de forma predeterminada), y cambia según ese multiplicador por cada 10 de diferencia de nivel.
- Si `numeric` de la categoría está desactivado, la diferencia de nivel real se trata como 0, así que el valor que establezcas aquí pasa a ser la diferencia de nivel tal cual.
- Los campos que actúan por división, como el tiempo requerido y el daño recibido, se topan en 100 veces (hasta una centésima en el caso del tiempo requerido).
- En los artículos que hay que equipar, solo surte efecto el que está equipado en cada grupo de equipamiento.
- Un artículo cuya cantidad en posesión es 0 no produce ningún efecto, sea cual sea su tipo de equipamiento.
- attack, defence, accuracy, evasion y restore solo funcionan en acciones del tipo `stamina`.

|Propiedad|Detalle del efecto|
|-|-|
|speed|Acorta el tiempo requerido de la acción. El tiempo requerido cambia de forma inversamente proporcional a la diferencia de nivel (el multiplicador actúa a la mitad).|
|chance|Cambia la probabilidad de éxito de la acción. El multiplicador se aplica a la proporción entre éxito y fracaso, así que nunca supera el `100`%.|
|experience|Cambia la experiencia obtenida. Aumenta de forma proporcional a la diferencia de nivel (el cálculo está invertido: cuanto mayor es el nivel de la acción, más se obtiene).|
|attack|Cambia el daño de resistencia que se inflige al oponente. (solo acciones stamina)|
|defence|Reduce el daño de resistencia que se recibe del oponente (el multiplicador actúa a la mitad). (solo acciones stamina)|
|accuracy|Reduce la tasa de fallo del ataque. (solo acciones stamina)|
|evasion|Cambia la tasa de evasión del ataque del oponente (el multiplicador actúa a la mitad). (solo acciones stamina)|
|restore|Cambia la cantidad de resistencia recuperada al terminar la acción. Cuanto más cerca del máximo, más lento es el aumento. (solo acciones stamina)|
___

## Categoría
La categoría a la que se aplica la propiedad
- Establece el ID de la categoría a la que se aplica esta propiedad.
- Si se establece `*`, se aplica a todas las categorías.
- Si se deja en blanco, se aplica a la categoría a la que pertenece el artículo.
- Si estableces el ID de otra categoría, el efecto alcanza a las acciones de esa categoría. No importa en qué categoría esté el propio artículo.
___

## Ataque [Diferencia de nivel]
La corrección al daño de resistencia que se inflige al oponente (solo funciona en acciones stamina)
- El daño de ataque se calcula como si el nivel del jugador fuera más alto que el nivel de la acción en este valor.
___

## Defensa [Diferencia de nivel]
La corrección al daño de resistencia que se recibe del oponente (solo funciona en acciones stamina)
- El daño recibido se calcula como si el nivel del jugador fuera más alto que el nivel de la acción en este valor. Cuanto mayor es el valor, más se reduce el daño recibido.
___

## Precisión [Diferencia de nivel]
La corrección a la tasa de fallo del ataque (solo funciona en acciones stamina)
- La tasa de fallo se calcula como si el nivel del jugador fuera más alto que el nivel de la acción en este valor. Cuanto mayor es el valor, más baja es la tasa de fallo.
___

## Evasión [Diferencia de nivel]
La corrección a la tasa de evasión del ataque del oponente (solo funciona en acciones stamina)
- La tasa de evasión se calcula como si el nivel del jugador fuera más alto que el nivel de la acción en este valor. Cuanto mayor es el valor, más fácil es evadir el ataque del oponente.
___

## Recuperación [Diferencia de nivel]
La corrección a la cantidad de resistencia recuperada (solo funciona en acciones stamina)
- La cantidad de resistencia recuperada se calcula como si el nivel del jugador fuera más alto que el nivel de la acción en este valor.
___

## Velocidad [Diferencia de nivel]
La corrección al tiempo requerido de la acción
- El tiempo requerido se calcula como si el nivel del jugador fuera más alto que el nivel de la acción en este valor. Cuanto mayor es el valor, más se acorta el tiempo requerido.
___

## Tasa de éxito [Diferencia de nivel]
La corrección a la probabilidad de éxito de la acción
- La probabilidad de éxito de la acción se calcula como si el nivel del jugador fuera más alto que el nivel de la acción en este valor. Cuanto mayor es el valor, más sube la probabilidad de éxito.
___

## Experiencia [Diferencia de nivel]
La corrección a la experiencia obtenida
- La experiencia se calcula como si el nivel del jugador fuera más bajo que el nivel de la acción en este valor (como el cálculo está invertido, cuanto mayor es el nivel de la acción, más experiencia se obtiene).