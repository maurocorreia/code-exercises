/*               6 KYU || Find The Parity Outlier               */


/*               Instructions               */

/* You are given an array (which will have a length of at least 3, but could be very large)
containing integers. The array is either entirely comprised of odd integers or entirely comprised
of even integers except for a single integer N. Write a method that takes the array as an argument
and returns this "outlier" N. */


/*               Solution               */

function findOutlier(integers){

    const type = integers.reduce((acc, value) => (value % 2 == 0) ? acc + 1 : acc, 0);
    
    return integers.find( value => ( type > 1) ? value % 2 !== 0 : value % 2 === 0);    
  }