window.addEventListener('load', init);

let logon;
function init(){
    logon = document.forms['dados'];
    logon.addEventListener('submit', validarUser);
    logon.addEventListener('submit', checkDados);
}

let dados = [
   {"login": "admin", "senha": "admin"}
];

function validarUser(){
   let usuario = document.getElementsByName('username')[0].value.toLowerCase();
   let senha = document.getElementsByName('password')[0].value;

   let userCookies = checkCookies(usuario);

   if(userCookies = document.cookie){
      return window.open("home.html")
   }
   for(let search in dados) {
   let aux = dados[search];
      if(aux.login === usuario && aux.senha === senha){
         window.open("home.html");
         adicionarCookie();
         return true;
      }
   }
//alert("Dados incorretos, tente novamente!");
return false;
   }


function adicionarCookie(){
   let username = logon.username.value
   let password = logon.password.value
   criarCookie(username, password, 1);
}

function criarCookie(username, password, dias){
   let data = new Date();
   data.setDate(data.getDate()+dias);
   let newCookie = `${username}=${password}; expires=${data.toUTCString()}`;
   document.cookie = newCookie;
}

function getCookie(){
   let username = logon.username.value

   checkCookies(username);
}

function checkCookies(username){
   let cookies = document.cookie
   let vetorCookies = cookies.split("; ")

   for(i=0; i<vetorCookies.length; i++){
      let cookie = vetorCookies[i].split('=');

      if(cookie[0] == username){
         return true;
      }
   }
   return false;
}

setTimeout(function(){
      validarUser();
},3000);

function checkDados(){
   let usuario = document.getElementsByName('username')[0].value.toLowerCase();
   let senha = document.getElementsByName('password')[0].value;


   for(let search in dados) {
      let aux = dados[search];
         if(aux.login != usuario && aux.senha != senha){
            alert("Dados incorretos. Tente Novamente!");
         }
   }
}