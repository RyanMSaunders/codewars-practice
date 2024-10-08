
export function paperwork(n: number, m: number): number {
  if (n < 0 || m < 0) {
    return 0
   } else {
    
    return n * m
  }
  
}

console.log(paperwork(5, -5));
console.log(paperwork(5, 5));



/*

Your classmates asked you to copy some paperwork for them. 
You know that there are 'n' classmates and the paperwork has 'm' pages.

Your task is to calculate how many blank pages do you need.
 If n < 0 or m < 0 return 0.

Example:
n= 5, m=5: 25
n=-5, m=5:  0

returning: number of blank pages 
input: n as number of classmates, m as number of pages

input: n as number of classmates, m as number of pages
- check that n and m are greater than 0
- multiply n by m
-
returning: number of blank pages 



*/