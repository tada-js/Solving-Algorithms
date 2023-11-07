{
  let fs = require('fs');
  let input = fs.readFileSync('/dev/stdin').toString().split('\n');

  const T = Number(input[0]);
  let pibo = [0, 1]; // 초기값

  // 피보나치 수열 생성
  while (pibo[pibo.length - 1] < 1e9) {
    pibo.push(pibo[pibo.length - 2] + pibo[pibo.length - 1]);
  }

  for (let i = 1; i <= T; i++) {
    let n = Number(input[i]);
    let result = [];
    let max = pibo.length - 1;
    let answer = '';

    while (n > 0) {
      if (n >= pibo[max]) {
        n -= pibo[max];
        result.push(pibo[max]);
      }
      max--;
    }

    for (let j = result.length - 1; j >= 0; j--) {
      answer += result[j] + ' ';
    }

    console.log(answer);
  }
}
{
  let fs = require('fs');
  let input = fs.readFileSync('/dev/stdin').toString().split('\n');
  // 피보나치 수들 계산
  pibo = [];
  pibo.push(0);
  pibo.push(1);
  while (pibo[pibo.length - 1] < 1e9)
    pibo.push(pibo[pibo.length - 2] + pibo[pibo.length - 1]);
  let testCases = Number(input[0]);
  for (let tc = 1; tc <= testCases; tc++) {
    let n = Number(input[tc]);
    let result = [];
    let i = pibo.length - 1; // 가장 큰 피보나치 수의 인덱스
    while (n > 0) {
      // n이 0이 될 때까지
      if (n >= pibo[i]) {
        // 가능한 큰 피보나치 수부터 빼기
        n -= pibo[i];
        result.push(pibo[i]);
      }
      i--;
    }
    let answer = '';
    for (let i = result.length - 1; i >= 0; i--) answer += result[i] + ' '; // 오름차순 출력
    console.log(answer);
  }
}
{
  // 뤼튼 코드
  let fs = require('fs');
  let input = fs.readFileSync('/dev/stdin').toString().split('');

  let fibo = [0, 1];
  while (fibo[fibo.length - 1] <= 1e9) {
    fibo.push(fibo[fibo.length - 1] + fibo[fibo.length - 2]);
  }

  let testCases = parseInt(input[0]);
  for (let i = 1; i <= testCases; i++) {
    let target = parseInt(input[i]);
    let result = [];
    for (let j = fibo.length - 1; j >= 0; j--) {
      if (fibo[j] <= target) {
        target -= fibo[j];
        result.unshift(fibo[j]);
      }
      if (target === 0) break;
    }
    console.log(...result);
  }
  /**
   * 이 코드는 먼저 피보나치 수열을 계산하여 fibo 배열에 저장하고, 각 테스트 케이스에 대해 주어진 숫자를 피보나치 수열의 합으로 표현하는 방법을 찾습니다. 이를 위해 피보나치 수열을 큰 수부터 작은 수 순서로 확인하면서 주어진 숫자에서 빼고, 그 결과를 result 배열에 저장합니다. 이 과정을 주어진 숫자가 0이 될 때까지 반복하고, 최종 결과를 출력합니다.
   */
}
