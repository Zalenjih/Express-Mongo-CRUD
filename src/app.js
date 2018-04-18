const express = require("express");
const logger = require("morgan");
const app = express();
const bodyParser = require("body-parser");
const indexRoutes = require('./routes/index');
const path = require("path");
//Settings

//Si hay un puerto específico en el servido lo usa, si no usa el 3000
app.set('port', process.env.PORT || 3001);

//Que entienda en envio de paginas ejs
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//Middlewares
app.use(logger("dev"));
app.use(bodyParser.urlencoded({
    extended: false
}));

//Routes
app.use('/', indexRoutes);

app.listen(app.get('port'), () => {
    console.log("Server on port", app.get('port'));
});
