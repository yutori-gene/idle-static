
# Valores de combate
La configuración de las correcciones de combate en las acciones del tipo stamina
- Son valores de corrección que solo funcionan en las acciones del tipo `stamina`.
- Cada valor se calcula como una corrección adicional a la diferencia de nivel entre el jugador y la acción.
- Por ejemplo, si el valor de ataque es 10, el daño de ataque se calcula como si el nivel del jugador fuera 10 más alto que el nivel de la acción. Si es negativo, es una corrección en sentido contrario.
- Según el lugar donde se establezca, el valor es del lado del jugador o del lado del oponente.
- Los valores del lado del oponente actúan cancelando el campo opuesto que les corresponde. La defensa del oponente cancela el ataque del jugador, el ataque del oponente cancela la defensa del jugador, la evasión del oponente cancela la precisión del jugador y la precisión del oponente cancela la evasión del jugador.
- Solo la recuperación se cancela entre campos iguales: cuanto mayor es la recuperación del oponente, menos recupera el jugador.

|Dónde se establece|De qué lado es el valor|
|-|-|
|`defaultCombat` de general|El valor de referencia del lado del jugador. Es el punto de partida común a todas las acciones `stamina`|
|Los valores de combate de la acción|Valores del lado del oponente. Vistos desde el jugador, actúan como correcciones en sentido contrario|
|Los valores de combate de la habilidad|Valores del lado que tiene la habilidad. Las habilidades del bando propio se suman al jugador y las del oponente al lado del oponente|
___

## Ataque [Diferencia de nivel]
La corrección por diferencia de nivel al daño de resistencia que se inflige al oponente
- Cuanto mayor es el valor del lado del jugador, más daño se inflige al oponente.
- El valor establecido en una acción o en una habilidad del oponente pasa a ser el ataque del lado del oponente y, cuanto mayor es, más daño recibe el jugador.
___

## Defensa [Diferencia de nivel]
La corrección por diferencia de nivel al daño de resistencia que se recibe del oponente
- Cuanto mayor es el valor del lado del jugador, más se reduce el daño recibido.
- El valor establecido en una acción o en una habilidad del oponente pasa a ser la defensa del lado del oponente y, cuanto mayor es, menos daño inflige el jugador.
___

## Precisión [Diferencia de nivel]
La corrección por diferencia de nivel a la tasa de fallo del ataque
- Cuanto mayor es el valor del lado del jugador, más baja es la tasa de fallo del ataque.
- El valor establecido en una acción o en una habilidad del oponente pasa a ser la precisión del lado del oponente y, cuanto mayor es, más difícil le resulta al jugador evadir el ataque del oponente.
___

## Evasión [Diferencia de nivel]
La corrección por diferencia de nivel a la tasa de evasión del ataque del oponente
- Cuanto mayor es el valor del lado del jugador, más fácil es evadir el ataque del oponente.
- El valor establecido en una acción o en una habilidad del oponente pasa a ser la evasión del lado del oponente y, cuanto mayor es, más difícil es que acierte el ataque del jugador.
___

## Recuperación [Diferencia de nivel]
La corrección por diferencia de nivel a la cantidad de resistencia recuperada
- Cuanto mayor es el valor del lado del jugador, más resistencia se recupera tras el combate.
- El valor establecido en una acción o en una habilidad del oponente pasa a ser la recuperación del lado del oponente y, cuanto mayor es, menos recupera el jugador.
- Solo la recuperación, a diferencia de los demás campos, se cancela entre campos iguales.