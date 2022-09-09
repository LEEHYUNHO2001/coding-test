function solution(n) {
  var answer = 0;
  const sqrt = Math.sqrt(n);
  answer = sqrt === parseInt(sqrt) ? Math.pow(sqrt + 1, 2) : -1;
  return answer;
}
