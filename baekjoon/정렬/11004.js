{
  let fs = require('fs');
  let input = fs.readFileSync('/dev/stdin').toString().split('\n');

  const k = Number(input[0].split(' ')[1]);
  const arr = input[1]
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b);

  console.log(arr[k - 1]);
}
{
  let fs = require('fs');
  let input = fs.readFileSync('/dev/stdin').toString().split('\n');
  let [n, k] = input[0].split(' ').map(Number);
  let arr = input[1].split(' ').map(Number);
  // 오름차순 정렬 수행
  arr.sort(function (a, b) {
    return a - b;
  });
  // 앞에서부터 K번째 수를 출력
  console.log(arr[k - 1]);
}

/**
- 본 문제는 시간 복잡도 𝑂(𝑁2)의 정렬 알고리즘으로는 시간 초과를 받는다. => 선택, 삽입, 버블 정렬 같이 N2 정렬 알고리즘은 시간 초과. NlogN을 보장하는 sort 메서드를 사용해야 됨.
- sort()는 시간 복잡도 𝑂 𝑁𝑙𝑜𝑔𝑁 을 보장한다.
 */
