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
  return tutorials.map(message => {
    // let msg = message.split(' ')
    // return message = msg.map(word => {
    //   word.charAt(0).toUpperCase() + msg.slice(1)
    // }).join(' ');
    return message.split(' ').map(word => word = word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
  })
}
