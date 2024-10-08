export const summation = (num:number) => {
  let result = 0
  for (let i = 0; i < num +1 ; i++) {
    result += i
  }

  return result
}

console.log(summation(8));



/**
 
 Write a program that finds the summation of every number from 1 to num. 
 The number will always be a positive integer greater than 0. Your function 
 only needs to return the result, what is shown between parentheses in the 
 example below is how you reach that result and it's not part of it, see the 
 sample tests.

For example (Input -> Output):

2 -> 3 (1 + 2)
8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

summation(8) --> 36

returning- sum of all numbers preceeding the input number

input: a number


input: a number
- define result
- use a c loop to loop until num + 1
- for each iteration, add to result
returning- sum of all numbers preceeding the input number


define input
define potential
Threshold Loop
Transform potential
Realize


 */