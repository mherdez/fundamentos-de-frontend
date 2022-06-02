# Javascript

JavaScript es un lenguaje de programación o de secuencias de comandos que te permite implementar funciones complejas en páginas web.

<div style="text-align: center;">
<img src = "https://64.media.tumblr.com/e211eb18c18f92b474895b6bcb5ef44a/4e735dd086807a66-39/s500x750/b9ec4fd7fabc0212c56f0bc265921fb334718229.png" />
</div>

- **HTML** es el lenguaje de marcado que usamos para estructurar y dar significado a nuestro contenido web, por ejemplo, definiendo párrafos, encabezados y tablas de datos, o insertando imágenes y videos en la página.
- **CSS** es un lenguaje de reglas de estilo que usamos para aplicar estilo a nuestro contenido HTML, por ejemplo, establecer colores de fondo y tipos de letra, y distribuir nuestro contenido en múltiples columnas.
- **JavaScript** es un lenguaje de secuencias de comandos que te permite crear contenido de actualización dinámica, controlar multimedia, animar imágenes y prácticamente todo lo demás. (Está bien, no todo, pero es sorprendente lo que puedes lograr con unas pocas líneas de código JavaScript).

## Agregando Javascript

JavaScript se aplica a las páginas HTML de manera similar a CSS. Solo que en lugar de usar `<link>` y `<style>` se utiliza el elemento `<script>`.

### JavaScript interno

Se agrega en el `head`, justo antes de tu etiqueta de cierre `</head>`.

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script>
      alert('1, 2, 3... probando.');
    </script>
  </head>

  <body>
    <h1>Fundamentos de JavaScript</h1>
  </body>
</html>
```

### JavaScript externo

En un archivo externo con la extensión `.js`, ya que así es como se reconoce como JavaScript.

```html
<script src="script.js" defer></script>
```

::: tip Estrategia para cargar de script

En los ejemplos internos y externos, JavaScript se carga y se ejecuta en el encabezado del documento, antes de analizar el cuerpo HTML. Esto podría causar un error, por lo que se ha utilizado algunas construcciones para solucionarlo.

Se usa una función de JavaScript más moderno para resolver el problema, el atributo `defer`, que le dice al navegador que continúe descargando el contenido HTML una vez que se ha alcanzado la etiqueta del elemento
`<script>`.

En este caso, tanto el script como el HTML se cargarán simultáneamente y el código funcionará.

:::

:::warning Como se hacía antes
Una solución pasada de moda a este problema solía ser colocar tu elemento script justo en la parte inferior del cuerpo (por ejemplo, justo antes de la etiqueta `</body>`), para que se cargara después de haber procesado todo el HTML. El problema con esta solución es que la carga/procesamiento del script está completamente bloqueado hasta que se haya cargado el DOM HTML. En sitios muy grandes con mucho JavaScript, esto puede causar un importante problema de rendimiento y ralentizar tu sitio.
:::

### JavaScript en línea

:::danger Mala práctica

En ocasiones se puede encontrar fragmentos de código JavaScript real dentro de HTML.

Sin embargo, se considera mala práctica y se debe evitar su uso de esta manera.
:::

```html
<button onclick="createParagraph()">Click me!</button>

<script>
  function createParagraph() {
    let para = document.createElement('p');
    para.textContent = 'You clicked the button!';
    document.body.appendChild(para);
  }
