function solution(n) {
  const arr = [0, 1, 2];

  function f(num) {
    if (arr[num] !== undefined) {
      return arr[num];
    }

    arr[num] = (f(num - 1) + f(num - 2)) % 1234567;
    return arr[num];
  }

  return f(n);
}
