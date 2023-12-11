{
  let fs = require('fs');
  let input = fs.readFileSync('/dev/stdin').toString().split('\n');

  const [N, M] = [input[0], input[1]].map(Number); // 정점, 간선 개수
  let cnt = -1; // 1번 컴퓨터를 개수에 포함하지 않기 때문에 -1
  let graph = [];
  let visited = Array(N + 1).fill(false);

  for (let i = 1; i <= N; i++) {
    graph[i] = [];
  }

  for (let i = 2; i <= M + 1; i++) {
    let [x, y] = input[i].split(' ').map(Number);
    graph[x].push(y);
    graph[y].push(x);
  }

  function dfs(x) {
    visited[x] = true;
    cnt += 1;
    for (y of graph[x]) {
      if (!visited[y]) {
        dfs(y);
      }
    }
  }

  dfs(1);
  console.log(cnt);
}
