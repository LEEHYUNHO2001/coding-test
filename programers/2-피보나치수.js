function solution(n) {
  const answer = [];

  for (let i = 0; i <= n; i++) {
    if (i === 0 || i === 1) {
      answer.push(i);
    } else {
      const F = answer[i - 2] + answer[i - 1];
      answer.push(F % 1234567);
    }
  }

  return answer[n];
}
