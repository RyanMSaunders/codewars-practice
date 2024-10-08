export function findSmallestInt(args: number[]): number {

  const initiaValue = args[0];

  const reducedVal = args.reduce(
    (accumulator, currentVal) => accumulator < currentVal ? accumulator : currentVal, initiaValue)

  return reducedVal
}

console.log(findSmallestInt([34, -345, -1, 100]));


/**

Define Input
Define potential
Threshold Loop
Transform potential
Realize potential


Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array
 will not be empty.


 return smallest integer in array

 input an array

 input an array
 - define initialValue as first item of array
 - use reduce function, and if accumulator is less than current value, accumulator = initial val
 - save to variable
 - 
 return smallest integer in array


 */