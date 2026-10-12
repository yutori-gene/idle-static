
# Desarrollo
La gestión de las notas y los errores durante el desarrollo del mundo
- Se usa durante el desarrollo del mundo.
- Tiene que ver con el desarrollo y las pruebas de este mundo, y no afecta al contenido de la partida.
- El jugador nunca ve el contenido relativo al desarrollo.
___

## Versión
El número de versión de compilación del editor
- El número de versión del editor en el momento de crear el mundo nuevo se registra automáticamente.
- No se actualiza aunque cargues y edites un mundo ya existente.
- El desarrollador no puede cambiar este contenido.
___

## Nota
El registro de notas para el desarrollador
- El desarrollador puede escribir libremente en él a modo de nota.
- No guarda relación con la publicación del juego.
___

## Errores
El registro de errores del resultado de la validación
- El resultado de validar el mundo se guarda aquí automáticamente.
- Por ejemplo, muestra como errores cosas como que haya un tipo de carácter que no se puede introducir o que se haya introducido un número por encima del límite superior.
- Si no hubo ni un solo error, en su lugar se guarda un mensaje de éxito en una sola línea.
- El desarrollador no puede cambiar este contenido.
- Mientras queden errores no se puede publicar el mundo. Al ejecutar la publicación, primero se realiza la validación y, si hay errores, se interrumpe ahí.
___

## Marca de tiempo
El registro de la creación, el guardado y la publicación
- Las horas de creación, guardado y publicación del mundo se registran automáticamente.
- El desarrollador no puede cambiar este contenido.
___

### Fecha de creación
La hora de la primera creación del mundo
- Es la fecha y hora en que se creó el mundo por primera vez.
___

### Fecha de guardado
La hora del último guardado realizado
- Es la fecha y hora en que se guardó el mundo por última vez.
___

### Fecha de publicación
La hora de la última publicación realizada
- Es la fecha y hora en que se publicó el mundo por última vez.
___

## Guardado automático
Activación/desactivación de la función de guardado automático
- Indica si el contenido de la edición se guarda automáticamente en el navegador.
- No puedes reescribir este campo directamente. Se cambia con el interruptor de guardado automático del menú del editor.