//https://www.acmicpc.net/problem/2439
//별 찍기 -2

const readline = require('readline')
const r1 = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

r1.on('line', (line) => {
    input = line
    let star = []

    for(let i = 0 ; i < input ; i++){
        star.push(' ')
        
    }

    for(let i = input - 1 ; i>=0 ; i--){
        star[i] = '*'
        console.log(star.join('')); 
    }

    r1.close()
}).on('close', () => {
    process.exit()
})