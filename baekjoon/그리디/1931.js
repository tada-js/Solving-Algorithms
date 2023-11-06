{
  // 1. 빈 배열에 반복문을 통해 회의 시간 push 해서 2차원 배열 만들기
  // 2. 회의 종료 시간을 우선으로 오름차순 정렬
  // 3. 반복문을 통해 배열의 현재 인덱스 회의 종료 시간보다 큰 인덱스 찾기.
  // 4. 찾은 현재 인덱스 회의 종료 시간으로 업데이트, count 증가

  let fs = require('fs');
  let input = fs.readFileSync('input.txt').toString().split('\n');

  const N = Number(input[0]);
  let arr = [];
  let count = 1;
  let current = 0;

  for (let i = 1; i <= N; i++) {
    arr.push(input[i].split(' ').map(Number));
  }

  arr.sort((a, b) => {
    if (a[1] !== b[1]) return a[1] - b[1];
    else return a[0] - b[0];
  });

  for (let i = 1; i < N; i++) {
    if (arr[current][1] <= arr[i][0]) {
      count += 1;
      current = i;
    }
  }

  console.log(count);
  /*
  ```
    arr.sort((a, b) => {
    if (a[1] !== b[1]) return a[1] - b[1];
    else return a[0] - b[0];
  });
  ```

  이 코드를 `sort((a, b) => a[1] - b[1] || a[0] - b[0]);` 와 같이 쓸 수도 있다.
  a-b 반환값이 0일 때(같을 때) 0은 falsy 값으로 평가 되므로 OR 연산자로도 쓸 수 있다.
   */
}
{
  // 다른 풀이
  let fs = require('fs');
  let input = fs.readFileSync('/dev/stdin').toString().split('\n');
  let n = Number(input[0]); // 회의의 개수
  let arr = []; // 각 회의에 대한 (시작 시점, 종료 시점) 입력받기
  for (let i = 1; i <= n; i++) arr.push(input[i].split(' ').map(Number));
  arr.sort(function (a, b) {
    // (1) 종료 시점 (2) 시작 시점을 우선순위로 오름차순 정렬
    if (a[1] != b[1]) return a[1] - b[1];
    else return a[0] - b[0];
  });
  let cnt = 1,
    cur = 0; // 첫 번째 회의부터 확인
  for (let i = 1; i < n; i++) {
    if (arr[cur][1] <= arr[i][0]) {
      // 현재 회의가 끝난 이후에 회의가 시작되는 경우 카운트
      cur = i;
      cnt += 1;
    }
  }
  console.log(cnt);
}
{
  // 뤼튼 코드
  function solution(meetings) {
    meetings.sort((a, b) => a[1] - b[1] || a[0] - b[0]);
    let count = 0;
    let endTime = 0;

    for (let meeting of meetings) {
      if (meeting[0] >= endTime) {
        endTime = meeting[1];
        count++;
      }
    }

    return count;
  }

  let meetings = [
    [1, 4],
    [3, 5],
    [0, 6],
    [5, 7],
    [3, 8],
    [5, 9],
    [6, 10],
    [8, 11],
    [8, 12],
    [2, 13],
    [12, 14],
  ];
  console.log(solution(meetings)); // 결과 출력

  /**
   * 이 코드는 먼저 회의를 끝나는 시간을 기준으로 정렬하고, 그 다음으로는 회의가 시작하는 시간을 기준으로 정렬합니다. 그리고 나서 회의를 순회하면서, 아직 선택하지 않은 회의 중에서 가장 빨리 끝나는 회의를 선택합니다. 선택한 회의의 끝나는 시간 이후에 시작하는 회의를 다시 선택하게 됩니다. 이 과정을 반복하면서 선택할 수 있는 회의의 최대 개수를 구합니다.
   */
}
