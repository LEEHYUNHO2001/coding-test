function solution(M, N) {
  const cutM = M - 1;
  const cuttedPaper = Array(M).fill(N);

  return cutM + cuttedPaper.reduce((acc, cur) => acc + cur - 1, 0);
}
