const numbers = [2, 4, 5, 7, 8, 9];
// const newArray = [];
// for (let i = 0; i < numbers.length; i++) {
//   const element = numbers[i];
//   const result = element * element;
//   newArray.push(result);
// }

// console.log(newArray);
// const result = numbers.map(function (element) {
//   return element * element;
// });
// const square = (element) => element * element;
// const squareX = (x) => x * x;
const updateArray = numbers.map((x) => x * x);
console.log(updateArray);

const largeValue = numbers.filter((x) => x > 6);
console.log(largeValue);

// find will give a single elemet
const largeValueOne = numbers.find((x) => x > 8);
console.log(largeValueOne);
