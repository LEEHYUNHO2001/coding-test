const score = prompt("a와 b를 입력하세요. : ").split(' ').map(v => parseInt(v));
console.log(Math.floor(score[0] / score[1]), score[0]%score[1]);