let input = require("fs").readFileSync("/dev/stdin").toString();

let num = Number(input);

let star = new Array(num).fill(" ");

for (let i = num - 1; i >= 0; i--) {
  star[i] = "*";

  console.log(star.join(""));
}
