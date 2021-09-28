window.onload=function(){
	var num = parseInt(prompt("Introduzca un numero"));
	if (isNaN(num)===false && num >= 1) {
		document.getElementById("piramide").innerHTML += `El numero introducido es: ${num} <br>`;
		var resultado = "";
		for(var i = 1; i <= num; i++){
			for(var y = 1; y <= i; y++){
				resultado += "*";
			}
			resultado+= "<br>";
		}
		document.getElementById("piramide").innerHTML += resultado;
	}
}