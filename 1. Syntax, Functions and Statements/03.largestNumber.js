function largestNumber(...params) {
  let largest = Math.max(...params);
  console.log(`The largest number is ${largest}.`);
}
largestNumber(5, -3, 16);
largestNumber(-3, -5, -22.5);
