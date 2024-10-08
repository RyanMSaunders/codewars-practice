
export function squareSum(numbers: number[]): number { // Define input
  let result = 0 // Define potential
  for (let i=0; i < numbers.length; i++) { // Browse Input
    let squaredNum = numbers[i] * numbers[i] // Input type conversion
    result += squaredNum; // Transformed potential
  }
  return result // realize potential
}

console.log(squareSum([1, 2, 2]));


/**
 Complete the square sum function so that it squares each number 
 passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 

returning the sum of each number in the array
inputing and array of numbers that are each squared

inputing and array of numbers that are each squared
- define result
- loop through the array, multiply each item by itself
- add the transformed item to result
returning the sum of each number in the array

Defining input
Defining potential
Threshold Check
Input type conversion
Browsing Input
Threshold Check 2
Transforming potential
potential type conversion
realize potential


Define input
Define potential
Browse input
Input type conversion
Transform potential
Realize potential


 */