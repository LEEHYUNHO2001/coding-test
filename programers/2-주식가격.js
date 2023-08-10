// function solution(prices) {
//     let answer = [];
//     while(prices.length) {
//         const num = prices.shift();
//         prices.some((n, index) => {
//             if (num > n) {
//                 answer.push(index + 1)
//                 return true
//             }
//             if (index === prices.length - 1) {
//                 answer.push(index + 1)
//             }
//         });
//     }
//     answer.push(0)
//     return answer;
// }

function solution(prices) {
  const answer = new Array(prices.length).fill(0);
  // prices의 index가 쌓일 stack
  const stack = [];

  // stack의 마지막 값 = prices에서 가장 최근에 쌓은 index
  // prices[i] < prices[stack[stack.length - 1]] = 떨어짐을 의미
  for (let i = 0; i < prices.length; i++) {
    while (stack.length && prices[i] < prices[stack[stack.length - 1]]) {
      const prevIndex = stack.pop();
      answer[prevIndex] = i - prevIndex;
    }
    stack.push(i);
  }

  while (stack.length) {
    const prevIndex = stack.pop();
    answer[prevIndex] = prices.length - 1 - prevIndex;
  }
  return answer;
}
