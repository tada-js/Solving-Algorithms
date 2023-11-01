const solution = (n) => {
  let result = 0;

  while (n !== 1 && result !== 500) {
    n % 2 === 0 ? (n = n / 2) : (n = n * 3 + 1);
    result++;
    // console.log(n);
  }

  return result === 500 ? -1 : result;
};

solution(6);
solution(16);
solution(626331);
