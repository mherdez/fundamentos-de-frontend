# Fundamentos

## WWW

En informática, la **World Wide Web** (La Web) o red informática mundial​ es un sistema que funciona a través de Internet, por el cual se pueden transmitir diversos tipos de datos a través del Protocolo de Transferencia de Hipertextos o HTTP, que son los enlaces de la página web.

Sus características son: es un sistema a través del cual se gestiona información que será compartida por internet; es necesario tener conexión a internet a través de alguna aplicación para poder utilizar la web, por ejemplo, Chrome, Mozilla, Safari y otros navegadores web, que son herramientas de internet que nos permiten acceder a un gran número de contenidos que a su vez nos direccionan a otras páginas y así sucesivamente; para su creación se emplea lenguaje informático HTML (Hypertext Markup Language), lenguaje de marcas que permite crear documentos para compartir a través de internet; emplea el sistema de Localización Uniforme de Recursos o URL, que es la dirección concreta que determina cada uno de los recursos que se encuentran en la red, es decir, es un identificador propio para cada página, documento, archivo, entre otros, que se encuentran en la web.

[World Wide Web](https://es.wikipedia.org/wiki/World_Wide_Web)

## Modelo cliente-servidor

La **arquitectura cliente-servidor** es un modelo de diseño de software en el que las tareas se reparten entre los proveedores de recursos o servicios, llamados servidores, y los demandantes, llamados clientes. Un cliente realiza peticiones a otro programa, el servidor, quien le da respuesta. Esta idea también se puede aplicar a programas que se ejecutan sobre una sola computadora, aunque es más ventajosa en un sistema operativo multiusuario distribuido a través de una red de computadoras.

Algunos ejemplos de aplicaciones que usen el modelo cliente-servidor son el Correo electrónico, un Servidor de impresión y la World Wide Web.

![https://upload.wikimedia.org/wikipedia/commons/1/1c/Cliente-Servidor.png](https://upload.wikimedia.org/wikipedia/commons/1/1c/Cliente-Servidor.png)

#### Ejemplo: Wikipedia

La mayoría de los servicios de Internet son del tipo cliente-servidor. La acción de visitar un sitio web requiere una arquitectura cliente-servidor, ya que el servidor web sirve las páginas web al navegador (al cliente). La computadora y el navegador web del usuario serían considerados un cliente; y las computadoras, las bases de datos, y los usos que componen Wikipedia serían considerados el servidor. Cuando el navegador web del usuario solicita un artículo particular de Wikipedia, el servidor de Wikipedia recopila toda la información a mostrar en la base de datos de Wikipedia, la articula en una página web, y la envía de nuevo al navegador web del cliente.

[Cliente-Servidor](https://es.wikipedia.org/wiki/Cliente-servidor)

## URL

Un **LRU** o **localizador de recursos uniforme** (más conocido por las siglas **URL**, del inglés Uniform Resource Locator)1​ es un identificador de recursos uniforme (Uniform Resource Identifier, URI) cuyos recursos referidos pueden cambiar, esto es, la dirección puede apuntar a recursos variables en el tiempo. Están formados por una secuencia de caracteres de acuerdo con un formato modélico y estándar que designa recursos en una red como, por ejemplo, [Internet](https://es.wikipedia.org/wiki/Internet_Explorer).

#### Formato general

El formato general de un URL es: `:esquema://máquina/directorio/archivo`

También pueden añadirse otro tipo de información:

`esquema://usuario:contraseña@máquina:puerto/directorio/archivo`

Por ejemplo: *https://www.wikipedia.org/*

#### Esquema URL

Un URL se clasifica por su esquema, que generalmente indica el protocolo de red que se usa para recuperar, a través de la red, la información del recurso identificado. Un URL comienza con el nombre de su esquema, seguido por dos puntos, seguido por una parte específica del esquema.

Algunos ejemplos de esquemas URL:

- **http** - recursos Hypertext Transfer Protocol (HTTP).
- **https** - HTTP sobre Secure Sockets Layer (SSL).
- **ftp** - File Transfer Protocol.
- **mailto** - direcciones de correo electrónico.
- **ldap** - búsquedas Lightweight Directory Access Protocol (LDAP).
- **file** - recursos disponibles en el sistema local o en una red local.
- **news** - grupos de noticias Usenet (newsgroup).
- **gopher** - el protocolo Gopher (en desuso).
- **telnet** - el protocolo Telnet.
- **data** - el esquema para insertar pequeños trozos de contenido en los documentos esquema de URI de datos

[Localizador de Recursos Uniforme](https://es.wikipedia.org/wiki/Localizador_de_recursos_uniforme)

## Servidor web

Un **servidor web** o **servidor HTTP** es un programa informático que procesa una aplicación del lado del servidor, realizando conexiones bidireccionales o unidireccionales y síncronas o asíncronas con el cliente y generando o cediendo una respuesta en cualquier lenguaje o aplicación del lado del cliente. El código recibido por el cliente es renderizado por un navegador web. Para la transmisión de todos estos datos suele utilizarse algún protocolo. Generalmente se usa el protocolo HTTP para estas comunicaciones, perteneciente a la capa de aplicación del modelo OSI. El término también se emplea para referirse al ordenador donde se ejecutan esas tareas.

[Servidor web](https://es.wikipedia.org/wiki/Servidor_web)

## Frontend

El **frontend** es la parte del desarrollo web que se dedica a la parte frontal de un sitio web, en pocas palabras del diseño de un sitio web, desde la estructura del sitio hasta los estilos como colores, fondos, tamaños hasta llegar a las animaciones y efectos.

Es esa parte de la página con la que interaccionan los usuarios de la misma, es todo el código que se ejecuta en el navegador de un usuario, al que se le denomina una aplicación cliente, es decir, todo lo que el visitante ve y experimenta de forma directa.

::: tip Front-end
Es la persona que se dedica básicamente al diseño web, pero esto no significa que no toque código, tanto el front-end como el back-end están en contacto con código todo el tiempo.
:::

Dentro del área de front-end se trabaja con lenguajes mayormente del lado del cliente, como:

- `HTML` (lenguaje de marcado de hipertexto, se utilizan etiquetas que estructuran y organizan el contenido de la web).

- `CSS` (se encarga del formato y diseño visual de las páginas web escritas en html) para darle estructura y estilo al sitio.

- `Javascript` (un lenguaje de programación, rápido y seguro para programar centros de datos, consolas, teléfonos móviles o Internet) para complementar los anteriores y darle dinamismo a los sitios web.

::: tip Nota
HTML y CSS son lenguajes de marcado y estilo. Javascript es un lenguaje de programación.
:::

[Servnet.mx](https://www.servnet.mx/blog/backend-y-frontend-partes-fundamentales-de-la-programaci%C3%B3n-de-una-aplicaci%C3%B3n-web)
