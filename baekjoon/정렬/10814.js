{
  let fs = require('fs');
  let input = fs.readFileSync('/dev/stdin').toString().split('\n');
  const n = Number(input[0]);
  const arr = [];
  const myMap = new Map();
  let answer = '';

  for (let i = 1; i <= n; i++) {
    let age = Number(input[i].split(' ')[0]);
    let name = input[i].split(' ')[1];

    arr.push([age, name]);
  }

  arr.sort((a, b) => a[0] - b[0]);

  for (const element of arr) {
    answer += element.join(' ') + '\n';
  }
  console.log(answer);
}

{
  let fs = require('fs');
  let input = fs.readFileSync('/dev/stdin').toString().split('\n');
  let n = Number(input[0]);
  let arr = [];
  for (let i = 1; i <= n; i++) {
    // 각 사람의 (나이, 이름) 정보를 입력받기
    let age = Number(input[i].split(' ')[0]);
    let name = input[i].split(' ')[1];
    arr.push([age, name]);
  }
  arr.sort((a, b) => a[0] - b[0]); // Node.js의 정렬은 기본적으로 stable
  let answer = '';
  for (let x of arr) answer += x[0] + ' ' + x[1] + '\n';
  console.log(answer);
}

{
  // 뤼튼 코드
  const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n');
  const N = parseInt(input[0]);
  let members = input.slice(1).map((line, index) => {
    let [age, name] = line.split(' ');
    return { age: parseInt(age), name, index };
  });

  members.sort((a, b) => {
    if (a.age !== b.age) {
      return a.age - b.age;
    } else {
      return a.index - b.index;
    }
  });

  console.log(
    members.map((member) => `${member.age} ${member.name}`).join('\n')
  );
}

/*
  - 자바스크립트의 sort 메서드는 stable 정렬이므로 비교하는 수가 같은 경우에는 기존에 있던 순서를 유지한다.
  
  - JavaScript에서 Array.prototype.sort() 메서드의 안정성은 버전에 따라 다릅니다.

  2019년에 출시된 ECMAScript 2019 (ES10) 사양 부터 Array.prototype.sort()는 안정 정렬(stable sort)을 보장하도록 변경되었습니다. 이전에는 JavaScript 엔진에 따라 안정성이 달랐습니다. 예를 들어, Chrome의 V8 엔진은 Chrome 70부터 안정 정렬을 사용하였지만, 다른 브라우저나 노드 버전에서는 그렇지 않을 수 있었습니다.

  따라서, 현재 사용하는 JavaScript 환경이 ES2019 이상이라면 Array.prototype.sort() 메서드는 안정 정렬을 보장합니다. 하지만 그 이전 버전이거나, 환경에 따라 다를 수 있으니 확인이 필요합니다.

  안정 정렬이란, 동일한 값에 대해 원래의 순서가 유지되는 정렬 방식을 의미합니다. 이는 정렬 후에도 동일한 값들 사이의 상대적 순서가 보존되어야 함을 의미합니다.
*/
