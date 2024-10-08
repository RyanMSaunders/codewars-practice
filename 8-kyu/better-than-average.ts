
export function betterThanAverage(classPoints: number[], yourPoints: number) : boolean {
  const totalItems = classPoints.push(yourPoints)
  console.log(classPoints);
  
  let initialVal = 0
  let sumAllPoints = classPoints.reduce((accumulator, currentVal) => accumulator + currentVal, initialVal)
  console.log(sumAllPoints);
  const avgPoints = sumAllPoints / totalItems
  if (yourPoints > avgPoints) {
    return true
  } else {
    return false
  }
}

console.log(betterThanAverage([1, 2, 1, 1, 1, 1, 4], 3));



/*
There was a test in your class and you passed it. Congratulations!

But you're an ambitious person. You want to know if you're better than 
the average student in your class.

You receive an array with your peers' test scores. Now calculate the 
average and compare your score!

Return true if you're better, else false!

Note:
Your points are not included in the array of your class's points.
 Do not forget them when calculating the average score!

 input classPoints as array of numbers not including your score, yourPoints as number
- add yourpoints to classpoints array
- find average of classpoints array
- compare yourpoints with classpoints average
 return true if yourPoints is greater than average, return false if yourPoints is less than average







*/