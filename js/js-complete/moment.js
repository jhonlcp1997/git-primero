
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
console.log($linkDOM.dataset); /*Esto te permitirá trabajar todos los subitpos "data-""*/
console.log($linkDOM.dataset.description);
$linkDOM.setAttribute("data-description","Modelo de Objeto del Documento");
console.log($linkDOM.dataset.description);
$linkDOM.dataset.description ="Subscribete al cualquier cosa";