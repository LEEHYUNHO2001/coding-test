// n번째 char이 같은 경우 -> 미리 strings를 정렬 한번 해줌
function solution(strings, n) {
  var answer = [];
  const sortStrings = strings.sort();
  const sortChars = sortStrings.map((str) => str[n]).sort();
  for (let i = 0; i < sortChars.length; i++) {
    const sortChar = sortChars[i];
    for (let j = 0; j < sortStrings.length; j++) {
      const str = strings[j];
      if (str[n] === sortChar && !answer.includes(str)) {
        answer.push(str);
      }
    }
  }
  return answer;
}

// 간단하게 해결한 코드
function solution(strings, n) {
  // strings 배열
  // n 번째 문자열 비교
  return strings.sort((s1, s2) =>
    s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n])
  );
}
