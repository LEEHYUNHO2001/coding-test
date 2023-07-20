function solution(s) {
  let cnt = 0;
  const plus = ["p", "P"];
  const minus = ["y", "Y"];

  [...s].forEach((str) => {
    if (plus.includes(str)) cnt += 1;
    else if (minus.includes(str)) cnt -= 1;
  });

  return cnt === 0;
}
