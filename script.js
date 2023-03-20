// Variáveis
const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const randomNumber = Math.round(Math.random() * 10);
let xAttempts = 1;

//Evento 
btnTry.addEventListener('click', handleTryClick );
btnReset.addEventListener('click', handleResetClick);

//Função callback
function handleTryClick(event) {
   event.preventDefault() // faça o padrão 

   const inputNumber = document.querySelector("#inputNumber")

      if(Number(inputNumber.value) == randomNumber){
         toggLeScreen();
         document.querySelector(".screen2 h2").innerHTML = `Acertou em ${xAttempts} tentativas`
      }

    inputNumber.value = ""  // limpar o campo após inviar 
    xAttempts++
}

function handleResetClick() {
   toggLeScreen();
   xAttempts = 1;
}

function toggLeScreen() {
   screen1.classList.toggle("hide");
   screen2.classList.toggle("hide");
}
