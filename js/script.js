// Check
console.log('JS OK')


/* CREO UNA VARIBILE E GLI ASSEGNO IL VALORE CHE INSERISCE L'UTENTE */
const firstName = window.prompt ('Come ti chiami?', 'Marco');
console.log('Nome:' + firstName);


/* CREO UNA VARIBILE E GLI ASSEGNO IL VALORE CHE INSERISCE L'UTENTE */
const surName = window.prompt ('Qual\è il tuo cognome?', 'Fonti');
console.log('Cognome:' + surName);


/* CREO UNA VARIBILE E GLI ASSEGNO IL VALORE CHE INSERISCE L'UTENTE */
const colorFavorite = window.prompt ('Qual\è il tuo colore preferito?', 'Nero');
console.log('Colore preferito:' + colorFavorite);


/* CREO UNA VARIBILE E GLI ASSEGNO I VALORI CHIESTI ALL'UTENTE CONCATENANDOLI */
let userPass = `${firstName}${surName}${colorFavorite}${23}`;
console.log(userPass);


/* RECUPERO ID IN HTML */
const element = document.getElementById('userData');
console.log(userData);


/* CREO UNA VARIBILE IN CUI METTO IL MESSAGGIO */
let messPass = ' Benvenuto Marco, la tua password è ';
/* STAMPO IN PAGINA CONCATENANDO IL MESSAGGIO + PASSWORD */
userData.innerText = messPass + userPass;


/* RECUPERO ID IN HTML */
const elemetSafe = document.getElementById('securePass');
console.log(securePass);


/* CREO UNA VARIBILE IN CUI METTO IL MESSAGGIO */
let messPassSafe = ' Consiglio vivamente di usare questa password più sicura ';
/* STAMPO IN PAGINA CONCATENANDO IL MESSAGGIO + PASSWORD + 21 A STRINGA */
securePass.innerText = messPassSafe + userPass + '21';


