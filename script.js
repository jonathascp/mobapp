const menu = document.querySelector(".menu");
const menuLista = document.querySelector(".menu-lista");
const menuLinks = document.querySelectorAll(".menu-lista p");
const menuLinksDesktop = document.querySelectorAll(".menu-lista-desktop p");
const btnMenu = document.querySelector(".btnMenu");
const secoes = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        menu.classList.add("gradiente-ativado");
    }
    else if (window.scrollY == 0 && menuLista.classList.contains("ativado")) {
        menu.classList.add("gradiente-ativado");
    }
    else if (window.scrollY == 0 && !menuLista.classList.contains("ativado")) {
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

const animacaoMenuLista = (arr) => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                arr.forEach(link => {
                    if (link.dataset.id === id) {
                        link.classList.add("linkSelecionado");
                    }
                    else {
                        link.classList.remove("linkSelecionado");
                    }
                })
            }
        })
    }, {});

    return observer;
}


secoes.forEach(el => animacaoMenuLista(menuLinks).observe(el));
secoes.forEach(el => animacaoMenuLista(menuLinksDesktop).observe(el));
// secoes.forEach(el => observer.observe(el));

