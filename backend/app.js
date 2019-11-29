'use strict'

//Cargar modulos de node para crear el servidor
var express = require('express');
var bodyParser = require('body-parser');

//Ejecutar express
var app = express();
//Cargar ficheros de rutas

//Cargar middelware
/*convertir peticiones a json*/
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//CORS

//Prefijos para las rutas

//Ruta de prueba
app.get('/probando', (req, res)=>{
    return res.status(200).send({
        curso: 'Master Frameworks js',
        plataforma: 'Udemy',
        autor: 'Victor Robles'
    });
});

//Exportar el modulos (fichero actual)

module.exports = app;