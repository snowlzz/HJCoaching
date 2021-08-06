

document.querySelector(".hamburguer").addEventListener("click", () => 
    document.querySelector(".container").classList.toggle("show-menu")
);

document.querySelector(".menu").addEventListener("click", () =>
    document.querySelector('.sub-menu').classList.toggle("show")
);