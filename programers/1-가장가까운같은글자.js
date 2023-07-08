function solution(s) {
  const dict = {};
  const sArr = s.split("");
  const answer = sArr.map((str, index) => {
    if (dict[str] !== undefined) {
      const num = index - dict[str];
      dict[str] = index;
      return num;
    }
    dict[str] = index;
    return -1;
  });
  return answer;
}
