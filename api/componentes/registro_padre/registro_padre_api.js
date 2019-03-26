'use strict';
const Model_Registro_Padre = require('./registro_padre_model');
const Nodemailer = require('nodemailer');

let transporter = Nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'soporte.mep.costarica@gmail.com',
        pass: '1Proyecto9'
    }
});

let obtener_Pin = () => {
    const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
    const string_length = 6;
    let randomstring = "";

    for (let i = 0; i < string_length; i++) {
        let rnum = Math.floor(Math.random() * chars.length);
        randomstring += chars.substring(rnum, rnum + 1);
    }

    return randomstring;
};

module.exports.registrar_Padre = (req, res) => {
    let registro_Padre = new Model_Registro_Padre(
        {
            nombre: req.body.nombre,
            segundoNombre: req.body.segundoNombre,
            apellido: req.body.apellido,
            segundoApellido: req.body.segundoApellido,
            tipoIdentificacion: req.body.tipoIdentificacion,
            numIdentificacion: req.body.numIdentificacion,
            nacionalidad: req.body.nacionalidad,
            fechaNacimiento: req.body.fechaNacimiento,
            numCel: req.body.numCel,
            numCasa: req.body.numCasa,
            email: req.body.email,
            provincia: req.body.provincia,
            canton: req.body.canton,
            distrito: req.body.distrito,
            direccion: req.body.direccion,
            cantidadHijos: req.body.cantidadHijos,
            nombreHijo: req.body.nombreHijo,
            edadHijo: req.body.edadHijo,
            nombreHijo2: req.body.nombreHijo2,
            edadHijo2: req.body.edadHijo2,
            nombreHijo3: req.body.nombreHijo3,
            edadHijo3: req.body.edadHijo3,
            nombreHijo4: req.body.nombreHijo4,
            edadHijo4: req.body.edadHijo4,
            contrasenna: req.body.contrasenna
        }
    );


    registro_Padre.save(
        function (error) {
            if (error) {
                res.json(
                    {
                        success: false,
                        msg: `Ha ocurrido el siguiente error ${error}`
                    }
                )
            } else {

                let mailOptions = {
                    from: 'soporte.mep.costarica@gmail.com',
                    to: registro_Padre.email,
                    subject: 'Verificación de correo electrónico',
                    html: `<h1 style="color:#227093;">Saludos ${registro_Padre.nombre} </h1>
                    <p>Gracias por registrarse en nuestra aplicación</p>
                    <p>Por favor verifique el siguiente pin de validación</p>
                    <p>${obtener_Pin()} </p>
                    `
                };
                transporter.sendMail(mailOptions, function(error, info){
                    if (error) {
                      console.log(error);
                    } else {
                      console.log('Email sent: ' + info.response);
                    }
                  });
                
                res.json(
                    {
                        success: true,
                        msg: `Se registró el perfil de manera correcta`
                    }
                )
            }
        }

    );
};

module.exports.listar_Padres = (req, res) => {
    Model_Registro_Padre.find().then(
        function (data) {
            if (data.length > 0) {
                res.json(
                    {
                        success: true,
                        data: data
                    }
                )
            } else {
                res.json(
                    {
                        success: false,
                        data: 'Data not found'
                    }
                )
            }
        }
    );
};

module.exports.validar = function(req, res){
    userModel.findOne({identificacion : req.body.identificacion}).then(
        function(usuario){
            if(usuario){
               if(usuario.contrasenna == req.body.contrasenna){
                   res.json({
                       success: true,
                       usuario : usuario
                   });
               }else{
                   res.json({
                       success: false
                   });
               }
            }else{
               res.json({
                   success: false,
                   msg : 'El usuario no existe'
               });
            }
        }
    )
};

