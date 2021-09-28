//introducimos cada dato con un prompt para cada uno
var n1 = parseInt(prompt("Introduzca el primer numero"));
var n2 = parseInt(prompt("Introduzca el segundo numero"));
var n3 = parseInt(prompt("Introduzca el tercer numero"));
var nombre = prompt("Introduzca el nombre");
var apellido = prompt("Introduzca el apellido");

//mostramos en pantalla mediante alert los datos introducidos
alert(`Nombre y apellido: ${nombre + " " + apellido}`);
alert(`Suma: ${n1+n2+n3}. Multiplicacion: ${n1*n2*n3}. Division entre 1o y 3o: ${n1/n3}`);