window.onload=function(){
	var num = parseInt(prompt("Introduzca el numero."));

	//el numero debe ser mayor que 2
	if (num >= 2) {
		//introducimos el numero en entrada
		document.getElementById("c1").innerHTML= num;
		//creamos un numero que ira desde cero hasta el numero introducido
		var par = 2;
		while(par <= num){
			//si el numero introducido es par
			if (par %2== 0) {
				document.getElementById("c2").innerHTML += par;
			}
			document.getElementById("c2").innerHTML += "<br>";
			par++;
		}
	}
	else {
		document.write("Numero no correcto");
	}
}