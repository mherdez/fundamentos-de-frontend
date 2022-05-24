# CSS Flexbox

- [w3schools](https://www.w3schools.com/css/css3_flexbox.asp)
- [CSS Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

El Módulo de Caja Flexible, comúnmente llamado `flexbox`, fue diseñado como un modelo unidimensional de layout, y como un método que pueda ayudar a distribuir el espacio entre los ítems de una interfaz y mejorar las capacidades de alineación.

## Contenedor

Para comenzar a usar el modelo Flexbox, primero debe definir un contenedor flexible.

```css
.flex-container {
  display: flex;
}
```

### Ejemplo

```css
.flex-container {
  display: flex;
  background-color: DodgerBlue;
}

.flex-container > div {
  background-color: #f1f1f1;
  margin: 10px;
  padding: 20px;
  font-size: 30px;
}
```

```html
<div class="flex-container">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
```

<div style="display:flex; background: DodgerBlue;">
  <div style="background-color: #f1f1f1; margin: 10px; padding: 20px; font-size: 30px;">1</div>
  <div style="background-color: #f1f1f1; margin: 10px; padding: 20px; font-size: 30px;">2</div>
  <div style="background-color: #f1f1f1; margin: 10px; padding: 20px; font-size: 30px;">3</div>  
</div>

## Propiedades del contenedor

### flex-direction

Define en qué dirección el contenedor quiere apilar los elementos flexibles.

- row
- row-reverse
- column
- column-reverse

```css
.flex-container {
  display: flex;
  flex-direction: column;
}
```

### flex-wrap

Especifica si los elementos flexibles deben ajustarse o no.

- nowrap
- wrap
- wrap-reverse

```css
.flex-container {
  display: flex;
  flex-wrap: wrap;
}
```

### flex-flow

La propiedad `flex-flow` es una propiedad abreviada para configurar las propiedades `flex-direction` y `flex-wrap`.

```css
.flex-container {
  display: flex;
  flex-flow: row wrap;
}
```

### justify-content

Se utiliza para alinear horizontalmente los elementos flexibles

- flex-start
- flex-end
- center
- space-between
- space-around
- space-evenly

```css
.flex-container {
  display: flex;
  justify-content: center;
}
```

### align-items

Se utiliza para alinear verticalmente los elementos flexibles

- stretch
- flex-start
- flex-end
- center
- baseline

```css
.flex-container {
  display: flex;
  height: 200px;
  align-items: center;
}
```

### align-content

Se utiliza para alinear las líneas flexibles

- flex-start
- flex-end
- space-between
- space-around
- space-evenly

```css
.flex-container {
  display: flex;
  height: 600px;
  flex-wrap: wrap;
  align-content: space-between;
}
```

## Elementos flexibles

Los elementos secundarios directos de un contenedor flexible se convierten automáticamente en elementos flexibles.

### order

Especifica el orden de los elementos flexibles.

```html
<div class="flex-container">
  <div style="order: 3">1</div>
  <div style="order: 2">2</div>
  <div style="order: 4">3</div>
  <div style="order: 1">4</div>
</div>
```

### flex-grow

Especifica cuánto crecerá un elemento flexible en relación con el resto de los elementos.

```html
<div class="flex-container">
  <div style="flex-grow: 1">1</div>
  <div style="flex-grow: 1">2</div>
  <div style="flex-grow: 8">3</div>
</div>
```

### flex-shrink

Especifica cuánto se encogerá un elemento flexible en relación con el resto de los elementos.

```html
<div class="flex-container">
  <div>1</div>
  <div>2</div>
  <div style="flex-shrink: 0">3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
  <div>7</div>
  <div>8</div>
  <div>9</div>
  <div>10</div>
</div>
```

### flex-basis

Especifica la longitud inicial de un elemento flexible.

```html
<div class="flex-container">
  <div>1</div>
  <div>2</div>
  <div style="flex-basis: 200px">3</div>
  <div>4</div>
</div>
```

### flex

La propiedad `flex` es una propiedad abreviada para las propiedades `flex-grow`, `flex-shrink` y `flex-basis`.

```css
.flex-item {
  flex: flex-grow | flex-shrink | flex-basis;
}
```

```html
<div class="flex-container">
  <div>1</div>
  <div>2</div>
  <div style="flex: 0 0 200px">3</div>
  <div>4</div>
</div>
```

### align-self

La propiedad `align-self` especifica la alineación del elemento seleccionado dentro del contenedor flexible. Anula la alineación predeterminada establecida por la propiedad `align-items` del contenedor.

```html
<div class="flex-container">
  <div>1</div>
  <div>2</div>
  <div style="align-self: center">3</div>
  <div>4</div>
</div>
```
