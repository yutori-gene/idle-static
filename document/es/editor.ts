import * as Type from "~d/type/descriptionType";
import { Markdown, Tree, expandList } from "~d/type/markdownType";

// quate

const typeTree = `
world
├── category
├── action
├── item
├── skill
├── group
└── preset
`;

// 色の継承の階層。typeTreeはタイプの一覧なので、継承の親子はこちらで示す
const colorTree = `
world (basic.design)
└── category
    ├── action
    ├── item
    └── event
`;

// miscellaneous

export const translation: Markdown = {
	title: "Traducción",
	summary: "Ajustes para traducir el texto de un mundo a diez idiomas",
	points: [
		"Hay dos tipos de traducción: la de las frases comunes de la interfaz (los preajustes) y la de los nombres y las explicaciones que tiene el propio mundo.",
		"La traducción de las frases comunes se incluye siempre, independientemente del ajuste `translations` de general. El autor no necesita prepararla.",
		"La traducción del propio mundo solo se exporta cuando `translations` de general está activado y el mundo se publica, y la realiza el autor.",
		"En los idiomas para los que no hay traducción, el texto se muestra tal como está escrito en el mundo.",
	],
	links: { general: "general" },
	options: {
		label: "translation",
	},
	children: {
		flag: {
			title: "Activación de la traducción",
			summary: "Qué ocurre al activar la traducción",
			points: [
				"Lo que se activa es `translations` de general. Aquí se explica qué ocurre al activarlo.",
				"Si está activado, el mundo publicado incluye archivos de traducción para diez idiomas y el idioma puede cambiarse desde los ajustes del reproductor. Si está desactivado, no se puede cambiar el idioma en absoluto.",
				"Los diez archivos se exportan con el mismo contenido (el texto sin traducir). Un idioma que no hayas traducido muestra el texto original tal cual. También puedes traducir solo algunos idiomas, pero en las pantallas de esos idiomas se mezclará el texto original.",
				"Al empezar el juego se muestra primero el idioma configurado en `language` de general. Después puede cambiarse a cualquier idioma desde la columna de ajustes.",
				"En la prueba de juego del editor todavía no existen los archivos de traducción del mundo, así que al cambiar de idioma solo cambian las frases comunes de la interfaz.",
				"Traducir es pesado, pero hace que mucha más gente pueda jugar.",
			],
			links: { general: "general" },
		},
		file: {
			title: "Archivos de idioma",
			summary: "Los archivos JSON que se exportan para la traducción",
			points: [
				"Cuando exportas un mundo con Publicar en el menú, `translations/base` contiene la traducción de las frases comunes y `translations/world` la traducción del propio mundo.",
				"Los únicos archivos que traduces son los diez de `translations/world`. `translations/base` se incluye ya traducido, así que no hace falta tocarlo.",
				"El contenido del archivo está dividido por tipos, debajo están los ID de los elementos y, debajo de estos, el nombre (`name`) y la explicación (`explanation`).",
				"Hay siete tipos: categoría, acción, artículo, evento, grupo, habilidad y preajuste. La moneda, la capacidad y la cola van en los artículos, el resumen del mundo va en los preajustes, y las tareas y los eventos fijos van juntos en los eventos.",
				"Los elementos cuyo nombre se dejó en blanco se exportan con un nombre generado automáticamente a partir de su ID.",
				"Vuelve a colocar los archivos traducidos en `translations/world` con el mismo nombre.",
			],
		},
		task: {
			title: "El trabajo de traducción",
			summary: "La edición de los datos de traducción",
			points: [
				"Los diez archivos exportados tienen todos el mismo contenido (el texto sin traducir).",
				"Hay que traducir todos los archivos salvo el del idioma original.",
				"Traduce solo los valores de `name` y `explanation`. No cambies los ID ni la estructura del JSON.",
			],
			children: {
				ai: {
					title: "AI",
					summary: "Traducción con IA",
					points: ["Traduce con una IA como ChatGPT, Copilot o Claude.", "Puede traducirlo todo de una vez y con una calidad aceptable.", "A veces la traducción no es completa, y hay que prestar especial atención a los términos técnicos y a los nombres propios.", "Según el volumen, usar una IA puede tener un coste.", "Si la IA interrumpe la traducción a medio camino, indicarle «continúa» a veces lo soluciona. (Y a veces no.)"],
					children: {
						prompt: {
							title: "Ejemplo de prompt",
							summary: "Un ejemplo de la instrucción de traducción que se le da a una IA",
							points: ["Ejemplo de prompt: traduce del japonés al inglés los valores de `name` y `explanation` de los datos JSON que he subido. No cambies las claves ni ninguna otra parte."],
						},
						gpt: {
							title: "Uso de los GPT",
							summary: "Traducción con un GPT de ChatGPT",
							points: ["Con el JSON Language Translator de la biblioteca de GPT de ChatGPT se traduce JSON con facilidad.", "La estructura del JSON se mantiene durante la traducción.", "Otros servicios de IA distintos de ChatGPT ofrecen a veces la misma función."],
						},
					},
				},
				online: {
					title: "Servicios de traducción",
					summary: "El uso de un servicio de traducción",
					points: ["Traduce con un servicio en línea como DeepL o el Traductor de Google.", "Puede esperarse una calidad mayor que con la traducción por IA, pero según el volumen hay que pagar.", "Un archivo JSON no puede traducirse tal cual en un servicio de traducción, así que hay que crear un programa para usarlo.", "Aunque son de pago, parece que también hay servicios que traducen los datos JSON tal cual (doctranslator.com y otros)."],
				},
				manual: {
					title: "Manual",
					summary: "La traducción hecha a mano",
					points: ["Abre el archivo de traducción en un editor de texto e introduce el contenido traducido a cada idioma. Cuesta muchísimo esfuerzo, pero puedes traducir exactamente como quieras."],
				},
			},
		},
		code: {
			title: "Códigos de idioma",
			summary: "La lista de códigos de idioma admitidos",
			points: ["El nombre del archivo de traducción es este código de idioma.", "Los idiomas admitidos son estos diez, y no se pueden añadir ni quitar."],
			list: [
				["Código de idioma", "Idioma"],
				["en", "Inglés"],
				["zh", "Chino (simplificado)"],
				["es", "Español"],
				["pt", "Portugués"],
				["fr", "Francés"],
				["ru", "Ruso"],
				["de", "Alemán"],
				["ja", "Japonés"],
				["id", "Indonesio"],
				["ko", "Coreano"],
			],
		},
	},
};

export const miscellaneous: Markdown = {
	title: "Notas adicionales",
	summary: "Explicaciones sobre el trabajo de creación, no sobre los campos del mundo en sí",
	points: ["Aquí se reúne lo que no cabe en la lista de campos de configuración."],
	list: expandList("Nota", [translation], "Descripción"),
	options: {
		label: "miscellaneous",
		linkedList: true,
	},
};

// componsnt

export const property: Type.Property = {
	title: "Propiedad",
	summary: "La configuración de los efectos que tiene un artículo",
	points: ["Estos son los campos de efecto que se pueden establecer en un artículo.", "Los artículos cuyo tipo de equipamiento es `necessary` o `consumable` aplican su efecto solo mientras están equipados. `unnecessary` aplica su efecto con solo tenerlo en posesión, y la magnitud del efecto es proporcional a la cantidad en posesión (el doble si posees 2).", "Como la cantidad en posesión es directamente el multiplicador del efecto de `unnecessary`, `maximum` (la cantidad máxima en posesión) es el tope del efecto. Cuando ajustes el equilibrio, configúralo junto con `maximum`.", "El valor de cualquiera de los campos se calcula como algo que ajusta la diferencia de nivel entre el nivel del jugador y el nivel de la acción.", "Por ejemplo, si el valor de ataque es 10, el ataque se calcula como si el nivel del jugador fuera 10 más alto que el nivel de la acción. Un valor negativo hace lo contrario.", "Cuánto influye la diferencia de nivel lo decide `propertyRatio` de general (2 de forma predeterminada), y cambia según ese multiplicador por cada 10 de diferencia de nivel.", "Si `numeric` de la categoría está desactivado, la diferencia de nivel real se trata como 0, así que el valor que establezcas aquí pasa a ser la diferencia de nivel tal cual.", "Los campos que actúan por división, como el tiempo requerido y el daño recibido, se topan en 100 veces (hasta una centésima en el caso del tiempo requerido).", "En los artículos que hay que equipar, solo surte efecto el que está equipado en cada grupo de equipamiento.", "Un artículo cuya cantidad en posesión es 0 no produce ningún efecto, sea cual sea su tipo de equipamiento.", "attack, defence, accuracy, evasion y restore solo funcionan en acciones del tipo `stamina`."],
	list: [
		["Propiedad", "Detalle del efecto"],
		["speed", "Acorta el tiempo requerido de la acción. El tiempo requerido cambia de forma inversamente proporcional a la diferencia de nivel (el multiplicador actúa a la mitad)."],
		["chance", "Cambia la probabilidad de éxito de la acción. El multiplicador se aplica a la proporción entre éxito y fracaso, así que nunca supera el `100`%."],
		["experience", "Cambia la experiencia obtenida. Aumenta de forma proporcional a la diferencia de nivel (el cálculo está invertido: cuanto mayor es el nivel de la acción, más se obtiene)."],
		["attack", "Cambia el daño de resistencia que se inflige al oponente. (solo acciones stamina)"],
		["defence", "Reduce el daño de resistencia que se recibe del oponente (el multiplicador actúa a la mitad). (solo acciones stamina)"],
		["accuracy", "Reduce la tasa de fallo del ataque. (solo acciones stamina)"],
		["evasion", "Cambia la tasa de evasión del ataque del oponente (el multiplicador actúa a la mitad). (solo acciones stamina)"],
		["restore", "Cambia la cantidad de resistencia recuperada al terminar la acción. Cuanto más cerca del máximo, más lento es el aumento. (solo acciones stamina)"],
	],
	children: {
		category: {
			title: "Categoría",
			summary: "La categoría a la que se aplica la propiedad",
			points: ["Establece el ID de la categoría a la que se aplica esta propiedad.", "Si se establece `*`, se aplica a todas las categorías.", "Si se deja en blanco, se aplica a la categoría a la que pertenece el artículo.", "Si estableces el ID de otra categoría, el efecto alcanza a las acciones de esa categoría. No importa en qué categoría esté el propio artículo."],
		},
		attack: {
			title: "Ataque [Diferencia de nivel]",
			summary: "La corrección al daño de resistencia que se inflige al oponente (solo funciona en acciones stamina)",
			points: ["El daño de ataque se calcula como si el nivel del jugador fuera más alto que el nivel de la acción en este valor."],
		},
		defence: {
			title: "Defensa [Diferencia de nivel]",
			summary: "La corrección al daño de resistencia que se recibe del oponente (solo funciona en acciones stamina)",
			points: ["El daño recibido se calcula como si el nivel del jugador fuera más alto que el nivel de la acción en este valor. Cuanto mayor es el valor, más se reduce el daño recibido."],
		},
		accuracy: {
			title: "Precisión [Diferencia de nivel]",
			summary: "La corrección a la tasa de fallo del ataque (solo funciona en acciones stamina)",
			points: ["La tasa de fallo se calcula como si el nivel del jugador fuera más alto que el nivel de la acción en este valor. Cuanto mayor es el valor, más baja es la tasa de fallo."],
		},
		evasion: {
			title: "Evasión [Diferencia de nivel]",
			summary: "La corrección a la tasa de evasión del ataque del oponente (solo funciona en acciones stamina)",
			points: ["La tasa de evasión se calcula como si el nivel del jugador fuera más alto que el nivel de la acción en este valor. Cuanto mayor es el valor, más fácil es evadir el ataque del oponente."],
		},
		restore: {
			title: "Recuperación [Diferencia de nivel]",
			summary: "La corrección a la cantidad de resistencia recuperada (solo funciona en acciones stamina)",
			points: ["La cantidad de resistencia recuperada se calcula como si el nivel del jugador fuera más alto que el nivel de la acción en este valor."],
		},
		speed: {
			title: "Velocidad [Diferencia de nivel]",
			summary: "La corrección al tiempo requerido de la acción",
			points: ["El tiempo requerido se calcula como si el nivel del jugador fuera más alto que el nivel de la acción en este valor. Cuanto mayor es el valor, más se acorta el tiempo requerido."],
		},
		chance: {
			title: "Tasa de éxito [Diferencia de nivel]",
			summary: "La corrección a la probabilidad de éxito de la acción",
			points: ["La probabilidad de éxito de la acción se calcula como si el nivel del jugador fuera más alto que el nivel de la acción en este valor. Cuanto mayor es el valor, más sube la probabilidad de éxito."],
		},
		experience: {
			title: "Experiencia [Diferencia de nivel]",
			summary: "La corrección a la experiencia obtenida",
			points: ["La experiencia se calcula como si el nivel del jugador fuera más bajo que el nivel de la acción en este valor (como el cálculo está invertido, cuanto mayor es el nivel de la acción, más experiencia se obtiene)."],
		},
	},
	options: {
		label: "property",
	},
};

