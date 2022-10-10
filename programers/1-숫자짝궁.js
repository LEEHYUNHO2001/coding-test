// 성공
function solution(X, Y) {
  let answer = "";

  const Xarr = [...X];
  const Yarr = [...Y];

  for (let i = 0; i < 10; i++) {
    const X_cnt = Xarr.filter((item) => +item === i).length;
    const Y_cnt = Yarr.filter((item) => +item === i).length;
    answer += i.toString().repeat(Math.min(X_cnt, Y_cnt));
  }

  if (answer === "") {
    return "-1";
  } else if (parseInt(answer) === 0) {
    return "0";
  } else {
    return [...answer].sort().reverse().join("");
  }
}

// 시간 초과
function commonNum(X, Y) {
  let common = "";
  const Yarr = Y.split("");
  for (let i = 0; i < X.length; i++) {
    const char = X[i];
    const idx = Yarr.indexOf(char);
    if (idx >= 0) {
      Yarr.splice(idx, 1);
      common += char;
    }
  }
  return common;
}

function solution(X, Y) {
  const smallNum = X.length >= Y.length ? Y : X;
  const bigNum = smallNum === Y ? X : Y;
  const sortSmallNum = smallNum
    .split("")
    .sort((a, b) => b - a)
    .join("");
  let common = commonNum(sortSmallNum, bigNum);
  if (common.length === 0) return "-1";
  if (common[0] === "0") return "0";
  return common;
}
