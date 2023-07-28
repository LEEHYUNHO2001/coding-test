function solution(chicken) {
  var answer = 0;

  while (chicken >= 10) {
    const newChichken = Math.floor(chicken / 10);
    const restChichken = chicken % 10;
    answer += newChichken;
    chicken = newChichken + restChichken;
  }

  return answer;
}
