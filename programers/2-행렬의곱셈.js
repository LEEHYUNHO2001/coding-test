function solution(arr1, arr2) {
  return arr1.map((row) =>
    arr2[0].map((_, columnIndex) =>
      row.reduce(
        (acc, cur, rowIndex) => acc + cur * arr2[rowIndex][columnIndex],
        0
      )
    )
  );
}
