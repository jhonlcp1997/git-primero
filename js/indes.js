var nombre = "Jhon Larry";

function MuestraN (apellido){
	

	var datos = document.getElementById("datos");

	datos.innerHTML = ` 
	<h1>Soy caja datos</h1> 
	<h2> Mi Apellido es: ${apellido}
	`
	;

}

MuestraN ("Cruz");