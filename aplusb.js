const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString();
input = input.split("\n");
let num1;
let num2;

function solution(num1, num2) {
  for (let i = 0; i < input.length - 1; i++) {
    const arr = input[i].split(" ").map((item) => +item);
    num1 = arr[0];
    num2 = arr[1];
    console.log(num1 + num2);
  }
}
solution(num1, num2);
