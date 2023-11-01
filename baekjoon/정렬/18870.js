{
  let fs = require('fs');
  let input = fs.readFileSync('/dev/stdin').toString().split('\n');

  let answer = '';
  const arr = input[1].split(' ').map(Number);

  const uniqueArr = [...new Set(arr)].sort((a, b) => a - b);

  let myMap = new Map();

  for (let i = 0; i < uniqueArr.length; i++) {
    myMap.set(uniqueArr[i], i);
  }

  for (const element of arr) {
    answer += myMap.get(element) + ' ';
  }

  console.log(answer);
}
{
  let fs = require('fs');
  let input = fs.readFileSync('/dev/stdin').toString().split('\n');
  let n = Number(input[0]);
  let arr = input[1].split(' ').map(Number);
  // 집합(set)으로 변경해 중복 값을 없앤 뒤에 다시 배열로 변환
  let uniqueArray = [...new Set(arr)];
  uniqueArray.sort((a, b) => a - b); // 오름차순 정렬 수행
  // 0부터 차례대로 매핑(mapping) 수행
  let myMap = new Map();
  for (let i = 0; i < uniqueArray.length; i++) {
    myMap.set(uniqueArray[i], i);
  }
  answer = '';
  for (x of arr) answer += myMap.get(x) + ' ';
  console.log(answer);
}
{
  // 뤼튼 코드
  let fs = require('fs');
  let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
  let n = Number(input[0]);
  let arr = input[1].split(' ').map(Number);

  let sortedArr = Array.from(new Set([...arr])).sort((a, b) => a - b);

  let compress = new Map();
  for (let i = 0; i < sortedArr.length; i++) {
    compress.set(sortedArr[i], i);
  }

  let result = arr.map((v) => compress.get(v)).join(' ');
  console.log(result);
}
/*
  - 자신의 인덱스 번호 = 자신보다 작은 원소의 개수
    [ -10, -9, 2, 4 ] => -10은 자신보다 작은 원소는 0개, -9는 자신보다 작은 원소는 1개(-10)...
*/
