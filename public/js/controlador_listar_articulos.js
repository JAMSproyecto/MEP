'use strict';

const tabla = document.querySelector('#tbl_articulos tbody');

let mostrar_datos = () =>{
    let articulos = listar_articulos();

    for (let i = 0; i < articulos.length; i++) {
      
        let fila = tabla.insertRow();
        fila.insertCell().innerHTML = articulos[i]["codigo"];
        fila.insertCell().innerHTML = articulos[i]["nombre"];
        fila.insertCell().innerHTML = articulos[i]["descripcion"];
    }
};

mostrar_datos();