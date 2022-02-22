let formulario = document.forms["idFormulario"];
let boton = document.getElementById("idEnviar");

boton.addEventListener("click", confirmarValidacion, false);


/*------------VALIDACION GLOBAL--------------------*/
function confirmarValidacion(e){
	//borramos mensajes de error 
	let errores = document.getElementsByClassName("error");
	for (var i = 0; i < errores.length -1; i+=2){
		errores[i].innerHTML = "";
	}

	//borramos los mensajes de la api
	for (var i = 0; i < 3; i++){
		formulario.elements[i].setCustomValidity("");
	}

	//deshabilitamos el boton
	this.disabled = false;

	if (confirmarJS(e) && confirmarApi(e) && confirm("¿Deseas enviar estos datos?")) {
		
		return true;
	}
	
	else{
		e.preventDefault();
		this.disabled = false;
		return false;
	}
}


/*-----------------VALIDACION JS-----------------------------*/

function confirmarJS(e){
	return validarNombre() && validarApellido() && validarEdad();
}

function validarNombre(){
	let nombre = formulario.elements["idNombre"];
	let errorNombre = document.getElementById("errorNombreJs");

	//si esta vacio
	if (nombre.value == "") {
		nombre.focus();
		errorNombre.innerHTML = "El nombre no debe estar vacio.";
		return false;
	}

	//si es un numero
	else if(!isNaN(nombre.value)){
		nombre.focus();
		errorNombre.innerHTML = "El nombre solo puede estar formado por letras.";
		return false;	
	}

	//si no cumple con la extension
	else if (nombre.value.length < 2 || nombre.value.length > 12) {
		nombre.focus();
		errorNombre.innerHTML = "El nombre debe tener minimo 2 y maximo 12 letras.";
		return false;		
	}
	return true;
}

function validarApellido(){
	let apellido = formulario.elements["idApellido"];
	let errorApellido = document.getElementById("errorApellidoJs");
	if (apellido.value == "") {
		apellido.focus();
		errorApellido.innerHTML = "No debe estar vacio y deben ser solo letras";
		return false;
	}
	return true;
}

function validarEdad(){
	let edad = formulario.elements["idEdad"];
	let errorEdad = document.getElementById("errorEdadJs");
	if (edad.value == "") {
		edad.focus();
		errorEdad.innerHTML = "No debe estar vacio";
		return false;
	}

	if(isNaN(edad.value)){
		errorEdad.innerHTML = " Deben ser solo numeros";
		return false;
	}
	return true;
}

/*-----------------VALIDACION API----------------------------*/

function confirmarApi(e){
	return validarNombreApi() && validarApellidoApi() && validarEdadApi();
}

function validarNombreApi(){
	let nombre = formulario.elements["idNombre"];
	let errorNombre = document.getElementById("errorNombreApi");
	if (nombre.checkValidity() == false) {
		if (nombre.validity.typeMismatch) {
			console.log("cadena no valida");
			nombre.setCustomValidity("El nombre debe estar formado por letras.")
		}
		else if(nombre.validity.rangeUnderflow || nombre.validity.rangeOverflow){
			console.log("cadena no cumple extension");
			nombre.setCustomValidity("El nombre con la extension requerida.");
		}
		nombre.focus();
		errorNombre.innerHTML = nombre.validationMessage;
		return false;
	}
	console.log("no ha pasado por la api");
	return true;
}

function validarApellidoApi(){
	let apellido = formulario.elements["idApellido"];
	let errorApellido = document.getElementById("errorApellidoApi");
	if (apellido.checkValidity() == false) {
		if (apellido.validity.typeMismatch) {
			console.log("cadena no valida");
			apellido.setCustomValidity("El apellido debe estar formado por letras.")
		}
		else if(apellido.validity.rangeUnderflow || apellido.validity.rangeOverflow){
			console.log("cadena no cumple extension");
			apellido.setCustomValidity("El apellido con la extension requerida.");
		}
		apellido.focus();
		errorApellido.innerHTML = apellido.validationMessage;
		return false;
	}
	console.log("no ha pasado por la api");
	return true;
}

function validarEdadApi(){
	let edad = formulario.elements["idEdad"];
	let errorEdad = document.getElementById("errorEdadApi");
	if (edad.checkValidity() == false) {
		if (edad.validity.typeMismatch) {
			console.log("cadena no valida");
			edad.setCustomValidity("El edad debe estar formado por numeros.")
		}
		else if(edad.validity.rangeUnderflow || edad.validity.rangeOverflow){
			console.log("cadena no cumple extension");
			edad.setCustomValidity("El edad con la extension requerida.");
		}
		edad.focus();
		errorEdad.innerHTML = edad.validationMessage;
		return false;
	}
	console.log("no ha pasado por la api");
	return true;
}