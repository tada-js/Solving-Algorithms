{
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
}
{
  // 스택 사용
  function solution(numbers) {
    const stack = [...numbers];
    const result = [];

    while (stack.length > 1) {
      const num = stack.pop();
      const temp = [...stack];

      for (let i = 0; i < temp.length; i++) {
        result.push(num + temp[i]);
      }
    }

    return [...new Set(result)].sort((a, b) => a - b);
  }
}
