export function noSpace(x: string): string {
  const strArr = x.split('');  
  const filteredArr = strArr.filter((item) => item !== " ")
  const result = filteredArr.join('')
  
  return result
}

console.log(noSpace("8aaaaa dddd r     "));


/**
 Write a function that removes the spaces from the string, 
 then return the resultant string.

Examples:

Input -> Output
"8 j 8   mBliB8g  imjB8B8  jl  B" -> "8j8mBliB8gimjB8B8jlB"
"8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd" -> "88Bifk8hB8BB8BBBB888chl8BhBfd"
"8aaaaa dddd r     " -> "8aaaaaddddr"

return: string with no spaces
input: string with spaces


input: string with spaces
- turn string into array
- filter array of spaces
- save joined array without spaces to variable
return: string with no spaces



 */