//Falsy values
//0
//""
//undefined
//null
//NaN - Not a Number
//false
//######
//Truthy
//'0',' ',[],{},

const nameValue = 0;
if (nameValue || nameValue == 0) {
  console.log("Condition is True");
} else {
  console.log("Condition is False");
}
