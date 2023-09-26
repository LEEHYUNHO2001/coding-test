// "Dynamic Programming"의 한 형태로, 이전 계산 결과를 활용하여
// 큰 문제를 작은 부분 문제로 나누어 해결하는 방법
// [3, 6, 7, 1]
// [7, 6, 4, 4]
// [8, 4, 4, 4]
// 7 -> 7 -> 4 처럼 위에서부터 max를 정하는게 아니라
// 아래 행에서 하나씩 돌면서,
// 위의 행에서 자신과 같은 열이 아닌 부분의 max를 구하므로
// 8 -> 6 -> 7 과 같은 형태가 나올 수 있다.

// 같은 행만 사용하는 것 같지만,
// 현재 행 기준으로 누적된 행에서
// 현재 행 인덱스를 제외한 max를 더하기 때문에
// 같은 행만 사용하는것이 아님 (그림 그려보면 이해 쉬움)
function solution(land) {
  return Math.max(
    ...land.reduce(
      (a, c) => {
        return [
          c[0] + Math.max(a[1], a[2], a[3]),
          c[1] + Math.max(a[0], a[2], a[3]),
          c[2] + Math.max(a[0], a[1], a[3]),
          c[3] + Math.max(a[0], a[1], a[2]),
        ];
      },
      [0, 0, 0, 0]
    )
  );
}

function solution(land) {
  for (let row = 1; row < land.length; row++) {
    for (let col = 0; col < 4; col++) {
      land[row][col] += Math.max(...land[row - 1].filter((_, i) => col !== i));
    }
  }
  const lastRow = land.pop();
  return Math.max(...lastRow);
}
