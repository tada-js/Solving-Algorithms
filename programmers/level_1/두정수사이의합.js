const solution = (a, b) => {
  let sum = 0;

  if (a < b || a === b) {
    for (let i = a; i <= b; i++) {
      sum += i;
    }
  } else if (a > b) {
    for (let i = b; i <= a; i++) {
      sum += i;
    }
  }

  return sum;
};
solution(3, 5);
solution(3, 3);
solution(5, 3);
