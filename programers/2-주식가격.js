// 시간 초과
function solution(prices) {
  let answer = [];
  while (prices.length) {
    const num = prices.shift();
    prices.some((n, index) => {
      if (num > n) {
        answer.push(index + 1);
        return true;
      }
      if (index === prices.length - 1) {
        answer.push(index + 1);
      }
    });
  }
  answer.push(0);
  return answer;
}
