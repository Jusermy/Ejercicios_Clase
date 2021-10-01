window.onload=function(){
	function perimetroRectangulo(a,b){
		return a*2+b*2;
	}

	var perRec = function(a,b){
		return a*2+b*2;
	}
	
	var pR = (a,b)=> a*2+b*2;

	var num1 = parseFloat(prompt("Introduzca primer numero"));
	var num2 = parseFloat(prompt("Introduzca segundo numero"));

	if (isNaN(num1) === false && isNaN(num2) === false) {
		document.getElementById("c1").innerHTML = ` ${num1}, ${num2} `;
		document.getElementById("c2").innerHTML = ` ${perimetroRectangulo(num1, num2)} `;
	}
	else{
		document.getElementById("c1").innerHTML = "Error";
		document.getElementById("c2").innerHTML = "Error";
	}
}