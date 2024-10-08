
export const centuryFromYear = (year: number): number => {

  let century = year / 100
  let roundedCent = Math.ceil(century)
  return roundedCent
}

console.log(centuryFromYear(1978));
console.log(centuryFromYear(1970));



/*

Introduction
The first century spans from the year 1 up to and including the year 100,
 the second century - from the year 101 up to and including the year 200, etc.

Task
Given a year, return the century it is in.

Examples
1705 --> 18
1900 --> 19
1601 --> 17
2000 --> 20
2742 --> 28
Note: this kata uses strict construction as shown in the description and 
the examples, you can read more about it here


returning the corresponding century
input a year

what is a century mathematically?
1 - 100 = 1
101- 200 = 2

can I take take 1901


input a year
- check if the value ends in 0
- get the value of the first two digits if they are greater than 0
- if the value ends in 0, return two digit value +1, else return two digit value
returning the corresponding century



*/