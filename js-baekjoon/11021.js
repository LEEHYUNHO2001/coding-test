//https://www.acmicpc.net/problem/11021
//A+B -7

const readline = require('readline')
const r1 = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

const input = []

r1.on('line', (line) => {
    input.push(line)
}).on('close', () => {
    T = Number(input[0])
    for (let i = 1; i <= T; i++){
        let a = Number(input[i].split(' ')[0])
        let b = Number(input[i].split(' ')[1])

        console.log(`Case #${i}: ${a+b}`)
    }
    process.exit();
})