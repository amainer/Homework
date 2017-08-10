// let Pangram = function(sentence) {
//   this.sentence = sentence
// }
//
// Pangram.prototype.isPangram = function() {

let Bob = function() {}

Bob.prototype.hey = function (greeting) {
  //
  // Bob is a lackadaisical teenager. In conversation, his responses are very limited.
  // Bob answers 'Sure.' if you ask him a question.
  // He answers 'Whoa, chill out!' if you yell at him.
  // He says 'Fine. Be that way!' if you address him without actually saying
  // anything.
  // He answers 'Whatever.' to anything else.
  console.log(greeting);

  let removeNonAlph = greeting.replace(/[^a-zA-Z0-9 ?]/g, '').replace(/\s+/g, '')
  let stringArr = removeNonAlph.split('')


  if (removeNonAlph === '') {
    return 'Fine. Be that way!';
  } else if (removeNonAlph.toUpperCase() === removeNonAlph && removeNonAlph.toLowerCase() !== removeNonAlph) {
    return 'Whoa, chill out!';
  } else if (stringArr[stringArr.length-1] === '?'){
    return 'Sure.';
  } else {
    return 'Whatever.'
  }

}
module.exports = Bob;
