/*--------------------Clases-----------------------*/
class personaC{
	constructor(n, a, e){
		this._nombre = n;
		this._apellidos = a;
		this._edad = e;
	}

	get nombre(){
		return this._nombre;
	}

	get apellidos(){
		return this._apellidos;
	}

	get edad(){
		return this._edad;
	}

	set nombre(valor){
		this._nombre = valor;
	}

	set apellidos(valor){
		this._apellidos = valor;
	}

	set edad(valor){
		this._edad = edad;
	}

	info(){
		return `Nombre: ${this.nombre}. Apellidos: ${this.apellidos}. Edad: ${this.edad}.`;
	}

	static saludo(){
		alert("Saludos.");
	}

	toString(){
		return this._nombre;
	}

	valueOf(){
		return this._edad;
	}
}

class autor extends personaC{ 
	#_idA= 0;
	constructor(n, a, e, g, l, v){
		super(n, a, e);
		this._github = g;
		this._lenguaje = l;
		this._version = v;
	}

	get github(){
		return this._github;
	}

	get lenguaje(){
		return this._lenguaje;
	}

	get version(){
		return this._version;
	}

	get #idA(){
		return this.#_idA;
	}

	set github(valor){
		this._github = valor;
	}

	set lenguaje(valor){
		this._lenguaje = valor;
	}

	set version(valor){
		this._version = valor
	}

	set #idA(valor){
		this.#_idA = valor;
	}

	info(){
		let informacion = new Map([["Nombre", this.nombre], ["Apellidos", this.apellidos], ["Edad", this.edad],
			["Github", this.github], ["Lenguaje", this.lenguaje], ["Version", this.version]])
		return informacion;
	}

	static saludo(){
		return "Saludos del autor";
	}
}

class jugador extends personaC{
	#_idJ = 1;
	constructor(n, a, e, p=0, ac=0, f=0){
		super(n, a, e);
		this._puntuacion = p;
		this._aciertos = ac;
		this._fallos = f;
	}

	get puntuacion(){
		return this._puntuacion;
	}

	get aciertos(){
		return this._aciertos;
	}

	get fallos(){
		return this._fallos;
	}

	get #idJ(){
		return this.#_idJ;
	}

	set puntuacion(valor){
		this._puntuacion = valor;
	}

	set aciertos(valor){
		this._aciertos = valor;
	}

	set fallos(valor){
		this._fallos = valor;
	}

	set #idJ(valor){
		this.#_idJ = valor;
	}

	info(){
		let informacion = new Map([["Nombre", this.nombre], ["Apellidos", this.apellidos], ["Edad", this.edad],
		 ["Puntuacion", this.puntuacion], ["Aciertos", this.aciertos], ["Fallos", this.fallos]])
		return informacion;
	}

	static saludo(){
		return "Saludos del jugador";
	}

}
/*
	Ejemplo usado de prototype:

	let a = new personaC("ana", "ba", 23)

	personaC.prototype.despedirse = function(){return "adios"}
	>ƒ (){return "adios"}

	let atr = new autor("Jeremy", "P", 24, "https", "Js", "1.0") 

	atr.despedirse()
	>'adios'
*/

class Barco{
	constructor(tamano, color){
		this._tamano = t;
		this._color = c;
		this._coordenadas = [];
	}

	get tamano(){
		return this._tamano;
	}
	get color(){
		return this._color;
	}
	get coordenadas(){
		return this._coordenadas;
	}

	anadirCoords(valor){
		_coordenadas.push(valor);
	}
}

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
	//horizontal
	if(sentido == 0){
		if(matriz[x][y+1] == 0){ 
			for(let i = 0; i < tamanoBarcos.get(tipo); i++){
				//si encontramos una casilla ocupada, nos salimos y volvemos a buscar otra coordenada
				if(matriz[x][y+i] == 1){
					return false;
				}
			}
		}
	}
	//vertical
	else{
		if(matriz[x+1][y] == 0){ 
			for(let i = 0; i < tamanoBarcos.get(tipo); i++){
				//si encontramos una casilla ocupada, nos salimos y volvemos a buscar otra coordenada
				if(matriz[x+i][y] == 1){
					return false;
				}
			}
		}
	}
	return true;
}

