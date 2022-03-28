
//*========== 33 Modulos =================
import { PI,usuario,sumar,aritmetica as arit} from "./exportar.js";

console.log(PI,usuario);
console.log(sumar(3,8));
console.log(arit.restar(4,2));

/*
//*=========== 32 Funciones anónimas autoejecutadas==========

(function () {
    console.log("Mi primer funciona anonima autoejecutada");
})();

(function (d,w,c) {
    console.log("Mi segunda funcion anonimaautoejecutada")
    console.log(d);
    console.log(w);
    console.log(c);
    c.log("Este es el console log");
})(document,window,console);





//*===========31 expresiones regulares=============

let cadena= "Lorem, al paracer no funciona esta gafera, y no se por que pero seguire okey";

let expReg= new RegExp("Lorem","ig");
let expReeg = /no/ig;
console.log(expReg.test(cadena));
console.log(expReg.exec(cadena));

console.log(expReeg.test(cadena));
console.log(expReeg.exec(cadena));



//*============ 30 alert,confirm, prompt===========

let nombre= window.prompt("Ingrese");

window.alert(`Hola ${nombre}`);
let validacion =  window.confirm("¿Ese es tu nombre correcto?");

if(validacion){
    console.log(`si, tu nombe verdadero es ${nombre}`);
}else{
    console.log("Tienes que poner tu verdadero nombre");
}



//*=============29 Operador de cortocircuito=============
function saludar(nombre){
    nombre= nombre || "Desconocido";
    console.log(nombre);
}

saludar("Jhon");
saludar();

console.log(false && "Valor de la derecha");



//*=============28 Objeto Math====================

// console.log(Math);
console.log(Math.PI);
//Todo:  Metodos a entender
console.log(Math.abs(-7.3));
console.log(Math.ceil(7.2));
console.log(Math.floor(7.8));
console.log(Math.round(7.48));
console.log(Math.sqrt(36));
//exponete
console.log(Math.pow(2,5));
//Da  positivo como -1 0 1
console.log(Math.sign(-0.3));
console.log(Math.random()*100);
console.log(Math.round(Math.random()*1000));



//*=============27 Objeto Date ========================
console.log(Date());

let fecha = new Date();
//dia del mes
console.log(fecha.getDate());
//dia de la semana
console.log(fecha.getDay());
//mes del año  >>0-1-2-3-4-5-6-7-8-9-10-11
console.log(fecha.getMonth());
//año actual
console.log(fecha.getFullYear());
console.log(fecha.getHours());
console.log(fecha.getMinutes());
console.log(fecha.getSeconds());
console.log(`toda la fecha ${fecha.toString()}`);
console.log(`Solo la fecha ${fecha.toDateString()}`);
console.log(fecha.toLocaleDateString());
console.log(fecha.toLocaleString());
console.log(fecha.getTimezoneOffset());
console.log(fecha.getUTCDate());
console.log(fecha.getUTCHours());
// console.log(Date.now()); significa cuatos seguntos han pasado desde 1970

//! SI PUEDES UTILIZAR UNA LIBRERIA QUE TILIZA MEJOR EL TIEMPO REVIZA MOMENT.JS

//Probamos otra cosa

let cumpleJhon = new Date(1997,5,7);
console.log(cumpleJhon);


//*============== 26 Objeto consola ======================
console.log(console);
console.error("Esto es un error");
console.warn("Esto es un aviso");
console.info("%c Este es para dar informacion",`color:green`);
console.log(document);
console.dir(document);

console.clear();

console.groupCollapsed("los cursos que sigo");
console.log("Matematicas");
console.log("Nodejs");
console.groupEnd();

console.clear();

console.log(console);
console.table(Object.entries(console).sort());

console.clear();

console.time("Cuanto demora mi codigo");
const arreglo= Array(10000);

for(let i = 0; i< arreglo.length; i++){
    arreglo[i] = i;
}

console.timeEnd("Cuanto demora mi codigo");

console.clear();

for(let i = 0; i<=10;i++){
    console.count("Contando for:");
    console.log(i);
}

console.clear();

let x=3, y=2, pruebaXY = "Se espera ue X siempre sea menor que Y";

console.assert(x<y,(pruebaXY));

//*==============25 Metodos estaticos, getters y setters==========
class Animal{
    //atributos
    constructor(nombre,genero){
        this.nombre= nombre;
        this.genero= genero;
    }
    

    //MEtodos
    sonar(){
        console.log("Hago ruidos estoy vivo");
    }

    saludar (){
        console.log(`Hola me llamo ${this.nombre}`);
    }
}

class Perro extends Animal{
    constructor(nombre,  genero, tamano){
        //!Solo poniendo super([y parametros]) se hereda del padre
        super(nombre,genero);
        this.tamano= tamano;
        this.raza =  null;
    }

    ladra(){
        console.log("Guau Gauu");
    }

    altura(){
        console.log(`Tamaño ${this.tamano}`);
    }

    //TODO: un metodo estatico se pueden ejecutar sin necesidad de instanciarla clase

    static queEres(){
        console.log("Soy un perro que deriba de los lobos y los vaqueros pa");
    }

    //TODO: los getter y  setters son metodos especiales que nos permiten establecer y obtener los valores de atributos de nuestra clase
    get getRaza(){
        return this.raza;
    }

    // los setters a veces se le agrega parametros
    set setRaza(raza){
        this.raza=raza;
    }
}

Perro.queEres();

const mimi = new Animal("MIMI","Hembra");
const scoob = new Animal("Scooby","Macho");
const boby = new Perro("Boby","Macho","Alto");

console.log(mimi);
console.log(scoob);
console.log(boby);

mimi.saludar();
mimi.sonar();

scoob.saludar();
scoob.sonar();

boby.saludar();
boby.ladra();
boby.altura();

//! LOS GETTERS Y SETTERS SE COMPORTAN COMO ATRIBUTOS A PESAR DE SER FUNCIONES
console.log(boby.getRaza);
boby.setRaza= "Gran Danes";
console.log(boby.getRaza);



//*==============24 Clases y Herencia===========
class Animal{
    //atributos
    constructor(nombre,genero){
        this.nombre= nombre;
        this.genero= genero;
    }
    

    //MEtodos
    sonar(){
        console.log("Hago ruidos estoy vivo");
    }

    saludar (){
        console.log(`Hola me llamo ${this.nombre}`);
    }
}

class Perro extends Animal{
    constructor(nombre,  genero, tamano){
        //!Solo poniendo super([y parametros]) se hereda del padre
        super(nombre,genero);
        this.tamano= tamano;
    }

    ladra(){
        console.log("Guau Gauu");
    }

    altura(){
        console.log(`Tamaño ${this.tamano}`);
    }
}


const mimi = new Animal("MIMI","Hembra");
const scoob = new Animal("Scooby","Macho");
const boby = new Perro("Boby","Macho","Alto");

console.log(mimi);
console.log(scoob);
console.log(boby);

mimi.saludar();
mimi.sonar();

scoob.saludar();
scoob.sonar();

boby.saludar();
boby.ladra();
boby.altura();
*/