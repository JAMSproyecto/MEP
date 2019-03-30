'use strict';
const mongoose = require('mongoose');

let schema_noticia = new mongoose.Schema(
    {
        tema : {type : String, required : true},
        noticia : {type : String, required: true},
        autor : {type: String, required: true},
        fecha : {type: String, required: true},
        informacion : {type : String, required : true}
    }
);

module.exports = mongoose.model('noticia_', schema_noticia);