
export const multiplesThreeOrFive = (num: number): number => {
  if (num < 0) {
    return 0
    }
  
  let counter = 0
  for(let i = num - 1; i > 0; i--) {
    console.log('i', i);
    
    if (i % 3 === 0 || i % 5 === 0) {
      counter += i
      console.log('counter', counter);
      
    }
  }
  console.log(counter);
  
 return counter
}

console.log(multiplesThreeOrFive(10));







/**
 * 
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

Additionally, if the number is negative, return 0.

Note: If the number is a multiple of both 3 and 5, only count it once.





 */