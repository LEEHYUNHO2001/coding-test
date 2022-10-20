function solution(s, n) {
  const answer = s
    .split("")
    .map((char) => {
      if (char === " ") return char;
      const code = char.charCodeAt();
      // 소문자든 대문자든 범위를 초과할 경우
      const upperCode = char.toUpperCase().charCodeAt();

      if (upperCode + n > 90) return String.fromCharCode(code + n - 26);
      else return String.fromCharCode(code + n);
    })
    .join("");
  return answer;
}
