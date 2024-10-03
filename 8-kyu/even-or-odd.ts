
// Create a function that takes an integer as an argument and returns "Even" 
// for even numbers or "Odd" for odd numbers.


export function evenOrOdd(n:number):string {
  if (n % 2 === 0) {
    return "Even";
  } else {
    return "Odd"
  }
  
}

console.log(evenOrOdd(4));
console.log(evenOrOdd(3));



/*
Returning: string "even" if result is an even number, or string "odd" if result is an odd number

Input: number



*/