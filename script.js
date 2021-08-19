

document.querySelector(".hamburguer").addEventListener("click", () => {
    document.querySelector(".container").classList.toggle("show-menu");
    document.querySelector('.fechaMenu').classList.toggle('isClose')
});

document.querySelector('.fechaMenu').addEventListener('click', () => {
    document.querySelector('.container').classList.toggle('show-menu');
    document.querySelector('.fechaMenu').classList.toggle('isClose');
  });


document.querySelector(".menu-link1").addEventListener("click", () =>{
    document.querySelector('.sub-menu').classList.toggle("show2");
});

document.querySelector(".menu-link").addEventListener("click", () =>{
    document.querySelector(".sub-menu").classList.remove("show2")
    document.querySelector(".material-icons").classList.remove("gira")
})

document.querySelector(".menu-link1").addEventListener("click", () =>{
    document.querySelector('.material-icons').classList.toggle("gira")
});

/*document.querySelector(".menu-link").addEventListener("click", () => {
    document.querySelector(".material-icons").classList.toggle("gira")
});*/



