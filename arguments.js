function add(num1, num2) {
  //console.log([...arguments]);
  const numbers = [...arguments];
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    sum = sum + element;
    //console.log(sum);
    // initialValue = numbers.map((x) => x + initialValue);
  }
  //console.log(initialValue);

  //return num1 + num2, sumNumbers;
  return sum;
}
const result = "Sum of your input arguments : " + add(5, 7, 9, 10, 12, 34, 59);
console.log(result);
