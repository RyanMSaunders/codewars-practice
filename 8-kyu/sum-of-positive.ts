
export function positiveSum(arr:number[]):number {
  
  let result = 0

  arr.map((num) => {
    if (num > 0) {
      result += num
      console.log('result', result);
    
    }
    
  })

  return result;
};

console.log(positiveSum([1,-4,7,12]));


/**
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.



Returning: sum of all positive numbers of an array
input: an array
Steps:
- input is an array of numbers
- loop through array
- sort through array for positive numbers
- return sum of positive numbers
 * 
 * 
 * 
 * 
 */