'use strict';

const Input_Usuario = document.querySelector('#input_usuario');
const Input_Contrasenna = document.querySelector('#txt_contrasenna');
const Boton_Ingresar = document.querySelector('#boton_ingresar');

let mostrarAlerta = (mensaje) => {
    Swal.fire({
        toast: false,
        title: mensaje,
        type: 'warning',
        position: 'center',
        timer: 10000,
        //animation: false,
        //  customClass: 'animated tada',
        showConfirmButton: true
    });
};


let obtener_Datos = () => {
    let usuario = Input_Usuario.value;
    let contrasenna = Input_Contrasenna.value;

    let errorBlancos = validar(usuario, contrasenna);

    if (!errorBlancos) {
        let usuarioAceptado = validar_credenciales(usuario, codificar(contrasenna));
        if (usuarioAceptado) {

            const tipoUsuario = sessionStorage.getItem('tipoUsuario');

            if ('undefined' !== typeof tipoUsuario && null !== tipoUsuario) {
                switch (tipoUsuario.toLowerCase()) {
                    case 'superadmin' :
                        window.location.replace('principal_admin.html');
                        break;
                    case 'centroeducativo' :
                        window.location.replace('principal_centro.html');
                        break;
                    case 'padrefamilia' :
                        window.location.replace('principal_padres.html');
                        break;
                    default :
                        mostrarAlerta('Tipo de usuario desconocido');
                        sessionStorage.clear();
                        window.location.replace('inicio_sesion.html');
                        break;
                }
            } else {
                mostrarAlerta('Error de sesión');
                sessionStorage.clear();
                window.location.replace('inicio_sesion.html');
            }

        } else {
            mostrarAlerta('El nombre de usuario o la contraseña son incorrectos');
        }
    } else {
        mostrarAlerta('Por favor ingrese el usuario y la contraseña');
    }
};

let validar = (pusuario, pcontrasenna) => {
    let error = false;

    if (pusuario == '') {
        error = true;
        input_usuario.classList.add('error_input');
    } else {
        input_usuario.classList.remove('error_input');
    }

    if (pcontrasenna == '') {
        error = true;
        txt_contrasenna.classList.add('error_input');
    } else {
        txt_contrasenna.classList.remove('error_input');
    }

    return error;
};

Boton_Ingresar.addEventListener('click', obtener_Datos);