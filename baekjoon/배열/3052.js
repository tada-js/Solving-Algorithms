{
  let fs = require('fs');
  let input = fs.readFileSync('/dev/stdin').toString().split('\n');

  let data = input.map(Number);
  let remainder = new Set();

  for (let i = 0; i < 10; i++) {
    remainder.add(data[i] % 42);
  }

  console.log(remainder.size);
}
{
  let fs = require('fs');
  let input = fs.readFileSync('/dev/stdin').toString().split('\n');

  let data = input.map(Number);
  let remainder = new Set();

  for (let x of data) {
    remainder.add(x % 42);
  }

  console.log(remainder.size);
}
{
  let fs = require('fs');
  let input = fs.readFileSync('/dev/stdin').toString().split('\n');
  let data = input.map(Number);
  let mySet = new Set(); // 집합 객체 생성
  // 원소를 하나씩 확인하며
  for (let i = 0; i < 10; i++) {
    mySet.add(data[i] % 42); // 42로 나눈 나머지를 집합의 원소로 삽입
  }
  // 집합에 포함된 원소의 개수 출력
  console.log(mySet.size);
}
