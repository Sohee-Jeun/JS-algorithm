const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString();
input = input.split("\n");
const inputN = +input[0];
const inputTestCase = [];
for (let i = 1; i <= inputN; ++i) {
  const arr = input[i].split("");
  const newArr = [];
  for (let i = 1; i <= arr[0]; ++i) {
    newArr = Array.from(arr);
  }
  const testCase = {
    N: i,
    arr: newArr,
  };
  inputTestCase.push(testCase);
}
function solution(n, testObj) {
  for (let i = 0; i < n; i++) {
    console.log(testObj);
  }
}
solution(inputN, inputTestCase);
