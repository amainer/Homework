let dnaTranscriber = function() {};

dnaTranscriber.prototype.toRna = function (rna) {

  rna = rna.split('')

  for (let i = 0; i < rna.length; i++) {
    console.log(rna[i]);
    if (rna[i] === 'G') {
      rna[i] = 'C';
    } else if (rna[i] === 'C') {
      rna[i] = 'G';
    } else if (rna[i] === 'T') {
      rna[i] = 'A';
    } else if (rna[i] === 'A') {
      rna[i] = 'U'
    } else {
      throw (new Error ('Invalid input'));
    }
  }

  return rna.join('');

  // * `G` -> `C`
  // * `C` -> `G`
  // * `T` -> `A`
  // * `A` -> `U`

}

module.exports = dnaTranscriber;

//copied after the fact:

// let complements = {'G': 'C', 'C': 'G', 'T': 'A', 'A': 'U'};
//
// function DnaTranscriber() {}
//
// DnaTranscriber.prototype.toRna = function(dna) {
//
//     var result = '';
//     for (var i = 0; i < dna.length; i++) {
//         if (!(dna[i] in complements)) {
//             throw new Error('Invalid input');
//         }
// 
//         result += complements[dna[i]];
//     }
//
//     return result;
// };
//
// module.exports = DnaTranscriber;
