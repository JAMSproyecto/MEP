'uset strict';
const cita_modelo = require('./citas.model');
const nodemailer = require('nodemailer');



/*funcion para mandar correo al padre*/
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'soporte.mep.costarica@gmail.com',
        pass: '1Proyecto9'
    }
});
/* fin de funcion para mandar al padre*/

/*funcion para registrar nueva cita*/
module.exports.registrar = (req, res) => {


    /*
    let fecha = new Date(req.body.Fecha + ' 00:00:00 GMT-06:00');

   2019-03-10 00:00:00 GMT-06:00

    2019-03-10  

    2019-03-10 00:00:00 GMT-00:00


    let dia = fecha.getDate();
    let mes = fecha.getMonth()+1;
    let annio = fecha.getFullYear();


   console.log(dia,mes,annio);
    if(mes < 10){
        mes = '0' + mes;
    }

    if (dia < 10){
        dia = '0' + dia;
    }
    /**
 * Retorna la fecha en el formato 'YYYY-MM-DD hh:mm:ss'
 * @return {String}
 */

    /*
   let obtenerFecha = () => {
       const fecha = new Date();
       const dia_semana = fecha.getDay();
       const anio = fecha.getFullYear();
       let dia_mes = fecha.getDate();
       let mes = fecha.getMonth();
       let h = fecha.getHours();
       let m = fecha.getMinutes();
       let s = fecha.getSeconds();
       mes += 1;
       if (mes < 10) {
           mes = '0' + mes;
       }
       if (dia_mes < 10) {
           dia_mes = '0' + dia_mes;
       }
       if (h < 10) {
           h = '0' + h;
       }
       if (m < 10) {
           m = '0' + m;
       }
       if (s < 10) {
           s = '0' + s;
       }
       return anio + '-' + mes + '-' + dia_mes + ' ' + h + ':' + m + ':' + s;
   };
   
       
       console.log(req.body);
   aqui estoy validando la fecha, la convierto de string a numeros
   junto con la hora
   
   
   
   let calendario =  dia +'-'+ mes + '-' + annio;*/
    let nueva_cita = new cita_modelo(
        {
            Nombre: req.body.Nombre,
            Apellidos: req.body.Apellidos,
            Telefono: req.body.Telefono,
            Correo: req.body.Correo,
            Fecha: req.body.Fecha,
            Hora: req.body.Hora,
            Motivo: req.body.Motivo,
            Comentario: req.body.Comentario,
            Codigo: req.body.Codigo

        }
    );



    nueva_cita.save(
        function (error) {
            if (error) {
                res.json(
                    {
                        success: false,
                        msg: `No se logro guardar los datos ${error}`

                    }
                );

            } else {
                /*envio el correo de confirmacion al padre*/
                let mailOptions = {
                    from: 'soporte.mep.costarica@gmail.com',
                    to: nueva_cita.Correo,
                    subject: 'Registro de Cita recibido',
                    html: `<head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>My Email Subject</title><meta name="referrer" content="never"><meta type="xrm/designer/setting" name="type" value="marketing-designer-content-editor-document"><meta type="xrm/designer/setting" name="font-family" value="Verdana, Arial, sans-serif" datatype="font" label="Font Family"><meta type="xrm/designer/setting" name="body-text-size" value="14px" datatype="text" label="Body Font Size"><meta type="xrm/designer/setting" name="body-text-color" value="#000000" datatype="color" label="Body Text Color"><style>body {font-family: /* @font-family */Verdana, /* @font-family */Arial, /* @font-family */sans-serif/* @font-family */;font-size: /* @body-text-size */14px/* @body-text-size */;color: /* @body-text-color */ #000000 /* @body-text-color */;}</style></head><body><div class="wrapperContainer" data-container="true"> <div data-editorblocktype="Image"><div class="imageWrapper"><img src="https://mktdplp102wuda.azureedge.net/735c6d3d-2d52-e911-a825-000d3a1ee335/qWYyek6L9kY_PSgR0YZ0uvGr8WRC0boKJIC5k7Emecs!"></div>
                    </div><div data-editorblocktype="Divider"><div class="dividerWrapper" align="center">
                    <table aria-role="presentation" style="padding: 0px; margin: 0px; width: 100%">
                        <tbody>
                            <tr style="padding: 0px;">
                                <td style="margin:0px; padding-left: 0px; padding-right: 0px; padding-top: 5px; padding-bottom: 5px; vertical-align:top;">
                                <p style="margin: 0px; padding: 0px; border-bottom: 3px solid rgb(0, 128, 255); line-height: 0px; width: 100%;"><span>&nbsp;</span></p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                    
                    </div><div data-editorblocktype="Text"><p><strong><span style="font-size:18px;">Estimado ${nueva_cita.Nombre},</span></strong></p>
                    
                    <p></p>
                    
                    
                    
                    
                    
                    
                    </div><div data-editorblocktype="Text"><p>Has programado una cita para el día ${nueva_cita.Fecha} a las ${nueva_cita.Hora}.</p>
                    
                    <p></p>

                    
                    </div><div data-editorblocktype="Divider"><div class="dividerWrapper" align="center">
                    <table aria-role="presentation" style="padding: 0px; margin: 0px; width: 100%">
                        <tbody>
                            <tr style="padding: 0px;">
                                <td style="margin:0px; padding-left: 0px; padding-right: 0px; padding-top: 5px; padding-bottom: 5px; vertical-align:top;">
                                <p style="margin: 0px; padding: 0px; border-bottom: 3px solid rgb(0, 128, 255); line-height: 0px; width: 100%;"><span>&nbsp;</span></p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                    </div><div data-editorblocktype="Image"><div class="imageWrapper"><img src="">
                    
                    </div>
                    </div></div></body>`,

                };
                transporter.sendMail(mailOptions, function (error, info) {
                    if (error) {
                        console.log(error);
                    } else {
                        console.log('Email sent: ' + info.response);
                    }
                });

                res.json(
                    {
                        success: true,
                        msg: `Registo exitoso`
                    }
                );
            }
        }
    );
}
/*fin de funcion de registro de nueva cita*/

/*funcion de listar citas*/
module.exports.listar_todos = (req, res) => {
    cita_modelo.find().then(
        function (citas) {
            console.log(citas);
            if (citas.length > 0) {
                res.json(
                    {
                        success: true,
                        citas: citas
                    }
                )
            } else {
                res.json(
                    {
                        success: false,
                        comentarios: 'No se encontraron citas'
                    }
                )
            }
        }

    )
};
/*fin de funcion listar citas*/
