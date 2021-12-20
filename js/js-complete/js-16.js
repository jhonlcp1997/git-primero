



/*
//*================22 Prototipos==================
// POO
// Clases (modelo a seguir)
// objetos(es una instancia de una clase) [atributos(caracteristicas), metodos(Acciones)]

const animal ={
    nombre: "Snoopy",
    sonar(){
        console.log("hago sonidos");
    }
}

console.log(animal);

//!no utilizar las Arrow Function dentro de las clases o funciones

function animals2(nombre,genero){
    this.nombre=nombre;
    this.genero=genero;
}
//metodos agregados al prototipo de la funcion constuctora
animals2.prototype.sonido = function(){
    console.log("Hago sonido");
}
animals2.prototype.saludar = function(){
    console.log(`Hola me llamo ${this.nombre}`);
}

const sno= new animals2("Snoopy","maho"),
sna = new animals2("snaap","hembra");

console.log(sno.saludar());
console.log(sna);




class animals{
    constructor(nombre,edad){
        this.nombre=nombre;
        this.edad=edad;
    }
    ladro(){
        console.log(`mi onomatopeya ${this.nombre}`);
    }
    vejez(){
        console.log(`yo ${this.nombre} y tengo ${this.edad}`)
    }
}

let perro = new animals("guar"),
gato = new animals("miau",11);

perro.ladro();
gato.vejez();


//*=================21 Arrow functions===========

//Es una nueva forma de definir funciones anonimas expresadas
const saludar = function(){
    console.log("Hola");
}

const saludar2 =()=>{
    console.log("Hola2");
}

const saludar3 =(nombre,edad)=> console.log(`Hola ${nombre} se que tu edad es ${edad}`);

const saludar4 = nombre => console.log(`Hola ${nombre} no se cual es tu edad`);

const sumar = (a,b,...c)=>{
    let resultado= a+b;

    c.forEach(function(n){
        resultado += n;
    });

    return console.log(resultado);
}

saludar();
saludar2();
saludar3("Jhon",24);
saludar4("Xion");
sumar(3,4,6,5);

//-----
const numeros = [1,2,3,4,5,6];
const numeros2 = numeros;

numeros.forEach(function(el,index){
    console.log(`El elemento ${el} esta enla posicion ${index}`);
})

numeros2.forEach((el,index)=>{console.log(`${el} esta en la posicion ${index}`)});

//----
function perro (){
    console.log(this);
}

const perro2 ={
    nombre:"Ken",
    ladrar(){
        console.log(this);
    }
}


perro();
perro2.ladrar();

//! una ARROW FUNCTION o FUNCION FLECHA  reconoce el CONTEXTO no el objeto



//*=================20 parametros REST & Operador Spread============

//! El parametro REST es tres puntos suspensivos ...
function sumar (a,b, ...c){
    let resultado = a+b;


    //forEach recive una funcion
    c.forEach(function(n){
        resultado+=n;
    });

    return resultado;
}

//! Con operado spread ...
console.log(sumar(1,5));
console.log(sumar(1,5,5,6,7));

const arr1 =[1,2,3,4,6],
arr2 = [6,4,6,2,4];

console.log(arr1,arr2);

const arr3 = [...arr1,...arr2];
console.log(arr3);



//*=================19 Objetos Literales==============

let nombre = "KEnaI",
    edad= 7;
const perro = {
    nombre:nombre,
    edad:edad,
    ladrar: function(){
        console.log("guauuuuu guauuu")
    }
}

console.log(perro);
perro.ladrar();

//! utilizaré un poco de ecmascript
const dog ={
    nombre,
    edad,
    raza:"Callajero",
    ladrar(){
        console.log("guauuuuu guauuu miau")
    }
}

console.log(dog);
dog.ladrar();


//*=================18 DESCTRUCTURACION==============

let numeros = [1,2,3];
//SIN destructuracion
let uno = numeros[0],
dos = numeros[1],
tres = numeros[2];
s
console.log(uno,dos,tres);

//CON destructuracion
const [one,two,three] = numeros; //*para numeros usa []; se ve guapo y te ahorrras muchas cosas
console.log(one,two,three);

let persona ={
    nombre: "Jhon",
    apellido: "Cruz",
    edad: 24
};
//!e importante que la variable destructurada sea igual a la que vamos a destructurar
let{nombre,apellido,edad} = persona; //*para strings usa {} tambien en arrays {}

console.log(nombre,apellido,edad);


//*==============16 MANEJO DE ERRORES================
try{
    console.log("El try se agrega el codigo a evaluar");
    // noexiste;
    // TODO: puedo probar cualquier tipo de error
    //*si es un numero
    let numero = 'hola';
    if(isNaN(numero)){
        throw new Error("el caractarer introducido no es un numero");
    }
} catch(error){
    console.log("%c Captura el error en catch de lo que encuentre en try","color:red")
    console.log(`%c se produjo el siguiente error: ${error}`,"color:orange");
} finally{
    console.log("El bloque finally se ejecutará siempre al final de try-catch")
}
*/