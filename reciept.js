const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString();
input = input.split("\n");

const total = +input[0];
const count = +input[1];

let exactTotal = 0;
for (let i = 2; i < count + 2; i++) {
  const arr = input[i].split(" ").map((item) => +item);
  exactTotal += arr[0] * arr[1];
}
console.log(exactTotal);
total === exactTotal ? console.log("Yes") : console.log("No");

const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString();
input = input.split("\n");
const total = +input[0];
const cnt = +input[1];

let exactTotal = 0;
for (let i = 2; i <= cnt + 2; i++) {
  const arr = input[i].split(" ").map((item) => +item);
  exactTotal += arr[0] * arr[1];
}

total === exactTotal ? console.log("Yes") : console.log("No");
