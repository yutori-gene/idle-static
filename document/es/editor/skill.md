
# Habilidad
Un efecto especial que se sortea en cada turno del combate y se activa
- Es un efecto especial que se sortea en cada turno y se activa en una acción de combate (`stamina`). No se activa en las acciones de ningún otro tipo.
- Su sustancia se define aquí, y se consulta por ID desde `skill` de un artículo (tu lado) y `skills` de una acción (el lado del oponente).
- Los candidatos de tu lado son las habilidades a las que remiten los artículos que están surtiendo efecto en ese momento (`unnecessary` mientras se posee, `necessary` y `consumable` mientras están equipados). Al desequipar un artículo, su habilidad también sale de los candidatos.
- Cada turno se barajan los candidatos de tu lado y del lado del oponente, se juzga la probabilidad de activación desde el principio y solo se activa la primera que sale adelante. Si no sale adelante ninguna, ese turno no hay habilidad.
- Cuando varios artículos o acciones remiten a la misma habilidad, esta gana otras tantas oportunidades en el sorteo, así que se activa con más facilidad.
- [_item_](es/editor/item)
- [_action_](es/editor/action)
___

## [_Información_](es/editor/information)
___

## Probabilidad de activación [0-1]
La probabilidad de que esta habilidad se active en ese turno
- En cada turno se juzga con esta probabilidad si se activa. Con `1` sale adelante siempre y con `0` no se activa. El valor predeterminado es `1`.
- El juicio avanza en orden desde el principio de los candidatos barajados, y solo se activa la primera habilidad que sale adelante. Por eso, cuando hay varios candidatos, la proporción en que se activa realmente es menor que este valor.
- Si tienes activada la visualización de la explicación, este valor también afecta a la frecuencia con que aparece la explicación. Cuanto más fácil es que una habilidad se active, menos se repite su explicación.
___

## [_Valores de combate_](es/editor/combat)
___

## Visualización de la explicación
Si se muestra la explicación en una notificación emergente al activarse
- Es la marca de si se muestra la explicación en una notificación emergente cuando esta habilidad se activa.
- Si está activada, se muestra cada vez que se activa con una probabilidad de (100% − la probabilidad de activación) ÷ 2. Si la probabilidad de activación es del 40%, es del 30%.
- Si está desactivada, no se muestra.
- Si la explicación está en blanco, no se muestra aunque la actives.