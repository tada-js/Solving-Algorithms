const solution = (absolutes, signs) => {
  return absolutes.reduce(
    (acc, cur, idx) => acc + cur * (signs[idx] ? 1 : -1),
    0
  );
};
solution([4, 7, 12], [true, false, true]);
