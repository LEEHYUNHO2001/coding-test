function solution(arr, flag) {
  return arr.reduce(
    (acc, cur, index) =>
      flag[index]
        ? [...acc, ...Array(cur * 2).fill(cur)]
        : acc.slice(0, acc.length - cur),
    []
  );
}
