// 시간 초과
function solution(numbers) {
  return numbers.map((cur, index, arr) => {
    const rest = arr.slice(index + 1);
    const backLargeNum = rest.find((num) => num > cur);
    return backLargeNum !== undefined ? backLargeNum : -1;
  });
}
