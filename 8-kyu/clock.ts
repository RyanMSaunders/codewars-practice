
export function past(h: number, m: number, s: number): number {
  
  const hrMs = (h * 60) * 60000;
  const mMs = m * 60000;
  const sMs = s * 1000;
  return hrMs + mMs + sMs
}

console.log(past(1, 40, 50));


/*
Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight
 in milliseconds.

Example:
h = 0
m = 1
s = 1

result = 61000
Input constraints:

0 <= h <= 23
0 <= m <= 59
0 <= s <= 59

return number of milliseconds after midnight

input hour, minue, second
- divide second by 1000
- divide minute by 60000
- multiply hour by 60, divide minute by 60000


return number of milliseconds after midnight






*/