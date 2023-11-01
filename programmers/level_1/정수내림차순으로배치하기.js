const solution = (n) => {
  const arr = String(n).split('');
  console.log(arr.sort((a, b) => b - a));
  return parseInt(arr.sort((a, b) => b - a).join(''), 10);
};
solution(118372);
