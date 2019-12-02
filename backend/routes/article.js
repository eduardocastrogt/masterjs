'use strict'

/* Article route */

//Importando express
var express = require('express');

//Importando article controller
var articleController = require('../controllers/article');

//Ruteo
var router = express.Router();

//Rutas de prueba
router.post('/datos-curso',articleController.datosCurso);
router.get('/test-controller',articleController.tests);

//Rutas utiles
router.post('/save', articleController.save);
router.get('/articles:last', articleController.getArticles);

module.exports = router;