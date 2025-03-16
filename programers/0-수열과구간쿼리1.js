function solution(arr, queries) {
  let answer = arr;

  queries.forEach((indexList) => {
    answer = answer.map((num, answerIndex) =>
      indexList[0] <= answerIndex && answerIndex <= indexList[1] ? num + 1 : num
    );
  });

  return answer;
}
