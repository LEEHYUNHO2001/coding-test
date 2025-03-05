function solution(l, r) {
  const answer = Array.from(
    { length: r - l + 1 },
    (_, index) => l + index
  ).reduce((acc, num) => (isValid(num) ? [...acc, num] : acc), []);

  return answer.length === 0 ? [-1] : answer;
}

function isValid(num) {
  return num
    .toString()
    .split("")
    .every((str) => str === "5" || str === "0");
}