function pintarBarcos(tipo, sentido){
	//ocupamos la celda y la pintamos
	matriz[x][y] = 1;
	document.getElementById(`id_${x}_${y}`).style.backgroundColor = colorBarcos.get(tipo);
	//introducimos los datos en la matriz para la demo
	matrizDemo.push([[x],[y],[colorBarcos.get(tipo)]]);

	//horizontal
	if(sentido == 0){
		//ocupamos las casillas siguientes a ella
		for(let i = 0; i < tamanoBarcos.get(tipo); i++){
			matriz[x][y+i] = 1;
			document.getElementById(`id_${x}_${y+i}`).style.backgroundColor = colorBarcos.get(tipo);
			matrizDemo.push([[x],[y+i],[colorBarcos.get(tipo)]]);
		}
	}
	//vertical
	else{
		//ocupamos las casillas siguientes a ella
		for(let i = 0; i < tamanoBarcos.get(tipo); i++){
			matriz[x+i][y] = 1;
			document.getElementById(`id_${x+i}_${y}`).style.backgroundColor = colorBarcos.get(tipo);
			matrizDemo.push([[x+i],[y],[colorBarcos.get(tipo)]]);
		}
	}
}

function abrirDemo(){
	let vs = window.open("ver_demo.html", "Demo", "height=500px, width=500px");
}

function abrirInfo(){
	let vs = window.open("ver_info.html", "Informacion", "height=300px, width=450px");
}

function infoAutor(){
	let vs = window.open("infoAutor.html", "Informacion", "height=350px, width=300px");
}

function infoJugador(){
	let vs = window.open("infoJugador.html", "Informacion", "height=350px, width=300px");
}

//funciones para completar la informacion de autor y jugador
function completarAutor(){
	//nombre apellido edad github lenguaje version
	let aut = new autor("Jeremy", "Perez", 24, "https://github.com/Jusermy", "Js", "1.0");
	return aut;
}

function completarJugador(){
	//nombre apellido edad puntuacion aciertos fallos
	let jug = new jugador("Jugador", "Random", 20, 0, 0, 0);
	return jug;
}

/*--------------Codigo--------------------------*/

//creamos la matriz donde comprobaremos la disponibilidad de las posiciones
let matriz = crearMatriz();

//creamos un array para la matriz de la demo donde iremos introduciendo "en orden" las posiciones y el color de estas
var matrizDemo = [];

//Definir un set con el tipo de Barcos posibles.
var tiposBarcos = new Set(["lanchas", "portaAviones", "flota", "armada"]);

//Definir un map(constante) llamado tamanoBarcos, siendo la clave el tipo de barco y el valor la longitud de ese tipo de barco.
var tamanoBarcos = new Map([["lanchas",2], ["portaAviones",3], ["flota", 4], ["armada", 3]]);

//Definir un map (constante) llamado numeroBarcos, siendo la "clave" el tipo de barco y en "valor" el número de barcos con ese tamaño.
var numeroBarcos = new Map([["lanchas",2], ["portaAviones",3], ["flota", 1], ["armada", 4]]);

//Definir un map con los colores de cada barco
var colorBarcos = new Map([["lanchas","red"], ["portaAviones","blue"], ["flota", "yellow"], ["armada", "green"]]);

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
	});
}
ubicarBarcos();
var autor1 = completarAutor();
var jugador1 = completarJugador();














/*function verificarCampos(tipo, x, y){
	if(matriz[x][y+1] == 0){ 
		if(tipo === "lanchas"){
			//si la casilla siguiente esta desocupada devolvemos true
			if(matriz[x][y+1] == 0){
				console.log("entra en if lanchas")
				return true;
			}
		}
		else if(tipo === "portaAviones"){
			//si las dos casillas siguientes estan desocupadas
			if(matriz[x][y+1] == 0 && matriz[x][y+2] == 0){
				console.log("entra en if portaAviones")
				return true;
			}
		}
		else if(tipo === "flota"){
			//si las dos casillas siguientes estan desocupadas
			if(matriz[x][y+1] == 0 && matriz[x][y+2] == 0 && matriz[x][y+3] == 0){
				console.log("entra en if flota")
				return true;
			}
		}
	}
	return false;
}*/