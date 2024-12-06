
export const spinWords = (words: string): string => {
  // console.log(words.split(' '));
  const splitSentence = words.split(" ")
  const newArray = []

  for (let word of splitSentence) {
    let splitWord = word.split('')
    if (splitWord.length >= 5) {
      // console.log(splitWord.reverse().join(''));
      
      newArray.push(splitWord.reverse().join(''));
    } else{
      newArray.push(word)
    }
  }
  // console.log('result', newArray.join(' '));
  
  return newArray.join(' ')
};


spinWords("Hey fellow warriors")


/**
 
Write a function that takes in a string of one or more words, 
and returns the same string, but with all words that have five 
or more letters reversed (Just like the name of this Kata). 
Strings passed in will consist of only letters and spaces. 
Spaces will be included only when more than one word is present.

Examples:

"Hey fellow warriors"  --> "Hey wollef sroirraw" 
"This is a test        --> "This is a test" 
"This is another test" --> "This is rehtona test"


Returns: A string whose words have five or more letters are reversed
- rejoin the string
- using the index of that word, 
- if the word count is 5 or over, reverse the order
- split the word and check how many letters each word has
- loop through array
- split the string into words
Inputting: a string with multiple words




 */