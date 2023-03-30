function getDivisors(num) {
  const divisors = [];

  for (let currentNum = 1; currentNum <= num; currentNum++) {
    let divisor = 0;
    for (let n = 1; n <= currentNum / 2; n++) {
      if (currentNum % n === 0) {
        divisor += 1;
      }
    }
    divisors.push(divisor + 1);
  }

  return divisors;
}

function solution(number, limit, power) {
  let answer = 0;
  getDivisors(number).forEach((num) => {
    let plus = num;
    if (num > limit) plus = power;
    answer += plus;
  });
  return answer;
}
