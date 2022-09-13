function solution(s) {
  let answer = true;
  let left = 0;
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char === "(") left += 1;
    if (char === ")") {
      if (left <= 0) {
        answer = false;
        break;
      }
      left -= 1;
    }
  }
  answer = answer && left === 0 ? true : false;
  return answer;
}
