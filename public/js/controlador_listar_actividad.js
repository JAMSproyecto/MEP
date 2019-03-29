'use strict';


const tabla = document.querySelector('#tbl_listar_actividad tbody');
const input_filtrar = document.querySelector('#txt_filtrar');

<<<<<<< HEAD
debugger;
=======

>>>>>>> 33e6a9c0d46adc58c6432cfe77dc10076dd2d059
const actividades = listar_todas_actividades();

let mostrar_datos = () =>{
    
    let filtros = input_filtrar.value;
    tabla.innerHTML = '';
   
    for (let i = 0; i < actividades.length; i++){

        if (actividades[i]['actividad'].toLowerCase().includes(filtros.toLowerCase())) {

            let fila = tabla.insertRow();

        fila.insertCell().innerHTML = actividades[i]['actividad'];
        fila.insertCell().innerHTML = actividades[i]['fecha'];
        fila.insertCell().innerHTML = actividades[i]['hora_inicio'];
        fila.insertCell().innerHTML = actividades[i]['finaliza'];
        fila.insertCell().innerHTML = actividades[i]['costo'];
        fila.insertCell().innerHTML = actividades[i]['lugar'];
        fila.insertCell().innerHTML = actividades[i]['finalidad'];
        fila.insertCell().innerHTML = actividades[i]['detalles'];

     

    }
    

}
};

input_filtrar.addEventListener('keyup', mostrar_datos);

mostrar_datos();
