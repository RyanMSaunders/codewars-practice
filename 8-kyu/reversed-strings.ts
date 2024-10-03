
export function solution(str: string): string {

  const strArr = str.split("")
  console.log(strArr);

  let result: string[] = [];

  strArr.map((letter) => {
    result.unshift(letter)
    console.log(result);
    
  })

  return result.join('')
  
}


console.log(solution("hello"));




/*
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'

returning: reversed string
input: string

steps

- input a string
- convert the string into an array of letters
- loop through the array, adding each letter to the beginning of a new array
- join array
- ALTERNATIVE, use .reverse
- returns reversed string


*/