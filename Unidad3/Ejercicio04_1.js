/**
 * Crear un programa que permita introducir 10 nombres de los socios de un club (utilizar la estructura de array). Los elementos deben leerse de pantalla utilizando el método prompt(). En el mensaje de salida que permite la introducción de los nombres debe indicarse el número de elemento que se solicita. Después de introducir todos los elementos se tiene que mostrar la siguiente información por pantalla:
•	mostrar los nombres de los socios tal y como se han introducido
•	indicar el número socios que hay
•	mostrar el nombre de los socios ordenados por orden alfabético
•	mostrar el nombre de los socios en orden inverso al introducido

 * */
 
	 let nombres = [];
	 for (let i = 0; i < 10; i++){
	 	nombres.push(prompt(`Introduzca el socio numero ${i+1}`, `Socio numero ${i+1}`));
	 }
	
	var opcion = 0;

	function mostrarSocios(){
		let vs = window.open("Ejercicio04_1Auxiliar.html", "Pagina", "width: 200, height:200");
		opcion = 1;
	}

	function mostrarNum(){
		let vs = window.open("Ejercicio04_1Auxiliar.html", "Pagina", "height: 200, width:200");
		console.log("El numero total de socios es: " + nombres.length);
		opcion = 2;
	}

	function mostrarOrdenAlf(){
		let vs = window.open("Ejercicio04_1Auxiliar.html", "Pagina", "height: 200, width:200");
		console.log(nombres.sort());
		opcion = 3;
	}

	function mostrarOrdenInverso(){
		let vs = window.open("Ejercicio04_1Auxiliar.html", "Pagina", "height: 200, width:200");
		console.log(nombres.reverse());
		opcion = 4;
	}


