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

// 재귀
function solution(cards1, cards2, goal) {
  if (goal.length === 0) {
    return "Yes"; // 기저 조건: goal 배열이 모두 소진되었을 때
  }

  const word = goal[0];
  if (word === cards1[0]) {
    cards1.shift(); // cards1에서 해당 단어 사용
    return solution(cards1, cards2, goal.slice(1)); // 재귀 호출
  } else if (word === cards2[0]) {
    cards2.shift(); // cards2에서 해당 단어 사용
    return solution(cards1, cards2, goal.slice(1)); // 재귀 호출
  }

  return "No"; // 단어를 사용할 수 없는 경우
}
