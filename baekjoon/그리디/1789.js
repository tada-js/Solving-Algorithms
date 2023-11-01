{
  let fs = require('fs');
  let input = fs.readFileSync('/dev/stdin').toString().split('\n');

  const S = Number(input[0]);
  let count = 0;
  let sum = 0;

  while (sum <= S) {
    count += 1;
    sum += count;
  }

  console.log(count - 1);
  /**
   * 누적 값은 count, 누적 합(누적 값의 합)은 sum
   */
}
{
  // 다른 풀이
  let fs = require('fs');
  let input = fs.readFileSync('/dev/stdin').toString().split('\n');
  s = Number(input[0]);
  let sum = 0;
  let current = 0;
  while (sum <= s) {
    current += 1;
    sum += current;
  }
  console.log(current - 1);
}
{
  // 뤼튼 코드
  let fs = require('fs');
  let S = BigInt(fs.readFileSync('/dev/stdin').toString().trim());
  let sum = 0n;
  let N = 0;

  while (sum <= S) {
    N++;
    sum += BigInt(N);
  }
  console.log(N - 1);
  /*
  이 문제는 주어진 수 S를 가지고 1, 2, 3, ..., N의 형태로 나타낼 수 있는 최대 N을 찾는 문제입니다. 이런 문제는 누적합을 이용하면 간단하게 풀 수 있습니다.

  1부터 시작해서 숫자를 하나씩 더해나가서 S를 초과하게 되는 순간의 숫자를 찾으면 됩니다. 그러나 S를 정확히 초과하는 숫자는 포함되지 않으므로, 결과에서는 1을 빼줍니다.

  이 코드는 1부터 시작하여 숫자를 더해가면서 주어진 수 S를 초과하는 순간의 숫자를 찾습니다. 이때, S를 초과하는 숫자는 포함되지 않으므로 결과에서 1을 빼주어 최대 N을 출력합니다.
   */
}
