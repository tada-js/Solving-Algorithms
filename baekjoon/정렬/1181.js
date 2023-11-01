{
  // 출력 형식이 잘못된 코드
  let fs = require('fs');
  let input = fs.readFileSync('input.txt').toString().split('\n');

  const n = Number(input[0]);
  const set = new Set(input);
  set.delete(String(n));
  const arr = Array.from(set);
  let answer = '';

  function compare(a, b) {
    if (a.length < b.length) return -1;
    if (a.length > b.length) return 1;
    if (a.length === b.length) return a.localeCompare(b);
  }

  arr.sort(compare);

  for (let i = 0; i < arr.length; i++) {
    if (i === arr.length - 1) {
      answer += arr[i];
    } else {
      answer += arr[i] + '\n';
    }
  }

  console.log(answer);
}

{
  // 정답 코드 => set 과정에서 잘못된 거 같음
  let fs = require('fs');
  let input = fs.readFileSync('input.txt').toString().split('\n');

  const n = Number(input[0]);
  let arr = [];

  for (let i = 1; i <= n; i++) {
    arr.push(input[i]);
  }

  arr = [...new Set(arr)];

  let answer = '';

  function compare(a, b) {
    if (a.length < b.length) return -1;
    if (a.length > b.length) return 1;
    if (a.length === b.length) return a.localeCompare(b);
  }

  arr.sort(compare);

  for (let i = 0; i < arr.length; i++) {
    if (i === arr.length - 1) {
      answer += arr[i];
    } else {
      answer += arr[i] + '\n';
    }
  }

  console.log(answer);
}

{
  let fs = require('fs');
  let input = fs.readFileSync('/dev/stdin').toString().split('\n');
  let n = Number(input[0]); // 단어의 개수(N)와 전체 문자열 입력
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(input[i]);
  }
  // 중복된 원소를 제거하기 위해 집합(set)으로 변환한 뒤에 배열로 되돌리기
  arr = [...new Set(arr)];
  arr.sort((a, b) => {
    // 길이가 다르면 길이가 짧은 것이 우선
    if (a.length != b.length) return a.length - b.length;
    else {
      // 길이가 같으면 사전 순으로 정렬
      if (a < b) return -1;
      else if (a > b) return 1;
      else return 0;
    }
  });
  for (let x of arr) {
    // 정렬된 결과를 한 줄에 하나씩 출력
    console.log(x);
  }
}

/**
  - "arr = [...new Set(arr)];" 코드도 좋은 거 같다.
    const set = new Set(arr)
    arr = [...set] 으로 안 해도 됨.
 */
