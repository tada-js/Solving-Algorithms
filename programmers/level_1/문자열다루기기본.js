const solution = (s) => {
  return (s.length === 4 || s.length === 6) && /^[0-9]+$/.test(s);
};
solution('a234');
solution('1234');
