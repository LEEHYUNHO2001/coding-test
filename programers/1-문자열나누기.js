function solution(s) {
  let stack = [];
  const arr = s.split("");
  let answer = 0;

  arr.forEach((str) => {
    stack.push(str);
    const sameLength = stack.filter((item) => item === stack[0]).length;
    const differentLength = stack.filter((item) => item !== stack[0]).length;
    if (sameLength === differentLength) {
      answer += 1;
      stack = [];
    }
  });

  if (stack.length > 0) {
    answer += 1;
  }

  return answer;
}
