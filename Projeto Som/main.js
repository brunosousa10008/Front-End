const ListaDeTecla = document.querySelectorAll('.tecla__botao');

function tocarTecla (idElementoTecla) {
    document.querySelector(`#som__${idElementoTecla}`).play()
}

incremento = 0;
while(incremento < ListaDeTecla.length){
    const tecla = ListaDeTecla[incremento].classList[1]

    ListaDeTecla[incremento].onclick = function () {
        tocarTecla (tecla)
    }
    incremento++
}
