function solution(arr, queries) {
  const answer = queries.map(([s, e, k], index) => {
    const transformedList = arr
      .slice(s, e + 1)
      .filter((num) => num > k)
      .sort((a, b) => a - b);
    return transformedList.length === 0 ? -1 : transformedList[0];
  });

  return answer;
}
