
/*
----------------------
----------------Capitulo 4--------------
OBJETO Math - BASICO
----Metodos---
sqrt() raiz cuadrada
cbrt raiz cubica
max devulve el numero mas grande
min
random pseudo aleatorio entre 0 y 1
round redondea al numero mas cercano
fround Redondea a 15 decimales
floor devuelve el valor redondeado que sea mayor o menor igual que y apegado A ABAJO
trunc() redondea a lo que mejor nos gusta

----Propiedades---
PI  es el pi
SQRT1_2 raiz cuadrada de un medio
SQRT2

E constante de euler
LN2 logaritmo natural de 2
LN10 logaritmo natural de 10
LOG2E logaritmo de 2 
LOG10E


METODOS DE ARRAY
----Transformadores---
pop()- Elimina el ultimo elemeento de un array y lo devuelve
shitf()- elimina el primer elemento de un array y lo devuelve
push() - agreag un elemento al array al final de la lista
reverse() - invierte el orden de los elementos de un array
unshift()- agrega uno o mas elementos al inicio del array, y devuelve la nueva longuitud del array
sort() - ordena los elementos de un arreglo(array) localmente y lo devuelve el arreglo ordenado
splice()- cambia el contenido de un array eliminando elementos existentes y/o agregando nueuvos elementos (posicion, los a eliminar, "si es que quiero agregar algo mas")

----Accesores----
join() - une todos los elementos de una matriz (u objeto similar) en una cadena(con algo que queramos separar) y la devuelve
slice() - devuelve una parte del array dentro de un nuevo array empezando por inicio hasta fin(fin no incluido) parecido al substring
metodos ya vistos en cadenas: toString(), indesOf(), lastIndex(), includes()

----De Repeticiones ----
filter()- Crea un nuevo array con todos los elementos que cumplan la condicion (algo => algo.length (< > = etc) numero)
forEach - ejecuta la funcion indicada una vez por cada elemento del articulo

let nombre = ["Jhon","Anis","Csssa"];

nombre.filter(numero => document.write(numero + "<br>"));
-----
METODOS DE CADENAS

let cadena = "hola, como,estas";

let primeraL = cadena[0];
let demasL;

for (var i = 0; i< cadena.length; i++) {
	if (i==0) {
		demasL = cadena[i].toUpperCase();
	} else {
		demasL +=cadena[i];	
	}
}

resultado= cadena.split(",");

document.write(resultado[1]);
document.write(`<br> ${primeraL}`);
document.write(`<br> ${demasL}`);


concat()-junta dos o mas cadenas y retorna una nuueva

startsWith()- si una cadena comienza con los caracteres de otra cadena, devuelve true, sino devuelve false
endsWith()- si una cadena termina con los caracteres de  otra cadena, devuelve true, sino devuelve false
includes()- si una cadena puede econtrarse dentro de otra cadena, devuelve true, sino develve false
indexOf()- devuelve el indice del primercaracter de la cadena, si no existe , devuelve -1
lastIndexof()- devuelve el ultimo indice del primer caracter de la cadena, si no existe, devuelve -1

padStart()[propuesta de Estandar]- rellena cadena al principio con los caracteres deseados
padEnd() [propuesta de ECMA]- rellenar cadenaal final con los caracteres deseados
repeat()-  Devuelve la misma cadena pero repetida la cantidad

split()-divide la cadena como le pidamos
substring()- Nosretorna un pedazo de  la cadena seleccionada (desde,hasta)
toLowerCase()- convierte una cadena a miniscula
toUpperCase()- covierte una cadena a mayusula
toString()- metodo devuelve una cadena que representa el objeto
trim()- elimina los espacion en blanco al principio y al final
trimEnd()- elimina los espacion en blanco al inal de una cadena
trimStart()- elimina los espacios en blanco al inicio de una cadena
valueOf()- retorna el valor primitivo de un objeto string

-----------------------
Porner funciones normales con funciones flechas
var a= parseInt(prompt("numero a:"));
var b= parseInt(prompt("numero b:"));

function sumar(){
	
	let suma = a+b;

	document.write(`La suma es ${suma}`);
	document.write("<br>")
}

var restar = ()=>{
	let resta = a-b;

	document.write(`La resta es ${resta}`);
}

sumar();
restar();
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