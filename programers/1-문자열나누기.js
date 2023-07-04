function solution(s) {
  // let stack = [];
  // const arr = s.split('');
  // let answer = 0;
  // arr.forEach((str) => {
  //     stack.push(str);
  //     const sameLength = stack.filter((item) => item === stack[0]).length;
  //     const differentLength = stack.filter((item) => item !== stack[0]).length;
  //     if (sameLength === differentLength) {
  //         answer += 1;
  //         stack = [];
  //     }
  // });
  // if (stack.length > 0) answer += 1;
  // return answer;

  const arr = s.split("");
  const stack = [];
  let x = 0;
  let cnt = 0;
  arr.forEach((num, index) => {
    if (num === arr[x]) cnt++;
    else cnt--;
    if (cnt === 0) {
      stack.push(arr.slice(x, index + 1).join(""));
      x = index + 1;
    }
  });
  return stack.join("").length === s.length ? stack.length : stack.length + 1;
}
