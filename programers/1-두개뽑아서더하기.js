function solution(numbers) {
  var answer = [];
  const numbersLen = numbers.length;
  for (let i = 0; i < numbersLen; i++) {
    for (let j = 1 + i; j < numbersLen; j++) {
      const sum = numbers[i] + numbers[j];
      if (!answer.includes(sum)) {
        answer.push(sum);
      }
    }
  }
  answer.sort((a, b) => {
    return a - b;
  });
  return answer;
}
