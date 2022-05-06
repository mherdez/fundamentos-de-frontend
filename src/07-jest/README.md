# Jest

## Introducción

Jest es un marco de prueba de JavaScript mantenido por Meta, diseñado y construido por Christoph Nakazawa con un enfoque en la simplicidad y el soporte para grandes aplicaciones web. Funciona con proyectos que utilizan Babel, TypeScript, Node.js, React, Angular, Vue.js y Svelte.

## Instalación

Instala Jest utilizando tu gestor de paquetes favorito:

**`npm`**

```npm
npm install --save-dev jest
```

**`yarn`**

```
yarn add --dev jest
```

## Mi primer test

Empecemos escribiendo una prueba para una función hipotética que suma dos números.

Primero, crea un archivo **`suma.js`**:

```js
function suma(a, b) {
	return a + b;
}
module.exports = suma;
```

Luego, crea un archivo llamado **`suma.test.js`**. Este contendrá nuestra prueba actual:

```js
const suma = require('./suma');

test('sumar 1 + 2 es igual a 3', () => {
	expect(suma(1, 2)).toBe(3);
});
```

Agrega la siguiente sección a tu **`package.json`**:

```json
{
	"scripts": {
		"test": "jest"
	}
}
```

Por último, ejecuta **`yarn test`** o **`npm test`** y Jest mostrará este mensaje:

```
PASS ./suma.test.js
✓ sumar 1 + 2 es igual a 3 (5ms)
```

¡Acabas de escribir tu primera prueba usando Jest!

## Marcadores más comunes

## Veracidad

## Números

## Cadenas de texto

## Vectores e iterables

## [https://jestjs.io](https://jestjs.io/es-ES/docs/using-matchers)
