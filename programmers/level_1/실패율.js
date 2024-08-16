function solution(N, stages) {
  const challenger = Array(N + 2).fill(0);
  for (const x of stages) {
    challenger[x] += 1;
  }

  const fails = {};
  let total = stages.length;
  for (let i = 1; i <= N; i++) {
    if (challenger[i] === 0) {
      fails[i] = 0;
      continue;
    }
    fails[i] = challenger[i] / total;
    total -= challenger[i];
  }

  return Object.entries(fails)
    .sort((a, b) => b[1] - a[1])
    .map((value) => Number(value[0]));
}

solution(5, [2, 1, 2, 6, 2, 4, 3, 3]);

// ➊ 스테이지별 도전자 수를 구함
// ➋ 스테이지별 실패한 사용자 수 계산
// ➌ 각 스테이지를 순회하며, 실패율 계산
// ➍ 도전한 사람이 없는 경우, 실패율은 0
// ➎ 실패율 계산
// ➏ 다음 스테이지 실패율을 구하기 위해 현재 스테이지의 인원을 뺌
// ➐ 실패율이 높은 스테이지부터 내림차순으로 정렬
// ➑ 스테이지 번호만 반환
