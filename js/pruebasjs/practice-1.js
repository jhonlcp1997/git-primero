console.log("Empiezo");
// document.write("Probando2");

//* Ejercicio 26
const promedio= (conjunto=null)=>{
    if(conjunto===null) return console.warn("No ingresastes nada");
    if(conjunto.length===0) return console.warn("No ingresastes nada");
    if(!(conjunto instanceof Array)) return console.warn("El valor que ingresaste no es un arreglo");

    let resultado =0;
    for (let i = 0; i < conjunto.length; i++) {
        if(typeof conjunto[i] !== "number") return console.warn(`El valor ${conjunto[i]} no es un numero`);   
        resultado += conjunto[i];
    }
    return console.log(Math.fround(resultado/(conjunto.length)));
}

promedio([1,2,3,4,5,6,7,8,9,0]);


//* Ejercicio 25
const deleteDouble =(conjunto=null)=>{
    if(conjunto===null) return console.warn("No ingresastes nada");
    if(conjunto.length===0) return console.warn("No ingresastes nada");
    if(!(conjunto instanceof Array)) return console.warn("El valor que ingresaste no es un arreglo");

    let nuevoConjunto= new Set(conjunto);
    console.log(...nuevoConjunto);
}

deleteDouble([2,2,"u",3,"u"]);



//* Ejercicio 24

const ascDes=(conjunto=null)=>{
    if(conjunto===null) return console.warn("No ingresastes nada");
    if(conjunto.length===0) return console.warn("No ingresastes nada");
    if(!(conjunto instanceof Array)) return console.warn("El valor que ingresaste no es un arreglo");

    
    for (let i = 0; i < conjunto.length; i++) {
        if(typeof conjunto[i] !== "number") return console.warn(`El valor ${conjunto[i]} no es un numero`);   
    }
    

    console.log(`El valor ordenado ascendentemente es: ${conjunto.sort()} el valor al reveses :${conjunto.reverse()}`);

    return(console.log({
        
        Ascendente: conjunto.sort(),
        Descendente: conjunto.reverse(),  
    }))
}

ascDes([1,4,5,6,2]);



