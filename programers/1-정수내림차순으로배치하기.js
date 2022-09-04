function solution(n) {
  var answer = String(n)
    .split("")
    .sort((a, b) => {
      return b - a;
    })
    .join("");
  return Number(answer);
}
