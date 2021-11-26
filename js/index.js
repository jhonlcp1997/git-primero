

/*
--------------------
Bucles

--Para terminar un bucle global desde un bucle de andentro
es llamando al label que los contiene

array1=["Maria","Jose","SSee"];
array2=["cisi","Cosasda",array1,"Cossss"];

forRancio:    //(Esto es un label)
for(let array in array2){
	if (array==2){
		for(let array of array1){
			document.write(array+"<br>");
			break forRancio;
		}
	}else{
		document.write(array2[array]+"<br>");
	}
}


--For con for in y for of
let animales= ["Gato","Perro","tirano"];

for(animal in animales){
	document.write(animal+"<br>");
}

document.write("<br>");

for(animal of animales){
	document.write(animal+"<br>");
}


--While con continue y break

let numero =0;

while(numero<100){
	
	if (numero== 17) {
		break;
	}
	else if (numero ==12) {
		numero++;
		continue;
	}
	else{
		document.write(`${numero} <br>`);
		numero++;
	}

}


----------------------------
Arrays asociativos parecidos a los de diccionarios de python

let descripcion= {
	Nombre: "Jhon Larry",
	Apellido: "Cruz Porras",
	DNI: "73753727"
}

let nombre = descripcion["Nombre"];
let apellido= descripcion["Apellido"];

frase = `
El nombre mio es: ${nombre} <br>
El apellido mio es: ${apellido} <br>`;

document.write(frase);
document.write(descripcion["Nombre"]);



---------------
1111111
variables: var, let, constant(no se puede modificar)
formas de sacarlo: alert, prompt, document
para poder concatenar numero empieza por un ""+numero1+numero2  o ${} pero con ``;

LO QUE TRABAJE CON LO DE ARRIBA
numero1 = 6;
numero2 = 5;

res1 = numero1 % numero2
res2 = numero1 & numero2

document.write(res1+" "+res2+" ");

rase1 = "Jhon Cruz";
rase2 = " Estoy caminando ";
document.write(rase1+rase2);
document.write(`Soy ${rase1}`+rase2);
-----------

*/