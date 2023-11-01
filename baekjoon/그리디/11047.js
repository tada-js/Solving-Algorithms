{
  let fs = require('fs');
  let input = fs.readFileSync('/dev/stdin').toString().split('\n');
  let N = Number(input[0].split(' ')[0]);
  let K = Number(input[0].split(' ')[1]);
  let count = 0;
  let arr = [];

  for (let i = 1; i <= N; i++) {
    arr.push(Number(input[i]));
  }

  arr.sort((a, b) => b - a);

  for (let i = 0; i < N; i++) {
    count += parseInt(K / arr[i]);
    K %= arr[i];
  }

  console.log(count);
}
{
  let fs = require('fs');
  let input = fs.readFileSync('/dev/stdin').toString().split('\n');
  let n = Number(input[0].split(' ')[0]); // 동전의 개수
  let k = Number(input[0].split(' ')[1]); // 만들어야 할 금액
  let arr = [];
  // 전체 동전(화폐 단위) 데이터 입력
  for (let i = 1; i <= n; i++) arr.push(Number(input[i]));
  let cnt = 0;
  // 가치가 큰 동전부터 확인
  for (let i = n - 1; i >= 0; i--) {
    cnt += parseInt(k / arr[i]); // 해당 동전을 몇 개 사용해야 하는지
    k %= arr[i]; // 해당 동전으로 모두 거슬러 준 뒤 남은 금액
  }
  console.log(cnt);
}
/**
 * sort로 내림차순으로 정렬하지 않고 for문을 n-1부터 거꾸로 시작해도 된다.
 * `x = x % y`를 `x %= y`로 쓸 수 있다. (나머지 할당)
 */

{
  // 뤼튼 코드
  let fs = require('fs');
  let input = fs.readFileSync('/dev/stdin').toString().split('\n');
  let [N, K] = input[0].split(' ').map((item) => parseInt(item));
  let coins = input
    .slice(1, N + 1)
    .map((item) => parseInt(item))
    .reverse();
  let count = 0;

  for (let i = 0; i < N; i++) {
    count += Math.floor(K / coins[i]);
    K %= coins[i];
  }

  console.log(count);
  /*
  이 코드는 다음과 같이 동작합니다:
  입력을 받아와서 첫 번째 줄에서 동전의 종류 개수 N과 목표 금액 K를 파싱합니다.
  두 번째 줄부터 동전의 단위를 파싱하고, 큰 단위의 동전부터 탐색하기 위해 배열을 뒤집습니다.
  큰 단위의 동전부터 탐색하며, 해당 동전으로 목표 금액을 나눌 수 있는 만큼 count에 더하고, 목표 금액을 해당 동전의 단위로 나눈 나머지로 업데이트합니다.
  모든 동전을 탐색한 후, 필요한 동전의 총 개수인 count를 출력합니다.
  이렇게 하면 주어진 동전들로 목표 금액을 만드는 데 필요한 동전의 최소 개수를 구할 수 있습니다.
  */
}
