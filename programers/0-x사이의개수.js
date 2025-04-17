function solution(myString) {
  var answer = [];
  return myString.split("x").map((item) => item.length);
}
