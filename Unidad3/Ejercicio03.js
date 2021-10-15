/**
 * Establece un título del documento (document.title) de forma dinámica, mostrando cada segundo la hora actual, 
 * como vemos en la siguiente figura: Añade al documento un enlace que permita parar la hora: [ Date + document.tittle ]
 * */

 	let idSI;
 	function refrescarHora(){
 		let fecha = new Date();
 		let h = fecha.getHours();
 		let m = fecha.getMinutes();
 		let s = fecha.getSeconds();
 		document.title = `La hora es ${h}:${m}:${s}`;
 	}
 	idSI = setInterval(refrescarHora, 500);

 	function detener(){
 		clearInterval(idSI);
 	}
