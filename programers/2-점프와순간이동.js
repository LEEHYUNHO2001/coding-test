// 쉬운 방법
function solution(n) {
  let ans = 0;

  if (n === 1) return 1;

  while (n > 0) {
    ans += n % 2;
    n = Math.floor(n / 2);
  }
  return ans;
}

// 복잡한 방법
function solution(n) {
  let ans = 0;
  let num = 0;
  const jump = 1;
  let currentNum = jump;
  while (n !== num) {
    if (num + 1 === n) {
      ans += 1;
      break;
    } else if (currentNum * 2 > n - num) {
      num += currentNum;
      currentNum = jump;
      ans += 1;
    } else {
      currentNum *= 2;
    }
  }
  return ans;
}
