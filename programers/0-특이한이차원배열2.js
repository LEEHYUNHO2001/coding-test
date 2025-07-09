function solution(arr) {
  return arr.every((row, rI) =>
    row.every((_, cI) => arr[rI][cI] === arr[cI][rI])
  )
    ? 1
    : 0;
}
