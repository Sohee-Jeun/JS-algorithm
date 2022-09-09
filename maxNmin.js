const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString();
input = input.split("\n");
const inputN = +input[0];
let inputArr = [];

for (let i = 1; i <= inputN; ++i) {
  const arr = input[i].split(" ").map((item) => +item);
  inputArr = Array.from(arr);
  break;
}
let max = inputArr[0];
let min = inputArr[0];
for (let i = 0; i < inputArr.length; i++) {
  if (max > inputArr[i]) max = inputArr[i];
  if (min < inputArr[i]) min = inputArr[i];
}
console.log(`${max} ${min}`);
// let result = [];
// const newArr = inputArr.sort((a, b) => a - b);
// result.push(newArr.shift());
// result.push(newArr.pop());
// console.log(result.join(" "));
