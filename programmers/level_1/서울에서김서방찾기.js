const solution = (seoul) => {
  return `김서방은 ${seoul.findIndex((name) => name === 'Kim')}에 있다`;
};
solution(['Jane', 'Kim']);
