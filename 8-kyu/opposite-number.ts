import { log } from "console";

export class Kata {
  static opposite(n: number) {
    return -n;
  }
}

const result = Kata.opposite(-34)

console.log(result);


/**
 
Very simple, given a number (integer / decimal / both depending on the language), 
find its opposite (additive inverse).

Examples:

1: -1
14: -14
-34: 34

export makes the Kata class available for use in other files.
class Kata declares a class named Kata.
static opposite(n: number) defines a static method called opposite that takes a parameter n of type number.


 */