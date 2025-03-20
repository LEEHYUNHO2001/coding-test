function solution(q, r, code) {
  var answer = "";

  code.split("").forEach((str, index) => {
    if (index % q === r) {
      answer = answer + str;
    }
  });

  return answer;
}
