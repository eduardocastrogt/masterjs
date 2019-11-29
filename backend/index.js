'use strict'

//Importanto mongoose
var mongoose = require('mongoose');

//Cargando app
var app = require('./app');

//Definiendo el puerto a utilizar
var port = 2628;

//Desactivando comandos anteriores
mongoose.set('useFindAndModify',false);
//Uso de promesas con mongo
mongoose.Promise = global.Promise;

//Conexión a mongos
mongoose.connect('mongodb://localhost:27017/api_rest_blog', { useNewUrlParser: true })
    .then(() => {
        console.log('La conexión a mongo se ha realizado correctamente :D');

        //Crear el servidor para escuchar las peticiones HTTP
        app.listen(port, ()=>{
            console.log('Servidor corriendo en http://localhost:'+port);
        });
    });