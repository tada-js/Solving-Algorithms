{
  function solution(board, moves) {
    // ➊ 각 열에 대한 스택을 생성합니다.
    const lanes = [...new Array(board[0].length)].map(() => []);

    console.log([new Array(board[0].length)].map(() => []));

    // ➋ board를 역순으로 탐색하며, 각 열의 인형을 lanes에 추가합니다.
    for (let i = board.length - 1; i >= 0; i--) {
      for (let j = 0; j < board[0].length; j++) {
        if (board[i][j]) {
          lanes[j].push(board[i][j]);
        }
      }
    }

    // ➌ 인형을 담을 bucket을 생성합니다.
    const bucket = [];

    // ➍ 사라진 인형의 총 개수를 저장할 변수를 초기화합니다.
    let answer = 0;

    // ➎ moves를 순회하며, 각 열에서 인형을 뽑아 bucket에 추가합니다.
    for (const m of moves) {
      if (lanes[m - 1].length > 0) {
        // 해당 열에 인형이 있는 경우
        const doll = lanes[m - 1].pop();

        if (bucket.length > 0 && bucket[bucket.length - 1] === doll) {
          // ➏ 바구니에 인형이 있고, 가장 위에 있는 인형과 같은 경우
          bucket.pop();
          answer += 2;
        } else {
          // ➐ 바구니에 인형이 없거나, 가장 위에 있는 인형과 다른 경우
          bucket.push(doll);
        }
      }
    }

    return answer;
  }
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  );
}
{
  function solution(board, moves) {
    const lanes = new Array(board[0].length).fill().map(() => []);
    const bucket = [];
    let answer = 0;

    for (let i = board[0].length - 1; i >= 0; i--) {
      for (let j = 0; j < board[0].length; j++) {
        if (board[i][j]) {
          lanes[j].push(board[i][j]);
        }
      }
    }

    for (const x of moves) {
      if (lanes[x - 1].length !== 0) {
        const doll = lanes[x - 1].pop();

        if (bucket.length !== 0 && bucket[bucket.length - 1] === doll) {
          bucket.pop();
          answer += 2;
        } else {
          bucket.push(doll);
        }
      }
    }

    return answer;
  }
}
