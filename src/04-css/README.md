# CSS

- [w3schools](https://www.w3schools.com/css/default.asp)
- [mdn web docs\_](https://developer.mozilla.org/es/docs/Learn/CSS)

CSS es el lenguaje que usamos para diseñar una página web.

## ¿Qué es CSS?

- CSS significa hojas de estilo en cascada
- CSS describe cómo se deben mostrar los elementos HTML en la pantalla, el papel o en otros medios
- CSS ahorra mucho trabajo. Puede controlar el diseño de varias páginas web a la vez
- Las hojas de estilo externas se almacenan en archivos CSS

### ¿Por qué usar CSS?

CSS se usa para definir estilos para sus páginas web, incluido el diseño, el diseño y las variaciones en la visualización para diferentes dispositivos y tamaños de pantalla.

## Sintaxis

![Selector de CSS](https://www.w3schools.com/css/img_selector.gif)

:::tip Nota
Una regla CSS consta de un selector y un bloque de declaración.
:::

El selector apunta al elemento HTML que desea diseñar.

El bloque de declaración contiene una o más declaraciones separadas por punto y coma.

Cada declaración incluye un nombre de propiedad CSS y un valor, separados por dos puntos.

Varias declaraciones CSS se separan con punto y coma, y ​​los bloques de declaración están rodeados por llaves.

**Ejemplo**

En este ejemplo, todos los elementos `<p>` estarán alineados al centro, con un color de texto rojo:

```css
p {
  color: red;
  text-align: center;
}
```

Ejemplo explicado

- `p` es un selector en CSS (apunta al elemento HTML que desea diseñar: `<p>`).
- `colores` una propiedad, y `red` es el valor de la propiedad
- `text-align` es una propiedad, y `center` es el valor de la propiedad

## Aplicar estilos

Cuando un navegador lee una hoja de estilo, formateará el documento HTML de acuerdo con la información de la hoja de estilo.

### Tres formas de insertar CSS

Hay tres formas de insertar una hoja de estilo:

1. CSS externo
2. CSS interno
3. CSS en línea

#### 1. CSS Externo

Los estilos externos se definen dentro del elemento `<link>`, dentro de la sección `<head>` de una página HTML:

```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="mystyle.css" />
  </head>
  <body>
    <h1>This is a heading</h1>
    <p>This is a paragraph.</p>
  </body>
</html>
```

El archivo **.css** externo no debe contener ninguna etiqueta HTML.

**mystyle.css**

```css
body {
  background-color: lightblue;
}

h1 {
  color: navy;
  margin-left: 20px;
}
```

#### 2. CSS Interno

Los estilos internos se definen dentro del elemento `<style>`, dentro de la sección `<head>` de una página HTML:

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      body {
        background-color: linen;
      }

      h1 {
        color: maroon;
        margin-left: 40px;
      }
    </style>
  </head>
  <body>
    <h1>This is a heading</h1>
    <p>This is a paragraph.</p>
  </body>
</html>
```

#### 3. CSS en Línea

Se puede usar un estilo en línea para aplicar un estilo único a un solo elemento.

Para usar estilos en línea, agregue el atributo de estilo al elemento relevante. El atributo de estilo puede contener cualquier propiedad CSS y se definen dentro del atributo `"style"` del elemento relevante:

```html
<!DOCTYPE html>
<html>
  <body>
    <h1 style="color:blue;text-align:center;">This is a heading</h1>
    <p style="color:red;">This is a paragraph.</p>
  </body>
</html>
```

### Orden en cascada

¿Qué estilo se utilizará cuando haya más de un estilo especificado para un elemento HTML?

Todos los estilos en una página "caerán en cascada" en una nueva hoja de estilo "virtual" según las siguientes reglas:

1. Estilo en línea (dentro de un elemento HTML)
2. Hojas de estilo externas e internas (en la sección de head)
3. Predeterminado del navegador

Por lo tanto, un estilo en línea tiene la prioridad más alta y anulará los estilos externos e internos y los valores predeterminados del navegador.

## Selectores

Los selectores de CSS se utilizan para "encontrar" (o seleccionar) los elementos HTML que desea diseñar.

### HTML

El selector de elementos selecciona elementos HTML en función del nombre del elemento.

```css
p {
  text-align: center;
  color: red;
}
```

### Id

El selector de `id` usa el atributo id de un elemento HTML para seleccionar un elemento específico.

La identificación de un **elemento es única dentro de una página**, por lo que el selector de identificación se usa para seleccionar un elemento único. Se escribe con un hash (#), seguido de la identificación del elemento.

```css
#para1 {
  text-align: center;
  color: red;
}
```

```html
<div id="para1">...</div>
```

### Clase

El selector de clase selecciona elementos HTML con un atributo de clase específico. Se escribe con un carácter de punto (.), seguido del nombre de la clase.

```css
.center {
  text-align: center;
  color: red;
}
```

### Universal

El selector universal (\*) selecciona todos los elementos HTML de la página.

```css
* {
  text-align: center;
  color: blue;
}
```

### De agrupación

El selector de agrupación selecciona todos los elementos HTML con las mismas definiciones de estilo.

```css
h1,
h2,
p {
  text-align: center;
  color: red;
}
```

## Cascada, especificidad y herencia

### Cascada

En un primer nivel de simplicidad, la cascada en las hojas de estilo significa que el orden de las reglas importa en CSS: cuando dos reglas tienen la misma especificidad, se aplica la que aparece en último lugar en el CSS.

```css
h1 {
  color: red;
}

h1 {
  color: blue;
}
```

### Especificidad

La especificidad es el modo que tiene el navegador de decidir qué regla se aplica si diversas reglas tienen selectores diferentes pero podrían aplicarse a un mismo elemento.

Hay cuatro categorías que definen el nivel de especificidad de un selector:

- **Estilos en línea** - Ejemplo: `<h1 style="color: pink;">`
- **ID** - Ejemplo: `#navbar`
- **Clases, pseudoclases, selectores de atributos** - Ejemplo: `.test, :hover, [href]`
- **Elementos y pseudo-elementos** - Ejemplo: `h1, :before`

```css
.main-heading {
  color: red;
}

h1 {
  color: blue;
}
```

```html
<h1 class="main-heading">Este es mi encabezado</h1>
```

### Herencia

La herencia también debe entenderse en este contexto: algunos valores de las propiedades CSS que se han establecido para los elementos padre los heredan los elementos hijo, pero otros no.

Por ejemplo, si para un elemento se establece el color (color) y el tipo de letra (font-family), cada elemento que se encuentre dentro de él también se mostrará de ese color y con ese tipo de letra, a menos que les se haya aplicado un color y un tipo de letra diferentes directamente.

```css
body {
  color: blue;
}

span {
  color: black;
}
```

```html
<p>
  As the body has been set to have a color of blue this is inherited through the
  descendants.
</p>
<p>
  We can change the color by targetting the element with a selector, such as
  this <span>span</span>.
</p>
```

## Modelo de caja

El modelo de caja CSS es esencialmente una caja que envuelve cada elemento HTML. Consiste en: márgenes, bordes, relleno y el contenido real. La siguiente imagen ilustra el modelo de caja:

![Modelo de caja css](https://hablacode.org/static/media/Box-Model.ebc21d7b.PNG)

- **Contenido**: el contenido del cuadro, donde aparecen el texto y las imágenes.
- **Relleno**: borra un área alrededor del contenido. El relleno es transparente.
- **Borde**: un borde que rodea el relleno y el contenido.
- **Margen**: borra un área fuera del borde. El margen es transparente.

## Elementos de bloque y línea

En comparación con `display: inline`, la principal diferencia es que `display: inline-block` permite establecer un ancho y alto en el elemento.

Además, con `display: inline-block`, se respetan los márgenes/rellenos superior e inferior, pero con `display: inline` no.

En comparación con `display: block`, la principal diferencia es que `display: inline-block` no agrega un salto de línea después del elemento, por lo que el elemento puede ubicarse junto a otros elementos.

```css
span.a {
  display: inline; /* the default for span */
  width: 100px;
  height: 100px;
  padding: 5px;
  border: 1px solid blue;
  background-color: yellow;
}

span.b {
  display: inline-block;
  width: 100px;
  height: 100px;
  padding: 5px;
  border: 1px solid blue;
  background-color: yellow;
}

span.c {
  display: block;
  width: 100px;
  height: 100px;
  padding: 5px;
  border: 1px solid blue;
  background-color: yellow;
}
```

## Medidas absolutas y relativas

### Absolutas

Su valor se encuentra definido en términos concretos y de manera medible. Esto quiere decir que no depende de otro valor de referencia, ni del contexto.

- `mm`: milímetros.
- `cm`: centímetros.
- `in`: pulgada ("inches", en inglés). Una pulgada equivale a 2.54 centímetros.
- `pt`: puntos. Un punto equivale a 1 /72 de pulgada, es decir, unos 0.35 milímetros.
- `pc`: picas. Una pica equivale a 12 puntos, o aproximadamente a 4.23 milímetros.
- `px`: pixel. Es la unidad mínima de resolución de la pantalla. En realidad suele considerársela una unidad.

### Relativas

Las unidades relativas no son valores exactos sino que se calculan a partir de otro valor de referencia. A pesar de parecer más difíciles de calcular son las más utilizadas en el diseño de sitios web responsive por su adaptabilidad a los diferentes dispositivos.

- `em`: Tamaño relativo al tamaño de texto de su contenedor.
- `rem`: Funciona igual que el `em`, con la diferencia que es relativo al valor de la fuente del elemento html
- `vw`: Relativo a 1% del ancho del viewport (el tamaño de la ventana del navegador).
- `vh`: Relativo a 1% del alto del viewport.
- `%`: Relativo al elemento padre.

## Propiedades básicas

### Posicionamiento

```css
div {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
}
```

### Modelo de caja

```css
div {
  width: 300px;
  border: 15px solid green;
  padding: 50px;
  margin: 20px;
}
```

### Visuales

```css
div {
  background-color: #f5f5f5;
  border: 1px solid #e5e5e5;
  border-radius: 3px;
}
```

### Tipográfia

```css
div {
  font: normal 13px 'Helvetica Neue', sans-serif;
  line-height: 1.5;
  color: #333;
  text-align: center;
}
```

### Misc

```css
div {
  opacity: 1;
  cursor: pointer;
  filter: brightness(0.4);
}
```
