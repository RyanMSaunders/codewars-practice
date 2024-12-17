
export const countBits = (n: number): number => {

  

  return n.toString(2).split('1').length -1
};

console.log(countBits(10));




/**
 * 
 * 
 Explanation:
n.toString(2) converts the number n to its binary representation as a string.
.split('1') splits that binary string by the character 1, and the resulting array contains segments of 0s (and potentially some empty strings).
The length of this array will give the count of segments, and since each 1 separates segments, we subtract 1 from the length to get the number of 1s.



 Write a function that takes an integer as input, and returns the number of bits 
 that are equal to one in the binary representation of that number. You can guarantee
  that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should 
return 5 in this case


Returning: number of bits that are equal to one in the binary representation of that number

- loop through binary, if val === 1 add to result
- define result as 0
- loop through the array, for each val, if val + total < number then add. add 1 to binary
else, add 0 to binary
- define total
- definte binary
- while doubledNum < n, reduce((acc, currVal) => currVal + currVal, doubledNum)
- definte doubledNum as 0
- create empty array
Input: integer


start doubling from 1 until number exceeds desired decimal number
in the numbers you have doubled, combine them to add to your decimal number
Their indexes are 1, the rest are 0

Example:
number: 10

16 8 4 2 1 --- doubles

8 + 2 = 10

10 = 1 0 1 0

 */