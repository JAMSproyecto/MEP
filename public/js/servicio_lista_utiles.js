'use strict';

let registrar_lista_utiles  = (pnombre, ptipo, panno, pcodigo) =>{

    let request = $.ajax({
        url: "http://localhost:4000/api/registrar_lista_utiles",
        method: "POST",
        data: {
            nombre: pnombre,
            tipo: ptipo,
            anno: panno,
            codigo: pcodigo
        }, 
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
    });

    request.done(function (msg)
        {
            swal.fire({
                type: 'success',
                title: 'Lista de utiles enviada',
                text: 'el registro fue éxitoso'
              });
    });

    request.fail(function (jqXHR, textStatus) {
        swal.fire({
          type: 'error',
          title: 'lista de utiles no enviada',
          text: 'Ocurrió un error inesperado, por favor intente de nuevo'
        });
      });
};

let listar_lista_utiles = () =>{
    let coleccion_utiles = [];

    let request = $.ajax({
        url: "http://localhost:4000/api/listar_lista_utiles",
        method: "GET",
        data: {
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        async: false
      });
    
      request.done(function (res) {
        coleccion_utiles = res.coleccion_utiles;
    
      });
    
      request.fail(function (jqXHR, textStatus) {
    
      });
      return coleccion_utiles;
      
};