function isSuccess(rotated) {
  const open = ["[", "{", "("];
  const close = ["]", "}", ")"];
  const stack = [];

  const result = [...rotated].every((s) => {
    const last = stack[stack.length - 1];

    if (open.includes(s)) {
      stack.push(s);
      return true;
    } else if (
      open.indexOf(last) !== -1 &&
      open.indexOf(last) === close.indexOf(s)
    ) {
      stack.pop();
      return true;
    }
    return false;
  });
  return stack.length === 0 && result;
}

function solution(s) {
  let answer = 0;

  [...s].forEach((_, i) => {
    const rotated = s.slice(i) + s.slice(0, i);
    if (isSuccess(rotated)) answer += 1;
  });

  return answer;
}
