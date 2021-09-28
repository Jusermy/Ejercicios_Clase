window.onload=function(){
	//introducimos sueldo y antiguedad
	var sueldo = parseInt(prompt("Introduzca sueldo"));
	var antiguedad = parseInt(prompt("Introduzca antiguedad"));

	if (sueldo < 500 && antiguedad >= 10) {
		document.getElementById("c1").innerHTML= "" + sueldo + "<br>" + antiguedad;
		document.getElementById("c2").innerHTML= "" + sueldo*3;
	}
	else if (sueldo < 500 && antiguedad < 10){
		document.getElementById("c1").innerHTML= "" + sueldo + "<br>" + antiguedad;
		document.getElementById("c2").innerHTML= "" + sueldo*3;
	}
	else{
		document.getElementById("c1").innerHTML= "" + sueldo + "<br>" + antiguedad;
		document.getElementById("c2").innerHTML= "" + sueldo;
}
}