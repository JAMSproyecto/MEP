'use strict';

const enlaces = document.querySelectorAll('#menu-derecho a');
const botonCerrarSesion = document.querySelector('#boton_cerrar')

let conectado = sessionStorage.getItem('conectado');
let tipoUsuario = sessionStorage.getItem('tipoUsuario');


if(null !== conectado && conectado === true){
    if(null !== tipoUsuario){
        switch(tipoUsuario){
            case 'administrador':
        
            break;
            case 'PadreFamilia':
                enlaces[0].classList.add('ocultar');
                enlaces[1].classList.add('ocultar');
                enlaces[2].classList.add('ocultar');
            break;
        
            default: 
        
            break;
        }
    }else{
		console.error('No se encontró el tipo de usuario');
	}

}else{
    window.location.href = 'inicio_sesion.html';
}

let cerrar_sesion = () => {
    sessionStorage.clear();
    window.location.href = 'inicio_sesion.html';
};

botonCerrarSesion.addEventListener('click', cerrar_sesion);