const solution = (x, n) => {
  let answer = [];

  for (let i = 1; i <= n; i++) {
    answer.push(x * i);
  }

  return answer;
};

solution(2, 5);
solution(4, 3);
solution(-4, 2);
