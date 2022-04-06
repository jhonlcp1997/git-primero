
// *========== DOM 68: Creando Elementos y Fragmentos ========
const $figure = document.createElement("figure"),
    $img = document.createElement("img"),
    $figcaption = document.createElement("figcaption"),
    $figcaptionText = document.createTextNode("Animals"),
    $cards = document.querySelector(".cards");

$cards.appendChild($figure);
// $cards.innerHTML = $figcaption;
$cards.insertAdjacentHTML('afterEnd', `<p>Costitas</p>`);

console.log(document.body)

/*
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