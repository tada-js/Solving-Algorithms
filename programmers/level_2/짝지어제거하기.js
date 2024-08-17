function solution(s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const v = s[i];
    if (stack.length && v === stack[stack.length - 1]) {
      stack.pop();
    } else {
      stack.push(v);
    }
  }

  return stack.length ? 0 : 1;
}
