// 2022.09.08
function solution(dartResult) {
  var answer = 0;
  let str = "";
  const bonus = ["S", "D", "T"];
  const score = [];
  for (let i = 0; i < dartResult.length; i++) {
    const char = dartResult[i];
    if (bonus.includes(char)) {
      const ex = bonus.indexOf(char) + 1;
      const number = parseInt(str);
      score.push(Math.pow(number, ex));
      str = "";
    } else if (char === "#") {
      score[score.length - 1] = -score[score.length - 1];
    } else if (char === "*") {
      const scoreLen = score.length;
      score[scoreLen - 1] = score[scoreLen - 1] * 2;
      if (scoreLen > 1) {
        score[scoreLen - 2] = score[scoreLen - 2] * 2;
      }
    } else {
      str += char;
    }
  }
  score.forEach((number) => (answer += number));
  return answer;
}

// 과거에 푼 것
function solution(dartResult) {
  var answer = [];
  var sp = dartResult.split("");
  var exp = 0;
  var str = "";

  for (let i = 0; i < sp.length; i++) {
    if (sp[i] === "S") {
      exp = 1;
      answer.push(parseInt(str) ** exp);
      str = "";
    } else if (sp[i] === "D") {
      exp = 2;
      answer.push(parseInt(str) ** exp);
      str = "";
    } else if (sp[i] === "T") {
      exp = 3;
      answer.push(parseInt(str) ** exp);
      str = "";
    } else if (sp[i] === "*") {
      if (answer.length > 1) {
        answer[answer.length - 2] = answer[answer.length - 2] * 2;
        answer[answer.length - 1] = answer[answer.length - 1] * 2;
      } else {
        answer[answer.length - 1] = answer[answer.length - 1] * 2;
      }
    } else if (sp[i] === "#") {
      answer[answer.length - 1] = answer[answer.length - 1] * -1;
    } else {
      str += String(sp[i]);
    }
  }
  answer = answer.reduce((sum, currValue) => {
    return sum + currValue;
  }, 0);
  return answer;
}
