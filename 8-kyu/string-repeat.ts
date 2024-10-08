export function repeatStr(n: number, s: string): string {
  let result = '';

  for (let i = 0; i < n; i++) {
    result += s;
  }
  return result;
}

console.log(repeatStr(6, 'I'));




/**
 Write a function that accepts an integer n and a string s as parameters, 
 and returns a string of s repeated exactly n times.

Examples (input -> output)
6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"


returning  a string repeated x number of times


input: a string and a number of repetitions

input: a string and a number of repetitions
- define result
- use a c loop with n as the number of repetitions, for every iteration..
- concactate string to end of result
returning  a string repeated x number of times

 */