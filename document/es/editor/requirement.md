
# Requisito
La configuración de las condiciones necesarias para usar o mostrar un elemento
- Son las condiciones que se establecen en cada elemento: categoría, acción, artículo y evento.
- Si no se cumplen todas las condiciones establecidas, no se puede realizar la operación indicada en la tabla.
- Según la configuración de desbloqueo (unlocked) del elemento, el elemento en sí no aparece en pantalla hasta que se cumplen las condiciones.

|Dónde se establece|Lo que no se puede hacer si no se cumplen las condiciones|
|-|-|
|Categoría|Ejecutar todas las acciones de la categoría y operar sus artículos|
|Acción|Ejecutar la acción|
|Artículo|Operar el artículo (equiparlo, etc.)|
|Evento|Completar una tarea y activar un evento de cambio o un evento fijo|
- [_type_](es/editor/type)
___

## Tipo
El tipo de elemento al que se refiere la condición

|Tipo|El valor al que se hace referencia|
|-|-|
|Categoría|El nivel de la categoría|
|Acción|El número de veces que se ha ejecutado la acción|
|Artículo|La cantidad del artículo en posesión|
___

## El ID del elemento
El ID del elemento al que se refiere la condición
- Establece el ID de la categoría, la acción o el artículo al que se refiere la condición.
- Si en un evento está activado el recuento por grupo (requiringGroup), se trata como el ID de un grupo y no de un elemento individual.
___

## Valor
La cantidad que necesita la condición
- La condición se cumple cuando se alcanza o se supera el valor indicado.
- Se establece con un número entero de 0 o más. El valor predeterminado es `1`.
___

## Probabilidad de consumo [0-1]
La probabilidad de que el artículo se consuma (de 0 a 1, solo funciona si el tipo es un artículo)
- Es la probabilidad de consumir el artículo cuando se cumplen las condiciones y se ejecuta la acción.
- Con `1` siempre se consume, con `0.5` se consume con una probabilidad del 50% y con `0` no se consume.
- El valor predeterminado es `1` (siempre se consume). Sin embargo, en las condiciones de un evento (tarea, evento de cambio o evento fijo) el valor predeterminado es `0` (no se consume), para que lo que tienes no disminuya al completarlo.
- Con `0` no se reduce el inventario, así que puedes ejecutar la acción tantas veces como quieras mientras la cantidad en posesión llegue al valor de la condición. Se usa cuando quieres que la condición sea únicamente llevarlo equipado.
- No funciona si el tipo no es un artículo.
___

## Equipamiento
Si se exige que el artículo esté equipado como condición (solo funciona si el tipo es un artículo)
- Al activarlo, la condición exige no solo tener el artículo en posesión, sino también llevarlo equipado.
- Si está equipado o no se decide por el equipamiento de la categoría a la que pertenece el artículo.
- No funciona si el tipo no es un artículo.