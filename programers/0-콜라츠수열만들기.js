function solution(n) {
  const answer = [];

  function calculate(num) {
    answer.push(num);
    if (num === 1) return 1;

    if (num % 2 === 0) calculate(num / 2);
    else calculate(3 * num + 1);
  }

  calculate(n);
  return answer;
}
