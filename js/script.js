// Check
console.log('JS OK')

/* 
Dichairo Variabile 
Chiedo il nome all'utente
Salvo in una variabile 
*/
const firstName = window.prompt ('Come ti chiami?', 'Marco');
console.log('Nome:' + firstName);

/* 
Dichairo Variabile 
Chiedo il cognome all'utente
Salvo in una variabile 
*/
const surName = window.prompt ('Qual\è il tuo cognome?', 'Fonti');
console.log('Cognome:' + surName);

/* 
Dichairo Variabile 
Chiedo il colore preferito all'utente
Salvo in una variabile 
*/
const colorFavorite = window.prompt ('Qual\è il tuo colore preferito?', 'Nero');
console.log('Colore preferito:' + colorFavorite);

// Creiamo la password 
let userPass = `${firstName}${surName}${colorFavorite}${23}`;
console.log(userPass);

// Recupero Id HTML
const element = document.getElementById('userData');
console.log(userData);

//Creiamo messaggio Passowrd dell'utente
let messPass = ' Benvenuto Marco, la tua password è ';
userData.innerText = messPass + userPass;





