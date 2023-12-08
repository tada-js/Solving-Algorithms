{
  let fs = require('fs');
  let input = fs.readFileSync('/dev/stdin').toString().split('\n');

  const N = ~~input[0].split(' ')[0];
  const M = ~~input[0].split(' ')[1];

  let answer = '';
  let arr = [];
  let seleted = [];
  let visited = Array(N).fill(false);

  for (let i = 1; i <= N; i++) {
    arr.push(i);
  }

  function dfs(arr, depth, start) {
    if (depth === M) {
      let result = [];
      for (const i of seleted) {
        result.push(arr[i]);
      }
      for (const x of result) {
        answer += x + ' ';
      }
      answer += '\n';
      return;
    }

    for (let i = start; i < arr.length; i++) {
      if (visited[i]) continue;
      seleted.push(i);
      visited[i] = true;
      dfs(arr, depth + 1, i + 1);
      seleted.pop();
      visited[i] = false;
    }
  }

  dfs(arr, 0, 0);
  console.log(answer);
}
