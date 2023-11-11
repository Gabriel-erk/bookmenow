// passando itens html para variaveis, para criar evento ao clicar no botao menu, no mobile, é necessario passar todos para funcionar
const botaoMenu = document.getElementById('botaoMenuMobile');
const menu = document.getElementById('menu');

// função que adiciona evento no botao - quando clicar no botao, executara esta função
botaoMenu.addEventListener('click', function(){
    // adicionando função que remove e adiciiona a classe que eu escolher
    menu.classList.toggle('menu-ativo');  
});