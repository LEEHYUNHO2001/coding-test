function solution(arr) {
  const stk = arr.reduce((acc, cur) => {
    if (acc.length === 0) {
      acc.push(cur);
    } else if (acc[acc.length - 1] === cur) {
      acc.pop();
    } else {
      acc.push(cur);
    }
    return acc;
  }, []);

  return stk.length === 0 ? [-1] : stk;
}
