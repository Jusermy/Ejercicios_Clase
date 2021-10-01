window.onload=function(){
	function sumar(a,b){
		return a+b;
	}
	//anonima
	var sum = function(a,b){
		return a+b;
	}
	//flecha
	var smr = (a,b) => a+b;

	var num1 = parseInt(prompt("Introduzca primer numero"));
	var num2 = parseInt(prompt("Introduzca segundo numero"));

	if (isNaN(num1) === false && isNaN(num2) === false) {
		document.getElementById("c1").innerHTML = `${num1}, ${num2}`;
		document.getElementById("c2").innerHTML = `${sumar(num1,num2)}`;
	}
	else{
		document.getElementById("c1").innerHTML = "Error";
		document.getElementById("c2").innerHTML = "Error";
	}

}