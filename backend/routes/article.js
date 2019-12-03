'use strict'

/* Article route */

//Importando express
var express = require('express');

//Importando article controller
var articleController = require('../controllers/article');

//Importando multiparty
var multiparty = require('connect-multiparty');
var md_upload = multiparty({uploadDir: './upload/articles'});

//Ruteo
var router = express.Router();

//Rutas de prueba
router.post('/datos-curso',articleController.datosCurso);
router.get('/test-controller',articleController.tests);

//Rutas utiles
router.post('/save', articleController.save);
router.get('/articles/:last?', articleController.getArticles);
router.get('/article/:id', articleController.getArticle);
router.put('/article/:id', articleController.update);
router.delete('/article/:id', articleController.delete);
router.post('/image-upload/:id', md_upload, articleController.upload);
router.get('/get-image/:image', articleController.getImage);
router.get('/search/:search', articleController.search);

module.exports = router;