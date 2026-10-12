
# Artículo
Elementos de objetos como el equipamiento y los consumibles
- Son los elementos relacionados con poseer cosas como equipamiento, consumibles y objetos de valor.
- Los espacios de equipamiento se crean por grupo en cada categoría, y solo puede equiparse uno de los artículos del mismo espacio. También puede hacerse que un artículo no se pueda equipar.
- Como la cantidad en posesión es en sí misma el progreso, un artículo también puede usarse como una marca o un contador. Si haces un artículo sin efecto que tampoco pueda equiparse, se convierte en un elemento que solo cuenta un número.
___

## [_Información_](es/editor/information)
___

## Categoría
El ID de la categoría a la que pertenece el artículo
- Especifica el ID de la categoría a la que pertenece este artículo. Se alinea en la lista de artículos de la categoría que especifiques, y los espacios de equipamiento también se crean por categoría.
- Si no hay color establecido en el propio artículo, hereda el color de la categoría.
- A dónde llegan los efectos de las propiedades puede especificarse aparte de la categoría a la que pertenece, así que un artículo de otra categoría también puede dar efecto.
- [_category_](es/editor/category)
- [_property_](es/editor/property)
___

## Grupo
La clasificación de grupo de visualización del artículo
- Aplica uno de los definidos en los grupos que están directamente bajo el mundo.
- La lista de artículos se muestra en el orden de los grupos que establezcas.
- Si se deja en blanco, no se divide en grupos.
- [_group_](es/editor/group)
___

## Estado de desbloqueo inicial
El estado inicial de visualización y desbloqueo del elemento (pasa automáticamente a un estado superior cuando se cumplen los requisitos de activación)
- secreted: No aparece en absoluto en la interfaz hasta que se cumplen todos los requirements (tampoco sale en las pistas y queda enmascarado en las listas de requisitos y recompensas).
- hidden: Mientras ningún elemento desbloqueado lo consulta y sus requisitos siguen sin cumplirse, queda oculto por completo (el nombre también aparece atenuado y no se puede operar).
- hinted (predeterminado): Solo se muestra el nombre por adelantado, pero no se puede operar hasta que se desbloquea.
- released: Está desbloqueado y se puede operar desde el principio, sin relación con las condiciones (antes «mostrar desde el principio»).
- Una vez que se ha obtenido un artículo aunque sea una vez, sigue desbloqueado sin relación con este ajuste ni con las condiciones.
- Al revés, un artículo sin ninguna condición establecida no se desbloquea hasta que se obtiene, a menos que lo pongas en `released`. Establece siempre condiciones en los artículos que quieras que se compren.
___

## Precio de compra [Monedas]
El ajuste del precio de compra del artículo
- Es la cantidad de moneda que pagas al comprar una unidad del artículo. El valor predeterminado es `-1` (no se puede comprar).
- Un artículo que no está desbloqueado no se puede comprar aunque tenga precio establecido.
- La cantidad que puedes comprar de una vez es la menor entre la que puedes comprar con la moneda que tienes y lo que resta hasta la cantidad máxima en posesión.

|Precio de compra|Trato|
|-|-|
|0|No se puede comprar|
|Un valor mayor que 0|El precio al que se puede comprar|
|Un valor menor que 0 (por ejemplo, -1)|No se puede comprar (se trata igual que 0)|
___

## Precio de venta [Monedas]
El ajuste del precio de venta del artículo
- Es la cantidad de moneda que recibes al vender una unidad del artículo. El valor predeterminado es `0` (no se puede vender).
- La moneda que recibes es la especificada por el ID de moneda de comercio, la misma que al comprar.
- Nunca se decide automáticamente a partir del precio de compra, así que establece siempre un valor cuando quieras que se pueda vender.
- No se pueden establecer valores negativos.

|Precio de venta|Trato|
|-|-|
|0|No se puede vender|
|Un valor mayor que 0|Se puede vender a ese precio|
___

## Cantidad máxima en posesión [Unidades]
El límite de la cantidad máxima en posesión del artículo
- Con 0 no hay límite para la cantidad que puede poseerse. El valor predeterminado es `0`.
- Con 1 o más, solo puede poseerse hasta esa cantidad. Cuando se alcanza el límite, la cantidad en posesión no aumenta aunque se obtenga más.
- También se convierte en el límite de la cantidad que puede comprarse.
- Cuando la cantidad en posesión de los datos guardados supera el límite, se reduce hasta el límite al cargarlos.
___

## Tipo de equipamiento
El ajuste de tipo relativo al equipamiento, al efecto y al consumo del artículo
- En los artículos de `necessary` y `consumable`, su grupo se convierte automáticamente en un espacio de equipamiento de la categoría.
- Dentro del mismo grupo solo puede equiparse un artículo. Al equipar un artículo nuevo, el equipamiento existente del mismo grupo se retira automáticamente.
- El orden de los espacios de equipamiento sigue el orden de definición de la lista de grupos del mundo.
- `unnecessary` surte efecto se equipe o no, y la magnitud del efecto es proporcional a la cantidad en posesión (sin efecto con 0, n veces con n unidades).
- `consumable` solo se consume cuando las propiedades de ese artículo afectan a la acción ejecutada, una unidad por acción. No disminuye en las acciones a las que su efecto no llega.
- Un artículo que se ha consumido hasta 0 se desequipa automáticamente.
- Para equiparlo hay que cumplir tanto las condiciones de ese artículo como las de la categoría.

|Valor|Equipamiento|Surtir efecto|Consumo|Ejemplo|
|-|-|-|-|-|
|`necessary`|Necesario|Solo mientras está equipado (por una unidad)|No|Equipamiento como espadas y armaduras|
|`consumable`|Necesario|Solo mientras está equipado (por una unidad)|Se consume al ejecutar la acción|Artículos que se consumen para obtener un efecto, como las pociones|
|`unnecessary`|Innecesario|Siempre mientras se posee (proporcional a la cantidad en posesión)|No|Artículos pasivos que hacen efecto con solo tenerlos|
|`impossible`|Imposible|Ninguno|No|Artículos sin efecto, como materiales y chatarra|
___

## [_Requisito_](es/editor/requirement)
___

## [_Propiedad_](es/editor/property)
___

## ID de moneda de comercio
El ID de la moneda que se usa para comerciar con este artículo
- Especifica el ID de la moneda (coins) que se usa en común para el precio de compra y el precio de venta.
- Si se deja en blanco, o si se especifica un ID que no está en la lista de monedas, se usa la moneda principal (la primera de coins).
___

## [_Habilidad_](es/editor/skill)