export const combat: Type.Combat = {
	title: "Valores de combate",
	summary: "La configuración de las correcciones de combate en las acciones del tipo stamina",
	points: ["Son valores de corrección que solo funcionan en las acciones del tipo `stamina`.", "Cada valor se calcula como una corrección adicional a la diferencia de nivel entre el jugador y la acción.", "Por ejemplo, si el valor de ataque es 10, el daño de ataque se calcula como si el nivel del jugador fuera 10 más alto que el nivel de la acción. Si es negativo, es una corrección en sentido contrario.", "Según el lugar donde se establezca, el valor es del lado del jugador o del lado del oponente.", "Los valores del lado del oponente actúan cancelando el campo opuesto que les corresponde. La defensa del oponente cancela el ataque del jugador, el ataque del oponente cancela la defensa del jugador, la evasión del oponente cancela la precisión del jugador y la precisión del oponente cancela la evasión del jugador.", "Solo la recuperación se cancela entre campos iguales: cuanto mayor es la recuperación del oponente, menos recupera el jugador."],
	list: [
		["Dónde se establece", "De qué lado es el valor"],
		["`defaultCombat` de general", "El valor de referencia del lado del jugador. Es el punto de partida común a todas las acciones `stamina`"],
		["Los valores de combate de la acción", "Valores del lado del oponente. Vistos desde el jugador, actúan como correcciones en sentido contrario"],
		["Los valores de combate de la habilidad", "Valores del lado que tiene la habilidad. Las habilidades del bando propio se suman al jugador y las del oponente al lado del oponente"],
	],
	children: {
		attack: {
			title: "Ataque [Diferencia de nivel]",
			summary: "La corrección por diferencia de nivel al daño de resistencia que se inflige al oponente",
			points: ["Cuanto mayor es el valor del lado del jugador, más daño se inflige al oponente.", "El valor establecido en una acción o en una habilidad del oponente pasa a ser el ataque del lado del oponente y, cuanto mayor es, más daño recibe el jugador."],
		},
		defence: {
			title: "Defensa [Diferencia de nivel]",
			summary: "La corrección por diferencia de nivel al daño de resistencia que se recibe del oponente",
			points: ["Cuanto mayor es el valor del lado del jugador, más se reduce el daño recibido.", "El valor establecido en una acción o en una habilidad del oponente pasa a ser la defensa del lado del oponente y, cuanto mayor es, menos daño inflige el jugador."],
		},
		accuracy: {
			title: "Precisión [Diferencia de nivel]",
			summary: "La corrección por diferencia de nivel a la tasa de fallo del ataque",
			points: ["Cuanto mayor es el valor del lado del jugador, más baja es la tasa de fallo del ataque.", "El valor establecido en una acción o en una habilidad del oponente pasa a ser la precisión del lado del oponente y, cuanto mayor es, más difícil le resulta al jugador evadir el ataque del oponente."],
		},
		evasion: {
			title: "Evasión [Diferencia de nivel]",
			summary: "La corrección por diferencia de nivel a la tasa de evasión del ataque del oponente",
			points: ["Cuanto mayor es el valor del lado del jugador, más fácil es evadir el ataque del oponente.", "El valor establecido en una acción o en una habilidad del oponente pasa a ser la evasión del lado del oponente y, cuanto mayor es, más difícil es que acierte el ataque del jugador."],
		},
		restore: {
			title: "Recuperación [Diferencia de nivel]",
			summary: "La corrección por diferencia de nivel a la cantidad de resistencia recuperada",
			points: ["Cuanto mayor es el valor del lado del jugador, más resistencia se recupera tras el combate.", "El valor establecido en una acción o en una habilidad del oponente pasa a ser la recuperación del lado del oponente y, cuanto mayor es, menos recupera el jugador.", "Solo la recuperación, a diferencia de los demás campos, se cancela entre campos iguales."],
		},
	},
	options: {
		label: "combat",
	},
};

export const acquisition: Type.Acquisition = {
	title: "Obtención",
	summary: "La configuración de la obtención de artículos y de niveles de categoría",
	points: ["Establece lo que se obtiene.", "Además de artículos, se puede cambiar el nivel de una categoría y el número de veces que se ha ejecutado una acción.", "Se puede establecer la probabilidad de conseguirlo."],
	list: [
		["Tipo", "Lo que se obtiene"],
		["Categoría", "Nivel"],
		["Acción", "Número de veces ejecutada"],
		["Artículo", "Cantidad en posesión"],
	],
	children: {
		type: {
			title: "Tipo",
			summary: "El tipo de elemento que se obtiene",
			list: [
				["Tipo", "Lo que se obtiene"],
				["Categoría", "Nivel (el valor establecido se suma tal cual)"],
				["Acción", "Número de veces ejecutada"],
				["Artículo", "Cantidad en posesión"],
			],
		},
		id: {
			title: "El ID del elemento",
			summary: "El ID que identifica el elemento que se obtiene",
		},
		count: {
			title: "Valor",
			summary: "La cantidad que se obtiene",
			points: ["Si se establece un valor negativo, disminuye la cantidad en posesión, el número de veces ejecutada o el nivel. Eso sí, nunca baja de 0.", "Si el artículo tiene establecida una cantidad máxima en posesión (maximum), la cantidad en posesión no aumenta por encima de ese valor.", "Si el tipo es una categoría, el valor establecido se suma al nivel tal cual (1 por cada nivel). Lo normal es ajustarlo con la configuración de experiencia de la acción. Salvo que tengas un propósito especial, esta configuración no hace falta.", "El nivel de una categoría nunca baja de 0 ni supera `maxCategoryLevels` de general (el nivel máximo de categoría).", "El valor se establece como número entero."],
		},
		chance: {
			title: "Probabilidad [-1 a 1]",
			summary: "La probabilidad de que la obtención tenga éxito (un valor negativo solo se evalúa al fallar)",
			points: ["Establece la probabilidad de conseguirlo con un decimal de -1 a 1. Para decidir la probabilidad se usa el valor absoluto.", "Si el valor es positivo, solo se evalúa cuando la acción tiene éxito: con `1` siempre se consigue y con `0.5` se consigue con una probabilidad del 50%.", "Si el valor es negativo, solo se evalúa cuando la acción falla: con `-1` siempre se consigue y con `-0.5` se consigue con una probabilidad del 50%.", "Con `0` no se consigue ni al tener éxito ni al fallar.", "El valor predeterminado es `1` (siempre se consigue al tener éxito)."],
		},
	},
	links: { type: "type" },
	options: {
		label: "acquisition",
	},
};

export const requirement: Type.Requirement = {
	title: "Requisito",
	summary: "La configuración de las condiciones necesarias para usar o mostrar un elemento",
	points: ["Son las condiciones que se establecen en cada elemento: categoría, acción, artículo y evento.", "Si no se cumplen todas las condiciones establecidas, no se puede realizar la operación indicada en la tabla.", "Según la configuración de desbloqueo (unlocked) del elemento, el elemento en sí no aparece en pantalla hasta que se cumplen las condiciones."],
	list: [
		["Dónde se establece", "Lo que no se puede hacer si no se cumplen las condiciones"],
		["Categoría", "Ejecutar todas las acciones de la categoría y operar sus artículos"],
		["Acción", "Ejecutar la acción"],
		["Artículo", "Operar el artículo (equiparlo, etc.)"],
		["Evento", "Completar una tarea y activar un evento de cambio o un evento fijo"],
	],
	children: {
		type: {
			title: "Tipo",
			summary: "El tipo de elemento al que se refiere la condición",
			list: [
				["Tipo", "El valor al que se hace referencia"],
				["Categoría", "El nivel de la categoría"],
				["Acción", "El número de veces que se ha ejecutado la acción"],
				["Artículo", "La cantidad del artículo en posesión"],
			],
		},
		id: {
			title: "El ID del elemento",
			summary: "El ID del elemento al que se refiere la condición",
			points: ["Establece el ID de la categoría, la acción o el artículo al que se refiere la condición.", "Si en un evento está activado el recuento por grupo (requiringGroup), se trata como el ID de un grupo y no de un elemento individual."],
		},
		count: {
			title: "Valor",
			summary: "La cantidad que necesita la condición",
			points: ["La condición se cumple cuando se alcanza o se supera el valor indicado.", "Se establece con un número entero de 0 o más. El valor predeterminado es `1`."],
		},
		chance: {
			title: "Probabilidad de consumo [0-1]",
			summary: "La probabilidad de que el artículo se consuma (de 0 a 1, solo funciona si el tipo es un artículo)",
			points: ["Es la probabilidad de consumir el artículo cuando se cumplen las condiciones y se ejecuta la acción.", "Con `1` siempre se consume, con `0.5` se consume con una probabilidad del 50% y con `0` no se consume.", "El valor predeterminado es `1` (siempre se consume). Sin embargo, en las condiciones de un evento (tarea, evento de cambio o evento fijo) el valor predeterminado es `0` (no se consume), para que lo que tienes no disminuya al completarlo.", "Con `0` no se reduce el inventario, así que puedes ejecutar la acción tantas veces como quieras mientras la cantidad en posesión llegue al valor de la condición. Se usa cuando quieres que la condición sea únicamente llevarlo equipado.", "No funciona si el tipo no es un artículo."],
		},
		equipment: {
			title: "Equipamiento",
			summary: "Si se exige que el artículo esté equipado como condición (solo funciona si el tipo es un artículo)",
			points: ["Al activarlo, la condición exige no solo tener el artículo en posesión, sino también llevarlo equipado.", "Si está equipado o no se decide por el equipamiento de la categoría a la que pertenece el artículo.", "No funciona si el tipo no es un artículo."],
		},
	},
	links: { type: "type" },
	options: {
		label: "requirement",
	},
};

