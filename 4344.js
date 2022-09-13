const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString();
input = input.split("\n");
const inputC = +input[0];
const inputTestCase = [];
for (let i = 1; i <= inputC; ++i) {
  const arr = input[i].split(" ").map((item) => +item);
  const newArr = [];
  for (let i = 1; i <= arr[0]; ++i) {
    newArr.push(arr[i]);
  }
  const testCase = {
    N: arr[0],
    arr: newArr,
  };
  inputTestCase.push(testCase);
}

function solution(c, testcase) {
  for (let i = 0; i < c; i++) {
    let sum = 0;
    let avg = 0;
    let cnt = 0;
    let result = 0;
    for (let j = 0; j < testcase[i].N; j++) {
      sum += testcase[i].arr[j];
      avg = sum / testcase[i].N;
    }
    for (let j = 0; j < testcase[i].N; j++) {
      if (testcase[i].arr[j] > avg) cnt++;
      result = (cnt / testcase[i].N) * 100;
    }
    console.log(`${result.toFixed(3)}%`);
  }
}
solution(inputC, inputTestCase);
