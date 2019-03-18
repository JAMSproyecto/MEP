'use strict';

const mongoose = require('mongoose');

let schema_utiles = new mongoose.Schema(
    {   codigo :{type : String, require : true},
        tipo: {type :String, required : true},
        nombre : {type : String, required : true},
        anno : {type : String, required : false},
        articulos : [
            {
                nombre : {type : String, require : true},
                descripcion : {type : String, require : true},
                cantidad :{type : Number, require : true}
                
            }
        ]
    }
);

module.exports = mongoose.model('lista_utiles', schema_utiles);