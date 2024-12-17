
export const findOutlier = (integers: number[]): number => {
  const oddArr = [];
  const evenArr = [];
  let result = 0

  for( let i =0; i < integers.length; i++) {
    if(integers[i] % 2 === 0) {
      evenArr.push(integers[i]);
    } else {
      oddArr.push(integers[i]);
    }
    
    if (oddArr.length > 1 ){
      result = evenArr[0];
    } else if (evenArr.length > 1) {
      result = oddArr[0];
    }
  }

  return result;

}


/**
You are given an array (which will have a length of at least 3, 
but could be very large) containing integers. The array is either 
entirely comprised of odd integers or entirely comprised of even
 integers except for a single integer N. Write a method that takes 
 the array as an argument and returns this "outlier" N.

Examples
[2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21] --> 160 (the only even number)
 

Returning: return the integer that is the opposite (even/odd) of the majority
- return the val of that array
- if even arr length > 1, return odd. if odd arr length > 1, return even
- loop through the integer array, if val % 2 = 0, add to even, else add to odd
-define variable for odd integers, define var for even integers- arrays
Inputting: an array of integers, all odd or even except one




 */