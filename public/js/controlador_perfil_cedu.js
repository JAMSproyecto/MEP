'use strict';

let crearPerfil = (perfil)=>{
    document.querySelector('#titulo_centro_educativo').innerHTML = perfil.Nombre;

    let actividad = document.createElement('div');
    actividad.classList.add('actividad');
    
    let strong = document.createElement('strong');
    strong.classList.add('nombre__actividad');

    let fecha = document.createElement('p');
    fecha.classList.add('fecha__actividad');

    let hora = document.createElement('p');
    fecha.classList.add('hora__actividad');

};

window.addEventListener('load', () => {
    let id;

    switch(sessionStorage.getItem("tipoUsuario").toLowerCase()){
        case 'padrefamilia':
        id = sessionStorage.getItem('padreVerPerfilCEdu')
        break;

        case 'centroeducativo':
        id = sessionStorage.getItem('id');
        break;

        default:
        break;
    }
    let perfil = get_obtenerPerfil(id);
    crearCalendario(id);
    crearPerfil(perfil);    

});