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

//const titleCased  = str.toLowerCase()

const titleCased = (x) => {
  return tutorials.map( y => {
    let words = y.split(' ')
    let capitalizedTokens =
      words.map( word => word.charAt(0).toUpperCase() + word.slice(1) )
    let result = capitalizedTokens.join(' ')
    return result
  })
}