function solution(arr) {
  let answer = arr;

  const itemLength = arr[0].length;
  const arrLength = arr.length;
  const diff = Math.abs(itemLength - arrLength);

  if (itemLength > arrLength) {
    const newArr = Array(itemLength).fill(0);
    Array(diff)
      .fill(0)
      .forEach(() => answer.push(newArr));
  } else if (itemLength < arrLength) {
    const newArr = Array(diff).fill(0);
    answer = arr.map((itemArr) => [...itemArr, ...newArr]);
  }

  return answer;
}
