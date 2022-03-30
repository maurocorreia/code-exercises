/*               6 KYU || Sum of Digits / Digital Root               */


/*               Instructions               */

/* Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit,
continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.*/


/*               Solution               */

function digital_root(n) {

    let result = n.toString().split('').reduce((sum, num) => Number(num) + sum, 0);

    return (result > 9) ? digital_root(result) : result;    
}