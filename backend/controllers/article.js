"use strict";

//Imports
var validator = require("validator");
var articleModel = require("../models/article");
var fs = require("fs");
var path = require("path");

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
    query.sort("-_id").exec((err, articles) => {
      //Validando el error
      if (err) {
        return res.status(500).send({
          status: "error",
          message: "Problema al obtener los articulos"
        });
      }

      //Validando que exixtan articulos
      if (!articles) {
        return res.status(404).send({
          status: "error",
          message: "No existen articulos para mostrar"
        });
      }

      //Si todo esta bien
      return res.status(200).send({
        status: "success",
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
        status: "error",
        message: "No existe articulo para mostrar"
      });
    }

    //Buscar el articulo
    articleModel.findById(_id, (err, article) => {
      //Validando si retorna un articulo
      if (err || !article) {
        return res.status(404).send({
          status: "error",
          message: "No existe articulo para mostrar"
        });
      }

      //Retornando el articulo
      return res.status(200).send({
        status: "success",
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
                status: "error",
                message: "Error al actualizar"
              });
            }
            if (err) {
              return res.status(404).send({
                status: "error",
                message: "No existe el articulo"
              });
            }

            return res.status(200).send({
              status: "success",
              articleUpdate
            });
          }
        );
      } else {
        return res.status(404).send({
          status: "error",
          message: "La validación no es correcta"
        });
      }
    } catch (err) {
      return res.status(404).send({
        status: "error",
        message: "Faltan datos por enviar"
      });
    }
  },

  //Eliminando articulos
  delete: (req, res) => {
    //Obtener el id
    var _idd = req.params.id;

    //Buscando el objeto y eliminandolo
    articleModel.findByIdAndDelete({ _id: _idd }, (err, articleRemoved) => {
      //Validando el error
      if (err) {
        return res.status(500).send({
          status: "error",
          message: "Error al borrar"
        });
      }

      if (!articleRemoved) {
        return res.status(404).send({
          status: "error",
          message: "No es posible eliminar el articulo"
        });
      }

      return res.status(200).send({
        status: "success",
        articleRemoved
      });
    });
  },

  //Subir archivos
  upload: (req, res) => {
    //Configurar el modulo connect multiparty router/article.js

    //Obtener el fichero desde la petición
    var filename = "Imagen no subida";

    if (!req.files) {
      return res.status(404).send({
        status: "error",
        message: filename
      });
    }

    //Obtener nombre y extensión del archivo
    var file_path = req.files.file0.path;
    var file_split = file_path.split("\\");

    //Nombre del archivo
    var file_name = file_split[2];
    //Extensión del fichero
    var extension_split = file_name.split(".");
    var file_extension = extension_split[1];

    //Comprobar la extensión, borrar el fichero sino es valido
    if (
      file_extension != "png" &&
      file_extension != "jpg" &&
      file_extension != "jpeg" &&
      file_extension != "gif"
    ) {
      //Borrar el archivo subido
      fs.unlink(file_path, err => {
        return res.status(200).send({
          status: "error",
          message: "La extensión de la imagen no es vaida"
        });
      });
    } else {
      //Buscar el articulo, asignar el nombre de la imagen y actualizarlo
      var articleid = req.params.id;
      articleModel.findOneAndUpdate(
        { _id: articleid },
        { image: file_name },
        { new: true },
        (err, articleUpdated) => {
          //Validando el error
          if (err || !articleUpdated) {
            return res.status(404).send({
              status: "error",
              message: "No se ha podido actualizar"
            });
          }

          return res.status(200).send({
            status: "success",
            articleUpdated
          });
        }
      );
    }
  },

  //Obtener una imagen en especifio
  getImage: (req, res)=>{

    var file = req.params.image;
    var path_file = './upload/articles/'+file;

    fs.exists(path_file, (exists)=>{
      if(exists){
        return res.sendFile(path.resolve(path_file));
      }else{
        return res.status(404).send({
          status: 'error',
          message: 'La imagen no existe'
        });
      }
    });
  },

  //Search o buscador
  search: (req, res)=>{
    //Obtener el string a buscar
    var search_string = req.params.search;
    //Fin or
    articleModel.find({
      "$or": [
        {"title": {"$regex":search_string, "$options": "i"}},
        {"content": {"$regex":search_string, "$options": "i"}}
      ]
    }).sort([['date', 'descending']])
    .exec((err,articles)=>{

      //Validando el error
      if(err){
        return res.status(500).send({
          status: 'error',
          message: 'Error en la petición'
        });
      }

      //Validando articulos en blanco
      if(!articles || articles.length <= 0){
        return res.status(404).send({
          status: 'error',
          message: 'No hay articulos que coindidan con la busqueda'
        });
      }
      return res.status(200).send({
        status: 'success',
        articles
      });
    });
  }

}; //End controller

module.exports = controller;
