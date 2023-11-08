{
  let fs = require('fs');
  let input = fs.readFileSync('/dev/stdin').toString().split('\n');

  const K = Number(input[0].split(' ')[1]); // 팀의 수
  let N = Number(input[0].split(' ')[0]); // 공의 개수
  let sum = 0;

  for (let i = 1; i <= K; i++) {
    sum += i;
  }

  if (sum > N) {
    console.log(-1);
  } else {
    N -= sum;
    N % K === 0 ? console.log(K - 1) : console.log(K); // 남은 공들을 균등하게 분배할 수 있는지 확인
  }
  /**
   * 바구니에 담긴 공이 1,2,3,4..,K처럼 등차수열 형태로 할당이 가능한 경우는 답이 K-1, 아니면 K
   * 따라서 정답은 -1, k-1, k 중에 하나
   * N에서 sum을 뺀 값은 각 팀에 최소한 배분된 공을 제외한 남은 공의 개수
   * 남은 공들이 균등하게 분배할 수 있으면 K-1(등차수열 형태), 분배할 수 없다면 K(1, 2, 4, 5...,K)
   */
}
{
  let fs = require('fs');
  let input = fs.readFileSync('/dev/stdin').toString().split('\n');
  // 공의 개수 N과 바구니의 개수 K를 입력받기
  let n = Number(input[0].split(' ')[0]);
  let k = Number(input[0].split(' ')[1]);
  let summary = 0; // 1부터 K까지의 합
  for (let i = 1; i < k + 1; i++) {
    summary += i;
  }
  if (summary > n) {
    // 공의 개수가 부족한 경우
    console.log(-1);
  } else {
    // 공의 개수가 충분한 경우
    n -= summary;
    if (n % k == 0) console.log(k - 1); // K개에 각각 1씩 더하기
    else console.log(k);
  }
}
{
  // 뤼튼 코드
  let fs = require('fs');
  let input = fs.readFileSync('/dev/stdin').toString().split(' ');

  let N = Number(input[0]); // 공의 개수
  let K = Number(input[1]); // 팀의 수

  let sum = (K * (K + 1)) / 2; // 각 팀에 최소한 1개 이상의 공을 배분하기 위해 필요한 공의 총 개수

  if (sum > N) {
    console.log(-1);
  } else {
    N -= sum; // 각 팀에 최소한의 공들을 제외한 나머지 공들을 N에 할당
    N % K === 0 ? console.log(K - 1) : console.log(K); // 남은 공들을 균등하게 분배할 수 있는지 확인
  }

  /*
   * 위 코드는 먼저 각 팀에 최소한 1개 이상의 공을 배분하기 위해 필요한 공의 총 개수를 계산합니다. 만약 이 총 개수가 주어진 공의 개수보다 많다면, 공을 공평하게 분배할 수 없으므로 -1을 출력합니다.
    만약 총 개수가 주어진 공의 개수보다 적다면, 각 팀에 최소한의 공들을 제외한 나머지 공들을 N에 할당합니다. 그리고 이 남은 공들을 모든 팀에 균등하게 분배할 수 있는지 확인합니다. 만약 균등하게 분배할 수 있다면 (즉, N을 K로 나눈 나머지가 0이라면), 가장 많은 공을 가진 팀과 가장 적은 공을 가진 팀의 공의 개수 차이는 K - 1이 됩니다. 균등하게 분배할 수 없다면 (즉, N을 K로 나눈 나머지가 0이 아니라면), 차이는 K가 됩니다.
   * N에서 sum을 뺀 값은 각 팀에 최소한 배분된 공을 제외한 남은 공의 개수입니다. 이 남은 공들을 팀의 수(K)로 나누었을 때 나머지가 0이라면, 남은 공들을 모든 팀에 균등하게 분배할 수 있다는 뜻입니다.
    즉, 모든 팀에 남은 공을 동일하게 분배할 수 있으므로, 가장 많은 공을 가진 팀과 가장 적은 공을 가진 팀의 공의 개수 차이는 K - 1이 됩니다.
    그러나 남은 공들을 팀의 수로 나누었을 때 나머지가 0이 아니라면, 남은 공들을 모든 팀에 균등하게 분배할 수 없습니다. 이 경우에는 어느 한 팀은 다른 팀보다 더 많은 공을 가지게 됩니다. 따라서 가장 많은 공을 가진 팀과 가장 적은 공을 가진 팀의 공의 개수 차이는 K가 됩니다.
   */
}
