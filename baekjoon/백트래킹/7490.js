{
  let fs = require('fs');
  let input = fs.readFileSync('/dev/stdin').toString().split('\n');

  const testCase = ~~input[0];
  let N = 0;
  let arr = [];

  function dfs(result, depth) {
    if (depth === N - 1) {
      let str = '';
      for (let i = 0; i < N - 1; i++) {
        str += arr[i] + result[i];
      }
      str += arr[N - 1] + '';
      current = eval(str.split(' ').join(''));
      if (current === 0) {
        console.log(str);
      }
      return;
    }
    for (let x of [' ', '+', '-']) {
      result.push(x);
      dfs(result, depth + 1);
      result.pop();
    }
  }

  for (let tc = 1; tc <= testCase; tc++) {
    N = ~~input[tc];
    arr = [];
    for (let i = 1; i <= N; i++) {
      arr.push(i);
    }
    dfs([], 0);
    console.log();
  }
}
