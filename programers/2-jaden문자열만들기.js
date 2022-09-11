// 간단한 방법
function solution(s) {
  let answer = "";

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (!s[i - 1] || s[i - 1] === " ") {
      answer += char.toUpperCase();
    } else {
      answer += char.toLowerCase();
    }
  }
  return answer;
}

//  알파벳인지 판별도 하는 로직
function solution(s) {
  var answer = "";
  const sArr = s.split(" ");
  const reg = /^[a-z|A-Z]+$/;
  let isFirst = false;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    const isWard = reg.exec(char);

    if (isWard) {
      if (!isFirst) {
        answer += char.toUpperCase();
      } else {
        answer += char.toLowerCase();
      }
    } else {
      answer += char;
    }
    isFirst = true;
    if (char === " ") {
      isFirst = false;
    }
  }
  return answer;
}
