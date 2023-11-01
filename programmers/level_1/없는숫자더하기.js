const solution = (numbers) => {
  let valueless = 0;
  for (let i = 0; i <= 9; i++) {
    if (!numbers.includes(i)) {
      valueless += i;
    }
  }
  return valueless;
};
solution([1, 2, 3, 4, 6, 7, 8, 0]);
