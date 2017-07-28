var Pangram = function(sentence) {
  this.sentence = sentence
}

Pangram.prototype.isPangram = function() {
//
// YOUR CODE GOES HERE
//
  let alph = 'abcdefghijklmnopqrstuvwxyz';
  let alphArray = alph.split('');
  let removeNonAlph = this.sentence.toLowerCase().replace(/[^a-z]/g, '').replace(/\s+/g, '')
  let sentArray = removeNonAlph.split('');
  let sorted = sentArray.sort()

  if (sorted.length < 26) {
    return false;
  }

  for (let i = 0; sorted.length; i++) {
    if (sorted[i] === sorted [i+1]) {
      sorted.splice(i+1,1);
      i = i - 1;
      if (sorted[i] === 'z') {
        break;
      }
    }
  }

  for (let i = 0; i < sorted.length; i++) {
    if (sentArray[i] !== alphArray[i]) {
      return false;
    }
  }
  return true;

};

module.exports = Pangram;
