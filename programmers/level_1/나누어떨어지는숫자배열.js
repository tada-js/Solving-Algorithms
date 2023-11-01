const solution = (arr, divisor) => {
  const divisible = [];
  const indivisible = [-1];

  arr.map((value) => {
    if (value % divisor === 0) {
      divisible.push(value);
    }
  });
  return divisible.length ? divisible.sort((a, b) => a - b) : indivisible;
};

solution([5, 9, 7, 10], 5);
// solution([2, 36, 1, 3], 1);
// solution([3, 2, 6], 10);
