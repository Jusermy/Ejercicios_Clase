	// --------------------------------------------------
	// Windows => setTimeout y setInterval
	//
		saludar = ()=> console.log("hola");

		//setTimeout(saludar,3000);
		//window.setTimeout(saludar,6000);

 
       	//setInterval(saludar, 3000);
		//window.setInterval(saludar, 3000);

		//clearTimeout / clearInterval(id): 
	
		
		var vs=null;
		var url;
			
		function abrirVentana(){
			
			//vs = window.open("secundaria.html");	
			//vs.document.getElementById("texto").innerHTML="Pero buenooooooo";
			//vs = window.open("","Pagina en blanco", "height= 500, width=100");
			let urlcontenido = document.getElementById("idUrl");			
			
			//vs = window.open(urlcontenido.value,"Pagina en blanco", "height= 500, width=100");
			vs = window.open("secundaria.html","Pagina en blanco", "height= 500, width=100");

			// Cerrar Venta pasados un 3 segundos
			//setTimeout(cerrarVentana,3000)
			
		}

		function devolverInfo() {
			return "Pepe";
		}
		
		function cerrarVentana(){
			vs.close();
		}

		function saludo(){
			console.log("hola");
		}
		
	// --------------------------------------------------
	// Arrays
	// -------------------------------
		
		/*let nombres = ['Pedro' , 'Paco' , 'Agustin' , 'Juan' , 'Ana']
		// Manipulando al final del Array
		nombres.push('Felipe')
		nombres.pop();
		//Manipulando al principio del Array
		nombres.unshift('Felipe')
		nombres.shift();
		
		//Concatenando
		nombres.concat(["Marcos","Celia"])
		
		// Stringneando
		let cadenaNombres = nombres.join("-")
		cadenaNombres.split('-')
		
		//Realizando búsquedas
		nombres.includes("Agustin")
		nombres.indexOf("Agustin")
		
		//Ordenando
		nombres.sort();
		nombres.reverse();*/
		
	// --------------------------------------------------
	// Recorriendo Arrays
	// -------------------------------
		/*for(let i=0; i<nombres.length;i++){               // Método clásico
			console.log(nombres[i])
		}
		
		for(let indice in nombres){               		   // Método for...in
			console.log(nombres[indice])
		}
		
		for(let nombre of nombres){               		   // Método for...of
			console.log(nombre)
		}*/
		
	//-----------------------------------------------------
	// Arrays Function
	//-----------------------------------------------------
		
		/*nombres.forEach(  function(valor,posicion) {
			console.log(`Elemento: ${valor} , en la posición ${posicion}`);
		    });
	

		nombres.every(  e => e.length == 3 );				// false
		nombres.some(  e => e.length == 3 );				// true
		let nombresMap = nombres.map( e => e.length );		// [5, 4, 4, 3, 7]
		let nombresFilter = nombres.filter(  e => e[0] == 'A'  );	// ['Ana','Agustin']
		let nombresFind  = nombres.find( e => e[0] == 'A');		// ['Ana']
		
		*/
			
	//-----------------------------------------------------
	// Let
	//-----------------------------------------------------
		
		/*let nombresSet = new Set(['Pedro' , 'Paco' , 'Agustin' , 'Juan' , 'Ana']);
		
		for(let valor of nombresSet){
			console.log(valor)
		}*/
		
		
	//-----------------------------------------------------
	// Map
	//-----------------------------------------------------
		
		/*let persona = new Map([  ['nombre', 'Agustin'],['apellido', 'Aguilera'],['edad', 99]  ]);
		
		for (const [clave, valor] of persona) {
		  console.log(clave + ' = ' + valor)
		}

		persona.forEach(function(valor,posicion){ console.log(valor,posicion) });	*/
		
