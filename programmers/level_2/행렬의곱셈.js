function solution(arr1, arr2) {
  const r1 = arr1.length;
  const c1 = arr1[0].length;

  const r2 = arr2.length;
  const c2 = arr2[0].length;

  const result = [];
  for (let i = 0; i < r1; i++) {
    result.push(Array(c2).fill(0));
  }

  for (let i = 0; i < r1; i++) {
    for (let j = 0; j < c2; j++) {
      for (let k = 0; k < c1; k++) {
        result[i][j] += arr1[i][k] * arr2[k][j];
      }
    }
  }

  return result;
}

// arr1, arr2 행과 열의 수 생성
// 곱셈 결과를 저장할 2차원 배열 생성
// 행렬 곱셈 연산 결과를 2차원 배열에 할당
// 시간 복잡도는 r1/c1, r2/c2 모두 N으로 볼 수 있으므로 O(N^3)
