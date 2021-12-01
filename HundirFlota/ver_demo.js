//recogemos la matriz "ordenada" para esta demo
let arr = window.opener.matrizDemo;

//la funcion delay para que espere
function delay(n){
    return new Promise(function(resolve){
        setTimeout(resolve,n*1000);
    });
}

//dentro de nuestra funcion asincrona, usaremos el delay tras pintar un cuadro
async function myAsyncFunction(){
    for (let x = 0; x < arr.length; x++){
        //solo queremos pasar una vez por cada fila del array bidimensional
        for (let y = 0; y < 1; y++){
            document.getElementById(`id_${arr[x][y]}_${arr[x][y+1]}`).style.backgroundColor = arr[x][y+2];
        }
        await delay(0.1);
    }

}

myAsyncFunction();   