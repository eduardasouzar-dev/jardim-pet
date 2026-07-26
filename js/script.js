const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

const items = document.querySelectorAll('.item');
const dots = document.querySelectorAll('.dot');

let active = 0;
const total = items.length;

let timer;


function update(direction) {

    // remove o item e indicador atual
    items[active].classList.remove('active');
    dots[active].classList.remove('active');


    // próximo slide
    if (direction > 0) {

        active++;

        if (active === total) {
            active = 0;
        }

    }


    // slide anterior
    else if (direction < 0) {

        active--;

        if (active < 0) {
            active = total - 1;
        }

    }


    // adiciona o novo slide ativo
    items[active].classList.add('active');
    dots[active].classList.add('active');


    // reinicia o tempo automático
    clearInterval(timer);

    timer = setInterval(() => {
        update(1);
    }, 5000);

}


// botão voltar
prevButton.addEventListener('click', () => {
    update(-1);
});


// botão avançar
nextButton.addEventListener('click', () => {
    update(1);
});


// inicia o automático
timer = setInterval(() => {
    update(1);
}, 5000);