
# General
Ajustes básicos del juego, como el idioma y los ajustes de nivel
___

## Idioma
El idioma en el que creas el mundo
- Establece en qué idioma escribes el nombre y la descripción del mundo. Es el idioma que sirve de base cuando preparas las traducciones.
- También es el idioma que se muestra primero cuando un jugador empieza el juego.
- Si translations está desactivado, el jugador no puede cambiar de este idioma a otro.
- Es un ajuste distinto del idioma de la interfaz del propio editor de mundos. El idioma de la interfaz del editor se elige al abrir el editor.
- [_translation_](es/editor/translation)
___

## Traducción
Si se preparan traducciones para varios idiomas
- Si está activado, los jugadores pueden cambiar al idioma que prefieran y jugar en él.
- Si está desactivado, queda fijado al idioma elegido en language y la propia operación de cambio no está disponible.
- Si lo activas, tienes que preparar los datos de traducción de cada idioma. El paquete publicado incluye los datos de traducción.
- Lo que cambia son los nombres y las descripciones definidos en el mundo. Las traducciones de las expresiones comunes de la pantalla (los preajustes) se incluyen siempre, al margen de este ajuste.
- [_translation_](es/editor/translation)
- [_preset_](es/editor/preset)
___

## Tiempo máximo sin conexión [Horas]
El límite de tiempo del avance sin conexión
- Establece cuántas horas como máximo dura el avance mientras estás sin conexión.
- Por ejemplo, si estableces 6 horas, se procesa el regreso desde la desconexión hasta 6 horas, y aunque regreses tras un intervalo mayor, el tiempo sin conexión se trata como 6 horas.
- Si estableces 0 horas, no se procesa nada en absoluto al regresar desde la desconexión.
- El valor máximo es de 24 horas.
- [_category_](es/editor/category)
___

## Nivel máximo de las categorías
El tope de nivel de cada categoría
- Establece el tope del nivel de cada categoría. El valor predeterminado es `100`.
- Aunque se gane experiencia, el nivel se detiene en este valor y lo que sobra se descarta. Lo mismo ocurre si una recompensa suma niveles directamente.
- Si el nivel de los datos guardados supera el tope, se recorta hasta el tope al cargarlos.
- La barra de nivel y el porcentaje de avance de las estadísticas se muestran tomando este valor como denominador.
- Una categoría con numeric desactivado no sube de nivel, así que este valor no le afecta.
- [_category_](es/editor/category)
___

## Moneda
Los ajustes de la moneda (coins) que se usa dentro del juego
- Establece la moneda que se usa dentro del juego. Hace falta al menos una.
- Puedes definir varias monedas y configurar cada una como información (ID, nombre, icono, color, etc.).
- Las monedas se usan para comprar y vender artículos y para ampliar la capacidad y la cola.
- La primera moneda se trata como la moneda principal y se usa cuando no se especifica el ID de moneda (`coinId`) en un artículo, la capacidad o la cola, o cuando se especifica un ID que no está en la lista de monedas.
- Una moneda se trata como un tipo de artículo. En los requisitos y las recompensas, refiérete al ID configurado aquí como si fuera un artículo. No pertenece a ninguna categoría y no es objeto de equipamiento ni de compraventa.
- [_information_](es/editor/information)
- [_item_](es/editor/item)
___

## Capacidad
Los ajustes de capacidad del inventario
- Gestiona el tope de la cantidad de clases de artículos que un jugador puede tener.
- Se gestiona por la cantidad de clases de artículos que tienes, no por la cantidad que posees de cada artículo.
- Si pones `initialCount` a 0, la capacidad pasa a ser ilimitada y tampoco se puede comprar capacidad.
- Cuando te refieras al artículo de la capacidad en los requisitos o las recompensas, usa el ID configurado aquí o `capacity`.
- [_item_](es/editor/item)
___

### [_Información de la capacidad_](es/editor/information)
___

### Valor inicial de la capacidad [Unidades]
La capacidad inicial del inventario (la cantidad de clases de artículos que se pueden tener)
- Es la capacidad inicial al empezar el juego (la cantidad de clases de artículos que se pueden tener). El valor predeterminado es `10`.
- Si lo pones a `0`, la capacidad pasa a ser ilimitada y, al mismo tiempo, deja de poder comprarse capacidad.
___

### Precio base de la capacidad [Monedas]
El precio inicial para aumentar la capacidad en uno
- Es el precio base (en monedas) para aumentar en un espacio la capacidad del inventario. Configúralo como un número entero de `1` o más.
- El precio real se calcula como «precio base × tasa de incremento^cantidad de compras hechas».
- Ejemplo: con un precio base de 100 y una tasa de incremento de 1,2, la 1.ª vez son 100 monedas, la 2.ª 120 monedas y la 3.ª 144 monedas.
___

