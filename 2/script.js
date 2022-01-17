let myMatrix = [
  [1, 5, 3, 2, 7, 9, 2, 4, 9, 1],
  [4, 2, 6, 8, 1, 1, 5, 6, 3, 2],
  [7, 8, 9, 4, 5, 3, 7, 8, 1, 3],
];

secondTask(myMatrix);

function secondTask(matrix) {
  let trueResult = "1,2,3,4,5,6,7,8,9";
  let slicedArrays = [];
  let result = [];

  matrix.forEach((arr) => {
    let subArray = [];
    for (let i = 0; i < arr.length - 2; i++) {
      subArray[i] = arr.slice(i, i + 3);
    }
    slicedArrays.push(subArray);
  });

  for (let j = 0; j < slicedArrays[0].length; j++) {
    let matrix = [];
    slicedArrays.forEach((arr) => matrix.push(arr[j]));
    let stringCheck = matrix
      .flat()
      .sort((a, b) => a - b)
      .toString();
    if (stringCheck === trueResult) {
      result.push(true);
    } else {
      result.push(false);
    }
  }
  console.log(result);
}
