const score = prompt("점수를 입력하세요.").split(' ').map(v => parseInt(v));
let sum = score.reduce((a, c) => a + c);
console.log(Math.floor(sum / score.length));