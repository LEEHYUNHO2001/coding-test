function solution(arr) {
  var answer = 0;
  arr.forEach((num) => (answer += num));
  answer /= arr.length;
  return answer;
}
