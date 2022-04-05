/*               5 KYU || Simple Pig Latin               */


/*               Instructions               */

/* Move the first letter of each word to the end of it,
then add "ay" to the end of the word. Leave punctuation marks untouched. 

    pigIt('Pig latin is cool'); // igPay atinlay siay oolcay    */


/*               Solution               */

function pigIt(str){
    return str.split(' ').map((word) => (word === "!" || word === "?") ? word : word.slice(1) + word[0] + 'ay').join(' ')
  }