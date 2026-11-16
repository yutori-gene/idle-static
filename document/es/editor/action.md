
# Acción
Los elementos de comportamiento como la recolección, la fabricación y el combate
- Es un elemento que representa un comportamiento como la recolección, la fabricación, el comercio o el combate.
- Cada vez que actúas ganas experiencia y tu nivel sube.
- Puedes configurarlo para que consuma u obtenga artículos cada vez que actúas.
- Hay varios tipos de patrón de comportamiento.
___

## [_Información_](es/editor/information)
___

## Categoría
El ID de la categoría a la que pertenece la acción
- Indica el ID de la categoría a la que pertenece esta acción.
___

## Disciplina
La categoría que recibe la experiencia y sirve de referencia para la fuerza
- En cada acción puedes establecer como disciplina una categoría distinta de aquella a la que pertenece.
- Si se deja en blanco, la categoría a la que pertenece pasa a ser la disciplina.
- Por ejemplo, si en una acción que pertenece a una categoría llamada Castillo del Rey Demonio estableces la disciplina de magia, el nivel y las propiedades de la categoría de magia se calculan y se aplican al tiempo de finalización y al daño de la acción.
- En una acción con disciplina establecida, introduce el nivel requerido de la categoría de la disciplina en el nivel de disciplina (`disciplineLevel`).
- La experiencia al tener éxito se reparte entre la categoría a la que pertenece la acción y la categoría establecida como disciplina según la tasa de retorno de experiencia (`experienceReturnRate`) de la configuración general.
- Los efectos de los artículos (correcciones de propiedades, habilidades y el consumo de consumibles) también se aplican solo si apuntan a la categoría establecida como disciplina. Los efectos que apuntan a la categoría a la que pertenece la acción no se aplican a una acción con disciplina establecida.
- Mientras la categoría establecida como disciplina no esté desbloqueada, la acción tampoco se desbloquea, aunque la categoría a la que pertenece esté desbloqueada.
- Si en la propia acción no hay ningún color establecido, los colores del icono y del fondo heredan el color de la categoría establecida como disciplina, no el de la categoría a la que pertenece.
- [_category_](es/editor/category)
___

## Grupo
La clasificación por grupo de visualización de la acción
- Aplica uno de los definidos en los grupos que están directamente bajo el mundo.
- La lista de acciones se muestra en el orden de los grupos que has establecido.
- [_group_](es/editor/group)
___

## Estado de desbloqueo inicial
El estado inicial de visualización y desbloqueo del elemento (pasa automáticamente a un estado superior cuando se cumplen los requisitos de activación)
- secreted: No aparece en absoluto en la interfaz hasta que se cumplen todos los requirements (tampoco sale en las pistas y queda enmascarado en las listas de requisitos y recompensas).
- hidden: Mientras ningún elemento desbloqueado lo consulta y sus requisitos siguen sin cumplirse, queda oculto por completo (el nombre también aparece atenuado y no se puede operar).
- hinted (predeterminado): Solo se muestra el nombre por adelantado, pero no se puede operar hasta que se desbloquea.
- released: Está desbloqueado y se puede operar desde el principio, sin relación con las condiciones (antes «mostrar desde el principio»).
___

## Nivel
El nivel de dificultad de la acción respecto a la categoría a la que pertenece
- La dificultad de la acción se expresa mediante un nivel de la categoría a la que pertenece.
- En una acción sin disciplina, al ejecutarla este valor se compara con el nivel de la categoría a la que pertenece para calcular cada propiedad.
- En una acción con disciplina establecida, el cálculo de las propiedades usa el nivel de disciplina (`disciplineLevel`), y este valor solo se usa para calcular la experiencia que va a la categoría de la acción y para el requisito de nivel al ejecutarla.
- Por ejemplo, si ejecutas una acción más alta que tu propio nivel, hay efectos como que baja la tasa de éxito.
- Mientras se cumplan las condiciones, se puede ejecutar aunque el nivel del jugador sea menor que este valor.
- Sin embargo, si `actionLevelLimit` de general (el límite de nivel de las acciones) está activado, este valor se añade automáticamente como condición sobre el nivel de la categoría, así que no se puede ejecutar hasta que el nivel llegue. En las categorías que no tienen nivel no se añade.
- [_property_](es/editor/property)
___

