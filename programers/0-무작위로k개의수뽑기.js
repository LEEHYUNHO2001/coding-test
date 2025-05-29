function solution(arr, k) {
  const answer = [];
  const answerMap = {};

  arr.some((num) => {
    if (answer.length >= k) return true;
    if (!answerMap[num]) {
      answerMap[num] = true;
      answer.push(num);
    }
  });

  const answerLength = answer.length;

  return answerLength < k
    ? [...answer, ...Array(k - answerLength).fill(-1)]
    : answer;
}
