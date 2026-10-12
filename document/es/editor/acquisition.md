
# Obtención
La configuración de la obtención de artículos y de niveles de categoría
- Establece lo que se obtiene.
- Además de artículos, se puede cambiar el nivel de una categoría y el número de veces que se ha ejecutado una acción.
- Se puede establecer la probabilidad de conseguirlo.

|Tipo|Lo que se obtiene|
|-|-|
|Categoría|Nivel|
|Acción|Número de veces ejecutada|
|Artículo|Cantidad en posesión|
- [_type_](es/editor/type)
___

## Tipo
El tipo de elemento que se obtiene

|Tipo|Lo que se obtiene|
|-|-|
|Categoría|Nivel (el valor establecido se suma tal cual)|
|Acción|Número de veces ejecutada|
|Artículo|Cantidad en posesión|
___

## El ID del elemento
El ID que identifica el elemento que se obtiene
___

## Valor
La cantidad que se obtiene
- Si se establece un valor negativo, disminuye la cantidad en posesión, el número de veces ejecutada o el nivel. Eso sí, nunca baja de 0.
- Si el artículo tiene establecida una cantidad máxima en posesión (maximum), la cantidad en posesión no aumenta por encima de ese valor.
- Si el tipo es una categoría, el valor establecido se suma al nivel tal cual (1 por cada nivel). Lo normal es ajustarlo con la configuración de experiencia de la acción. Salvo que tengas un propósito especial, esta configuración no hace falta.
- El nivel de una categoría nunca baja de 0 ni supera `maxCategoryLevels` de general (el nivel máximo de categoría).
- El valor se establece como número entero.
___

## Probabilidad [-1 a 1]
La probabilidad de que la obtención tenga éxito (un valor negativo solo se evalúa al fallar)
- Establece la probabilidad de conseguirlo con un decimal de -1 a 1. Para decidir la probabilidad se usa el valor absoluto.
- Si el valor es positivo, solo se evalúa cuando la acción tiene éxito: con `1` siempre se consigue y con `0.5` se consigue con una probabilidad del 50%.
- Si el valor es negativo, solo se evalúa cuando la acción falla: con `-1` siempre se consigue y con `-0.5` se consigue con una probabilidad del 50%.
- Con `0` no se consigue ni al tener éxito ni al fallar.
- El valor predeterminado es `1` (siempre se consigue al tener éxito).