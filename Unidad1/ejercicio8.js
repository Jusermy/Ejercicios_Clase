window.onload=function(){
	var num = parseInt(prompt("Introduzca el numero"));
	//comprobamos si es un numero
	if (isNaN(num) === false) {
		var impar = num;
		document.getElementById("c1").innerHTML = num;
		while (impar >=1 ){
			if (impar%2 != 0) {
				document.getElementById("c2").innerHTML += impar;
			}
			document.getElementById("c2").innerHTML += "<br>";
			impar--;
		}
	}
	else{
		document.getElementById("c1").innerHTML= "Error";
		document.getElementById("c2").innerHTML= "Error";
	}
}