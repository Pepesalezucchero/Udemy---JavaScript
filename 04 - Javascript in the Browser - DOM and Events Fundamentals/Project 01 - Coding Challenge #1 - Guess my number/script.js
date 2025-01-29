'use strict';
 
let currentScore = 20;
let highScore = 0;
let secretNumber = Math.trunc(Math.random()*20) + 1;
console.log(secretNumber); //Aiuto console
document.querySelector('.guess').value = ''; //Per avere l'input vuoto in caso di ricarica di pagina

//Funzionamento del tasto Again! (Reset)
document.querySelector('.again').addEventListener('click', function () {
    reset();
    inputOnOff(Boolean(0));
});

//Funzionamento del tasto Check! (Controllo del numero)
document.querySelector('.check').addEventListener('click', function() {
    let userNumber = Number(document.querySelector('.guess').value);
    //Blocco in caso di valori errati
    if(userNumber < 1 || userNumber > 20) { 
        alert('You have to select a number between 1 and 20!');
    } else {
        //Vittoria
        if(userNumber === secretNumber) {
            winState();
            if(currentScore > highScore) {
                highScore = currentScore;
                document.querySelector('.highscore').textContent = highScore;
            }
        //Svolgimento del gioco
        } else if(userNumber !== secretNumber) {
            textMessage(userNumber > secretNumber ? '📈 Too high...' : '📉 Too low...');
            currentScore--;
            document.querySelector('.score').textContent = currentScore;
            //Sconfitta
            gameOver();
        }
    }
});

//Funzione che gestisce il game over
function gameOver() {
    if(currentScore === 0) {
        document.querySelector('.number').textContent = secretNumber;
        textMessage('😢 You lose!');
        inputOnOff(Boolean(1));  // '1' for 'true', '0' for 'false'
        document.querySelector('.guess').value = '';
        document.querySelector('body').style.backgroundColor = '#c01b1b';
    }
}

//Funzione che gestisce la vittoria
function winState() {
    document.querySelector('.number').textContent = secretNumber;
    textMessage('🎉 You win!');
    inputOnOff(Boolean(1));  // '1' for 'true', '0' for 'false'
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
}

//Funzione che gestisce i testi
function textMessage(text) {
    document.querySelector('.message').textContent = text;
}

//Funzione che attiva/disattiva l'input
function inputOnOff(number) {
    document.querySelector('.check').disabled = number;
    document.querySelector('.guess').disabled = number;
}

//Funzione per il tasto reset
function reset() {
    secretNumber = Math.trunc(Math.random()*20) + 1;
    console.log(secretNumber); //Aiuto console
    document.querySelector('.number').textContent = '?';
    currentScore = 20;
    document.querySelector('.score').textContent = currentScore;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = '';
    inputOnOff(Boolean(0));  // '1' for 'true', '0' for 'false'
}