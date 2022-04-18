const $clock = document.querySelector(".clock");

let iniciado= true;

let hora = new Date();
// $clock.insertAdjacentText("afterbegin", clock);
let dato = hora.toLocaleString();
// console.log(dato);
// console.log(hora.toLocaleDateString())
// // console.log(new Date("May 7,2022 03:04:20").getTime());
const miliSeg_cumple = new Date("May 7,2022 00:00:00").getTime();
// console.log(`faltan ${Math.floor((miliSeg_cumple- hora.getTime())/(1000*60*60*24))}`)
// console.log(hora.getSeconds());
// console.log(new Date().getHours())



// console.log(days);
// console.log(hours);
// console.log(minutesDeci);

function reloj (iniciado){
    
    if(iniciado){
        intervalo =setInterval(() => {
            let now = new Date().getTime(),
            limitTime = miliSeg_cumple - now,
            days = Math.floor(limitTime/(1000*60*60*24)),
            hoursDeci = limitTime % (1000*60*60*24)/(1000*60*60),
            hours = ("0"+Math.floor(hoursDeci)).slice(-2),
            minutesDeci = limitTime % (1000*60*60)/(1000*60);
            minutes = ("0"+Math.floor(minutesDeci)).slice(-2),
            seconds = ("0"+ Math.floor(limitTime % (1000*60)/(1000))).slice(-2);
            hora = new Date();
            let clock = (`dias ${days}, horas${hours}, minutos ${minutes}, segundos ${seconds}`);
            // console.log(clock)
            $clock.textContent= clock;
        }, 1000);
    } else{
        console.log("entro al else");
        clearInterval(intervalo);
    }
    console.log(iniciado);
}

reloj(true);


// *==== Ejercicio del boton y el cuadro ====
// const $circle = document.querySelector(".circle");

// console.log($circle);
// // const left = $circle.style.getPropertValue("left");
// // console.log($circle.style.getPropertValue("left"));
// console.log($circle);

// window.onload = function(){
//     document.onkeydown = mostrar;
//     document.onkeyup = mostrar2;
// }

// function mostrar (evObject){
//     var msg = ''; var elCaracter = String.fromCharCode(evObject.which);

//     if (evObject.which!=0 && evObject.which!=13) {

//     msg = 'Tecla pulsada: ' + elCaracter;
//     // $circle.style["left"] = "5rem";
//         console.log(msg);
//     // control.innerHTML += msg + '-----------------------------<br/>'; 
//     }

//     else { msg = 'Pulsada tecla especial';
//         console.log(msg);
//     // control.innerHTML += msg + '-----------------------------<br/>';
//     }

//     eventoControlado=true;
// }

// var movTop = 0;
// var movLeft = 0;
// function mostrar2 (evObject){
//     var teclaPulsada = evObject.keyCode;
//     if (teclaPulsada == 38) { 
//         movTop -= 10;
//         $circle.style["top"]= movTop+"px";
//     }

//     else if (teclaPulsada == 39) { 
//         movLeft += 10;
//         $circle.style["left"]= movLeft+"px";
//     }

//     else if (teclaPulsada == 40) { 
//         movTop += 10;
//         $circle.style["top"]= movTop+"px";
//     }

//     else if (teclaPulsada == 37) { 
//         movLeft -= 10;
//         $circle.style["left"]= movLeft+"px";
//     }

//     else if (eventoControlado == false) { msg2 = 'Pulsada tecla especial';}

//     // if (msg) {control.innerHTML += msg + '-----------------------------<br/>';}
//     console.log( teclaPulsada);

//     eventoControlado = false;
// }


// *======Ejercio del reloj
// const $clock = document.querySelector(".clock");
// const $btnStop_clock = document.querySelector(".btn-stop_clock");
// const $btnStart_clock = document.querySelector(".btn-start_clock");
// const $btnStart_alarm = document.querySelector(".btn-start_alarm");
// const $btnStop_alarm = document.querySelector(".btn-stop_alarm");

// let iniciado= true;



// let hora = new Date();
// // $clock.insertAdjacentText("afterbegin", clock);
// console.log(hora.getSeconds());
// console.log(new Date().getHours())

// let intervalo = setInterval(() => {

// }, 1000);

// function reloj (iniciado){
    
//     if(iniciado){
//         intervalo =setInterval(() => {
//             hora = new Date();
//             let clock = ((hora.getHours()) +":"+(hora.getMinutes())+":"+(hora.getSeconds()));
//             // console.log(clock)
//             $clock.textContent= clock;
//         }, 1000);
//     } else{
//         console.log("entro al else");
//         clearInterval(intervalo);
//     }
//     console.log(iniciado);
// }

// $btnStop_clock.addEventListener("click", ()=>{
//     $btnStop_clock.setAttribute("disabled","");
//     reloj(false);
// })

// $btnStart_clock.addEventListener("click", ()=>{
//     $btnStop_clock.removeAttribute("disabled");
//     reloj(true);
// })

// $btnStart_alarm.addEventListener("click", ()=>{
//     $btnStart_alarm.setAttribute("disabled","");
// })

// $btnStop_alarm.addEventListener("click", ()=>{
//     $btnStart_alarm.removeAttribute("disabled");
// })