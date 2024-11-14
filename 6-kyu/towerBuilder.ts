
export const towerBuilder = (nFloors: number): string[] => {
 let result: string[] = [];

 for (let i = 1; i <= nFloors; i++) {
  let stars = "*".repeat(2 * i - 1)
  console.log(stars);

  let spaces = " ".repeat(nFloors - i)
  console.log('spaces', spaces);
  

  result.push(spaces + stars + spaces);
  
 }

 return result;
  
}

console.log(towerBuilder(1));
console.log(towerBuilder(2));
console.log(towerBuilder(3));


/**
 
Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]





 */