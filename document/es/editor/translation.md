
# Traducción
Ajustes para traducir el texto de un mundo a diez idiomas
- Hay dos tipos de traducción: la de las frases comunes de la interfaz (los preajustes) y la de los nombres y las explicaciones que tiene el propio mundo.
- La traducción de las frases comunes se incluye siempre, independientemente del ajuste `translations` de general. El autor no necesita prepararla.
- La traducción del propio mundo solo se exporta cuando `translations` de general está activado y el mundo se publica, y la realiza el autor.
- En los idiomas para los que no hay traducción, el texto se muestra tal como está escrito en el mundo.
- [_general_](es/editor/general)
___

## Activación de la traducción
Qué ocurre al activar la traducción
- Lo que se activa es `translations` de general. Aquí se explica qué ocurre al activarlo.
- Si está activado, el mundo publicado incluye archivos de traducción para diez idiomas y el idioma puede cambiarse desde los ajustes del reproductor. Si está desactivado, no se puede cambiar el idioma en absoluto.
- Los diez archivos se exportan con el mismo contenido (el texto sin traducir). Un idioma que no hayas traducido muestra el texto original tal cual. También puedes traducir solo algunos idiomas, pero en las pantallas de esos idiomas se mezclará el texto original.
- Al empezar el juego se muestra primero el idioma configurado en `language` de general. Después puede cambiarse a cualquier idioma desde la columna de ajustes.
- En la prueba de juego del editor todavía no existen los archivos de traducción del mundo, así que al cambiar de idioma solo cambian las frases comunes de la interfaz.
- Traducir es pesado, pero hace que mucha más gente pueda jugar.
- [_general_](es/editor/general)
___

## Archivos de idioma
Los archivos JSON que se exportan para la traducción
- Cuando exportas un mundo con Publicar en el menú, `translations/base` contiene la traducción de las frases comunes y `translations/world` la traducción del propio mundo.
- Los únicos archivos que traduces son los diez de `translations/world`. `translations/base` se incluye ya traducido, así que no hace falta tocarlo.
- El contenido del archivo está dividido por tipos, debajo están los ID de los elementos y, debajo de estos, el nombre (`name`) y la explicación (`explanation`).
- Hay siete tipos: categoría, acción, artículo, evento, grupo, habilidad y preajuste. La moneda, la capacidad y la cola van en los artículos, el resumen del mundo va en los preajustes, y las tareas y los eventos fijos van juntos en los eventos.
- Los elementos cuyo nombre se dejó en blanco se exportan con un nombre generado automáticamente a partir de su ID.
- Vuelve a colocar los archivos traducidos en `translations/world` con el mismo nombre.
___

## El trabajo de traducción
La edición de los datos de traducción
- Los diez archivos exportados tienen todos el mismo contenido (el texto sin traducir).
- Hay que traducir todos los archivos salvo el del idioma original.
- Traduce solo los valores de `name` y `explanation`. No cambies los ID ni la estructura del JSON.
___

### AI
Traducción con IA
- Traduce con una IA como ChatGPT, Copilot o Claude.
- Puede traducirlo todo de una vez y con una calidad aceptable.
- A veces la traducción no es completa, y hay que prestar especial atención a los términos técnicos y a los nombres propios.
- Según el volumen, usar una IA puede tener un coste.
- Si la IA interrumpe la traducción a medio camino, indicarle «continúa» a veces lo soluciona. (Y a veces no.)
___

#### Ejemplo de prompt
Un ejemplo de la instrucción de traducción que se le da a una IA
- Ejemplo de prompt: traduce del japonés al inglés los valores de `name` y `explanation` de los datos JSON que he subido. No cambies las claves ni ninguna otra parte.
___

#### Uso de los GPT
Traducción con un GPT de ChatGPT
- Con el JSON Language Translator de la biblioteca de GPT de ChatGPT se traduce JSON con facilidad.
- La estructura del JSON se mantiene durante la traducción.
- Otros servicios de IA distintos de ChatGPT ofrecen a veces la misma función.
___

### Servicios de traducción
El uso de un servicio de traducción
- Traduce con un servicio en línea como DeepL o el Traductor de Google.
- Puede esperarse una calidad mayor que con la traducción por IA, pero según el volumen hay que pagar.
- Un archivo JSON no puede traducirse tal cual en un servicio de traducción, así que hay que crear un programa para usarlo.
- Aunque son de pago, parece que también hay servicios que traducen los datos JSON tal cual (doctranslator.com y otros).
___

### Manual
La traducción hecha a mano
- Abre el archivo de traducción en un editor de texto e introduce el contenido traducido a cada idioma. Cuesta muchísimo esfuerzo, pero puedes traducir exactamente como quieras.
___

## Códigos de idioma
La lista de códigos de idioma admitidos
- El nombre del archivo de traducción es este código de idioma.
- Los idiomas admitidos son estos diez, y no se pueden añadir ni quitar.

|Código de idioma|Idioma|
|-|-|
|en|Inglés|
|zh|Chino (simplificado)|
|es|Español|
|pt|Portugués|
|fr|Francés|
|ru|Ruso|
|de|Alemán|
|ja|Japonés|
|id|Indonesio|
|ko|Coreano|