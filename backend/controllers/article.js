"use strict";

//Imports
var validator = require("validator");
var articleModel = require("../models/article");

/* Article controller */

var controller = {
  datosCurso: (req, res) => {
    var hola = req.body.hola;

    return res.status(200).send({
      curso: "Master en Frameworks JS",
      plataforma: "Udemy",
      instructor: "Victor Robles",
      hola
    });
  },

  tests: (req, res) => {
    return res.status(200).send({
      message: "Soy la acción del controlador"
    });
  },

  save: (req, res) => {
    //Recoger parametros por post
    var params = req.body;

    //Validar datos
    try {
      var validate_title = !validator.isEmpty(params.title);
      var validate_content = !validator.isEmpty(params.content);
    } catch (err) {
      return res.status(200).send({
        status: "Error",
        message: "Faltan datos para enviar"
      });
    }

    if (validate_title && validate_content) {
      //Crear objetos a guardar
      var article = new articleModel();
      //Asignar valores
      article.title = params.title;
      article.content = params.content;
      article.image = null;
      //Guardar el articulo
      article.save((err, articleStored) => {
        //Validando el error
        if (err || !articleStored) {
          return res.status(404).send({
            status: "Error",
            message: "No se pudo guardar el articulo"
          });
        }
        //Devolver una respuseta
        return res.status(200).send({
          status: "success",
          article: articleStored
        });
      });
    } else {
      return res.status(200).send({
        status: "Error",
        message: "Los datos no son validos."
      });
    }
  }
}; //End controller

module.exports = controller;
