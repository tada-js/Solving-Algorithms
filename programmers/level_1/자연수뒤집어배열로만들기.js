const solution = (n) => {
  return String(n)
    .split('')
    .reverse()
    .map((value) => parseInt(value));
};
solution(12345);
