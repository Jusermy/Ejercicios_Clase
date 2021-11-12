/*
    Para hacer este ejercicio descárgate el archivo “2_4_index.html” y ábrela en tu navegador. Obtén
    por consola, al menos de 2 formas diferentes(en caso de existir varias alternativas):*/
    //• El elemento con id ‘input2’
    document.getElementById("input2");
    document.querySelector("#input2");

    //• La colección de párrafos
    document.getElementById("lipsum");
    document.querySelector("#lipsum");

    //• Lo mismo pero sólo de los párrafos que hay dentro del div ‘lipsum’
    document.getElementById("lipsum").children;
    document.querySelectorAll("#lipsum p");

    //• El formulario (ojo, no la colección con el formulario sino sólo el formulario)
    document.getElementsByTagName("form");
    document.querySelector("form");

    //• Todos los inputs
    document.getElementsByTagName("form").querySelectorAll("input");
    document.querySelectorAll("form input");

    //• Sólo los inputs con nombre ‘sexo’
    //document.getAttribute("name"); //*****No funciona
    document.querySelectorAll("input[name='sexo']");

    //• Los items de lista de la clase ‘important’ (sólo los LI) 
    document.querySelectorAll("li[class='important']")