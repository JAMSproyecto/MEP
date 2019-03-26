'use strict';

const Tiza = require('chalk');
const ModelRegistrarCEdu = require('./centroEducativo.model');
const ModelUsuario = require('./../usuarios/usuario.model');
const ObtenerPin = require('./../funciones_genericas/obtenerPin');
const ObtenerFecha = require ('./../funciones_genericas/obtenerFecha');


module.exports.registrar_centro_educativo = async (req, res) => {
    try {

        let registroUsuario = new ModelUsuario();

        registroUsuario.correo = req.body.correoCentro;
        registroUsuario.pin = ObtenerPin.get();
        registroUsuario.tipo = 'CentroEducativo';
        registroUsuario.fechaCreado = ObtenerFecha.get();

        let guardarUsuario = await registroUsuario.save();


        let cEduNuevo = new ModelRegistrarCEdu();

        cEduNuevo.correo = req.body.correoCentro;
        cEduNuevo.nombre = req.body.nombre;
        cEduNuevo.nombreComercial = req.body.nombreComercial;
        cEduNuevo.cedulaJuridica = req.body.cedulaJuridica;
        cEduNuevo.tipoInstitucion = req.body.tipoInstitucion;
        cEduNuevo.annoFundacion = req.body.annoFundacion;
        cEduNuevo.referenciaHistorica = req.body.resenna;
        cEduNuevo.telefono = req.body.telefonoCentro;
        cEduNuevo.fax = (req.body.fax || '');
        cEduNuevo.sitioWeb = (req.body.sitioWeb || '');
        cEduNuevo.redesSociales = (req.body.redesSociales || '');
        cEduNuevo.tipoInstitucion = req.body.tipoInstitucion;
        cEduNuevo.nivel = req.body.niveles;
        cEduNuevo.direccion = [{
            idProvincia: req.body.idProvincia,
            idCanton: req.body.idCanton,
            idDistrito: req.body.idDistrito,
            sennas: req.body.dirSennas
        }];
        cEduNuevo.contacto = [{
            correo: req.body.correoContacto,
            primerNombre: req.body.primerNombre,
            segundoNombre: req.body.segundoNombre,
            primerApellido: req.body.primerApellido,
            segundoApellido: req.body.segundoApellido,
            identificacion: req.body.identificacionContacto,
            departamento: req.body.departamentoContacto,
            telefono: req.body.telefonoContacto
        }];calificacion.padres
		cEduNuevo.calificacion = [{
		mep: 0,
		padres: 0
	    }];
		cEduNuevo.adjuntos = [];
		cEduNuevo.servicios = [];
		cEduNuevo.actividades = [];
		cEduNuevo.comentarios = [];
		cEduNuevo.idiomas = [];
		cEduNuevo.religion = '';
		cEduNuevo.tipoAlumno = 'Mixto';
		cEduNuevo.bachillerInternacional = false;
		
		cEduNuevo.ubicacion = [{
            latitud: '0',
            longitud: '0'
        }];

        cEduNuevo.fotoCentro = req.body.fotoCentro;

        let guardarCedu = await cEduNuevo.save();

        res.json({
            success: true,
            message: 'El centro educativo se registró correctamente'
        });

    } catch (err) {
        console.log(Tiza.bold.yellow.bgBlack('Error al registrar el centro educativo:'));
        console.log(Tiza.bold.yellow.bgBlack(err.message));

        res.json({
            success: false,
            message: 'Error al registrar el centro educativo'
        });
    }


};



module.exports.obtener_todos_centro_educativo = async (req, res) => {
    try {
        const mostrarColumnas = {}; //{ _id: 0 };

        const resultado = await ModelRegistrarCEdu.find({}, mostrarColumnas).select('fotoCentro nombreComercial calificacion direccion').sort({ _id: 'desc' });
        if (!!Object.keys(resultado).length) {
            res.json({
                success: true,
                message: resultado
            });
        } else {
            res.json({
                success: false,
                message: 'No se encontraron datos'
            });
        }
    } catch (err) {
        console.log(Tiza.bold.yellow.bgBlack('Error:'));
        console.log(Tiza.bold.yellow.bgBlack(err));
        res.json({
            success: false,
            message: 'Error al obtener los centros educativos'
        });
    }
};



