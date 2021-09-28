window.onload=function(){
	var x = parseInt(prompt("Numero x"));
	var y = parseInt(prompt("Numero y"));

	//si ambos son numeros
	if (isNaN(x)===false && isNaN(y)===false) {
		//si los numeros cumplen con los rangos
		if ((x >= -50 && x <= 50) && (y <= 20)) {
			document.getElementById("c1").innerHTML= x + "  " + y;
			//creamos un resultado donde introduciremos todas las operaciones
			var resultado = "";
			for(var i = 1; i <= y; i++){
				resultado += `${x} * ${i} = ${x*i} <br>`;
			}
			document.getElementById("c2").innerHTML = resultado;
		}
		else{
			document.getElementById("c1").innerHTML= "Error";
			document.getElementById("c2").innerHTML= "Error";
		}
	}
	else{
		document.getElementById("c1").innerHTML= "Error";
		document.getElementById("c2").innerHTML= "Error";
	}
}