let arr = [1, 3, 5, 4, 5, 7, 6, 8, 9, 8, 10, 2, 5, 6, 7];

firstTask(arr);

function firstTask(arr) {
  let resultArray = [];
  for (let i = 0; i < arr.length - 2; i++) {
    let subArr = arr.slice(i, i + 3);
    if (
      (subArr[0] > subArr[1] && subArr[1] < subArr[2]) ||
      (subArr[0] < subArr[1] && subArr[1] > subArr[2])
    ) {
      resultArray.push(1);
    } else {
      resultArray.push(0);
    }
  }
  console.log(arr);
  console.log(resultArray);
  return resultArray;
}
