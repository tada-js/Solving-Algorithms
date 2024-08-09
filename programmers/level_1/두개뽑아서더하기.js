function solution(numbers) {
  const set = new Set();

  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < i; j++) {
      set.add(numbers[i] + numbers[j]);
    }
  }

  return [...set].sort((a, b) => a - b);
}
solution([5, 0, 2, 7]);
