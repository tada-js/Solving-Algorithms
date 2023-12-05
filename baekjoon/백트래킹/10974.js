{
  let fs = require('fs');
  let input = fs.readFileSync('/dev/stdin').toString().split('\n');

  const N = ~~input[0];
  let arr = [];
  let visited = Array(N).fill(false);
  let selected = [];
  let answer = '';

  for (let i = 1; i <= N; i++) {
    arr.push(i);
  }

  function dfs(arr, depth) {
    if (depth === N) {
      let result = [];
      for (let i of selected) result.push(arr[i]);
      for (let x of result) answer += x + ' ';
      answer += '\n';
      return;
    }

    for (let i = 0; i < arr.length; i++) {
      if (visited[i]) continue;
      selected.push(i);
      visited[i] = true;
      dfs(arr, depth + 1);
      selected.pop();
      visited[i] = false;
    }
  }

  dfs(arr, 0);
  console.log(answer);
}
{
  let fs = require('fs');
  let input = fs.readFileSync('/dev/stdin').toString().split('\n');
  let n = Number(input[0]); // 1부터 N까지 자연수 중에서 중복 없이 N개를 고른 수열
  let arr = []; // 순열을 계산하고자 하는 원소(element)가 담긴 배열
  for (let i = 1; i <= n; i++) arr.push(i);
  let visited = new Array(n).fill(false); // 각 원소 인덱스(index)별 방문 여부
  let selected = []; // 현재 순열에 포함된 원소(element)의 인덱스
  let answer = '';
  function dfs(arr, depth) {
    if (depth == n) {
      // 모든 순열을 확인하는 부분
      let result = []; // 순열(permutation) 결과 저장 테이블
      for (let i of selected) result.push(arr[i]);
      for (let x of result) answer += x + ' '; // 계산된 순열을 실질적으로 처리하는 부분
      answer += '\n';
      return;
    }
    for (let i = 0; i < arr.length; i++) {
      // 하나씩 원소 인덱스(index)를 확인하며
      if (visited[i]) continue; // [중복을 허용하지 않으므로] 이미 처리 된 원소라면 무시
      selected.push(i); // 현재 원소 선택
      visited[i] = true; // 현재 원소 방문 처리
      dfs(arr, depth + 1); // 재귀 함수 호출
      selected.pop(); // 현재 원소 선택 취소
      visited[i] = false; // 현재 원소 방문 처리 취소
    }
  }
  dfs(arr, 0);
  console.log(answer);
}
{
  // 뤼튼 코드
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().trim();
  const N = Number(input);

  let visited = Array(N + 1).fill(false);
  let output = Array(N).fill(0);

  function dfs(depth) {
    if (depth === N) {
      console.log(output.join(' '));
      return;
    }

    for (let i = 1; i <= N; i++) {
      if (visited[i]) continue;
      visited[i] = true;
      output[depth] = i;
      dfs(depth + 1);
      visited[i] = false;
    }
  }

  dfs(0);
  /**
   * 이 문제는 주어진 N에 대해 1부터 N까지의 숫자로 이루어진 순열을 모두 출력하는 문제입니다.
   * 이 코드는 Depth-First Search(DFS)를 사용하여 모든 가능한 순열을 탐색하고, 각 단계에서 선택된 숫자를 출력 배열에 저장합니다. 각 순열이 완성될 때마다, 즉 depth가 N과 같아질 때마다 출력 배열을 출력합니다.
   * 이때 출력 배열에 저장된 숫자는 1부터 N까지의 숫자이며, 이들은 각 순열의 숫자를 나타냅니다. console.log(output.join(' '))를 이용해 배열을 공백으로 구분된 문자열로 변환하여 출력합니다.
   * 이 코드를 실행하면, 주어진 N에 대해 1부터 N까지의 숫자로 이루어진 모든 순열을 출력하게 됩니다.
   */
}
