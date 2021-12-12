const score = prompt("a와 b를 입력하세요. : ").split(' ').map(v => parseInt(v));
console.log(score[0]**score[1]);