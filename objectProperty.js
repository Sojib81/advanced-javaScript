const students = [
  { id: 21, name: "A" },
  { id: 31, name: "B" },
  { id: 41, name: "C" },
  { id: 51, name: "D" },
];
//const studentsName = [];

// for (let i = 0; i < students.length; i++) {
//   const element = students[i];
//   const sName = element.name;
//   studentsName.push(sName);
// }
// console.log(studentsName);

const names = students.map((x) => x.name);
const ids = students.map((x) => x.id);
const idBiggerThan40 = students.filter((x) => x.id > 40);
const idBiggerThan41 = students.find((x) => x.id > 40);
console.log(ids);
console.log(names);
console.log(idBiggerThan40);
console.log(idBiggerThan41);
