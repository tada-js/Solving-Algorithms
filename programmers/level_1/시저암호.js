const solution = (s, n) => {
  return s
    .split('') // 띄어쓰기 포함 구분지어 배열로 반환
    .map((value) => {
      if (value === ' ') return value; // 공백일 경우 그대로 반환
      return value.toUpperCase().charCodeAt() + n > 90 // 케이스들을 줄이기 위해서 문자를 대문자로 변환 후 아스키코드 값과 n을 더했을 때 90을 초과하는지 확인. 아스키코드에서 90은 "Z", 91은 "["에 해당하기 때문.
        ? String.fromCharCode(value.charCodeAt() + n - 26) // 90을 초과한다면 알파벳 갯수 26만큼 빼기
        : String.fromCharCode(value.charCodeAt() + n); // 90을 초과하지 않는다면 그대로 반환
    })
    .join('');
};
solution('AB', 1);
solution('z', 1);
solution('a B z', 4);
