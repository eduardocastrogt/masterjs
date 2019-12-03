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
  },

  getArticles: (req, res) => {

    //Query consulta
    var query = articleModel.find({});
    //Carpurando el parametro
    var last = req.params.last;

    //Validando si viene el parametro
    if (last || last != undefined) {
      query.limit(5);
    }

    //Busqueda de articulos
    query.sort('-_id').exec((err, articles) => {

      //Validando el error
      if (err) {
        return res.status(500).send({
          status: 'error',
          message: 'Problema al obtener los articulos'
        });
      }

      //Validando que exixtan articulos
      if (!articles) {
        return res.status(404).send({
          status: 'error',
          message: 'No existen articulos para mostrar'
        });
      }

      //Si todo esta bien
      return res.status(200).send({
        status: 'success',
        articles
      });


    });
  },

  //Obtener un articulo
  getArticle: (req, res) => {

    //Capturando el id 
    var _id = req.params.id;

    //Comprobar que exista
    if (!_id || _id == null) {
      return res.status(404).send({
        status: 'error',
        message: 'No existe articulo para mostrar'
      });
    }

    //Buscar el articulo
    articleModel.findById(_id, (err, article) => {

      //Validando si retorna un articulo
      if (err || !article) {
        return res.status(404).send({
          status: 'error',
          message: 'No existe articulo para mostrar'
        });
      }

      //Retornando el articulo
      return res.status(200).send({
        status: 'success',
        article
      });
    });
  },

  //Actualiza articulo
  update: (req, res) => {

    //Obtener el id
    var _idd = req.params.id;

    //Obtener datos
    var params = req.body;

    //Validar los datos
    try {

      var validate_title = !validator.isEmpty(params.title);
      var validate_content = !validator.isEmpty(params.content);

      if (validate_title && validate_content) {
        //Si son verdaderos, se busca y se actualizan
        articleModel.findOneAndUpdate(
          { _id: _idd },
          params,
          { new: true },
          (err, articleUpdate) => {
            //Validando el error
            if (err) {
              return res.status(500).send({
                status: 'error',
                message: 'Error al actualizar'
              });
            }
            if (err) {
              return res.status(404).send({
                status: 'error',
                message: 'No existe el articulo'
              });
            }

            return res.status(200).send({
              status: 'success',
              articleUpdate
            });
          }
        );
      } else {
        return res.status(404).send({
          status: 'error',
          message: 'La validación no es correcta'
        });
      }

    } catch (err) {
      return res.status(404).send({
        status: 'error',
        message: 'Faltan datos por enviar'
      });
    }

  },

  //Eliminando articulos
  delete: (req, res) => {
    //Obtener el id
    var _idd = req.params.id;

    //Buscando el objeto y eliminandolo
    articleModel.findByIdAndDelete(
      {_id: _idd},
      (err, articleRemoved)=>{
        //Validando el error
        if(err){
          return res.status(500).send({
            status: 'error',
            message: 'Error al borrar'
          });
        }

        if(!articleRemoved){
          return res.status(404).send({
            status: 'error',
            message: 'No es posible eliminar el articulo'
          });
        }

        return res.status(200).send({
          status: 'success',
          articleRemoved
        });
      }
    );
  }
}; //End controller

module.exports = controller;
