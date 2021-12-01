class Calculadora {
	constructor(){
	}
	sumar (num1, num2){
		return parseInt(num1) + parseInt(num2);
	}
	restar (num1, num2){
		return parseInt(num1) - parseInt(num2);
	}
	multiplicar (num1, num2){
		return parseInt(num1)*parseInt(num2);
	}
	dividir (num1, num2){
		return parseInt(num1)/parseInt(num2);
	}
	potenciar (num,exp){
		let numero = num**exp;
		return numero;
	}
	raizCuadrada(num){
		return Math.sqrt(num);
	}
	raizCubica(num){
		return Math.cbrt(num);
	}
}

const calculadora = new Calculadora();

alert("¿Que operacion deseas relizar?");
let operacion = prompt("1=sumar, 2=restar, 3=multiplicar, 4=dividir,5=potenciacion, 6=Raiz cuadrada, 7=Raiz cubica");

if (operacion==1){
	let numero1= prompt("primer numero para sumar")
	let numero2= prompt("segundo numero para sumar")
	resultado = calculadora.sumar(numero1,numero2);
	alert(`Tu resultado es: ${resultado}`);
} else if (operacion == 2) {
	let numero1= prompt("primer numero para restar")
	let numero2= prompt("segundo numero para restar")
	resultado = calculadora.restar(numero1,numero2);
	alert(`Tu resultado es: ${resultado}`);
} else if (operacion == 3){
	let numero1= prompt("primer numero para multiplicar")
	let numero2= prompt("segundo numero para multiplicar")
	resultado = calculadora.multiplicar(numero1,numero2);
	alert(`Tu resultado es: ${resultado}`);
} else if(operacion ==4){
	let numero1= prompt("primer numero para dividir")
	let numero2= prompt("segundo numero para dividir")
	resultado = calculadora.dividir(numero1,numero2);
	alert(`Tu resultado es: ${resultado}`);
} else if(operacion ==5){
	let numero= prompt("Numero para potenciar")
	let exp= prompt("exponente")
	resultado = calculadora.potenciar(numero,exp);
	alert(`Tu resultado es: ${resultado}`);
}
else if(operacion ==6){
	let numero1= prompt("Numero para raiz cuadrada")
	resultado = calculadora.raizCuadrada(numero1);
	alert(`Tu resultado es: ${resultado}`);
} else if(operacion ==7){
	let numero= prompt("Numero para raiz cubica")
	resultado = calculadora.raizCubica(numero);
	alert(`Tu resultado es: ${resultado}`);
}else{
	alert("No se puede realizar ninguna operacion");
}