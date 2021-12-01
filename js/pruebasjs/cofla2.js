// let edad = parseInt(prompt("Ingrese su edad"));

// var valoracion = (edad)=>{
// 	if(edad>=18){
// 		document.write("Eres mayor de edad, puedes ingresar");
// 	}else{
// 		document.write("No puedes pasar");
// 	}
// }

// valoracion();



let free = false;

const validarCliente = (time)=>{
	let edad1 = prompt("ingrese su edad");
	
	if (edad1 > 18){
		if( time >=2 && time < 7 && free == false){
			alert("Puedes ingresar Gratis");
			free = true;
		} else{
			alert("Puedes pasar, pero tienes que pagar la entrada");
		}
	} else {
		alert("Eres menor de edad, asi que A CASA PA");
	}
}

validarCliente(23);
validarCliente(22);
validarCliente(22);
validarCliente(11);
validarCliente(3);
validarCliente(19);