export const information: Type.Information = {
	title: "Información",
	summary: "La configuración de la información básica del elemento (ID, nombre, explicación, icono y color)",
	points: ["Son los campos de información básica comunes a todos los elementos del mundo (categoría, acción, artículo, grupo, evento, habilidad y preajuste).", "Se establecen por separado para cada elemento."],
	children: {
		id: {
			title: "ID identificador",
			summary: "El ID único que identifica el elemento",
			points: ["Es el ID que identifica de forma única cada elemento.", "Es la cadena de texto con la que el editor distingue ese elemento.", "Por ejemplo, qué artículo se consigue al completar una acción se indica con el ID.", "Los caracteres que se pueden usar son una combinación de letras, guiones y cifras, de 1 a 100 caracteres."],
			important: "Una vez distribuido el juego, no cambies un ID ya establecido. Si lo cambias, deja de coincidir con los datos de juego existentes y el juego deja de funcionar correctamente.",
			children: {
				displayName: {
					title: "El nombre que se muestra",
					summary: "El nombre de visualización generado automáticamente a partir del ID",
					points: ["Si no se establece un nombre, los guiones se sustituyen por espacios y cada palabra se convierte con la primera letra en mayúscula y el resto en minúscula para mostrarse como nombre.", "Aunque el ID contenga mayúsculas, todo lo que no sea la primera letra se convierte a minúscula.", "En los idiomas distintos del inglés hay que establecer el campo de nombre por separado."],
					children: {
						example: {
							title: "Ejemplo",
							summary: "Un ejemplo real de conversión de un ID",
							points: ["Si el ID es `stylish-strong-axe`, el nombre pasa a ser `Stylish Strong Axe`.", "Si el ID es `stylish-STRONG-axe`, también pasa a ser `Stylish Strong Axe`."],
						},
					},
				},
				noDuplicate: {
					title: "No debe repetirse",
					summary: "Prohibición de repetir un ID dentro del mismo tipo",
					points: ["Como sirve para distinguir los elementos, no lo repitas dentro de cada tipo: categoría, acción, artículo, grupo, evento, habilidad y preajuste.", "Los eventos tratan las tareas, los eventos de cambio y los eventos fijos como un solo tipo, así que tampoco los repitas entre ellos.", "No hay ningún problema en que el mismo ID esté en tipos distintos.", "Un mundo con repeticiones da error en la validación."],
					links: { type: "type" },
				},
			},
		},
		name: {
			title: "Nombre",
			summary: "El nombre del elemento que se muestra",
			points: ["Es el nombre del elemento que se muestra en el juego.", "También se pueden introducir idiomas distintos del inglés.", "No pasa nada si el nombre coincide con el de otro elemento.", "Se pueden introducir hasta 20 caracteres.", "Si no cabe en el ancho disponible, la parte que sobresale se abrevia con `…`."],
			children: {
				translateFromId: {
					title: "Conversión automática a partir del ID",
					summary: "La función que genera el nombre automáticamente a partir del ID",
					points: ["Si se deja en blanco, se muestra automáticamente a partir del ID. Consulta el apartado anterior para más detalles."],
				},
			},
		},
		explanation: {
			title: "Explicación",
			summary: "La explicación detallada del elemento",
			points: ["Es la explicación del elemento que se muestra en el juego.", "También se pueden introducir idiomas distintos del inglés. Los textos largos se muestran enteros.", "Si no hay explicación, se deja en blanco."],
		},
		icon: {
			title: "Icono",
			summary: "La configuración del icono que representa el elemento",
			points: ["Como icono se puede establecer una imagen, Iconify o un emoji.", "Iconify es un servicio que ofrece iconos de todo tipo.", "Si se establecen varios de ellos, se muestran por orden de prioridad: imagen, Iconify y emoji."],
			children: {
				image: {
					title: "Imagen",
					summary: "Usar cualquier archivo de imagen",
					points: ["Es la imagen que representa el elemento.", "Al importarla se reduce automáticamente a 60×60 píxeles como máximo y se vuelve a comprimir.", "No hace falta si has establecido Iconify o un emoji."],
					children: {
						"file-type": {
							title: "Tipos de archivo",
							summary: "Los formatos de archivo de imagen compatibles",
							points: ["Se pueden usar los formatos habituales que el navegador puede mostrar.", "JPEG, PNG, GIF, WebP, SVG, etc.", "Los GIF y los AVIF se convierten a PNG. Los JPEG y los WebP se reducen manteniendo su formato original.", "Los SVG se incrustan tal cual, sin reducirse, así que evita los de gran tamaño."],
						},
					},
				},
				iconify: {
					title: "Iconify",
					summary: "Uso de los conjuntos de iconos de Iconify",
					points: ["Es el icono que representa el elemento.", "Si has establecido una imagen, esta se muestra con prioridad."],
					children: {
						iconify: {
							title: "Cómo buscar un icono",
							summary: "Cómo elegir un icono de Iconify",
							points: ["Busca en `Iconify` los iconos que se pueden mostrar.", "Con la búsqueda de iconos encuentras enseguida el icono más adecuado.", "Al seleccionar un icono se muestra su identificador, como `game-icons:sword-wound` (el tipo de conjunto de iconos `:` el nombre del icono); pégalo tal cual en este campo de icono."],
							images: ["iconify-selection.png"],
							links: { iconify: "https://icon-sets.iconify.design" },
						},
					},
				},
				emoji: {
					title: "Emoji",
					summary: "Mostrar el icono con un emoji",
					points: ["Muestra un emoji como icono.", "Introduce el emoji Unicode tal cual.", "Como se usa el emoji instalado en el entorno de ejecución, se ve algo distinto según el usuario.", "Con Iconify se pueden establecer emojis que no dependen de cada entorno", "Se pueden mostrar caracteres que no sean emojis, pero si hay varios caracteres la visualización puede romperse.", "Por ejemplo, se introduce un emoji como `🗡️` o `⚔️`."],
				},
			},
		},
		color: {
			title: "Color",
			summary: "La configuración del color con el que se muestra el elemento",
			points: ["Como color del elemento, se aplica al icono del elemento y a su color de fondo.", "Se elige en el selector de color del editor.", "El negro (`#000000`) se trata como el valor que significa «no se ha establecido ningún color». El valor inicial del selector de color también es este negro.", "Si quieres que se vea negro, indica un color ligeramente desplazado, como `#010101`."],
			children: {
				"heritage-from-parent": {
					title: "Herencia del elemento padre",
					summary: "Cómo se hereda la configuración de color del elemento padre",
					points: ["Las acciones, los artículos y los eventos sin color establecido heredan el color de la categoría a la que pertenecen.", "La jerarquía de la herencia es la siguiente.", "En los elementos con un color propio establecido, ese color tiene prioridad. No se sobrescribe aunque la categoría tenga color.", "Lo básico es decidir un color por categoría y dejar que lo que hay debajo lo herede. El color individual se establece cuando quieres destacar un elemento concreto.", "Si en la acción hay establecido un atributo (attribute), el color que se hereda no es el de la categoría a la que pertenece, sino el de la categoría indicada en el atributo.", "La categoría en sí no tiene de quién heredar. Si el color de la categoría sigue siendo negro (`#000000`), esa categoría y los elementos que hay debajo sin color establecido se muestran en el color intermedio entre el color de la barra y el color del texto del diseño.", "Los grupos, las habilidades y los preajustes no heredan y solo usan el color establecido en ellos mismos."],
					quote: colorTree,
					links: { type: "type" },
				},
			},
		},
		copy: {
			title: "Copiar la información",
			summary: "Duplicar la información de otro elemento",
			points: ["Al pulsar el botón `Copy Information`, la información de otro elemento se copia de una vez a este elemento.", "Elige el tipo del origen de la copia (categoría, acción, artículo, grupo, evento, habilidad o preajuste) y a continuación introduce su ID.", "Se sobrescriben todos los campos, incluido el ID identificador. Después de copiar, cambia el ID identificador por uno que no se repita."],
			links: { type: "type" },
		},
	},
	options: {
		label: "information",
	},
};

export const component: Markdown = {
	title: "Componente",
	summary: "Partes comunes",
	points: ["Las partes comunes que se usan en los ajustes de cada lugar se extraen y se tratan aparte.", "Los componentes que se usan en cualquiera de esos lugares son comunes, pero según el lugar hay campos del componente que no se usan."],
	list: expandList("Componente", [information, requirement, acquisition, combat, property], "Descripción"),
	options: {
		label: "component",
		linkedList: true,
	},
};

// type

export const preset: Type.Information = {
	...information,
	title: "Preajuste",
	summary: "Personalización de cómo se muestran los elementos del sistema",
	points: ["Sustituye los textos de la interfaz y los iconos que vienen incorporados de antemano en el motor del juego (el reproductor).", "Solo se sustituyen aquellos cuyo ID coincide con un preajuste existente. Añadir un preajuste cuyo ID no coincide con uno existente no da error, pero no afecta a la visualización porque no hay ningún sitio que lo consulte.", "Solo se sustituyen los campos que estableces. Si solo estableces el icono, por ejemplo, para el nombre, el color y los demás campos se usan los originales.", "La sobrescritura del nombre y de la explicación tiene prioridad sobre las traducciones de cada idioma incorporadas en el reproductor. La cadena que sobrescribes se muestra tal cual en todos los idiomas.", "Si quieres cambiar el texto según el idioma, especifícalo en el archivo de traducción `translations/world` que se genera al activar la traducción. Ese tiene la máxima prioridad."],
	options: {
		label: "preset",
	},
};

export const task: Type.Event = {
	title: "Tarea",
	summary: "Una misión que se logra cuando se cumplen las condiciones",
	points: ["Se logra cuando se cumplen las condiciones que estableces, y aparece un mensaje en la parte superior de la pantalla.", "Aparece en la lista de misiones del reproductor y en la lista de tareas de la categoría.", "Una tarea sin condiciones establecidas nunca se logra.", "Una vez lograda, sigue lograda aunque después dejen de cumplirse las condiciones, y la recompensa puede recibirse en cualquier momento.", "La recompensa no se entrega automáticamente. El jugador la recibe cuando abre la tarea y pulsa la barra de Obtención.", "Hasta que se recibe la recompensa, la barra de la lista lleva una cinta que indica que aún no se ha reclamado.", "Una tarea sin recompensa establecida no muestra la barra de Obtención y se completa en el momento en que se logra.", "No puedes recibir la recompensa mientras el número de tipos de artículos que puedes tener está en su límite. Ordena lo que tienes y vuelve a reclamarla.", "Con la obtención puedes cambiar el nivel de una categoría, el número de veces que se ha ejecutado una acción y la cantidad en posesión de un artículo.", "Lo que quieras disparar en un momento distinto de las condiciones, como el primer arranque o el fin del juego, se establece con un evento fijo (unique)."],
	links: { unique: "unique" },
	children: {
		information: information,
		category: {
			title: "Categoría",
			summary: "El ID de la categoría a la que pertenece la tarea",
			points: ["Especifica el ID de la categoría a la que pertenece esta tarea.", "Al establecerlo, la lista de tareas se añade a la pantalla de la categoría del reproductor, y en la lista de misiones también se muestran agrupadas por categoría.", "Si se deja en blanco, no pertenece a ninguna categoría y se muestra junto al principio de la lista de misiones.", "Si no hay color establecido en la propia tarea, hereda el color de la categoría."],
			links: { category: "category" },
		},
		timing: {
			title: "Momento",
			summary: "El momento en que se dispara la tarea (fijado en `tasked`)",
			points: ["La tarea está fijada en `tasked` (cuando se cumplen las condiciones que estableces) y no se puede editar.", "La recompensa solo puede recibirse una vez, y una vez recibida sigue lograda sin más cambios.", "Lo que quieras disparar en otro momento determinado se establece con un evento fijo (unique)."],
			links: { unique: "unique" },
		},
		unlocked: {
			title: "Estado de visualización inicial",
			summary: "El estado de visualización inicial del icono de la tarea (el logro lo deciden las condiciones y este ajuste no lo logra)",
			points: ["Las condiciones de logro de una tarea las deciden requirements, y este campo solo afecta al aspecto del icono en la lista.", "secreted: No aparece en absoluto en la lista de tareas hasta que se cumplen todos los requirements (el logro en sí sigue ocurriendo por las condiciones).", "hidden y hinted: El icono se muestra con una raya encima, como no desbloqueado todavía.", "released: La raya desaparece y se muestra como ya desbloqueado.", "Una tarea que se ha logrado una vez no desaparece de la lista, y sigue mostrándose como lograda aunque después dejen de cumplirse las condiciones."],
		},
		requirements: { ...requirement, options: { ...requirement.options, array: true }, summary: "Las condiciones para lograr la tarea" },
		requiringGroup: {
			title: "Suma por grupo",
			summary: "Trata el id de las condiciones como un ID de grupo y juzga por el valor total de los elementos que pertenecen a él",
			points: ["Al activarlo, el id que estableces en las condiciones (requirements) se trata como el ID de un grupo directamente bajo el mundo.", "Una condición cuyo tipo es una categoría se juzga por el nivel total de todas las categorías que pertenecen a ese grupo.", "Una condición cuyo tipo es una acción se juzga por el total del número de veces que se han ejecutado todas las acciones que pertenecen a ese grupo.", "Una condición cuyo tipo es un artículo se juzga por el total de la cantidad en posesión de todos los artículos que pertenecen a ese grupo.", "Los elementos que no están desbloqueados (cualquier estado distinto de released) no se incluyen en el total.", "La probabilidad de consumo (chance) y la condición de equipamiento (equipment) de un artículo se ignoran, y la cantidad en posesión tampoco se consume. Solo se usan para el juicio.", "Al desactivarlo, el id de las condiciones se trata como el ID de una categoría, una acción o un artículo concretos, como hasta ahora."],
			links: { group: "group" },
		},
		acquisitions: { ...acquisition, options: { ...acquisition.options, array: true }, summary: "La recompensa que puede recibirse al lograr la tarea" },
		group: {
			title: "Grupo de tareas",
			summary: "La clasificación de grupo de visualización de la tarea",
			points: ["Aplica uno de los definidos en los grupos que están directamente bajo el mundo.", "En la lista de tareas de una categoría se muestran separadas por grupo, con un encabezado en cada uno. Las tareas sin grupo establecido también forman un bloque, y para su encabezado se usa el preajuste «Tarea».", "En la lista de misiones no se separan por encabezado, y solo el orden en que se alinean queda reunido por grupo.", "El orden en que se alinean los bloques lo decide la posición donde aparece la primera tarea de ese grupo."],
			links: { group: "group" },
		},
	},
	options: {
		label: "task",
	},
};

