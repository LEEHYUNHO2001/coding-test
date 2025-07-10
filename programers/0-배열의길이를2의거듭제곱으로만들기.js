function solution(arr) {
  const arrLength = arr.length;
  const twoArr = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024];
  const num = twoArr.filter((n) => arrLength <= n)[0];
  const zeroArr = Array.from({ length: num - arrLength }).fill(0);

  return arr.concat(zeroArr);
}
