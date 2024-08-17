const employee = {
  firstName: "Alex",
  lastName: "George",
  salary: 15000,
  getFullName: function () {
    return this.firstName + this.lastName;
  },
  getCharge: function (amount, tax) {
    console.log(this);
    this.salary = this.salary - amount - tax;
    return this.salary;
  },
};

const employee2 = {
  firstName: "Rahim",
  lastName: "Hossain",
  salary: 20000,
};
const employee3 = {
  firstName: "Kahim",
  lastName: "Hossain",
  salary: 30000,
};

employee.getCharge.call(employee2, 5000);
console.log(employee2.salary);

employee.getCharge.apply(employee3, [3000, 30]);
console.log(employee3.salary, "Employee 3");
/*
// employee.getCharge(2000);
// console.log(employee.salary);
const chargeBill = employee.getCharge.bind(employee2);
const karimChargeBill = employee.getCharge.bind(employee3);
karimChargeBill(10000);
console.log(employee3.salary, "Karim's Salary");

// chargeBill(2000);
chargeBill(5000);
console.log(employee2.salary);

console.log(employee.getFullName);
employee.getCharge(250);
console.log(employee.salary, "Salary");

*/
