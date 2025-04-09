const LIMIT = 50;

function solution(arr) {
  return countSteps(arr);
}

function countSteps(arr, count = 0) {
  const isBreak = arr.every((num) => !isUnderOdd(num) && !isUpperEven(num));
  if (isBreak) return count;
  return countSteps(arr.map(transform), count + 1);
}

function transform(num) {
  if (isUnderOdd(num)) return num * 2 + 1;
  if (isUpperEven(num)) return num / 2;
  return num;
}

function isUnderOdd(num) {
  return num < LIMIT && num % 2 === 1;
}

function isUpperEven(num) {
  return num >= LIMIT && num % 2 == 0;
}
