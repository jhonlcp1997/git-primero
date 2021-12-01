
class Animal{
	constructor(especie, edad, color){
		this.especie= especie;
		this.edad= edad;
		this.color= color;
		this.informacion  =`Soy ${this.especie} , tengo ${edad} años y soy de color ${color}`
	}

	verinfo(){
		document.write(this.informacion);
	}
}


class Perro extends Animal {

	constructor(especie,edad,color,raza){
		super(especie, edad, color);
		this.raza=null;
	}
	ladrar(){
		alert("!waw!");
	}
	set setRaza(newName){
		this.raza=newName;
	}
	get 
}


let perroo = new Perro("Perro",5,"Rojo","Doberman");


perroo.verinfo();
perroo.setRaza= "Pedro";
document.write(perroo.raza);