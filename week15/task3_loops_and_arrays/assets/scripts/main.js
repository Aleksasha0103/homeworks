//Step1
let numbers = [];
// console.log(numbers);

//Step2
for (let i = -10; i <= 10; i++) {
  numbers.push(i);
}
// console.log(numbers);

//Step3.1
for (let i = numbers.length - 1; i >= 0; i--) {
  if (numbers[i] < 0) {
    numbers.splice(i, 1);
  }
}
// console.log(numbers);

//Step3.2
for (let i = 0; i <= numbers.length - 1; i++) {
  numbers[i] = numbers[i] * numbers[i];
}
// console.log(numbers);

//Step3.3
numbers.sort(function (a, b) {
  return b - a;
});
// console.log(numbers);

//Step4
console.log(numbers);
