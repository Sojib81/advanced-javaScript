function stopWatch() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const clock1 = stopWatch();
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());

const clock2 = stopWatch();
console.log(clock2());
console.log(clock2());
console.log(clock1()); // Here i add the clock1 function but it will be show the number 5 because it within a closed environment.
console.log(clock2());
