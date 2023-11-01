const solution = (n, m) => {
  let 최대공약수 = 0;
  let 최대공배수 = 0;

  let num = n > m ? n : m;

  // 최대공약수
  for (let i = 1; i <= num; i++) {
    if (n % i === 0 && m % i === 0) {
      최대공약수 = i;
    }
  }

  // 최소공배수
  최대공배수 = (n * m) / 최대공약수;
  // console.log([최대공약수, 최대공배수]);
  return [최대공약수, 최대공배수];
};
solution(3, 12);
