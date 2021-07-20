//https://www.acmicpc.net/problem/9663
//N - Queen

const readline = require('readline');
const r1 = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

r1.on('line', (line) => {
    input = Number(line);
    let N = input;
    let board = [];
    let answer = 0;

    function can_not(current_row){
        for(let Queen_row = 0; Queen_row < current_row; Queen_row++){
            //놓여진 퀸과 현재 놓을 퀸의 행과 열 같은지 체크
            if(board[Queen_row] === board[current_row]){
                return true;
            }
            //놓여진 퀸과 현재 놓을 퀸의 대각선 체크
            if(Math.abs(board[current_row] - board[Queen_row]) === current_row - Queen_row){
                return true;
            }
        }
        return false;
    }


    function findNQueen(row){
        if(row === N){
            answer++;
            return;
        }
        for(let col = 0; col < N; col++){
            board[row] = col;
            if(!can_not(row)){
                findNQueen(row+1)
            }
        }
    }

    //첫번째행을 넣고 실행
    findNQueen(0);
    console.log(answer)
    r1.close();
}).on('close', () => {
    process.exit()
})