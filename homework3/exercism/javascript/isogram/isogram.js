let Isogram = function(word) {
  this.word = word
}

Isogram.prototype.isIsogram = function() {
  this.word = this.word.replace(/ |-/g, '')
  let wordArr = this.word.toLowerCase().split('').sort();

  for (let i = 0; i < wordArr.length; i++) {
    if (wordArr[i] === wordArr[i+1]) {
      return false;
    }
  }

  return true;

}

module.exports = Isogram;
