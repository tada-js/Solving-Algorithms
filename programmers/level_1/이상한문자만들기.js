const solution = (s) => {
  return s
    .split(' ')
    .map((value) =>
      value
        .split('')
        .map((value, idx) =>
          idx % 2 === 0 ? value.toUpperCase() : value.toLowerCase()
        )
        .join('')
    )
    .join(' ');
};
solution('try hello world');