</script>
```

## Comentarios

Los comentarios son muy útiles y deberías utilizarlos con frecuencia, especialmente para aplicaciones grandes. Hay dos tipos:

- Un comentario de una sola línea se escribe después de una doble barra inclinada (//)

```js
// soy un comentario
```

- Se escribe un comentario de varias líneas entre las cadenas /_ y _/

```js
/*
  Yo también soy
  un comentario
*/
```

## Manejo de la consola

A través del inspector de elementos, se encuentra la pestaña de consola. La consola es una herramienta que nos ayuda a depurar el desarrollo y ejecución.

La consola web aparece en la parte inferior de la ventana del navegador. En la parte inferior de la consola hay una línea de entrada que puedes usar para ingresar JavaScript.

```js
console.log('Hola mundo 👋');
```

## Conceptos básicos

JavaScript distingue entre mayúsculas y minúsculas (es case-sensitive) y utiliza el conjunto de caracteres Unicode.

En JavaScript, las instrucciones se denominan declaraciones y están separadas por punto y coma (;). No es necesario un punto y coma después de una declaración si está escrita en su propia línea. Pero si se deseas más de una declaración en una línea, entonces debes separarlas con punto y coma.

:::tip Buenas prácticas
Escribir siempre un punto y coma después de una declaración, incluso cuando no sea estrictamente necesario, reduce las posibilidades de que se introduzcan errores en el código.
:::

## Variables

En programación una variable es un espacio de memoria el cual nos servirá para almacenar un tipo de dato con un valor correspondiente.

- **[var](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/var)**: Declara una variable, opcionalmente la inicia a un valor. _(se recomienda no usar)_
- **[let](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/let)**: Declara una variable local con ámbito de bloque, opcionalmente la inicia a un valor.
- **[const](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/const)**: Declara un nombre de constante de solo lectura y ámbito de bloque.

Los nombres de las variables, llamados **identificadores**, se ajustan a ciertas reglas.

1. Debe comenzar con una letra, un guión bajo (\_) o un signo de dólar ($). Los siguientes caracteres también pueden ser dígitos (0-9).
2. Se distingue entre mayúsculas y minúsculas, las letras incluyen los caracteres "A" a "Z" (mayúsculas), así como "a" a "z" (minúsculas).
3. Se puede utilizar la mayoría de las letras ISO 8859-1 o Unicode como å y ü en los identificadores, es decir, permite acentos y caracteres especiales para declarar una variable. Sin embargo, por convención se emplea el idioma inglés como estándar.

### Ámbito de las variables

Cuando declaras una variable fuera de cualquier función, se denomina variable global, porque está disponible para cualquier otro código en el documento actual. Cuando declaras una variable dentro de una función, se llama variable local, porque solo está disponible dentro de esa función.

### Palabras reservadas

[Lista de palabras reservadas](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Lexical_grammar#palabras_clave)

## Tipo de datos

El último estándar ECMAScript define [nueve tipos](https://developer.mozilla.org/es/docs/Web/JavaScript/Data_structures#estructuras_y_tipos_de_datos)

Empezaremos con los [primitivos](https://developer.mozilla.org/es/docs/Glossary/Primitive):

- **`String`**: se utiliza para representar datos textuales, es decir, cadena de caracteres.
- **`Number`**: valores numéricos (enteros, decimales, etc).
- **`Boolean`**: representa una entidad lógica y puede tener dos valores: `true` y `false`.
- **`Undefined`**: Una variable declarada que aún no se le asigna valor.
- **`Null`**: sin valor en lo absoluto.

## Operadores

- [de asignación](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators#asignacion)
- [de comparación](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators#comparacion)
- [aritméticos](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators#aritmeticos)
- [lógicos](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators#logico)
- [de cadena](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators#cadena)
- [condicional (ternario)](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators#condicional)
- [relacionales](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators#relational)

## Estructura de control

### Declaración de bloque

La declaración de bloque se utiliza para agrupar instrucciones. El bloque está delimitado por un par de llaves.

```js
{
  statement_1;
  statement_2;
  ⋮
  statement_n;
}
```

Las declaraciones de bloque se utilizan comúnmente con declaraciones de control de flujo (if, for, while).

### Expresiones condicionales

Una expresión condicional es un conjunto de instrucciones que se ejecutarán si una condición especificada es verdadera. JavaScript admite dos expresiones condicionales: if...else y switch.

### Expresión if...else

Utiliza la expresión **`if`** para ejecutar una instrucción si una condición lógica es **`true`**. Utiliza la cláusula opcional **`else`** para ejecutar una instrucción si la condición es **`false`**.

```js
if (condition) {
  statement_1;
} else {
  statement_2;
}
```

También puedes componer las declaraciones usando **`else if`** para que se prueben varias condiciones en secuencia:

```js
if (condition_1) {
  statement_1;
} else if (condition_2) {
  statement_2;
} else if (condition_n) {
  statement_n;
} else {
  statement_last;
}
```

En el caso de múltiples condiciones, solo se ejecutará la primera condición lógica que se evalúe como **`true`**. Para ejecutar múltiples declaraciones, se agrupan dentro de una declaración de bloque ({ … }).

### Valores falsos

Los siguientes valores se evalúan como `false` (también conocidos como valores Falsy:

- false
- undefined
- null
- 0
- NaN
- la cadena vacía ("")

Todos los demás valores, incluidos todos los objetos, se evalúan como true cuando se pasan a una declaración condicional.

### Declaración switch

Una instrucción **`switch`** permite que un programa evalúe una expresión e intente hacer coincidir el valor de la expresión con una etiqueta case. Si la encuentra, el programa ejecuta la declaración asociada.

```js
switch (expression) {
  case label_1:
    statements_1
    [break;]
  case label_2:
    statements_2
    [break;]
    …
  default:
    statements_def
    [break;]
}
```

## Bucles e iteración

Los bucles ofrecen una forma rápida y sencilla de hacer algo repetidamente.

### Declaración for

Un ciclo `for` se repite hasta que una condición especificada se evalúe como `false`.

```js
for ([expresiónInicial]; [expresiónCondicional]; [expresiónDeActualización]) {
  instrucción;
}
```

### Declaración do...while

La instrucción `do...while` se repite hasta que una condición especificada se evalúe como falsa.

```js
do {
  expresión;
} while (condición);
```

### Declaración while

Una declaración `while` ejecuta sus instrucciones siempre que una condición especificada se evalúe como `true`.

```js
while (condición) {
  expresión;
}
```

## Funciones

Las funciones son uno de los bloques de construcción fundamentales en JavaScript. Una función en JavaScript es similar a un procedimiento — un conjunto de instrucciones que realiza una tarea o calcula un valor, pero para que un procedimiento califique como función, debe tomar alguna entrada y devolver una salida donde hay alguna relación obvia entre la entrada y la salida. Para usar una función, debes definirla en algún lugar del ámbito desde el que deseas llamarla.

### Declaración de función

Una definición de función (también denominada declaración de función o expresión de función) consta de la palabra clave **`function`**, seguida de:

- El nombre de la función.
- Una lista de parámetros de la función, entre paréntesis y separados por comas.
- Las declaraciones de JavaScript que definen la función, encerradas entre llaves, { ... }.

```js
function cuadrado(numero) {
  return numero * numero;
}
```

### Llamar funciones

Definir una función no la ejecuta. Definirla simplemente nombra la función y especifica qué hacer cuando se llama a la función.

Llamar a la función en realidad lleva a cabo las acciones especificadas con los parámetros indicados. Por ejemplo, si defines la función cuadrado, podrías llamarla de la siguiente manera:

```js
cuadrado(5);
```

### Tipo de funciones

Funciones simple:

```js
function saludar() {
  console.log('Hola Mundo');
}

