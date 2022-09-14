function oneNum(num) {
  return num.toString(2).split("0").join("").length;
}

function solution(n) {
  var answer = 0;
  const num = oneNum(n);
  let currentNum = n + 1;
  while (true) {
    if (oneNum(currentNum) === num) {
      answer = currentNum;
      break;
    }
    currentNum += 1;
  }
  return answer;
}
