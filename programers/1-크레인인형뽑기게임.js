function solution(board, moves) {
    var answer = [];
    var cnt = 0;
    
    for(let i=0; i < moves.length; i++){
        for(let j=0; j < board.length; j++){
            if(board[j][moves[i]-1] === 0){
                continue;
            }
            
            if(answer[answer.length - 1] === board[j][moves[i]-1]){
                answer.splice(answer.length-1, 1);
                cnt += 1
            } else{
                answer.push(board[j][moves[i]-1]) 
            }                     
            board[j][moves[i]-1] = 0;
            break;

        }
    }
    
    return cnt*2;
}