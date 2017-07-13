
//Homework 2 Problem 1
for (i = 1; i <=100; i++) {
  if (i%3 === 0 && i%5 ===0) {
    console.log(i + ":FizzBuzz");
  } else if (i%3 === 0){
    console.log(i + ":Fizz");
  } else if (i%5 === 0) {
    console.log(i + ':Buzz');
  }
}

//Homework 2 Problem 2

myArray = [5,5,5,5,5,5]
myArray2 = [5,10]

function getAverage (array) {
  let sum = 0;
  for (item in array) {
    sum += array[item]
  }
  return Math.floor(sum/array.length);

}

console.log(getAverage(myArray));
console.log(getAverage(myArray2));
console.log(getAverage([2,2,2,2])); //2
console.log(getAverage([1,2,3,4,5,])); //3
console.log(getAverage([1,1,1,1,1,1,1,2])); //1
