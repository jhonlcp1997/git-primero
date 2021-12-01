const obtenerInformacion =(materia) =>{
	materias ={
		Fisica: ["pedro","pepito","cofla","maria"],
		Quimica: ["pedro","juan","maria"],
		Logica: ["pedro","juan","pepito","cofla","maria"],
		Programacion: ["pedro","cofla","maria"],
	}
	if(materias[materia] !== undefined){
		return [materias[materia],materia,materias];
	} else{
		return materias;
	}
}

const mostrarInformacion = (materia)=>{
	let informacion = obtenerInformacion(materia);

	if (informacion !== false){
		let profesor = obtenerInformacion(materia)[0][0];
		let alumnos = obtenerInformacion(materia)[0];
		alumnos.shift();
		document.write(`Alumnos presentes en ${informacion[1]} con profesor <b> ${profesor} </b></br> 
			y los alumnos son: <b> ${alumnos}</b><br><br>
			`);
	}
}

const cantidadDeClases = (alumno)=>{
	let informacion = obtenerInformacion();
	let clasesPresentes = [];
	let cantidadTotal = 0;
	for (info in informacion) {
		if(informacion[info].includes(alumno)){
			cantidadTotal++;
			clasesPresentes.push(" "+info);
		}
	}
	return `El alumno ${alumno} esta en ${cantidadTotal} clases <br>
	Esta cursando las clases ${clasesPresentes}
	`;
}


mostrarInformacion("Fisica");
mostrarInformacion("Quimica");
mostrarInformacion("Logica");
mostrarInformacion("Programacion");

document.write(cantidadDeClases("maria"));