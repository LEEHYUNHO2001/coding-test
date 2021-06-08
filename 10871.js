//https://www.acmicpc.net/problem/10871
//X보다 작은 수

const readline = require('readline')
const r1 = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

const input = []

r1.on('line', (line) => {
    input.push(line)
}).on('close', () => {
    N = Number(input[0].split(' ')[0])
    X = Number(input[0].split(' ')[1])
    A = input[1].split(' ')
    result = []
    for(let i = 0 ; i < N ; i++){
        if (Number(A[i]) < X){
            result.push(Number(A[i]))
        }
    }
    console.log(result.join(' '))

})