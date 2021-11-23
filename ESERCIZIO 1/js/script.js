// Palindroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// 1 Chiedere all’utente di inserire una parola
const inWord = prompt('Enter a word ')

// verifichiamo se la parola sia palindroma 
let wordIsPalindrome = verifyWordPalindrome (inWord)


// finito il cilco e le if traformare tutto in una funzione
function verifyWordPalindrome(inWord) {

    let reverseWord = ''
    for (i = (inWord.length -1); i >= 0; i-- ) {
        reverseWord =  reverseWord + inWord [i] 
        console.log(reverseWord)
    }
    
    // 3 verificare se le parole sono uguali 
    let theWordIsPal
    if (inWord === reverseWord) {
        theWordIsPal = true
    }else {
        theWordIsPal = false
    }

}