//Selecionando os elementos DOM
const startEL = document.getElementById('start');
const TimerEl = document.getElementById('timer');
const StopEl = document .getElementById('stop');
const resetEl = document .getElementById('reset');

//declarando as variáveis
let intervalo
let timeleft =1500;

//função de atualizar o timer
function updateTimer(){
    let minuto = Math.floor(timeleft/60);
    let segundo = timeleft % 60;
    let tempoFormatado = `${minuto.toString().padStart(2,'0')} : ${segundo.toString().padStart(2,'0')}`
    TimerEl.innerHTML = tempoFormatado;
}

//Função de start do tempo 
function startTimer(){
    intervalo = setInterval(()=>{
      timeleft--
      updateTimer()
      if(timeleft === 0){
        clearInterval(intervalo)
        alert('O tempo acabou')
        updateTimer()
      }
    }, 1000)
};

//função stop
function stopTimer(){
  clearInterval(intervalo)
}

//função reset
function resetTimer(){
  clearInterval(intervalo)
  timeleft = 1500
  updateTimer()
}

//Setando a função startTimer no botao Start
startEL.addEventListener('click', startTimer);
StopEl.addEventListener('click', stopTimer);
resetEl.addEventListener('click', resetTimer);