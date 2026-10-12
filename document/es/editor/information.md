
# Información
La configuración de la información básica del elemento (ID, nombre, explicación, icono y color)
- Son los campos de información básica comunes a todos los elementos del mundo (categoría, acción, artículo, grupo, evento, habilidad y preajuste).
- Se establecen por separado para cada elemento.
___

## ID identificador
El ID único que identifica el elemento
- Es el ID que identifica de forma única cada elemento.
- Es la cadena de texto con la que el editor distingue ese elemento.
- Por ejemplo, qué artículo se consigue al completar una acción se indica con el ID.
- Los caracteres que se pueden usar son una combinación de letras, guiones y cifras, de 1 a 100 caracteres.

!> Una vez distribuido el juego, no cambies un ID ya establecido. Si lo cambias, deja de coincidir con los datos de juego existentes y el juego deja de funcionar correctamente.
___

### El nombre que se muestra
El nombre de visualización generado automáticamente a partir del ID
- Si no se establece un nombre, los guiones se sustituyen por espacios y cada palabra se convierte con la primera letra en mayúscula y el resto en minúscula para mostrarse como nombre.
- Aunque el ID contenga mayúsculas, todo lo que no sea la primera letra se convierte a minúscula.
- En los idiomas distintos del inglés hay que establecer el campo de nombre por separado.
___

#### Ejemplo
Un ejemplo real de conversión de un ID
- Si el ID es `stylish-strong-axe`, el nombre pasa a ser `Stylish Strong Axe`.
- Si el ID es `stylish-STRONG-axe`, también pasa a ser `Stylish Strong Axe`.
___

### No debe repetirse
Prohibición de repetir un ID dentro del mismo tipo
- Como sirve para distinguir los elementos, no lo repitas dentro de cada tipo: categoría, acción, artículo, grupo, evento, habilidad y preajuste.
- Los eventos tratan las tareas, los eventos de cambio y los eventos fijos como un solo tipo, así que tampoco los repitas entre ellos.
- No hay ningún problema en que el mismo ID esté en tipos distintos.
- Un mundo con repeticiones da error en la validación.
- [_type_](es/editor/type)
___

## Nombre
El nombre del elemento que se muestra
- Es el nombre del elemento que se muestra en el juego.
- También se pueden introducir idiomas distintos del inglés.
- No pasa nada si el nombre coincide con el de otro elemento.
- Se pueden introducir hasta 20 caracteres.
- Si no cabe en el ancho disponible, la parte que sobresale se abrevia con `…`.
___

### Conversión automática a partir del ID
La función que genera el nombre automáticamente a partir del ID
- Si se deja en blanco, se muestra automáticamente a partir del ID. Consulta el apartado anterior para más detalles.
___

## Explicación
La explicación detallada del elemento
- Es la explicación del elemento que se muestra en el juego.
- También se pueden introducir idiomas distintos del inglés. Los textos largos se muestran enteros.
- Si no hay explicación, se deja en blanco.
___

## Icono
La configuración del icono que representa el elemento
- Como icono se puede establecer una imagen, Iconify o un emoji.
- Iconify es un servicio que ofrece iconos de todo tipo.
- Si se establecen varios de ellos, se muestran por orden de prioridad: imagen, Iconify y emoji.
___

### Imagen
Usar cualquier archivo de imagen
- Es la imagen que representa el elemento.
- Al importarla se reduce automáticamente a 60×60 píxeles como máximo y se vuelve a comprimir.
- No hace falta si has establecido Iconify o un emoji.
___

#### Tipos de archivo
Los formatos de archivo de imagen compatibles
- Se pueden usar los formatos habituales que el navegador puede mostrar.
- JPEG, PNG, GIF, WebP, SVG, etc.
- Los GIF y los AVIF se convierten a PNG. Los JPEG y los WebP se reducen manteniendo su formato original.
- Los SVG se incrustan tal cual, sin reducirse, así que evita los de gran tamaño.
___

### Iconify
Uso de los conjuntos de iconos de Iconify
- Es el icono que representa el elemento.
- Si has establecido una imagen, esta se muestra con prioridad.
___

#### Cómo buscar un icono
Cómo elegir un icono de Iconify
- Busca en `Iconify` los iconos que se pueden mostrar.
- Con la búsqueda de iconos encuentras enseguida el icono más adecuado.
- Al seleccionar un icono se muestra su identificador, como `game-icons:sword-wound` (el tipo de conjunto de iconos `:` el nombre del icono); pégalo tal cual en este campo de icono.
![iconify-selection.png](../../resources/iconify-selection.png)
- [_iconify_](https://icon-sets.iconify.design)
___

### Emoji
Mostrar el icono con un emoji
- Muestra un emoji como icono.
- Introduce el emoji Unicode tal cual.
- Como se usa el emoji instalado en el entorno de ejecución, se ve algo distinto según el usuario.
- Con Iconify se pueden establecer emojis que no dependen de cada entorno
- Se pueden mostrar caracteres que no sean emojis, pero si hay varios caracteres la visualización puede romperse.
- Por ejemplo, se introduce un emoji como `🗡️` o `⚔️`.
___

## Color
La configuración del color con el que se muestra el elemento
- Como color del elemento, se aplica al icono del elemento y a su color de fondo.
- Se elige en el selector de color del editor.
- El negro (`#000000`) se trata como el valor que significa «no se ha establecido ningún color». El valor inicial del selector de color también es este negro.
- Si quieres que se vea negro, indica un color ligeramente desplazado, como `#010101`.
___

### Herencia del elemento padre
Cómo se hereda la configuración de color del elemento padre
- Las acciones, los artículos y los eventos sin color establecido heredan el color de la categoría a la que pertenecen.
- La jerarquía de la herencia es la siguiente.
- En los elementos con un color propio establecido, ese color tiene prioridad. No se sobrescribe aunque la categoría tenga color.
- Lo básico es decidir un color por categoría y dejar que lo que hay debajo lo herede. El color individual se establece cuando quieres destacar un elemento concreto.
- Si en la acción hay establecido un atributo (attribute), el color que se hereda no es el de la categoría a la que pertenece, sino el de la categoría indicada en el atributo.
- La categoría en sí no tiene de quién heredar. Si el color de la categoría sigue siendo negro (`#000000`), esa categoría y los elementos que hay debajo sin color establecido se muestran en el color intermedio entre el color de la barra y el color del texto del diseño.
- Los grupos, las habilidades y los preajustes no heredan y solo usan el color establecido en ellos mismos.
```
world (basic.design)
└── category
    ├── action
    ├── item
    └── event
```
- [_type_](es/editor/type)
___

## Copiar la información
Duplicar la información de otro elemento
- Al pulsar el botón `Copy Information`, la información de otro elemento se copia de una vez a este elemento.
- Elige el tipo del origen de la copia (categoría, acción, artículo, grupo, evento, habilidad o preajuste) y a continuación introduce su ID.
- Se sobrescriben todos los campos, incluido el ID identificador. Después de copiar, cambia el ID identificador por uno que no se repita.
- [_type_](es/editor/type)