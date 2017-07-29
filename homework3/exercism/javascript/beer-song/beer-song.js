let BeerSong = function() {

  BeerSong.prototype.verse = function(num) {
    
    if (num > 2) {
      return num +" bottles of beer on the wall, " + num + " bottles of beer." +
            "\nTake one down and pass it around, " + (num - 1) + " bottles of beer on the wall.\n";;
    } else if (num === 2) {
      return "2 bottles of beer on the wall, 2 bottles of beer.\n" +
                "Take one down and pass it around, 1 bottle of beer on the wall.\n";
    } else if (num === 1) {
      return "1 bottle of beer on the wall, 1 bottle of beer.\n" +
                "Take it down and pass it around, no more bottles of beer on the wall.\n";
    } else if (num === 0) {
      return "No more bottles of beer on the wall, no more bottles of beer.\n" +
                  "Go to the store and buy some more, 99 bottles of beer on the wall.\n";;
    }
  }
  BeerSong.prototype.sing = function(startBeer,endBeer = 0) {
    let verses = [];
    while (startBeer >= endBeer) {
      verses.push(this.verse(startBeer))
      startBeer --;
    }
    return verses.join("\n");
  }
}


module.exports = BeerSong;
