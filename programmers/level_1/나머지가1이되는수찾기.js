const solution = (n) => {
  for (let i = 1; i <= n; i++) {
    if (n % i === 1) {
      console.log(i);
      return i;
    }
  }
};
solution(10);
solution(12);
