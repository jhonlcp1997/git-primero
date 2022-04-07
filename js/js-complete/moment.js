
// *======= DOM 76: Delegación de Eventos  =============

function flujoEventos(e){
    console.log(
        `Hola te saluda ${this}, el click lo originó ${e.target.className}`
    )
}

document.addEventListener("click", (e)=>{
    console.log("Se hizo click en ", e.target);

    if(e.target.matches(".eventos-flujo div")){
        flujoEventos(e);
    }

    if(e.target.matches(".eventos-flujo a")){
        alert("Aqio se ejecuto el IF");
        e.preventDefault();

    }
});

/*
// *======= DOM 75: STOP propagation & preventDefault=======
const $divEventos = document.querySelectorAll(".eventos-flujo div"),
$linkEnventos = document.querySelector(".eventos-flujo a");

function flujoEventos(e){
    console.log(`Hola te saluda ${this.className}, el click lo origino ${e.target.className}`);
    e.stopPropagation();
}

console.log($divEventos);

$divEventos.forEach(div =>{
    div.addEventListener("click",flujoEventos);
});

$linkEnventos.addEventListener('click',(e) =>{
    alert("Esto me va a asalir de alert supuestamente");
    e.preventDefault();
    e.stopPropagation();
});

// *========DOM 74: Flujo de Eventos (burbuja y Captura)=======
const $divEventos = document.querySelectorAll(".eventos-flujo div");

function flujoEventos(e){
    console.log(`Hola te saluda ${this.className}, el click lo origino ${e.target.className}`);
}

console.log($divEventos);

$divEventos.forEach(div =>{
    div.addEventListener("click",flujoEventos, {
        capture: false,
        once:true
    });
})

// *======= DOM 73: Eventos con Parámetros y Remover Eventos ====
function holaMundo () {
    alert("Hola Mundo");
    console.log(Event);
}

function saludar (nombre="Desconocid@"){
    alert(`Hola ${nombre}`);
    console.log(event);
}

const $eventoSemantico = document.getElementById("eventoSemantico"),
$eventoMultiple = document.getElementById("evento-multiple"),
$removedorEvento = document.getElementById("removedor-event");

$eventoSemantico.onclick = holaMundo;


$eventoSemantico.onclick = holaMundo;
$eventoSemantico.onclick = function(){
    alert("Me ejecuto por evento semantico");
}

$eventoMultiple.addEventListener('click', (e) =>{
    alert("Holass")
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(event);
})

$eventoMultiple.addEventListener("click", () =>{
    saludar();
    saludar("JHN");
})

const removerDobleClick = (e) =>{
     // console.log("hizo el doble Click");
     alert(`Removiendo el evento tipo : ${e.type}`);
     console.log(e);
     $removedorEvento.removeEventListener("dblclick",removerDobleClick);
     $removedorEvento.disabled = true;
}

$removedorEvento.addEventListener("dblclick",removerDobleClick)


// *======= DOM 72: Manejadores de eventos ========

function holaMundo () {
    alert("Hola Mundo");
    console.log(Event);
}

const $eventoSemantico = document.getElementById("eventoSemantico"),
$eventoMultiple = document.getElementById("evento-multiple");

$eventoSemantico.onclick = holaMundo;


$eventoSemantico.onclick = holaMundo;
$eventoSemantico.onclick = function(){
    alert("Me ejecuto por evento semantico");
}

$eventoMultiple.addEventListener('click', (e) =>{
    alert("Holass")
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(event);
})
// *===== DOM 71: mODIFICANDO eLEMENTOS (COOL Style)======

const $cards = document.querySelector(".cards"),
$newCard = document.createElement("figure");

let $contentCard=`
<img src="https:/placeimg.com/200/200/any" alt="any">
<figcaption></figcaption>
`;

$newCard.classList.add("card");

$newCard.insertAdjacentHTML("beforeend",$contentCard);
$newCard.querySelector("figcaption").insertAdjacentText("afterbegin","Any");
// $cards.insertAdjacentElement("afterbegin", $newCard);

// $cards.prepend($newCard);
// $cards.append($newCard);
// $cards.before($newCard);
$cards.after($newCard);

// *====== DOM 70: Modificando Elementos (Old Style)=====
const $cards = document.querySelector(".cards"),
$newCard = document.createElement("figure"),
$cloneCards = $cards.cloneNode(true);

$newCard.innerHTML=`
<img src="https:/placeimg.com/200/200/any" alt="any">
<figcaption>Any</figcaption>
`;

$newCard.classList.add("card");

// $cards.insertBefore($newCard, $cards.firstElementChild);
// $cards.removeChild($cards.lastElementChild);

document.body.appendChild($cloneCards);


// *============= DOM 69: Templates HTML ================
const $cards = document.querySelector(".cards"),
    $template = document.getElementById("template_card").content,
    $fragment = document.createDocumentFragment(),
    cardContent = [
        {
            title: "Tecnología",
            img: "https://placeimg.com/200/200/tech",
        },
        {
            title: "Animales",
            img: "https://placeimg.com/200/200/animals",
        },
        {
            title: "Arquitectura",
            img: "https://placeimg.com/200/200/arch",
        },
        {
            title: "Gentita",
            img: "https://placeimg.com/200/200/people",
        },
        {
            title: "Naturalesa",
            img: "https://placeimg.com/200/200/nature",
        }
    ];

cardContent.forEach(el =>{
    $template.querySelector("img").setAttribute("src", el.img);
    $template.querySelector("img").setAttribute("alt", el.title);
    $template.querySelector("figcaption").textContent = el.title;

    let $clone = document.importNode($template, true);
    $fragment.appendChild($clone);
})

$cards.appendChild($fragment);

// *========== DOM 68: Creando Elementos y Fragmentos ========
const $figure = document.createElement("figure"),
    $img = document.createElement("img"),
    $figcaption = document.createElement("figcaption"),
    $figcaptionText = document.createTextNode("Animals"),
    $cards = document.querySelector(".cards"),
    $figure2 = document.createElement("figure");

$img.setAttribute("src", "https://placeimg.com/200/200/animals");
$img.setAttribute("alt", "Animals");
$figure.classList.add("card");

$figcaption.appendChild($figcaptionText);
$figure.appendChild($img);
$figure.appendChild($figcaption);
$cards.appendChild($figure);

$figure2.innerHTML = `
<img src="https://placeimg.com/200/200/people" alt="people">
<figcaption>People</figcaption>
`

$figure2.classList.add("card");
$cards.appendChild($figure2);

console.log(document.body)

// *=========== DOM 67: DOM trabersing: Recorriendo el DOM================
const $card = document.querySelector(".cards");

console.log($card);
console.log($card.children);
console.log($card.childNodes);
console.log($card.parentNode);
console.log($card.firstElementChild);
console.log($card.lastElementChild);
console.log($card.previousSibling);
console.log($card.nextSibling);
console.log($card.closest("div"));
console.log($card.closest("body"));
console.log($card.children[3].closest("section"));


// *=========== DOM 66: Texto y HTML ===============
const $whatlsDOM = document.getElementById("que-es");

let text = `
    <p>
    El Modelo de objeto del Documento(<b><i>DOM-Document Object Model</i></b>) es una API para documentos HTML y XML.
    </p>
    <p>
    Este proveé una representacion estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
    </p>
    <p>
    <mark>El DOM no es parte de la especifiacion de Javascript, es una API para los navegadores</mark>
    </p>
`;

$whatlsDOM.textContent = text;
$whatlsDOM.innerHTML = text;
$whatlsDOM.outerHTML = text;



// *=========== DOM 65: Clases CSS ==================
// Esto es clases que no lo pude hacer en css :V
const $cards = document.querySelector(".cards");
const $img = document.querySelector(".img");
$img.classList.add("rotate-45");
console.log($img.classList);

console.log($cards.classList);
console.log($cards.classList.contains("rotate-45"));
$cards.classList.add("rotate-45");
console.log($cards.classList.contains("rotate-45"));

// *========== DOM 64:estilos y variables css=============
const $linkDOM = document.querySelector(".link-dom");

console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style"));
console.log(getComputedStyle($linkDOM).getPropertyValue("color"));
$linkDOM.style.setProperty("text-decoration", "none")
$linkDOM.style["color"]= "#000";
$linkDOM.style.backgroundColor="#d99";
console.log($linkDOM.style);

const $html = document.documentElement,
$body=document.body;

let var1= getComputedStyle($html).getPropertyValue("--color1"),
var2 = getComputedStyle($html).getPropertyValue("--dark-color");

console.log(var1, var2);

$body.style.backgroundColor= var1;
$body.style.color=var2;

$html.style.setProperty("--dark-color", "pink");


//  *============DOM: 63
console.log("mometaneo");
console.log(document.querySelector(".link-dom").href);
console.log(document.querySelector(".link-dom").getAttribute("href"));


document.documentElement.lang="es";
document.documentElement.setAttribute("lang", "es-PE");
console.log(document.documentElement.lang);
const $linkDOM = document.querySelector(".link-dom");

$linkDOM.setAttribute("target", "_blank");
$linkDOM.setAttribute("rel", "noopener");
$linkDOM.setAttribute("href", "https://yputube.com");
console.log($linkDOM.hasAttribute("rel"));
$linkDOM.removeAttribute("rel");
console.log($linkDOM.hasAttribute("rel"));

// Data-Attibutes
console.log($linkDOM.getAttribute("data-description"));
console.log($linkDOM.dataset); /*Esto te permitirá trabajar todos los subitpos "data-""
console.log($linkDOM.dataset.description);
$linkDOM.setAttribute("data-description","Modelo de Objeto del Documento");
console.log($linkDOM.dataset.description);
$linkDOM.dataset.description ="Subscribete al cualquier cosa";
*/