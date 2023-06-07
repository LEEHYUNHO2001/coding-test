function solution(s) {
  const numbers = s.split(" ").map((number) => parseInt(number));
  let max = numbers[0];
  let min = numbers[0];
  numbers.forEach((number) => {
    if (number > max) {
      max = number;
    }
    if (number < min) {
      min = number;
    }
  });
  return `${min} ${max}`;
}
