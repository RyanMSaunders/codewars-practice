

export function getCount(str: string): number {
  const arr = str.split('')
  const filteredArr = arr.filter((val) => {
    return val === 'a' || val === 'e' || val === 'o' || val === 'u' || val === 'i'
  })
  const result = filteredArr.length
  
  
  return result
};

console.log(getCount("abracadabra"));





/*

Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.

returning a number of vowels
create a counter variable result
inputting a word as string
turn string into an array using split
loop through the array, if index value == a || e || i || o || u then result +1
alternative - loop through array and filter all values that are not vowels
return return array length
returning a number of vowels


 */