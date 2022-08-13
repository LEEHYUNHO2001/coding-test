function solution(num) {
  let answer = 0;
  let currentNum = num;
  const limit = 500;
  while (answer < 500 && currentNum !== 1) {
    if (currentNum % 2 === 0) {
      currentNum /= 2;
    } else {
      currentNum = currentNum * 3 + 1;
    }
    answer += 1;
  }
  if (answer === 500) answer = -1;
  return answer;
}
