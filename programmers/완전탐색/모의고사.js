function solution(answers) {
  const patterns = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  const scores = [0, 0, 0];

  for (const [i, answer] of answers.entries()) {
    for (const [j, pattern] of patterns.entries()) {
      if (answer === pattern[i % pattern.length]) {
        scores[j] += 1;
      }
    }
  }

  const highScore = Math.max(...scores);
  const answer = [];

  for (const [i, score] of scores.entries()) {
    if (score === highScore) {
      answer.push(i + 1);
    }
  }

  return answer;
}

solution([1, 2, 3, 4, 5]);
