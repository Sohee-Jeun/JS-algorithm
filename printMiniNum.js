const n = 10;
const x = 5;
const arr = [1, 10, 4, 9, 2, 3, 8, 5, 7, 6];
for (let i = 0; i < n; i++) {
  let newArr = [];
  if (arr[i] < x) {
    newArr = arr[i];
  }
  console.log(newArr);
}