// 構造はtaskと同じで、timingだけchanged固定。プレイヤーの画面には一切表示されない内部処理用のイベント
export const changed: Type.Event = {
	title: "Evento de cambio",
	summary: "Un evento de procesamiento interno que se dispara cuando la cantidad de una categoría, una acción o un artículo aumenta de una vez en la cantidad de las condiciones o más",
	points: [
		"Se comprueba en cualquier momento en que cambia una cantidad, como al completar una acción, al comprar o vender, o al abrir un cofre del tesoro.",
		"Las condiciones (requirements) se juzgan por la cantidad del aumento en ese único momento, no por un valor absoluto como la cantidad en posesión. Los aumentos pequeños repartidos en varias veces no se suman.",
		"Si estableces la condición de un artículo en 3, por ejemplo, se cumple cuando ese artículo aumenta en 3 o más en esa única vez. Una disminución no cuenta como aumento.",
		"Si estableces varias condiciones, todas tienen que cumplirse a la vez en ese único cambio. Un evento de cambio sin ninguna condición establecida nunca se dispara.",
		"Poner el valor de una condición en `0` cuenta como cumplida aunque no haya aumento, así que se dispara cada vez que cambia una cantidad.",
		"No se miran la probabilidad de consumo (chance) ni el equipamiento (equipment) de las condiciones. El juicio usa solo la cantidad del aumento, y los elementos usados en las condiciones tampoco disminuyen.",
		"La recompensa se recibe automáticamente cada vez que se cumplen las condiciones, y se dispara una y otra vez cuantas veces sea. A diferencia de una tarea, no es de una sola vez y no hace falta ninguna operación para recibirla. También puede establecerse una cantidad negativa.",
		"A diferencia de una tarea o de una compra, no se comprueba el límite del número de tipos de artículos que puedes tener, así que pueden aumentar artículos nuevos por encima de la capacidad.",
		"Un aumento procedente de una recompensa también se trata como un cambio, así que cuando la recompensa de un evento de cambio cumple las condiciones de otro evento de cambio, este se dispara a continuación.",
		"No se muestra en absoluto en la pantalla del reproductor. Tampoco aparece en la lista de misiones ni se muestra el mensaje de logro.",
	],

	important: "No establezcas la recompensa de un evento de cambio de modo que cumpla sus propias condiciones. No dejaría de dispararse y el juego se detendría. Un ejemplo es un evento cuyas condiciones se cumplen cuando el artículo A aumenta en uno y cuya recompensa entrega un artículo A.",
	links: { unique: "unique" },
	children: {
		information: information,
		category: {
			title: "Categoría",
			summary: "El ID de la categoría a la que pertenece el evento de cambio (solo se usa para clasificar, porque no se muestra nada en la pantalla)",
			points: ["Como no se muestra nada en la pantalla del reproductor, este ajuste no afecta al aspecto."],
		},
		timing: {
			title: "Momento",
			summary: "El momento en que se dispara el evento de cambio (fijado en `changed`)",
			points: ["Está fijado en `changed` y no se puede editar.", "Se comprueba en cualquier momento en que cambia una cantidad, y se dispara de nuevo cada vez que se cumplen las condiciones."],
		},
		unlocked: {
			title: "Estado de visualización inicial",
			summary: "Prácticamente no tiene efecto, porque no se muestra nada en la pantalla",
			points: ["Un evento de cambio no se muestra en la pantalla del reproductor, así que este ajuste no se usa."],
		},
		requirements: { ...requirement, options: { ...requirement.options, array: true }, summary: "Las condiciones para que se dispare el evento de cambio (se juzgan por la cantidad del aumento)" },
		requiringGroup: {
			title: "Suma por grupo",
			summary: "Trata el id de las condiciones como un ID de grupo y juzga por el total de la cantidad del aumento de los elementos que pertenecen a él",
			points: ["Al activarlo, el id que estableces en las condiciones (requirements) se trata como el ID de un grupo directamente bajo el mundo.", "Se suman las cantidades del aumento de todas las categorías, todas las acciones y todos los artículos que pertenecen a ese grupo para el juicio.", "A diferencia de la suma por grupo de una tarea, la cantidad del aumento de un elemento que aún no está desbloqueado también se incluye en el total.", "Al desactivarlo, el id de las condiciones se trata como el ID de una categoría, una acción o un artículo concretos, como hasta ahora."],
			links: { group: "group" },
		},
		acquisitions: { ...acquisition, options: { ...acquisition.options, array: true }, summary: "La recompensa que se recibe automáticamente cuando se dispara el evento de cambio" },
		group: {
			title: "Grupo de eventos de cambio",
			summary: "La clasificación de grupo de visualización para la gestión interna (prácticamente sin uso, porque no se muestra nada en la pantalla)",
			points: ["Un evento de cambio no se muestra en la pantalla del reproductor, así que este ajuste no afecta al aspecto."],
		},
	},
	options: {
		label: "changed",
	},
};

export const group: Type.Information = {
	...information,
	title: "Grupo",
	summary: "Define los grupos de visualización de las categorías, las acciones, los artículos y las tareas",
	points: ["Define los grupos para controlar el orden de visualización. En cada categoría, acción, artículo y tarea puedes establecer un grupo definido aquí.", "Los que están en el mismo grupo se muestran reunidos en una lista. El orden en que se alinean los bloques lo decide la posición donde aparece el primer elemento de ese grupo (no el orden de definición de esta lista de grupos).", "Los que se dejan en blanco también se tratan como un grupo, y los que están en blanco se reúnen entre sí.", "El orden de definición de esta lista de grupos solo importa para la disposición de los espacios de equipamiento. Los espacios de equipamiento se muestran en el orden en que están alineados aquí, y un grupo que no está aquí pasa al final.", "A un grupo también puedes ponerle un nombre, una explicación, un icono y un color, y en la pantalla del grupo puedes ver una lista de las categorías, las acciones y los artículos que pertenecen a él.", "Si activas la suma por grupo en las condiciones de un evento, puedes especificar el ID de un grupo y tomar como condición, todos juntos, los elementos que pertenecen a él."],
	links: { requirement: "requirement" },
	options: {
		label: "group",
	},
};

export const skill: Type.Skill = {
	title: "Habilidad",
	summary: "Un efecto especial que se sortea en cada turno del combate y se activa",
	points: ["Es un efecto especial que se sortea en cada turno y se activa en una acción de combate (`stamina`). No se activa en las acciones de ningún otro tipo.", "Su sustancia se define aquí, y se consulta por ID desde `skill` de un artículo (tu lado) y `skills` de una acción (el lado del oponente).", "Los candidatos de tu lado son las habilidades a las que remiten los artículos que están surtiendo efecto en ese momento (`unnecessary` mientras se posee, `necessary` y `consumable` mientras están equipados). Al desequipar un artículo, su habilidad también sale de los candidatos.", "Cada turno se barajan los candidatos de tu lado y del lado del oponente, se juzga la probabilidad de activación desde el principio y solo se activa la primera que sale adelante. Si no sale adelante ninguna, ese turno no hay habilidad.", "Cuando varios artículos o acciones remiten a la misma habilidad, esta gana otras tantas oportunidades en el sorteo, así que se activa con más facilidad."],
	links: { item: "item", action: "action" },
	children: {
		information: information,
		chance: {
			title: "Probabilidad de activación [0-1]",
			summary: "La probabilidad de que esta habilidad se active en ese turno",
			points: ["En cada turno se juzga con esta probabilidad si se activa. Con `1` sale adelante siempre y con `0` no se activa. El valor predeterminado es `1`.", "El juicio avanza en orden desde el principio de los candidatos barajados, y solo se activa la primera habilidad que sale adelante. Por eso, cuando hay varios candidatos, la proporción en que se activa realmente es menor que este valor.", "Si tienes activada la visualización de la explicación, este valor también afecta a la frecuencia con que aparece la explicación. Cuanto más fácil es que una habilidad se active, menos se repite su explicación."],
		},
		property: {
			...combat,
			summary: "Los valores de combate que se añaden en el turno en que se activa",
			points: ["Solo en el turno en que esta habilidad se activa, los valores de combate de aquí se añaden como corrección por diferencia de nivel.", "Solo el valor de recuperación es una excepción, y no actúa en ese turno, sino todo junto en la recuperación posterior al desenlace. De los valores de recuperación de las habilidades que se activaron durante la acción, el mayor se suma a la cantidad recuperada con las habilidades de tu lado y se resta de ella con las habilidades del oponente."],
		},
		comment: {
			title: "Visualización de la explicación",
			summary: "Si se muestra la explicación en una notificación emergente al activarse",
			points: ["Es la marca de si se muestra la explicación en una notificación emergente cuando esta habilidad se activa.", "Si está activada, se muestra cada vez que se activa con una probabilidad de (100% − la probabilidad de activación) ÷ 2. Si la probabilidad de activación es del 40%, es del 30%.", "Si está desactivada, no se muestra.", "Si la explicación está en blanco, no se muestra aunque la actives."],
		},
	},
	options: {
		label: "skill",
	},
};

