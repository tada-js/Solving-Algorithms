{
  let fs = require('fs');
  let input = fs.readFileSync('/dev/stdin').toString().split('\n');
  let arr = [];
  let n = Number(input[0]);
  let answer = '';

  for (let i = 1; i <= n; i++) {
    arr.push(input[i].split(' ').map(Number));
  }

  arr.sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]));

  for (let i = 0; i < n; i++) {
    if (i === n - 1) {
      answer += arr[i][0] + ' ' + arr[i][1];
    } else {
      answer += arr[i][0] + ' ' + arr[i][1] + '\n';
    }
  }

  console.log(answer);
}

{
  let fs = require('fs');
  let input = fs.readFileSync('/dev/stdin').toString().split('\n');

  let n = Number(input[0]);
  let data = [];
  for (let i = 1; i <= n; i++) {
    let [x, y] = input[i].split(' ').map(Number);
    data.push([x, y]);
  }
  function compare(a, b) {
    if (a[1] != b[1]) return a[1] - b[1]; // y 좌표 기준 오름차순
    else return a[0] - b[0]; // y가 같으면 x 좌표 기준 오름차순
  }
  data.sort(compare); // 정렬 수행
  let answer = ''; // 정렬 결과 출력
  for (let point of data) {
    answer += point[0] + ' ' + point[1] + '\n';
  }
  console.log(answer);
}

/**
  - `let [x, y] = input[i].split(' ').map(Number);` 코드처럼 x, y로 구조 분해 할당하는 방법도 고려하자.
    x, y 값이 필요할 경우 유용해 보인다.
 */
