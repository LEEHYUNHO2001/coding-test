function solution(d, budget) {
  let answer = 0;
  let currentBudget = budget;
  const sortedD = d.sort((a, b) => a - b);
  for (let i = 0; i < sortedD.length; i++) {
    if (sortedD[i] <= currentBudget) {
      answer += 1;
      currentBudget -= sortedD[i];
    } else {
      break;
    }
  }
  return answer;
}
