const jhon ={
    cadena: "jhon",
    numero: 100,
    booleano: true,
    arreglo: ["correr","programar","cocinar"],
    objeto: {
        twitter: "@nada"
    },
    nulo: null
}

console.log(jhon);

console.log(JSON);
// ?parse permite analizar lo que se encuentrea en un "" para un Javascript
console.log(JSON.parse("{}"));


// ?Stringify lo convierte todo a un string para JSON
console.log(JSON.stringify("{}"));
console.log(JSON.stringify([1,2,3]));
