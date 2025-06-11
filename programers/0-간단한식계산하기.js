function solution(binomial) {
  const [a, op, b] = binomial.split(" ");
  return calculate(Number(a), op, Number(b));
}

function calculate(a, op, b) {
  if (op === "+") {
    return a + b;
  } else if (op === "-") {
    return a - b;
  } else if (op === "*") {
    return a * b;
  }
  return a / b;
}