## Nivel de disciplina
El nivel de dificultad de la acción respecto a la categoría de la disciplina
- El nivel requerido de la categoría de la disciplina en una acción con disciplina (`discipline`) establecida. Si se establece una disciplina, es obligatorio un valor de `1` o más.
- No se usa en una acción sin disciplina. Déjalo en `0`.
- Al ejecutar, este valor se compara con el nivel de la categoría de la disciplina para calcular cada propiedad y la experiencia que va a la categoría de la disciplina.
- Si `actionLevelLimit` (el límite de nivel de las acciones) de la configuración general está activado, se añade automáticamente como requisito junto con el nivel de la categoría a la que pertenece la acción (`level`).
- [_property_](es/editor/property)
- [_category_](es/editor/category)
___

## [_Requisito_](es/editor/requirement)
___

## Tiempo requerido [Segundos]
El tiempo estándar que lleva ejecutar la acción
- Es el tiempo estándar (en segundos) necesario para realizar la acción una vez.
- En el tipo `stamina` es el intervalo de tiempo que lleva un turno (restar una vez la resistencia de ambos lados). Los turnos que recuperan la resistencia tras decidirse el resultado usan el mismo intervalo.
- Varía en la ejecución real por el cálculo de las propiedades.
- [_property_](es/editor/property)
___

## Experiencia [100 para el siguiente nivel]
La experiencia obtenida cuando la acción tiene éxito
- Es la experiencia estándar que se obtiene al ejecutar la acción una vez y tener éxito. 100 es la experiencia de un nivel.
- En el caso del combate se obtiene al vencer al oponente, así que conviene establecerla generosa.
- Varía en la ejecución real por el cálculo de las propiedades.
- En una acción con disciplina establecida, la experiencia se calcula a partir de este valor con la diferencia de nivel de la categoría a la que pertenece y de la categoría de la disciplina por separado, y se reparte según la tasa de retorno de experiencia (`experienceReturnRate`) de la configuración general.
- [_property_](es/editor/property)
___

## Tasa de éxito [0-1]
La probabilidad de éxito al completarse la acción
- Es la probabilidad de tener éxito cuando la acción se completa.
- Con `1` siempre tiene éxito y con `0` siempre falla.
- Al fallar también se consumen los artículos de consumo, pero la experiencia y el número de ejecuciones no aumentan.
- De las recompensas, solo las que tienen la probabilidad (chance) en un valor positivo se obtienen al tener éxito. Las que están en un valor negativo se obtienen solo al fallar, así que fallar no significa necesariamente que no se obtenga nada.
- Varía en la ejecución real por el cálculo de las propiedades.
___

## Número máximo de ejecuciones [Veces]
El número máximo de veces que la acción puede completarse
- Es el límite superior del número de veces que la acción puede tener éxito y completarse.
- Con `0` es ilimitado.
- Al alcanzar el límite superior, la acción pasa a no poder ejecutarse.
___

## [_Obtención_](es/editor/acquisition)
___

## Tipo de avance
El tipo de ejecución de la acción
- Hay cuatro tipos.

|Tipo|Comportamiento|Resistencia|Ejemplo|
|-|-|-|-|
|`persistent`|Es un tipo en el que la acción se ejecuta de forma repetida y continua. Cada vez que se completa una vez se obtiene experiencia y recompensa.|Sin relación|Tala, minería, pesca|
|`single`|Ejecuta la acción una vez. Si se interrumpe a medias, el avance se guarda y la próxima vez se puede reanudar desde donde se quedó. Al completarse, el usuario pulsa la acción de confirmación y recibe el resultado.|Sin relación|Abrir un cofre del tesoro, aprender una habilidad leyendo|
|`snap`|Es un tipo en el que la acción se ejecuta al instante. Se completa enseguida, sin paso del tiempo.|Sin relación|Trueque, uso de un artículo|
|`stamina`|Cada tiempo requerido disminuye la resistencia del jugador y la del oponente. Cuando se agota la resistencia del oponente se obtiene experiencia y recompensa. Cuando se agota la resistencia del jugador se acaba la partida y se cancelan todas las acciones en ejecución.|Con relación|Combate, trabajo que conlleva peligro|
___

## [_Valores de combate_](es/editor/combat)
___

## [_Habilidad_](es/editor/skill)