function solution(phone_number) {
  let answer = "*".repeat(phone_number.length - 4);
  answer += phone_number.slice(-4);
  return answer;
}

// 정규식 사용하는 방법
function hide_numbers(s) {
  return s.replace(/\d(?=\d{4})/g, "*");
}
