// Váriaveis
// Pegar o container do Login para mudar seu heigth quando a tela de cadastro estiver ativada.
const loginContainer = document.querySelector(".loginContainer");

const btnRegister = document.querySelector(".register");
const btnLogin = document.querySelector(".btnLogin");
const loginBox = document.querySelector(".login");
const cadastroBox = document.querySelector(".cadastrar");

// Fazer a imagem do computador ficar flutuando
 const image = document.querySelector(".image");

 function flut() {
    const eixoY = Math.cos(Date.now() /900) * 20;

    image.style.top = `calc(-20% + ${eixoY}px)`;
    requestAnimationFrame(flut);
 }
 flut();


// Função de ativar o botão de cadastrar
btnRegister.addEventListener("click", (e) => {
    loginBox.classList.add("active");
    cadastroBox.classList.add("active");
    loginContainer.classList.add("active");
    e.preventDefault();
    
});

// Função de desativar o botão de cadastrar
btnLogin.addEventListener("click", (e) => {
    loginBox.classList.remove("active");
    cadastroBox.classList.remove("active");
    loginContainer.classList.remove("active");
     e.preventDefault();
});