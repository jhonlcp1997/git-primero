
class Celular{
	constructor(color,peso,rdp,rdc,ram){
		this.color=color;
		this.peso=peso;
		this.resolucionDePantalla=rdp;
		this.resolucionDeCamara = rdc;
		this.memoriaRam =ram;
		this.encendido=false;
	}
	presionarBotonEncendido(){
		if(this.encendido==false){
			alert("Celular encendido");
			this.encendido=true;
		} else{
			alert("El celular apagado");
			this.encendido=false;
		}
	}
	reiniciar(){
		if (this.encendido==true) {
			alert("Reiniciando celular");
		} else{
			alert("el celular esta apagado");
		}
	}
	tomarFotos(){
		alert(`foto tomada  con una resulacion de: ${this.resolucionDeCamara}`);
	}
	grabarVideo(){
		alert(`grabando video en ${this.resolucionDeCamara}`);
	}
	mobileInfo(){
		return `
		Color: <b>${this.color}</b></br>
		Peso: <b>${this.peso}</b></br>
		Tamaño: <b>${this.resolucionDePantalla}</b></br>
		Resolucion de Video: <b>${this.resolucionDeCamara}</b></br>
		Memoria Ram: <b>${this.memoriaRam}</b></br>
		`;
	}
}

class CelularAltaGama extends Celular{
	constructor(color,peso,rdp,rdc,ram,rdce){
		super(color,peso,rdp,rdc,ram);
		this.resolucionDeCamaraExtra =rdce;
	}
	grabarVideoLento(){
		alert("Estas Grabaando en camara lenta");
	}
	reconocimientoFacial(){
		alert("Vamos a iniciar reconocimiento Facial");
	}
	mobileAltaInfo(){
		return this.mobileInfo() + `Resolucion de Camara extra: ${this.resolucionDeCamaraExtra} </br>`;
	}
}

// celular1= new Celular("Negro","150g","5'","Full hd","2GB");
// celular2= new Celular("Rojo","120g","5.4'","Full hd","3GB");
// celular3= new Celular("blanco","155g","5.5'","Hd","4GB");

celular1= new CelularAltaGama("rojo","130g","5.2","4k","3GB","Full hd");
celular2= new CelularAltaGama("negro","142g","6","4k","4GB","Hd");

document.write(`
	${celular1.mobileAltaInfo()} <br>
	${celular2.mobileAltaInfo()} <br>
	`);

// celular1.presionarBotonEncendido();
// celular1.tomarFotos();
// celular1.grabarVideo();
// celular1.reiniciar();
// celular1.presionarBotonEncendido();