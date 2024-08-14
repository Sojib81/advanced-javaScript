let x;
console.log(x);
//########If we don't return a value in value in function then it will give undefined value.
function add(num1, num2) {
  console.log(num1 + num2);
  return;
}

//### If we don't pass any parameter by default its value become undefined.
function add(num1, num2) {
  console.log(num1, num2);
}

const result = add(89);
console.log(result);

//##### If we want to access something which is not in the object then its value will be undefined.
const flower = { name: "Rose", color: "Red" };
console.log(flower.weight);

//######
let fun = undefined;
console.log(fun);

// null not exist , we will set null value explicitly like there was something before but not now.
