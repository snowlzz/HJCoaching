

document.querySelector(".hamburguer").addEventListener("click", () => {
    document.querySelector(".container").classList.toggle("show-menu");
    document.querySelector('.fechaMenu').classList.toggle('isClose')
});

document.querySelector('.fechaMenu').addEventListener('click', () => {
    document.querySelector('.container').classList.toggle('show-menu');
    document.querySelector('.fechaMenu').classList.toggle('isClose');
  });


document.querySelector(".menu").addEventListener("click", () =>
    document.querySelector('.sub-menu').classList.toggle("show")
);

document.querySelector(".menu").addEventListener("click", () =>
    document.querySelector('.material-icons').classList.toggle("gira")
);


/*const $container = $('.menu');
$(document).mouseup(e => {
    if(!$container.is(e.target)
        && $container.has(e.target).length === 0)
    {
        $container.removeClass('.show-menu');
    }
});*/