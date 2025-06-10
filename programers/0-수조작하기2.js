function solution(numLog) {
  return numLog
    .slice(1)
    .map((num, i) => {
      const diff = num - numLog[i];
      return calculate(diff);
    })
    .join("");
}

function calculate(diff) {
  switch (diff) {
    case 1:
      return "w";
    case -1:
      return "s";
    case 10:
      return "d";
    case -10:
      return "a";
    default:
      return "";
  }
}
