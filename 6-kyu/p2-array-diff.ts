
export const arrayDiff = (a: number[], b: number []): number[] => {

  a.map((val, i) => {
    if (b.includes(val)) {
      a.splice(i, 1)
    }
  });
  
  
  return a;
};

console.log(arrayDiff([1,2],[1]));


/**
 Your goal in this kata is to implement a difference function, 
 which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list 
b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]



Returning - 
-
- if array b includes val, splice array a at that index
- loop through array a
inputting - 
 */