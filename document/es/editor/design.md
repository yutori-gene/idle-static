
# Diseño
Los ajustes de aspecto del mundo, como los colores y la fuente
- Son los ajustes sobre la presentación del mundo.
- Los dos colores decididos aquí (el color de barra y el color de texto) pasan a ser la base de toda la pantalla, y todos los colores que se usan en ella, como la fila seleccionada, el encabezado de un grupo y los colores de afirmación y negación, se crean a partir de ellos.
- Solo la imagen de fondo se puede sustituir por categoría y, en ese caso, tiene prioridad la configuración del lado de la categoría.
___

## Color de barra
El color que sirve de fondo de la barra
- Se usa como color de fondo de la barra.
- Como es además el color que sirve de base a toda la pantalla, el color de la fila seleccionada también se crea a partir de él.
- Las muestras de color de los elementos sin color establecido y el fondo de las notificaciones emergentes pasan a ser el color intermedio entre este color y el color de texto.
___

## Color de texto
El color del texto y del fondo
- Se usa como color del texto.
- El degradado del fondo también se crea a partir de este color. Si se establece una imagen de fondo, el mismo degradado se aclara y se superpone sobre la imagen.
- Tomar una diferencia grande de luminosidad con el color de barra hace que el texto se lea mejor. En los mundos con poca diferencia, las muestras de color de los elementos sin color establecido también se distinguen peor.
___

## Color de sombra
El color de la sombra de la barra
- Se usa como color de la sombra que cae sobre las barras y el encabezado.
- Ponerlo en un color más oscuro que el color de barra da una sombra natural.
___

## Imagen de fondo
La imagen de fondo de todo el juego
- Establece la imagen de fondo del juego.
- Si no se establece ninguna imagen, el fondo pasa a ser un degradado basado en el color de texto.
- La imagen se reduce automáticamente para que quepa en 256×256 píxeles. Los GIF y los AVIF se convierten a PNG.
- Si se establece una imagen de fondo en una categoría, en la pantalla de esa categoría tiene prioridad la imagen del lado de la categoría.
- La imagen establecida se puede borrar con el botón Delete Image.
- [_category_](es/editor/category)