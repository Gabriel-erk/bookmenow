// passando itens html para variaveis, para criar evento ao clicar no botao menu, no mobile, é necessario passar todos para funcionar
const botaoMenu = document.getElementById('botaoMenuMobile');
const menu = document.getElementById('menu');

// função que adiciona evento no botao - quando clicar no botao, executara esta função
botaoMenu.addEventListener('click', function(){
    // adicionando função que remove e adiciiona a classe que eu escolher
    menu.classList.toggle('menu-ativo');  
});

// Script do Slide (em jQuerry)

$('.owl-carousel').owlCarousel({
    // definindo que é um loop
    loop:true,
    margin:10,
    // definindo para setas de navegação  naoaparecerem (neste caso, apenas bolinhas)
    nav:false,
    // dizendo que ira dar play automaticamente
    autoplay:true,
    // dizendo o tempo que ira passar cada slide
    autoplayTimeout:5000,
    // dizendo para nao parar quando passar o mouse em cima
    autoplayHoverPause:true,
    // animação
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:5
        }
    }
})