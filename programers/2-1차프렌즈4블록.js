function solution(m, n, board) {
    let answer = 0;
    board = board.map((str) => str.split(''));
    
    while(true){
        
        //지워질 2*2 행열에서 왼쪽위 좌표값찾기
        const del = [];
        for(let i = 0; i < m - 1; i++){
            for(let j = 0; j < n - 1; j++){
                if(board[i][j] &&
                  board[i][j] === board[i][j+1] &&
                  board[i][j] === board[i+1][j] &&
                  board[i][j] === board[i+1][j+1]){
                    del.push([i,j]);
                }
            }
        }
        
        //지워질 값이 없을경우 board에서 0 갯수 리턴
        if(!del.length){
            console.log(board)
            return [].concat(...board).filter((v) => !v).length;
        }
        
        //del을 이용하여 지워질 2*2들 0으로 채움
        for(let i = 0; i < del.length; i++){
            let col = del[i][0];
            let row = del[i][1];
            
            board[col][row] = 0;
            board[col][row + 1] = 0;
            board[col + 1][row] = 0;
            board[col + 1][row + 1] = 0;
        }
        
        //맨 밑에줄 부터 0확인하면서 위치 바꾸기
        for(let r = m - 1; r > 0; r--){
            //해당 행에 0이 하나라도 있지 않으면 continue
            if(!board[r].some((v) => !v)) continue;
            
            for(let i = 0; i < n; i++){
                for(let j = r - 1; j >= 0 && !board[r][i]; j--){
                    if(board[j][i]){
                        board[r][i] = board[j][i];
                        board[j][i] = 0;
                        break;
                    }
                }
            }
        }
        
        
    }
    
}