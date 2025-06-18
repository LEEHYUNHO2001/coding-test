function solution(ineq, eq, n, m) {
  const cal = ineq + eq;

  if (cal === ">=") {
    return getAnswer(n >= m);
  } else if (cal === ">!") {
    return getAnswer(n > m);
  } else if (cal === "<=") {
    return getAnswer(n <= m);
  }

  return getAnswer(n < m);
}

function getAnswer(bool) {
  return bool ? 1 : 0;
}
