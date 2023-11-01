function solution(array, height) {
  var answer = 0;

  answer = array.filter((v) => v > height).length;

  return answer;
}
