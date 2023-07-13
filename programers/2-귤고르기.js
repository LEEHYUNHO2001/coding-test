function solution(k, tangerine) {
  let answer = 0;
  const sumDict = {};
  tangerine.forEach((num) =>
    sumDict[num] ? (sumDict[num] += 1) : (sumDict[num] = 1)
  );
  let sortedSumArr = Object.values(sumDict).sort((a, b) => b - a);
  sortedSumArr.some((num) => {
    if (k > 0) {
      k -= num;
      answer += 1;
      return false;
    }
    return true;
  });
  return answer;
}
