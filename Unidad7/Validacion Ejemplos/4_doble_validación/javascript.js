
// Al hacer click en el botón de enviar tendrá que llamar a la la función validar 
// que se encargará de validar el formulario.
document.getElementById("idEnviar").addEventListener('click', validar, false);
let formulario=document.forms["idFormulario"]

/****************************************************************
 * FUNCIÓN GENERAL DE VALIDACIÓN
 * Unificar los dos tipos de validación
 *          - Mediante JS
 *          - Mediante Api de acceso a validación de html
 ****************************************************************/
function validar(e){
   // IMPORTANTE!!! Realizar limpieza del formulario, a nivel de ClassName
   for (let elem = 0; elem < 5; elem++) {
       formulario.elements[elem].className = "";
       
   }

   // IMPORTANTE!!! Realizar limpieza del formulario, a nivel de Spam de error
    let spamError = document.getElementsByClassName("errorSpam");
    for (let elem = 0; elem < spamError.length; elem++) {
        spamError[elem].innerHTML = "";
        
    }

    //Borramos los mensajes de la api
    for(let elem = 0; elem < 5; elem++){
        formulario.elements[elem].setCustomValidity("");    
    }

   // IMPORTANTE!!! Deshabilitamos el botón
    this.disabled = false;

    if(validarAPIHTML(e) && validarJS(e) && confirm("¿Deseas enviar el formulario?")){
        e.preventDefault();
        return true;

    }else{
        e.preventDefault();
        this.disabled = false;
        return false;
    }
}


/********************************************************************************************
 *******************************************************************************************
 *************** FUNCIÓN PARA VALIDAR DE FORMA MANUAL MEDIANTE JAVASCRIPT
 *******************************************************************************************
 *******************************************************************************************/
function validarJS(eventopordefecto) {
    
    // Validamos cada uno de los apartados con llamadas a sus funciones correspondientes.
    return validarNombre() && validarEdad() && validarMatricula() && validarProvincia();             
}
/****************************************************************************
 * FUNCIÓN INDIVIDUALES DE CADA CAMPO
 /***************************************************************************/

function validarNombre() {
    let inputNombre= formulario.elements["idNombre"]

    if (inputNombre.value == ""){        
        formulario.elements["idNombre"].className = "error";
        formulario.elements["idNombre"].focus();
        document.getElementById('idNombreError').innerHTML= "El campo: " + formulario.elements["idNombre"].name + " no puede estar en blanco";
        return false
    }
    return true;
    
}

/***************************************************************************/
/***************************************************************************/

function validarEdad() {
    let inputEdad=formulario.elements["idEdad"];
    if(inputEdad.value == ""){
        formulario.elements["idEdad"].className = "error";
        formulario.elements["idEdad"].focus();
        document.getElementById('idEdadError').innerHTML = "El campo: " + formulario.elements["idEdad"].name + " no puede  estar en blanco";
        return false;
    }

    // IMPORTANTE!! Realizar la validación de la edad mediante javascript.
    if (isNaN(inputEdad.value)) {
        return false;
    }
    
    return true;
    
}
  
/***************************************************************************/
/***************************************************************************/

function validarMatricula() {
    
    let inputMatricula=formulario.elements["idMatricula"]
    let regExp = /^\d{4}\s\w{3}/i; //4 numeros, puede tener o no espacio 3 letras
    // IMPORTANTE!! Realizar la validación de la matrícula mediante javascript y utilizando expresiones regulares
    if (inputMatricula.value == "" || regExp.test(formulario.elements["idMatricula"].value) == false) {
        formulario.elements["idMatricula"].className = "error";
        formulario.elements["idMatricula"].focus();
        document.getElementById("idMatriculaError").innerHTML = "El campo " + formulario.elements["idMatricula"].name + " no es correcto";
        return false;
    }

    return true;
}

/***************************************************************************/
/***************************************************************************/

function validarProvincia() {
    let selectProvincia=formulario.elements["idProvincia"]
    const valoresProvincia = new Set(["Gr","Ma"]);
    let correcto = false;
    // IMPORTANTE!! Realizar la validación de la provincia mediante javascript   
    valoresProvincia.forEach(function(elem){ 
        if(elem == selectProvincia[selectProvincia.selectedIndex].value){
            correcto = true;
        } 
    });

    if (correcto == false) {
        formulario.elements["idProvincia"].className = "error";
        formulario.elements["idProvincia"].focus();
        document.getElementById("idProvinciaError").innerHTML = "Escoja una opcion de las provincias";
    }
    return correcto;
}


/********************************************************************************************
 *********************************************************************************************
 ******** FUNCIÓN PARA VALIDAR, MEDIANTE EL USO DE LA API DE ACCESO A LA VALIDACIÓN DE HTML 
 *******************************************************************************************
 ********************************************************************************************/

function validarAPIHTML(eventopordefecto) {   
    return validarNombreApi() && validarEdadApi() && validarMatriculaApi() && validarProvinciaApi();             
}

function validarNombreApi(){
    let inputNombre= formulario.elements["idNombre"];
    if (inputNombre.checkValidity() == false) {
        if (inputNombre.validity.valueMissing) {
            inputNombre.setCustomValidity("El campo no puede estar vacio");
        }
        else if (inputNombre.validity.typeMismatch) {
            inputNombre.setCustomValidity("El nombre debe estar conformado por letras");
        }
        document.getElementById("idNombreError").innerHTML = inputNombre.validationMessage;
        return false;
    }
    return true;
}

function validarEdadApi(){
    let inputEdad= formulario.elements["idEdad"];
    if (inputEdad.checkValidity() == false) {
        if (inputEdad.validity.typeMismatch) {
            inputEdad.setCustomValidity("La edad debe estar formada por numeros")
        }
        document.getElementById("idEdadError").innerHTML = inputEdad.validationMessage;
        return false;
    }
    return true;
}

function validarMatriculaApi(){
    let inputMatricula= formulario.elements["idMatricula"];
    if (inputMatricula.checkValidity() == false) {
        if (inputMatricula.validity.valueMissing) {
            inputMatricula.setCustomValidity("El campo no puede estar vacio")
        }
        document.getElementById("idMatriculaError").innerHTML = inputMatricula.validationMessage;
        return false;
    }
    return true;
}

function validarProvinciaApi(){
    let inputProvincia= formulario.elements["idProvincia"];
    if (inputProvincia.checkValidity() == false) {
        if (inputProvincia.validity.valueMissing) {
            inputProvincia.setCustomValidity("El campo no puede estar vacio")
        }
        document.getElementById("idProvinciaError").innerHTML = inputProvincia.validationMessage;
        return false;
    }
    return true;
}