saludar();
```

Funciones con argumentos/parámetros:

```js
function saludar(nombre) {
  console.log('Saludos ' + nombre);
}

saludar('Juan');
```

Funciones con valor de retorno:

```js
function saludar(nombre) {
  return 'Saludos ' + nombre;
}

console.log(saludar('Juan'));
```

:::tip Nota
Una característica fundamental de las funciones es que se pueden reutilizar.
:::

## Objeto

[dev.to](https://dev.to/duxtech/es6-objetos-literales-en-javascript-58np)

JavaScript está diseñado en un paradigma simple basado en objetos. Un objeto es una colección de propiedades, y una propiedad es una asociación entre un nombre (o clave) y un valor. El valor de una propiedad puede ser una función, en cuyo caso la propiedad es conocida como un método. Además de los objetos que están predefinidos en el navegador, puedes definir tus propios objetos.

Sintácticamente un objeto en JavaScript es un conjunto agrupado entre llaves de claves y valores:

```js
let nombreDelObjeto = {
  clave_1: valor_1,
  clave_2: valor_2,
  clave_3: valor_3,
  clave_n: valor_n,
};
```

```js
let myCar = {
  make: 'Ford',
  model: 'Mustang',
  year: 1969,
};
```

### Objeto literal

Se denomina objeto literal al objeto cuyas propiedades están declaradas textualmente en el código.

```js
let perro = {
  nombre: 'Hércules', //string
  color: 'Negro', //string
  edad: 2, //number
  macho: true, //bolean
};
```

### Acceder a valores de un objeto

Existen 2 maneras simples para poder acceder a los valores de un objeto:

### Notación de punto

Consiste en escribir el nombre del objeto seguido de un punto y el nombre de la propiedad a la cual se quiere acceder: objeto.clave

```js
let perro = {
  nombre: 'Hércules', //string
  color: 'Negro', //string
  edad: 2, //number
  macho: true, //bolean
};
console.info(perro.nombre); // Hércules
console.info(perro.edad); // 2
```

### Notación de corchetes / llaves cuadradas o brackets

Consiste en escribir el nombre del objeto anteponiendo entre corchetes la clave a la que se quiere acceder: objeto[clave]

```js
let perro = {
  nombre: 'Hércules', //string
  color: 'Negro', //string
  edad: 2, //number
  macho: true, //bolean
};

