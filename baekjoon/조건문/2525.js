{
  let fs = require('fs');
  let input = fs.readFileSync('input.txt').toString().split('\n');

  let [a, b] = input[0].split(' ').map(Number);
  let c = Number(input[1]);
  let totalMinute = a * 60 + b + c; // 분의 형태로 바꾸기
  totalMinute %= 1440;
  let hour = parseInt(totalMinute / 60);
  let minute = totalMinute % 60;
  console.log(hour + ' ' + minute);
}
{
  let a = Number(input[0].split(' ')[0]);
  let b = Number(input[0].split(' ')[1]);
  let c = Number(input[1]);

  let hourToMinute = a * 60 + b + c;
  hourToMinute %= 1440; // 하루 1440분만큼 나눈 나머지를 구해 24시간 초과된 분을 구함.
  console.log(hourToMinute);
  let hour = parseInt(hourToMinute / 60);
  let minute = hourToMinute % 60;
  console.log(hour + ' ' + minute);
}
