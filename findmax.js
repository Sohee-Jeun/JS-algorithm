const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString();
input = input.split("\n").map((item) => +item);
const newArr = Array.from(input);
let max = newArr[0];

for (let i = 0; i < newArr.length; i++) {
  if (max < newArr[i]) {
    max = newArr[i];
  }
}

console.log(max);
console.log(newArr.findIndex((item) => item === max) + 1);

/* input
3
29
38
12
57
74
40
85
61
 */
