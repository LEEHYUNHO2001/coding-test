//https://www.acmicpc.net/problem/2588
//곱셈

const readline = require('readline');
const r1 = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

let input = [];

r1.on('line', (line) => {
    input.push(line)
}).on('close', () => {
    const num1 = Number(input[0]);
    const num2 = Number(input[1]);

    let hundredSeatsNum2 = Math.floor(num2 / 100);
    let tenSeatsNum2 = Math.floor(num2 / 10) - (hundredSeatsNum2 * 10);
    let oneSeatsNum2 = num2 % 10;

    console.log(num1 * oneSeatsNum2);
    console.log(num1 * tenSeatsNum2);
    console.log(num1 * hundredSeatsNum2);
    console.log(num1 * num2);

    process.exit();
});