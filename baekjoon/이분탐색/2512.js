{
  let fs = require('fs');
  let input = fs.readFileSync('/dev/stdin').toString().split('\n');

  const N = Number(input[0]);
  const arr = input[1].split(' ').map(Number);
  const M = Number(input[2]);

  let start = 1;
  let end = Math.max(...arr);
  let answer = 0;

  while (start <= end) {
    let mid = parseInt((start + end) / 2);
    let total = 0;

    for (const x of arr) {
      total += Math.min(x, mid);
    }

    if (total <= M) {
      answer = mid;
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  console.log(answer);
}
{
  // 뤼튼 코드
  let fs = require('fs');
  let input = fs.readFileSync('/dev/stdin').toString().split('\n');
  let n = Number(input[0].split(' ')[0]); // 지방의 수(N)
  let arr = input[1].split(' ').map(Number); // 각 지방의 예산 요청
  let m = Number(input[2]); // 총 예산(M)
  let start = 1; // 이진 탐색을 위한 시작점(start)과 끝점(end) 설정
  let end = arr.reduce((a, b) => Math.max(a, b));
  let result = 0;
  while (start <= end) {
    // 이진 탐색 수행(반복문)
    let mid = parseInt((start + end) / 2); // 현재의 중간점(상한액)
    let total = 0; // 배정된 예산의 총액 계산
    for (x of arr) {
      // 각 지방에서 요청한 예산을 하나씩 확인하며
      total += Math.min(mid, x); // 예산 배정
    }
    if (total <= m) {
      // 조건을 만족한다면, 상한액(최대화가 목표)을 증가시키기
      result = mid;
      start = mid + 1;
    } else {
      // 조건을 만족하지 못한다면, 상한액을 감소시키기
      end = mid - 1;
    }
  }
  console.log(result);
  /**
   * 이 코드는 예산 요청을 오름차순으로 정렬한 후, 이진 탐색을 이용하여 총 예산 m을 넘지 않는 선에서 가능한 최대의 예산 상한액을 찾아냅니다. 이 과정을 통해 문제의 조건을 만족하는 예산 배정의 최대값을 효율적으로 찾아낼 수 있습니다.
   */
}
