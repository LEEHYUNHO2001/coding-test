function solution(my_string, s, e) {
  const myArr = my_string.split("");
  const reversedPiece = myArr
    .slice(s, e + 1)
    .reverse()
    .join("");
  myArr.splice(s, e - s + 1, reversedPiece);

  return myArr.join("");
}