export const item: Type.Item = {
	title: "Artículo",
	summary: "Elementos de objetos como el equipamiento y los consumibles",
	points: ["Son los elementos relacionados con poseer cosas como equipamiento, consumibles y objetos de valor.", "Los espacios de equipamiento se crean por grupo en cada categoría, y solo puede equiparse uno de los artículos del mismo espacio. También puede hacerse que un artículo no se pueda equipar.", "Como la cantidad en posesión es en sí misma el progreso, un artículo también puede usarse como una marca o un contador. Si haces un artículo sin efecto que tampoco pueda equiparse, se convierte en un elemento que solo cuenta un número."],
	children: {
		information: information,
		category: {
			title: "Categoría",
			summary: "El ID de la categoría a la que pertenece el artículo",
			points: ["Especifica el ID de la categoría a la que pertenece este artículo. Se alinea en la lista de artículos de la categoría que especifiques, y los espacios de equipamiento también se crean por categoría.", "Si no hay color establecido en el propio artículo, hereda el color de la categoría.", "A dónde llegan los efectos de las propiedades puede especificarse aparte de la categoría a la que pertenece, así que un artículo de otra categoría también puede dar efecto."],
			links: { category: "category", property: "property" },
		},
		group: {
			title: "Grupo",
			summary: "La clasificación de grupo de visualización del artículo",
			points: ["Aplica uno de los definidos en los grupos que están directamente bajo el mundo.", "La lista de artículos se muestra en el orden de los grupos que establezcas.", "Si se deja en blanco, no se divide en grupos."],
			links: { group: "group" },
		},
		unlocked: {
			title: "Estado de desbloqueo inicial",
			summary: "El estado inicial de visualización y desbloqueo del elemento (pasa automáticamente a un estado superior cuando se cumplen los requisitos de activación)",
			points: ["secreted: No aparece en absoluto en la interfaz hasta que se cumplen todos los requirements (tampoco sale en las pistas y queda enmascarado en las listas de requisitos y recompensas).", "hidden: Mientras ningún elemento desbloqueado lo consulta y sus requisitos siguen sin cumplirse, queda oculto por completo (el nombre también aparece atenuado y no se puede operar).", "hinted (predeterminado): Solo se muestra el nombre por adelantado, pero no se puede operar hasta que se desbloquea.", "released: Está desbloqueado y se puede operar desde el principio, sin relación con las condiciones (antes «mostrar desde el principio»).", "Una vez que se ha obtenido un artículo aunque sea una vez, sigue desbloqueado sin relación con este ajuste ni con las condiciones.", "Al revés, un artículo sin ninguna condición establecida no se desbloquea hasta que se obtiene, a menos que lo pongas en `released`. Establece siempre condiciones en los artículos que quieras que se compren."],
		},
		buyingValue: {
			title: "Precio de compra [Monedas]",
			summary: "El ajuste del precio de compra del artículo",
			points: ["Es la cantidad de moneda que pagas al comprar una unidad del artículo. El valor predeterminado es `-1` (no se puede comprar).", "Un artículo que no está desbloqueado no se puede comprar aunque tenga precio establecido.", "La cantidad que puedes comprar de una vez es la menor entre la que puedes comprar con la moneda que tienes y lo que resta hasta la cantidad máxima en posesión."],
			list: [
				["Precio de compra", "Trato"],
				["0", "No se puede comprar"],
				["Un valor mayor que 0", "El precio al que se puede comprar"],
				["Un valor menor que 0 (por ejemplo, -1)", "No se puede comprar (se trata igual que 0)"],
			],
		},
		sellingValue: {
			title: "Precio de venta [Monedas]",
			summary: "El ajuste del precio de venta del artículo",
			points: ["Es la cantidad de moneda que recibes al vender una unidad del artículo. El valor predeterminado es `0` (no se puede vender).", "La moneda que recibes es la especificada por el ID de moneda de comercio, la misma que al comprar.", "Nunca se decide automáticamente a partir del precio de compra, así que establece siempre un valor cuando quieras que se pueda vender.", "No se pueden establecer valores negativos."],
			list: [
				["Precio de venta", "Trato"],
				["0", "No se puede vender"],
				["Un valor mayor que 0", "Se puede vender a ese precio"],
			],
		},
		maximum: {
			title: "Cantidad máxima en posesión [Unidades]",
			summary: "El límite de la cantidad máxima en posesión del artículo",
			points: ["Con 0 no hay límite para la cantidad que puede poseerse. El valor predeterminado es `0`.", "Con 1 o más, solo puede poseerse hasta esa cantidad. Cuando se alcanza el límite, la cantidad en posesión no aumenta aunque se obtenga más.", "También se convierte en el límite de la cantidad que puede comprarse.", "Cuando la cantidad en posesión de los datos guardados supera el límite, se reduce hasta el límite al cargarlos."],
		},
		equipmentType: {
			title: "Tipo de equipamiento",
			summary: "El ajuste de tipo relativo al equipamiento, al efecto y al consumo del artículo",
			points: ["En los artículos de `necessary` y `consumable`, su grupo se convierte automáticamente en un espacio de equipamiento de la categoría.", "Dentro del mismo grupo solo puede equiparse un artículo. Al equipar un artículo nuevo, el equipamiento existente del mismo grupo se retira automáticamente.", "El orden de los espacios de equipamiento sigue el orden de definición de la lista de grupos del mundo.", "`unnecessary` surte efecto se equipe o no, y la magnitud del efecto es proporcional a la cantidad en posesión (sin efecto con 0, n veces con n unidades).", "`consumable` solo se consume cuando las propiedades de ese artículo afectan a la acción ejecutada, una unidad por acción. No disminuye en las acciones a las que su efecto no llega. Que disminuya realmente lo decide la probabilidad de consumo.", "Un artículo que se ha consumido hasta 0 se desequipa automáticamente.", "Para equiparlo hay que cumplir tanto las condiciones de ese artículo como las de la categoría."],
			list: [
				["Valor", "Equipamiento", "Surtir efecto", "Consumo", "Ejemplo"],
				["`necessary`", "Necesario", "Solo mientras está equipado (por una unidad)", "No", "Equipamiento como espadas y armaduras"],
				["`consumable`", "Necesario", "Solo mientras está equipado (por una unidad)", "Se consume al ejecutar la acción", "Artículos que se consumen para obtener un efecto, como las pociones"],
				["`unnecessary`", "Innecesario", "Siempre mientras se posee (proporcional a la cantidad en posesión)", "No", "Artículos pasivos que hacen efecto con solo tenerlos"],
				["`impossible`", "Imposible", "Ninguno", "No", "Artículos sin efecto, como materiales y chatarra"],
			],
		},
		consumeChance: {
			title: "Probabilidad de consumo [0-1]",
			summary: "Probabilidad de que un equipamiento consumible se consuma en una acción",
			points: ["Indica, de `0` a `1`, la probabilidad de que un artículo cuyo tipo de equipamiento es `consumable` se consuma en una acción. El valor predeterminado es `1` (se consume siempre).", "Con `0.5` se consume aproximadamente una de cada dos veces, y con `0` no se consume nunca.", "El juicio de consumo solo se hace cuando las propiedades de ese artículo afectan a la acción ejecutada.", "No se usa con tipos de equipamiento distintos de `consumable`."],
		},
		requirements: { ...requirement, options: { ...requirement.options, array: true }, summary: "Las condiciones para que el artículo se desbloquee y pueda equiparse" },
		properties: { ...property, options: { ...property.options, array: true }, summary: "Los efectos de propiedad que tiene el artículo" },
		coinId: { title: "ID de moneda de comercio", summary: "El ID de la moneda que se usa para comerciar con este artículo", points: ["Especifica el ID de la moneda (coins) que se usa en común para el precio de compra y el precio de venta.", "Si se deja en blanco, o si se especifica un ID que no está en la lista de monedas, se usa la moneda principal (la primera de coins)."] },
		// スキルの実体ではなくワールド直下のskillsのID参照なので、スキル自身の項目は持たせない
		skill: { title: skill.title, summary: "El ID de la habilidad que este artículo aporta a tu lado", points: ["Especifica un ID definido en las habilidades que están directamente bajo el mundo. Si se deja en blanco, no hay habilidad.", "Mientras este artículo surte efecto (`unnecessary` mientras se posee, `necessary` y `consumable` mientras está equipado), la habilidad que especifiques entra en el sorteo de tu lado.", "Si se especifica un ID que no existe, se ignora."], links: { skill: "skill" }, options: { label: "skill" } },
	},
	options: {
		label: "item",
	},
};

export const action: Type.Action = {
	title: "Acción",
	summary: "Los elementos de comportamiento como la recolección, la fabricación y el combate",
	points: ["Es un elemento que representa un comportamiento como la recolección, la fabricación, el comercio o el combate.", "Cada vez que actúas ganas experiencia y tu nivel sube.", "Puedes configurarlo para que consuma u obtenga artículos cada vez que actúas.", "Hay varios tipos de patrón de comportamiento."],
	children: {
		information: information,
		category: {
			title: "Categoría",
			summary: "El ID de la categoría a la que pertenece la acción",
			points: ["Indica el ID de la categoría a la que pertenece esta acción."],
		},
		attribute: {
			title: "Atributo",
			summary: "La categoría de atributo propia de la acción",
			points: ["Puedes establecer un atributo (categoría) individual.", "Si está en blanco, se hereda la categoría a la que pertenece.", "Por ejemplo, si en una acción que pertenece a una categoría llamada Castillo del Rey Demonio estableces individualmente el atributo de magia, el nivel y las propiedades de la categoría de magia se calculan y se aplican al tiempo de finalización y al daño de la acción.", "La experiencia al tener éxito también va a la categoría establecida en el atributo, no a la categoría a la que pertenece.", "Si en la propia acción no hay ningún color establecido, los colores del icono y del fondo heredan el color de la categoría establecida en el atributo, no el de la categoría a la que pertenece."],
			links: { category: "category" },
		},
		group: {
			title: "Grupo",
			summary: "La clasificación por grupo de visualización de la acción",
			points: ["Aplica uno de los definidos en los grupos que están directamente bajo el mundo.", "La lista de acciones se muestra en el orden de los grupos que has establecido."],
			links: { group: "group" },
		},
		unlocked: {
			title: "Estado de desbloqueo inicial",
			summary: "El estado inicial de visualización y desbloqueo del elemento (pasa automáticamente a un estado superior cuando se cumplen los requisitos de activación)",
			points: ["secreted: No aparece en absoluto en la interfaz hasta que se cumplen todos los requirements (tampoco sale en las pistas y queda enmascarado en las listas de requisitos y recompensas).", "hidden: Mientras ningún elemento desbloqueado lo consulta y sus requisitos siguen sin cumplirse, queda oculto por completo (el nombre también aparece atenuado y no se puede operar).", "hinted (predeterminado): Solo se muestra el nombre por adelantado, pero no se puede operar hasta que se desbloquea.", "released: Está desbloqueado y se puede operar desde el principio, sin relación con las condiciones (antes «mostrar desde el principio»)."],
		},
		level: {
			title: "Nivel",
			summary: "El nivel de dificultad de la acción",
			points: ["La dificultad de la acción se expresa mediante un nivel.", "Al ejecutarla se compara con el nivel del jugador y se calcula cada propiedad.", "El término de comparación es el nivel de la categoría establecida en el atributo.", "Por ejemplo, si ejecutas una acción más alta que tu propio nivel, hay efectos como que baja la tasa de éxito.", "Mientras se cumplan las condiciones, se puede ejecutar aunque el nivel del jugador sea menor que este valor.", "Sin embargo, si `actionLevelLimit` de general (el límite de nivel de las acciones) está activado, este valor se añade automáticamente como condición sobre el nivel de la categoría, así que no se puede ejecutar hasta que el nivel llegue. En las categorías que no tienen nivel no se añade."],
			links: { property: "property" },
		},
		requirements: { ...requirement, options: { ...requirement.options, array: true }, summary: "Las condiciones necesarias para ejecutar la acción" },
		seconds: {
			title: "Tiempo requerido [Segundos]",
			summary: "El tiempo estándar que lleva ejecutar la acción",
			points: ["Es el tiempo estándar (en segundos) necesario para realizar la acción una vez.", "En el tipo `stamina` es el intervalo de tiempo que lleva un turno (restar una vez la resistencia de ambos lados). Los turnos que recuperan la resistencia tras decidirse el resultado usan el mismo intervalo.", "Varía en la ejecución real por el cálculo de las propiedades."],
			links: { property: "property" },
		},
		experience: {
			title: "Experiencia [100 para el siguiente nivel]",
			summary: "La experiencia obtenida cuando la acción tiene éxito",
			points: ["Es la experiencia estándar que se obtiene al ejecutar la acción una vez y tener éxito. 100 es la experiencia de un nivel.", "En el caso del combate se obtiene al vencer al oponente, así que conviene establecerla generosa.", "Varía en la ejecución real por el cálculo de las propiedades."],
			links: { property: "property" },
		},
		chance: {
			title: "Tasa de éxito [0-1]",
			summary: "La probabilidad de éxito al completarse la acción",
			points: ["Es la probabilidad de tener éxito cuando la acción se completa.", "Con `1` siempre tiene éxito y con `0` siempre falla.", "Al fallar también se consumen los artículos de consumo, pero la experiencia y el número de ejecuciones no aumentan.", "De las recompensas, solo las que tienen la probabilidad (chance) en un valor positivo se obtienen al tener éxito. Las que están en un valor negativo se obtienen solo al fallar, así que fallar no significa necesariamente que no se obtenga nada.", "Varía en la ejecución real por el cálculo de las propiedades."],
		},
		maximum: {
			title: "Número máximo de ejecuciones [Veces]",
			summary: "El número máximo de veces que la acción puede completarse",
			points: ["Es el límite superior del número de veces que la acción puede tener éxito y completarse.", "Con `0` es ilimitado.", "Al alcanzar el límite superior, la acción pasa a no poder ejecutarse."],
		},
		acquisitions: { ...acquisition, options: { ...acquisition.options, array: true }, summary: "La recompensa obtenida cuando la acción tiene éxito" },
		progressType: {
			title: "Tipo de avance",
			summary: "El tipo de ejecución de la acción",
			points: ["Hay cuatro tipos."],
			list: [
				["Tipo", "Comportamiento", "Resistencia", "Ejemplo"],
				["`persistent`", "Es un tipo en el que la acción se ejecuta de forma repetida y continua. Cada vez que se completa una vez se obtiene experiencia y recompensa.", "Sin relación", "Tala, minería, pesca"],
				["`single`", "Ejecuta la acción una vez. Si se interrumpe a medias, el avance se guarda y la próxima vez se puede reanudar desde donde se quedó. Al completarse, el usuario pulsa la acción de confirmación y recibe el resultado.", "Sin relación", "Abrir un cofre del tesoro, aprender una habilidad leyendo"],
				["`snap`", "Es un tipo en el que la acción se ejecuta al instante. Se completa enseguida, sin paso del tiempo.", "Sin relación", "Trueque, uso de un artículo"],
				["`stamina`", "Cada tiempo requerido disminuye la resistencia del jugador y la del oponente. Cuando se agota la resistencia del oponente se obtiene experiencia y recompensa. Cuando se agota la resistencia del jugador se acaba la partida y se cancelan todas las acciones en ejecución.", "Con relación", "Combate, trabajo que conlleva peligro"],
			],
		},
		property: combat,
		// スキルの実体ではなくワールド直下のskillsのID参照の一覧
		skills: { title: skill.title, summary: "La lista de las habilidades que activa el oponente", points: ["Indica las habilidades que activa el oponente de esta acción mediante los IDs de las habilidades que están directamente bajo el mundo.", "Solo tiene sentido en las acciones de tipo `stamina`.", "Cada turno la lista se reordena al azar y la probabilidad de activación se juzga desde el principio, y solo se activa la primera que se cumple. Si no se cumple ninguna, ese turno queda sin habilidad.", "Las habilidades del propio bando no se reúnen aquí, sino a partir de las habilidades establecidas en los artículos que están produciendo efecto (los artículos que funcionan solo por tenerlos y no necesitan equiparse, y los indispensables y consumibles que están equipados).", "Los IDs que no existen se ignoran."], options: { label: "skill", array: true } },
	},
	options: {
		label: "action",
	},
};

