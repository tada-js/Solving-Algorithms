{
  let fs = require('fs');
  // let input = fs.readFileSync('/dev/stdin').toString().split('\n');
  let input = fs.readFileSync('2751.txt').toString().split('\n');

  let n = Number(input[0]);
  let arr = [];
  let answer = '';

  for (let i = 1; i <= n; i++) {
    arr.push(Number(input[i]));
  }

  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i] +) 데이터가 많은 경우에 매번 console.log로 출력하게 되면 시간 초과 발생
    answer += arr[i] + '\n';
  }

  console.log(answer);
}
