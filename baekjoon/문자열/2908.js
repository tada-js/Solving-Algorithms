{
  let fs = require('fs');
  let input = fs.readFileSync('input.txt').toString().split('\n');
  const [a, b] = input[0].split(' ');
  const reverseA = Number(a.split('').reverse().join(''));
  const reverseB = Number(b.split('').reverse().join(''));
  console.log(reverseA > reverseB ? reverseA : reverseB);
}
{
  let fs = require('fs');
  let input = fs.readFileSync('input.txt').toString().split('\n');
  const [a, b] = input[0].split(' ');
  const reverseA = Number(a.split('').reverse().join(''));
  const reverseB = Number(b.split('').reverse().join(''));
  console.log(Math.max(reverseA, reverseB));
}
{
  let fs = require('fs');
  let input = fs.readFileSync('/dev/stdin').toString().split('\n');
  let a = input[0].split(' ')[0];
  let b = input[0].split(' ')[1];
  let newA = a[2] + a[1] + a[0];
  let newB = b[2] + b[1] + b[0];
  console.log(Math.max(Number(newA), Number(newB)));
}
