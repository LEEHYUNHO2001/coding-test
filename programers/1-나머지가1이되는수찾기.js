function solution(n) {
  var answer = 0;

  for (let i = 2; i < n; i++) {
    if (n % i === 1) {
      return (answer = i);
    }
  }

  return answer;
}

// 함수형 프로그래밍
// const solution = (n) =>
//   Array.from({ length: n - 2 }, (_, i) => i + 2)
//     .find((i) => n % i === 1) || 0;
