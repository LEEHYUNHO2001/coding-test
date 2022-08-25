//https://www.acmicpc.net/problem/1110
//더하기 사이클

const readline = require('readline')
const r1 = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

r1.on('line', (line) => {
    input = Number(line)
    let num = input
    let sum
    let cnt = 0

    while(true){
        cnt++
        sum = Math.floor(num / 10) + num % 10;
        if(sum > 9){
            sum = sum % 10
        }

        num = (num % 10)*10 + sum

        if (input === num) {
            break
        }
    }
    console.log(cnt)
    r1.close()
}).on('close', () =>{
    process.exit()
})