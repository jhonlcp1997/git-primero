// *======== 63: DOM: Atributos y Data-Atributes ==========
console.log(document.documentElement.lang)
console.log(document.documentElement.getAttribute("lang"));
console.log(document.querySelector(".link-dom").href);
console.log(document.querySelector(".link-dom").getAttribute("href"));

document.documentElement.lang = "es";
console.log(document.documentElement.lang);
document.documentElement.setAttribute("lang", "es-PE");
console.log(document.documentElement.lang);

const $linkDOM = document.querySelector(".link-dom");

$linkDOM.setAttribute("target","_blank")
$linkDOM.setAttribute("rel","noopener")
$linkDOM.setAttribute("href","htpps://youtube.com")
console.log($linkDOM.hasAttribute("rel"));
$linkDOM.removeAttribute("rel");
console.log($linkDOM.hasAttribute("rel"));

// Data-Atrtibutes
console.log($linkDOM.getAttribute("data-description"));
console.log($linkDOM.getAttribute("class"));
console.log($linkDOM.getAttribute("name"));
console.log($linkDOM.getAttribute("id"));
console.log($linkDOM.getAttribute("tag"));
console.log($linkDOM.getAttributeNames("data-description"))

// *========= 62: DOM: Nodos, Elementos y Selectores=======
// console.log(document.getElementsByTagName("li"));
// console.log(document.querySelectorAll("li"));
// console.log(document.getElementsByClassName("cards"));
// console.log(document.getElementsByName("nombre"));
// console.log(document.getElementById("linkd"));
// console.log(document.querySelector(".cardss"));
// console.log(document.querySelectorAll(".cards"));

// console.log(document.querySelector(".cardss").children);

// * ================= 61: DOM:Introducción ===============
// console.log(document.head);
// console.log(document.body);
// setTimeout(() => {
//     console.log(document.getSelection().toString())
// }, 3000);
// console.log(window);

// console.log(document);
// let texto =" Hola Soy tu amigo y enemigo a la vez guajajajaja";
// let texto2= "Página sin contenido";
// let texto3 = "what are you doing, what the fuck broo...";

// const hablar = (texto)=>speechSynthesis.
// speak(new SpeechSynthesisUtterance(texto));

// hablar(texto);
// hablar(texto2);
// hablar(texto3);