// *========== curso 54: generators =========
function* iterable(){
    yield "Hola";
    console.log("Hola consola");
    yield "Hola2";
}

let iterador = iterable();
// console.log(iterador.next());
// console.log(iterador.next());

for(let y of iterador){
    console.log(y);
}

const arr =[...iterable()];
console.log(arr);

function cuadrado(valor){
    setTimeout(() => {
       return console.log({valor, resultado: valor*valor}) 
    }, Math.random() *1000);
}

function* generador() {
    console.log("Inicia Generator");
    yield cuadrado(0);
    yield cuadrado(1);
    yield cuadrado(2);
    yield cuadrado(3);
    yield cuadrado(4);
    yield cuadrado(5);
    console.log("Termina Generator");
}

let gen = generador();

for (let y of gen){
    console.log(y);
}

/*
// * ============== curso 53: Iterables & Iterators ======
const iterable = [1,2,3,4,5];
const iterador = iterable[Symbol.iterator]();

console.log(iterable);
console.log(iterador);
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());

let next = iterador.next();

while(!next.done){
   console.log(next.value) ;
   next = iterador.next();
}
*/
// * =============== curso 52: WeakSet & WeakMap======

// WEAKSET
// const ws = new WeakSet();
// let valor1= {"valor1":1};
// let valor2= {"valor2":2};
// let valor3= {"valor3":3};

// ws.add(valor1);
// ws.add(valor2);

// console.log(ws);

// ws.delete(valor2);

// console.log(ws.has(valor1));

// // setInterval(() => console.log(ws), 1000);

// setTimeout(()=>{
//     valor1=null;
//     valor2=null;
//     valor3=null;
// }, 5000);

// WEAKMAP
// const wm = new WeakMap();
// let llave1 = {};
// let llave2 = {};
// let llave3 = {};

// wm.set(llave1, 1);
// wm.set(llave2, 2);
// console.log(wm);

// console.log(wm.has(llave1));
// console.log(wm.has(llave3));

// console.log(wm.get(llave1));
// console.log(wm.get(llave2));
// console.log(wm.get(llave3));

// wm.delete(llave2);
// console.log(wm);

// wm.set(llave2,2);
// wm.set(llave3,3);
// console.log(wm);

// setInterval(() => console.log(wm), 1000);

