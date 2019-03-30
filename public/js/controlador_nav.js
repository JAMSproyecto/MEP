'use strict';

const enlaces = document.querySelectorAll('#menu-derecho a');
const botonCerrarSesion = document.querySelector('#boton_cerrar')
const lblNombreUsuario = document.querySelector('#lblNombreUsuario')

let conectado = sessionStorage.getItem('conectado');
let tipoUsuario = sessionStorage.getItem('tipoUsuario');
let nombreUsuario = sessionStorage.getItem('nombreUsuario');

let cerrar_sesion = () => {
    sessionStorage.clear();
    window.location.replace('inicio_sesion.html');
};

if( null !== conectado && ('true' === conectado ||  true === conectado) ){
    switch(tipoUsuario.toLowerCase()){
        case 'superadmin':

        sessionStorage.setItem('padreDesdeAdmin', true);

        break;
        case 'centroeducativo':
			
        break;
        case 'padrefamilia':
            lblNombreUsuario.innerHTML = nombreUsuario || '';
            sessionStorage.setItem('padreDesdeAdmin', false);
			
            enlaces[0].classList.add('ocultar');
            enlaces[1].classList.add('ocultar');
            enlaces[2].classList.add('ocultar');
			
        break;

        default: 
            console.log("cerrando sesión porque el tipo es: " + tipoUsuario);
	        cerrar_sesion();
        break;
    }

}else{
	console.log("cerrando sesión porque no está conectado" + typeof conectado);
	cerrar_sesion();
}

botonCerrarSesion.addEventListener('click', cerrar_sesion);