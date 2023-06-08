function solution(a, b, n) {
  let answer = 0;

  while (n >= a) {
    const receive = Math.floor(n / a) * b;
    const rest = n % a;
    n = receive + rest;
    answer += receive;
  }

  return answer;
}
