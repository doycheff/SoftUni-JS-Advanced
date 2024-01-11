function aggregateElements(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);

  let inverseSum = 0;
  for (let i = 0; i < arr.length; i++) {
    inverseSum += 1 / arr[i];
  }
  console.log(inverseSum);

  let result = "";
  for (let i = 0; i < arr.length; i++) {
    result += String(arr[i]);
  }
  console.log(result);
}
aggregateElements([1, 2, 3]);
aggregateElements([2, 4, 8, 16]);
