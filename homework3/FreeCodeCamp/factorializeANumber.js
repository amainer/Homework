//Used recursion. Learning it in an F# programming book. 

function factorialize(num) {
  if (num > 1) {
    console.log(num);
    return (num * factorialize(num-1));
  } else {
    return 1;
  }
}

console.log(factorialize(5));
