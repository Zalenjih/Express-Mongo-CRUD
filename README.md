# Express-Mongo-CRUD
CRUD simple utilizando Node.js/Express y MondoDb

# Dependencias de producción necesarias
- EJS                (Motor de plantillas)
- Express            (Framework de Node para servidor)
- Mongoose           (Conexión  a la base de datos)
- Body-parser        (Para entender las peticiones POST)
- Morgan             (Ver peticiones que llegan al servidor)

# Dependencias de desarrollo
- Nodemon           (Para reiniciar el servidor automáticamente)


# Instalación 
Se instalan las dependencias de producción:

`npm i ejs express mongoose body-parser morgan`

Al finalizar instalar Nodemon:

`npm i nodemon -D `

# Configuración de la carpeta del proyecto
Toda la aplicación se guarda en una carpeta "src" y se crean los siguientes elementos:

1. Carpeta model que tendrá el mapeo a la base de datos.
2. Carpeta routes que guardará las rutas del servidor.
3. Carpeta views donde se diseñarán las vistas html que estará procesado con el motor EJS.
4. Archivo "app.js" que es el archivo principal para el arranque de la aplicación.

# Configurar package.json
Se agregan scripts para hacer uso de Nodemon e iniciar el servidor con comandos especificados.


`"dev": "nodemon src/app.js"`

`"start": "node src/ app.js"`

# Arrancar el servidor
Con la consola ubicada en la carpeta del proyecto se ejecutan los siguientes comandos:

Para iniciar el servidor

`npm start`

Para iniciar el nodemon

`npm run dev`

# Comenzando a desarrollar

Se obienten todas dependencias y rutas en el archivo principal "app.js".

`const express = require("express");
const logger = require("morgan");
const app = express();
const bodyParser = require("body-parser");
const indexRoutes = require('./routes/index');
const path = require("path");`


Se configura el puerto

`app.set('port', process.env.PORT || 3001);`


Se configura el motor de plantillas

`//Que entienda en envio de paginas ejs
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");`


Se configura el apartado de Middlewares

`//Middlewares
app.use(logger("dev"));
app.use(bodyParser.urlencoded({
    extended: false
}));`


Agregamos las rutas para la página principal

`//Routes
app.use('/', indexRoutes);`


Por último se hace uso del puerto para la aplicación y se manda un mensaje en el servidor de aplicaciones

`app.listen(app.get('port'), () => {
    console.log("Server on port", app.get('port'));
});`


