const n = prompt("숫자를 입력하세요 : ");
let result;
n % 3 === 0 && n != 0 ? result = '짝' : result = n;
console.log(result);