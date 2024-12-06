
export const likes = (a: string[]): string => {

  const arrayLength = a.length;
  // console.log(arrayLength);
    

  for (let i = 0; i < a.length; i++) {
    if(arrayLength >= 4) {
     const result =  `${a[0]}, ${a[1]} and ${arrayLength - 2} others like this`;
     return result;
    } else if (arrayLength == 3) {
      return `${a[0]}, ${a[1]} and ${a[2]} like this`;
    } else if (arrayLength == 2) {
      return `${a[0]} and ${a[1]} like this`;
    } else {
      return `${a[0]} likes this`;
    }
    
  }

  return 'noone likes this';
 
}


console.log(likes(["Alex", "Jacob", "Mark", "Max"]));
 



/**
 

You probably know the "like" system from Facebook and other pages. 
People can "like" blog posts, pictures or other items. 
We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. 
It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
Note: For 4 or more names, the number in "and 2 others" simply increases.


Returning - A string corresponding to the amount of names in the array
- If no names, return string 'no one likes this'
- If one name return '${name} likes this'
- If two names return '${index 0 name} and ${index 1 name} likes this'
- If three names return '${index 0 name}, ${index 1 name} and ${index 2 name} likes this'
- If four or greater names '${index 0 name}, ${index 1 name} and ${length of array - 2} like this'
- Loop through the array
- Check the amount of items in the array
Inputing - an array of names as strings


 */