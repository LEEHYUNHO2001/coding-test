function solution(strArr) {
  const answer = {};
  let max = 0;

  strArr.forEach((str) => {
    const strLength = str.length;
    if (answer[strLength]) {
      answer[strLength] = [...answer[strLength], str];
    } else {
      answer[strLength] = [str];
    }

    if (max < answer[strLength].length) {
      max = answer[strLength].length;
    }
  });

  return max;
}
