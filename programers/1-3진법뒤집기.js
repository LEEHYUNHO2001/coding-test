function transform(n, notation) {
  let number = n;
  const transformArr = [];
  while (number / notation > 0) {
    transformArr.push(number % notation);
    number = parseInt(number / notation);
  }
  return transformArr;
}

function solution(n) {
  let answer = 0;
  const notation = 3;
  const transformArr = transform(n, notation);
  const transformArrLen = transformArr.length;
  for (let exponent = 0; exponent < transformArrLen; exponent++) {
    answer +=
      transformArr[exponent] *
      Math.pow(notation, transformArrLen - 1 - exponent);
  }
  return answer;
}
