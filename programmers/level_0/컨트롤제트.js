{
  function solution(s) {
    const stack = [];
    const input = s.split(' ');
    let answer = 0;

    for (const x of input) {
      if (x !== 'Z') {
        stack.push(Number(x));
      } else {
        stack.pop();
      }
    }

    for (const x of stack) {
      answer += x;
    }

    return answer;
  }

  solution('1 2 Z 3');
}
