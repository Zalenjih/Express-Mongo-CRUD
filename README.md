# Express-Mongo-CRUD
CRUD simple utilizando Node.js/Express y MondoDb

# Dependencias de producción necesarias
-EJS                (Motor de plantillas)
-Express            (Framework de Node para servidor)
-Mongoose           (Conexión  a la base de datos)
-Body-parser        (Para entender las peticiones POST)
-Morgan             (Ver peticiones que llegan al servidor)

# Dependencias de desarrollo
- Nodemon           (Para reiniciar el servidor automáticamente)


# Instalación 
$ npm i ejs express mongoose body-parser morgan

Al finalizar instalar Nodemon

$ npm i nodemon -D 

# Configuración de la carpeta del proyecto
Toda la aplicación se guarda en una carpeta "src" y se crean los siguientes elementos:

-Carpeta libs y dentro de esta un archivo llamado "db-connection.js".
-Carpeta model que tendrá el mapeo a la base de datos
-Carpeta routes que guardará las rutas del sitio web
-Carpeta views donde se diseñarán las vistas 
-Archivo "app.js" que es el archivo principal para el arranque de la aplicación.
