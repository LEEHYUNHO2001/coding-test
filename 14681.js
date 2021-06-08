//https://www.acmicpc.net/problem/14681
//사분면 고르기

const readline = require('readline')
const r1 = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

input = []

r1.on('line', (line) => {
    input.push(line)
}).on('close', () => {
    const a = Number(input[0])
    const b = Number(input[1])
    let result = 0

    if (a>0 && b>0){
        result = 1
    } else if (a>0 && b<0){
        result = 4
    } else if (a<0 && b>0){
        result = 2
    } else{
        result = 3
    }
    console.log(result)
})