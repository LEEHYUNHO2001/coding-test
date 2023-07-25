function solution(citations) {
  citations.sort((a, b) => b - a);
  let hIndex = 0;

  citations.some((num, index) => {
    if (num >= index + 1) {
      hIndex = index + 1;
      return false;
    }
    return true;
  });

  return hIndex;
}