export const category: Type.Category = {
	title: "Categoría",
	summary: "El marco amplio que clasifica las acciones y los artículos",
	points: ["Representa una clasificación grande.", "Por ejemplo, puedes establecerla como un marco libre: corta distancia, larga distancia, magia, mazmorra, herrería, taller y demás.", "Las acciones y los artículos se colocan directamente bajo el mundo y se vinculan mediante el ID de categoría."],
	children: {
		information: information,
		group: {
			title: "Grupo",
			summary: "La clasificación por grupo de visualización de la categoría",
			points: ["Aplica uno de los definidos en los grupos que están directamente bajo el mundo.", "La lista de categorías se muestra en el orden de los grupos que has establecido."],
			links: { group: "group" },
		},
		unlocked: {
			title: "Estado de desbloqueo inicial",
			summary: "El estado inicial de visualización y desbloqueo del elemento (pasa automáticamente a un estado superior cuando se cumplen los requisitos de activación)",
			points: ["secreted: No aparece en absoluto en la interfaz hasta que se cumplen todos los requirements (tampoco sale en las pistas y queda enmascarado en las listas de requisitos y recompensas).", "hidden: Mientras ningún elemento desbloqueado lo consulta y sus requisitos siguen sin cumplirse, queda oculto por completo (el nombre también aparece atenuado y no se puede operar).", "hinted (predeterminado): Solo se muestra el nombre por adelantado, pero no se puede operar hasta que se desbloquea.", "released: Está desbloqueado y se puede operar desde el principio, sin relación con las condiciones (antes «mostrar desde el principio»)."],
		},
		requirements: { ...requirement, options: { ...requirement.options, array: true }, summary: "Las condiciones necesarias para usar la categoría" },
		numeric: {
			title: "Presencia de nivel",
			summary: "La presencia de la función de nivel de categoría",
			points: ["Es la marca de si esta categoría tiene nivel o no.", "Si está activada tiene nivel, y si está desactivada no lo tiene.", "Como ejemplo, hay un uso en el que las categorías basadas en la experiencia, como la esgrima o la magia, se activan, y las categorías de lugares, como las mazmorras o las herrerías, se desactivan.", "Si está desactivada no entra experiencia y, en el cálculo de las propiedades, la diferencia de nivel entre el jugador y la acción se trata como 0. La corrección de las propiedades por el equipamiento sigue surtiendo efecto igual.", "Una categoría desactivada también queda fuera del juicio de completado (completed)."],
		},
		standaloneProgress: {
			title: "Avance simultáneo",
			summary: "La configuración de ejecución en paralelo con otras categorías",
			points: ["Es la marca de si las acciones de esta categoría pueden avanzar en paralelo con las acciones de otras categorías.", "Si está activada, pueden avanzar a la vez de forma independiente de las acciones de otras categorías.", "Si está desactivada, en el conjunto de las categorías igualmente desactivadas solo puede avanzar una acción.", "Si inicias una acción nueva en una categoría desactivada, la acción en curso no se cancela, sino que se empuja de vuelta al principio de la cola de espera. El número de ejecuciones restante se conserva y, cuando termina la acción que se ha colado, se reanuda desde donde quedó."],
		},
		background: {
			title: "Fondo",
			summary: "La configuración de fondo propia de la categoría",
			points: ["Establece el fondo de esta categoría.", "Cuando se selecciona la categoría, la imagen de fondo cambia junto con ella.", "Si no se establece, se usa tal cual el fondo del diseño.", "Al importarla se reduce automáticamente a un tamaño dentro de 256×256 píxeles."],
		},
	},
	options: {
		label: "category",
	},
};

export const type: Markdown = {
	title: "Tipo",
	summary: "La clasificación básica del mundo",
	points: ["Un mundo se compone de seis tipos.", "Todos los elementos se colocan directamente bajo el mundo.", "Las acciones y los artículos se vinculan mediante el ID de la categoría a la que pertenecen.", "Solo los eventos no son un tipo: se colocan agrupados por momento en los eventos (events) que están directamente bajo el mundo."],
	list: expandList("Tipo", [category, action, item, skill, group, preset], "Descripción"),
	quote: typeTree,
	options: {
		label: "type",
		linkedList: true,
	},
};

// basic

export const development: Type.Development = {
	title: "Desarrollo",
	summary: "La gestión de las notas y los errores durante el desarrollo del mundo",
	points: ["Se usa durante el desarrollo del mundo.", "Tiene que ver con el desarrollo y las pruebas de este mundo, y no afecta al contenido de la partida.", "El jugador nunca ve el contenido relativo al desarrollo."],
	children: {
		version: {
			title: "Versión",
			summary: "El número de versión de compilación del editor",
			points: ["El número de versión del editor en el momento de crear el mundo nuevo se registra automáticamente.", "No se actualiza aunque cargues y edites un mundo ya existente.", "El desarrollador no puede cambiar este contenido."],
		},
		memo: {
			title: "Nota",
			summary: "El registro de notas para el desarrollador",
			points: ["El desarrollador puede escribir libremente en él a modo de nota.", "No guarda relación con la publicación del juego."],
		},
		errors: {
			title: "Errores",
			summary: "El registro de errores del resultado de la validación",
			points: ["El resultado de validar el mundo se guarda aquí automáticamente.", "Por ejemplo, muestra como errores cosas como que haya un tipo de carácter que no se puede introducir o que se haya introducido un número por encima del límite superior.", "Si no hubo ni un solo error, en su lugar se guarda un mensaje de éxito en una sola línea.", "El desarrollador no puede cambiar este contenido.", "Mientras queden errores no se puede publicar el mundo. Al ejecutar la publicación, primero se realiza la validación y, si hay errores, se interrumpe ahí."],
		},
		timestamp: {
			title: "Marca de tiempo",
			summary: "El registro de la creación, el guardado y la publicación",
			points: ["Las horas de creación, guardado y publicación del mundo se registran automáticamente.", "El desarrollador no puede cambiar este contenido."],
			children: {
				created: {
					title: "Fecha de creación",
					summary: "La hora de la primera creación del mundo",
					points: ["Es la fecha y hora en que se creó el mundo por primera vez."],
				},
				saved: {
					title: "Fecha de guardado",
					summary: "La hora del último guardado realizado",
					points: ["Es la fecha y hora en que se guardó el mundo por última vez."],
				},
				published: {
					title: "Fecha de publicación",
					summary: "La hora de la última publicación realizada",
					points: ["Es la fecha y hora en que se publicó el mundo por última vez."],
				},
			},
		},
		autosaveing: {
			title: "Guardado automático",
			summary: "Activación/desactivación de la función de guardado automático",
			points: ["Indica si el contenido de la edición se guarda automáticamente en el navegador.", "No puedes reescribir este campo directamente. Se cambia con el interruptor de guardado automático del menú del editor."],
		},
	},
	options: {
		label: "development",
	},
};

export const design: Type.Design = {
	title: "Diseño",
	summary: "Los ajustes de aspecto del mundo, como los colores y la fuente",
	points: ["Son los ajustes sobre la presentación del mundo.", "Los dos colores decididos aquí (el color de barra y el color de texto) pasan a ser la base de toda la pantalla, y todos los colores que se usan en ella, como la fila seleccionada, el encabezado de un grupo y los colores de afirmación y negación, se crean a partir de ellos.", "Solo la imagen de fondo se puede sustituir por categoría y, en ese caso, tiene prioridad la configuración del lado de la categoría."],
	children: {
		barColor: {
			title: "Color de barra",
			summary: "El color que sirve de fondo de la barra",
			points: ["Se usa como color de fondo de la barra.", "Como es además el color que sirve de base a toda la pantalla, el color de la fila seleccionada también se crea a partir de él.", "Las muestras de color de los elementos sin color establecido y el fondo de las notificaciones emergentes pasan a ser el color intermedio entre este color y el color de texto."],
		},
		textColor: {
			title: "Color de texto",
			summary: "El color del texto y del fondo",
			points: ["Se usa como color del texto.", "El degradado del fondo también se crea a partir de este color. Si se establece una imagen de fondo, el mismo degradado se aclara y se superpone sobre la imagen.", "Tomar una diferencia grande de luminosidad con el color de barra hace que el texto se lea mejor. En los mundos con poca diferencia, las muestras de color de los elementos sin color establecido también se distinguen peor."],
		},
		shadowColor: {
			title: "Color de sombra",
			summary: "El color de la sombra de la barra",
			points: ["Se usa como color de la sombra que cae sobre las barras y el encabezado.", "Ponerlo en un color más oscuro que el color de barra da una sombra natural."],
		},
		background: {
			title: "Imagen de fondo",
			summary: "La imagen de fondo de todo el juego",
			points: ["Establece la imagen de fondo del juego.", "Si no se establece ninguna imagen, el fondo pasa a ser un degradado basado en el color de texto.", "La imagen se reduce automáticamente para que quepa en 256×256 píxeles. Los GIF y los AVIF se convierten a PNG.", "Si se establece una imagen de fondo en una categoría, en la pantalla de esa categoría tiene prioridad la imagen del lado de la categoría.", "La imagen establecida se puede borrar con el botón Delete Image."],
			links: { category: "category" },
		},
	},
	options: {
		label: "design",
	},
};

