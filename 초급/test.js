let num = 5;

for(let i = 1; i <= num; i++){
    let answer = '';
    for(let j = 1; j <= num - i; j++){
        answer += ' ';
    }

    for(let s = 1; s <= i*2-1; s++){
        answer += '*';
    }
    console.log(answer);
}