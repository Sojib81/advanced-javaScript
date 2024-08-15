//let and const are block scope variable.
//var is a function scope variable.
function sum(num1, num2) {
  const result = num1 + num2;
  return result;
}

const sum1 = sum(6, 14);
console.log(sum1);
//console.log(result);  //We can not access the block scope let and const variable outside the function and loop.
