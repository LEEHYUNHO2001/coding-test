function solution(price, money, count) {
  let answer = -1;
  let total = 0;
  let currentPrice = price;
  for (let i = 0; i < count; i++) {
    currentPrice = price * (i + 1);
    total += currentPrice;
  }
  answer = total - money < 0 ? 0 : total - money;

  return answer;
}
