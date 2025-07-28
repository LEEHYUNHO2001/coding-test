function solution(topping) {
  let answer = 0;
  const leftSet = new Set();
  const rightMap = new Map();

  topping.forEach((top) => {
    rightMap.set(top, rightMap.get(top) ? rightMap.get(top) + 1 : 1);
  });

  topping.forEach((num) => {
    leftSet.add(num);
    if (rightMap.get(num) === 1) rightMap.delete(num);
    else rightMap.set(num, rightMap.get(num) - 1);
    if (leftSet.size === rightMap.size) answer += 1;
  });

  return answer;
}
