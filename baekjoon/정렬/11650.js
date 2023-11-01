{
  let fs = require('fs');
  let input = fs.readFileSync('/dev/stdin').toString().split('\n');

  let n = Number(input[0]);
  let data = [];
  let answer = '';

  for (let i = 1; i <= n; i++) {
    let [x, y] = input[i].split(' ').map(Number);
    data.push([x, y]);
  }

  data.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]));

  for (const element of data) {
    answer += element[0] + ' ' + element[1] + '\n';
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
    if (a[0] != b[0]) return a[0] - b[0]; // x 좌표 기준 오름차순
    else return a[1] - b[1]; // x가 같으면 y 좌표 기준 오름차순
  }
  data.sort(compare); // 정렬 수행
  let answer = ''; // 정렬 결과 출력
  for (let point of data) {
    answer += point[0] + ' ' + point[1] + '\n';
  }
  console.log(answer);
}

/**
  - 2차원 배열도 sort 메서드로 정렬할 수 있다.
  - x가 같으면 y 좌표 기준으로 정렬할 수 있도록 한다.
 */
