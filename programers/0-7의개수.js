function solution(array) {
  return array
    .join("")
    .split("")
    .filter((char) => char === "7").length;
}
