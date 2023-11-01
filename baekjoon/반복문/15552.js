{
  let fs = require('fs');
  let input = fs.readFileSync('input.txt').toString().split('\n');

  let t = Number(input[0]);
  let answer = '';

  for (let i = 1; i <= t; i++) {
    let data = input[i].split(' ');
    let a = Number(data[0]);
    let b = Number(data[1]);
    answer += a + b + '\n';
  }

  console.log(answer);
}
