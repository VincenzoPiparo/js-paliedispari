// Palindroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

const inWord = prompt('Enter a word ')

// 2 scrivere la parola al contrario

let reverseWord = ''

for (i = (inWord.length -1); i >= 0; i-- ) {
    reverseWord =  reverseWord + inWord [i] 
    console.log(reverseWord)
}

// 3 verificare se le parole sono uguali 
if (inWord === reverseWord) {
    console.log('The word is palindrome')
}else {
    console.log('The word is not palindrome')
}