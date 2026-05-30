const menu = document.querySelector(".menu");
const menuLista = document.querySelector(".menu-lista");
const btnMenu = document.querySelector(".btnMenu");

window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        menu.classList.add("gradiente-ativado");
    }
})

btnMenu.addEventListener("click", () => {
    if (menuLista.classList.contains("ativado")) {
        
        menuLista.classList.remove("ativado");
        menu.classList.remove("gradiente-ativado");
    }
    else {
        menuLista.classList.add("ativado");
        menu.classList.add("gradiente-ativado");
    }

})
