function solution(n) {
  return Array.from({ length: n }).map((_, i) => {
    const arr = Array.from({ length: n }).fill(0);
    arr[i] = 1;
    return arr;
  });
}
