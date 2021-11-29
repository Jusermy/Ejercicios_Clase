let jugador = window.opener.jugador1;
let div = document.querySelector("div");
let p = document.createElement("p");

//añadimos el nombre
p.appendChild(document.createTextNode(`Nombre: ${jugador.nombre}`));
div.appendChild(p);

//añadimos el apellido
p = document.createElement("p");		
p.appendChild(document.createTextNode(`Apellido: ${jugador.apellidos}`));
div.appendChild(p);

//añadimos la edad
p = document.createElement("p");
p.appendChild(document.createTextNode(`Edad: ${jugador.edad}`));
div.appendChild(p);

//añadimos la puntuacion actual
p = document.createElement("p");
p.appendChild(document.createTextNode(`Github: ${jugador.puntuacion}`));
div.appendChild(p);

//añadimos los aciertos actuales
p = document.createElement("p");
p.appendChild(document.createTextNode(`Lenguaje: ${jugador.aciertos}`));
div.appendChild(p);

//añadimos los fallos actuales
p = document.createElement("p");
p.appendChild(document.createTextNode(`Version: ${jugador.fallos}`));
div.appendChild(p);