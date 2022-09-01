// 최근에 푼 방법
function solution(board, moves) {
  let answer = 0;
  const stack = [];

  moves.forEach((move) => {
    board.some((line, index) => {
      const doll = line[move - 1];
      const svaeLast = stack[stack.length - 1];
      if (doll) {
        if (svaeLast === doll) {
          stack.pop();
          answer += 2;
        } else {
          stack.push(doll);
        }
        board[index][move - 1] = 0;
        return true;
      }
    });
  });

  return answer;
}

// 2중 for문
function solution(board, moves) {
  var answer = [];
  var cnt = 0;

  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[j][moves[i] - 1] === 0) {
        continue;
      }

      if (answer[answer.length - 1] === board[j][moves[i] - 1]) {
        answer.splice(answer.length - 1, 1);
        cnt += 1;
      } else {
        answer.push(board[j][moves[i] - 1]);
      }
      board[j][moves[i] - 1] = 0;
      break;
    }
  }

  return cnt * 2;
}
