//aunque no sea muy eficiente, introducimos cada dato con un prompt para cada uno
var n1 = parseInt(prompt("Introduzca el primer numero"));
var n2 = parseInt(prompt("Introduzca el segundo numero"));
var n3 = parseInt(prompt("Introduzca el tercer numero"));
var nombre = prompt("Introduzca el nombre");
var apellido = prompt("Introduzca el apellido");

//mostramos en pantalla mediante alert los datos introducidos
alert(`Los datos introducidos son: ${n1}, ${n2}, ${n3}, ${nombre} y ${apellido}`);
//comprobamos la tipologia de cada dato por la consola
console.log(`${typeof(n1)}, ${typeof(n2)}, ${typeof(n3)}, ${typeof(nombre)} y ${typeof(apellido)}`);