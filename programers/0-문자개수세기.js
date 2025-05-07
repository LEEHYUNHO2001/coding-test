function solution(my_string) {
  const answer = new Array(52).fill(0);

  my_string.split("").forEach((char) => {
    const code = char.charCodeAt(0);
    return code >= 65 && code <= 90
      ? answer[code - 65]++
      : answer[26 + (code - 97)]++;
  });

  return answer;
}
