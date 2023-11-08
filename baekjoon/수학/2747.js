{
  let fs = require('fs');
  let input = fs.readFileSync('/dev/stdin').toString().split('\n');

  const n = Number(input[0]);
  let cnt = n - 1;
  let pibo = [0, 1];

  while (cnt) {
    pibo.push(pibo[pibo.length - 2] + pibo[pibo.length - 1]);
    cnt--;
  }

  console.log(pibo[n]);
}
{
  // 다른 풀이
  const fs = require('fs');
  const X = +fs.readFileSync('./dev/stdin').toString().trim();

  let memo = new Array(46).fill(null);
  memo[0] = 0;
  memo[1] = 1;
  memo[2] = 1;

  function pibo(N) {
    if (memo[N] == null) {
      memo[N] = pibo(N - 1) + pibo(N - 2);
    }
    return memo[N];
  }

  console.log(pibo(X));
}
