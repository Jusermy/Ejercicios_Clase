let http = new XMLHttpRequest();
  let boton = document.getElementById("idBoton");
  boton.addEventListener("click",cargarAJAX)  

 function cargarAJAX() {  
   
    http.addEventListener("readystatechange",mostrar)
     
    http.open("GET", "http://www.dwec.jeremy.com/provincias.json",true);
    http.send(null);
};

function mostrar() {
  //await delay(5000);
  var r = document.getElementById("idResultado");
  var p = document.getElementById("idPasos");
 
  p.innerHTML += "<br>Cambio de estado";
 
  if (http.readyState == 4 && http.status == 200) {
    p.innerHTML += "<br>readyState: " + http.readyState;
    p.innerHTML += "<br>status: " + http.status;
    p.innerHTML += "<br>Datos transferidos";
    p.innerHTML += "<br> ------------------------>";
    r.innerHTML = "";

    var obj_json = JSON.parse(http.responseText);
    var paises = obj_json.listadoPaises.pais;
   
    r.innerHTML = "";
    formatear(paises, r);
   
  } else {
    p.innerHTML += "<br>readyState: " + http.readyState;
    p.innerHTML += "<br>status: " + http.status;
    p.innerHTML += "<br>En espera...";
    p.innerHTML += "<br> ------------------------>";
    r.innerHTML = "En proceso";
  }
}

function delay(n){
    return new Promise(function(resolve){
        setTimeout(resolve,n*5000);
    });
}

//dentro de nuestra funcion asincrona, usaremos el delay tras pintar un cuadro
async function formatear(ps, resultado){
      await delay(0.2);
    ps.forEach(function(pais){
      let nodo = document.createElement("p");
      let contenido = document.createTextNode("Pais: " + pais.nombre);
      nodo.appendChild(contenido);
      resultado.appendChild(nodo);

        nodo = document.createElement("p");
        contenido = document.createTextNode("Capital: " + pais.capital);
        nodo.appendChild(contenido);
        resultado.appendChild(nodo);

        nodo = document.createElement("p");
        contenido = document.createTextNode("Poblacion: " + pais.poblacion);
        nodo.appendChild(contenido);
        resultado.appendChild(nodo);

        nodo = document.createElement("p");
        contenido = document.createTextNode("Ciudades: " + pais.ciudadImportante);
        nodo.appendChild(contenido);
        resultado.appendChild(nodo);
  })
}
