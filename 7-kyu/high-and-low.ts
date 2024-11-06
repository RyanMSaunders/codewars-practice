
export function highAndLow(numbers: string): string {
  // throw new NotImplementedException() ?
  // No, wait, this is TypeScript.

  
  let array = numbers.split(' ')
  let numArray = array.map((e) => {
    return Number(e)
  })
  
  let highest = numArray[0]
  let lowest = numArray[0]

  for (let i = 0; i < numArray.length; i++) {
    if (numArray[i] > highest) {
      highest = numArray[i]
    }
    if (numArray[i] < lowest) {
      lowest = numArray[i]
    }
  }

  return `${highest} ${lowest}`

}


console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));



/**
 * 
 * 

Returning: the highest and lowest number as a string
inputting: an string of numbers seperated by a space

inputting: an string of numbers seperated by a space
- create counters for highest and lowest numbers
- filter string to remove spaces
- Convert string into array of numbers
- loop through array, 
- if number is less that lowest, number = lowest
- if number is greater than highest, number = highest
- Return highest and lowest number with a space in between them as a string
Returning: the highest and lowest number as a string



In this little assignment you are given a string of space separated numbers, 
and have to return the highest and lowest number.

Examples
highAndLow("1 2 3 4 5"); // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.
 */