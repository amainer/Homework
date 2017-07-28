let Hamming = function() {};

Hamming.prototype.compute = function (dnA, dnB) {
  let counter = 0;
  if (dnA.length !== dnB.length) {
    throw (new Error("DNA strands must be of equal length."))
  }
  for (let i = 0; i < dnA.length; i++) {
    if (dnA[i] !== dnB[i]) {
      counter += 1;
    }
  }
  return counter;
}

module.exports = Hamming;
