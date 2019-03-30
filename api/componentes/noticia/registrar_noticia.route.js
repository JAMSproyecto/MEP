'use strict';
const express = require('express');
const router =  express.Router();
const registrar_noticia_api = require('./registrar_noticia.api');

router.route('/registrar_noticia')
    .post(
        function(req, res){
            registrar_noticia_api.registrar_noticia(req, res);
        }
    );

router.route('/listar_todas_noticias')
        .get(
            function(req, res){
                registrar_noticia_api.listar_todas_noticias(req, res);
            }
        )

module.exports = router;