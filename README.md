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
1. Lo primero es configurar el archivo "app.js" para que tome un puerto, se implemente el motor de plantillas, se congure el body-parser y morgan, se vinculen las rutas de las diferentes páginas que se usarán y activar la aplicación por medio del puerto específicado.

2. Después se crea el archivo "task.js" que tendrá la conexión y el mapeo a la base de datos con la colección indicada.

3. En el archivo "index.js" de la carpeta routes, se especifica el modelo todando el archvo "task.js" y se crean las operaciones de base de datos tomando en cuenta que las operaciones para actualizar, borrar y crear se indica con una nueva ruta que es descrita junto con el formulario de la págnina "index.ejs" que será nuestra vista.

# Notas
El repositorio tiene un archivo "db-connection.js" en la carpeta libs, sin embargo no se podía implementar de esta manera separada con el método utilizado ya que se trabajó con una nueva versión de mongoose.
