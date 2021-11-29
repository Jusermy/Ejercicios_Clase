let tpBarco = window.opener.tiposBarcos;
let tmnoBarco = window.opener.tamanoBarcos;
let numBarco = window.opener.numeroBarcos;
let clrBarco = window.opener.colorBarcos;

//creamos una tabla para la informacion
let tabla = document.createElement("table");
tabla.setAttribute("border", "1px solid black");
//la primera fila con cada titulo
let tr = document.createElement("tr");

//array de los datos
let datos = ["Tipo", "Tamaño", "Nº de Barcos", "Color"]

//empezamos a añadir la cabecera
datos.forEach(function(e){
	let th = document.createElement("th");
	let contenido = document.createTextNode(e);
	th.appendChild(contenido);
	tr.appendChild(th);
	
});
tabla.appendChild(tr);	

//empezamos a añadir los barcos
tpBarco.forEach(function(tipo){
	//tipo
	tr = document.createElement("tr");
	let td = document.createElement("td");
	let contenido = document.createTextNode(tipo);
	td.appendChild(contenido);
	tr.appendChild(td);
	
	//tamaño
	td = document.createElement("td");
	td.setAttribute("style", `text-align: center`);
	contenido = document.createTextNode(tmnoBarco.get(tipo));
	td.appendChild(contenido);
	tr.appendChild(td);
	
	//numero
	td = document.createElement("td");
	td.setAttribute("style", `text-align: center`);
	contenido = document.createTextNode(numBarco.get(tipo));
	td.appendChild(contenido);
	tr.appendChild(td);
	
	//color
	td = document.createElement("td");
	td.setAttribute("style", `background-color: ${clrBarco.get(tipo)}`)
	//contenido = document.createTextNode(clrBarco.get(tipo));
	//td.appendChild(contenido);
	tr.appendChild(td);

	tabla.appendChild(tr);
});

document.querySelector("div").appendChild(tabla);