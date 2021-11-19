/*--------------------Funciones--------------------*/
function crearMatriz(){
	let mtz = new Array(10);
	for (let i = 0; i < mtz.length; i++) {
		mtz[i] = new Array(10);
	}

	for (let i = 0; i < 10; i++) {
		for (let y = 0; y < 10; y++){
			mtz[i][y] = 0;
		}
	}
	return mtz;
}

function verificarCampos(tipo, sentido){
    let valido = true;
	//horizontal
	if(sentido == 0){
		if(matriz[x][y+1] == 0){ 
            console.log("entra en horizontal");
			for(let i = 0; i < tamanoBarcos.get(tipo) && valido; i++){
                console.log(`h(${x},${y} e i siendo ${i}): ${matriz[x][y+i]}`);
				//si encontramos una casilla ocupada, nos salimos y volvemos a buscar otra coordenada
				if(matriz[x][y+i] == 1){
                    console.log("no vale, deberia salirse");
                    valido = false;
					return false;
				}
			}
		}
	}
	//vertical
	else{
		if(matriz[x+1][y] == 0){ 
            console.log("entra en vertical");
			for(let i = 0; i < tamanoBarcos.get(tipo) && valido; i++){
                console.log(`v(${x},${y} e i siendo ${i}): ${matriz[x][y+i]}`);
				//si encontramos una casilla ocupada, nos salimos y volvemos a buscar otra coordenada
				if(matriz[x+i][y] == 1){
                    console.log("no vale, deberia salirse");
                    valido = false;
					return false;
				}
			}
		}
	}
    console.log("esta correcto");
	return true;
}

function pintarBarcos(tipo, sentido){
	//ocupamos la celda y la pintamos
	matriz[x][y] = 1;
	document.getElementById(`id_${x}_${y}`).style.backgroundColor = colorBarcos.get(tipo);
	//horizontal
	if(sentido == 0){
		//ocupamos las casillas siguientes a ella
		for(let i = 0; i < tamanoBarcos.get(tipo); i++){
			matriz[x][y+i] = 1;
			document.getElementById(`id_${x}_${y+i}`).style.backgroundColor = colorBarcos.get(tipo);
		}
	}
	//vertical
	else{
		//ocupamos las casillas siguientes a ella
		for(let i = 0; i < tamanoBarcos.get(tipo); i++){
			matriz[x+i][y] = 1;
			document.getElementById(`id_${x+i}_${y}`).style.backgroundColor = colorBarcos.get(tipo);
		}
	}
}


/*--------------Codigo--------------------------*/
//creamos la matriz donde comprobaremos la disponibilidad de las posiciones
let matriz = crearMatriz();

//Definir un set con el tipo de Barcos posibles.
let tiposBarcos = new Set(["lanchas", "portaAviones", "flota", "armada"]);

//Definir un map(constante) llamado tamanoBarcos, siendo la clave el tipo de barco y el valor la longitud de ese tipo de barco.
let tamanoBarcos = new Map([["lanchas",2], ["portaAviones",3], ["flota", 4], ["armada", 3]]);

//Definir un map (constante) llamado numeroBarcos, siendo la "clave" el tipo de barco y en "valor" el número de barcos con ese tamaño.
let numeroBarcos = new Map([["lanchas",2], ["portaAviones",3], ["flota", 1], ["armada", 4]]);

//Definir un map con los colores de cada barco
let colorBarcos = new Map([["lanchas","red"], ["portaAviones","blue"], ["flota", "yellow"], ["armada", "green"]]);

let x, y;

function ubicarBarcos(){
	//primero iremos a coger el tipo de barco
	tiposBarcos.forEach(function(tipo){
		//buscaremos el tamaño del barco para saber con cual tamaño de diferencia hemos de empezar a ubicar coordenadas
		let tamano = tamanoBarcos.get(tipo);
		//haremos tantas iteraciones como sea necesario con ese tipo de barco
		let numBarcos = numeroBarcos.get(tipo);
		//con la variable correcto comprobaremos si las celdas siguientes a la coordenada estan disponibles
		let correcto; 
		//con la variable sentido, haremos con un random que escoja 0 o 1 (horizontal o vertical)
		let sentido = 0;
		for (let i = 0; i < numBarcos; i++){
			correcto = false;
			do{
				x = parseInt(Math.random()*10 - tamano +1);
				y = parseInt(Math.random()*10 - tamano +1);
				sentido = Math.round(Math.random());
				//en caso de que el random de -1
				x < 0 ? x = 0 : x = x;
				y < 0 ? y = 0 : y = y;
				correcto = verificarCampos(tipo, sentido)
			}while(!correcto)
			//las coordenadas disponibles fueron ubicadas
			pintarBarcos(tipo, sentido);
		}
	})
}
ubicarBarcos();
