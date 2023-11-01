// ** 문제 해설 **
// 이 문제는 비트 연산을 잘 다룰 수 있는지를 묻고자 하는 의도였던 만큼 앞으로 이런 유형의 문제를 풀 때는 비트 연산을 꼭 기억하시기 바랍니다.

const solution = (n, arr1, arr2) => {
  return [...Array(n)].map((_, idx) =>
    [...(arr1[idx] | arr2[idx]).toString(2).padStart(n, ' ')]
      .map((value) => (+value ? '#' : ' '))
      .join('')
  );
};

const solution2 = (n, arr1, arr2) => {
  let arr = new Array(n).fill(0);
  return arr.map((_, idx) =>
    [...(arr1[idx] | arr2[idx]).toString(2).padStart(n, ' ')]
      .map((value) => (+value ? '#' : ' '))
      .join('')
  );
};

solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]); // expected result : ["#####","# # #", "### #", "# ##", "#####"]

solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10]); // expected result : ["######", "### #", "## ##", " #### ", " #####", "### # "]

// n을 array로 만들어준다.
// | -> 비트 OR 연산자, 대응되는 비트 중 하나라도 1이면 1을 반환.
// 비트마스크를 이용해서 | 연산자로 겹쳐진 두 지도를 구하고 2진수 문자열로 변경한다.
// 0은 빈 문자열, 1은 #으로 바꾼다.
// padStart로 0이 생략된 빈 부분을 빈 문자열로 메꾼다.
