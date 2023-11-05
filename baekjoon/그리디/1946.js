{
  let fs = require('fs');
  let input = fs.readFileSync('/dev/stdin').toString().split('\n');

  const T = Number(input[0]);
  let line = 1;

  for (let i = 0; i < T; i++) {
    let N = Number(input[line]);
    let arr = [];

    for (let j = line + 1; j <= N + line; j++) {
      arr.push(input[j].split(' ').map(Number));
    }

    arr.sort((x, y) => x[0] - y[0]);
    let minValue = Number.MAX_SAFE_INTEGER;
    let count = 0;

    for (const [x, y] of arr) {
      if (y < minValue) {
        minValue = y;
        count += 1;
      }
    }

    console.log(count);
    line += N + 1;
  }
}
{
  // 다른 풀이 코드
  let fs = require('fs');
  let input = fs.readFileSync('/dev/stdin').toString().split('\n');
  let testCase = Number(input[0]);
  let line = 1;
  for (let tc = 0; tc < testCase; tc++) {
    n = Number(input[line]);
    let arr = [];
    for (let i = line + 1; i <= line + n; i++) {
      let data = input[i].split(' ').map(Number);
      arr.push(data);
    }
    arr.sort((x, y) => x[0] - y[0]); // x 순위를 기준으로 오름차순 정렬
    let count = 0;
    let minValue = 100001;
    for (let [x, y] of arr) {
      if (y < minValue) {
        // y 순위 값이 가장 작다면 카운트
        minValue = y;
        count += 1;
      }
    }
    console.log(count);
    line += n + 1;
  }
}
{
  // 뤼튼 코드
  let fs = require('fs');
  let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
  let testCase = Number(input[0]);
  let line = 1;

  for (let tc = 0; tc < testCase; tc++) {
    let n = Number(input[line]);
    let arr = [];
    for (let i = line + 1; i <= line + n; i++) {
      let data = input[i].split(' ').map(Number);
      arr.push(data);
    }
    arr.sort((x, y) => x[0] - y[0]); // 서류 심사 순위를 기준으로 오름차순 정렬

    let count = 1; // 첫 번째 지원자는 무조건 채용 가능
    let minValue = arr[0][1]; // 첫 번째 지원자의 면접 순위 저장
    for (let i = 1; i < n; i++) {
      if (arr[i][1] < minValue) {
        // 면접 순위가 가장 작다면 채용하고, minValue 업데이트
        minValue = arr[i][1];
        count += 1;
      }
    }
    console.log(count);
    line += n + 1;
  }

  /**
  이 코드는 각 테스트 케이스에 대해 다음과 같이 동작합니다:

  1. 각 지원자의 서류 심사 순위와 면접 순위 정보를 2차원 배열에 저장합니다.
  2. 이 배열을 서류 심사 순위를 기준으로 오름차순 정렬합니다.
  3. 첫 번째 지원자는 무조건 채용 가능하므로 카운트를 1로 시작하고, 첫 번째 지원자의 면접 순위를 minValue로 설정합니다.
  4. 두 번째 지원자부터 순회하면서, 만약 지원자의 면접 순위가 minValue보다 낮다면 그 지원자를 채용하고 minValue를 업데이트합니다.
  5. 모든 지원자를 확인한 뒤, 채용한 지원자의 수를 출력합니다.
  이 코드는 각 지원자를 한 번씩만 확인하므로 시간 복잡도는 O(n)입니다. 따라서 큰 입력에 대해서도 충분히 빠른 시간 내에 문제를 해결할 수 있습니다.
   */
}
