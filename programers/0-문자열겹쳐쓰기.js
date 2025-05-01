function solution(my_string, overwrite_string, s) {
  const myArr = my_string.split("");
  myArr.splice(s, overwrite_string.length, overwrite_string);
  return myArr.join("");
}
