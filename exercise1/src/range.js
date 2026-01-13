const range = (x, y) => {
  const result = [];
  for (let i = x; i <= y; i++) {
    result.push(i);
  }
  return result;
};

console.log(range(0, 5));
console.log(range(3, 3));
console.log(range(8, 0));
console.log(range(0, 0));
