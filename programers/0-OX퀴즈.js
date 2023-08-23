function solution(quiz) {
  const answer = quiz
    .map((q) => q.split(" "))
    .map(([prevNum, calculation, nextNum, equal, result]) => {
      if (calculation === "+")
        return Number(prevNum) + Number(nextNum) === Number(result) ? "O" : "X";
      if (calculation === "-")
        return Number(prevNum) - Number(nextNum) === Number(result) ? "O" : "X";
    });
  return answer;
}
