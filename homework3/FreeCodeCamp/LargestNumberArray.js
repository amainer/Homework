
function largestOfFour(arr) {
  // You can do this!
  let maxNumbers = [];

  for (array in arr) {
    let maxNumber = 0;
    for (number in arr[array]) {
      console.log(arr[array][number]);
      if (arr[array][number] > maxNumber) {
        maxNumber = arr[array][number];
      }
    }
    maxNumbers.push(maxNumber);
  }
  return maxNumbers;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
