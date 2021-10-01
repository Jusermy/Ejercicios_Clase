window.onload = function(){
	function esBisiesto(anyo){
		//return ((anyo%100 != 0 && anyo%4==0) || anyo% 400 == 0) ?  1:  0;
		if ((anyo%100 != 0 && anyo%4==0) || anyo% 400 == 0){	
			return 1;
		}
		return 0;
	}
	var esBis = function(anyo){
		if ((anyo%100 != 0 && anyo%4==0) || anyo% 400 == 0){	
			return 1;
		}
		return 0;
	}
	var esB = anyo => ((anyo%100 != 0 && anyo%4==0) || anyo% 400 == 0) ?  1:  0;

	var num = parseInt(prompt("Introduzca numero"));
	if (isNaN(num) === false) {
		document.getElementById("c1").innerHTML = `${num}`;
		document.getElementById("c2").innerHTML = `${esB(num)}`;
	}
	else{
		document.getElementById("c1").innerHTML = "Error";
		document.getElementById("c2").innerHTML = "Error";
	}
}