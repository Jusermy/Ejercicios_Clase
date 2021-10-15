window.onload = function(){
	/*
		wed, 22 sept 2020 hora gmt
	*/

	let idSI;
	function obtenerFecha(){
		let fecha = new Date();
		let dia = diaSemana(fecha.getDay());
		let numDia = fecha.getDate();
		let mes = meses(fecha.getMonth());
		let anyo = fecha.getFullYear();
		let hora = fecha.getHours();
		let min = fecha.getMinutes();
		let seg = fecha.getMinutes();

		document.getElementById("fecha").innerHTML = `${dia}, ${numDia} ${mes} ${anyo} ${hora}:${min}:${seg} GMT`;
	}

	function diaSemana(num){
		let dS;
		switch(num){
			case 1: dS = "Mon";
					return dS;
					break;
			case 2: dS = "Tues";
					return dS;
					break;
			case 3: dS = "Wed";
					return dS;
					break;
			case 4: dS = "Thu";
					return dS;
					break;
			case 5: dS = "Fri";
					return dS;
					break;
			case 6: dS = "Sat";
					return dS;
					break;
			case 7: dS = "Sun";
					return dS;
					break;
		}
	}
	function meses(num){
		let m;
		switch(num){
			case 1: m = "Jan";
					return m;
					break;
			case 2: m = "Feb";
					return m;
					break;
			case 3: m = "Mar";
					return m;
					break;
			case 4: m = "Apr";
					return m;
					break;
			case 5: m = "May";
					return m;
					break;
			case 6: m = "June";
					return m;
					break;
			case 7: m = "July";
					return m;
					break;
			case 8: m = "Aug";
					return m;
					break;
			case 9: m = "Sept";
					return m;
					break;
			case 10: m = "Oct";
					return m;
					break;
			case 11: m = "Nov";
					return m;
					break;
			case 12: m = "Dic";
					return m;
					break;
		}
	}
	idSI = setInterval(obtenerFecha, 500);
}