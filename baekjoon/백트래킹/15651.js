{
  let fs = require('fs');
  let input = fs.readFileSync('/dev/stdin').toString().split('\n');

  const N = ~~input[0].split(' ')[0];
  const M = ~~input[0].split(' ')[1];

  let answer = '';
  let arr = [];
  let seleted = [];

  for (let i = 1; i <= N; i++) {
    arr.push(i);
  }

  function dfs(arr, depth) {
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

    for (let i = 0; i < arr.length; i++) {
      seleted.push(i);
      dfs(arr, depth + 1);
      seleted.pop();
    }
  }

  dfs(arr, 0);
  console.log(answer);
}
