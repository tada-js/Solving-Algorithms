const solution = (s) => {
  return s.length % 2 === 0
    ? s[Math.floor(s.length / 2 - 1)] + s[Math.floor(s.length / 2)]
    : s[Math.floor(s.length / 2)];
  // console.log(s[Math.floor(s.length / 2 - 1)] + s[Math.floor(s.length / 2)]);
};
solution('abcde');
solution('qwer');
