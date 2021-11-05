let div = document.querySelector("div");

function hijos(){
	let resultado = document.querySelector("#resultado");
	resultado.innerHTML += `Numero de elementos: ${div.childElementCount}`;//dara 5, para hacerlo bien: con div.childNodes.length
	resultado.innerHTML += `<br>`;

	for(let i = 0; i < div.childElementCount; i++){
		resultado.innerHTML += div.childNodes[i].nodeName;
		resultado.innerHTML += `<br>`;
	}
	/*
	div.childNodes.forEach(function(e){
		resultado.innerHTML += e.nodeName;
	})
	*/
}