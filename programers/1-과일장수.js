function solution(k, m, score) {
  let currentIndex = m - 1;
  let answer = 0;
  const filtered = score.sort((a, b) => b - a).filter((num) => num <= k);
  filtered.forEach((num, index) => {
    if (currentIndex <= index) {
      answer += num * m;
      currentIndex += m;
    }
  });
  return answer;
}

// function solution(k, m, score) {
//   const filtered = score.sort((a, b) => b - a).filter((num) => num <= k);

//   return filtered.reduce((acc, num, index) => {
//     if ((index + 1) % m === 0) {
//       acc += num * m;
//     }
//     return acc;
//   }, 0);
// }
