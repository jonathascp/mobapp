const menu = document.querySelector(".menu");
const menuLista = document.querySelector(".menu-lista");
const menuLinks = document.querySelectorAll(".menu-lista p");
const btnMenu = document.querySelector(".btnMenu");
const secoes = document.querySelectorAll("section");
window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        menu.classList.add("gradiente-ativado");
    }
    else {
        menu.classList.remove("gradiente-ativado");
    }
});

btnMenu.addEventListener("click", () => {
    if (menuLista.classList.contains("ativado")) {

        menuLista.classList.remove("ativado");
        menu.classList.remove("gradiente-ativado");
    }
    else {
        menuLista.classList.add("ativado");
        menu.classList.add("gradiente-ativado");
    }

});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.id;
            menuLinks.forEach(link => {
                if(link.dataset.id === id)
                {
                    link.classList.add("linkSelecionado");
                }
                else
                {
                     link.classList.remove("linkSelecionado");
                }
            })
        }
    })
}, {});

secoes.forEach(el => observer.observe(el));

