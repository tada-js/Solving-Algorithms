{
  let fs = require('fs');
  let input = fs.readFileSync('input.txt').toString().split('\n');

  let n = Number(input[0]);
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  console.log(sum);
}
{
  let fs = require('fs');
  let input = fs.readFileSync('/dev/stdin').toString().split('\n');
  // 문자열을 수로 변환할 때 parseInt에 비하여 Number의 속도가 더 빠르게 동작
  let n = Number(input[0]);
  let summary = 0;
  for (let i = 1; i <= n; i++) {
    summary += i;
  }
  console.log(summary);
}
{
  let fs = require('fs');
  let input = fs.readFileSync('input.txt').toString().split('\n');
  let n = Number(input[0]);
  console.log((n * (n + 1)) / 2);
}
