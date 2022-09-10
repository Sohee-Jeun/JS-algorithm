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

function solution(n, array) {
  let max = array[0];
  for (let i = 0; i < array.length; i++) {
    if (max < array[i]) max = array[i];
  }
  for (let i = 0; i < array.length; i++) {
    array[i] = (array[i] / max) * 100;
  }
  const total = array.reduce((item1, item2) => item1 + item2);
  const average = total / n;
  return average;
}

console.log(solution(inputN, inputArr));
/*입력
4
1 100 100 100*/
