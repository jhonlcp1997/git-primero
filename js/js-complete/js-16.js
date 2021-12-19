
//*=================21 Arrow functions===========

/*
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