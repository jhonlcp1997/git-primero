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
/* 
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