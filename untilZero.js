const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString();
input = input.split("\n");
let num1;
let num2;
let i = 0;
function solution(num1, num2) {
  while (true) {
    const arr = input[i].split(" ").map((item) => +item);
    num1 = arr[0];
    num2 = arr[1];
    if (num1 === 0 && num2 === 0) break;
    console.log(num1 + num2);
    i++;
  }
}
solution(num1, num2);
