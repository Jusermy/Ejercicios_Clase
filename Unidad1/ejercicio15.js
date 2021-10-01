window.onload=function(){
	function esPrimo(n){
		var primo = true;
		//recorremos los posibles divisores desde 2 hasta la mitad del numero introducido hasta que encontremos uno que de resto 0
		for(var m = 2; m <= n/2 && primo; m++){
			if (n%m == 0) {
				primo = false;
			}
		}
		//si es primo
		return primo ? true : false;
	}

	var esPm = function(n){
		var primo = true;
		//recorremos los posibles divisores desde 2 hasta la mitad del numero introducido hasta que encontremos uno que de resto 0
		for(var m = 2; m <= n/2 && primo; m++){
			if (n%m == 0) {
				primo = false;
			}
		}
		//si es primo
		return primo ? true : false;
	}

	var esP = (n) => {
		var primo = true;
		//recorremos los posibles divisores desde 2 hasta la mitad del numero introducido hasta que encontremos uno que de resto 0
		for(var m = 2; m <= n/2 && primo; m++){
			if (n%m == 0) {
				primo = false;
			}
		}
		//si es primo
		return primo ? true : false;
	};

	var num = parseInt(prompt("Introduzca numero"));

	if (isNaN(num) == false) {
		document.getElementById("c1").innerHTML = `${num}`;
		document.getElementById("c2").innerHTML = `${esPrimo(num)}`;
	}
	else{
		document.getElementById("c1").innerHTML = "Error";
		document.getElementById("c2").innerHTML = "Error";
	}
}