//introducimos cada dato con un prompt para cada uno
var n1 = parseInt(prompt("Introduzca el primer numero"));
var n2 = parseInt(prompt("Introduzca el segundo numero"));
var n3 = parseInt(prompt("Introduzca el tercer numero"));

if (n1 > 10 || n2 > 10 || n3 > 10) {
	if(n1 > 10){
		document.write(`El primer numero ${n1} es mayor que 10. <br>`);
	}
	if(n2 > 10){
		document.write(`El segundo numero ${n2} es mayor que 10. <br>`);
	}
	if(n3 > 10){
		document.write(`El tercer numero ${n3} es mayor que 10.`);
	}
}
else{
	document.write("No hay ningun numero mayor de 10");
}