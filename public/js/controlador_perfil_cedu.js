'use strict';

let crearPerfil = (perfil)=>{
    document.querySelector('#titulo_centro_educativo').innerHTML = perfil.Nombre;
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