


function destroyer(arr, destroy1, destroy2, destroy3) {
  // Remove all the values
  let destroyerArr = [];
  for (let i = 0; i < arr.length; i ++){
    if (arr[i] !== destroy1 && arr[i] !== destroy2 && arr[i] !== destroy3) {
      destroyerArr.push(arr[i]);
    }
  }
  return destroyerArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);


// let x = ([1, 2, 3, 1, 2, 3], 2, 3)
// console.log(x.slice);
