export function abbrevName(name: string): string {
  const fullNameArr = name.split(" ");
  console.log(fullNameArr);
  
  const result=  fullNameArr[0][0] + '.' + fullNameArr[1][0]
  return result.toUpperCase()
}

console.log(abbrevName("ryan saunders"));

/*

Define input
Input type conversion
define potential
transform potential
Potential type conversion
realize potential

Write a function to convert a name into initials. This kata strictly takes two 
words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F


return: abbreviated name that is capitalized first letter of each name, followed by period no space
input: two words with one space between them


input: two words with one space between them
- define resultArray
- convert words into array
- check if not empty space, then for each item in array split into array
- add item [0] to result with a period after
- join resultArray

return: abbreviated name that is capitalized first letter of each name, followed by period no space



*/