console.info(perro['nombre']); // Hércules
console.info(perro['edad']); // 2
```

:::tip Nota
Ambas maneras retornan los mismos resultados, por lo tanto se pueden considerar homónimas, pero en la práctica se acostumbra a usar más la notación de punto.
:::

### Métodos en un objeto

Un objeto no solo se limita a la agrupación de claves valores, es posible también incorporar métodos de la siguiente manera:

```js
let perro = {
  nombre: 'Hércules',
  color: 'Negro',
  edad: 2,
  macho: true,
  ladrar: function () {
    return `${this.nombre} puede ladrar`;
  },
};

console.log(perro.ladrar()); // Hércules puede ladrar
```

:::tip Nota
Por motivos de scope de variables, para acceder los campos de un objeto dentro de un método, se debe usar la palabra reservada `this`.
:::

### Crear de campos

```js
perro.peso = 20;
```

### Consultar campos

```js
console.log(perro);
```

### Actualizar campos

```js
perro.edad = 3;
```

### Eliminar campos

```js
delete perro.peso;
```

### Objetos anidados

```js
let perro = {
  nombre: 'Hércules',
  color: 'Negro',
  edad: 2,
  macho: true,
  alimentos: {
    desayuno: 'carne',
    comida: ['croquetas', 'vitaminas', 'proteinas'],
    cena: {
      entrada: 'granos',
      fuerte: 'proteina',
      final: 'líquidos',
    },
  },
  ladrar: function () {
    return `${this.nombre} puede ladrar`;
  },
};
```

## Arreglos

Los arreglos o `arrays` son objetos similares a una lista cuyo prototipo proporciona métodos para efectuar operaciones de recorrido y de mutación. Tanto la longitud como el tipo de los elementos de un array son variables.

```js
let heroes = ['Batman', 'Superman', 'Flash'];
let numeros = [2, 4, 6, 8, 10];
```

### [Operaciones habituales](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array#operaciones_habituales)

- Crear un array
- Acceder a un elemento mediante su índice
- Recorrer un array
- Añadir o eliminar un elemento al final
- Añadir o eliminar un elemento al principio
- Encontrar elementos
- Copiar un array

### Propiedad array.prototype.length

La propiedad `length` de un objeto que es una instancia de tipo Array establece o devuelve la cantidad de elementos en esa matriz.

### Métodos iterables

### Declaración for

```js
const array = ['a', 'b', 'c', 'd', 'e'];

for (let i = 0; i < array.length; i++) {
  instrucción;
}
```

### Declaración for...in

La instrucción `for...in` itera una variable especificada sobre todas las propiedades enumerables de un objeto. Para cada propiedad distinta, JavaScript ejecuta las instrucciones especificadas.

```js
for (variable in objeto) {
  instrucción;
}
```

### Declaración for...of

La declaración `for...of` crea un bucle que se repite sobre objetos iterables (incluidos `Array`, `Map`, `Set`, objetos `arguments` y así sucesivamente), invocando un bucle de iteración personalizado con declaraciones que se ejecutarán para el valor de cada distinta propiedad.

```js
for (variable of objeto) {
  expresión;
}
```

### Método array.prototype.forEach()

`forEach()` ejecuta la función callback una vez por cada elemento presente en el `array` en orden ascendente. No es invocada para índices que han sido eliminados o que no hayan sido inicializados

```js
array.forEach(function callback(currentValue, index, array) {
    // tu iterador
}[, thisArg]);
```
