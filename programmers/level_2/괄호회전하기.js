function solution(s) {
  let answer = 0;

  for (let i = 0; i < s.length; i++) {
    const stack = [];
    let flag = true;

    for (let j = 0; j < s.length; j++) {
      const v = s[(i + j) % s.length];

      if (['(', '{', '['].includes(v)) {
        stack.push(v);
      } else {
        if (stack.length === 0) {
          flag = false;
          break;
        }

        const top = stack[stack.length - 1];
        if (top === '(' && v === ')') {
          stack.pop();
        } else if (top === '{' && v === '}') {
          stack.pop();
        } else if (top === '[' && v === ']') {
          stack.pop();
        } else {
          flag = false;
          break;
        }
      }
    }

    if (flag && stack.length === 0) {
      answer += 1;
    }
  }

  return answer;
}
