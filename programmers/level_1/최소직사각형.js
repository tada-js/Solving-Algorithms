const solution = (sizes) => {
  const rotated = sizes.map(([width, height]) =>
    width < height ? [height, width] : [width, height]
  );

  let maxSize = [0, 0];
  rotated.forEach(([width, height]) => {
    if (width > maxSize[0]) maxSize[0] = width;
    if (height > maxSize[1]) maxSize[1] = height;
  });
  return maxSize[0] * maxSize[1];
};
solution([
  [60, 50],
  [30, 70],
  [60, 30],
  [80, 40],
]);
