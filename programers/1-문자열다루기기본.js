function isTrue(arr) {
  return arr.every((s) => !isNaN(+s));
}

function solution(s) {
  const arr = s.split("");

  return (arr.length === 4 || arr.length === 6) && isTrue(arr);
}
