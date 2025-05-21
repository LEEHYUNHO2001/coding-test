function solution(code) {
  let retArr = [];
  let mode = 0;

  code.split("").forEach((char, index) => {
    if (char === "1") {
      mode = mode === 1 ? 0 : 1;
      return;
    } else if (mode === 0 && index % 2 === 0) {
      retArr.push(char);
    } else if (mode === 1 && index % 2 === 1) {
      retArr.push(char);
    }
  });

  const ret = retArr.join("");

  return ret.length === 0 ? "EMPTY" : ret;
}
