const price = 0;

const result = (a, b, c) => {
  if (a === b && b === c && c === a) {
    return (price = 10000 + a * 1000);
  }
  if (a !== b || b !== c || c !== a) {
    if (a === b || a === c) return (price = 1000 + a * 100);
    if (b === c) {
      return (price = 1000 + b * 100);
    }
  }
  if (a !== b && b !== c && c !== a) {
    const max = [a, b, c].sort();
    return max.pop() * 100;
  }
};

console.log(result(1, 2, 3));
