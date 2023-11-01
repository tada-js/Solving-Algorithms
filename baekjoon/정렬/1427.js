{
  let fs = require('fs');
  let input = fs.readFileSync('/dev/stdin').toString().split('\n');
  let arr = input[0]
    .split('')
    .map(Number)
    .sort((a, b) => b - a);

  console.log(arr.join(''));
}
{
  let fs = require('fs');
  let input = fs.readFileSync('/dev/stdin').toString().split('\n');
  let n = input[0]; // 수(N) 입력받기
  // 0부터 9까지 각 숫자(digit)의 출현 빈도를 담을 배열(array) 선언
  let cnt = Array(10).fill(0); // 초기 빈도 값은 0으로 초기화
  for (let x of n) {
    // 한 자리씩 숫자(digit)를 확인하며
    cnt[Number(x)]++;
  }
  let answer = '';
  // 9부터 0까지 하나씩 숫자(digit)를 확인하며
  for (let i = 9; i >= 0; i--) {
    // 출현 빈도만큼 출력하기
    for (let j = 0; j < cnt[i]; j++) answer += i + '';
  }
  console.log(answer);
}

/*
해당 문제는 카운팅 정렬(Counting Sort, 계수 정렬) 알고리즘과 흡사한 아이디어를 가진 문제였다.
단순 내림차순 정렬이 아닌 숫자(digit)를 하나씩 확인하며, 내림차 순으로 빈도수 만큼 출력하는 문제다.
*/
