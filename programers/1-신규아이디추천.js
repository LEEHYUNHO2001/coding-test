// 무지성 구현
function solution(new_id) {
  let answer = "";
  let one_two = new_id.toLowerCase().replace(/[^a-z0-9-_.]/g, "");
  for (let i = 0; i < one_two.length; i++) {
    if (one_two[i] === "." && one_two[i + 1] === ".") continue;
    answer += one_two[i];
  }
  if (answer[0] === ".") answer = answer.slice(1);
  if (answer.length >= 16) answer = answer.slice(0, 15);
  if (answer[answer.length - 1] === ".")
    answer = answer.slice(0, answer.length - 1);
  if (answer === "") answer = "a";
  while (answer.length <= 2) {
    answer += answer[answer.length - 1];
  }
  return answer;
}

// 정규 표현식
function solution(new_id) {
  var answer = new_id.toLowerCase();
  answer = answer.replace(/[^a-z0-9-_.]/g, "");
  answer = answer.replace(/\.{2,}/g, ".");
  answer = answer.replace(/^\.|\.$/g, "");
  answer = answer.replace(/^$/, "a");
  answer = answer.slice(0, 15).replace(/\.$/, "");
  const ans_len = answer.length;
  return ans_len <= 2
    ? answer + answer.charAt(ans_len - 1).repeat(3 - ans_len)
    : answer;
}
