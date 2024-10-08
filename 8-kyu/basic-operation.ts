
export function basicOp(operation: string, value1: number, value2: number): number {


  switch (operation) {
    case '+':
      return value1 + value2
    case '-':
      return value1 - value2
    case '*':
      return value1 * value2
    case '/':
      return value1 / value2
    default:
      throw new Error ("Invalid Operation");
  }
}

console.log(basicOp('+', 3, 3));


/*

Your task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.

Examples(Operator, value1, value2) --> output
('+', 4, 7) --> 11
('-', 15, 18) --> -3
('*', 5, 5) --> 25
('/', 49, 7) --> 7


returing result of numbers after applying operation
input: value1, value2 and an operation ( + - / *)

input: value1, value2 and an operation ( + - / *)
- define operatorStr as empty string
- check identity of operator and assign to operator variable
- if operatorStr is x, perform x
- perform operation
returing result of numbers after applying operation



*/