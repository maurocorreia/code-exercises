/*               7 KYU || You're a square!               */


/*               Instructions               */

/* Given an integral number, determine if it's a square number:

"In mathematics, a square number or perfect square is an integer that is the square of an integer;
in other words, it is the product of some integer with itself."

The tests will always use some integral number, so don't worry about that in dynamic typed languages.*/


/*               Solution               */

var isSquare = function (n) {
    return (Math.sqrt(n) % 1 === 0);
}