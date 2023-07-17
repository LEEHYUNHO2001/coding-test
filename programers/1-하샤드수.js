function solution(x) {
  const sum = String(x)
    .split("")
    .reduce((accumulator, current) => accumulator + parseInt(current), 0);
  return x % sum === 0;
}
