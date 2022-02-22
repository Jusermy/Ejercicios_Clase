var color_css = 'background: #222; color: #bada55'
/**
* Uso de addEventListener this y Event
**/

 document.getElementById("idEnviar").addEventListener ("click", mostrarInformacion);


function mostrarInformacion(e){
    
    console.clear()
    //console.log(`Usando this : %c${this.value}`,color_css);
    //console.log(`Usando Event : %c${e.target.value}`,color_css);
    
    let formulario = document.forms["idFormulario"];

    //input de texto
    if (formulario.elements["idNombre"].value == "") {
        console.log(`Valor de input nombre es vacio`);
    }else{
        console.log(`Valor de input nombre: %c${formulario.elements["idNombre"].value}`, color_css);
    }
    
    //radiobuttons
    let elementos = document.getElementsByName("respuestas");
    for(var i = 0; i < elementos.length; i++){
        if(elementos[i].checked) {
            console.log(`Valor del radiobutton: %c${elementos[i].value}`, color_css);
        }
    }

    //checkbox
    let elemCondiciones = formulario.elements["idCondiciones"];
    let elemPrivacidad = formulario.elements["idPrivacidad"];
    if (elemCondiciones.checked) {
        console.log(`Se selecciono la opcion de: %c${elemCondiciones.value}`, color_css)
    }
    if (elemPrivacidad.checked) {
        console.log(`Se selecciono la opcion de: %c${elemPrivacidad.value}`, color_css)
    }

    //select
    let lista = formulario.elements["idLista"];
    let posSelect = lista.selectedIndex;
    console.log(`El valor del select es: %c${lista.options[posSelect].value}`, color_css)

    //datalist
    let dlista = formulario.elements["idInputList"];
    console.log(`El valor del datalist es: %c${dlista.value}`, color_css);
    e.preventDefault();
}


