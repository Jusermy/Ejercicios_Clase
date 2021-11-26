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