const solution = (a, b) => {
  let result = 0;
  for (let length in a) {
    result += a[length] * b[length];
  }
  return result;
};
solution([1, 2, 3, 4], [-3, -1, 0, 2]);
