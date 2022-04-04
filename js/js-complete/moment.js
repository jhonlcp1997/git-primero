

// Esto es clases que no lo pude hacer en css :V
const $cards = document.querySelector(".cards");
const $img = document.querySelector(".img");
$img.classList.add("rotate-45");
console.log($img.classList);

console.log($cards.classList);
console.log($cards.classList.contains("rotate-45"));
$cards.classList.add("rotate-45");
console.log($cards.classList.contains("rotate-45"));

/*
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