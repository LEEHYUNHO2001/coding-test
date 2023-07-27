function solution(arr) {
  if (arr.length <= 1) return [-1];
  const original = [...arr];
  const min = Math.min(...original);
  original.splice(original.indexOf(min), 1);
  return original;
}
