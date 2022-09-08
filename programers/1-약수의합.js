function solution(n) {
  var answer = 0;
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      const isInt = n / i;
      const plusNum = i === isInt ? i : i + isInt;
      answer += plusNum;
    }
  }
  return answer;
}
