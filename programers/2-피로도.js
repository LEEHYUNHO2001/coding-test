function solution(k, dungeons) {
  let maxCount = 0; // 최대 던전 수
  const explored = []; // 이미 탐험한 던전들의 정보를 담을 배열

  function dfs(k, count) {
    for (let i = 0; i < dungeons.length; i++) {
      const [required, used] = dungeons[i];
      if (explored.includes(i)) continue; // 이미 탐험한 던전인 경우, 중복 탐험 방지
      if (k >= required) {
        // 던전을 탐험한 뒤에는 해당 던전 정보를 배열에 추가
        explored.push(i);
        dfs(k - used, count + 1);
        // 탐험이 끝난 후에는 해당 던전 정보를 배열에서 제거
        explored.pop();
      }
    }
    // 모든 던전을 순회하고 난 후에 최대 던전 수 업데이트
    maxCount = Math.max(maxCount, count);
  }

  dfs(k, 0);

  return maxCount;
}
