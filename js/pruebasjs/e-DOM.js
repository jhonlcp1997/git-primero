const $menu = document.querySelector(".menu");
const $navbar = document.querySelector(".navbar");

console.log($menu.classList);

$menu.addEventListener("click",e =>{
    console.log("se activo");
    $navbar.classList.toggle("active");
    console.log($menu.classList);
})