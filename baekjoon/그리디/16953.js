{
  let fs = require('fs');
  let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

  const [A, B] = input[0].split(' ').map(Number);
  let answer = 1;
  let tempB = B;

  while (tempB !== A && tempB !== 0) {
    if (tempB % 10 === 1) {
      tempB = ~~(tempB / 10);
      answer += 1;
    } else if (tempB % 2 === 0) {
      tempB /= 2;
      answer += 1;
    } else {
      answer = -1;
      break;
    }
  }

  if (A > tempB) {
    console.log(-1);
  } else {
    console.log(answer);
  }
}

{
  let fs = require('fs');
  let input = fs.readFileSync('/dev/stdin').toString().split('\n');
  let [a, b] = input[0].split(' ').map(Number); // A와 B 입력
  let flag = false;
  let result = 1;
  while (a <= b) {
    if (a == b) {
      flag = true;
      break;
    }
    if (b % 2 == 0) b = parseInt(b / 2); // 2로 나누어 떨어지는 경우
    else if (b % 10 == 1)
      b = parseInt(b / 10); // 그렇지 않고, 일의 자릿수가 1인 경우
    else break; // 위 경우가 모두 해당되지 않는 경우
    result++;
  }
  if (flag) console.log(result);
  else console.log(-1);
}
/**
 * 입력 예제가 3 8인 경우에는 무한 루프가 발생할 수 있으니 조건을 추가하여 해결하자.
 */

{
  // 뤼튼 코드
  let fs = require('fs');
  let input = fs
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split(' ')
    .map(BigInt);
  let A = input[0],
    B = input[1];

  let queue = [{ value: A, depth: 1 }];

  while (queue.length > 0) {
    let current = queue.shift();

    if (current.value === B) {
      console.log(current.depth);
      return;
    }

    if (current.value * 2n <= B) {
      queue.push({ value: current.value * 2n, depth: current.depth + 1 });
    }

    if (current.value * 10n + 1n <= B) {
      queue.push({ value: current.value * 10n + 1n, depth: current.depth + 1 });
    }
  }

  console.log(-1);

  /**
  해당 문제는 BFS(너비 우선 탐색) 알고리즘을 이용해서 풀 수 있습니다. A에서 B를 만드는 최소 연산 회수를 찾는 문제로, A에서 시작하여 가능한 연산(2를 곱하거나 1을 오른쪽에 추가)을 수행하며 B를 찾아나가는 방식으로 풀 수 있습니다.

  이 코드는 BFS 알고리즘을 이용하여 A에서 B를 만드는 최소 연산 회수를 찾습니다. 시작점 A를 큐에 넣고, 각 단계에서 가능한 연산을 수행한 결과를 큐에 넣습니다. 이때, 연산 결과가 B보다 크면 큐에 넣지 않습니다. 이렇게 하여 최종적으로 B를 만드는 방법이 없으면 -1을 출력하고, 있으면 해당 연산의 회수를 출력합니다.
   */
}
