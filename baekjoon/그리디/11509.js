{
  let fs = require('fs');
  let input = fs.readFileSync('/dev/stdin').toString().split('\n');

  const N = Number(input[0]);
  const H = input[1].split(' ').map(Number);
  let arrow = new Array(1000001).fill(0);
  let answer = 0;

  for (const x of H) {
    if (arrow[x] > 0) {
      arrow[x] -= 1;
      arrow[x - 1] += 1;
    } else {
      arrow[x - 1] += 1;
      answer += 1;
    }
  }

  console.log(answer);
}
{
  const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  let input = [];
  rl.on('line', function (line) {
    input.push(line); // 콘솔 입력 창에서 줄바꿈(Enter)를 입력할 때마다 호출
  }).on('close', function () {
    let data = input[1].split(' ').map(Number); // 모든 풍선의 위치 정보 입력받기
    let result = 0;
    let arrow = new Array(1000001).fill(0); // 각 높이에 화살이 몇 개 있는지
    for (let x of data) {
      if (arrow[x] > 0) {
        // 해당 높이에 화살이 있다면
        arrow[x] -= 1;
        arrow[x - 1] += 1;
      } else {
        // 해당 높이에 화살이 없다면
        arrow[x - 1] += 1;
        result += 1; // 화살 쏘기
      }
    }
    console.log(result);
    process.exit();
  });
}
{
  // 뤼튼 코드
  let fs = require('fs');
  let input = fs.readFileSync('/dev/stdin').toString().split('\n');

  let data = input[1].split(' ').map(Number);
  let result = 0;
  let arrow = new Array(1000001).fill(0);

  for (let x of data) {
    if (arrow[x] > 0) {
      arrow[x] -= 1;
      arrow[x - 1] += 1;
    } else {
      arrow[x - 1] += 1;
      result += 1;
    }
  }

  console.log(result);
  /**
   * 이 문제는 그리디 알고리즘을 사용하여 해결할 수 있습니다. 풍선을 맞추는 과정에서, 화살이 날아갈 수 있는 최대 높이를 기록해두고, 해당 높이에 화살이 있다면 화살을 재사용하고, 없다면 새로운 화살을 쏘는 방식으로 해결할 수 있습니다.
   * 각 풍선에 대해 순회하면서, 해당 높이에 화살이 있다면 화살을 재사용하고, 없다면 새로운 화살을 쏘는 방식으로 동작합니다. 화살을 재사용하는 경우에는 해당 높이의 화살 개수를 하나 줄이고, 그 아래 높이의 화살 개수를 하나 늘립니다. 화살을 새로 쏘는 경우에는 그 아래 높이의 화살 개수를 하나 늘리고, 결과값을 하나 늘립니다. 이렇게 하여 총 필요한 화살의 개수를 구합니다.
   * 주어진 풍선의 높이(x)를 하나씩 순회하면서 다음의 작업을 수행합니다.
    if (arrow[x] > 0): 만약 현재 풍선의 높이(x)에 화살이 하나 이상 있다면, 이 화살을 사용해서 풍선을 맞춥니다. 이 경우에는 새로운 화살을 쏘지 않아도 되므로, 화살의 개수(result)는 변하지 않습니다.
    arrow[x] -= 1; arrow[x - 1] += 1;: 풍선을 맞춘 뒤 화살이 아래로 한 칸 이동하게 됩니다. 따라서 풍선의 높이에서 화살의 개수를 하나 빼고, 그 아래 높이에 화살의 개수를 하나 추가합니다.
    else { arrow[x - 1] += 1; result += 1; }: 만약 현재 풍선의 높이에 화살이 없다면, 새로운 화살을 쏴서 풍선을 맞춰야 합니다. 이 경우에는 화살의 개수(result)를 하나 늘립니다. 그리고 새로 쏜 화살은 풍선을 맞춘 뒤 아래로 한 칸 이동하므로, 그 아래 높이에 화살의 개수를 하나 추가합니다.
    결과적으로 이 코드는 각 풍선에 대해 화살이 이미 있으면 그 화살을 사용하고, 없으면 새로운 화살을 쏘는 방식으로 동작하며, 이 과정에서 필요한 화살의 총 개수를 계산합니다.
   */
}
