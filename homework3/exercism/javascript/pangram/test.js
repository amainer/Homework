let words = "the quick brown fox jumps over the lazy dog";

let array = words.replace(/[\W_]+/g," ").replace(/\s+/g, '').split('').sort();

console.log(array);
