'use strict';

document.addEventListener('load', () => {
    if(sessionStorage.getItem("tipoUsuario").toLowerCase() === 'padrefamilia'){
        let id = sessionStorage.getItem('padreVerPerfilCEdu');
        let perfil = get_obtenerPerfil(id);
        console.log(perfil);
    }
});