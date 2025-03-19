function solution(arr, queries) {
  queries.forEach(([s, e, k]) => {
    arr = arr.map((num, i) =>
      s <= i && i <= e && i % k === 0 ? num + 1 : num
    );
  });

  return arr;
}
