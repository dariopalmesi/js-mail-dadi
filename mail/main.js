

// punto 1
// chiedere la email ad un utente random che si presta ad accedere ad un sito
let mail
let email = ['dario@gmail.com', 'michle@gmail.com', 'marta@gmail.com', 'cristina@gmail.com', 'luca@gmail.com', 'francesco@gmail.com']
console.log(email);


// punto 2
// verificare se fa parte di quel sito e di conseguenza stampare l'esito del controllo
mail = prompt('inserire mail')

for (let i = 0; i = email.length; i++) {
    console.log(email[i]);
    if (mail == email) {
        console.log('questa email è corretta');


    } else {
        console.log('questa email on è corretta');
    }
}