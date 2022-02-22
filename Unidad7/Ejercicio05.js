let form = document.forms["idForm"];
let elementos = form.elements;

elementos["idSubmit"].addEventListener("click", function(event){
    event.preventDefault();
    document.getElementById("respuestas").innerHTML = "";
    let elemento = null;

    //del nombre a las asignaturas
    for (let i = 0; i < 8; i++) {
        elemento = document.createElement("p");
        if (elementos[i].value != "") {
            elemento.appendChild(document.createTextNode(elementos[i].value)); 
            document.getElementById("respuestas").appendChild(elemento);
        }
    }

    //select
    let idiomas = elementos["idIdioma"];
    elemento = document.createElement("p");

    let contenido = idiomas.options[idiomas.selectedIndex].text;
    elemento.appendChild(document.createTextNode(contenido));
    document.getElementById("respuestas").appendChild(elemento);


    //radiobuttons
    let rdbt = document.getElementsByName("sexo");
    for(var i = 0; i < rdbt.length; i++){
        if(rdbt[i].checked){
            elemento = document.createElement("p");
            elemento.appendChild(document.createTextNode(rdbt[i].value));
            document.getElementById("respuestas").appendChild(elemento);
        }
    }

    //checkbox
    if(elementos["idSituacion"].checked){
        elemento = document.createElement("p");
        elemento.appendChild(document.createTextNode(elementos["idSituacion"].value));
        document.getElementById("respuestas").appendChild(elemento);
    }
})
