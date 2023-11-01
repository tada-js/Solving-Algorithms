const solution = (arr1, arr2) => {
  return arr1.map((value1, idx1) =>
    value1.map((value2, idx2) => value2 + arr2[idx1][idx2])
  );
};

solution(
  [
    [1, 2],
    [2, 3],
  ],
  [
    [3, 4],
    [5, 6],
  ]
);
