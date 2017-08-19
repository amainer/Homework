const mathMod = {
  addition,
  subtraction,
  multiplication,
  division,
  modulo,
  exponent
}

function addition(a,b) {
  return a + b;
}

function subtraction(a,b) {
  return a - b;
}

function multiplication(a,b) {
  return a * b;
}

function division(a,b) {
  return a / b;
}

function modulo(a,b) {
  return a % b;
}

function exponent(a,b) {
  return a ** b;
}


module.exports = mathMod;
