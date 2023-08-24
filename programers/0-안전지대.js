function solution(board) {
  let answer = 0;
  const N = board.length;
  const boardMap = Array.from(Array(N), () => Array(N).fill(0));
  const position = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 0],
    [0, +1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];
  board.forEach((row, rI) =>
    row.forEach((c, cI) => {
      if (c === 1) {
        position.forEach((p) => {
          const newRow = rI + p[0];
          const newCol = cI + p[1];
          if (newRow >= 0 && newRow < N && newCol >= 0 && newCol < N)
            boardMap[newRow][newCol] = 1;
        });
      }
    })
  );
  boardMap.forEach((row) =>
    row.forEach((num) => {
      if (num === 0) answer += 1;
    })
  );
  return answer;
}
