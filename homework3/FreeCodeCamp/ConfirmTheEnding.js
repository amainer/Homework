
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  return (target === (str.substr(-target.length,target.length)));
}

console.log(confirmEnding("Bastian", "n"));
console.log(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification"));
