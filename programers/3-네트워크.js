function solution(n, computers) {
  let answer = 0;
  let visited = Array(n).fill(false);

  const dfs = (i) => {
    visited[i] = true;

    for (let item = 0; item < n; item++) {
      if (computers[i][item] === 1 && !visited[item]) {
        dfs(item);
      }
    }
  };

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(i);
      answer += 1;
    }
  }

  return answer;
}
