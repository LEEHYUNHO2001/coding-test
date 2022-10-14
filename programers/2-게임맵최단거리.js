function solution(maps) {
  // 남서북동
  const dy = [1, 0, -1, 0];
  const dx = [0, -1, 0, 1];
  const row = maps.length;
  const col = maps[0].length;
  // 1로 채워진 맵 생성
  const visited = [...maps].map((r) => r.map((c) => 1));
  // 0, 0에서 출발
  const startNode = [0, 0];
  const queue = [startNode];

  // BFS
  while (queue.length) {
    const [y, x] = queue.shift();
    // 방향마다 한번 씩 이동해보기
    for (let k = 0; k < dy.length; k++) {
      const ny = y + dy[k];
      const nx = x + dx[k];

      if (ny < 0 || nx < 0 || ny >= row || nx >= col) continue;
      if (maps[ny][nx] === 1 && visited[ny][nx] === 1) {
        visited[ny][nx] = visited[y][x] + 1;
        queue.push([ny, nx]);
      }
    }
  }
  return visited[row - 1][col - 1] === 1 ? -1 : visited[row - 1][col - 1];
}
