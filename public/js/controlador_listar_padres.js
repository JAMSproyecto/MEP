'use strict';

const tabla = document.querySelector('#tabla_padres_registrados tbody');
const input_filtrar = document.querySelector('#txt_filtrar');



let irAlPerfil = (pcorreo) => {
	localStorage.setItem('adminVerPerfilPadre', pcorreo);
	alert('Ir al perfil: '+localStorage.getItem('adminVerPerfilPadre'));
};


let padresFamilia = listar_padres();



let mostrar_datos = () => {
    let filtros = input_filtrar.value;
    tabla.innerHTML = '';
    for (let i = 0; i < padresFamilia.length; i++) {

        if (padresFamilia[i]['nombre'].toLowerCase().includes(filtros.toLowerCase()) 
            ||padresFamilia[i]['apellido'].toLowerCase().includes(filtros.toLowerCase())) {

            let fila = tabla.insertRow();

            fila.insertCell().innerHTML = padresFamilia[i]['nombre'];
            fila.insertCell().innerHTML = padresFamilia[i]['apellido'];
            fila.insertCell().innerHTML = padresFamilia[i]['segundoApellido'];
            fila.insertCell().innerHTML = padresFamilia[i]['correo'];
            fila.insertCell().innerHTML = padresFamilia[i]['provincia'];
            fila.insertCell().innerHTML = padresFamilia[i]['canton'];
            fila.insertCell().innerHTML = '<button onClick="irAlPerfil('+padresFamilia['correo']+'); classlist.add(); return false;">Ver más</button>';
        }
    }
};

input_filtrar.addEventListener('keyup', mostrar_datos);
    mostrar_datos();