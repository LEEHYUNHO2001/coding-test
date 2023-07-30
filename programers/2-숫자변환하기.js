// dfs 시간 초과
// function solution(x, y, n) {
//     let answer = -1;
//     const cnt = 0;

//     function dfs(x, cnt) {
//         if (x === y) {
//             if (answer === -1) return answer = cnt;
//             else if (answer > cnt) return answer = cnt;
//         } else if (x > y) return;
//         else {
//         dfs(x + n, cnt + 1);
//         dfs(x * 2, cnt + 1);
//         dfs(x * 3, cnt + 1);
//         }
//     }
//     dfs(x, cnt)
//     return answer;
// }

// DP 현재 위치가 이전에 방문
function solution(x, y, n) {
  if (x >= y) return 0;
  const dp = Array(y + 1).fill(Infinity);
  dp[x] = 0;
  for (let i = x; i <= y; i++) {
    if (x <= i - n) dp[i] = Math.min(dp[i], dp[i - n] + 1);
    if (i % 2 === 0 && x <= i / 2) dp[i] = Math.min(dp[i], dp[i / 2] + 1);
    if (i % 3 === 0 && x <= i / 3) dp[i] = Math.min(dp[i], dp[i / 3] + 1);
  }

  return dp[y] === Infinity ? -1 : dp[y];
}

// BFS
function solution(x, y, n) {
  if (x === y) return 0;
  const dp = new Array(y + 1).fill(-1);
  dp[x] = 0;
  const queue = [x];
  while (queue.length) {
    const current = queue.shift();
    for (const next of [current + n, current * 2, current * 3]) {
      if (next <= y && dp[next] === -1) {
        dp[next] = dp[current] + 1;
        queue.push(next);
      }
    }
    if (dp[y] !== -1) return dp[y];
  }
  return -1;
}