### Tasa de incremento de la capacidad [Multiplicador]
La tasa de incremento del coste de ampliar la capacidad
- Es el multiplicador de cuánto aumenta el coste de ampliar la capacidad en la enésima compra. El valor predeterminado es `1.2`.
- Con `1.0` el precio es siempre el mismo; con `1.2` se encarece un 20 % con cada compra.
- Fórmula: precio base × tasa de incremento^cantidad de compras hechas

|Tasa de incremento|Unidad 1|Unidad 5|Unidad 10|Unidad 100|Unidad 1000|
|-|-|-|-|-|-|
|1.00|x1.00|x1.00|x1.00|x1.00|x1.00|
|1.05|x1.00|x1.22|x1.55|x125.24|x1.5×10²¹|
|1.10|x1.00|x1.46|x2.36|x1.3×10⁴|x2.2×10⁴¹|
|1.20|x1.00|x2.07|x5.16|x6.9×10⁷|x1.3×10⁷⁹|
|1.50|x1.00|x5.06|x38.44|x2.7×10¹⁷|x8.2×10¹⁷⁵|
___

### ID de moneda de la capacidad
El ID de la moneda que se usa para ampliar la capacidad
- Especifica el ID de la moneda (coins) que se usa para el precio de ampliación de la capacidad del inventario.
- Si se deja en blanco, o si se especifica un ID que no está en la lista de monedas, se usa la moneda principal (la primera de coins).
___

### Límite de compras de la capacidad [Veces]
La cantidad máxima de veces que se puede comprar capacidad
- Es el tope de la cantidad de veces que se puede comprar capacidad con una moneda.
- Si lo pones a `0`, se puede comprar sin límite.
- Si lo pones a `-1`, deja de poder comprarse.
- El aumento de capacidad por una recompensa queda fuera de este tope.
___

## Cola
Los ajustes de la cantidad de espacios para ejecutar acciones de forma sucesiva (la cola)
- Gestiona la cantidad de espacios de la cola para ejecutar acciones de forma sucesiva.
- La cola incluye la acción en ejecución, y se ejecuta la acción que está a la cabeza. Cuando los espacios son `1`, solo está la que se ejecuta y no se puede tener nada en espera.
- Igual que con la capacidad, la cantidad de espacios se puede comprar con una moneda, y también se puede aumentar indicando el artículo de la cola como recompensa de una acción o un evento.
- Cuando te refieras al artículo de la cola en los requisitos o las recompensas, usa el ID configurado aquí o `queue`.
- [_item_](es/editor/item)
___

### [_Información de la cola_](es/editor/information)
___

### Valor inicial de la cola [Espacios]
La cantidad de espacios de ejecución sucesiva al empezar el juego
- Es la cantidad de espacios de la cola al empezar el juego. El valor predeterminado es `1`.
- El valor mínimo es `1` (porque la que se ejecuta ocupa un espacio; no existe el tratamiento de `0` = ilimitado que tiene la capacidad).
___

### Precio base de la cola [Monedas]
El precio inicial para aumentar los espacios en uno
- Es el precio base (en monedas) para aumentar en uno los espacios de ejecución sucesiva. Configúralo como un número entero de `1` o más.
- El precio real se calcula como «precio base × tasa de incremento^cantidad de compras hechas».
- Ejemplo: con un precio base de 100 y una tasa de incremento de 1,2, la 1.ª vez son 100 monedas, la 2.ª 120 monedas y la 3.ª 144 monedas.
___

### Tasa de incremento de la cola [Multiplicador]
La tasa de incremento del coste de ampliar los espacios
- Es el multiplicador de cuánto aumenta el coste de ampliar los espacios en la enésima compra. El valor predeterminado es `1.2`.
- Con `1.0` el precio es siempre el mismo; con `1.2` se encarece un 20 % con cada compra.
- Fórmula: precio base × tasa de incremento^cantidad de compras hechas
- La forma de aumentar es la misma que la de la tasa de incremento de la capacidad. Para orientarte sobre el multiplicador, consulta la tabla de la capacidad.
___

### ID de moneda de la cola
El ID de la moneda que se usa para ampliar los espacios
- Especifica el ID de la moneda (coins) que se usa para el precio de ampliación de los espacios de ejecución sucesiva.
- Si se deja en blanco, o si se especifica un ID que no está en la lista de monedas, se usa la moneda principal (la primera de coins).
___

### Límite de compras de la cola [Veces]
La cantidad máxima de veces que se pueden comprar espacios
- Es el tope de la cantidad de veces que se pueden comprar con una moneda los espacios de ejecución sucesiva.
- Si lo pones a `0`, se puede comprar sin límite.
- Si lo pones a `-1`, deja de poder comprarse.
- El aumento de espacios por una recompensa queda fuera de este tope.
___

