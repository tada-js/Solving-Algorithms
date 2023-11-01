{
  let fs = require('fs');
  let input = fs.readFileSync('/dev/stdin').toString().split('\n');
  const N = Number(input[0]);
  const arr = input[1]
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b);
  let totalTime = 0;
  let totalTimeList = [];

  for (let element of arr) {
    totalTime += element;
    totalTimeList.push(totalTime);
  }

  console.log(totalTimeList.reduce((acc, cur) => acc + cur, 0));
}
{
  let fs = require('fs');
  let input = fs.readFileSync('/dev/stdin').toString().split('\n');
  let n = Number(input[0]); // 사람의 수
  let arr = input[1].split(' ').map(Number); // 모든 처리 시간 입력받기
  // 오름차순 정렬
  arr.sort((a, b) => a - b);
  let answer = 0;
  let summary = 0;
  for (let i = 0; i < n; i++) {
    summary += arr[i]; // i번째 사람이 기다린 총 시간
    answer += summary; // 지금까지 소요된 총 시간
  }
  console.log(answer);
  /**
   * reduce로 합산하지 않고 반복문 내에서 answe에 sum 값을 더하는 방법도 있다.
   */
}
{
  // 뤼튼 코드
  let fs = require('fs');
  let input = fs.readFileSync('/dev/stdin').toString().split('\n');
  let N = Number(input[0]);
  let times = input[1]
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b);

  let result = 0;
  let sum = 0;

  for (let i = 0; i < N; i++) {
    sum += times[i];
    result += sum;
  }

  console.log(result);

  /**
   * 이 코드는 다음과 같이 동작합니다:
  1. 입력을 받아와서 첫 번째 줄에서 사람의 수 N을 파싱하고, 두 번째 줄에서 각 사람이 인출하는데 필요한 시간을 파싱한 후 오름차순으로 정렬합니다.
  2. 각 사람이 인출하는데 필요한 시간을 누적하여 합계를 계산하고, 이 합계를 결과에 더합니다.
  3. 모든 사람을 돌면서 위 과정을 반복한 후, 각 사람이 인출하는데 필요한 총 시간을 출력합니다.
  이렇게 하면 주어진 시간 내에 모든 사람이 돈을 인출하는 데 필요한 최소 시간을 구할 수 있습니다.
   */
}
