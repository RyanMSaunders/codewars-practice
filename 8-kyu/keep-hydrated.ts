export function litres(time: number): number{
  let result = Math.floor(time * 0.5)
  return result
}

console.log(litres(3));

/*

Nathan loves cycling.

Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water
 per hour of cycling.

You get given the time in hours and you need to return the number of litres Nathan
 will drink, rounded to the smallest value.

For example:

time = 3 ----> litres = 1

time = 6.7---> litres = 3

time = 11.8--> litres = 5


returning: the amount of litres drunk, rounded to smallest value
input: amount of time cycling

input: amount of time cycling
- 
-
- Math.round(amount of time * 0.5 )
returning: the amount of litres drunk, rounded to smallest value

*/