export const general: Type.General = {
	title: "General",
	summary: "Ajustes básicos del juego, como el idioma y los ajustes de nivel",
	children: {
		language: {
			title: "Idioma",
			summary: "El idioma en el que creas el mundo",
			points: [
				"Establece en qué idioma escribes el nombre y la descripción del mundo. Es el idioma que sirve de base cuando preparas las traducciones.",
				"También es el idioma que se muestra primero cuando un jugador empieza el juego.",
				"Si translations está desactivado, el jugador no puede cambiar de este idioma a otro.",
				"Es un ajuste distinto del idioma de la interfaz del propio editor de mundos. El idioma de la interfaz del editor se elige al abrir el editor.",
			],
			links: { translation: "translation" },
		},
		translations: {
			title: "Traducción",
			summary: "Si se preparan traducciones para varios idiomas",
			points: [
				"Si está activado, los jugadores pueden cambiar al idioma que prefieran y jugar en él.",
				"Si está desactivado, queda fijado al idioma elegido en language y la propia operación de cambio no está disponible.",
				"Si lo activas, tienes que preparar los datos de traducción de cada idioma. El paquete publicado incluye los datos de traducción.",
				"Lo que cambia son los nombres y las descripciones definidos en el mundo. Las traducciones de las expresiones comunes de la pantalla (los preajustes) se incluyen siempre, al margen de este ajuste.",
			],
			links: { translation: "translation", preset: "preset" },
		},
		offlineMaxHours: {
			title: "Tiempo máximo sin conexión [Horas]",
			summary: "El límite de tiempo del avance sin conexión",
			points: ["Establece cuántas horas como máximo dura el avance mientras estás sin conexión.", "Por ejemplo, si estableces 6 horas, se procesa el regreso desde la desconexión hasta 6 horas, y aunque regreses tras un intervalo mayor, el tiempo sin conexión se trata como 6 horas.", "Si estableces 0 horas, no se procesa nada en absoluto al regresar desde la desconexión.", "El valor máximo es de 24 horas."],
			links: { category: "category" },
		},
		maxCategoryLevels: {
			title: "Nivel máximo de las categorías",
			summary: "El tope de nivel de cada categoría",
			points: [
				"Establece el tope del nivel de cada categoría. El valor predeterminado es `100`.",
				"Aunque se gane experiencia, el nivel se detiene en este valor y lo que sobra se descarta. Lo mismo ocurre si una recompensa suma niveles directamente.",
				"Si el nivel de los datos guardados supera el tope, se recorta hasta el tope al cargarlos.",
				"La barra de nivel y el porcentaje de avance de las estadísticas se muestran tomando este valor como denominador.",
				"Una categoría con numeric desactivado no sube de nivel, así que este valor no le afecta.",
			],
			links: { category: "category" },
		},
		coins: {
			title: "Moneda",
			summary: "Los ajustes de la moneda (coins) que se usa dentro del juego",
			points: [
				"Establece la moneda que se usa dentro del juego. Hace falta al menos una.",
				"Puedes definir varias monedas y configurar cada una como información (ID, nombre, icono, color, etc.).",
				"Las monedas se usan para comprar y vender artículos y para ampliar la capacidad y la cola.",
				"La primera moneda se trata como la moneda principal y se usa cuando no se especifica el ID de moneda (`coinId`) en un artículo, la capacidad o la cola, o cuando se especifica un ID que no está en la lista de monedas.",
				"Una moneda se trata como un tipo de artículo. En los requisitos y las recompensas, refiérete al ID configurado aquí como si fuera un artículo. No pertenece a ninguna categoría y no es objeto de equipamiento ni de compraventa.",
			],
			links: { information: "information", item: "item" },
		},
		capacity: {
			title: "Capacidad",
			summary: "Los ajustes de capacidad del inventario",
			points: [
				"Gestiona el tope de la cantidad de clases de artículos que un jugador puede tener.",
				"Se gestiona por la cantidad de clases de artículos que tienes, no por la cantidad que posees de cada artículo.",
				"Si pones `initialCount` a 0, la capacidad pasa a ser ilimitada y tampoco se puede comprar capacidad.",
				"Cuando te refieras al artículo de la capacidad en los requisitos o las recompensas, usa el ID configurado aquí o `capacity`.",
			],
			children: {
				information: { ...information, title: "Información de la capacidad", summary: "El ID, el nombre, el icono y el color para tratar la capacidad como un artículo" },
				initialCount: {
					title: "Valor inicial de la capacidad [Unidades]",
					summary: "La capacidad inicial del inventario (la cantidad de clases de artículos que se pueden tener)",
					points: ["Es la capacidad inicial al empezar el juego (la cantidad de clases de artículos que se pueden tener). El valor predeterminado es `10`.", "Si lo pones a `0`, la capacidad pasa a ser ilimitada y, al mismo tiempo, deja de poder comprarse capacidad."],
				},
				initialCost: {
					title: "Precio base de la capacidad [Monedas]",
					summary: "El precio inicial para aumentar la capacidad en uno",
					points: ["Es el precio base (en monedas) para aumentar en un espacio la capacidad del inventario. Configúralo como un número entero de `1` o más.", "El precio real se calcula como «precio base × tasa de incremento^cantidad de compras hechas».", "Ejemplo: con un precio base de 100 y una tasa de incremento de 1,2, la 1.ª vez son 100 monedas, la 2.ª 120 monedas y la 3.ª 144 monedas."],
				},
				increasingRate: {
					title: "Tasa de incremento de la capacidad [Multiplicador]",
					summary: "La tasa de incremento del coste de ampliar la capacidad",
					points: ["Es el multiplicador de cuánto aumenta el coste de ampliar la capacidad en la enésima compra. El valor predeterminado es `1.2`.", "Con `1.0` el precio es siempre el mismo; con `1.2` se encarece un 20 % con cada compra.", "Fórmula: precio base × tasa de incremento^cantidad de compras hechas"],
					list: [
						["Tasa de incremento", "Unidad 1", "Unidad 5", "Unidad 10", "Unidad 100", "Unidad 1000"],
						["1.00", "x1.00", "x1.00", "x1.00", "x1.00", "x1.00"],
						["1.05", "x1.00", "x1.22", "x1.55", "x125.24", "x1.5×10²¹"],
						["1.10", "x1.00", "x1.46", "x2.36", "x1.3×10⁴", "x2.2×10⁴¹"],
						["1.20", "x1.00", "x2.07", "x5.16", "x6.9×10⁷", "x1.3×10⁷⁹"],
						["1.50", "x1.00", "x5.06", "x38.44", "x2.7×10¹⁷", "x8.2×10¹⁷⁵"],
					],
				},
				coinId: {
					title: "ID de moneda de la capacidad",
					summary: "El ID de la moneda que se usa para ampliar la capacidad",
					points: ["Especifica el ID de la moneda (coins) que se usa para el precio de ampliación de la capacidad del inventario.", "Si se deja en blanco, o si se especifica un ID que no está en la lista de monedas, se usa la moneda principal (la primera de coins)."],
				},
				buyingLimit: {
					title: "Límite de compras de la capacidad [Veces]",
					summary: "La cantidad máxima de veces que se puede comprar capacidad",
					points: ["Es el tope de la cantidad de veces que se puede comprar capacidad con una moneda.", "Si lo pones a `0`, se puede comprar sin límite.", "Si lo pones a `-1`, deja de poder comprarse.", "El aumento de capacidad por una recompensa queda fuera de este tope."],
				},
			},
			links: { item: "item" },
		},
		queue: {
			title: "Cola",
			summary: "Los ajustes de la cantidad de espacios para ejecutar acciones de forma sucesiva (la cola)",
			points: [
				"Gestiona la cantidad de espacios de la cola para ejecutar acciones de forma sucesiva.",
				"La cola incluye la acción en ejecución, y se ejecuta la acción que está a la cabeza. Cuando los espacios son `1`, solo está la que se ejecuta y no se puede tener nada en espera.",
				"Igual que con la capacidad, la cantidad de espacios se puede comprar con una moneda, y también se puede aumentar indicando el artículo de la cola como recompensa de una acción o un evento.",
				"Cuando te refieras al artículo de la cola en los requisitos o las recompensas, usa el ID configurado aquí o `queue`.",
			],
			children: {
				information: { ...information, title: "Información de la cola", summary: "El ID, el nombre, el icono y el color para tratar la cola como un artículo" },
				initialCount: {
					title: "Valor inicial de la cola [Espacios]",
					summary: "La cantidad de espacios de ejecución sucesiva al empezar el juego",
					points: ["Es la cantidad de espacios de la cola al empezar el juego. El valor predeterminado es `1`.", "El valor mínimo es `1` (porque la que se ejecuta ocupa un espacio; no existe el tratamiento de `0` = ilimitado que tiene la capacidad)."],
				},
				initialCost: {
					title: "Precio base de la cola [Monedas]",
					summary: "El precio inicial para aumentar los espacios en uno",
					points: ["Es el precio base (en monedas) para aumentar en uno los espacios de ejecución sucesiva. Configúralo como un número entero de `1` o más.", "El precio real se calcula como «precio base × tasa de incremento^cantidad de compras hechas».", "Ejemplo: con un precio base de 100 y una tasa de incremento de 1,2, la 1.ª vez son 100 monedas, la 2.ª 120 monedas y la 3.ª 144 monedas."],
				},
				increasingRate: {
					title: "Tasa de incremento de la cola [Multiplicador]",
					summary: "La tasa de incremento del coste de ampliar los espacios",
					points: ["Es el multiplicador de cuánto aumenta el coste de ampliar los espacios en la enésima compra. El valor predeterminado es `1.2`.", "Con `1.0` el precio es siempre el mismo; con `1.2` se encarece un 20 % con cada compra.", "Fórmula: precio base × tasa de incremento^cantidad de compras hechas", "La forma de aumentar es la misma que la de la tasa de incremento de la capacidad. Para orientarte sobre el multiplicador, consulta la tabla de la capacidad."],
				},
				coinId: {
					title: "ID de moneda de la cola",
					summary: "El ID de la moneda que se usa para ampliar los espacios",
					points: ["Especifica el ID de la moneda (coins) que se usa para el precio de ampliación de los espacios de ejecución sucesiva.", "Si se deja en blanco, o si se especifica un ID que no está en la lista de monedas, se usa la moneda principal (la primera de coins)."],
				},
				buyingLimit: {
					title: "Límite de compras de la cola [Veces]",
					summary: "La cantidad máxima de veces que se pueden comprar espacios",
					points: ["Es el tope de la cantidad de veces que se pueden comprar con una moneda los espacios de ejecución sucesiva.", "Si lo pones a `0`, se puede comprar sin límite.", "Si lo pones a `-1`, deja de poder comprarse.", "El aumento de espacios por una recompensa queda fuera de este tope."],
				},
			},
			links: { item: "item" },
		},
		levelCommonRatio: {
			title: "Tasa de crecimiento de la experiencia [Multiplicador]",
			summary: "La tasa de incremento de la dificultad de subir de nivel",
			points: [
				"Es la tasa de crecimiento de la experiencia necesaria para alcanzar el siguiente nivel a medida que sube el nivel de una categoría. El valor predeterminado es `1.05` y no se puede establecer un valor menor que `1`.",
				"Aumentar este valor eleva la dificultad. Si lo pones a `1`, la experiencia necesaria es la misma en cualquier nivel.",
				"La experiencia necesaria para alcanzar el siguiente nivel es (tasa de crecimiento de la experiencia)^(nivel actual-1). Los niveles se cuentan descartando los decimales.",
				"La experiencia obtenida después de alcanzar el tope (el nivel máximo de las categorías) se descarta.",
			],
			list: [
				["Tasa de crecimiento de la experiencia", "Lv.1", "Lv.2", "Lv.10", "Lv.50", "Lv.99"],
				["1.00", "x1.00", "x1.00", "x1.00", "x1.00", "x1.00"],
				["1.02", "x1.00", "x1.02", "x1.20", "x2.64", "x6.96"],
				["1.05", "x1.00", "x1.05", "x1.55", "x10.92", "x119.28"],
				["1.10", "x1.00", "x1.10", "x2.36", "x106.72", "x1.1×10⁴"],
				["1.20", "x1.00", "x1.20", "x5.16", "x7583.70", "x5.8×10⁷"],
			],
			links: { category: "category" },
		},
		actionLevelLimit: {
			title: "Límite de nivel de las acciones",
			summary: "Exigir el nivel de la categoría del atributo para ejecutar una acción",
			points: [
				"Si está activado, al principio de los requisitos (requirements) de cada acción se añade automáticamente el requisito «que el nivel de la categoría del atributo sea igual o superior al nivel de esa acción».",
				"Si no hay ningún atributo (attribute) configurado, se usa la categoría a la que pertenece.",
				"Si numeric está desactivado en la categoría del atributo, esta no sube de nivel, así que no se añade nada.",
				"El requisito añadido se escribe al cargar el mundo, así que en la pantalla del reproductor se muestra igual que un requisito normal.",
			],
			links: { action: "action", category: "category", requirement: "requirement" },
		},
		propertyRatio: {
			title: "Ratio de propiedades [Multiplicador]",
			summary: "Por cuánto se multiplican las propiedades por cada 10 de diferencia de nivel",
			points: [
				"Establece por cuánto se multiplican las propiedades por cada `10` que se amplía la diferencia entre el nivel de la categoría y el nivel de la acción. El valor predeterminado es `1.5` y no se puede establecer un valor menor que `1`.",
				"El multiplicador se calcula como (ratio de propiedades)^(diferencia de nivel÷10). Cuando la diferencia de nivel es `0`, es `1` vez y se usa tal cual el valor configurado en la acción.",
				"El ataque y la experiencia aumentan según este multiplicador, y la defensa (el daño recibido) y la velocidad (el tiempo requerido) disminuyen según el mismo multiplicador.",
				"La precisión, la evasión, la tasa de éxito y la recuperación son valores que se mantienen entre el `0` y el `100` %, así que el multiplicador se aplica a la proporción entre la parte que se cumple y la que no. El `0` % y el `100` % no cambian, y ningún valor intermedio supera el `100` %.",
				"En la defensa, la evasión y la velocidad el multiplicador actúa a la mitad (una diferencia de nivel de `20` equivale a una diferencia de `10` en las demás propiedades). La defensa y la evasión se aplican por partida doble, a la probabilidad de recibir impactos y al daño recibido, y la velocidad se aplica a todas las demás propiedades como cantidad de ejecuciones, así que su efecto se debilita para mantener el equilibrio.",
				"Una referencia es (la tasa de crecimiento de la experiencia) elevada a `6.7`. Por encima de eso, subir de nivel se acelera cuanto más alto es el nivel; por debajo, subir de nivel en la parte final lleva más tiempo.",
				"Si lo pones a `1`, desaparece la influencia de la diferencia de nivel. Aumentar el valor hace más bruscas las ventajas y desventajas debidas a la diferencia de nivel.",
			],
			list: [
				["Ratio de propiedades", "Diferencia de nivel -20", "Diferencia de nivel -10", "Diferencia de nivel 0", "Diferencia de nivel +10", "Diferencia de nivel +20"],
				["`1`", "`x1.00`", "`x1.00`", "`x1.00`", "`x1.00`", "`x1.00`"],
				["`1.5`", "`x0.44`", "`x0.67`", "`x1.00`", "`x1.50`", "`x2.25`"],
				["`2`", "`x0.25`", "`x0.50`", "`x1.00`", "`x2.00`", "`x4.00`"],
				["`3`", "`x0.11`", "`x0.33`", "`x1.00`", "`x3.00`", "`x9.00`"],
			],
			links: { action: "action", property: "property" },
		},
		defaultCombat: { ...combat, summary: "Los parámetros de combate predeterminados comunes a todas las acciones", points: ["Son las correcciones de combate básicas del lado del jugador, aplicadas en común a todas las acciones del tipo `stamina`.", "Los valores de combate (property) de cada acción son los del lado del oponente, así que actúan en el sentido de cancelar los valores configurados aquí."], links: { action: "action" } },
	},
	options: {
		label: "general",
	},
};

