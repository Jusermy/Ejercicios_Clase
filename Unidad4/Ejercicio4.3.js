//obtenemos los p de respuesta
let respuesta = document.querySelectorAll(".pregunta");
function aceptar(){
    //borramos previamente lo que habia en los p de respuesta
    respuesta.forEach(e=> e.innerHTML="");
    //obtenemos los 3 inputs y los p's
    let inputs = document.querySelectorAll("input");
    let ps = document.querySelectorAll("div>p");
    inputs.forEach(function(v,k){
        //si tienen contenido, se pone dentro de la pregunta
        if(inputs[k].value != ""){
            //creamos un array con las respuestas del array separadas con ,
            let arr = inputs[k].value.split(",");
            arr.forEach(function(e){
                //creamos un nuevo parrafo
                let p = document.createElement("p");
                //le agregamos el contenido
                let contenido = document.createTextNode(e);
                p.appendChild(contenido);
                //le agregamos un estilo
                p.setAttribute("class", "azul");
                //lo ponemos dentro del p de la pregunta correspondiente
                respuesta[k].appendChild(p);                
            })
            //al ser respondida la pregunta, cambiamos el color del p padre
            ps[k].setAttribute("class", "verde");
        }
        //de otra manera, se vuelve a poner en rojo si no lo estaba
        else{
            ps[k].setAttribute("class", "rojo");
        }
    });
}