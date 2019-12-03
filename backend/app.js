"use strict";

//Cargar modulos de node para crear el servidor
var express = require("express");
var bodyParser = require("body-parser");

//Ejecutar express
var app = express();
//Cargar ficheros de rutas

//Cargar middelware
/*convertir peticiones a json*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

//Ficheros para las rutas
var article_routes = require("./routes/article");

//Cargar rutas
app.use("/api", article_routes);

//Exportar el modulos (fichero actual)

module.exports = app;
