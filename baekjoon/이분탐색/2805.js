{
  let fs = require('fs');
  let input = fs.readFileSync('input.txt').toString().split('\n');

  const N = Number(input[0].split(' ')[0]); // 나무의 수
  const M = Number(input[0].split(' ')[1]); // 필요한 나무 길이
  const arr = input[1].split(' ').map(Number); // 나무 높이

  let start = 0;
  let end = Math.max(...arr);
  let answer = 0;

  while (start <= end) {
    // 탐색 범위 내에 찾고자 하는 값이 없을 때까지 반복, 나무를 잘라내는 최대 높이를 찾았을 때 종료
    let mid = parseInt((start + end) / 2);
    let total = 0;

    for (const x of arr) {
      if (mid < x) {
        total += x - mid;
      }
    }

    if (total < M) {
      // 획득한 나무 길이가 필요한 나무 길이보다 작다면
      end = mid - 1; // mid 값이 낮을수록 많은 나무를 획득 가능하므로 mid 값 낮춰야 됨
    } else {
      // 획득한 나무 길이가 필요한 나무 길이보다 크거나 같다면
      // mid 값이 높을수록 적은 나무를 획득 가능하므로 mid 값 높여야 됨
      answer = mid;
      start = mid + 1;
    }
  }

  console.log(answer);
}
{
  // 다른 코드
  let fs = require('fs');
  let input = fs.readFileSync('/dev/stdin').toString().split('\n');
  let n = Number(input[0].split(' ')[0]); // 나무의 수(N)
  let m = Number(input[0].split(' ')[1]); // 가져갈 나무의 길이(M)
  let arr = input[1].split(' ').map(Number); // 각 나무의 높이
  let start = 0; // 이진 탐색을 위한 시작점(start)과 끝점(end) 설정
  let end = arr.reduce((a, b) => Math.max(a, b));
  let result = 0;
  while (start <= end) {
    // 이진 탐색 수행(반복문)
    let mid = parseInt((start + end) / 2); // 현재의 중간점(높이)
    let total = 0; // mid로 잘랐을 때 얻을 수 있는 나무의 양 계산
    for (x of arr) if (x > mid) total += x - mid;
    if (total < m)
      end = mid - 1; // 나무의 양이 부족한 경우 더 많이 자르기(높이 줄이기)
    else {
      // 나무의 양이 충분한 경우 덜 자르기(높이 키우기)
      result = mid; // 최대한 덜 잘랐을 때가 정답이므로, result에 기록
      start = mid + 1;
    }
  }
  console.log(result);
}
