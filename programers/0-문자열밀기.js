function solution(A, B) {
  let answer = 0;
  let currentStr = A;
  if (A.length !== B.length) return -1;
  if (A === B) return 0;

  const able = [...A].some((_, index) => {
    const currentArr = [...currentStr];
    const last = currentArr[currentArr.length - 1];
    currentStr = [last, ...currentArr.slice(0, currentArr.length - 1)].join("");
    if (currentStr === B) {
      answer = index + 1;
      return true;
    }
  });
  if (!able) return -1;
  return answer;
  // 오른쪽으로 밀어도 되고, 왼쪽으로 밀어도 되는데 거기서 최소 -> 문제에서 원하는게 아님
  // return answer > A.length - answer ? A.length - answer : answer
}
