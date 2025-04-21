function solution(numbers, n) {
  let answer = 0;
  numbers.reduce((_, cur) => {
    if (answer <= n) answer += cur;
  }, 0);
  return answer;
}
