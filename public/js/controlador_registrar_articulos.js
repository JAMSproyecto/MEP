'use strict';

const input_codigo = document.querySelector('#txt_codigo');
const input_nombre = document.querySelector('#txt_nombre');
const input_descripcion = document.querySelector('#txt_descripcion');

const boton_agregar = document.querySelector('#btn_agregar');

let validar = () => {
    let error = false;

    if (input_codigo.value == '') {
        error = true;
        input_codigo.classList.add('error_input');
    } else {
        input_codigo.classList.remove('error_input');
    }

    if (input_nombre.value == '') {
        error = true;
        input_nombre.classList.add('error_input');
    } else {
        input_nombre.classList.remove('error_input');
    }

    if (input_descripcion.value == '') {
        error = true;
        input_descripcion.classList.add('error_input');
    } else {
        input_descripcion.classList.remove('error_input');
    }

    return error;
};

let obtener_datos = () => {
    if (validar() == false) {
        let codigo = input_codigo.value;
        let nombre = input_nombre.value;
        let descripcion = input_descripcion.value;

        registrar_articulo(codigo, nombre, descripcion);
    } else {
        swal.fire({
            type: 'warning',
            title: 'El articulo no fue enviado',
            text: 'Por favor revise los campos resaltados'
        });
    }
};  

boton_agregar.addEventListener('click', obtener_datos);