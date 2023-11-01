const solution = (arr) => {
  return arr.filter((value, idx) => value !== arr[idx + 1]);
  // 현재요소 !== arr[다음 요소] 비교하여 같지 않은 것들을 반환
};
solution([1, 1, 3, 3, 0, 1, 1]);
