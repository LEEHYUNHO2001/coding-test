function solution(board, k) {
  return board.reduce((total, row, i) => {
    return (
      total +
      row.reduce((rowSum, val, j) => {
        return i + j <= k ? rowSum + val : rowSum;
      }, 0)
    );
  }, 0);
}
