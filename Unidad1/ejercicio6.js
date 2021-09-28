window.onload=function(){
	var num = parseInt(prompt("Introduzca calificacion:"));
	//preguntamos si el numero NO es un numero
	if (isNaN(num)===false) {
		if (num >= 0 && num < 3) {
			console.log("entra 1");
			document.getElementById("c1").innerHTML=num;
			document.getElementById("c2").innerHTML="Muy deficiente";
		}
		else if(num >= 3 && num < 5){
			console.log("entra 2");
			document.getElementById("c1").innerHTML=num;
			document.getElementById("c2").innerHTML="Insuficiente";
		}
		else if(num >= 5 && num < 6){
			console.log("entra 3");
			document.getElementById("c1").innerHTML=num;
			document.getElementById("c2").innerHTML="Bien";
		}
		else if(num >= 6 && num < 9){
			console.log("entra 4");
			document.getElementById("c1").innerHTML=num;
			document.getElementById("c2").innerHTML="Notable";
		}
		else if(num >= 9 && num <= 10){
			console.log("entra 5");
			document.getElementById("c1").innerHTML=num;
			document.getElementById("c2").innerHTML="Sobresaliente";
		}
	}
	else{
		console.log("entra 6");
		document.getElementById("c1").innerHTML="Numero no correcto";
		document.getElementById("c2").innerHTML="Error";	
	}
}