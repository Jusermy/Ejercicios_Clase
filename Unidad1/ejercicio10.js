window.onload=function(){
	var num = parseInt(prompt("Introduzca numero"));
	//si es un numero y es diferente de -1
	if (isNaN(num)=== false && num != -1) {
		//creamos un boleando que nos diga si ha habido un 10 en el proceso
		var hayDiez = false;
		//creamos una variable para la cadena
		var resultado = "";
		resultado += `${num}`;
		//mientras el numero introducido no sea -1 y sigue siendo un numero
		while(num != -1 && isNaN(num)=== false){
			num = parseInt(prompt("Introduzca numero"));
			//si el numero introducido es valido
			if (isNaN(num)===false) {
				//lo añadimos al resultado
				resultado += `, ${num}`;
				//si es un 10, y no se ha encontrado otro antes
				if (num == 10 && !hayDiez) {
					hayDiez = true;
				}
			}
			//en caso de no ser valido
			else{	
				num = -1;
				resultado += num;
			}
		}
		document.getElementById("c1").innerHTML = resultado;
		if (!hayDiez) {
			document.getElementById("c2").innerHTML = "NO";
		}
		else{
			document.getElementById("c2").innerHTML = "SI";
		}
	}
	else{
		document.getElementById("c1").innerHTML= "Error";
		document.getElementById("c2").innerHTML= "Error";
	}
}