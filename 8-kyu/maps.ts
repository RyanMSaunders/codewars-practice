
export function maps(x: number[]): number[] {
  let result: number[] = []
  const doubledArr = x.map((item) => {
    let doubledItem = item * 2
    result.push(doubledItem)
  })
  
  return result
}


/*

Given an array of integers, return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6]


*/