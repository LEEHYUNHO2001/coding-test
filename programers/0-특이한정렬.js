function solution(numlist, n) {
  return numlist.sort((a, b) => compare({ a, b, n }));
}

function compare({ a, b, n }) {
  const diffA = Math.abs(n - a);
  const diffB = Math.abs(n - b);

  if (diffA === diffB) {
    return b - a; // 값이 더 큰 숫자가 앞에 오도록 정렬
  }
  return diffA - diffB; // 거리 기준 정렬
}
