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

const titleCased = () => {
  let returnArray = tutorials.map(sentence => {
    let splitSentence = sentence.split(' ')

    for (let i=0; i < splitSentence.length; i++) {
      splitSentence[i] = splitSentence[i].charAt(0).toUpperCase() + splitSentence[i].slice(1)
    }
    // console.log(typeof(splitSentence.join(' ')))
    return splitSentence.join(' ')
  })
  // console.log(typeof(returnArray))
  return Object.values(returnArray);
}

titleCased()