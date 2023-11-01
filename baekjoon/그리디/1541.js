{
  let fs = require('fs');
  let input = fs.readFileSync('/dev/stdin').toString().split('\n');
  // 뺄셈(-) 연산자를 기준으로 나누어 여러 그룹 만들기
  let groups = input[0].split('-');
  let answer = 0;
  for (let i = 0; i < groups.length; i++) {
    // 각 그룹 내부에서 덧셈(+) 연산 적용
    let cur = groups[i]
      .split('+')
      .map(Number)
      .reduce((a, b) => a + b);
    if (i == 0) answer += cur; // 첫 번째 그룹은 항상 덧셈(+)
    else answer -= cur; // 두 번째 그룹부터 뺄셈(-)
  }
  console.log(answer);
}
{
  // 뤼튼 코드
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().trim();

  let splitByMinus = input.split('-');
  let result = 0;

  for (let i = 0; i < splitByMinus.length; i++) {
    let num = splitByMinus[i]
      .split('+')
      .map(Number)
      .reduce((a, b) => a + b, 0);

    if (i === 0) result += num;
    else result -= num;
  }

  console.log(result);
  /**
   * 이 문제는 주어진 식에서 '-' 연산자를 기준으로 식을 나누고, 각 부분에서 '+' 연산을 먼저 수행하여 최소값을 구하는 문제입니다.
  
  먼저 '-'를 기준으로 식을 분할합니다. 그 다음, 각 부분에서 '+'를 기준으로 숫자를 분할하고, 그 합계를 계산합니다. 첫 번째 부분의 합계는 결과에 더하고, 그 이후의 부분의 합계는 결과에서 뺍니다. 이렇게 하면 주어진 식의 최소값을 얻을 수 있습니다.
   */
}
