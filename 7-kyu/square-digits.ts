
export function squareDigits(num: number): number {
  const arr = Array.from(String(num), Number)
  let result = arr.map((element) => {
    let newNum = element * element
    return newNum
  })
  console.log(Number(result.join('')));
  
  return Number(result.join(''))
}

console.log(squareDigits(9119));



/*

Welcome. In this kata, you are asked to square every digit of a 
number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out,
 because 92 is 81 and 12 is 1. (81-1-1-81)

Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36,
 and 52 is 25. (49-36-25)

Note: The function accepts an integer and returns an integer.

Happy Coding!

Returning every number of input square rooted and contactenated

inputting a number
- define a result variable
- convert number into a string, then array of numbers
- loop through number and for each digit multiply by itself
- concactenate that number to the result
Returning every number of input square rooted and contactenated




*/