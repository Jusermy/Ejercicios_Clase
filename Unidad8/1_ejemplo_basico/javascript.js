let peticionhttp=new XMLHttpRequest();

let boton = document.getElementById("idBoton");

boton.addEventListener('click',cargarAJAX,false);



function cargarAJAX() {  

  peticionhttp.addEventListener('load',cargar,false);
 
  //POST
  //peticionhttp.open("POST", "http://localhost:3000/users", true);
  //peticionhttp.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
  //peticionhttp.send(JSON.stringify({ id: 5, name: 'eva', location: 'madrid' }));
 
  //GET
  //peticionhttp.open("GET", "http://localhost:3000/users", true);
  //peticionhttp.send();
 
  //DELETE
  peticionhttp.open('DELETE', 'http://localhost:3000/users/4');//el id 4 es el que hemos borrado
  //tambien funciona sin el content-type
  //peticionhttp.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
  peticionhttp.send();
};

function cargar() {
     
    var r = document.getElementById("idResultado");
    //la respuesta sera 201 en estado cuando hagamos post. GET y DELETE 200
    if (peticionhttp.readyState == 4 && peticionhttp.status == 200) {      
     
      //r.innerHTML = peticionhttp.responseText
      console.log(JSON.parse(peticionhttp.responseText));
     
    } else {
      r.innerHTML = "En proceso";
    }
  }
