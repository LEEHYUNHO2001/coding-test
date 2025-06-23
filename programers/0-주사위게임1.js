function solution(a, b) {
  const isOddA = a % 2 === 1;
  const isOddB = b % 2 === 1;
  if (isOddA && isOddB) {
    return a ** 2 + b ** 2;
  } else if (isOddA || isOddB) {
    return 2 * (a + b);
  }

  return Math.abs(a - b);
}
