console.log('ciao');

// dati dei giocatori


// confronto del risultato che determina il vincitore
let giocatore = Math.floor(Math.random() * 6) + 1;

let computer = Math.floor(Math.random() * 6) + 1;

if (giocatore > computer) {
    console.log('il giocatore vince');
 
}else if (giocatore < computer) {
    console.log('il giocatore perde');
    
}else {
    console.log('il risultato è uguale');
    
}
