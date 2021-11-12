function anadirNumero() {
	let lista = document.querySelector("ul");
	let li = document.createElement("li");
	let lirnd = document.createTextNode(`Nuevo Elemento : ${Math.random()}`);
	li.appendChild(lirnd);
	lista.appendChild(li);
}