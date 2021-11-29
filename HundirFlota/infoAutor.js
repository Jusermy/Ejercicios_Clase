let autor = window.opener.autor1;
let div = document.querySelector("div");
let p = document.createElement("p");

/*informacion = autor.info();

informacion.forEach(function(value, key){
	p.appendChild(document.createTextNode(`${key}: ${value}`));
	div.appendChild(p);
})*/

//añadimos el nombre
p.appendChild(document.createTextNode(`Nombre: ${autor.nombre}`));
div.appendChild(p);

//añadimos el apellido
p = document.createElement("p");		
p.appendChild(document.createTextNode(`Apellido: ${autor.apellidos}`));
div.appendChild(p);

//añadimos la edad
p = document.createElement("p");
p.appendChild(document.createTextNode(`Edad: ${autor.edad}`));
div.appendChild(p);

//añadimos el github
p = document.createElement("p");
p.appendChild(document.createTextNode(`Github: ${autor.github}`));
div.appendChild(p);

//añadimos el lenguaje
p = document.createElement("p");
p.appendChild(document.createTextNode(`Lenguaje: ${autor.lenguaje}`));
div.appendChild(p);

//añadimos la version del programa
p = document.createElement("p");
p.appendChild(document.createTextNode(`Version: ${autor.version}`));
div.appendChild(p);