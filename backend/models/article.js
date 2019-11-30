'use strict'

/* Article model */

var mongoose = require('mongoose');
//Schema
var Schema = mongoose.Schema;

var articleSchema = Schema({
    title: String,
    content: String,
    date: {type:Date, default: Date.now},
    image: String    
});

module.exports = mongoose.model('Article',articleSchema);