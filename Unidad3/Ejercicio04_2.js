/*
	Crear un script en el que se pregunte por el número de alumnos y en función de este dato pida el nombre de los alumnos y sus notas finales. Al final se debe mostrar, cada alumno con su nota y después la media de todos los alumnos.
*/

let numAlumnos = parseInt(prompt("Numero de alumnos"));
let alumnos = new Map();
let nombre;
let nota;

//recogemos el nombre de alumnos y sus notas
for (let i = 0; i < numAlumnos; i++){
	let respuesta = prompt(`Nombre del alumno y nota`, "Nombre - Nota");
	let resultado = respuesta.split("-");
	alumnos.set(
					resultado[0], resultado[1],
				);
}

//mostramos
alumnos.forEach(function(valor, pos){
	console.log(`${pos} tiene un ${valor}`)
});

//la media
let total = 0;
alumnos.forEach(function(e,n){
	total += parseInt(e)});

let media = total / alumnos.size;
console.log(media)


