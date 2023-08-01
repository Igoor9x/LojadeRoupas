
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
  import { getAuth,
   createUserWithEmailAndPassword
    } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Configuração já pronta do Firebase
  const firebaseConfig = {
    apiKey: "AIzaSyBs9gPbq4M0mZXRbW29UooBqt7b5IIsHY0",
    authDomain: "comets-dde74.firebaseapp.com",
    projectId: "comets-dde74",
    storageBucket: "comets-dde74.appspot.com",
    messagingSenderId: "482757385115",
    appId: "1:482757385115:web:0118a628186d541a935f3e"
  };

  // Iniciar o Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();

  // Pegar todos os inputs para validação
  var nome = document.getElementById("nomeCompleto");
  var email = document.getElementById("emailFire");
  var password = document.getElementById("passwordFire");
  var passwordAgain = document.getElementById("passwordAgainFire");

//   Função para armazenar os dados
//   Primeiro pegar para fazer cadastro e depois para fazer login
window.signup = function(e){ // window.signup está vinculado ao ao form do html: ""<form onsubmit="signup(event)"></form>"
    e.preventDefault();
    var obj = {
        nome:nome.value,
        email:email.value,
        password:password.value,
        passwordAgain:passwordAgain.value,
    };
    if (obj.password !== obj.passwordAgain) {
    alert("As senhas não coincidem!");
    return;
  }

  const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!regexEmail.test(obj.email)) {
    alert("E-mail inválido!");
    return;
  }

  const regexSenha = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  if (!regexSenha.test(obj.password)) {
    alert("Senha inválida! A senha deve conter pelo menos 8 caracteres, uma letra minúscula, uma letra maiúscula e um número.");
    return;
  }
  
    createUserWithEmailAndPassword(auth, obj.email, obj.password)
    .then(function(sucesso){
        alert("Sucesso")
    })
    .catch(function(error){
        alert("erro" + error)
    })
    console.log(obj)
};


