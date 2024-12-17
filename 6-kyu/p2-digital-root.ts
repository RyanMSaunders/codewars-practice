
export const digitalRoot = (n: number): number => {
  // const numArray = n.toString().split('').map(Number)
  if (n < 10) {
    return n;
  };

 
  let result = n.toString().split('').map(Number).reduce((accumulator, currentValue) =>  accumulator + currentValue, 0);
  

  return digitalRoot(result)
  
}

console.log(digitalRoot(456));
 

/*
Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, 
continue reducing in this way until a single-digit number is produced. 
The input will be a non-negative integer.

Examples
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1


Returning a non negative integer
- else, return result
- if result >=10 call the function again
- loop through the array, for each element add to the result
- define a result which will be the sum of each element in the array as 0
- use this method to convert number into array of strings = number.toString().split('').map(Number)
- create a recursive function (a function that calls itself until it doesnt)
inputting and integer



*/