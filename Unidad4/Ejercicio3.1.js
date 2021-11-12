/*obtén desde la consola, al
    menos de 2 formas diferentes (en caso de existir varias alternativas):*/
    //• El primér párrafo que hay dentro del div ‘lipsum’
    document.getElementById("lipsum").firstElementChild;
    document.getElementById("lipsum").children[0];
    document.querySelector("#lipsum p");

    //• El segundo párrafo de ‘lipsum’
    document.getElementById("lipsum").children[1];
    document.querySelectorAll("#lipsum p")[1];

    //• El último item de la lista
    document.getElementsByTagName("ul")[0].lastElementChild;

    //• La label de “Escoge sexo”
    document.querySelectorAll("label")[3];
    document.getElementsByTagName("label")[3];