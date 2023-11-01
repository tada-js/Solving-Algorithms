{
  let fs = require('fs');
  let input = fs.readFileSync('/dev/stdin').toString().split('\n');

  const data = input[0].split(' ').map(Number);
  const answer = data.sort((a, b) => a - b);
  console.log(...answer);
}
{
  let arr = input[0].split(' ').map(Number); // 오름차순 정렬 수행
  arr.sort(function (a, b) {
    return a - b;
  });
  let answer = '';
  for (let i = 0; i < arr.length; i++) {
    answer += arr[i] + ' ';
  }
  console.log(answer);

  function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
      let minIndex = i;
      for (let j = i + 1; j < arr.length; j++)
        if (arr[minIndex] > arr[j]) minIndex = j;
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }
}
{
  let fs = require('fs');
  let input = fs.readFileSync('/dev/stdin').toString().split('\n');
  let arr = input[0].split(' ').map(Number);
  selectionSort(arr);
  let answer = '';
  for (let i = 0; i < arr.length; i++) {
    answer += arr[i] + ' ';
  }
  console.log(answer);

  function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
      let minIndex = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[minIndex] > arr[j]) {
          minIndex = j;
        }
      }
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }
}
{
  let fs = require('fs');
  let input = fs.readFileSync('/dev/stdin').toString().split('\n');
  let arr = input[0].split(' ').map(Number);
  selectionSort(arr);
  let answer = '';
  for (let i = 0; i < arr.length; i++) {
    answer += arr[i] + ' ';
  }
  console.log(answer);
}
