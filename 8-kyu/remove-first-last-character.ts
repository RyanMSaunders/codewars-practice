export function removeChar(str: string): string {
  let newArr = []   // Defining potential
  if (str.length > 2 ) {   // Threshold Check 1
    const strArr = str.split('')  // Input type conversion
    
    for (let i = 0; i < strArr.length; i++) {   // Browsing input
      if (i !== 0 && i !== strArr.length -1 ) { // Threshold check 2
        newArr.push(strArr[i])              // Transforming potential
      }
    }
    console.log(newArr);
  }
  const result = newArr.join('')  // potential type conversion

  return result;  // realize potential
}

console.log(removeChar("hello"));



/**
 
It's pretty straightforward. Your goal is to create a function that 
removes the first and last characters of a string. You're given one 
parameter, the original string. 
You don't have to worry about strings with less than two characters.

return string with first and last characters removed
input a string

steps:
input a string

- if string has more than two characters using str.length
- turn string into an array using split
- loop through array, adding elements to a new array that are not index 0 or index -1
- removes 0 index, remove -1 index
return string with first and last characters removed

// Defining input
// Defining potential
// Threshold Check 1 (for input)
// Input type conversion
// Browsing input
// Threshold check 2 (for type converted input)
// Transforming potential
// potential type conversion
// realize potential (Return)



 */