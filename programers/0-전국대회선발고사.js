function solution(rank, attendance) {
  function getRank(count, answerList) {
    if (answerList.length === 3) return answerList;
    const index = rank.indexOf(count);
    if (index !== -1 && attendance[index]) {
      return getRank(count + 1, [...answerList, index]);
    } else {
      return getRank(count + 1, answerList);
    }
  }

  const answerList = getRank(1, []);

  return 10000 * answerList[0] + 100 * answerList[1] + answerList[2];
}
