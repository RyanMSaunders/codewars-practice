
export function disemvowel(str: string): string{
  const splitStr = str.split('')
  const filteredArr = splitStr.filter((e) => {
    let lowE = e.toLowerCase()
    if (lowE !== 'a' && lowE !== 'e' && lowE !== 'i' && lowE !== 'o' && lowE !== 'u') {
      return e
    }
  })
  return filteredArr.join('')

}




/**
 
Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from 
the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string 
with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.


returning the same string with all the vowels removed
inputting a string

inputting a string
- convert string into array using split
- filter array, removing all vowels
- join array
returning the same string with all the vowels removed




 */