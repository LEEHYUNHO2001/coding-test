function solution(t, p) {
  var answer = 0;
  const tArr = t.split("");
  const tLength = t.length;
  const pLength = p.length;
  const pNum = Number(p);
  tArr.forEach((str, index) => {
    if (index > tLength - pLength) {
      return;
    }
    if (Number(tArr.slice(index, index + pLength).join("")) <= pNum) {
      answer += 1;
    }
  });
  return answer;
}
