const solution = (d, budget) => {
  d.sort((a, b) => a - b);

  while (d.reduce((a, b) => a + b, 0) > budget) d.pop();

  console.log(d.length);
  return d.length;
};
solution([1, 3, 2, 5, 4], 9);