// setTimeout(()=>{
//     llave1=null;
//     llave2=null;
//     llave3=null;
// }, 5000);
/* 
// *========== curso 51: Map =======
let mapa = new Map()
mapa.set("Nombre", "Jhon");
mapa.set("Conocimientos", "nada");
mapa.set("Cosas", "Nada");

console.log(mapa);
console.log(mapa.size);
console.log(mapa.get("Cosas"));
console.log(mapa.has("Cosas"));
mapa.set("Otros", 0);
console.log(mapa);
mapa.delete("Otros");
console.log(mapa);


for(let [key, value] of mapa){
    console.log(`Lo que viene primero es ${key} : ${value}`);
}

const llavesMapas2 = [...mapa.keys()];
const valoresMapa2 = [...mapa.values()];

console.log(llavesMapas2);
console.log(valoresMapa2);


// *=========== curso 50: sets=======0
arr=[1,2,3,4,4,5,5]
console.log(arr);
arr2 = new Set(arr);
console.log(new Set(arr));
arr2.add("Hola")
// console.log(arr[2].delete);
console.log(arr2.size);
console.log("Recorriendo los for: ");

for(item of arr2){
    console.log(item);
}

console.log("Recorriendo los for: ");
arr2.forEach(item => console.log(item));

let arr3 = Array.from(arr2); /* *Esto lo convierte en arreglo al set
console.log(arr3[2]);

arr2.delete("Hola");
console.log(arr2);

console.log(arr2.has(2)); /*Esto es para verificar que el dato se encuentra, si es si es true

arr2.clear();
console.log(arr2);

// * ======= CURSO 48: ASYNC-wAIT=========
function cuadradoPromise(value){
    if(typeof value !== "number"){
        return Promise.reject(`Error, el valor " ${value}" ingresado no es un número`);
    }

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                value,
                result: value * value
            });
        }, 0|Math.random()*1000);
    });
}

async function functionAsyncronaDeclarada (){
    try{
        console.log("inicio Async function");

        let obj = await cuadradoPromise(0);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);

        obj = await cuadradoPromise(1);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);

        obj = await cuadradoPromise("s");
        console.log(`Async Function: ${obj.value}, ${obj.result}`);
    } catch(err){
        console.error(err);
    }
}

functionAsyncronaDeclarada();

const functionAsyncronaExpresada = async() =>{
    try{
        console.log("inicio Async function");

        let obj = await cuadradoPromise(3);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);

        obj = await cuadradoPromise(4);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);

        obj = await cuadradoPromise("a");
        console.log(`Async Function: ${obj.value}, ${obj.result}`);
    } catch(err){
        console.error(err);
    }
}

functionAsyncronaExpresada();

// ======== CURSO 46-47: Promesas ================
function cuadradoPromise(value){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve({
                value: value,
                result: value * value
            });
        }, 1000);
    })
}

cuadradoPromise(0)
    .then(obj=> {
        // console.log(obj);
        console.log("Inicio Promise");
        console.log(`Promise: ${obj.value}, ${obj.result}`);
        return cuadradoPromise(1);
    })
    .then(obj=>{
        console.log(`Promise ${obj.value}, ${obj.result}`);
        return cuadradoPromise(2);
    })
    .then(obj=>{
        console.log(`Promise ${obj.value}, ${obj.result}`);
        return cuadradoPromise(3);
    })
    .then(obj=>{
        console.log(`Promise ${obj.value}, ${obj.result}`);
        return cuadradoPromise(4);
    })
    .then(obj=>{
        console.log(`Promise ${obj.value}, ${obj.result}`);
        return cuadradoPromise(5);
    })
    .then(obj=>{
        console.log(`Promise ${obj.value}, ${obj.result}`);
        console.log("Fin promesa");
    })
    .catch(error => console.error("no hay pero si"));



const promise = new Promise((resolve, reject) => {
    const number = Math.floor(Math.random() * 10);
    
    setTimeout(
        () => number > 5
            ? resolve(number)
             : reject(new Error('Menor a 5')),
        6000
    );
});
    
promise
    .then(number => console.log(number))
    .catch(error => console.error(error));

// Este es mi prueba

let edad = parseInt(prompt("Ingrese su cumpleaños"));

const prometo = new Promise((resolve, reject) =>{
    setTimeout(
        ()=> edad > 17
        ? resolve(`tu edad es ${edad} digamos que eres mayor de edad`)
        : reject(new Error(`Eres menor oe, tienes ${edad}`))
        // if(edad>18){
        //     resolve("Eres mayor, identificado con promesa");
        // } else{
        //     reject(new Error("Eres meno alerta roja"));
        // }
    , 7000);    
});

prometo
    .then(edad => console.log(edad))
    .catch(error => console.error(error));




*===== CURSO 45: Asincronía y el Event Loop =======
*Porcesamiento Single thread y Multi thread
*Operaciones de CPU y Operacion de I/O
*Operaciones Concurrentes y Paralelas
*Operaciones Bloqueantes y No Bloqueantes
*Operaciones Sincronas y Asincronas


// *Código sincrono Bloqueante
// (() => {
// console.log("Código Síncrono");
// console.log("Inicio");

// function dos(){
//     console.log("Dos");
// }

// function uno(){
//     console.log("Uno");
//     dos();
//     console.log("Tres");
// }

// uno();
// console.log("Fin");
// })();

// console.log(" ");
// console.log(" ");
// console.log(" ");

// // *Código Asincrono No Bloqueante
// (()=>{
//     console.log("Código Síncrono");
//     console.log("Inicio");
    
//     function dos(){
//         setTimeout(() => {
//             console.log("Dos");
//         }, 1000);
//     }
    
//     function uno(){
//         setTimeout(() => {
//             console.log("Uno");
//         }, 0);
//         dos();
//         console.log("Tres");
//     }
    
//     uno();
//     console.log("Fin");
// })();

// function cuadradoCallback(value, callback){
//     setTimeout(() => {
//         callback(value, value * value);
//     }, 0|Math.random()*100);
// }

// cuadradoCallback(0,(value, result)=>{
//     console.log("Inicia Callback");
//     console.log(`Callback ${value}, ${result}`);

//     cuadradoCallback(1,(value, result)=>{
//         console.log(`Callback ${value}, ${result}`);

//         cuadradoCallback(2,(value, result)=>{
//             console.log(`Callback ${value}, ${result}`);

//             cuadradoCallback(3,(value, result)=>{
//                 console.log(`Callback ${value}, ${result}`);

//                 cuadradoCallback(4,(value, result)=>{
//                     console.log(`Callback ${value}, ${result}`);
//                     console.log("Fin de Callback wtf")
//                 });
//             });

//         });
//     });
// });
*/