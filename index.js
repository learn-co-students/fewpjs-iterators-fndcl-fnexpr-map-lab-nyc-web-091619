const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


//create an anon func
//create a variable and have tutorials array iterate through for each sentence

const titleCased = () => {
  let returnArray = tutorials.map(sentence => { 

    // create a new variable to split sentences
    let splitSentence = sentence.split(' ')

    // start at index 0, loop through the array of words in "splitSentence" and assign the current array item "splitSentence[i] to the value returned by changing the character at place '0' (first letter) and the attaching the return of slice(1) which gives us all letters of the word string except the first character
    for (let i=0; i < splitSentence.length; i++) {
      splitSentence[i] = splitSentence[i].charAt(0).toUpperCase() + splitSentence[i].slice(1)
    }
    // console.log(typeof(splitSentence.join(' ')))
    // Join them back together and add a " " between each
    return splitSentence.join(' ')
  })
  // console.log(typeof(returnArray))
  // not sure why .map is returning an Object instead of an array?!? "convert" to array and send back to caller.
  return Object.values(returnArray);
}

titleCased()

