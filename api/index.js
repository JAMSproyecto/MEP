'use strict';

/**
 * Exportamos todas las dependencias necesarias para establecer la conexión
 */
const express = require('express'),
    app = express(),
    path = require('path'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    mongoose = require('mongoose'),
    tiza = require('chalk');

/**
 * Módulo para dar colores al texto de la consola
 * https://www.npmjs.com/package/chalk
 */
const ColorBackEnd = tiza.rgb(248, 260, 190).bgBlack,
    ColorNormal = tiza.rgb(236, 236, 236).bgBlack,
    ColorConectado = tiza.bold.rgb(73, 163, 111).bgBlack,
    ColorError = tiza.bold.yellow.bgBlack,
    ColorDesconectado = tiza.bold.red.bgBlack,
    ColorTerminacion = tiza.bold.magenta.bgBlack;

/**
 * Se definen las variables necesarias para la conexión con MongoDB
 */
const Config = require('../config') || {},
    Url1 = Config.bd.dbUrl1 || '',
    DbContrasena = encodeURIComponent(Config.bd.contrasena) || '',
    Url2 = Config.bd.dbUrl2 || '',
    Dburl = `${Url1}${DbContrasena}${Url2}`,
    Port = Config.puerto.servidor || 4001;

let db = mongoose.connection;

/**
 * Se le indica que cree un servidor extra dentro del puerto 4000 y escuche los cambios que se le hagan a esos archivos
 */
let _server = () => {
    console.log(ColorBackEnd(' Back-end corriendo en el puerto ' + Port));
    console.log(' ');
};
let server = app.listen(Port, _server());

/**
 * Se define la conexión con Mongoose, enviándole como parámetro la url de la base de datos
 */
mongoose.connect(Dburl, {useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true});

/**
 * Si la conexión es exitosa nos imprime en la consola que se ha establecido conexión con Mongo
 */
db.once('open', () => {
    console.log(ColorConectado(' Base de datos conectada correctamente'));
    console.log(' ');
});

/**
 * Si la conexión falla, imprime en consola el error
 */
db.on('error', (err) => {
    process.stdout.write('\x07');
    console.log(ColorError(' Error de conexión: ' + err));
    console.log(' ');
});

db.on('disconnected', () => {
    console.log(ColorDesconectado(' Base de datos desconectada'));
    console.log(' ');
});


/**
 * Le indicamos a express que envíe las respuestas a la carpeta "public"
 */
app.use(express.static(path.join(__dirname, 'public')));

/**
 * Le indicamos a la aplicación que el formato de los datos va a ser JSON
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(morgan('dev'));

/**
 * Permitir a cualquier origen el acceso a los recursos
 */
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, X-Response-Time, X-PINGOTHER, X-CSRF-Token,Authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});


/**
 * Obtener los componentes y asignarlos a la app
 */

const articulos = require('./componentes/articulos/articulos.route');

app.use('/api', articulos);























// Se guarda todo lo que se ha realizado
module.exports = app;

/**
 * Este evento se activa cuando el proceso se cierra.
 * Cuando el proceso se cierra, es un buen hábito cerrar toda la conexión abierta de la base de datos.
 */
process.on('SIGINT', () => {
    db.close(() => {
        console.log(ColorTerminacion(' La base de datos se desconecta debido a la terminación de la aplicación'));
        process.exit(0);
    });
});

