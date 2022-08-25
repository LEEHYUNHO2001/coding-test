function solution(seoul) {
  let answer = "";
  seoul.some((ele, index) => {
    if (ele === "Kim") {
      answer = `김서방은 ${index}에 있다`;
      return true;
    }
  });
  return answer;
}
