let arr = [1, 1, 2, 3];
let n = 1;

function solution(array, n) {
  var answer = 0;

  array.forEach((value) => {
    answer += value === n;
  });

  console.log(answer);
  return answer;
}

solution(arr, n);
