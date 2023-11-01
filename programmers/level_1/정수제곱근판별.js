const solution = (n) => {
  return Math.sqrt(n) % 1 === 0 ? Math.pow(Math.sqrt(n) + 1, 2) : -1;
};

solution(121);
solution(3);
