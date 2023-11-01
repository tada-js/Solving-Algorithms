function solution(n) {
  var answer = 0;
  let num = String(n).split('');

  for (let i = 0; i < num.length; i++) {
    answer += parseInt(num[i], 10);
  }

  return answer;
}
