{
  let fs = require('fs');
  let input = fs.readFileSync('input.txt').toString().split('\n');

  let n = Number(input[0]);

  if (n >= 1 && n <= 9) {
    for (let i = 1; i <= 9; i++) {
      console.log(`${n} * ${i} = ${n * i}`);
    }
  } else {
    throw new Error('N은 1보다 크거나 같고, 9보다 작거나 같습니다.');
  }
}
{
  let fs = require('fs');
  let input = fs.readFileSync('/dev/stdin').toString().split('\n');
  // 문자열을 수로 변환할 때 parseInt에 비하여 Number의 속도가 더 빠르게 동작
  let n = Number(input[0]);
  for (let i = 1; i <= 9; i++) {
    // 템플릿 리터럴을 사용해 문자열 내부에 변수를 포함합니다. (백틱 문자 사용)
    console.log(`${n} * ${i} = ${n * i}`);
  }
}
