'use strict';

const tabla = document.querySelector('#tbl_lista_utiles tbody');

let mostrar_datos = () =>{
    let lista_utiles = listar_lista_utiles();

    for (let i= 0; i < lista_utiles.length; i++) {
       let fila = tabla.insertRow();
       fila.insertCell().innerHTML = lista_utiles[i]["tipo"];
       fila.insertCell().innerHTML = lista_utiles[i]["nombre"];
       fila.insertCell().innerHTML = lista_utiles[i]["anno"];  
       fila.insertCell().innerHTML = lista_utiles[i]["codigo"];    
    }
};

mostrar_datos();