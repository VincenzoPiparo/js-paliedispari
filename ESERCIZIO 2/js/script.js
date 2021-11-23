// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer
//  (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


// 1 Fare scegliere all'utente pari o dispari
// usare il prompt per il pari o dispari
const userOddorEven = prompt ('Choose odd or even');


// 2 Fare scegliere all'utente un numero da 1 a 5
// usare il prompt per fare scegliere il numero
let userNumber = 0;
// creiamo un ciclo infinito fino a che l'utente scelga un numero stabilito tra 1 e 5
while (userNumber < 1 || userNumber > 5) {
    userNumber  = parseInt (prompt ('Choose a number from 1 to 5'));
    console.log (userNumber);
}

// 3 generare il numero random per il pc usando una funzione
// creiamo la funzione
const numberPc = getRndInteger (1, 5)
console.log (numberPc);

// 4 sommiamo i 2 numeri (sia dell'utente sia del pc)
let sumUserAndPc = userNumber + numberPc
console.log(sumUserAndPc);


// 5 usando una funzione stabiliamo se la somma dei 2 numeri scelti dall'utente e dal pc è pari o dispari
let finalResult = totSum (sumUserAndPc)
console.log(finalResult)


// 6 infine dichiariamo il vincitore
if (userOddorEven === finalResult ) {
    alert ('You WIN')
}else{
    alert('You LOSE')
}

// 7 FUNCTION ZONE
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
 }

 function totSum (somma) {
     let result;
     if( somma % 2 === 0) {
         result = 'even'
     } else {
         result = 'odd'
     }

     return result;
 }
