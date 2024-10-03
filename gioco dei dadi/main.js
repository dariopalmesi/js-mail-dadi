console.log('ciao');

// dati dei giocatori
let giocatore = [1,2,3,4,5,6];
let computer = [1,2,3,4,5,6];

// confronto del risultato che determina il vincitore
giocatore = Number(window.prompt("inserire numero"));
computer = Number(window.prompt('inserire numero'))

console.log(JSON.stringify(giocatore) === JSON.stringify(computer));
