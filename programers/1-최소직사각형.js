function solution(sizes) {
  let answer = 0;
  const wallet = [0, 0];
  sizes.forEach((size) => {
    const [num1, num2] = size.sort((a, b) => a - b);
    if (num1 > wallet[0]) wallet[0] = num1;
    if (num2 > wallet[1]) wallet[1] = num2;
  });
  answer = wallet[0] * wallet[1];
  return answer;
}