## Tasa de crecimiento de la experiencia [Multiplicador]
La tasa de incremento de la dificultad de subir de nivel
- Es la tasa de crecimiento de la experiencia necesaria para alcanzar el siguiente nivel a medida que sube el nivel de una categoría. El valor predeterminado es `1.05` y no se puede establecer un valor menor que `1`.
- Aumentar este valor eleva la dificultad. Si lo pones a `1`, la experiencia necesaria es la misma en cualquier nivel.
- La experiencia necesaria para alcanzar el siguiente nivel es (tasa de crecimiento de la experiencia)^(nivel actual-1). Los niveles se cuentan descartando los decimales.
- La experiencia obtenida después de alcanzar el tope (el nivel máximo de las categorías) se descarta.

|Tasa de crecimiento de la experiencia|Lv.1|Lv.2|Lv.10|Lv.50|Lv.99|
|-|-|-|-|-|-|
|1.00|x1.00|x1.00|x1.00|x1.00|x1.00|
|1.02|x1.00|x1.02|x1.20|x2.64|x6.96|
|1.05|x1.00|x1.05|x1.55|x10.92|x119.28|
|1.10|x1.00|x1.10|x2.36|x106.72|x1.1×10⁴|
|1.20|x1.00|x1.20|x5.16|x7583.70|x5.8×10⁷|
- [_category_](es/editor/category)
___

## Límite de nivel de las acciones
Exigir el nivel de la categoría del atributo para ejecutar una acción
- Si está activado, al principio de los requisitos (requirements) de cada acción se añade automáticamente el requisito «que el nivel de la categoría del atributo sea igual o superior al nivel de esa acción».
- Si no hay ningún atributo (attribute) configurado, se usa la categoría a la que pertenece.
- Si numeric está desactivado en la categoría del atributo, esta no sube de nivel, así que no se añade nada.
- El requisito añadido se escribe al cargar el mundo, así que en la pantalla del reproductor se muestra igual que un requisito normal.
- [_action_](es/editor/action)
- [_category_](es/editor/category)
- [_requirement_](es/editor/requirement)
___

## Ratio de propiedades [Multiplicador]
Por cuánto se multiplican las propiedades por cada 10 de diferencia de nivel
- Establece por cuánto se multiplican las propiedades por cada `10` que se amplía la diferencia entre el nivel de la categoría y el nivel de la acción. El valor predeterminado es `1.5` y no se puede establecer un valor menor que `1`.
- El multiplicador se calcula como (ratio de propiedades)^(diferencia de nivel÷10). Cuando la diferencia de nivel es `0`, es `1` vez y se usa tal cual el valor configurado en la acción.
- El ataque y la experiencia aumentan según este multiplicador, y la defensa (el daño recibido) y la velocidad (el tiempo requerido) disminuyen según el mismo multiplicador.
- La precisión, la evasión, la tasa de éxito y la recuperación son valores que se mantienen entre el `0` y el `100` %, así que el multiplicador se aplica a la proporción entre la parte que se cumple y la que no. El `0` % y el `100` % no cambian, y ningún valor intermedio supera el `100` %.
- En la defensa, la evasión y la velocidad el multiplicador actúa a la mitad (una diferencia de nivel de `20` equivale a una diferencia de `10` en las demás propiedades). La defensa y la evasión se aplican por partida doble, a la probabilidad de recibir impactos y al daño recibido, y la velocidad se aplica a todas las demás propiedades como cantidad de ejecuciones, así que su efecto se debilita para mantener el equilibrio.
- Una referencia es (la tasa de crecimiento de la experiencia) elevada a `6.7`. Por encima de eso, subir de nivel se acelera cuanto más alto es el nivel; por debajo, subir de nivel en la parte final lleva más tiempo.
- Si lo pones a `1`, desaparece la influencia de la diferencia de nivel. Aumentar el valor hace más bruscas las ventajas y desventajas debidas a la diferencia de nivel.

|Ratio de propiedades|Diferencia de nivel -20|Diferencia de nivel -10|Diferencia de nivel 0|Diferencia de nivel +10|Diferencia de nivel +20|
|-|-|-|-|-|-|
|`1`|`x1.00`|`x1.00`|`x1.00`|`x1.00`|`x1.00`|
|`1.5`|`x0.44`|`x0.67`|`x1.00`|`x1.50`|`x2.25`|
|`2`|`x0.25`|`x0.50`|`x1.00`|`x2.00`|`x4.00`|
|`3`|`x0.11`|`x0.33`|`x1.00`|`x3.00`|`x9.00`|
- [_action_](es/editor/action)
- [_property_](es/editor/property)
___

## [_Valores de combate_](es/editor/combat)