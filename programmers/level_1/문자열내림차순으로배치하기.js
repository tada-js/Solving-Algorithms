const solution = (s) => {
  return [...s].sort().reverse().join('');
};
solution('Zbcdefg'); // "gfedcbZ"
