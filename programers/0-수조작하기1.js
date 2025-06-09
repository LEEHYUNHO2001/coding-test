function solution(n, control) {
  return [...control].reduce((acc, cur) => (n += calculate(cur)), n);
}

function calculate(char) {
  switch (char) {
    case "w":
      return 1;
    case "s":
      return -1;
    case "d":
      return 10;
    case "a":
      return -10;
  }
}
