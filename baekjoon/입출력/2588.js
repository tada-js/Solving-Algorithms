{
  let fs = require('fs');
  let input = fs.readFileSync('/dev/stdin').toString().split('\n');
  let a = input[0];
  let b = input[1];

  let b1 = b[2]; // 1의 자리
  let b10 = b[1]; // 10의 자리
  let b100 = b[0]; // 100의 자리

  let sum = a * b;

  console.log(a * b1);
  console.log(a * b10);
  console.log(a * b100);
  console.log(sum);
}
