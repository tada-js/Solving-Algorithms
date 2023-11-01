const solution = (s) => {
  const PArr = [];
  const YArr = [];
  s.toUpperCase()
    .split('')
    .map((value) => {
      if (value === 'P') {
        PArr.push(value);
      }
      if (value === 'Y') {
        YArr.push(value);
      }
    });

  return PArr.length === YArr.length ? true : false;
};

solution('pPoooyY');
solution('Pyy');
