//Límite de password a 20 carácteres

var input = document.getElementById('password');
input.addEventListener('input', function() {
    if (this.value.length > 20)
        this.value = this.value.slice(0, 20);
})

//Funcion menu
$(document).ready(main);

var contador = 1;

function main() {
    $('.menu_bar').click(function() {
        if (contador == 1) {
            $('nav').animate({
                left: '0'
            });
            contador = 0;
        } else {
            contador = 1;
            $('nav').animate({
                left: '-100%'
            });
        }
    });
    $('.submenu').click(function() {
        $(this).children('.children').slideToggle();
    });
}