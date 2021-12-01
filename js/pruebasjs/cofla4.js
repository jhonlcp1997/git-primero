class App {
	constructor(descargas,puntuacion,peso){
		this.descargas = descargas;
		this.puntuacion = puntuacion;
		this.peso= peso;
		this.iniciada=false;
		this.instalada=false;
	}
	abrir(){
		if(this.iniciada == false && this.instalada==true){
			this.iniciada = true;
			alert("app iniciada");
		}
	}
	cerrar(){
		if(this.iniciada == true){
			this.iniciada = false;
			alert("app cerrada");
		}
	}
	instalar(){
		if(this.instalada == false){
			this.instalada = true;
			alert("app instalada correctamente");
		}
	}
	desinstalar(){
		if(this.instalada == true){
			this.instalada = false;
			alert("app desinstalada correctamente");
		}
	}
	appInfo(){
		return `
		Descargas: <b>${this.descargas}</b></br>
		Puntuacion: <b>${this.puntuacion}</b></br>
		Peso: <b>${this.peso}</b></br>
		`;
	}
}

app1 = new App("16.000","3 estrellas","3 KG");
app2 = new App("23.000","5.5 estrellas","2 KG");
app3 = new App("11.000","8 estrellas","3 KG");

document.write(`
	${app1.appInfo()} <br>
	${app2.appInfo()} <br>
	${app3.appInfo()} <br>
	`);

// app.instalar();
// app.abrir();
// app.cerrar();