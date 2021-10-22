/**
 * Crea un buscador para que tus visitantes puedan encontrar un texto cualquiera en tus páginas. Pide al
    usuario que introduzca la cadena a buscar. Permitir las opciones de:
    • Búsqueda de palabras completas.
    • Distinguir entre mayúsculas y minúsculas 
 */


    //al momento de enviar, comprobaremos primero si el input esta vacio
    //despues si los checkbox estan habilitados
    //sera buscarlo en un documento de texto 

    function buscar(){
        let vs = null;

        vs = window.open("Ejercicio01Auxiliar.html");
    }

    function recogerTexto(){
        return document.getElementById("text").innerHTML;
    }

    function comprobarPrimerCB(){
        return document.getElementById("completa").checked;
    }

    function comprobarSegundoCB(){
        return document.getElementById("distincion").checked;
    }
    //sabemos cuando esta checked, pero no como contemplar cada caso
