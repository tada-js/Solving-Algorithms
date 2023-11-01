const solution = (x) => {
  const toCalc = String(x).split('').join('+');
  const sum = eval(toCalc);
  // console.log(x % sum === 0 ? true : false);
  return x % sum === 0 ? true : false;
};

solution(10);
solution(11);
