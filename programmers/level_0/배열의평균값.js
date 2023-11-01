function solution(numbers) {
  let answer = 0;
  let result = 0;

  for (let i = 0; i < numbers.length; i++) {
    result += parseInt(numbers[i], 10);
  }

  return (answer = result / numbers.length);
}
