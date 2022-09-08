const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString();
input = input.split("\n");

const arr = input[0].split(" ").map((item) => +item);

const newArr = input[1].split(" ").map((item) => +item);

function solution(testCase, compare) {
  let result = [];
  for (let i = 0; i < compare.length; i++) {
    if (compare[i] < testCase[1]) {
      result.push(compare[i]);
    }
  }
  console.log(result.join(" "));
}
solution(arr, newArr);
