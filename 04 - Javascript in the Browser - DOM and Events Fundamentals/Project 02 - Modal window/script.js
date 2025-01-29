'use strict';

//Selezioe degli elementi in pagina
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeButton = document.querySelector('.close-modal');
const openButtons = document.querySelectorAll('.show-modal');
console.log(openButtons); //Prova per vedere array

//Funzione per l'apertura del modal e overlay
function showOverlay() {
    console.log('Bottone premuto'); //Prova bottone premuto
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

//Funzione per la chiusura del modal e overlay
function hideOverlay() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

//Selezione di tutti e tre i pulsanti
for(let i = 0; i < openButtons.length; i++) {
    openButtons[i].addEventListener('click', showOverlay); //Sostituito function() generico con la funzione creata sopra
}

//Funzione al 'click' per la chiusura del modal e overlay
overlay.addEventListener('click', hideOverlay); //Sostituito function() generico con la funzione creata sopra
closeButton.addEventListener('click', hideOverlay); //Sostituito function() generico con la funzione creata sopra

//Funzione alla pressione del tasto 'ESC' per la chiusura del modal e overlay
document.addEventListener('keydown', function(event) {
    console.log(event.key); //Prova per vedere bottone premuto

    //Esempio --> // event.key === 'Escape' && !modal.classList.contains('hidden') ? hideOverlay() : console.log('Non c\'è niente di aperto');

    if(event.key === 'Escape') {
        if(!modal.classList.contains('hidden')) {
            hideOverlay();
        }
    }

    //Esempio --> if(event.key === 'Escaper' && !modal.classList.contains('hidden'))  hideOverlay();
});