/*               6 KYU || Stop gninnipS My sdroW!               */


/*               Instructions               */

/* Write a function that takes in a string of one or more words, and returns the same string,
but with all five or more letter words reversed (Just like the name of this Kata).
Strings passed in will consist of only letters and spaces.
Spaces will be included only when more than one word is present.

Examples:
spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"
spinWords( "This is a test") => returns "This is a test"
spinWords( "This is another test" )=> returns "This is rehtona test" */


/*               Solution               */

function spinWords(string){

    let fullPhrase = [];  

    string.split(' ').map((word, index) => {
      (word.length >= 5) ? fullPhrase.push(word.split('').reverse().join('')) : fullPhrase.push(word);
    });    
    
    return fullPhrase.join(' ');  
}
