function solution(arr, intervals) {
  return intervals.flatMap((interval) => [
    ...arr.slice(interval[0], interval[1] + 1),
  ]);
}
