const solution = (arr) => {
  arr.splice(arr.indexOf(Math.min(...arr)), 1);
  return arr.length > 1 ? arr : [-1];
};

solution([4, 3, 2, 1]);
solution([10]);
