//https://www.acmicpc.net/problem/2580
//스도쿠

const readline = require('readline');
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let input = [];
let flag = false;

r1.on('line', line => {
    input.push(line.split(' ').map(str => parseInt(str)))
}).on('close', () => {
    //0 좌표
    let zero = [];
    for(let i = 0; i < 9; i++){
        for(let j = 0; j < 9; j++){
            if(input[i][j] === 0){
                zero.push([i, j])
            }
        }
    }

    function dfs(x){
        //답이 나온 경우
        if(flag){
            return;
        }
        //마지막 0까지 다 채울 경우
        if(x === zero.length){
            for(let row of input){
                console.log(row.join(' '));
            }
            flag = true;
            return;
        } else{
            let i = zero[x][0]
            let j = zero[x][1]
            let promising = is_promising(i, j)
            //promising을 0 좌표에 하나씩 넣으며 백트랙킹
            for(let num of promising){
                input[i][j] = num;
                dfs(x + 1);
                input[i][j] = 0;
            }
        }
    }
    dfs(0)
    process.exit();
})

function isNum(num){
    let patten = /^[0-9]+$/;
    return patten.test(num) ? true : false;
}

function is_promising(i, j){
    let promising = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    //행열 검사
    for(let k = 0; k < 9; k++){
        if(isNum(input[i][k])){
            promising = promising.filter(ele => ele != input[i][k]);
        }
        if(isNum(input[k][j])){
            promising = promising.filter(ele => ele != input[k][j]);
        }        
    }

    //3*3 굵은선 박스 검사
    i = parseInt(i/3);
    j = parseInt(j/3);
    for(let p = i*3; p < (i+1)*3; p++){
        for(let q = j*3; q < (j+1)*3; q++){
            if(isNum(input[p][q])){
                promising = promising.filter(ele => ele != input[p][q]);
            }
        }
    }
    return promising;
}

