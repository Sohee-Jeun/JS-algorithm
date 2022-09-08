const chess = [1, 1, 2, 2, 2, 8];
const input = [0, 1, 2, 2, 2, 7];
let answer = input.map((i, index) => {
  return chess[index] - i;
});

console.log(...answer);
