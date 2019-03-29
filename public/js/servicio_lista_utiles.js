'use strict';

let registrar_lista_utiles  = ( ptipo, panno, pnombre) =>{

    let request = $.ajax({
        url: "http://localhost:4000/api/registrar_lista_utiles",
        method: "POST",
        data: {
            tipo: ptipo,
            nombre: pnombre,
            anno: panno,
          
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

let obtener_lista_utiles = () =>{
<<<<<<< HEAD
  sessionStorage.setItem('id_cedu',4);
  let codigo_inst = sessionStorage.getItem('id_cedu');
=======
>>>>>>> parent of 22ecb77... Merge branch 'master' of https://github.com/JAMSproyecto/MEP
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

let agregar_articulo  = (pid_lista, pcodigo_articulo, pcantidad) =>{

  let request = $.ajax({
      url: "http://localhost:4000/api/agregar_articulo",
      method: "POST",
      data: {
          id_lista: pid_lista,
         codigo_articulo: pcodigo_articulo,
         cantidad : pcantidad
      }, 
      dataType: "json",
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
  });

  request.done(function (msg)
      {
          
  });

  request.fail(function (jqXHR, textStatus) {
      swal.fire({
        type: 'error',
        title: 'Artículo no enviada',
        text: 'Ocurrió un error inesperado, por favor intente de nuevo'
      });
    });
};


let buscar_por_id = (id) =>{
  let lista = [];

  let request = $.ajax({
    url: "http://localhost:4000/api/buscar_lista_id/" +id ,
    type: "GET",
    data: {
    },
    dataType: "json",
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    async: false
  });

  request.done(function (res) {
    lista = res.lista;

  });

  request.fail(function (jqXHR, textStatus) {

  });
  return lista;
};