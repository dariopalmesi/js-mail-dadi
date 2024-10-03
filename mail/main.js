

// punto 1
// chiedere la email ad un utente random che si presta ad accedere ad un sito
let names = ['Dario','Marta','Michele','Cristina','Luca','Francesco']
console.log(names);

let email = ['Dario@gmail.com','Michle@gmail.com','Marta@gmail.com','Cristina@gmail.com','Luca@gmail.com','FRancesco@gmail.com']
console.log(email);


// punto 2
// verificare se fa parte di quel sito e di conseguenza stampare l'esito del controllo
names = prompt('inserire nome')
email = prompt('inserire email')

if (names == email) {
    alert('questa email è corretta')
}else {
    console.log('questa email non è presente ');
    
}