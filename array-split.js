const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const part1 = numbers.slice(2, 6);
console.log(part1);

const part2 = numbers.splice(0, 3, 10, 11, 12);
console.log(part2);
console.log(numbers);
const joiningArray = numbers.join(" ");
console.log(joiningArray);
