# App Final. Random Users

<img :src="$withBase('/img/random-users.png')">

Esta aplicación es la base de una serie de ejercicios que inicia con HTML y concluye incorporando programación Javascript. Asimismo, esta sección es el punto de partida de una de las rutas de aprendizaje del Curso [Fundamentos de React](https://mherdez.github.io/guia-fundamentos-de-react/). ¡ Comenzamos !

## Html

**index.html**

~~~html
<head>
  <!-- CSS -->
  <link rel="stylesheet" href="./style.css" />
</head>
<body>
  <h1>Random Users</h1>
  <div id="app">
    <article class="card">
      <picture>
        <img
          class="card-img-top"
          src="https://randomuser.me/api/portraits/men/1.jpg"
          alt=""
        />
        <h3 class="card-title-user">User A</h3>
      </picture>
    </article>
  </div>
</body>
~~~

## CSS

**style.css**
~~~css
body {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  padding: 20px 0;
  background: lightgray;
  font-family: 'SST', sans-serif;
}

#app {
  display: grid;
  gap: 50px;
  grid-template-columns: repeat(3, 1fr);
}

.card {
  padding: 30px;
  background: white;
  box-shadow: 5px 5px 25px #444444;
  border-radius: 15px;
  text-align: center;
}

.card-img-top {
  width: 200px;
  border-radius: 50%;
}

img {
width: 100%;
}

.card-title-user {
  margin: 20px 0 0 0;
}

~~~