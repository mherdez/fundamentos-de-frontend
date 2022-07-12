# CSS Grid

- [w3schools](https://www.w3schools.com/css/css_grid.asp)
- [CSS Tricks](https://css-tricks.com/snippets/css/complete-guide-grid/)

El diseño **`grid`** ofrece un sistema de diseño basado en cuadrículas, con filas y columnas, lo que facilita el diseño de páginas web sin tener que usar _floats_ y _potitions_.

![css grid](https://i0.wp.com/www.silocreativo.com/wp-content/uploads/2017/04/css-grid.png)

## Diseño de cuadrícula

Un elemento HTML se convierte en un contenedor de cuadrícula cuando su displaypropiedad se establece en `grid` o `inline-grid`.

```css
.grid-container {
  display: grid;
}

.inline-grid-container {
  display: inline-grid;
}
```

## Contenedores

Los contenedores de cuadrícula consisten en elementos de cuadrícula, colocados dentro de columnas y filas.

```css
.grid-container {
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 10px;
  background-color: #2196f3;
  padding: 10px;
}

.grid-container > div {
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid black;
  text-align: center;
  font-size: 30px;
}
```

```html
<div class="grid-container">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
  <div>7</div>
  <div>8</div>
</div>
```

### grid-template-columns

Define el número de columnas en su diseño de cuadrícula y puede definir el ancho de cada columna.

```css
.grid-container {
  display: grid;
  grid-template-columns: auto auto auto auto;
}
```

### grid-template-row

Define la altura de cada fila.

```css
.grid-container {
  display: grid;
  grid-template-rows: 80px 200px;
}
```

### justify-content

Se utiliza para alinear toda la cuadrícula dentro del contenedor.

```css
.grid-container {
  display: grid;
  justify-content: space-evenly;
}
```

### align-content

Se usa para alinear verticalmente toda la cuadrícula dentro del contenedor.

```css
.grid-container {
  display: grid;
  height: 400px;
  align-content: center;
}
```

## Elemento de cuadrícula

De forma predeterminada, un contenedor tiene un elemento de cuadrícula para cada columna, en cada fila, pero puede diseñar los elementos de cuadrícula para que abarquen varias columnas o filas.

### grid-column

Para colocar un elemento, puede hacer referencia a los números de línea o usar la palabra clave "span" para definir cuántas columnas abarcará el elemento.

```css
.item1 {
  grid-column: 1 / 5;
}

.item2 {
  grid-column: 1 / span 3;
}
```

### grid-row

Define en qué fila colocar un elemento.

```css
.item1 {
  grid-row: 1 / span 2;
}
```

### grid-area

Se puede utilizar como una propiedad abreviada para las propiedades `grid-row-start`, `grid-column-start` `grid-row-end` y`grid-column-end`.

```css
.item8 {
  grid-area: 1 / 2 / 5 / 6;
}
```

### grid-area

También se puede utilizar para asignar nombres a los elementos de la cuadrícula.

```css
.item1 {
  grid-area: myArea;
}
.grid-container {
  grid-template-areas: 'myArea myArea myArea myArea myArea';
}
```

:::tip Nota
Cada fila está definida por apóstrofes (' ')

Las columnas de cada fila se definen dentro de los apóstrofes, separadas por un espacio.
:::

```css
.item1 {
  grid-area: header;
}
.item2 {
  grid-area: menu;
}
.item3 {
  grid-area: main;
}
.item4 {
  grid-area: right;
}
.item5 {
  grid-area: footer;
}

.grid-container {
  grid-template-areas:
    'header header header header header header'
    'menu main main main right right'
    'menu footer footer footer footer footer';
}
```

### Ejemplo

![grid ejemplo](https://raidboxes.io/wp-content/uploads/2021/07/CSS-Grid-Empty-Space.png)

```css
body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.grid-container {
  box-sizing: border-box;
  margin: 0;
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template:
    'header header' 10%
    'menu menu' 10%
    'main right' auto
    'footer footer ' 10% /
    auto 20%;
}

.grid-container > div {
  /* background-color: rgba(255, 255, 255, 0.8); */
  text-align: center;
  padding: 20px 0;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font: 40px sans-serif;
  font-weight: bold;
}

.item1 {
  grid-area: header;
  background-color: lightblue;
}

.item2 {
  grid-area: menu;
  background-color: lightgoldenrodyellow;
}

.item3 {
  grid-area: main;
  background-color: lightgreen;
}

.item4 {
  grid-area: right;
  background-color: lightpink;
}

.item5 {
  grid-area: footer;
  background-color: lightslategrey;
}
```

```html
<div class="grid-container">
  <div class="item1">header</div>
  <div class="item2">menu</div>
  <div class="item3">main</div>
  <div class="item4">right</div>
  <div class="item5">footer</div>
</div>
```
