//테스트 13, 18 실패
function solution(n, lost, reserve) {
  let realLost = lost.filter((element) => !reserve.includes(element));
  let realReserve = reserve.filter((element) => !lost.includes(element));

  let fail = realLost.filter((lost) => {
    const lend = realReserve.find((reverse) => Math.abs(reverse - lost) == 1);

    if (!lend) return lost;
    realReserve = realReserve.filter((reverse) => reverse !== lend);
  }).length;
  return n - fail;
}
