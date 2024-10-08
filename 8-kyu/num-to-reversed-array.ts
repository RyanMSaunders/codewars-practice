
export const digitize = (n: number): number[] => {
  const numArr = Array.from(String(n), Number)
  const reversedNumArr = numArr.reverse();
  return reversedNumArr;
}

console.log(digitize(12345));


/*

Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example(Input => Output):
35231 => [1,3,2,5,3]
0 => [0]

return an array of the digits, reversed
input a number

input a number
- convert int to array, then reverse it
-
-
return an array of the digits, reversed




*/