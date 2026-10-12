
# Resumen
La información básica del mundo y la información del autor
- Son los campos que explican el contenido del mundo.
- Establécelos de forma que resulten claros cuando un usuario elige el mundo.
- Salvo la URL, estos ajustes no afectan al avance del juego.
___

## [_Información_](es/editor/information)
___

## Versión
El número de versión del mundo
- Introduce un número de `0` o superior (entero o decimal). El valor predeterminado es `0`.
- Por lo general, la parte entera representa la versión mayor y la parte decimal, la versión menor.
- La versión del desarrollo (development) es la versión del editor, así que es otra cosa.
___

## Nombre del autor
El nombre del autor del mundo
- Introduce un alias o un apodo.
- Debe tener entre 3 y 20 caracteres y solo se pueden usar letras y cifras de ancho medio, espacios y `!` `?` `.` `,` `-`.
___

## Página web
La URL del sitio web del autor
- Si tienes página web propia o redes sociales, introduce su URL.
- El jugador puede consultar esta URL mediante el enlace.
- Si no hay ninguna, déjalo en blanco. El valor inicial es `https://`.
___

## URL
La URL del juego
- Introduce la URL donde se coloca el juego de este mundo.
- Introduce la URL de una página principal, como index.html, incluyendo el dominio.
- Es un campo para dejar registrado dónde se ha colocado el mundo. Si el lugar donde ponerlo no está decidido, déjalo en blanco.
- Un mundo publicado funciona como PWA. Una PWA es una función que permite instalarlo y que funcione como una aplicación con la que también se puede jugar sin conexión.
- Los ajustes de la PWA se crean con rutas relativas, así que funciona tal cual en el lugar donde se coloque, independientemente del valor de este campo.
___

## Tiempo de juego estimado
El tiempo orientativo hasta completar la partida del mundo
- Es el tiempo de juego estimado que hace falta para completar la partida del mundo.
- Se puede consultar como orientación cuando el jugador juega.
- No es más que un tiempo de referencia, y no hay una definición clara de qué se considera completar el mundo.
___

### Valor
El número del tiempo de juego
- Se establece con un entero de `1` o superior. El valor predeterminado es `1`.
___

### Unidad
La unidad de tiempo (horas, minutos y demás)
- Se elige entre segundos, minutos, horas, días, años, siglos e infinito. El valor predeterminado es días.
- Infinito se usa para los mundos que no tienen fin.