function solution(cards1, cards2, goal) {
  const answer = goal.every((str, index) => {
    if (str === cards1[0]) {
      cards1.shift();
      return true;
    } else if (str === cards2[0]) {
      cards2.shift();
      return true;
    }
    return false;
  });
  return answer ? "Yes" : "No";
}
