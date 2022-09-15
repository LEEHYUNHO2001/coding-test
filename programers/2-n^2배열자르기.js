function solution(n, left, right) {
  const answer = [];
  for (let i = left; i <= right; i++) {
    const row = parseInt(i / n);
    const col = i % n;
    const num = row >= col ? row : col;
    answer.push(num + 1);
  }
  return answer;
}
