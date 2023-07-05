function solution(A, B) {
  const emptyArr = new Array(A.length).fill(0);
  const sortedA = A.sort((a, b) => a - b);
  const sortedB = B.sort((a, b) => b - a);
  const answerArr = emptyArr.map((_, index) => sortedA[index] * sortedB[index]);

  return answerArr.reduce((sum, currentValue) => sum + currentValue);
}
