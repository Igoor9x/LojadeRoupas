// Menu automatico da página inicial

document.addEventListener("DOMContentLoaded", () => {
    new TypeIt(".textAnimatedTwo", {
        speed: 90,
    })
    .type("Suas roupas.", {delay: 500})
    .delete(11)
    .type("eu estilo.", {delay: 500})
    .delete(10)
    .type("ua personalidade.", {delay: 900})
    .delete(18)
    .type("Viva a vida com autenticidade!", {speed: 60})
    .go();
});





// VARIAVÉIS;
const imageModel = document.querySelector(".produto img");
const namePage = document.querySelector(".info h2");
const mainProduct = document.querySelector(".mainProd img");
const inserirCep =document.querySelector(".adress input");
const buscarCep = document.querySelector(".adress button");

const btnBar = document.querySelector(".bars");
const btnClose = document.querySelector(".close");
const NavMenu = document.querySelector(".menu-mobile");


// Fazer botão responsivo funcionar 
btnBar.addEventListener("click", () =>{
    btnBar.classList.toggle("active");
    btnClose.classList.toggle("active");
    NavMenu.classList.toggle("active");
});

btnClose.addEventListener("click", () =>{
    btnBar.classList.remove("active");
    btnClose.classList.remove("active");
    NavMenu.classList.remove("active");
});





// Mudar nome da pagina automaticamente de acordo com o item




// Função zoom com mouse

mainProduct.addEventListener("mousemove", (e) =>{
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;

    mainProduct.style.transformOrigin = `${x}px ${y}px`;
    mainProduct.style.transform = "scale(1.5)";
});

mainProduct.addEventListener("mouseleave", () =>{
    mainProduct.style.transform = "scale(1)";
})


const pegarDados = async (CEP) => {
    const URL = `https://viacep.com.br/ws/${CEP}/json/`; // Sempre tem que ter o https://;
    const response = await fetch(URL); // Resposta da API;
    const data = await response.json(); // Dados da API;
    console.log(data);
}

 buscarCep.addEventListener("click", (e) =>{
    e.preventDefault();
    const data = inserirCep.value;
    pegarDados(data);
 });