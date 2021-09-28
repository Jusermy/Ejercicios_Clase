//introducimos el dia y el num del mes
var dia = parseInt(prompt("Numero del dia"));
var mes = parseInt(prompt("Numero del mes"));

if(dia == 24 && mes == 12){
	document.write("El dia introducido es Navidad.")
}
else{
	document.write("El dia introducido no es Navidad.")
}