export const overview: Type.Overview = {
	title: "Resumen",
	summary: "La información básica del mundo y la información del autor",
	points: ["Son los campos que explican el contenido del mundo.", "Establécelos de forma que resulten claros cuando un usuario elige el mundo.", "Salvo la URL, estos ajustes no afectan al avance del juego."],
	children: {
		information: information,
		version: {
			title: "Versión",
			summary: "El número de versión del mundo",
			points: ["Introduce un número de `0` o superior (entero o decimal). El valor predeterminado es `0`.", "Por lo general, la parte entera representa la versión mayor y la parte decimal, la versión menor.", "La versión del desarrollo (development) es la versión del editor, así que es otra cosa."],
		},
		author: {
			title: "Nombre del autor",
			summary: "El nombre del autor del mundo",
			points: ["Introduce un alias o un apodo.", "Debe tener entre 3 y 20 caracteres y solo se pueden usar letras y cifras de ancho medio, espacios y `!` `?` `.` `,` `-`."],
		},
		homepage: {
			title: "Página web",
			summary: "La URL del sitio web del autor",
			points: ["Si tienes página web propia o redes sociales, introduce su URL.", "El jugador puede consultar esta URL mediante el enlace.", "Si no hay ninguna, déjalo en blanco. El valor inicial es `https://`."],
		},
		url: {
			title: "URL",
			summary: "La URL del juego",
			points: ["Introduce la URL donde se coloca el juego de este mundo.", "Introduce la URL de una página principal, como index.html, incluyendo el dominio.", "Es un campo para dejar registrado dónde se ha colocado el mundo. Si el lugar donde ponerlo no está decidido, déjalo en blanco.", "Un mundo publicado funciona como PWA. Una PWA es una función que permite instalarlo y que funcione como una aplicación con la que también se puede jugar sin conexión.", "Los ajustes de la PWA se crean con rutas relativas, así que funciona tal cual en el lugar donde se coloque, independientemente del valor de este campo."],
		},
		estimatedPlayingTime: {
			title: "Tiempo de juego estimado",
			summary: "El tiempo orientativo hasta completar la partida del mundo",
			points: ["Es el tiempo de juego estimado que hace falta para completar la partida del mundo.", "Se puede consultar como orientación cuando el jugador juega.", "No es más que un tiempo de referencia, y no hay una definición clara de qué se considera completar el mundo."],
			children: {
				value: {
					title: "Valor",
					summary: "El número del tiempo de juego",
					points: ["Se establece con un entero de `1` o superior. El valor predeterminado es `1`."],
				},
				unit: {
					title: "Unidad",
					summary: "La unidad de tiempo (horas, minutos y demás)",
					points: ["Se elige entre segundos, minutos, horas, días, años, siglos e infinito. El valor predeterminado es días.", "Infinito se usa para los mundos que no tienen fin."],
				},
			},
		},
	},
	options: {
		label: "overview",
	},
};

// 固定イベントは5つのタイミングが同じ項目を並べるため、そのままでは1ページ内で見出しが重複し、
// 目次とエディターからのリンク（label無しノードは?id=<title>のアンカーになる）がどれを指すか分からなくなる。
// 直下の項目の見出しにタイミング名を添えて区別できるようにする
const toTimingChildren = (children: { [key: string]: Markdown }, timing: string): Type.Event["children"] => {
	const entries = Object.entries(children).map(([key, child]) => [key, { ...child, title: `${child.title}（${timing}）` }]);
	return Object.fromEntries(entries) as Type.Event["children"];
};

// タイミングごとの固定イベント。項目の説明はタスクと共通で、タイミング固有の説明だけ差し替える
const toUniqueEvent = (title: string, summary: string, points: string[], timingPoints: string[]): Type.Event => ({
	title,
	summary,
	points,
	children: toTimingChildren({
		// Markdown.childrenは「子ノードの辞書」と「単一ノード」の両方を許す型のため、辞書として扱うことを明示する
		...(task.children as { [key: string]: Markdown }),
		category: {
			title: "Categoría",
			summary: "No se usa en un evento",
			points: ["No se muestran en las misiones ni en la lista de tareas, por lo que no se especifica la categoría a la que pertenecen.", "El campo de entrada no se muestra en el editor."],
		},
		timing: {
			title: "Momento",
			summary: "El momento en que se dispara el evento (fijo)",
			points: timingPoints,
		},
		unlocked: {
			title: "Estado de visualización inicial",
			summary: "El estado de visualización inicial del icono del evento (el disparo lo decide el momento y este ajuste no lo dispara)",
			points: ["Las condiciones de disparo de un evento las decide el momento, y este campo solo afecta al aspecto del icono.", "secreted: El icono no se muestra hasta que se cumplen todos los requirements (el disparo en sí ocurre en su momento).", "hidden y hinted: El icono se muestra con una raya encima, como no desbloqueado todavía.", "released: La raya desaparece y se muestra como ya desbloqueado."],
		},
		requirements: { ...requirement, options: { ...requirement.options, array: true }, summary: "Las condiciones para obtener la recompensa" },
		acquisitions: { ...acquisition, options: { ...acquisition.options, array: true }, summary: "La recompensa que se recibe automáticamente cuando se dispara el evento" },
		group: {
			title: "Grupo de tareas",
			summary: "No se usa en un evento",
			points: ["No se muestran en las misiones ni en la lista de tareas, por lo que no se especifica el grupo.", "El campo de entrada no se muestra en el editor."],
		},
	}, title),
});

export const unique: Type.Unique = {
	title: "Evento fijo",
	summary: "Los mensajes y las recompensas que se activan en momentos determinados",
	points: ["Se activa en momentos determinados, como al abrir el mundo por primera vez o al llegar al fin del juego, y abre una pantalla propia.", "Hay uno preparado para cada momento y no se pueden añadir ni eliminar. Los momentos que no uses se dejan en blanco.", "No se muestran en las misiones ni en la lista de tareas. Lo que se logra al cumplir unos requisitos se configura con una tarea.", "Cuando el momento se cumple, el evento se activa y abre una pantalla propia para mostrar su contenido.", "La recompensa se obtiene automáticamente en el mismo momento de la activación. No hay operación de recogida ni cinta como en una tarea, y tampoco se comprueba el tope de clases de artículos que se pueden tener.", "Si se configuran requisitos (requirements), la recompensa solo se obtiene cuando esos requisitos se cumplían en el momento de la activación. Si no se configuran, se obtiene en cada activación.", "Los requisitos solo se miran para ver si se cumplen, así que los artículos no disminuyen aunque se configure una probabilidad de consumo (chance).", "Al activarse puedes cambiar el nivel de una categoría, la cantidad de ejecuciones de una acción y la cantidad de artículos que se tienen. Si pones una cantidad negativa, también puedes usarlo para hacer que se pierdan las pertenencias al fin del juego, por ejemplo.", "Si dejas en blanco el nombre, la descripción y el icono, se usan el texto y el icono predeterminados que lleva integrados el reproductor."],
	list: [
		["Momento", "Requisito de activación", "Repetición"],
		["`comebacked`", "Cuando regresas tras 1 segundo o más sin conexión y al menos una acción se completó mientras estabas ausente", "Muchas veces"],
		["`gameovered`", "Cuando la resistencia del jugador se agota en combate", "Muchas veces"],
		["`welcomed`", "Cuando este mundo se inicia por primera vez", "Solo una vez"],
		["`completed`", "Cuando el nivel de todas las categorías alcanza el valor máximo (maxCategoryLevels)", "Solo una vez"],
		["`obtained`", "Cuando se completa y se comprueba una acción de la clase single (un cofre del tesoro, por ejemplo)", "Muchas veces"],
	],
	links: { task: "task" },
	children: {
		comebacked: toUniqueEvent("Al regresar", "Se activa al regresar tras estar sin conexión", ["Se activa cuando regresas tras 1 segundo o más sin conexión y al menos una acción se completó mientras estabas ausente. Si no ha terminado ni una sola ejecución, no se activa.", "Se muestra junto con el resumen del avance del tiempo que estuviste ausente."], ["Está fijado como `comebacked` y no se puede editar.", "Se activa cuantas veces haga falta, cada vez que regresas."]),
		gameovered: toUniqueEvent("Al fin del juego", "Se activa cuando la resistencia se agota en combate", ["Se activa cuando la resistencia del jugador se agota en combate.", "Al mismo tiempo, todas las acciones en ejecución se detienen y todas las reservas en espera se descartan.", "Si pones una cantidad negativa en la recompensa, puedes darle un precio al fin del juego."], ["Está fijado como `gameovered` y no se puede editar.", "Se activa cuantas veces haga falta, cada vez que llegas al fin del juego."]),
		welcomed: toUniqueEvent("Al primer inicio", "Se activa al abrir el mundo por primera vez", ["Se activa cuando este mundo se inicia por primera vez.", "Se usa para explicar la ambientación del mundo y para entregar los preparativos que se dan al empezar."], ["Está fijado como `welcomed` y no se puede editar.", "Se activa una sola vez, en el primer inicio."]),
		completed: toUniqueEvent("Al completar el juego", "Se activa cuando todas las categorías alcanzan el nivel máximo", ["Se activa cuando el nivel de todas las categorías alcanza el valor máximo (maxCategoryLevels).", "Las categorías que no son numeric quedan fuera de la comprobación. Por eso no se activa en un mundo que no tiene ni una sola categoría numérica."], ["Está fijado como `completed` y no se puede editar.", "Se activa una sola vez, cuando se cumplen los requisitos."]),
		obtained: toUniqueEvent("Al completar una acción suelta", "Se activa al completar una acción suelta, como un cofre del tesoro", ["Se activa cuando se completa y se comprueba una acción de la clase single (un cofre del tesoro, por ejemplo).", "Aparte de la recompensa de la propia acción, puedes sumar la recompensa configurada aquí."], ["Está fijado como `obtained` y no se puede editar.", "Se activa cuantas veces haga falta, cada vez que se completa una acción suelta."]),
	},
	options: {
		label: "unique",
	},
};

// タスク・変化イベント・固定イベントをまとめたイベント全体
export const events: Type.Events = {
	title: "Evento",
	summary: "El conjunto de eventos del mundo, que reúne las tareas, los eventos de cambio y los eventos fijos",
	points: ["Los eventos de un mundo se componen de tres clases: tareas (tasks), eventos de cambio (changed) y eventos fijos (unique).", "Una tarea es una misión que se logra al cumplir unos requisitos.", "Un evento de cambio es un evento de procesamiento interno, que no se muestra en pantalla y se activa repetidamente a partir del aumento de una cantidad.", "Un evento fijo es un hueco preparado uno por cada momento, que no se puede añadir ni eliminar."],
	list: expandList("Clase", [task, changed, unique], "Descripción"),
	children: {
		tasks: { ...task, options: { ...task.options, array: true } },
		changed: { ...changed, options: { ...changed.options, array: true } },
		unique: unique,
	},
	options: {
		label: "events",
		linkedList: true,
	},
};

export const basic: Type.Basic = {
	title: "Ajustes básicos",
	summary: "Los campos de ajuste básicos del mundo en general",
	points: ["Configura el nombre, la descripción, el fondo, la moneda, la capacidad, el nivel máximo de las categorías, la tasa de crecimiento de la experiencia, los parámetros de combate estándar y demás del mundo.", "Estos ajustes afectan a todo el mundo."],
	list: expandList("Nombre", [overview, general, design, development], "Descripción"),
	children: {
		overview: overview,
		general: general,
		design: design,
		development: development,
	},
	options: {
		label: "basic",
		linkedList: true,
	},
};

// world


export const world: Type.World = {
	title: "Mundo",
	summary: "Los ajustes y la estructura de datos de todo el mundo del juego",
	points: ["Son los datos de definición del juego, que se cargan en el reproductor para jugar.", "Con los ajustes puedes crear el juego idle que tengas en mente.", "Un mundo contiene los ajustes básicos, los seis tipos de categoría, acción, artículo, habilidad, grupo y preajuste, y además los eventos."],
	children: {
		basic: basic,
		categories: { ...category, options: { ...category.options, array: true } },
		actions: { ...action, options: { ...action.options, array: true } },
		items: { ...item, options: { ...item.options, array: true } },
		skills: { ...skill, options: { ...skill.options, array: true } },
		groups: { ...group, options: { ...group.options, array: true } },
		events: events,
		presets: { ...preset, options: { ...preset.options, array: true } },
	},
	options: {
		label: "world",
	},
};

// editor

export const editor: Markdown = {
	title: "Editor",
	summary: "La explicación sobre cómo usar el editor y sobre la estructura de un mundo",
	list: expandList("Nombre", [world, basic, type, events, component, miscellaneous], "Descripción"),
	options: {
		label: "editor",
		linkedList: true,
		directory: "editor",
	},
};

// list

// prettier-ignore
export const tree: Tree = {
	title: editor,
	twig: [
		{ title: world },
		{ title: basic, twig: [overview, general, design, development] },
		{ title: type, twig: [category, action, item, skill, group, preset] },
		{ title: events, twig: [task, changed, unique] },
		{ title: component, twig: [information, requirement, acquisition, combat, property] },
		{ title: miscellaneous, twig: [translation] }
	],
};
