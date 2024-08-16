function isValidMove(nx, ny) {
  return nx >= -5 && nx <= 5 && ny >= -5 && ny <= 5;
}

function moveLocation(x, y, dir) {
  switch (dir) {
    case 'U':
      return [x, y + 1];
    case 'D':
      return [x, y - 1];
    case 'L':
      return [x - 1, y];
    case 'R':
      return [x + 1, y];
    default:
      return '잘못된 dir(moveLocation error)';
  }
}

function solution(dirs) {
  let [x, y] = [0, 0];

  const visited = new Set();

  for (const dir of dirs) {
    const [nx, ny] = moveLocation(x, y, dir);

    if (!isValidMove(nx, ny)) {
      continue;
    }

    visited.add(`${x}${y}${nx}${ny}`);
    visited.add(`${nx}${ny}${x}${y}`);

    [x, y] = [nx, ny];
  }

  return visited.size / 2;
}
