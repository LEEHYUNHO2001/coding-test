function solution(numbers, target) {
  let answer = 0;

  const dfs = (sum, i) => {
    if (numbers.length === i) {
      if (sum === target) {
        answer += 1;
      }
      return answer;
    }

    dfs(sum + numbers[i], i + 1);
    dfs(sum - numbers[i], i + 1);
  };

  dfs(0, 0);

  return answer;
}
