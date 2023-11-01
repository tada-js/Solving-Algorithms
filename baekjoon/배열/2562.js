{
  let fs = require('fs');
  let input = fs.readFileSync('/dev/stdin').toString().split('\n');

  const max = input.reduce((a, b) => Math.max(a, b)).toString();
  const index = input.findIndex((e) => e === max) + 1;
  console.log(max + '\n' + index);
}
{
  let fs = require('fs');
  let input = fs.readFileSync('/dev/stdin').toString().split('\n');
  let maxIndex = 0;
  let maxValue = 0;
  for (let i = 0; i < 9; i++) {
    // 모든 데이터를 하나씩 확인하며
    let data = Number(input[i]);
    if (maxValue < data) {
      maxValue = data;
      maxIndex = i;
    }
  }
  console.log(maxValue);
  console.log(maxIndex + 1);
}
{
  let fs = require('fs');
  let input = fs.readFileSync('/dev/stdin').toString().split('\n');
  let data = input.map((x) => Number(x));
  let max = Math.max(...data);
  console.log(max);
  console.log(data.indexOf(max) + 1);
}