/*
//* Ejercicio 23
const paresImpares=(conjunto=null)=>{
    if(conjunto===null) return console.warn("No ingresastes nada");
    if(conjunto.length===0) return console.warn("No ingresastes nada");
    if(!(conjunto instanceof Array)) return console.warn("El valor que ingresaste no es un arreglo");

    let pares=[],impares=[];
    for (let i = 0; i < conjunto.length; i++) {
        if(typeof conjunto[i] !== "number") return console.warn(`El valor ${conjunto[i]} no es un numero`);

        if((conjunto[i]%2)===0) {
            pares.push(conjunto[i]);
        }else{
            impares.push(conjunto[i]);
        }
        
    }
    return(console.log({
        pares,
        impares
    }))
}

paresImpares([1,2,3,4,5,6]);



//* Ejercicio 22
const maxmin = (conjunto=null)=>{
    if(conjunto===null) return console.warn("No ingresastes nada");
    if(conjunto.length===0) return console.warn("No ingresastes nada");
    if(!(conjunto instanceof Array)) return console.warn("El valor que ingresaste no es un arreglo");


    for (const num of conjunto) {
        if(typeof num !== "number") return console.warn(`El valor ${num} no es un numero`);
    }

    let valor=[];
    valor[0]=Math.max(...conjunto);
    valor[1]=Math.min(...conjunto);

    return console.log(valor);
}


maxmin([12,14,15,55,-2]);


//* Ejercicio 21
const elevado=(conjunto=null)=>{
    if(conjunto===null) return console.warn("No ingresastes nada");
    if(conjunto.length===0) return console.warn("No ingresastes nada");
    for (let i = 0; i < conjunto.length; i++) {
        if(typeof conjunto[i]!=="number") return console.log(`El valor ${conjunto[i]} no es un numero`);
        conjunto[i]=Math.pow(conjunto[i],2);
        // console.log(conjunto[i]);
    }
    return console.log(`Los valores cuadrados son ${conjunto}`);
}

elevado([1,2,3,4]);



const siEmail=(email="")=>{
    if(!email) return console.warn("No ingresastes nada");

    let contadorArroba=0;
    let contadorPunto=0;
    for (let i = 0; i < email.length; i++) {
        if(email[i]==='@'){
            contadorArroba++;
        }else if(email[i]==='.'){
            contadorPunto++;
        }  
    }
    if(contadorPunto===1 && contadorArroba===1){
        console.log("El email esta correcto");
    }else{
        console.warn("Porfavor revise su email");
    }
}

siEmail("Jhon@gmail.com");



const validarEmail=(email="")=>{
    if(!email) return console.warn("No ingresaste ningun nombre");

    if(typeof email!== "string") return console.warn(`El valor "${email}" no es una cadena de texto`);

    let expReg=/[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email);

    return(expReg)
    ?console.info(`"${email}", es un email valido`)
    : console.warn(`"${email}", NO es un email valido`);
}
validarEmail("jhon@gmail.com.pa");
validarEmail("Fabio_leopano@hotmail.gatitas.com.pa");





//* ejercicio 19
const siNombre =(texto="")=>{
    if(!texto) return console.warn("No ingresastes nada");

    if(typeof texto!== "string") return console.warn("No ingresaste una cadena sino otra cosa");

    let contadorEspacio = 0;
    let correcto =true;
    for (let i = 0; i < texto.length; i++) {
        let numero=parseInt(texto[i]);
        if(!isNaN(numero)){
            console.warn("No es nombre correcto el ingresado");
            correcto=false;
            break;
        }
        if(texto[i]===' '){
            contadorEspacio++;
            if(contadorEspacio>1){
                correcto=false;
            }
        }   
    }
    if(correcto){
        console.log("El nombre ingresado es correcto");  
    }else{
        console.log("Verifica que sea nombre y apellido");
    }
}

siNombre("Jhon Cruz");
siNombre("jhon Cruz,jhon");
// siNombre("Jhon123 cruz");
// siNombre("jhon cruzz poo");

const validarNombre=(nombre="")=>{
    if(!nombre) return console.warn("No ingresaste ningun nombre");

    if(typeof nombre!== "string") return console.warn(`El valor "${nombre}" no es una cadena de texto`);

    let expReg=/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/g.test(nombre);

    return(expReg)
    ?console.info(`"${nombre}", es un nombre valido`)
    : console.warn(`"${nombre}", NO es un nombre valido`);
}


validarNombre("Jhon Cruz");




//* Ejercicio 18
const abcIdentidad =(texto="")=>{
    if(!texto) return console.warn("No ingresastes nada");

    if(typeof texto!== "string") return console.warn("No ingresaste una cadena sino otra cosa");

    let contadorVocal=0;
    let contadorConsonante=0;
    for (let i = 0; i < texto.length; i++) {
        let letra = texto[i];
        let numero=parseInt(texto[i]);
        if(!isNaN(numero)){
            continue;
        }else{
            switch(letra.toLowerCase()){
                case 'a':
                    contadorVocal++;
                    break;
                case 'e':
                    contadorVocal++;
                    break;
                case 'i':
                    contadorVocal++;
                    break;
                case 'o':
                    contadorVocal++;
                    break;
                case 'u':
                    contadorVocal++;
                    break;
                case ' ':
                        break;
                default:
                    contadorConsonante++;
                    break;
            }
        }   
    }
    console.log(`La palabra "${texto}" contiene ${contadorVocal} vocal/es y ${contadorConsonante} consonante/s`);
}

// abcIdentidad("Hola Mundo");
// abcIdentidad();
// abcIdentidad(1234);
abcIdentidad("jhoonm1234567 tu");
abcIdentidad("Jhón...");

const abcIdentidad2 =(texto="")=>{
    if(!texto) return console.warn("No ingresastes nada");

    if(typeof texto!== "string") return console.warn("No ingresaste una cadena sino otra cosa");

    texto= texto.toLowerCase();
    let contadorVocal=0;
    let contadorConsonante=0;
    for (let letra of texto) {
        let numero=parseInt(letra);
        if(!isNaN(numero)){
            continue;
        }else if(/[aeiouáéíóúü]/.test(letra)){
            contadorVocal++;
        }else if(/[bcdfghjklmnñpqrstvwxyz]/.test(letra)){
            contadorConsonante++;   
        }else{
            continue;
        }   
    }
    console.log(`La palabra "${texto}" contiene ${contadorVocal} vocal/es y ${contadorConsonante} consonante/s`);
}

abcIdentidad2("Jhon cruz123...");



//*ejercicio 17
//date.now()cuantos segundos han pasado desde 1970
// console.log(Date.now());
// let tengo= Date.now();
// let minuto=tengo/60;
// let hora=tengo/3600;
// let dia=tengo/(60*60*24);
// let semana=tengo/(60*60*24*7);
// let mes=tengo/(60*60*24*7*4);
// let ano=tengo/(60*60*24*7*4*12);
// console.log(60*60*24*7*4*12*51)
// console.log(mes);
// console.log(ano);


const calcularAnios  = (fecha=undefined)=>{
    if(fecha===undefined) return console.warn("No ingresaste la fecha");

    if(!(fecha instanceof Date)) return console.warn("El valor que ingresaste no es una fecha");

    let hoyMenosFecha = new Date().getTime()-fecha.getTime(),
    aniosEnMS = 1000*60*60*24*365,
    aniosHumanos =Math.floor(hoyMenosFecha/aniosEnMS);

    return (Math.sign(aniosHumanos)===-1)
        ?console.info(`Faltan ${Math.abs(aniosHumanos)} años para el ${fecha.getFullYear()}`)
        :(Math.sign(aniosHumanos)===1)
        ? console.info(`Han pasado ${aniosHumanos} años, desde ${fecha.getFullYear()}`)
        :console.log(`Estamos en el año actual ${fecha.getFullYear()}`)
}

calcularAnios();
calcularAnios(new Date(2084,4,23));


//*ejercicio 16

const descuento =(numero=undefined,porcentaje=undefined)=>{
    (numero===undefined || typeof numero!=="number")? console.warn("revisa la cantidad ingresada"):(porcentaje===undefined ||porcentaje<0 || typeof porcentaje!=="number")? console.warn("revisa el porcentaje ingresado"): console.log((numero*(100-porcentaje))/100);
}

// descuento();
// descuento("",20);
// descuento(1000);
descuento(1000,20);


//*ejercicio 15

const transformando =(numero,base)=>{
    let resultado =0;
    let valor=[];
    switch (base){
        case 2:
            let variable = numero.toString();
            // console.log(variable);
            // console.log(variable.length);
            resultado=parseInt(variable,2); //Con parseInt se arregla todo
            // for (let i = variable.length; i >=0; i--){
            //    resultado += Math.pow(variable[i],i);
            //    console.log(resultado);
            // }
            console.log(`${resultado} en base 10`);
            break;
        case 10:
            console.log(`${numero.toString(2)} en base 2`);
            while(numero>1){
                valor.push(Math.floor(numero%2));
                numero=numero/2;
                if(numero===1) valor.push(1);
            }
            resultado=parseInt(numero,10);
            console.log(`${valor.reverse()} en base 2`);
            console.log(`${resultado} en base 2`);
            break;
        default:
            console.warn("NO esta completo");
            break;
    }
}

transformando(100,2);
transformando(114,10);



//*ejercicio 14
const conversion = (valor,grado)=>{
    grado=grado.toUpperCase();
    let resultado;
    switch (grado){
        case "C":
            resultado= (valor*1.8)+32;
            resultado=Math.round(resultado);
            console.log(`${resultado}° farenheit`);
            break;
        case "F":
            resultado = (valor-32)/1.8;
            console.log(`${resultado} celcius`);
            break;
        default:
            console.warn("NO esta completo");
            break;
    }
}

conversion(97,"f");

//*ejercicio 13
const determinado = (numero)=>((numero%2)===0)? console.log("Es par"):console.log("Es impar");

determinado(20);
    


//*ejercicio 12
const primo =(numero=undefined)=>{

    if(numero===undefined) return console.warn("No ingresaste un numero");

    if(typeof numero !=="number") return console.warn("No es un numero el que inresaste");

    if(numero===0) return console.warn("no puedes ingresar el 0");

    if(numero===1) return console.warn("no puedes ingresar el 0");

    if(Math.sign(numero)===-1) return console.warn("no puedes ingresar negativos");

    let residuo;
    let valor= true;
    for (let i = 2; i < numero; i++) {
        residuo = numero%i;
        // console.log(residuo,i);
        if(residuo=== 0){
            valor=false;
            console.info("entro");
            break;
        }
    }
    console.log(valor);
}

primo(2);




//*ejercicio 11

const factorial =(numero)=>{
    let resultado=1;
    for (let i = 1; i <= numero; i++) {
        resultado *= i;
    }
    
    console.log(resultado);
}

factorial(5);


//*ejercicio 10

const capicua =(numero)=>{
    let numero2 = numero.toString();
    numero2= numero2.split("").reverse().join("");
    numero = numero.toString();
    if(numero2===numero){
        console.log(`El numero ${numero} es capicua`);
    }else{
        console.log("El numero no es capicua");
    }

}

capicua(2004);


//*ejercicio 9

const ranndom =()=> console.log (Math.round((Math.random()*100))+500);

ranndom();





//*ejericio 8

const eliminarCaracte=(texto="", patron="")=> (!texto)?console.warn("No ingresaste un texto"):(!patron)?console.warn("No ingresaste un patron de caracteres"): console.info(texto.replace(new RegExp(patron, "ig"),""));

eliminarCaracte("xyz1, xyz2, xyz3, xyz4, xyz5 y x","xyz");

//*ejercicio 7
function revisar(texto){
    let momentaneo ='';
    momentaneo = texto;

    if(momentaneo === texto.split("").reverse().join("")){
        console.log("Es paindromo");
    }
    else{
        console.warn("NO  es palindromo");
    }
}

revisar("osa");

//* Ejercicio 6

const textoEnCadena =(cadena="",texto="")=>{
    let i=0, contador=0;

    while(i!== -1){
        i=cadena.indexOf(texto,i);
        if(i!==-1){
            i++;
            contador++;
        }
    }
    return console.log(`La palabra  ${texto} se repite ${contador}`);
}

textoEnCadena("yo, no se yo yo tal vez, yo quiero","yo");


//*ejercicio 5 
const revertir=(texto="")=>{

    (!texto)? console.warn("NO escribiste nada"): console.log(texto.split("").reverse().join(""));
    // if(!texto){
    //     console.warn("NO escribiste nada");
    // } else{
    //     // texto.split();
    //     // let palabra = texto.reverse();
    //     return console.log(texto.split("").reverse().join(""));
    // }
}

revertir("HOLA mundo");


// TODO: 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.


//*ejercicio 1
function mifuncion(texto){
    
    return texto.length;
}

console.log(`Hola Mundo tiene ${mifuncion("Hola mundo")}`);

//*ejercicio 2
function recorte (texto2,corte){
    let vuelto =[];
    for(let i=0; i<corte;i++){
        vuelto += texto2[i];
    }
    return vuelto;
}

console.log(recorte("Hola Mundo",4));

const recortetext=(cadena='',longitud=undefined)=> (!cadena)? console.warn("no ingresaste nada de texto"):(longitud===undefined)?console.warn("No ingresastes la longuitud"):console.info(cadena.slice(0,longitud));

// recortetext("Hola",2);
// recortetext();
// recortetext("Hola texto");
// recortetext("",2)

//*ejercicio 3
function recorteTexto (texto3,caracter){
    let vuelto =[];
    let palabra=[];
    for (let i = 0; i <= texto3.length; i++) {
        // console.log(i);
        if(caracter==texto3[i] || i==(texto3.length)){
            vuelto.push(palabra);
            // console.log(i);
            palabra=[];
        }else{
            palabra += texto3[i];
            // console.log(`%c${palabra}`,`color:orange`);
            // console.log("Aqui");
        }
    }
    return vuelto;
}

// console.log(recorteTexto("Hola que tal",' '));

let parafrase = "Hola que tal";
let corte = parafrase.split(' ');
console.log(corte);



//*ejercicio 4

function repetir (texto,repeticiones){
    let todo='';
    todo=texto;
    if(repeticiones <=0){
        return todo='nada';
    }else{
        for (let i = 0; i < (repeticiones - 1); i++) {
            todo += " "+texto;
        }
        return todo;
    }
}

console.log(repetir("Hola Mundo",3));
console.log(repetir());

const repetirTexto =(texto="",veces=undefined)=>{
    if(!texto) return console.warn("No ingresaste texto");

    if(veces===undefined) return console.warn("No ingresaste el numero de vecez");

    if(veces ===0) return console.error("El numero de vecez no puede ser  0");

    if (Math.sign(veces) === -1) return console.error("El numero de veces no puede ser negativo");
    

    for(let i =1; i<=veces; i++) console.info(`${texto},${i}`);
}

repetirTexto("Hola Mundo",2);
*/