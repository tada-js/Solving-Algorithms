const solution = (left, right) => {
  let result = 0;
  for (let i = left; i <= right; i++) {
    if (Number.isInteger(Math.sqrt(i))) {
      // *제곱근이 정수면 약수의 개수는 홀수다*
      result -= i;
    } else {
      result += i;
    }
  }
  return result;
};
solution(13, 17);
