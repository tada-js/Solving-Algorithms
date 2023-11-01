{
  let fs = require('fs');
  let input = fs.readFileSync('/dev/stdin').toString().split('\n');

  let N = Number(input[0]);
  let answer = 0;
  let flag = false;

  while (N >= 0) {
    if (N % 5 === 0) {
      answer += parseInt(N / 5); // n == 0 || n % 5 == 0가 아니여도 됨
      console.log(answer);
      flag = true;
      break;
    }
    N -= 3;
    answer += 1;
  }

  if (!flag) {
    console.log(-1);
  }
}
{
  let fs = require('fs');
  let input = fs.readFileSync('/dev/stdin').toString().split('\n');

  let bag = 0;
  let sugar = Number(input[0]);

  while (true) {
    if (sugar % 5 === 0) {
      bag += parseInt(sugar / 5);
      console.log(bag);
      break;
    } else if (sugar <= 0) {
      console.log(-1);
      break;
    }

    sugar -= 3;
    bag += 1;
  }
}
{
  let fs = require('fs');
  let input = fs.readFileSync('/dev/stdin').toString().split('\n');
  let n = Number(input[0]);
  let cnt = 0;
  let flag = false;
  while (n >= 0) {
    // 더 이상 반복할 수 없을 때까지 반복
    // n이 0이 되었거나, 5로 나누어 떨어지는 값인 경우
    if (n == 0 || n % 5 == 0) {
      cnt += parseInt(n / 5); // 5로 나눈 몫을 더하기
      console.log(cnt);
      flag = true;
      break;
    }
    n -= 3;
    cnt += 1;
  }
  if (!flag) {
    console.log(-1);
  }
}
{
  // 뤼튼 코드
  const fs = require('fs');
  const sugar = Number(fs.readFileSync('/dev/stdin').toString().trim());
  let bag = 0;

  let tempSugar = sugar;
  while (true) {
    if (tempSugar % 5 === 0) {
      bag += tempSugar / 5;
      console.log(bag);
      break;
    } else if (tempSugar <= 0) {
      console.log(-1);
      break;
    }
    tempSugar -= 3;
    bag++;
  }
  /*
    코드는 먼저 주어진 설탕 무게를 5로 나누려고 시도합니다. 만약 설탕 무게가 5로 나누어 떨어지면, 그 몫을 봉지 개수에 더합니다. 만약 설탕 무게가 5로 나누어 떨어지지 않으면, 설탕 무게에서 3kg을 빼고 봉지 개수를 1개 늘립니다. 이 과정을 설탕 무게가 0kg이 되거나 5kg 봉지로 나누어 떨어질 때까지 반복합니다.
   */
}
/*
  현실에서 적용할 수 있는 가장 단순한 공식을 생각해 보자.
  어떤 수를 0으로 만들어야 하는 상황에서 두 가지 연산을 사용할 수 있다.
  1. 값에서 5를 빼기
  2. 값에서 3을 빼기
  [문제 해결 아이디어] 3보다는 가능하면 5를 우선적으로 빼는 것이 효과적일 것이다.
  (3보다 5가 더 큰 수이므로 큰 수를 빼는 것이 최적의 해를 보장할 수 있다.)

  따라서,
  1) 현재 값이 5로 나누어 떨어지는 경우, 5로 나누면 될 것이다.
  2) 그렇지 않다면, 기존의 값이 5로 나누어 떨어지는 값이 될 때까지 3을 빼준 뒤에 1)을 수행한다.
 */
