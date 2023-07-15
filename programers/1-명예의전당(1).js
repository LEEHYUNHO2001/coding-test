function solution(k, score) {
  let answer = [];
  let stack = [];
  score.forEach((num) => {
    if (stack.length < k) {
      stack.push(num);
      stack.sort((a, b) => a - b);
      answer.push(stack[0]);
    } else {
      if (stack[0] < num) {
        stack.shift();
        stack.push(num);
        stack.sort((a, b) => a - b);
        answer.push(stack[0]);
      } else {
        answer.push(stack[0]);
      }
    }
  });
  return answer;
}
