'use strict';
const express = require('express');
const router = express.Router();
const registro_Padre_Api = require('./registro_padre_api');

router.route('/registrar_Padre')
    .post(
        function (req, res) {
            registro_Padre_Api.registrar_Padre(req, res);
        }
    );

router.route('/listar_Padres')
    .get(
        function (req, res) {
            registro_Padre_Api.listar_Padres(req, res);
        }
    )

router.route('/validar_credenciales')
    .post(function (req, res) {
        userApi.validar(req, res);

    });


module.exports = router;